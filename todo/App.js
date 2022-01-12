// import * as React from 'react';
import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';

import Heder from './components/TodoList/header';
import TodoItem from './components/TodoList/todoItem';
import AddTodo from './components/TodoList/addTodo' ;



// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  const [todos, setTodos] = useState ([
        { text: 'Nebūt hardstuck', key: '1'},
        { text: 'Explore jungle', key: '2'},
        { text: 'Apari ar vienu roku', key: '3'}
  ]);
 
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key !=key);
    });
  }

    const submitHandler = (text) => {
        setTodos((prevTodos) =>{
          return [
            { text: text , key: Math.random().toString() },
            ...prevTodos
          ]
        })
    }
    

    return (
      <View style={styles.container}>
       
       <Heder/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    },
    content: {
      margin: 20,
      pading: 40,
    },
    list: {
      marginTop: 20,
    }
});
