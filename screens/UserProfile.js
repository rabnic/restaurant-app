import { View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { Avatar, Button, Modal, Portal, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { showMessage } from "react-native-flash-message";
import { signOutUser } from "../services/firebase";

const UserProfile = () => {
  const { updateAuthUser } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSignOut = () => {
    signOutUser().then(() => {
      updateAuthUser(null);
      // setUser(null);
      showMessage({
        message: "Successfully signed out!",
        type: "success",
      });
    })
  }
  return (
    <SafeAreaView className="flex-1 pt-12 px-3 flex-col gap-4">
      <View className="py-2 flex-row items-center">

        {
          user ?
            (
              <Avatar.Image
                source={require("../assets/user-profile.jpg")}
                size={50}
              />
            )
            :
            (
              <Avatar.Text size={50} label="DC" />
            )
        }
        <View className="ml-5">
          <Text>{user ? user.fullName : 'Dearest Customer'}</Text>
          {user &&
            <Text className="font-bold">{user.email}</Text>
          }
        </View>
      </View>

      <Button
        icon="account-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        rippleColor="#FCF3F1"
        className="rounded-lg"
        onPress={showModal}
      >
        My Profile
      </Button>
      <Button
        icon="lock-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        Change Password
      </Button>
      <Button
        icon="cart-arrow-down"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        My Orders
      </Button>
      <Button
        icon="map-marker-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        Delivery Addresses
      </Button>
      <Button
        icon="wallet-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        Payment Methods
      </Button>
      <Button
        icon="heart-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        Favorites
      </Button>
      <Button
        icon="delete-sweep-outline"
        mode="outlined"
        contentStyle={{ justifyContent: "flex-start", height: 50 }}
        textColor="#404040"
        className="rounded-lg border-gray-500"
        onPress={() => console.log("Pressed")}
      >
        Delete Account
      </Button>
      {
        user ?
          (
            <Button
              icon="logout-variant"
              mode="contained-tonal"
              contentStyle={{ justifyContent: "center", height: 50 }}
              style={{ width: 200, alignSelf: "center", marginTop: 50 }}
              textColor="#FFFFFF"
              buttonColor="#FF3F3F"
              onPress={handleSignOut}
            >
              Log Out
            </Button>
          )
          :
          (
            <Button
              icon="login"
              mode="contained-tonal"
              contentStyle={{ justifyContent: "center", height: 50 }}
              style={{ width: 200, alignSelf: "center", marginTop: 50 }}
              textColor="#FFFFFF"
              buttonColor="#DD5A44"
              onPress={()=> {}}
            >
              Go to Sign In
            </Button>
          )
      }
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            height: hp(100),
          }}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default UserProfile;
