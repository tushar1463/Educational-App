import { Keyboard, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState, } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function FAQ() {
  const navigation = useNavigation();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
        navigation.setOptions({ tabBarVisible: false });
      }
    );
    const keyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
        navigation.setOptions({ tabBarVisible: true });
      }
    );

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [navigation]);

  return (
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <View style={[styles.container]}>

        <View style={[styles.textContainer, { marginHorizontal: 22, marginVertical: 8 }]}>
          <Text style={styles.textStyle}>
            Type your question below or click a picture and get answered in less than 30 minutes
          </Text>
        </View>
        <View style={[styles.textInputContainer, { marginHorizontal: 22, marginVertical: 8 }]}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder=''
            />
            <EvilIcons name='camera' size={30} style={styles.icon} />
          </View>
        </View>
        {isKeyboardVisible && (
          <View style={[styles.subjectContainer, { marginHorizontal: 22, marginVertical: 8 }]}>
            <View style={styles.headingCont}>
              <Text style={styles.headingText}>Subjects</Text>
            </View>
            <View style={styles.allSubjects}>
              <LinearGradient colors={['#548AD8', '#8A4BD3']} style={styles.commonStyle}>
                <Text style={styles.maths}>Mathematics</Text>
              </LinearGradient>
              <LinearGradient colors={['#F33E62', '#F79334']} style={styles.commonStyle}>
                <Text style={styles.chemistry}>Chemistry</Text>
              </LinearGradient>
              <LinearGradient colors={['#893E9C', '#F82B73']} style={styles.commonStyle}>
                <Text style={styles.physics}>Physics</Text>
              </LinearGradient>
              <LinearGradient colors={['#D39646', '#CCCCCD']} style={styles.commonStyle}>
                <Text style={styles.reasoning}>Reasoning</Text>
              </LinearGradient>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: 'black' }}>Frequently asked questions:</Text>
              <View style={styles.frequently}>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: '400' }}>The average of first 50 natural numbers?</Text>
                <Entypo name='chevron-right' size={25} color='black' style={styles.iconGreater} />
              </View>
            </View>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    fontFamily: 'ROBOTO',
  },
  textContainer: {
    marginTop: 20,
    width: '90%'
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    position: 'relative',
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 18,
    top: '25%',
  },
  headingCont: {
    padding: 4,
  },
  headingText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  subjectContainer: {
    marginTop: 20,
  },
  allSubjects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  commonStyle: {
    margin: 5,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  maths: {
    color: 'white',
    fontSize: 20,
  },
  chemistry: {
    color: 'white',
    fontSize: 20,
  },
  physics: {
    color: 'white',
    fontSize: 20,
  },
  reasoning: {
    color: 'white',
    fontSize: 20,
  },
  frequently: {
    flexDirection: 'row',
    margin: 30,
    marginBottom: 50,
    marginLeft: 20,
  },
  iconGreater: {
    marginRight: -10,
    color: 'black',
    position: 'absolute',
    right: 0,
    fontWeight: 'bold',
  }
});
