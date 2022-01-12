import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Header(){
  return(
    <View style={styles.heder}>
      <Text style={styles.title}>Add your To Do tasks!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  heder: {
    marginTop: 45,
    height: 120,
    paddingTop: 40,
    backgroundColor: '#C270D6'
  },
    title: { 
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  
});