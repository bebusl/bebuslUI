import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
const ModalLayout = styled.div`
  display: ${({ isOn }) => (isOn ? "block" : "none")}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  & > div {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  & > div > span {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  & > div > span:hover,
  & > div > span:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal = () => {
  const [isOn, setIsOn] = useState(false);

  const handleIsOn = (e) => {
    e.preventDefault();
    setIsOn(!isOn);
  };
  return (
    <>
      <Button isOn={isOn} setIsOn={handleIsOn}>
        모달
      </Button>
      <ModalLayout
        isOn={isOn}
        onClick={(e) => {
          if (e.target.id === "pass") {
            e.stopPropagation();
          } else {
            setIsOn(!isOn);
          }
        }}
      >
        <div id="pass">
          <span>&times;</span>
          <p id="pass">Some text in the Modal...</p>
        </div>
      </ModalLayout>
    </>
  );
};

export default Modal;
