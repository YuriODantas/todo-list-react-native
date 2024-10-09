import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface InputTasksProps {
  task: string
  handleTask: (task: string) => void
  onAddTask: () => void
}

export function InputTasks({task, handleTask, onAddTask}: InputTasksProps) {
  return (
    <View style={styles.container}>
      <TextInput 
        value={task}
        onChangeText={handleTask}
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity 
        onPress={onAddTask}
        style={styles.button}
      >
        <Image source={require('../../../assets/plus.png')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },
  input: {
    backgroundColor: '#262626',
    height: 54,
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0D0D0D',
    borderRadius: 6,
    padding: 16,
    color: '#ffffff'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },
}) 