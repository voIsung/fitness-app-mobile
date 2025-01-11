import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tableContainer: {
    width: '100%',
    marginBottom: 20,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  cell: {
    fontSize: 16,
  },
  nutriScoreContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  nutriScoreLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  nutriScoreImage: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
  },
});

export default styles;
