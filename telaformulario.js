import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function telaformulario({}){
    return(
        <View style={estilo.container}>
        <View style={estilo.cxPrincipal}>
            <View>
                <Text style={{color: 'white', 
                    fontSize: 35, 
                    fontWeight: 800, 
                    margin: 90}}>
                            Cadastrar
                </Text>
            </View>
            <View>
                <TextInput
                mode="outlined"
                label="Nome Completo:"
                style={{width: 270, height: 50, margin: 10}}
                />

                <TextInput
                mode="outlined"
                label="Usuário:"
                style={{width: 270, height: 50, margin: 10}}
                />

                <TextInput
                mode="outlined"
                label="Senha:"
                style={{width: 270, height: 50, margin: 10}}
                />

                <TextInput
                mode='outlined'
                label="Repita a senha:"
                style={{width: 270, height: 50, margin: 10}}
                />
            </View>
            <View style={estilo.btnCadastar}>
                <Text style={{color: 'white',  fontSize: 20}}>Cadastrar</Text>
            </View>
            <View>
                <Image
                source={require('./assets/hithalo.jpg')}
                />
            </View>


        </View>
        <StatusBar style="auto" />
    </View>

);
}
const estilo = StyleSheet.create({

    container:{
    flex: 1
},
cxPrincipal:{ 
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#3850D2'
},
btnCadastar:{
    height: 50,
    backgroundColor: '#6079FF',
    width: 270,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 30
}
});
