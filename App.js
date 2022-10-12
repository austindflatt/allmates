import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://frenchiejourney.com/wp-content/uploads/2020/09/Merle-French-Bulldog.jpg'
          }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
            <Text style={styles.name}>Brinks</Text>
            <Text style={styles.bio}>Ready to mate!</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  bio: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
  }
});
