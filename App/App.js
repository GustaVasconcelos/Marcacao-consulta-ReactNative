import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import {useFonts,Pacifico_400Regular} from '@expo-google-fonts/pacifico'
import {Roboto_500Medium } from '@expo-google-fonts/roboto';

import logo from './assets/imgs/coracao-logo.png'
import prancheta from './assets/imgs/prancheta.png'
import pesquisar from './assets/imgs/pesquisar.png'
import cancelar from './assets/imgs/cancelar.png'

export default function App() {

    const [fonteLoaded] = useFonts({
        Pacifico_400Regular,
        Roboto_500Medium
    })

    if(!fonteLoaded){
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerNavbar}>
                <View style={styles.containerNavbarLogo}>
                    <Image style={styles.imgLogo}source={logo}></Image>
                </View>
                <View style={styles.containerNavbarNome}>
                    <Text style={styles.containerNavbarNomeTexto}>+Saúde</Text>
                </View>
            </View>
            <View style={styles.containerConteudo}>
                <View style={styles.containerConteudoMarcar}>
                    <Image style={styles.conteudoSvg}source={prancheta}></Image>
                    <Pressable style={styles.conteudoBotao}> 
                        <Text style={styles.textoBotao}>Marcar consulta</Text>
                    </Pressable>
                </View>
                <View style={styles.containerConteudoMarcar}>
                    <Image style={styles.conteudoSvg}source={pesquisar}></Image>
                    <Pressable style={styles.conteudoBotao}> 
                        <Text style={styles.textoBotao}>Pesquisar consulta</Text>
                    </Pressable>
                </View>
                <View style={styles.containerConteudoMarcar}>
                    <Image style={styles.conteudoSvg}source={cancelar}></Image>
                    <Pressable style={styles.conteudoBotao}> 
                        <Text style={styles.textoBotao}>Cancelar consulta</Text>
                    </Pressable>
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
    height:'18%',
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
    justifyContent:'center',
  },
  containerNavbarNomeTexto:{
    fontSize:'30px',
    color:'#fff',
    fontFamily:'Pacifico_400Regular'
  },
  containerConteudo:{
    width:'100%',
    height:'82%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  containerConteudoMarcar:{
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  conteudoSvg:{
    width:'15%',
    height:'40%'
  },
  conteudoBotao:{
    marginTop:10,
    width:'40%',
    height:'30%',
    backgroundColor:'#00CED1',
    borderRadius:'10px',
    shadowColor : '#171717' , 
    shadowOffset : { largura : - 2 , altura : 4 }, 
    shadowOpacity : 0.5 , 
    shadowRadius : 3,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  textoBotao:{
    fontFamily:'Roboto_500Medium',
    color:'#fff'
  },
});
