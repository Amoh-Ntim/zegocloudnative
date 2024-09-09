import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';

interface HomeScreenProps {
  navigation: any;
}

// Function to generate a random UserID
const generateRandomUserID = () => {
  return 'user_' + Math.floor(Math.random() * 10000).toString();
};

// Function to generate a random CallID
const generateCallID = () => {
  return 'call_' + Math.random().toString(36).substr(2, 9);
};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const userID = generateRandomUserID();
  const callID = generateCallID();  // Generate callID dynamically

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID='1969174592'
        appSign='23f960fbbc9827d2628c8fc4734c30fcd5ed0236afc9d2f32b49bef7247b60ec'  // Replace with your actual appSign
        userID={userID}
        userName='John'
        callID={callID}  // Dynamically generated callID

        config={{
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID: string, reason: string, duration: number) => { 
            props.navigation.navigate('HomeScreen'); 
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});

export default HomeScreen;
