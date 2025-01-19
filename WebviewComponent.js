import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://vnexpress.net/' }} 
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => <LoadingScreen />}
      />
    </View>
  );
};

const LoadingScreen = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
  },
});

export default WebviewComponent;