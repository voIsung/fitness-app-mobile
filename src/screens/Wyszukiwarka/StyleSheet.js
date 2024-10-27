import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  DarkMode: {
    backgroundColor: '#222',
    color: '#fff',
  },
  WhiteMode: {
    backgroundColor: '#fff',
    color: '#000',
  },
  cameraView: StyleSheet.absoluteFillObject,
});

export default styles;