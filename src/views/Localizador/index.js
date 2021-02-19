import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Navegador from '../../Navegador'



export default props => (
    <View>
        <Navegador />
        <Image
                source={require('../../../assets/localizador.png')}
                style={styles.img}
            />
    </View>
)

const styles = StyleSheet.create({
    img:{
        resizeMode:"contain"
    }
})