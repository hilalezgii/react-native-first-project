import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './Card.style';
const Card = (props) => {

    const sayHello = () => Alert.alert(`Merhaba ${props.title}`)
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>

            </View>
            <TouchableOpacity style={styles.button_container} onPress={sayHello}>
                <Text style={styles.button_title}>ı liked</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Card;