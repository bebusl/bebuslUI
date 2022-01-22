import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const ModalLayout = styled.div`
    background-color: black;
    color: white;
`;

const Modal = () => {
    return (
        <>
            <Button>모달</Button>
            <ModalLayout>모달데쓰</ModalLayout>
        </>
    );
};

export default Modal;
