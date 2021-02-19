import React from 'react'
import { View, StyleSheet, Image} from 'react-native'

export default props => (
    <View style={styles.content}>
        
        <Image style={styles.img}
            source={require('../../assets/imum.png')}
        />
        <Image style={styles.img}
            source={require('../../assets/imd.png')}
        />
        <Image style={styles.img}
            source={require('../../assets/imtr.png')}
        />
        <Image style={styles.img}
            source={require('../../assets/iimq.png')}
        />
        
    </View>
        
)

const styles = StyleSheet.create({
    content:{
        marginBottom:100
    },

    img:{
        margin:10
    }
})