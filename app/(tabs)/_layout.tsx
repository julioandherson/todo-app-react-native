import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={{}}
    >
        <Tabs.Screen 
            name="index"
            options={{
            title: "Todos",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="flash-outline" size={size} color={color} />
            ),
            }}
        />

        <Tabs.Screen name="settings" 
            options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
            }}
        />

    </Tabs>
  )
}

export default TabsLayout
