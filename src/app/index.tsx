import { Text, View, StyleSheet, Image } from "react-native";
import WelcomeImage from "@/assets/images/home/welcome.png";

// React Native handles static assets directly without resolveAssetSource
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Pass the imported asset directly to the source prop */}
      <Image source={WelcomeImage} style={{ width: 200, height: 200 }} />

      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
