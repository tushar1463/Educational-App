import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#513174',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -110,
    marginHorizontal: 0,
    width: '90%'
  },
  allSubjects: {
    flex: 1,
    marginVertical: 25,
  },
  mathematics: {
    height: 180,
    width: 400,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 20,
    marginVertical: 10,
    left: -50,
  },
  physics: {
    height: 180,
    width: 380,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 20,
    marginVertical: -30,
    left: -60,
  },
  chemistry: {
    height: 180,
    width: 360,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    marginVertical: -10,
    left: -70,
  },
  reasoning: {
    height: 180,
    width: 340,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    marginVertical: -10,
    left: -80,
  },
  subjectText: {
    color: 'white',
    fontSize: 30,
    paddingRight: 50,
    marginTop: 70
  },
});

type Subject = {
  id: string;
  name: string;
  colors: string[];
  style: object;
  image: any,
};

const subjectsData: Subject[] = [
  { id: '1', name: 'Mathematics', colors: ['#548AD8', '#8A4BD3'], style: [styles.mathematics, ], image: require('../assets/maths_bg.png') },
  { id: '2', name: 'Physics', colors: ['#893E9C', '#F82B73'], style: styles.physics, image: require('../assets/phy_bg.png') },
  { id: '3', name: 'Chemistry', colors: ['#F33E62', '#F79334'], style: styles.chemistry, image: require('../assets/che_bg.png') },
  { id: '4', name: 'Reasoning', colors: ['#D39646', '#CCCCCD'], style: styles.reasoning, image: require('../assets/rea_bg.png') },
];

export default function Subjects() {
  
  const renderItem = ({ item }: { item: Subject }) => (
    <TouchableOpacity activeOpacity={1}>
      <LinearGradient colors={item.colors} style={item.style} locations={[0.1, 1]} start={{ x: 0.1, y: 0.1 }}>
        <Text style={styles.subjectText}>{item.name}</Text>
        <Image source={item.image}
        style={styles.img}
        />
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../assets/BG.png')} />
      <View style={styles.allSubjects}>
        <FlatList
          data={subjectsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
