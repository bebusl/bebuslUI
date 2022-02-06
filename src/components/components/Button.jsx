import styled from "styled-components";
import { useState } from "react";
const DefaultButton = styled.button`
  background-color: #456a8a;
  color: transparent;
  width: 60px;
  height: 34px;
  position: relative;
  display: inline-block;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  } //input

  & input:checked + span {
    background-color: #2196f3;
  }
  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  } //before요소를 움직이는 거구낭 왜 이렇게 하지?
  & input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  & > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-animation-transition: 0.4s;
    transition: 0.4s;
  }
  & > span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    --webkit-transition: 0.4s;
    transition: 0.4s;
  }

  @keyframes toggle {
    from {
      left: 0;
    }
    to {
      left: 200px;
    }
  }
`;

const Button = ({ isOn, setIsOn }) => {
  //const [checked, setChecked] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    // setChecked(!checked);
    setIsOn(!isOn);
  };
  return (
    <DefaultButton>
      <input type="checkbox" checked={isOn} />
      <span onClick={setIsOn}></span>
    </DefaultButton>
  );
};
export default Button;
