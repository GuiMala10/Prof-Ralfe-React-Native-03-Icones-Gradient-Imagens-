import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao ({navigation}) {

    const [colecao, setColecao] = useState ([

        {
            id: '1', 
            titulo: 'Jogos Vorazes',
            descricao: 'Na região antigamente conhecida como América do Norte...',
            autor: 'Suzanne Collins',
            anoPublicacao: '2012',
            foto: require('../../../assets/itens/a.jpg'),
        },

        {
            id: '2', 
            titulo: 'Jogos Vorazes - Em chamas',
            descricao: 'Em decorrer do percurso, Katniss sente que uma rebelião...',
            autor: 'Suzanne Collins',
            anoPublicacao: '2013',
            foto: require('../../../assets/itens/b.jpg'),
        },

        {
            id: '3', 
            titulo: 'Jogos Vorazes - A esperança',
            descricao: 'Katniss luta contra a loucura. Ela tenta se manter sã enquanto...',
            autor: 'Suzanne Collins',
            anoPublicacao: '2014',
            foto: require('../../../assets/itens/c.jpg'),
        },

        {
            id: '4', 
            titulo: 'Jogos Vorazes - A esperança - o final',
            descricao: 'Todos percebem a ganância e loucura da auto-proclamada...',
            autor: 'Suzanne Collins',
            anoPublicacao: '2015',
            foto: require('../../../assets/itens/d.jpg'),
        }
    ]);

        const voltar = () => {
            navigation.navigate('Inicial')
        }

        return (
            <View style={estiloColecao.container}>

                <View style={estiloColecao.header}>
                    <TouchableOpacity onPress={voltar}>
                        <MaterialIcons name='arrow-back' size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={estiloColecao.texto}>Coleção</Text>
                    <MaterialIcons name="add" size={24} color="white" /> 
                </View>

                <FlatList 
                showsHorizontalScrollIndicator ={false}
                keyExtractor = {(item) => item.id }
                data={colecao} 
                renderItem={({item}) => <Lista data={item}/>}
                />
            </View>
        )
}

export default Colecao;