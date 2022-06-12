import styledComponents from "styled-components";

const Button = styledComponents.button`
border:none;
outline:none;
background:black;
color:white;
border-radius:0.15rem;
padding:0.50rem 2rem;
font-size:0.9rem;
font-family: Arial;
letter-spacing: 0.2rem;
cursor:pointer;
transition: .5s;

&:hover{
    background:red;

}
`;
export default Button;
