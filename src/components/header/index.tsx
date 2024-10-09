import { Image, StyleSheet, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    height: 173,
    width: '100%'
  }
})