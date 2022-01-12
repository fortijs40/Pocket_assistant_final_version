import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  FlatList,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
const data = new Array(10)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `John Doe ${i}` }));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  item: {
    margin: 5,
    padding: 10,
    color: '#fff',
    backgroundColor: '#9365A1',
    textAlign: 'center',
  },
});

export default function Notes(props) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Button
        title="Go to Homepage"
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      <View styles={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.value}</Text>
          )}
        />
      </View>
    </View>
  );
}
