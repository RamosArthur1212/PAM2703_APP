import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
export default function OptionsScreen(){
    const router = useRouter()
    return (
        <View>
            Estou na pagina Options

            <Button title="Ir para detalhes" onPress={() => router.push('/Navigations/Stack/details')}
        />
        </View>

    )
}