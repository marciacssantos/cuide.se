import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import Navegador from '../../Navegador'
import Card from '../../components/Cards'


export default props => (
    <View>
        <Navegador />
        <View style={styles.content}>
            <ScrollView>
            <Text style={styles.title}>
                Seja bem-vindo. {'\n'}
                O que deseja fazer?
            </Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Referencias')}><Text style={styles.txtBtn}>Encontrar {'\n'} Referencias</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Localizador')}><Text style={styles.txtBtn}>Localizar {'\n'} Projetos</Text></TouchableOpacity>
                </View>
            <Text style={styles.text}>
                Encontre referencias de pessoas que {'\n'}
                superaram suas maiores dificuldades, {'\n'}
                ou procure instituições e projetos de {'\n'}
                tratamentos na região de SBC.
            </Text>
            
            <Image style={styles.imgs}
                source={require('../../../assets/visao.png')}
            />

            <Image style={styles.imgs}
                source={require('../../../assets/grafico.png')}
            />
            

            <Text> Equipe</Text>
                <Card />
            </ScrollView>
        </View>
        
    </View>
)

const styles = StyleSheet.create({
    content:{

        height:"100%",
        backgroundColor:"white",
        alignItems:"center",
        textAlign:"center"
    },

    title:{
        margin:30,
        fontWeight:"bold",
        color:"#23C75A",
        fontSize:20
    },

    btns:{
        flexDirection:"row",
        marginBottom:20
   
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
    },

    text:{
        textAlign:"justify",
        color:"#c0c0c0"
    },

    imgs:{
        margin: 20,
        alignItems:"center",
        justifyContent:"center"
    }

})