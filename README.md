# NodeJS
// Install node on Linux platform using
" sudo apt install nodejs "

// If you already install node, check the version using
" node<space>-- version "

// Now you need to install Visual Studio Code to run node js code
" sudo snap install --classic code "

After this you are ready to run your first nodsJS code.
Open terminal:" Ctrl+Alt+T "

// Now run the following sequence of code on termminal
" mkdir first-app "
" cd first-app "
" code<space>. "

// Now write your code on visual studio and save it as <name>.js
// I am writing a sample code as:
function name(n1){
console.log('Hello' + n1);
}
name('Aryan');

// After saving the code go back to terminal verify you should be inside first-app directory
" node<space><name>.js "

// Congrats you did it.
