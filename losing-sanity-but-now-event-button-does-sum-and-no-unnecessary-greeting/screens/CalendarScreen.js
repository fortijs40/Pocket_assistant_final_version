import React, { Component, useEffect, useState } from 'react';
import {TouchableOpacity, Button, Animated, Text, View, StyleSheet, Image, Alert, Pressable} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import NoteInputModal from '../NotePart/components/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import PopupDialog from 'react-native-popup-dialog';

export default class App extends Component {

  openAlert=()=>{
    Alert.alert('Hey!', 'Coming Soon! (?)');
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          startFromMonday={true}
          enableSwipe={true}
        />
        <View>
          <Button title='Add Event' onPress={this.openAlert}/>
          <Text style = {{marginTop: 30, fontSize:20}}>Listed events: </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
