import { Image, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation'
import HomeScreen from './components/HomeScreen';
import Subjects from './components/Subjects';
import FAQ from './components/FAQ';
import {useKeyboard} from './Hooks/useKeyboard'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const UserImage = () => (
  <View style={styles.container}>
    <Ionicons name='notifications-outline' size={25} color='#000000' />
    <Image
      style={styles.image}
      source={require('./assets/userimage.png')}
    />
  </View>
)

const UserImageSubjects = () => (
  <View style={styles.container}>
    <Ionicons name='notifications-outline' size={25} color='#ffffff' />
    <Image
      style={styles.image}
      source={require('./assets/userimage.png')}
    />
  </View>
)

const TabNav = () => {
  const isKeyboardVisible = useKeyboard();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#495ECA',
        tabBarInactiveTintColor: '#7B7B7D',
        tabBarStyle: {
          display: isKeyboardVisible ? 'none' : 'flex',
          height: 70
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold', 
          marginTop: -10,
          marginBottom: 5
        },
        headerTitle: () => <Ionicons name='menu' size={25} color='#000000' />,
        headerRight: () => <UserImage />,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name='home' size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Subjects'
        component={Subjects}
        options={{
          tabBarActiveTintColor: '#ffffff',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
              <Feather name="book-open" size={30} color={color} />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: -10,
            marginBottom: 12,
          },
          // tabBarStyle: {
          //   height: 70,
          //   margin: 10,
          //   borderRadius: 25,
          // },
          headerStyle: {
            backgroundColor: '#513174',
            height: 100,
          },
          headerTitle : () => <Ionicons name='menu' size={25} color='#ffffff' />,
          headerRight: () => <UserImageSubjects />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="FAQ's"
        component={FAQ}
        options={{
          tabBarIcon: ({ color }) => (
            // <Fontisto name='question' size={35} color={color} />
            <Image source={require('./assets/Vector.png')} 
            style={{height: 25, width: 25, tintColor: '#000000'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
    <StatusBar hidden={true} />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerTitle: () => <Ionicons name='menu' size={20} color='#000000' />,
          // headerRight: () => <UserImage />,
          headerShown: false,
        }}
      >
        <Stack.Screen name='Tab' component={TabNav} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Subjects' component={Subjects}
        options={{
          // headerStyle: {
          //   backgroundColor: '#000'
          // },
          // headerTitleStyle: { color: '#fff' },
          // headerShown: true,
        }} 
        />
        <Stack.Screen name='Faqs' component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  activeIconContainer: {
    width: 120,
    height: 50,
    backgroundColor: '#495ECA',
    borderRadius: 320,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 8,
  },
  iconContainer: {}
})