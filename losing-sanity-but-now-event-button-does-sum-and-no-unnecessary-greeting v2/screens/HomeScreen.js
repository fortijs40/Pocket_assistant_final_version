import React, { useRef, useEffect, useState } from 'react';
import {TouchableOpacity, Button, ImageBackground, Animated, Text, View, StyleSheet, Image, Alert, Modal, Pressable } from 'react-native';
import Intro from '../screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = { uri: "https://c4.wallpaperflare.com/wallpaper/240/386/472/pastel-purple-blur-gradation-wallpaper-preview.jpg" };
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  

  React.useEffect(() => {
    
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 7000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View              
      style={{
        ...props.style,
        opacity: fadeAnim,        
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default function App ({ user, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [greet, setGreet] = useState('');

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <View style={styles.backg}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <View style={styles.container}>
          <FadeInView>
          <Text style = {{marginTop: 60, marginBottom:10, fontSize: 20, textAlign:'center', color: "#666666", fontWeight: "bold"}}> {`Good ${greet}, \nWelcome to Pocket Assistant`} </Text>
          <View>
        <TouchableOpacity onPress={() => navigation.navigate('NoteScreen')}>
          <Image source={{uri:"https://imgur.com/5q0qYP8.jpg"}} style= {{
        width: 376, 
        height: 161,
      }} />
        </TouchableOpacity>
        <Text style = {{marginTop: 10, marginBottom:10}}>
      </Text>
</View>
            
        
      </FadeInView>
      <FadeInView>
      <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
      <Image source={{uri:"https://imgur.com/aJiIl7G.jpg"}} style= {{
        width: 376, 
        height: 161,
      }} />
      </TouchableOpacity>
      <Text style = {{marginTop: 10, marginBottom:10}}>
      </Text>
      </FadeInView>
      <FadeInView>
      <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
      <Image source={{uri:"https://imgur.com/V9eOC4X.jpg"}} style= {{
        width: 376, 
        height: 161,
      }} />
      </TouchableOpacity>
      <Text style = {{marginTop: 10, marginBottom:10}}>
      </Text>
      </FadeInView>
    
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>App version{"\n"} 1.0.0 beta</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Version</Text>
      </Pressable>
    </View>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backg: {
    backgroundColor: '0000',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 50, 
  },
  modalView: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});