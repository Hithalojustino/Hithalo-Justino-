import { NavigationContainer}  from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tela1login from "./tela1login";
import telacentral from "./telacentral";
import telaformulario from "./telaformulario";

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1 login">
        <Stack.Screen name="tela1 login" component={tela1login} options={{headerShown: false}}/>
        <Stack.Screen name="tela central" component={telacentral} options={{headerShown: false}}/>
        <Stack.Screen name="tela formulario" component={telaformulario} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}