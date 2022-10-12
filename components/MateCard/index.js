import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

const card = (props) => {
  const {name, image, bio} = props.user;
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
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default card