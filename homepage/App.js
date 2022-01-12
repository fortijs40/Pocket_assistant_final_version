import React, { useRef, useEffect, useState } from 'react';
import { ImageBackground, Animated, Text, View, StyleSheet, Image, Alert, Modal, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

const image = { uri: "https://c4.wallpaperflare.com/wallpaper/240/386/472/pastel-purple-blur-gradation-wallpaper-preview.jpg" };
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

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
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.backg}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <View style={styles.container}>
          <FadeInView>
        <Image source={require('./images/Homepage/notes.png')} style= {{
          width: 376, 
          height: 161, 
          marginTop: 50, 
        }} />
      </FadeInView>
      <FadeInView>
      <Image source={require('./images/Homepage/lists.png')} style= {{
        width: 376, 
        height: 161, 
        marginTop: 50, 
      }} />
      </FadeInView>
      <FadeInView>
      <Image source={require('./images/Homepage/reminders.png')} style= {{
        width: 376, 
        height: 161,
        marginTop: 50, 
      }} />
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
            <Text style={styles.modalText}>App version{"\n"} 0.0.1 beta</Text>
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
};

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
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;