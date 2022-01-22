import styled from "styled-components";

const DefaultButton = styled.button`
    background-color: #456a8a;
    color: transparent;
    width: 300px;
    height: 70px;

    @keyframes toggle {
        from {
            left: 0;
        }
        to {
            left: 200px;
        }
    }
    & div {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #f1f1f1;
        position: relative;
        top: 0;
        left: ${(props) => (props.isOn ? "200px" : "0")};
        animation-name: ${(props) => (props.isOn ? "toggle" : "toggle")};
        animation-duration: 0.1s;
        animation-timing-function: ease-in;
    }
`;

const Button = (isOn) => {
    return (
        <DefaultButton isOn={true}>
            <div></div>
        </DefaultButton>
    );
};
export default Button;
