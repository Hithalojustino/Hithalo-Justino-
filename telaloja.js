// import {View, Text, StyleSheet,TextInput, TouchableOpacity, ScrollView} from "react-native";
// import {StatusBar} from "expo-status-bar";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Oferta from "./componeteOferta";

// export default function TelaLoja(){
//     return(
//         <View style={estilos.container}>
            
//             <View style={estilos.cxVermelhaTopo}>
                
//                 <View style={estilos.caixa1Topo}>
//                     <View style={estilos.cxPessoa}>
//                         <Ionicons
//                             name="person"
//                             size={40}
//                             color="#FF0000"
//                         />
//                     </View>

//                     <View style={estilos.cxBemVindo}>
//                         <Text style={{color:"white"}}>
//                             Bem vindo,
//                         </Text>
//                         <Text style={{color:"white", 
//                                       fontSize: 20,
//                                       fontWeight: "bold"}}>
//                             meu Quid
//                         </Text>
//                     </View>
                
//                 </View>



//                 <View style={estilos.caixa2Topo}>
//                     <TextInput
//                         placeholder="Pesquisar"
//                         style={estilos.cxPesquisar}/>

//                     <TouchableOpacity style={estilos.botaoPesquisar}>
//                         <Ionicons
//                             name="search"
//                             size={30}
//                             color="#626262"
//                         />
//                     </TouchableOpacity>
//                 </View>


//             </View>


//             <Text>Oferta</Text>

//             <ScrollView horizontal={true}>
//                     <Oferta titulo="Chocolate Kit Kat ao Leite Nestlé"
//                             desc1="R$ 99,99"
//                             desc2="R$ 2,99"/>
//                     <Oferta/>
//                     <Oferta/>
//                     <Oferta/>
//                     <Oferta/>


//             </ScrollView>


//             <Text>Categoria</Text>

//             <ScrollView horizontal={true}>


//             </ScrollView>


 


//             <StatusBar style="auto"/>
//         </View>
//     );
    
// }

// const estilos = StyleSheet.create({
//     cxOferta:{

//         height: 200,
 


//     },
//     botaoPesquisar:{
//         backgroundColor: "white",
//         padding: 10,
//         borderRadius: 10
//     },
//     cxPesquisar:{
//         backgroundColor: "white",
//         borderRadius: 10,
//         width: "80%"
//     },
//     caixa2Topo:{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: "90%",
//         marginTop: 40,
//         padding: 4
//     },  

//     cxPessoa:{
//         backgroundColor: "yellow",
//         padding: 10,
//         borderRadius: 100,
//         marginRight: 10
//     },
//     caixa1Topo:{
//         flexDirection: "row",
//         width: "90%",
//         marginTop: 60
//     },  
//     cxVermelhaTopo:{
//         backgroundColor: "red",
//         height: 260,
//         borderBottomRightRadius: 50,
//         borderBottomLeftRadius: 50,
//         alignItems: "center"
//     },
//     container:{
//         backgroundColor:"red",
//         flex: 1,
//     }
// });