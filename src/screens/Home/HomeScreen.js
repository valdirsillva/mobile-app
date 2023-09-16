import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
// import { styles } from "../components/Button/styles";

const screen1 = require('../../../assets/images/image1.jpg')

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image source={screen1} resizeMode='cover' style={styles.image} />
            <View style={styles.viewOverlay}>
                <Text style={styles.titleHome}>
                    Bem-vindo
                    {/* ao Mimo Pets&Cats */}
                </Text>

                <View style={styles.button}>
                    <Button />
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },

    text: {
        color: '#fff',
    },

    viewOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

        width: '100%',
        backgroundColor: '#121214',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        opacity: .7,
    },

    titleHome: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: '800',
    },

    button: {
        width: '100%',
        height: 200,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
