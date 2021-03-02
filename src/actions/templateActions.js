//every action creator returns an object

export const increment = (n) => { 

    return {
        type: "INCREMENT",
        data: n
    }
  
}

//this is NOT a named export. When we import into our component we have to import like the 
/**
 * * import {increment} from './path'
 */

 /**
  * * NAMED export
  * export default increment
  * 
  * import increment from './path
  */