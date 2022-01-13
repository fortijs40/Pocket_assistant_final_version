import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Header(){
  return(
    <View style={styles.header}>
      <Text style={styles.title}>Create your to-do list</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    height: 90,
    paddingTop: 25,
    backgroundColor: '#dbb2ff'
  },
    title: { 
      textAlign: 'center',
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  
});