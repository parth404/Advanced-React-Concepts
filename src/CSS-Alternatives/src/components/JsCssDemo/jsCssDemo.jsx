
import styled from "styled-components"
import ChildText from "../ChildText"
const jsCssDemo = () => {
    // The styled-components library allows us to create styled components
    // that can be used in place of CSS classes
    // The styled-components library allows us to write CSS in JavaScript
    const RedText = styled.p`
        color: red;
        font-size: 20px;
        font-style: italic;
        `
  return (
    // The styled component is used in place of a CSS class
    <>
    <RedText>
        This is a paragraph with a class name of demoStyle
    </RedText>
    <ChildText />
    </>
  )
}

export default jsCssDemo