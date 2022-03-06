import React, { useContext } from "react";
import PropTypes from 'prop-types';

import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const {onToogleTheme} = useContext(ThemeContext);

  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToogleTheme}>
        Change Theme
      </Button>
      {props.children}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: "JStack's Blog",
}