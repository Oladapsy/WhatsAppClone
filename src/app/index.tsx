import { View, StyleSheet, Image, useColorScheme } from "react-native";
import { Colors } from "@/shared/constants/colors";
import Title, { Typography } from "@/shared/components/Typography";
import MetaLogo from "@/assets/icons/logo/meta.svg";
import { Button } from "@/shared/components/Button";

export default function Index() {
  const scheme = useColorScheme();
  const colorScheme = scheme === "dark" ? "dark" : "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
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
          <Typography
            color={themeColors.primary}
            onPress={() => console.log("Learn more pressed")}
          >
            Learn more
          </Typography>
        </Typography>
      </View>

      <View style={styles.subtitle}>
        <Typography variant="subtitle" align="center">
          Read our{" "}
          <Typography
            color={themeColors.primary}
            onPress={() => console.log("Privacy Policy pressed")}
          >
            Privacy Policy
          </Typography>
          . Tap "Agree and continue" to accept the{" "}
          <Typography
            color={themeColors.primary}
            onPress={() => console.log("Terms of Service pressed")}
          >
            Terms of Service
          </Typography>
          .
        </Typography>
      </View>

      <Button
        title="Agree and continue"
        variant="text"
        typoVariant="subtitle"
        style={{ marginBottom: 20 }}
        onPress={() => console.log("Agree and continue pressed")}
      />

      {/* Meta Footer */}
      <View style={styles.footer}>
        <Typography variant="small" secondary align="center">
          from
        </Typography>
        <View style={styles.logo}>
          <MetaLogo width={22} height={22} color={themeColors.green} />
          <Typography
            variant="subtitle"
            weight="bold"
            color={themeColors.green}
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