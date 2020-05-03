import AsyncStorage from '@react-native-community/async-storage';

export const removeAuthKey = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
};
