import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';

export default function CarInputComponent() {

    const { setCarros } = useContext (CarContext)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    // const [alert, setAlert] = useState(false)

    const addCarro = () => {
        if(marca && modelo) {
            setCarros (prevCarros => [ ...prevCarros, {marca, modelo}])
            setMarca('')
            setModelo('')
        } else {
            setAlert(true)
        }
    }

    return (
        <View>
            <TextInput value={marca} onChangeText={setMarca} placeholder='Marca do carro'/>   
            <TextInput value={modelo} onChangeText={setModelo} placeholder='Marca do carro'/>
            <Button title='Adicionar' onPress={addCarro}/>

            {
                alert &&
                <Text>Precisa digitar alguma coisa</Text>
            }
        </View>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
})