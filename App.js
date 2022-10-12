import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import 'react-native-gesture-handler';
import Card from './components/MateCard';
import mates from './assets/data/mates';

export default function App() {
  return (
    <View style={styles.container}>
      <Card user={mates[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
