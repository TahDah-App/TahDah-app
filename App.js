import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import SignIn  from './pages/landing_page/sign_in.js';
import SignUp from './pages/landing_page/sign_up.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  // const [enteredName, setEnteredName] = useState('');

  // const [enteredNameHistory, setEnteredNameHistory] = useState([]);

  // const nameInputHandler = (enteredText) => {
  //   setEnteredName(enteredText);
  // }

  // const nameSearchHandler = () => {
  //   setEnteredNameHistory(
  //     currentName => [...currentName,
  //     { id: Math.random().toString, value: enteredName }
  //     ]);
  // }

  return (
    <div>
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </div>
    // <View style={styles.screen}>
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Search"
    //       style={styles.input}
    //       onChangeText={nameInputHandler}
    //       value={enteredName}
    //     />
    //     <Button title="Go!" onPress={nameSearchHandler} />
    //   </View>
    //   <FlatList 
    //     keyExtractor={(item, index)=>item.id}
    //     data={enteredNameHistory} 
    //     renderItem={itemData => (
    //     <View style={styles.searchHistory}>
    //       <Text>{itemData.item.value}</Text>
    //     </View>
    //     )}
    //   />

    // </View>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   input: {
//     width: '90%',
//     borderBottomColor: 'grey',
//     borderBottomWidth: 1,
//     padding: 10
//   },
//   searchHistory: {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ccc'
//   }

// });
