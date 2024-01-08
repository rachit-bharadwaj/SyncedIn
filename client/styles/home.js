import { StyleSheet } from "react-native";

// colors
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },

  searchBox: {
    backgroundColor: colors.primary[500],
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 5,
    borderRadius: 100,
    flex: 1,
  },

  searchInput: {
    flex: 1,
    color: colors.primary[100],
    fontSize: 16,
  },

  // ------------------------------Following Tab--------------------------------------------------

  // ......feed filter.....
  feedFilterContainer: {
    alignItems: "center",
    margin: 20,
  },

  feedFilter: {
    flexDirection: "row",
    borderColor: colors.primary[400],
    borderWidth: 2,
    borderRadius: 50,
  },

  feedFilterAll: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  feedFilterCreators: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRightColor: colors.primary[400],
    borderRightWidth: 2,
    borderLeftColor: colors.primary[400],
    borderLeftWidth: 2,
  },
  feedFilterCompany: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },

  // ........stories section......
  storiesContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  // ........story template......
  storyContainer: {
    padding: 2,
    borderRadius: 100,
    borderColor: colors.secondary[100],
    borderWidth: 3,
    marginHorizontal: 5,
    width: 80,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  storyText: {
    textAlign: "center",
    fontSize: 12,
    color: colors.primary[100],
    width: 80,
  },

  // .........feed section..........
  postContainer: {
    padding: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  postHeaderImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  postUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  postHeaderName: {
    fontWeight: "900",
    fontSize: 20,
    color: colors.primary[100],
  },
  postHeaderDegree: {
    color: colors.primary[300],
  },
  postUserBio: {
    width: 230,
    color: colors.primary[200],
  },
  postTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  postTime: {
    color: colors.primary[300],
  },
  postEdited: {
    color: colors.primary[300],
  },
  postContent: {
    marginVertical: 10,
  },
  postContentText: {
    color: colors.primary[100],
    fontSize: 16,
    marginBottom: 10,
  },
  postContentImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  postInteraction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postInteract: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "34%",
  },
});
