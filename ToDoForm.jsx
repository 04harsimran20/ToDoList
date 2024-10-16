import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.todoForm}>
      <TextInput placeholder="New Task" style={styles.input} />
      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
});

export default ToDoForm;
