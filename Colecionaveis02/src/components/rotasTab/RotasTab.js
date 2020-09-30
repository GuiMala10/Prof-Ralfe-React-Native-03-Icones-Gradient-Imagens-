import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        showLabel: false,
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF' 
      }
      }
    >
      
      <Tab.Screen name="Inicial"
      component={RotasDrawer}
      options = {{
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
            <MaterialIcons name ='home' size={24} color={color}/>
        ),
      }}
      >

      </Tab.Screen>

      <Tab.Screen name="Colecao"
      component={Colecao}
      options = {{
        tabBarIcon: ({color}) => (
            <MaterialIcons name ='storage' size={24} color={color}/>
        ),
      }}
      >
       
      </Tab.Screen>

      <Tab.Screen name="Perfil"
      component={Perfil}
      options = {{
        tabBarIcon: ({color}) => (
            <MaterialIcons name ='person' size={24} color={color}/>
        ),
      }}
      >
       
      </Tab.Screen>
      
    </Tab.Navigator>
  );
}

export default RotasTab;