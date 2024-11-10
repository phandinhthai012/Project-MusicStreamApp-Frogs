import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'; 
import { Colors } from '@/constants/Colors';
import { Popins } from '@/constants/Popins';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons} from '@expo/vector-icons'; 
import ListListenMusic from './ListListenMusic';

const GroupTrendSong = () => {
  return (
    <LinearGradient
     colors={['#1A3D5C', '#4A8CAA', '#F2A47C']}
     style={styles.container}
    >
        <View style={styles.header}>
            <Image source={require('../assets/images/IMG_03791.png')} style={styles.img}/>
            <View style={styles.content}>
                <Text style={styles.title}>Create various playlist using AI</Text>
                <Text style={styles.context}>Musica Intelligence</Text>
            </View>
        </View>

        {/* Sổ các list */}
        <View>
            <FlatList
                data={[1, 2, 3, 4, 5].slice(0, 3)}
                renderItem={({ item }) => <ListListenMusic />}
                keyExtractor={item => item.toString()}
            />
        </View>

        <View style={styles.btn}>
            <View style={styles.btnFunc}>
                <TouchableOpacity>
                    <Ionicons name="play" size={24} color="white" style={[styles.icon, styles.play]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="cast" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="add" size={24} color="white" style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="white" style={styles.iconVer}/>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default GroupTrendSong

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 16,
        width: 360,
        marginRight: 16,
    },

    header: {
        flexDirection: 'row',
        marginTop: 16,
    },

    content: {
        width: '74%',      
        marginLeft: 16,
    },
    img: {
        borderRadius: 10,
    },
    title: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading4.size,
        fontWeight: 'bold',
    },
    context: {
        color: Colors.neutral.white,
        fontSize: 14,
        marginVertical: 12,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        alignItems: 'center',
    },

    btnFunc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 28,
    },

    play: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 12,
        borderRadius: 50,
    },
})