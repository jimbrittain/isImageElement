"use strict";
/* global __imns, HTMLImageElement, console */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isArray' in adr)){
    /**
     * @function isImageElement
     * @param img {all}
     * @return {Boolean}
     * @description used to identify an IMG tag
     * @requires (opt) IMDebugger
     **/
   adr.isImageElement = function(img){
        var uv = __imns('util.validation'),
            udb = __imns('util.debug');
        if(uv.isHTMLElement(img)){
            try {
                if(HTMLImageElement !== undefined && img instanceof HTMLImageElement){ return true; }
            } catch(e){}
            if('tagName' in img && img.tagName.toLowerCase() === 'img'){
                return true;
            } else { return false; }
        } else {
            if('IMDebugger' in udb){
                (new udb.IMDebugger()).pass("isImageElement requires a valid HTMLElement"); 
            } else { console.log("isImageElement requires a valid HTMLElement"); }
            return false;
        }};
}
