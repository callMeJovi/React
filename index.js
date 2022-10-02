import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// const pageReact = (

//   <div>
//     <img src="./react-logo.png" width="40px" />
//     <h1>Fun facts about React</h1>
//     <h2>rrrrrrrr</h2>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//     </ul>
//   </div>
// )
// function PageReact() {
//   return (
//     <div>
//       <img src="./react-logo.png" width="40px" />
//       <h1>Fun facts about React</h1>
//       <h2>rrrrrrrr</h2>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//       </ul>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pageReact);
//ReactDOM.render(<PageReact />, document.getElementById("root"));

// function Footer() {
//   return (
//     <footer>
//       <small>@ 2022 jojo development. All rights reserved</small>
//     </footer>
//   )
// }

// function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src="./react-logo.png" className="logo"></img>
//         <ul className="nav-items">
//           {/* const ul=document.createElement('ul');
//           ul.className=""; */}
//           {/* that's why we use className instead of class in JSX, under the hood React is taking this JSX
//           elements and turning them into the native DOM elements */}
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// function MainContent() {
//   return (
//     <div className="content">
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>React allows developpers to maintain the code</li>
//         <li>React is so much fun</li>
//         <li>React is all about component</li>
//         <li>React is a highly hireable programming language</li>
//       </ol>
//     </div>
//   )
// }

function Reason() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )

}
// ReactDOM.render(<Reason />, document.getElementById("root"));
ReactDOM.render(<Reason />, document.getElementById("root"));