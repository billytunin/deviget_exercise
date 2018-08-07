# Local deploy
Install NPM dependencies by using ```npm install```<br><br>
Whenever we issue ```npm start``` on the terminal, Webpack will automatically run a local server in which we will be able to see our app. Livereload and SASS-watch are activated on this command aswell; meaning that any change to the code will cause the page to reload and reflect the new changes (after compiling SASS to CSS in case there was any change on those files).

# Styling the components
The CSS files that will style our components are stored in the same folder where the component behaviour is written. Nonetheless, these CSS files (that get generated after SASS compilation; we should always code styles using SASS files and not CSS files) will be imported in the "main.scss" file and **not** in the component's JSX file. This allows us to share SASS variables throughout all SASS files easier and helps at avoiding CSS rules from being attached at the DOM twice or more.
In order to tell the SASS compiler which files are partial files, we use an underscore before the file name. For example: "_App.scss"
