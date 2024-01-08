import { View, Text, Image } from "react-native";

import { styles } from "../styles/home";
import colors from "../constants/colors";

// icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const FeedPost = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image
            source={{
              uri: "https://codehelp.s3.ap-south-1.amazonaws.com/zbsjwp6ddviegs1oyrku_d40a8d6585.jpg",
            }}
            style={styles.postHeaderImage}
          />
          <View>
            <View style={styles.postUserInfo}>
              <Text style={styles.postHeaderName}>Rachit Bharadwaj</Text>
              <Text style={styles.postHeaderDegree}>&#x2022; 1st</Text>
            </View>
            <Text
              style={styles.postUserBio}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              Full Stack Developer | React Native | ReactJS | NodeJS | MongoDB |
            </Text>
            <View style={styles.postTimeContainer}>
              <Text style={styles.postTime}>20h</Text>
              <Text style={styles.postEdited}>&#x2022; Edited</Text>
            </View>
          </View>
        </View>

        <Entypo
          name="dots-three-vertical"
          size={20}
          color={colors.primary[200]}
        />
      </View>

      <View style={styles.postContent}>
        <Text style={styles.postContentText}>
          There are many queries related to SUPRA batch on LLD ⁉️ So, me &
          Lakshay sat down to make a video on these queries and resolve them
          face to face. We have addressed many queries, such as : Why not C++ ?
          Duration of class from 2hr to 1hr Is it for working professionals as
          well ? Any pre-requisites for the course ? And other queries such as
          schedule, international payments etc. Do checkout this video now:
          https://lnkd.in/d73VtU8n Reminder: Early Bird Discount ends in next 30
          hours 🚀🚀
        </Text>
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/Bq58-o8mji0/sddefault.jpg",
          }}
          style={styles.postContentImage}
        />
      </View>

      <View style={styles.postInteraction}>
        <View style={styles.postInteract}>
          <Ionicons
            name="heart-outline"
            size={30}
            color={colors.primary[100]}
          />
          <Octicons name="comment" size={26} color={colors.primary[100]} />
          <Feather name="send" size={26} color={colors.primary[100]} />
        </View>

        <Entypo
          name="dots-three-horizontal"
          size={30}
          color={colors.primary[100]}
          style={{ width: "33%", textAlign: "center" }}
        />

        <Feather
          name="bookmark"
          size={26}
          color={colors.primary[100]}
          style={{ width: "33%", textAlign: "right" }}
        />
      </View>
    </View>
  );
};

export default FeedPost;
