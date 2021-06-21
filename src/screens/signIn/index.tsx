import React from 'react';
import {
     View,
     Text,
     Image,
     StatusBar
    } from 'react-native';


import { ButtonIcon } from '../../components/buttonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

export function SignIn(){
  return(
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent" 
            translucent
        />
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
        />

        <View style={styles.context}>
            <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas {`\n`}
            </Text>

            <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
            </Text>
            <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.6}
                />
        </View>
    </View>
  );
}