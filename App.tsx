import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from './src/components/header';
import { InputTasks } from './src/components/input-tasks';
import { HeaderTasks } from './src/components/header-tasks';
import { useState } from 'react';
import { ListTasks } from './src/components/list-tasks';

export type TaskType = {
  name: string,
  complete: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddNewTask = () => {
    if(!newTask.length) {
      return
    }
    setTasks(prev => [
        { name: newTask, complete: false },
        ...prev
      ]
    )
    setNewTask('')
  }

  const handleCheck = (index: number) => {
    setTasks(prev => 
      prev.map((task, idx) => 
        index === idx ? 
        {...task, complete: !task.complete} : 
        task
      )
    )
  }
  const handleDelete = (index: number) => {
    setTasks(prev => 
      prev.filter((_, idx) => index !== idx)
    )
  }

  const completeCount = tasks.filter(task => task.complete).length
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <InputTasks task={newTask} handleTask={task => setNewTask(task)} onAddTask={handleAddNewTask}/>
        <HeaderTasks createdCount={tasks.length} completedCount={completeCount} />
        <ListTasks tasks={tasks} onCheck={handleCheck} onDelete={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    transform: 'translateY(-27px)'
  }
});
