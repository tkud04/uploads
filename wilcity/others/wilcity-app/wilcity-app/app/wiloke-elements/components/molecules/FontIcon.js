import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { convertFontIcon } from "../../../wiloke-elements";

const FontIcon = props => {
  return (
    <View>
      {props.name.search(/^fa\s*fa-/g) !== -1 ||
      !convertFontIcon(props.name) ? (
        <View>
          {!/rutube|odnoklassniki|livejournal|bloglovin|map-pint|three-line|write/.test(
            props.name
          ) ? (
            <FontAwesome
              name={props.name.replace(/^((f|l)a\s*|)(f|l)a-/g, "")}
              size={props.size}
              color={props.color}
            />
          ) : (
            <Feather name="check" size={props.size} color={props.color} />
          )}
        </View>
      ) : (
        <Feather
          name={convertFontIcon(props.name)}
          size={props.size}
          color={props.color}
        />
      )}
    </View>
  );
};
FontIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
export default FontIcon;
