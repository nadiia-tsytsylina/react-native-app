import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUser, getPosts } from '../redux/selectors';
import Post from '../Components/Post';
import UserPhoto from '../Images/user-photo.jpg';

export default function PostScreen() {
  const user = useSelector(getUser);
  const posts = useSelector(getPosts);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.accountView}>
        <Image source={UserPhoto} style={styles.userImg} />
        <View style={styles.textView}>
          <Text style={styles.userLogin}>{user.login}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.mainPostContainer}>
        {posts.map((post) => {
          return <Post post={post} />;
        })}
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
    paddingRight: 16,
  },
  accountView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
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
  mainPostContainer: {
    marginBottom: 20,
  },
});
