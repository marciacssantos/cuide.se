import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Navegador from '../../Navegador'

export default props => (
    <View >
        <Navegador />
        <View style={styles.allContent}>
        <View style={styles.perfil}>
            <Image style={styles.img}
            source={require('../../../assets/foto.png')}
            />
            <View style={styles.text}>
                <Text style={styles.nome}>Jorge Amado</Text>
                <Text style={styles.content}>Lorem ipsum is plactext com and publishing  layouts andnd visual mockups.
                            Lorem ipsum is plactext com and publishing  layouts.</Text>
            </View>
        </View>
            <View style={styles.info}>
                <Text style={styles.subtitle}>
                    Seja bem-vindo.
                {"\n"}
                    O que deseja fazer? {"\n"}
                </Text> 
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Referencias')}><Text style={styles.txtBtn}>Encontrar {'\n'} Referencias</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Localizador')}><Text style={styles.txtBtn}>Localizar {'\n'} Projetos</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        
        
    </View>
)

const styles = StyleSheet.create({

    allContent:{
        backgroundColor:"white",
        height:"100%",
        alignItems:"center"
        
    },

    perfil:{
        flexDirection:"row",
        width:"80%",
        height:"20%",
        marginTop:"25%"
    },

    text:{
        width:"70%",
        paddingLeft:"5%"
    },

    nome:{
        fontWeight:"bold",
        fontSize:15
    },

    info:{
        
        marginBottom:"60%"
    },

    subtitle:{
        color:"#23C75A",
        fontWeight:"bold",
        fontSize:30
    },

    btns:{
        flexDirection:"row",
   
    },

    btn:{
        borderWidth:2,
        borderColor:"#23C75A",
        borderRadius:5,
        padding:30,
        margin:10

    },

    txtBtn:{
        color:"#23C75A",
        fontWeight:"bold"
    }



})