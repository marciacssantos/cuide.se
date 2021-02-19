import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default props => (
    <View style={styles.nav}>
        <Image source={require('../../assets/favicon.png') }/>
        <Text style={styles.textNav}>Cuide.se</Text>
        
    </View>
)

const styles = StyleSheet.create({
    nav:{
        width:"100%",
        backgroundColor:"#23C75A",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"

    },

    textNav:{
        color: "white",
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        fontSize:20
    },

    img:{
        width:5,
        height:5,
    }

})