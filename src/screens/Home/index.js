import { StyleSheet } from "react-native";

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
