
import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function HomeScreen(){
const name = "Arthur";
    
    const [count, setCount] = useState(0);
    const [nome,setNome] = useState(name);
    
    return (
    <View style= {{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Bem-Vindo ao meu App, {nome}</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={()=> {setCount(count+1)}}/>
            <Button title="Diminuir" onPress={()=> {setCount(count-1)}}/>
            <Button title="Resetar" onPress={()=> {setCount(count - count)}}/>

            <TextInput placeholder="digite algo" onChangeText={setNome}/>
            
            <CustomButton title= "Botão vermelho" onPress={() => {setNome('Arthur' + count)}}/>
    </View>
    );  
}