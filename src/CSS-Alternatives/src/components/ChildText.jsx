/* eslint-disable react/prop-types */
import styled from "styled-components"

const ChildText = () => {
    const BlueOne = styled.h1`
    color: ${props => props.color};
    `
  return (
    <BlueOne color="green">
        This is a styled component with a color of blue and a font size of 20px and a font style of italic
    </BlueOne>
  )
}

export default ChildText

// Pros and Cons of CSS Modules

// Pros
// CSS Modules are a good choice for projects where you want to keep your CSS and JavaScript code separate.
// CSS Modules allow you to write CSS in a way that is similar to writing JavaScript.
// CSS Modules generate unique class names for each CSS class, which helps prevent naming conflicts.
// CSS Modules make it easy to create reusable CSS components.
// CSS Modules are easy to use with popular JavaScript libraries like React.
// CSS Modules are easy to use with popular build tools like Webpack.

// Cons
// CSS Modules can be difficult to set up and configure.
// CSS Modules can be difficult to use with other CSS libraries like Bootstrap.
// CSS Modules can be difficult to use with other CSS preprocessors like Sass.
// CSS Modules can be difficult to use with other CSS utilities like CSS-in-JS.
