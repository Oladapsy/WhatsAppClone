import { View, StyleSheet, Image } from "react-native";
import { Colors } from "@/shared/constants/colors";
import Title, { Typography } from "@/shared/components/Typography";
import MetaLogo from "@/assets/icons/logo/meta.svg";
import { Button } from "@/shared/components/Button";
export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/home/welcome.png")}
        style={styles.welcome}
      />

      <Title> Welcome to WhatsApp</Title>
      <View>
        <Typography variant="subtitle">
          Family, friends, and other people who use our services may have
          uploaded your number to WhatsApp. If so, they can see you in their
          contacts after you sign up. <Typography>Learn more</Typography>
        </Typography>
      </View>

      <View>
        <Typography variant="subtitle">
          Read our <Typography>Privacy Policy</Typography>. Tap "Agree and
          continue" to accept the <Typography>Terms of Service</Typography>.
        </Typography>
      </View>

      <Button title="Agree and continue" variant="text" />

      {/* Meta Footer */}
      <View style={styles.footer}>
        <Typography variant="small" secondary align="center">
          from
        </Typography>
        <View style={styles.logo}>
          <MetaLogo width={100} height={25} color={Colors.light.meta} />
          <Typography
            variant="subtitle"
            weight="bold"
            color={Colors.light.meta}
            align="left"
          >
            Meta
          </Typography>
        </View>
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
  logo: {
    flexDirection: "row",
  },
});
