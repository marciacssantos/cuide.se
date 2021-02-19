import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Navegador from '../../Navegador'


export default props => (
    <View style={styles.content}>
        <Navegador />
        <Text style={styles.text}>Login</Text>

        <TextInput
                style={styles.input}
                placeholder="Nome do Usuário"
                textContentType="emailAddress"
            />

        <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
            />

            <TouchableOpacity style={styles.botao} onPress={() => props.navigation.navigate('Usuario')}>
                <Text style={styles.botaoTexto}>Login</Text>
            </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({

    img: {
        width:120,
        height:120,
        borderRadius:100,
    },

    input:{
        marginTop:15,
        width:300,
        backgroundColor:"white",
        fontSize:16,
        fontWeight:'bold',
        borderRadius:30,
        justifyContent:"center",
        padding:10,
        borderWidth:1,
        borderColor:"grey"

    },

    botao: {
        width:200,
        height:42,
        backgroundColor:"#23C75A",
        marginTop:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        color:"white"
    },

    botaoTexto: {
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },

    text:{
        color:"#23C75A",
        fontSize:50,
        fontWeight:"bold",
        marginTop:"20%",
        marginBottom:"20%",
    },

    content: {
        backgroundColor:"white",
        height:"100%",
        alignItems:"center"
        
    }
})