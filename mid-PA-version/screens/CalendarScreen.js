import React, { Component, useEffect, useState } from 'react';
import {TouchableOpacity, Button, Animated, Text, View, StyleSheet, Image, Alert, Modal, Pressable} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import NoteInputModal from '../NotePart/components/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  
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
         <Button onPress={() => setModalVisible(true)} title='add event' color='#dbb2ff'/>
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
