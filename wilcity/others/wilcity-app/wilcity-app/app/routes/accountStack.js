import { createStackNavigator } from "react-navigation";
import stackOpts from "./stackOpts";
import * as Consts from "../constants/styleConstants";
import AccountScreen from "../components/screens/AccountScreen";
import FavoritesScreen from "../components/screens/FavoritesScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import EditProfile from "../components/screens/EditProfile";
import MyListingsScreen from "../components/screens/MyListingsScreen";
import MyEventsScreen from "../components/screens/MyEventsScreen";
import NotificationsScreen from "../components/screens/NotificationsScreen";
import MessageScreen from "../components/screens/MessageScreen";

const accountStack = createStackNavigator(
  {
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Wilcity",
        headerStyle: {
          backgroundColor: Consts.colorDark
        },
        headerTintColor: Consts.colorPrimary,
        headerTitleStyle: {
          fontWeight: "400",
          fontSize: 14
        }
      }
      // navigationOptions: ({ navigation }) => ({
      // 	header: false
      // })
    },
    FavoritesScreen: {
      screen: FavoritesScreen
    },
    ProfileScreen: {
      screen: ProfileScreen
    },
    EditProfile: {
      screen: EditProfile
    },
    MyListingsScreen: {
      screen: MyListingsScreen
    },
    MyEventsScreen: {
      screen: MyEventsScreen
    },
    NotificationsScreenInAccount: {
      screen: NotificationsScreen
    },
    MessageScreenInAccount: {
      screen: MessageScreen
    }
  },
  stackOpts
);

export default accountStack;
