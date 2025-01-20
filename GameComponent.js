import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import Canvas, { Image as CanvasImage } from "react-native-canvas";
import pelletTown from "./img/PelletTown.png";
import playerDown from "./img/playerDown.png";

class Sprite {
  constructor({ position, velocity, image, context }) {
    this.position = position;
    this.image = image;
    this.context = context;
  }

  draw() {
    this.context?.drawImage(this.image, this.position.x, this.position.y);
  }
}

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const mapImageRef = useRef();
  const playerImageRef = useRef();
  const backgroundRef = useRef(new Sprite({ position: { x: -785, y: -650 } }));

  const animate = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const mapImage = mapImageRef.current;
    const playerImage = playerImageRef.current;
    let background = backgroundRef.current;

    requestAnimationFrame(animate);
    background = new Sprite({
      position: { x: -785, y: -650 },
      image: mapImage,
      context: context,
    });
    background.draw();

    context?.drawImage(
      playerImage,
      0,
      0,
      playerImage.width / 4,
      playerImage.height,
      canvas.width / 2 - playerImage.width / 4,
      canvas.height / 2 - playerImage.height / 2,
      playerImage.width / 4,
      playerImage.height
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 576;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    mapImageRef.current = new CanvasImage(canvas);
    mapImageRef.current.src = Image.resolveAssetSource(pelletTown).uri;

    playerImageRef.current = new CanvasImage(canvas);
    playerImageRef.current.src = Image.resolveAssetSource(playerDown).uri;

    animate();
  }, []);

  return (
    <View style={styles.container}>
      <Canvas ref={canvasRef} />
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
