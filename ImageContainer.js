import { ScrollView, Image, StyleSheet } from 'react-native';

export const ImageContainer = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.verticalScroll}
      maximumZoomScale={3} // Enables pinch-to-zoom
      minimumZoomScale={0.5} // Allows zoom out
      bouncesZoom={true} // Bounce effect when zooming
    >
      <ScrollView 
        horizontal={true} // Enables horizontal scrolling
        contentContainerStyle={styles.horizontalScroll}
      >
        <Image
          source={require('./img/PelletTown.png')}
        //   style={styles.image}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: 1000, // Set a large enough width based on your image resolution
    height: 1000, // Set a large enough height based on your image resolution
    resizeMode: 'contain', // Adjust to 'cover', 'stretch', etc., if needed
  },
});