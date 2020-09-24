import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Button} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { StackActions } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export class home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.topbuttons}>
                    <View>
                         <Text style={{fontSize:25, color:'white'}}> Sign In </Text>
                    </View>
                    <TouchableOpacity
                    onPress={() =>  {
                        const pushAction = StackActions.push('Sign Up');
                    
                        this.props.navigation.dispatch(pushAction);
                    
                      }}
                    >
                         <Text style={{fontSize:25, color:'#4f4794', fontFamily:'Glossy'}}> Sign Up </Text>
                     </TouchableOpacity>
                </View>

                <View style={styles.textınput}>
                    <TextInput
                    placeholder = 'Username'
                    placeholderTextColor='white'
                    
                    />
                </View>
                <View style={styles.textınput2}>
                    <TextInput
                    placeholder = 'Password'
                    placeholderTextColor='white'
                    />
                </View>

                <View>
                    <TouchableOpacity 
                                        onPress={() =>  {
                                            const pushAction = StackActions.push('UserHome');
                                        
                                            this.props.navigation.dispatch(pushAction);
                                        
                                          }}
                    style={{marginBottom:width/4, justifyContent:'center', alignItems:'center', width:width/4, height:width/10, backgroundColor:'#df4e8f', borderRadius:width/4}}>
                        <Text style={{color:'white', fontSize:25}}>Login</Text>
                    </TouchableOpacity>
                </View>
        



            </View>
        )
    }
}

export default home


const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2b2759'
    },

    topbuttons:{
        flexDirection:'row',
        marginBottom:width/4,
        justifyContent:'space-between',
        marginRight:height/8,
        },
    
        textınput:{
            backgroundColor:'#211c45',
            width:width/1.7,
            height:width/8,
            marginVertical:20,
            borderRadius:width/76,
          
        },
        textınput2:{
            backgroundColor:'#211c45',
            width:width/1.7,
            height:width/8,
            marginBottom:width/8,
            borderRadius:width/76,
        },


});