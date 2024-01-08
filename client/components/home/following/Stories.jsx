import { ScrollView, View } from "react-native";

import { Story } from "../../../templates";

import { styles } from "../../../styles/home";

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ScrollView>
    </View>
  );
};

export default Stories;
