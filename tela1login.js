import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import { TextInput } from "react-native-paper";


export default function tela1login({navigation}) {

var usuarioDigitado="";
var senhaDigitada="";
function fazerLogin(){
    if(usuarioDigitado == "Aluno" && senhaDigitada == "1234"){
        navigation.navigate("tela central");

    }else{
        Alert.alert("Aviso", "Usuário e/ou senha incorreta")
    }
}

  return (
    <View style={estilos.container}>
       
      <View style={estilos.cxPrincipal}>
           
        <View style={estilos.cxtitulo} >
         <Text style={estilos.titulo}>Login</Text>
        </View>
            <View style={estilos.cxLogin}>
                    <TextInput
                    onChangeText={(texto)=>{usuarioDigitado=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom: 20 }}
                    label="usuario"/>
                    
                    <TextInput
                    onChangeText={(texto)=>{senhaDigitada=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom: 50}}
                    label="senha"/>
                        
                    <TouchableOpacity style={estilos.botao}
                    onPress={()=>{fazerLogin()}}>
                        <Text style={{
                            color: "white",
                            fontSize: 20
                        }}>Entrar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={estilos.botao1}
                    onPress={()=>{navigation.navigate("tela formulario")}}>
                        <Text style={{color:"white", fontSize: 20}}>Não tenho conta</Text>
                    </TouchableOpacity>
                        
                </View>
                <View>
                <Image
                    source={require('./assets/logo_senai.png')}
                    >
                    </Image>    
                </View>
            
       
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
    cxLogoSenai:{
       backgroundColor:"green"
    },
    logoSenai:{

    }, 
    cxLogin:{
    margin: 80
    },
    botao:{
        backgroundColor: "#6079FF",
        borderRadius: 20,
        padding: 20,
        alignItems: "center"

    },
    botao1:{
        alignItems: "center"
    },
    cxtitulo:{
       
        alignItems: "center",
        margin: 10   
    },
    titulo:{
        marginTop: 80,
        color: "white",
        fontSize: 40,
        
        
    },
    cxPrincipal:{
        backgroundColor: "#3850D2",
        width:"100%",
        height: "100%",
        alignItems: "center"
    },
    container: {
        flex: 1,
        
    },
});