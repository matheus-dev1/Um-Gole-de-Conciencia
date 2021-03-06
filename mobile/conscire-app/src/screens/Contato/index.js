import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import Logos from '../../../assets/logos.png';
import Email from '../../../assets/emailazul.jpg';
import styles from './styles';

function Contato() {
    return (
        <>
            <StatusBar/>
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => {navigation.navigate('Home')}} />     
            </Appbar.Header>

            <View style={styles.container}>

                <Image source={Logos} style={styles.logos}>                
                </Image>
                <Image source={Email} style={styles.imagemContato}> 
                </Image> 

                <Text style={styles.titulo}>Entre em contato conosco:</Text>

                <Text style={styles.texto}> 
                E-mail: conscire@conscire.com
                Telefone: (11)3656-5562
                Endereço: Rua Conscire, 569
                São Paulo - SP            
                </Text>

            </View>
        </>
    )
}

export default Contato;