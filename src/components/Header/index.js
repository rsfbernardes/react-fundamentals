import React, { useContext } from "react";
import PropTypes from 'prop-types';

import Button from "../Button";
import Title from '../Title';

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const {onToogleTheme} = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
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