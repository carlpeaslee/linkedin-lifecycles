/* ============================================ */
/*      ./MyImportFile.js      */


import MyComponent from './MyComponentFile'

//I could also do
import WhateverIWant from './MyComponentFile'








import getImportantData from './getImportantData'







    /*      Won't work!     */
import mySetup from './someConfigObject'






    /*      Now it works!    */
import mySetup from './someConfigObject'









import {widget, birthdayReminder, trees, ShinyButton} from './aBunchOfStuff'





//Or you could do
import * as stuff from './aBunchOfStuff'

//and then do
console.log(stuff.trees)    // []
console.log(stuff.birthdayReminder())   //'Happy Birthday!'
