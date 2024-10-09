import { Image, StyleSheet, Text, View } from "react-native";

export function EmptyList() {
  return(
    <View style={styles.container}>
      <Image 
        style={styles.img}
        source={require('../../../assets/list.png')}
      />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 30
  },
  img: {
    marginBottom: 16
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080'
  },
  text: {
    fontSize: 14,
    color: '#808080'
  }
})