import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import logo from './assets/imgs/coracao-logo.png'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerNavbar}>
                <View style={styles.containerNavbarLogo}>
                    <Image style={styles.imgLogo}source={logo}></Image>
                </View>
                <View style={styles.containerNavbarNome}>
                    <Text style={styles.containerNavbarNomeTexto}>+Saude</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  containerNavbar:{
    width:'100%',
    height:'18 %',
    backgroundColor:'#00CED1',
    display:'flex',
    flexDirection:'row',
    shadowColor : '#171717' , 
    shadowOffset : { largura : - 2 , altura : 4 }, 
    shadowOpacity : 0.5 , 
    shadowRadius : 3 
  },
  containerNavbarLogo:{
    width:'40%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  imgLogo:{
    width:'65%',
    height:'73%',
  },
  containerNavbarNome:{
    width:'50%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  containerNavbarNomeTexto:{
    fontSize:'30px',
    color:'#fff'
  }
});
