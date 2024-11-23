import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    elevation: 3, // Cień na Androidzie
    shadowColor: '#000', // Cień na iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});

export default styles;
