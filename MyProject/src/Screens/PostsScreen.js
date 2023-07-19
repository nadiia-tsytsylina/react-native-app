import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import UserPhoto from '../Images/user-photo.jpg';

export default function PostScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.accountView}>
        <Image source={UserPhoto} style={styles.userImg} />
        <View style={styles.textView}>
          <Text style={styles.userLogin}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingLeft: 16,
  },
  accountView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    marginLeft: 8,
  },
  userImg: {
    width: 60,
    height: 60,
  },
  userLogin: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
  },
  userEmail: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
});
