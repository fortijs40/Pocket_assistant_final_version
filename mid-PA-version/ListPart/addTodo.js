import  React, { useState} from 'react';
import { Text, StyleSheet, TextInput, Button, View} from 'react-native';


export default function AddTodo({ submitHandler} ) {

  const [text, setText] = useState('');

  const changeHandler = (val) => {
      setText(val)
  }

  return(
    <View>
      <TextInput 
        style={styles.input}
        placeholder='Enter an item or a task...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='add' color='#dbb2ff'/>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#C270D5'

  },

});