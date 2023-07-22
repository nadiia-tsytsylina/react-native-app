import {
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
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const onLogin = () => {
    Alert.alert(`Welcome, ${email}`);
    navigation.navigate('Home');
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? '-250' : '-250'}
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
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  loginContainer: {
    width: '100%',
    height: 489,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
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
    borderWidth: 1,
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
