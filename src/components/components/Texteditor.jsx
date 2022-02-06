import { useState, useRef } from "react";
import styled from "styled-components";
const Texteditor = () => {
  const contentsRef = useRef();

  const onClickHandler = () => {
    console.log(contentsRef.current.innerText);
    contentsRef.current.focus();
  };

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };
  const Ldiv = styled.div`
    border: 1px solid purple;
    width: 80%;
    height: 70vh;
  `;

  return (
    <Ldiv
      contentEditable={true}
      ref={contentsRef}
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
      onKeyPress={onKeyPressHandler}
    ></Ldiv>
  );
};

export default Texteditor;
