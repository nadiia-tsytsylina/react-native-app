import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Pressable, Image, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostScreen from './PostsScreen';
import CreatePostScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import LogOutIcon from '../Images/log-out.png';
import GoBackIcon from '../Images/go-back.png';

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
      initialRouteName="PostScreen"
      backBehavior="order"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FF6C00',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 50,
          paddingLeft: 60,
          paddingRight: 60,
          shadowColor: 'rgba(0,0,0,0.3)',
        },
        // tabBarButton: (props) => <TabButton {...props} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === 'PostScreen') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (routeName === 'CreatePostScreen') {
            iconName = focused ? 'add' : 'add-outline';
          } else if (routeName === 'ProfileScreen') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: 'Публікації',
          headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.3)',
            height: 88,
          },
          headerTintColor: '#212121',
          headerTitleStyle: {
            marginLeft: 110,
            fontFamily: 'Roboto-Medium',
            fontSize: 22,
          },
          headerRight: () => (
            <Pressable
              style={styles.logOutBtn}
              onPress={() => console.log('pressed')}
            >
              <Image source={LogOutIcon} style={styles.icon} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{
          title: 'Створити публікацію',
          headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.3)',
            height: 88,
          },
          headerTintColor: '#212121',
          headerTitleStyle: {
            marginLeft: 25,
            fontFamily: 'Roboto-Medium',
            fontSize: 22,
          },
          headerLeft: () => (
            <Pressable
              style={styles.goBackBtn}
              onPress={() => console.log('pressed')}
            >
              <Image source={GoBackIcon} style={styles.icon} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{}}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  logOutBtn: {
    marginRight: 10,
  },
  goBackBtn: {
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
