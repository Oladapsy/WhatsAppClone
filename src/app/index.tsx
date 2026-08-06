import { Text, View, StyleSheet, Image } from "react-native";
import WelcomeImage from "@/assets/images/home/welcome.png";
import { LightColors } from "@/shared/constants/colors";

// React Native handles static assets directly without resolveAssetSource
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Pass the imported asset directly to the source prop */}
      <Image source={WelcomeImage} style={styles.welcome} />

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
    backgroundColor: LightColors.white,
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,


  }
});
