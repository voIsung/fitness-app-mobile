import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 14,
    color: '#555',
  },
  totalsContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;