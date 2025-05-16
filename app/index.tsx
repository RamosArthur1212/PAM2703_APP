import { router } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
export default function HomeScreen(){
    return(
        <View>
            <Button title="Tabs"onPress={() => router.push('/Navigations/Tabs')}/>
            <Button title="Drawer"onPress={() => router.push('/Navigations/Drawer')}/>
            <Button title="Stack"onPress={() => router.push('/Navigations/Stack')}/>
        </View>
    )
}