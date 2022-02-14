import { useState } from "react";
// ✅ remember to import the styled-components library!
// 👀 import styled from "styled-components";
import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from the elements below to create the CSS rules for your components
// 📃 https://styled-components.com/docs/basics#getting-started
const Container = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
  gap: 16px;
  background: skyblue;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`

const Button = styled.button`
  background: dodgerblue;
  padding: 16px;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: aqua;
  }
`


export default function App() {
  const [count, setCount] = useState(0);

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <Container>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </Button>
      <Button
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </Button>
    </Container>
  );
}
