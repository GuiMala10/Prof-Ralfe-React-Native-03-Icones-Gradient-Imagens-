import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons'
import {useIsDrawerOpen} from '@react-navigation/drawer'

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if (!isDrawerOpen){
            navigation.openDrawer();
        }
    }
    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }             
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={30} color="white" />
                </TouchableOpacity>
            </View>
            
                <ImageBackground source={require('../../../assets/imagens/dead.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground source={require('../../../assets/imagens/z.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>   
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/imagens/w.jpg')} style={estiloInicial.botaoBackground}> 
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                    </ImageBackground>   
                </TouchableOpacity>

                </ImageBackground>

        </View>
    )
}
export default Inicial;
