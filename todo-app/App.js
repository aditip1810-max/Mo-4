import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>Today's Tasks</Text>

      {/* Task List */}
      <View style={styles.tasksWrapper}>
        {taskItems.map((item, index) => (
          <Task key={index} text={item} />
        ))}
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addBtn}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWrapper: {
    marginTop: 20,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
  },
});