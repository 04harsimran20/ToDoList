import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView style={styles.todoList}>
      <Text>Task 1</Text>
      <Text>Task 2</Text>
      {/* Add more tasks here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
    marginBottom: 20,
  },
});

export default ToDoList;
