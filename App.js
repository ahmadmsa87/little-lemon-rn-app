import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/Onboarding";

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
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
