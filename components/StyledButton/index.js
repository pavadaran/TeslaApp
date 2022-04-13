import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './style';

const StyledButton = ({type, text, onPress}) => {

    const bgColor = type==='primary'? '#171A20CC':'#FFFFFFA6';
    const textColor = type==='primary'? '#FFFFFF':'#171A20';

    return ( 
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:bgColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text,{color:textColor}]}>{text}</Text>
            </Pressable>
        </View>
     );
}
 
export default StyledButton;


