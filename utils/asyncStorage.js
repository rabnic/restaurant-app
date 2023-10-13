import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStoage state management
export const setAsyncStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error storing value: ", error);
  }
};

export const getAsyncStorageItem = async (key) => {
  let value;
  try {
    await AsyncStorage.getItem(key)
      .then(response => {
        value = response;
      })
  } catch (error) {
    console.log("Error retrieving value: ", error);
  }
  return value;
};

export const removeAsyncStorageItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting value: ", error);
  }
};
