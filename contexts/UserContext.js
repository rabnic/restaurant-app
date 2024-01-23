import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (user) => {
    setUser(user);
  }
  // const createNewUser = ({ email, fullName, phoneNumber }) => {
  //   setUser({ email, fullName, phoneNumber, favorites: [], orders: [] });
  // }

  const saveOrderToHistory = (orderNum) => {
    const orders = user.orders;
    orders.push(orderNum)
    setUser(prev => {
      return { ...prev, orders: orders }
    })
  }

  const clearUser = () => {
    setUser(null);
  };

  const updateFavorites = (itemId) => {
    console.log("itemId: ", itemId)

    const tempUser = { ...user }
    const foundIndex = tempUser.favorites.indexOf(itemId);
    console.log("foundIndex: ", foundIndex)
    if (foundIndex === -1) {
      tempUser.favorites.push(itemId);
    } else {
      tempUser.favorites?.splice(foundIndex, 1)
    }
    setUser(tempUser);
  }

  const clearFavorites = () => {
    const tempUser = { ...user };
    tempUser.favorites = [];
    setUser(tempUser);
  }

  const recordRefreshmentOrder = (newRefreshmentOrder) => {
    const tempUser = { ...user };
    tempUser.orders.push(newRefreshmentOrder);
    setUser(tempUser);
  }

  console.log('user in context======', user)
  return (
    <UserContext.Provider value={{ user, setUser, createNewUser, updateFavorites, clearFavorites, recordRefreshmentOrder, clearUser, saveOrderToHistory }}>
      {children}
    </UserContext.Provider>
  );
};
