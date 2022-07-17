  // Navigation
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

  // Screens
import Home from "./screens/Home";
import Tasks from "./screens/Tasks";
import Task from "./screens/Task";
import Notes from "./screens/Notes";
import ManageNotes from "./screens/ManageNotes";
import Developer from "./screens/Developer";
import AuthScreen from "./screens/AuthScreen";

  // Components
import CustomDrawer from "./components/CustomDrawer";

//Context Provider
import AuthContextProvider, { AuthContext } from "./constant/appcontext";

//Other
import { colors } from "./constant/colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function TasksScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TasksForm" component={Task} />
      <Stack.Screen name="TasksList" component={Tasks} />
    </Stack.Navigator>
  );
}
function NotesScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllNotesScreen" component={Notes} />
      <Stack.Screen name="NotesManagementScreen" component={ManageNotes} />
    </Stack.Navigator>
  );
}

function LaunchScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.black,
        drawerActiveBackgroundColor: colors.yellow,
        drawerInactiveTintColor: colors.white,
        headerTintColor:colors.white,
        headerStyle:{
          backgroundColor:colors.black
        },
        headerTransparent:true
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="home" size={24} color={color} />;
          },

          headerShown:false
        }}
      />
      <Drawer.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="checkbox" size={24} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="albums-outline" size={24} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="DeveloperScreen" component={Developer} />
    </Stack.Navigator>
  );
}

function AuthenticationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
}

function AppControl() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.isAuth && <AuthenticatedStack/>}
      {!authContext.isAuth && <AuthenticationStack/>}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="light" />
      <AppControl />
    </AuthContextProvider>
  );
}
