import { Button } from '@rneui/themed'
import { TouchableOpacity } from "react-native";
import { styles } from './styles';
import { Link } from '@react-navigation/native';

// import { Button } from "@react-native-material/core";


function ButtonCreate() {
    return (
        <Button
            title="Quero doar um amigo"
            buttonStyle={styles.button}

        >
            <Link
                to={{ screen: 'Cadastrar' }}
                style={{ color: 'white', marginHorizontal: 20 }}
            >
                Quero doar um amigo
            </Link>
        </Button>

    )
}

export { ButtonCreate as Button }
