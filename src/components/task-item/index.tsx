import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TaskType } from "../../../App";

interface TaskItemProps {
  task: TaskType
  onCheck: () => void
  onDelete: () => void
}

export function TaskItem({ task, onCheck, onDelete }: TaskItemProps) {
  const isComplete = task.complete
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onCheck}
    >
      {isComplete ?
        <Image source={require('../../../assets/check.png')} /> :
        <Image source={require('../../../assets/uncheck.png')} />
      }
      <Text style={isComplete ? styles.textComplete : styles.text}>{task.name}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Image source={require('../../../assets/bin.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center',
    backgroundColor: "#262626",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333'
  },
  text: {
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1
  },
  textComplete: {
    fontSize: 14,
    color: "#808080",
    flex: 1,
    textDecorationLine: 'line-through'
  }
})