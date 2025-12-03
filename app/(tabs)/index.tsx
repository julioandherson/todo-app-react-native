import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, StatusBar, Text, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Ionicons } from "@expo/vector-icons";
import EmptyState from "@/components/EmptyState";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  
  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined;

  if(isLoading) return <LoadingSpinner />
  // #Just to validade Convex is working
  // const todos = useQuery(api.todos.getTodos);
  // console.log("Todos:", todos);
  // const addTodo = useMutation(api.todos.addTodo);
  // const deleteTodo = useMutation(api.todos.clearAllTodos);

    const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  type Todo = Doc<"todos">;
  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }} // Gradient start point
          end={{ x: 1, y: 1 }} // Gradient end point
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
              style={[
                homeStyles.checkboxInner,
                { borderColor: item.isCompleted ? "transparent" : colors.border },
              ]}
            >
              {item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
            </LinearGradient>
          </TouchableOpacity>

          <View>
              <Text
                style={[
                  homeStyles.todoText,
                  item.isCompleted && {
                    textDecorationLine: "line-through",
                    color: colors.textMuted,
                    opacity: 0.6,
                  },
                ]}
              >
                {item.text}
              </Text>

            <View style={homeStyles.todoActions}>
              <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style={homeStyles.actionButton}>
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.danger} style={homeStyles.actionButton}>
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>


        </LinearGradient>
      </View>
    );
  }

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={{...homeStyles.safeArea}} >

        <Header />
        <TodoInput />

      <FlatList 
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item._id}
        style={homeStyles.todoList}
        contentContainerStyle={homeStyles.todoListContent}
        ListEmptyComponent={<EmptyState />}
      />

      </SafeAreaView>
    </LinearGradient>

  );
}
