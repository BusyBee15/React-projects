### This repository contains my react-practice-projects

<br>

Usage:

In App.js just change the path in the first import statement to whichever project you want to see
for eg,<br>
if you want to see the project "color generator"
import Main from "./projects/color generator";

if you want to see "tours" project,
import Main from "./projects/tours";

<br>

### List of Projects

 <br>
A. UseState, UseEffect Hooks, and conditional rendering projects <br>

1. Birthday reminder <br>
   Displays list of people

2. Tours <br>
   Fetches data from external API and displays the items <br>
   Option of deleting the tours is also there

3. Accordion <br>
   Displays a list of questions, answers will be hidden by default, conditional rendering is used to show the answers

4. Reviews <br>
   Displaying single review and navigating through the list of reviews
   Use of Font awesome icons

5. Menu <br>
   A single page menu where category buttons are dynamically displayed
   Event listeners on the buttons are set up so that when user click on any, menu items are filtered our and displayed<br>
   [Menu](https://busybee-menu-js.netlify.app/)

6. Color generator <br>
   External library - "values.js" is used to get the list of tints and shades of the color that the user submits
   List of colors is displayed, user can click on any color to copy the hex value to the clipboard - alert is shown which is made to dsappear after 2s <br>
   [Color generator](https://busybee-color-generator.netlify.app/)
