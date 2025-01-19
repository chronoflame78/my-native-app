import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import Canvas, { Image as CanvasImage } from "react-native-canvas";
import imagePng from './img/PelletTown.png'

const CanvasComponent = () => {
  const handleCanvas = async (canvas) => {
    if (canvas) {
      const context = canvas.getContext("2d");

      // Set canvas dimensions
      canvas.width = 1024;
      canvas.height = 576;

      // Fill the canvas with a white background
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const image = new CanvasImage(canvas);
      const imageUri = Image.resolveAssetSource(imagePng).uri;
      image.src = imageUri;

      image.addEventListener("load", () => {
        context.drawImage(image, -750, -750);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Canvas ref={handleCanvas} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default CanvasComponent;
