import React from "react";
import { Slot, Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}> 
    <Tabs.Screen
    name= 'index'
    options={{
      title: 'INICIO',
      tabBarIcon:({color, size}) => <Ionicons name='home-outline' size={size} color={color}/>
    }}
    />
    <Tabs.Screen
    name= 'about'
    options={{
      title: 'sobre',
      tabBarIcon:({color, size}) => <Ionicons name='information-outline' size={size} color={color}/>
    }}
    />
    <Tabs.Screen
    name= 'settings'
    options={{
      title: 'configurações',
      tabBarIcon:({color, size}) => <Ionicons name='configuration-outline' size={size} color={color}/>
    }}
    />
    <Tabs.Screen
    name= 'Products'
    options={{
      title: 'produtos',
      tabBarIcon:({color, size}) => <Ionicons name='products-outline' size={size} color={color}/>
    }}
    />
    <Tabs.Screen
    name= 'Messengers'
    options={{
      title: 'Mensagens',
      tabBarIcon:({color, size}) => <Ionicons name='messenger-outline' size={size} color={color}/>
    }}
    />
    <Tabs.Screen
    name= 'Users'
    options={{
      title: 'Usuários',
      tabBarIcon:({color, size}) => <Ionicons name='messenger-outline' size={size} color={color}/>
    }}
    />

    </Tabs>
  );
}