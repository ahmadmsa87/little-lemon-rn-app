import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Onboarding from "./screens/Onboarding";
import { AuthContext } from "./store/AuthContext";

export default function App() {
  const [status, setStatus] = useState({
    isLoading: true,
    isOnboardingCompleted: false,
  });

  const authContext = useMemo(
    () => ({
      onboard: async (data) => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error("error", e);
        }

        setStatus({
          ...status,
          isLoading: false,
          isOnboardingCompleted: true,
        });
      },

      logout: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          console.error("error", e);
        }

        setStatus({
          ...status,
          isLoading: true,
          isOnboardingCompleted: false,
        });
      },
      update: async (data) => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error("error", e);
        }

        Alert.alert("Success", "Changes has been successfully saved!");
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Onboarding />
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
