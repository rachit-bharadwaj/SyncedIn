import { View, Text, Image, TouchableOpacity } from "react-native";

// styles
import { styles } from "../styles/home";

const Story = () => {
  return (
    <TouchableOpacity>
      <View style={styles.storyContainer}>
        <Image
          source={{
            uri: "https://codehelp.s3.ap-south-1.amazonaws.com/zbsjwp6ddviegs1oyrku_d40a8d6585.jpg",
          }}
          style={styles.storyImage}
        />
      </View>

      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.storyText}>
        Rachit Bharadwaj
      </Text>
    </TouchableOpacity>
  );
};

export default Story;
