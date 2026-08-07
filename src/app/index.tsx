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

      <View style={styles.subtitle}>
        <Typography variant="subtitle" align="center">
          Family, friends, and other people who use our services may have
          uploaded your number to WhatsApp. If so, they can see you in their
          contacts after you sign up.{" "}
          <Typography color={Colors.light.primary}>Learn more</Typography>
        </Typography>
      </View>

      <View style={styles.subtitle}>
        <Typography variant="subtitle" align="center">
          Read our{" "}
          <Typography color={Colors.light.primary}>Privacy Policy</Typography>.
          Tap "Agree and continue" to accept the{" "}
          <Typography color={Colors.light.primary}>Terms of Service</Typography>
          .
        </Typography>
      </View>

      <Button
        title="Agree and continue"
        variant="text"
        typoVariant="subtitle"
        style={{ marginBottom: 20 }}
      />

      {/* Meta Footer */}
      <View style={styles.footer}>
        <Typography variant="small" secondary align="center">
          from
        </Typography>
        <View style={styles.logo}>
          <MetaLogo width={22} height={22} color={Colors.light.green} />
          <Typography
            variant="subtitle"
            weight="bold"
            color={Colors.light.green}
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
    alignItems: "center",
    gap: 4,
  },
  subtitle: {
    marginBottom: 22,
    marginTop: 10,
  },
});
