import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

const card = (props) => {
  const {name, image, bio, pet, breed, age, ready} = props.user;
	return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image
        }}
        style={styles.image}
      >
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.miles}>52 miles away</Text>
          <Text style={styles.breed}>{breed}</Text>
          <Text style={styles.age}>{age} years old</Text>
          <Text style={styles.ready}>{ready ? 'Ready to breed' : 'Not ready to breed'}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
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
    backgroundColor: 'red',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  miles: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
  },
  breed: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
  },
  age: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
  },
  ready: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
  }
});

export default card