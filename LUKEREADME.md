### User Stories and Features (to be implelemented next Sprint) 


  <table>
  <tr>
    <th>User Story</th>
    <th>Features</th>
    <th>Bugs / Issues</th>
  </tr>



  <tr>
    <td>As a user, I want to be able to view my previous scores and see my personal best.</td>
    <td>Highest score from previous use visible (cookies required)</td>
    <td>N/A</td>
  </tr>
  </tr>
  

  </table>

### Won't haves

  <table>
  <tr>
    <th>User Story</th>
    <th>Features</th>
    <th>Bugs / Issues</th>
  </tr>
  <tr>
    <td>As a Cornish user, I would like to take the Cornwall quiz in Cornish.</td>
    <td>A translation toggle where the user can switch between Cornish text and English.</td>
    <td>N/A</td>
  </tr>
    
 <tr>
    <td>As a user, I would like to be able to share my score with others.</td>
    <td>Social media links are displayed upon the completion of the quiz.</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>As a user, I would like the game to display my name when I'm playing.</td>
    <td>Input name box would take the users name at the start, then have a customised user greeting message.</td>
    <td>N/A</td>
  </tr>
    <tr>
    <td>As a user I want to link with my friends and compare scores.</td>
    <td>Highest score which links to other users with log in details.</td>
    <td>N/A</td>
  </table>

## Fixed Bugs / Issues
<br>
<table>
  <tr>
    <th>Bug/Issue</th>
    <th>Resolution</th>
  </tr>
  <td>The Reset button would not appear after the last question.</td>
     
  <td>We moved the function to an earlier point in the call list to ensure this function was called first. </td>
  </tr>
      
  </tr>
    <td>The answer buttons would not shrink to fit on mobile screen</td>
    <td>We added media queries to aid responsiveness</td>
  </tr>
      
  </tr>
    <td>The answer buttons were appearing on the end message when the media query was hit for small devices.</td>   
    <td>Issue was caused by the query applying display flex to the answers container, and overriding the display none value. This was fixed by creating a function that hides each answer button element individually.</td>
  </tr>

  <tr>
    <td>The questions were not shuffling properly from the original array.</td>
    <td>The issue was that the return of the shuffle function was not returning the correct values. This was fixed by correcting an issue in the arrow function used to assign the random number to the sort method.</td>
  </tr>
  </table>

## Unfixed Bugs / Issues
<br>
<table>
  <tr>
    <th>Bug/Issue</th>
    <th>Resolution</th>
  </tr>

 <tr>
  <td>If a user gets 10 question wrong in a row, then the statement applying hide to the score counter suddenly appears as 0 when the results message is given.</td>
  <td>We ran out of time to fix this, but it would be a simple matter of adding a statement to alter the class only if it is already in a specific state.</td>
 </tr>
<table>