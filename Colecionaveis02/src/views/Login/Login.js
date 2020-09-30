import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>

            <ImageBackground source={require('../../../assets/imagens/fundo.jpg')}
            style={estiloLogin.fundo}>

                <View style={estiloLogin.logoContainer}>
                    <LinearGradient colors={['#f1faee', '#a8dadc']} style={estiloLogin.Logo}>
                        <AntDesign name="rest" size={40} color="black" />
                    </LinearGradient>
                </View>

                <View style={estiloLogin.CampoContainer}>
                <MaterialIcons name="person" size={24} color="white" />

                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}  
                />
                </View>  

                <View style={estiloLogin.CampoContainer}>
                
                <MaterialIcons name="vpn-key" size={24} color="white" />

                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />

                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#F55536', '#FF773D', '#FABC3C']} style={estiloLogin.botaoLinearGradient}>
                        <Feather name="send" size={24} color="white" />
                        <Text style={estiloLogin.botaoTexto}>
                            Entrar
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Login;
