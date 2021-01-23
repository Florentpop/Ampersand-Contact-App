import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function FirstScreen({ route, navigation }) {
    let firstScreen = route.params;
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />

            <View style={styles.codetrainContacts}>
                <Text style={{ fontSize: 32, fontStyle: "italic" }}>CODETRAIN</Text>
                <Text style={{ fontSize: 28, marginLeft: 20, fontStyle: "italic" }}>CONTACTS</Text>
            </View>

            <TouchableOpacity style={styles.footer} onPress={() => {
                navigation.navigate('GetStartedScreen')
            }}>
                <Text>GET STARTED</Text>
                <Text style={styles.emptyText}></Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    logo: {
        marginTop: 20,
        height: 45,
        width: 250,
    },
    emptyText: {
        backgroundColor: "red",
        height: 2,
        width: 88,
        borderRadius: 15,

    }

})
