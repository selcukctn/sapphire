import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export class Signin extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{marginBottom:width/10}}>
                <Text style={{fontSize:30, color:'#e85353'}}> Sign Up </Text>
                </View>
                <View style={styles.textınput}>
                    <TextInput
                    placeholder = 'E-mail'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    keyboardType='email-address'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    autoCompleteType={"email"}
                    textContentType='emailAddress'
                    />
                </View>
                <View style={styles.textınput2}>
                    <TextInput
                    placeholder = 'Username'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    />
                </View>
                <View style={styles.textınput3}>
                    <TextInput
                    placeholder = 'Password'
                    placeholderTextColor='white'
                    textContentType='password'
                    />
                </View>
                <View style={styles.textınput3}>
                    <TextInput
                    placeholder = 'Again Password'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    keyboardTypeColor='white'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    textContentType='password'
                    selectionColor='white'
                    />
                </View>

           <TouchableOpacity 
                               onPress={() =>  {
                                const pushAction = StackActions.push('UserHome');
                            
                                this.props.navigation.dispatch(pushAction);
                            
                              }}
           style={{backgroundColor:'#e97171', width:width/3, height:width/10, justifyContent:'center', alignItems:'center', borderRadius:width/10, marginTop:width/10}}>
               <Text style={{color:'white', fontSize:20}}>
                   Sign Up
               </Text>
           </TouchableOpacity>


            </View >
        )
    }
}

export default Signin


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffcb8e',
        justifyContent:'center',
        alignItems:'center'
    },

    textınput:{
        backgroundColor:'#211c45',
        width:width/1.7,
        height:width/8,
        marginBottom:10,
        borderRadius:width/76,
      
    },
    textınput2:{
        backgroundColor:'#211c45',
        width:width/1.7,
        height:width/8,
        marginBottom:10,
        borderRadius:width/76,
    },
    textınput3:{
        backgroundColor:'#211c45',
        width:width/1.7,
        height:width/8,
        marginBottom:10,
        borderRadius:width/76,
    },



});