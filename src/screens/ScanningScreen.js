import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanningScreen({ route, navigation }) {
    let ScanningScreen = route.params

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        navigation.navigate("DetailsScreen")
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>

            <BarCodeScanner
                onBarCodeScanned={ handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            <View style={styles.icons}>
                <Entypo name="flash" size={24} color="white" style={{ marginRight: 60 }} />
                <TouchableOpacity onPress={() => { navigation.navigate("ScanScreen") }}>
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <Text style={{ alignSelf: "center", fontWeight: "700",color:"white" }}>Place QR Code Within Frame</Text>

            <View style={styles.footer}>
                <Text style={{
                    marginHorizontal: 20, color: "black",
                }}>Want to share your contact?</Text>

                <TouchableOpacity  onPress={() => { navigation.navigate("ScanScreen") }} style={styles.scan}>
                    <Text style={{ color: 'red' }}>Send QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "black"
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:50
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        height: 50,
        justifyContent:"space-around",
    },
    scan:{
        backgroundColor: "white",
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: "red",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 1
    }
})
