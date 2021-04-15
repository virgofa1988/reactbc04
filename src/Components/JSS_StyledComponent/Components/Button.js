import styled from "styled-components";

export const Button = styled.button`
    color:${props => props.primary ? "white" : "yellow"};
    background: ${props => props.primary ? "#d63384" : "blue"};
    padding:1.4rem;
    border-radius:0.4rem;
    border:none;
    opacity:1;
    margin-right : 1rem;
    line-height:2rem;
    &.button_style{
        color:${props => props.primary ? "white" : "yellow"};
        font-weight:bold;
    }
    &:hover{
        opacity:0.8;
        transition: all 0.5s;
        border-radius: 0.6rem;
        color:white;
    }
   

`
//Thừa hưởng các đặc tính của Button và thêm bổ sung tuỳ chọn
export const ButtonTomatoNew = styled(Button)`
    font-family:emoji;
    background: ${props => props.success ? "#198754" : "blue"};
`

