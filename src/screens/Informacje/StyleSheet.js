import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    borderWidth: 2,
    borderColor: '#111',
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#111',
    padding: 15,
    borderRadius: 23,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
});

export default styles;
