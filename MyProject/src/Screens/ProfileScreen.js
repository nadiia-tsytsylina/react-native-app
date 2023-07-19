import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageBg from '../Images/BG-image.jpg';
import UserPhoto from '../Images/user-photo.jpg';
import DeleteIcon from '../Images/delete-icon.png';
import AddIcon from '../Images/add-icon.png';
import LogOutIcon from '../Images/log-out.png';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate('Login');
  };

  const [userPhoto, setUserPhoto] = useState(true);

  const onAddPhoto = () => {
    setUserPhoto(!userPhoto);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBg} style={styles.image} resizeMode="cover">
        <View style={styles.profileContainer}>
          {/* <View style={styles.accountImage}>
            {userPhoto && <Image source={UserPhoto} style={styles.userPhoto} />}
            <Pressable style={styles.addBtn} onPress={onAddPhoto}>
              {!userPhoto && <Image source={AddIcon} style={styles.icon} />}
              {userPhoto && <Image source={DeleteIcon} style={styles.icon} />}
            </Pressable>
          </View>
          <Pressable style={styles.logOutBtn} onPress={onLogout}>
            <Image source={LogOutIcon} style={styles.icon} />
          </Pressable> */}
          <Text style={styles.userName}>Natali Romanova</Text>
        </View>
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
  profileContainer: {
    position: 'relative',
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  accountImage: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    position: 'relative',
    bottom: 150,
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
  logOutBtn: { position: 'absolute', top: 22, left: 320 },
  userName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
  },
});
