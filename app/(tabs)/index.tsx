import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  // #Just to validade Convex is working
  // const todos = useQuery(api.todos.getTodos);
  // console.log("Todos:", todos);
  // const addTodo = useMutation(api.todos.addTodo);
  // const deleteTodo = useMutation(api.todos.clearAllTodos);

  return (

    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={{...homeStyles.safeArea}} >

        <Header />
        <TodoInput />

      </SafeAreaView>
    </LinearGradient>

  );
}
