import React, { Component } from 'react'
import { Button, ButtonTomatoNew } from '../Components/Button'
import styled, { ThemeProvider } from "styled-components";
import { StyledLink } from '../Components/Link';
import { Input } from "../Components/Input"
const ButtonTomato = styled(Button)`
 font-family: monospace;
 background: ${props => props.orange ? "#dc3545" : "blue"};
 color:${props => props.orange ? "white" : "yellow"};
`

export default class Demo_JSS extends Component {
    render() {
        return (
            <div className="container my-5">
                <Button className="button_style">Normal</Button>
                <Button className="button_style" primary>Primary</Button>
                <ButtonTomato orange>Tomato</ButtonTomato>
                <ButtonTomatoNew success>Tomato_Success</ButtonTomatoNew>
                <StyledLink>Hello Styled Any Component</StyledLink>
                <Input defaultValue="Hello" type="text" />
                <Input defaultValue="Hello" type="text" InputColor="blue" />
            </div>
        )
    }
}
