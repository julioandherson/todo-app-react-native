import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  // #Just to validade Convex is working
  // const todos = useQuery(api.todos.getTodos);
  // console.log("Todos:", todos);
  // const addTodo = useMutation(api.todos.addTodo);
  // const deleteTodo = useMutation(api.todos.clearAllTodos);

  return (
    <View style={{...styles.container}} >
      <Text>Edit app/index.tsx to edit this screens.</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Dark Mode</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    otherStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
