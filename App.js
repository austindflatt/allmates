import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import Card from './components/MateCard';
import mates from './assets/data/mates';

const brinks = {
  name: 'Brinks',
  image: 'https://frenchiejourney.com/wp-content/uploads/2020/09/Merle-French-Bulldog.jpg',
  bio: 'Ready to mate!',
}

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
