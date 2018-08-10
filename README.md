# Local deploy
Install NPM dependencies by using ```npm install```<br><br>
Whenever we issue ```npm start``` on the terminal, Webpack will automatically run a local server in which we will be able to see our app. Livereload and SASS-watch are activated on this command aswell; meaning that any change to the code will cause the page to reload and reflect the new changes (after compiling SASS to CSS in case there was any change on those files).

# Styling the components
Our components will be styled by a main stylesheet called "main.css". However, the style files associated particularly to each component will be stored at each component folder level. Thus, every new .scss file we create to style a component shall be imported within "main.scss" in order to work.<br>
This allows for both an organized code and folder structure (styles next to each component) and easily share SCSS variables (imports on main.scss) at the same time. SASS style files associated to components start with an underscore in order to tell the SASS compiler these are partial files. For example: "\_App.scss"

# Read/unread
Every reddit entry will have its "read/unread" status marked with a small orange dot at the top right corner.
This read/unread is accounted for using the sessionStorage object. Meaning that it will persist throughout the current session.<br>
It will persist throughtout selecting different pages from the pagination system or even when we execute a page reload.<br>
It will not persist after the tab is closed, or the site is opened on a different tab.
