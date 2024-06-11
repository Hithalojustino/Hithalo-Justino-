// import { View,StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useNavigation } from "@react-navigation/native";
// import { ScrollView } from 'react-native-web';
// import Tarefas from './componemtetarefa';


// export default function telatarefa(){
//     const navigation = useNavigation();
// return(
//    <View style={estilos.container}>

//     <View style= {estilos.cxtarefas}>
//         <Ionicons
//         name="arrow-back"
//         size={33} 
//          color={"F2A4FG"}
//         onpress={()=>{navigation.navigate("Tela Tarefas")}}
//         style={{
//             margintop:35,
//             marginLeft: 20
//         }}
//         />
//     </View>
//     <View>
//         <text>unidade 1 </text>
//         <text >falsos cognatos</text>
//     </View>
//     <View>
//         <text>10h</text>
//     </View>
//     <ScrollView horizontal={true}
//     style={{marginLeft:40,
//             margintop: 40}}
//     >
//         <Tarefas staus="1"/>
//         <Tarefas staus="0"/>
//         <Tarefas staus="0"/>
//     </ScrollView>
//     <StatusBar style="auto"/>
//    </View>
// );
// }
// const estilos =StyleSheet.create({
//      cxdetalhes:{
// flexDirection: "row",
// fiex: 1,
// margintop:20,
// marginLeft: 80

//      },
//      cx1 :{
//         backgroundColor: "yellow",
//         width: "70%"
//      },
//      cx2 :{
//         borderColor: "red",
//         width: 80,
//         height: 80,
//         justifyContent: "center",
//         alignItems: "center",
//         borderWidth: 1,
//         borderRadius: 80
//     },


//     cxtarefas: {
//         backgroundColor: "#553893",
//         height : "30%",
//         justifyContent :"center"
//     },
    
    
// });
