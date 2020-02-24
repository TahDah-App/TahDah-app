import React, { useState, Component } from 'react';
import {View, Button, TextInput, StyleSheet } from 'react-native';
// import navigation from 'App.js'/



export default class SignUp extends Component {


    state = {
        enteredEmail: '',
        enteredPassword: '',
        enteredBirthday: '',
        enteredUsername: '',
        signedIn: false    
    } 
  
    emailInputHandler = (enteredText) => {
        this.setState( previousState => (
            previousState.enteredEmail=enteredText
        ));
    }
  
    passwordInputHandler = (enteredText) => {
        this.setState( previousState => (
            previousState.enteredPassword = enteredText
        ));
    }

    usernameInputHandler = (enteredText) => {
        this.setState( previousState => (
            previousState.enteredUsername=enteredText
        ));
    }
  
    birthdayInputHandler = (enteredText) => {
        this.setState( previousState => (
            previousState.enteredBirthday = enteredText
        ));
    }

    
    signUpUserAccount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'Username': this.state.enteredUsername, 
            'Password': this.state.enteredPassword,
            'Email': this.state.enteredEmail,
            'Birthday': this.state.enteredBirthday
        }),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        this.setState( previousState => (
            previousState.verifiedAccount = true
        ))
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        console.log(this.state)
    }
  
    render(){ return (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={this.emailInputHandler}
            value={this.enteredEmail}
          />
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={this.usernameInputHandler}
            value={this.enteredUsername}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={this.passwordInputHandler}
            value={this.enteredPassword}
          />
          <TextInput
            placeholder="Birthday"
            style={styles.input}
            onChangeText={this.birthdayInputHandler}
            value={this.enteredBirthday}
          />
          <Button title="Sign Up" onPress={this.signUpUserAccount} />
        </View>
    );}
  }

  const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '90%',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      padding: 10
    },
    searchHistory: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc'
    }
  
  });