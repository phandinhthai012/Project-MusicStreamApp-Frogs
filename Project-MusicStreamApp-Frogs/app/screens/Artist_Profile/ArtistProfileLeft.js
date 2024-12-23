import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ArtistProfileLeft = () => {
    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigate.goBack()}    
                style={styles.icon}>
                <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default ArtistProfileLeft

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },

    icon: {
        backgroundColor: 'rgba(102, 102, 102 , 0.3)',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
})