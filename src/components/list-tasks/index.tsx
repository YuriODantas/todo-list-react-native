import { FlatList, StyleSheet } from "react-native";
import { TaskType } from "../../../App";
import { TaskItem } from "../task-item";
import { EmptyList } from "../empty-list";

interface ListTasksProps {
  tasks: TaskType[]
  onCheck: (index: number) => void
  onDelete: (index: number) => void
}

export function ListTasks({ tasks, onCheck, onDelete }: ListTasksProps) {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item, index }) => 
        <TaskItem 
          task={item}
          onCheck={() => onCheck(index)}
          onDelete={() => onDelete(index)}
        />
      }
      ListEmptyComponent={<EmptyList />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})