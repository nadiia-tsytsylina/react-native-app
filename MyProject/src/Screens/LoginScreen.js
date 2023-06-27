import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageBg from '../Images/BG-image.jpg';

export default function LoginScreen() {
  const navigation = useNavigation();
  // const {
  //   params: { userLogin, userEmail, userPassword },
  // } = useRoute();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const onLogin = () => {
    Alert.alert(`Welcome, ${email}`);
    // console.log(`email: ${email}, password: ${password}`);
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBg} style={styles.image} resizeMode="cover">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset="-200"
          >
            <View style={styles.loginContainer}>
              <Text style={styles.title}>Увійти</Text>
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

              <Pressable style={styles.mainBtn} onPress={onLogin}>
                <Text style={styles.mainBtnText}>Увійти</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.bottomText}>
                  Немає акаунту?{' '}
                  <Text style={styles.registrationText}>Зареєструватися</Text>
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginContainer: {
    position: 'relative',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 111,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    fontStyle: 'Roboto-Regular',
    fontSize: 16,
  },
  inputPassword: {
    width: '70%',
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
    width: 343,
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
  registrationText: {
    textDecorationLine: 'underline',
  },
});
