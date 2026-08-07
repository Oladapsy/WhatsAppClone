import { View, StyleSheet, Image } from "react-native";
import { Colors } from "@/shared/constants/colors";
import Title, { Typography } from "@/shared/components/Typography";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/home/welcome.png")}
        style={styles.welcome}
      />

      <Title> Welcome to WhatsApp Clone</Title>
      <View>
        <Typography variant="subtitle" weight="medium" secondary>
          Text
        </Typography>
      </View>

      <View>
        <Typography variant="subtitle" weight="medium" secondary>
          Text
        </Typography>
      </View>

      {/* Meta Footer */}
      <View style={styles.footer}>
        
        <Typography variant="small" secondary align="center">
          from
        </Typography>
        <Typography
          variant="subtitle"
          weight="bold"
          color={Colors.light.meta}
          align="center"
        >
          Meta
        </Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.light.white,
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  footer: {
    alignItems: "center",
  },
});
