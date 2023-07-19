import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
} from 'react-native';
import { useState } from 'react';
import Camera from '../Images/camera.png';
import Map from '../Images/map-pin.png';

export default function CreatePostScreen() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset="-260"
        >
          <View style={styles.imageContainer}>
            <Image source={Camera} style={styles.cameraImg} />
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.inputBox}></View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              inputMode="text"
            ></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Image source={Map} />
            <TextInput
              style={styles.input}
              onChangeText={setPlace}
              value={place}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              inputMode="text"
            ></TextInput>
          </View>
          <Pressable
            style={styles.mainBtn}
            onPress={() => Alert.alert('clicked')}
          >
            <Text style={styles.mainBtnText}>Опубліковати</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    height: 240,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  cameraImg: {
    width: 24,
    height: 24,
  },
  text: {
    marginTop: 8,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  inputBox: {
    marginTop: 32,
    marginBottom: 16,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  input: {
    width: '100%',
    height: 50,
    fontStyle: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
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
});
