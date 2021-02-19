import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Navegador from '../../Navegador'


export default props => (
    <View>
        <Navegador />
        <View style={styles.content}>
            <ScrollView>
            <Text style={styles.text}>
                Econtre pessoas e {"\n"}
                grupos em São Bernardo {"\n"}
                do Campo !
            </Text>
            <Image
                source={require('../../../assets/people.png')} 
                style={styles.img}
            />

            <Image
                source={require('../../../assets/cardum.png')}
                style={styles.img}
            />
            <Image
                source={require('../../../assets/carddois.png')}
                style={styles.img}
            />
            <Image
                source={require('../../../assets/cardtres.png')}
                style={styles.img}
            />
            </ScrollView>
            
        </View>
    </View>
)

const styles = StyleSheet.create({
    content:{
        alignItems:"center",
        backgroundColor:"white",
        height:"100%"
    },

    text:{
        color:"#23C75A",
        fontWeight:"bold",
        fontSize:25,
        marginTop:"20%",
        marginBottom:"10%"
    },

    img:{

        marginBottom:"10%"
    }
})