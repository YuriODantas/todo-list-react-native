import { StyleSheet, Text, View } from "react-native";

interface HeaderTasksProps {
  createdCount: number;
  completedCount: number
}

export function HeaderTasks({createdCount, completedCount}: HeaderTasksProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textCreate}>Criadas</Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>{createdCount}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.textComplete}>Concluídas</Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>{completedCount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  containerCount: {
    backgroundColor: '#333333',
    borderRadius: 99,
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  textCount: {
    fontSize: 12,
    fontWeight: "bold",
    color: '#D9D9D9'
  },
  textCreate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  textComplete: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA'
  }
})