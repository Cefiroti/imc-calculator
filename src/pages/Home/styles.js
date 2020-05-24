import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1C1C1C',
    borderRadius: 5,
    margin: 15,
    padding: 15,
    color: '#FFF',
  },

  button: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 70,
    borderRadius: 15,
    backgroundColor: '#228B22',
    padding: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20
  }
});

export default styles;