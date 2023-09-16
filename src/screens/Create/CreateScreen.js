import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function Create() {
    const [text, setText] = useState();
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.text}>Dados do doador</Text>
                <TextInput
                    inputStyle={styles.inputText}
                    label="Nome do doador"
                    variant="outlined"
                    leading={props =>
                        <Icon name="account" {...props} />
                    } />

                <TextInput
                    inputStyle={styles.inputText}
                    label="Telefone"
                    variant="outlined"
                    leading={props => <Icon name="phone" {...props} />}
                />

                <TextInput
                    inputStyle={styles.inputText}
                    label="Endereço"
                    variant="outlined"
                    leading={props => <Icon name="map-marker" {...props} />}
                />
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Dados do bichinho</Text>
                <TextInput
                    inputStyle={styles.inputText}
                    label="Nome do cão/gato"
                    variant="outlined"
                    leading={props =>
                        <Icon name="dog" {...props} />
                    } />

                <TextInput
                    inputStyle={styles.inputText}
                    label="Raça"
                    variant="outlined"
                    leading={props =>
                        <Icon name="dog" {...props} />
                    }
                />
                <TextInput
                    inputStyle={styles.inputText}
                    label="Informações do animal"
                    variant="outlined"
                    leading={props =>
                        <Icon name="dog" {...props} />
                    }
                />


                <TextInput
                    inputStyle={styles.inputText}
                    label="Fotos do bichinho"
                    variant="outlined"
                    leading={props =>
                        <Icon name="dog" {...props} />
                    }
                />

                <Button
                    title="SALVAR"
                    style={{ padding: 12 }}
                    trailing={props => <Icon name="send" {...props} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        display: 'flex',
        gap: 7,
        marginTop: 15,
    },
    text: {
        color: '#6200ee',
        textTransform: 'uppercase'
    },
    input: {},
    inputText: {
        // margin: 6,
    }
});
