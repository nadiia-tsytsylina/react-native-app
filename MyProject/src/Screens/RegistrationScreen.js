import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useState } from 'react';
import AddIcon from '../Images/add-icon.png';
import DeleteIcon from '../Images/delete-icon.png';
import UserPhoto from '../Images/user-photo.jpg';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authRegister } from '../redux/operations';

export default function RegistrationScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [userPhoto, setUserPhoto] = useState(false);

  const onRegistrate = () => {
    dispatch(authRegister({ login, email, password }));
    Alert.alert(`${login}, thank you for registration`);
    navigation.navigate('Home');
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onAddPhoto = () => {
    setUserPhoto(!userPhoto);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? '-320' : '-320'}
        >
          <View style={styles.registrationContainer}>
            <View style={styles.accountImage}>
              {userPhoto && (
                <Image source={UserPhoto} style={styles.userPhoto} />
              )}
              <Pressable style={styles.addBtn} onPress={onAddPhoto}>
                {!userPhoto && <Image source={AddIcon} style={styles.icon} />}
                {userPhoto && <Image source={DeleteIcon} style={styles.icon} />}
              </Pressable>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setLogin}
                value={login}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                inputMode="text"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                inputMode="email"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputPassword}
                onChangeText={setPassword}
                value={password}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                inputMode="text"
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
              />
              <Pressable onPress={toggleShowPassword}>
                {passwordVisibility && (
                  <Text style={styles.showPasswordText}>Показати</Text>
                )}
                {!passwordVisibility && (
                  <Text style={styles.showPasswordText}>Сховати</Text>
                )}
              </Pressable>
            </View>

            <Pressable style={styles.mainBtn} onPress={onRegistrate}>
              <Text style={styles.mainBtnText}>Зареєструватися</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.bottomText}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  registrationContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    alignItems: 'center',
  },
  accountImage: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    bottom: 496,
    borderRadius: 16,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addBtn: { position: 'absolute', top: 81, left: 107 },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: '100%',
    fontStyle: 'Roboto-Regular',
    fontSize: 16,
  },
  inputPassword: {
    width: '70%',
    height: '100%',
    fontStyle: 'Roboto-Regular',
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    borederWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  showPasswordText: {
    fontSize: 16,
    color: '#1B4371',
  },
  mainBtn: {
    alignItems: 'center',
    width: '100%',
    padding: 16,
    fontStyle: 'Roboto-Regular',
    fontSize: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 27,
  },
  mainBtnText: {
    fontSize: 16,
    color: '#ffffff',
  },
  bottomText: {
    color: '#1B4371',
    fontStyle: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 16,
  },
});
