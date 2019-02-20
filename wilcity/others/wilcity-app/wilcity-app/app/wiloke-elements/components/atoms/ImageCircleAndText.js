import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewPropTypes
} from "react-native";
import * as Consts from "../../../constants/styleConstants";
import ImageProgress from "react-native-image-progress";

const IMAGE_HORIZONTAL_SIZE = 50;
const IMAGE_VERTICAL_SIZE = 60;

export default class ImageCircleAndText extends PureComponent {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    horizontal: PropTypes.bool,
    imageSize: PropTypes.number,
    style: ViewPropTypes.style,
    messageNumberOfLines: PropTypes.number,
    styleImage: ViewPropTypes.style,
    modifier: PropTypes.oneOf(["style1", "style2"])
  };
  static defaultProps = {
    horizontal: false,
    imageSize: 40,
    modifier: "style1"
  };
  render() {
    const {
      image,
      title,
      text,
      message,
      time,
      modifier,
      horizontal,
      imageSize,
      style,
      styleImage,
      messageNumberOfLines
    } = this.props;
    const _imageSize = imageSize
      ? {
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
          overflow: "hidden"
        }
      : {};
    return (
      <View
        style={[
          {
            position: "relative"
          },
          horizontal ? styles.containerHorizontal : styles.containerVertical,
          style
        ]}
      >
        <View
          style={[
            horizontal ? styles.imageHorizontal : styles.imageVertical,
            _imageSize,
            {
              position: "relative",
              backgroundColor: Consts.colorGray2
            }
          ]}
        >
          <ImageProgress
            source={{ uri: image }}
            resizeMode="cover"
            style={[_imageSize, styleImage]}
            indicator={ActivityIndicator}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: horizontal ? "flex-start" : "center",
            paddingRight: horizontal ? imageSize : 0
          }}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: message ? 12 : 13
              }
            ]}
          >
            {title}
          </Text>
          {!!message && (
            <View>
              <Text style={styles.message} numberOfLines={messageNumberOfLines}>
                {message}
              </Text>
            </View>
          )}
          {!!text && (
            <Text
              style={[
                styles.text,
                {
                  fontSize: message ? 10 : 12
                }
              ]}
            >
              {text}
            </Text>
          )}
        </View>

        {!!time && (
          <View
            style={
              modifier === "style1"
                ? {
                    position: "absolute",
                    top: 2,
                    right: 0,
                    zIndex: 9
                  }
                : {}
            }
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: 12
                }
              ]}
            >
              {time}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHorizontal: {
    flexDirection: "row",
    alignItems: "center"
  },
  containerVertical: {
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontWeight: "700",
    color: Consts.colorDark1,
    marginBottom: 2
  },
  text: {
    color: Consts.colorDark3
  },
  imageHorizontal: {
    width: IMAGE_HORIZONTAL_SIZE,
    height: IMAGE_HORIZONTAL_SIZE,
    borderRadius: IMAGE_HORIZONTAL_SIZE / 2,
    marginRight: 8
  },
  imageVertical: {
    width: IMAGE_VERTICAL_SIZE,
    height: IMAGE_VERTICAL_SIZE,
    borderRadius: IMAGE_VERTICAL_SIZE / 2,
    marginBottom: 5
  },
  message: {
    fontSize: 13,
    color: Consts.colorDark2,
    lineHeight: 19
  }
});
