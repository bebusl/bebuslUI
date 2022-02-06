import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const fill = keyframes`
  0%{
    transform:rotate(-180deg);
  }
  100%{
    transform:rotate(0deg);
  }
`;
const transparent = keyframes`
  0%{
    z-index:1;
  }
  100%{
    z-index:-1;
  }
`;
const LoaderLayout = styled.div`
  background-color: lightblue;
  margin: 150px auto;
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 0;
  position: relative;
  box-sizing: border-box;
  & > span {
    box-sizing: border-box;

    display: inline-block;
    width: 50%;
    height: 100%;
  }
  & .left,
  & .overlay {
    box-sizing: border-box;
    border: 10px solid red;
    border-right: 0;
    border-radius: 75px 0 0 75px;
  }

  & .left {
    animation-name: ${fill};
    animation-duration: 1s;
    transform-origin: 75px 75px;
    animation-delay: 1s;

    //transform:
  }
  & .right {
    box-sizing: border-box;
    border: 10px solid red;
    border-left: 0;
    border-radius: 0 75px 75px 0;
    animation-name: ${fill};
    animation-duration: 1s;
    transform-origin: 0 75px;
    //transform: rotate(-120deg);
  }

  & .overlay {
    box-sizing: border-box;
    background-color: white;
    border: 10px solid white;
    z-index: 1;
    position: absolute; //부모 relative에 자식 absolute면 부모 기준으로 설정됨.
    animation-delay: 1s;
    animation-name: ${transparent};
    animation-duration: 0ms;
    animation-fill-mode: both;
    top: 0px;
    left: 0px;
  }
`;

const Loader = () => {
  const [progress, setProgress] = useState();
  // useEffect(() => {
  //   setInterval(() => {
  //     setProgress(progress + 1);
  //     if (progress >= 100) {
  //       clearInterval();
  //     }
  //   }, 1000);
  // }, []);

  return (
    <LoaderLayout progress={progress}>
      <span className="left"></span>
      <span className="right"></span>
      <span className="overlay"></span>
    </LoaderLayout>
  );
};

export default Loader;

//https://www.w3schools.com/howto/howto_css_switch.asp 이거 참조하면서 만들면 되는 구낭. 처음 앎.
