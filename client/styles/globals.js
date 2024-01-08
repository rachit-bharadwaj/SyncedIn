import { StyleSheet } from "react-native";

// colors
import colors from "../constants/colors";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[600],
    flex: 1,
  },
  text: {
    color: colors.primary[100],
    fontSize: 16,
  },
});
