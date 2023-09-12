import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "@expo/vector-icons/Ionicons";

import TicketForm from "./screens/ticket-form";
import TicketBoard from "./screens/tickets-board";
import TicketDetails from "./screens/ticket-details";
import UpdateStatus from "./components/update-status";
import ReplyForm from "./screens/reply-form";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TicketsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Ticket Board" component={TicketBoard} />
      <Stack.Screen name="Ticket Details" component={TicketDetails} />
      <Stack.Screen
        name="Update Status"
        component={UpdateStatus}
        options={{
          animation: "slide_from_bottom",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Reply Form"
        component={ReplyForm}
        options={{
          animation: "slide_from_bottom",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Create Ticket"
          component={TicketForm}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ticket Board"
          component={TicketsStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
