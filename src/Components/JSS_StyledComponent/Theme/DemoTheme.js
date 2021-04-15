import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';

export const DemoTheme = (propsComponent) => {

    // const configThemeArr = [
    //     {
    //         type: "dark",
    //         textColor: "white",
    //         bgColor: "black",
    //     },
    //     {
    //         type: "light",
    //         textColor: "black",
    //         bgColor: "white",
    //     }
    // ]
    const configTheme = {
        textColor: "white",
        bgColor: "black",
    }
    const [themeColor, setthemeColor] = useState(configTheme);

    const DivStyled = styled.div`
    color: ${props => props.theme.textColor};
    background-color:${props => props.theme.bgColor};
    padding:5%;
    border: 1px solid ${props => props.theme.textColor};
`
    const setTheme = (event) => {
        if (event.target.value == "1") {
            setthemeColor({
                ...themeColor, textColor: "white", bgColor: "black"
            })
        } else {
            setthemeColor({
                ...themeColor, textColor: "black", bgColor: "white"
            })
        }

    }

    return (

        <ThemeProvider theme={themeColor}>
            <DivStyled className="text-center">
                Hello Nguyen Anh Tuan
                </DivStyled>
            <select onChange={setTheme}>
                <option value="1">Dark Theme</option>
                <option value="2">Light Theme</option>
            </select>
            {/* <br />
            <br />
            <button type="button" class="btn btn-dark mx-4" onClick={() => setTheme("black", "white")}>Dark Theme</button>
            <button type="button" class="btn btn-light mx-4" onClick={() => setTheme("white", "black")}>light Theme</button> */}
        </ThemeProvider>

    )
}
