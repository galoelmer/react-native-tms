import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import TicketForm from "./components/ticket-form";
import TicketBoard from "./components/tickets-board";

const Tab = createBottomTabNavigator();

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
          component={TicketBoard}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
