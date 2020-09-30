import {StyleSheet} from 'react-native';

const estiloLista = StyleSheet.create({

        areaItens:{
            flex: 1,
            backgroundColor: '#90e0ef',
        },

        itemFoto: {
            height: 300,
            marginTop:20,
            marginBottom: 20,
        },

        itemTitulo: {
            height: 40,
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 15,  
        },

        itemSubTitulo: {
            fontSize: 16,
            textAlign: 'center',
        },
});

export default estiloLista;