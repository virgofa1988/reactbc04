import styled from "styled-components";
import React from "react";


export const Input = styled.input`
    padding: 0.5rem;
    margin:0.5rem;
    color : ${props => props.InputColor || "white"};
    background: grey;
    border:none;
    border-radius: 3px;

`