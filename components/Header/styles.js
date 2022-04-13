import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        position: 'absolute',
        top:25,
        zIndex:10,
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25
    }
});

export default styles;