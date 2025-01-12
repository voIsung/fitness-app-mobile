import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProductContext = createContext();

const PRODUCT_STORAGE_KEY = '@products';

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem(PRODUCT_STORAGE_KEY);
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const saveProducts = async (updatedProducts) => {
    try {
      await AsyncStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error saving products:', error);
    }
  };

  const addProduct = (product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      saveProducts(updatedProducts);
      return updatedProducts;
    });
  };

  const clearProducts = async () => {
    try {
      await AsyncStorage.removeItem(PRODUCT_STORAGE_KEY);
      setProducts([]);
    } catch (error) {
      console.error('Error clearing products:', error);
    }
  };

  const getTotalNutrients = () => {
    return products.reduce(
      (totals, product) => {
        const calories = parseFloat(product.calories) || 0;
        const fat = parseFloat(product.fat) || 0;
        const sugar = parseFloat(product.sugar) || 0;
        const proteins = parseFloat(product.proteins) || 0;

        return {
          calories: totals.calories + calories,
          fat: totals.fat + fat,
          sugar: totals.sugar + sugar,
          proteins: totals.proteins + proteins,
        };
      },
      { calories: 0, fat: 0, sugar: 0, proteins: 0 }
    );
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, addProduct, getTotalNutrients, clearProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
