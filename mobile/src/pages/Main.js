import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if( granted ) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true, // precisa estar com o GPS habilitado no celular, se não for possível, passar "false" aqui
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04, //Cálculos naváis para obter o zoom no mapa, cálculos complexos, testar números
                    longitudeDelta: 0.04,
                })

            }
        }

        loadInitialPosition();
    }, []);

    if(!currentRegion){ // enquanto a localização não existir, retornar nulo. O Mapa só será mostrado no momento em que a localização for carregada
        return null;
    }

    // return <MapView style={{ flex: 1 }}/> Passando um objeto -- JPX
    return <MapView initialRegion={currentRegion} style={styles.map} /> // Usando o componente StylesSheet
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

});

export default Main;