import styled from "styled-components";

const color = "blue";

const Button = styled.button`
  color: white;
  background: ${({color}) => color ? color : 'blue'};
  font-size: ${({big}) => (big ? "3rem" : "1rem")}
  padding: 1rem;
  margin: 1rem;
`

export default Button;