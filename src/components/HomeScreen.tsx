import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={{ height: '100%', width: '100%', position: 'absolute' }}
                source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
            />
            {/* Heading */}
            <View style={{marginHorizontal: 22, marginVertical: 8}}>
                <Text style={styles.heading}>Hi Rohan,</Text>
                <View>
                    <Text style={styles.textHeading}>You have <Text style={styles.textHighlight}>4 pending test </Text>
                        this week
                    </Text>
                </View>
            </View>
            {/* point box */}
            <View style={{marginHorizontal: 22, marginVertical: 8}}>
                <LinearGradient colors={['#2F68D7', '#495ECA', '#C05AFF']} style={styles.pointContainer} locations={[0.3, 0.6, 1]} start={{ x: 0.1, y: 0.1 }} end = {{ x: 0.6, y: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.threeHundred}>300</Text>
                        <Text style={styles.points}>Points</Text>
                    </View>
                    <Text style={styles.pointText}>Cross 500 within the week to get a free One on One Class.</Text>
                    <TouchableOpacity style={styles.testBtn} activeOpacity={0.8}>
                        <Text style={styles.btnText}>Take test now</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            {/* pending test */}
            <View style={[styles.pendingConatiner, {marginHorizontal: 22, marginVertical: 8}]}>
                <View style={styles.headingCont}>
                    <Text style={styles.headingText}>4 Pending tests
                        <Text> <Feather name='info' size={20} color='#D42A2A' /></Text>
                    </Text>
                </View>
                <View style={styles.testMotion}>
                    <View style={styles.physicsTest}>
                        <Text style={styles.testHeading}>Law of Motion</Text>
                        <Text style={styles.testSubPh}>Physics<Text> </Text>
                            <Text style={styles.timeIcon}>
                                <AntDesign name='clockcircleo' size={10} color='#D42A2A' /><Text style={styles.testTime}> 1d:10Hr</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.physicsTest}>
                        <Text style={styles.testHeading}>Law of Motion</Text>
                        <Text style={styles.testSubCh}>Chemistry<Text> </Text>
                            <Text style={styles.timeIcon}>
                                <AntDesign name='clockcircleo' size={10} color='#D42A2A' /><Text style={styles.testTime}> 1d:10Hr</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.physicsTest}>
                        <Text style={styles.testHeading}>Law of Motion</Text>
                        <Text style={styles.testSubMt}>Maths<Text> </Text>
                            <Text style={styles.timeIcon}>
                                <AntDesign name='clockcircleo' size={10} color='#D42A2A' /><Text style={styles.testTime}> 1d:10Hr</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.physicsTest}>
                        <Text style={styles.testHeading}>Law of Motion</Text>
                        <Text style={styles.testSubPh}>Physics<Text> </Text>
                            <Text style={styles.timeIcon}>
                                <AntDesign name='clockcircleo' size={10} color='#D42A2A' /><Text style={styles.testTime}> 1d:10Hr</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
            {/* Subjects */}
            <View style={[styles.subjectContainer, {marginHorizontal: 22, marginVertical: 8}]}>
                <View style={styles.headingCont}>
                    <Text style={styles.headingText}>Subjects</Text>
                </View>
                <View style={styles.allSubjects}>
                    <LinearGradient colors={['#548AD8', '#8A4BD3']} style={styles.commonStyle} >
                        <Text style={styles.maths}>Mathematics</Text>
                    </LinearGradient>
                    <LinearGradient colors={['#F33E62', '#F79334']} style={styles.commonStyle} >
                        <Text style={styles.chemistry}>Chemistry</Text>
                    </LinearGradient>
                    <LinearGradient colors={['#893E9C', '#F82B73']} style={styles.commonStyle} >
                        <Text style={styles.physics}>Physics</Text>
                    </LinearGradient>
                    <LinearGradient colors={['#D39646', '#CCCCCD']} style={styles.commonStyle} >
                        <Text style={styles.reasoning}>Reasoning</Text>
                    </LinearGradient>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        fontFamily: 'ROBOTO',
    },
    heading: {
        fontSize: 30,
        color: 'black',
        marginTop: -5
    },
    textHeading: {
        fontSize: 15,
        color: 'black',
        marginBottom: 15,
    },
    textHighlight: {
        color: '#D42A2A',
        marginBottom: 15,
    },
    pointContainer: {
        // width: 360,
        height: 130,
        padding: 15,
        borderRadius: 20,
        marginBottom: 15,
    },
    threeHundred: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    points: {
        fontSize: 13,
        color: '#ffffff',
        marginTop: 18,
    },
    pointText: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'left',
        marginTop: 0,
        paddingVertical: 16,
        paddingRight: 50,
        width: 250,
    },
    testBtn: {
        flex: 1,
        width: 110,
        borderRadius: 6,
        position: 'absolute',
        right: 26,
        top: 45,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    btnText: {
        color: '#495ECA',
        fontSize: 14,
        padding: 3
    },
    pendingConatiner: {
        backgroundColor: 'white',
        height: 220,
        //borderWidth: 1,
        marginVertical: 15,
    },
    headingCont: {
        padding: 4,
    },
    headingText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    },
    testMotion: {
        //borderWidth: 1,
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    physicsTest: {
        width: '47%',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        elevation: 0.8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    testHeading: {
        fontSize: 18,
        color: 'black',

    },
    testSubPh: {
        color: '#C05AFF',
    },
    testSubCh: {
        color: '#F6833D',
    },
    testSubMt: {
        color: '#495ECA',
    },
    timeIcon: {
        color: '#D42A2A'
    },
    testTime: {

    },
    subjectContainer: {
        //borderWidth: 1,
        height: 275,
    },
    allSubjects: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
    },
    commonStyle: {
        margin: 5,
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20
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
    }
})