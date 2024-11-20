import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop: 20,
    flexDirection: 'row',
  },
  blueText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default styles;
