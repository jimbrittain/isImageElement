"use strict";
/* global isHTMLElement, console, window, HTMLImageElement, IMDebugger */
/**
 * @function isImageElement
 * @param img {all}
 * @return {Boolean}
 * @description used to identify an IMG tag
 * @requires isHTMLElement
 * @requires (opt) IMDebugger
 **/
var isImageElement = function(img){
    if(isHTMLElement(img)){
        try {
            if(HTMLImageElement !== undefined && img instanceof HTMLImageElement){ return true; }
        } catch(e){}
        if('tagName' in img && img.tagName.toLowerCase() === 'img'){
            return true;
        } else { return false; }
    } else {
        if('IMDebugger' in window){
            (new IMDebugger()).pass("isImageElement requires a valid HTMLElement"); 
        } else { console.log("isImageElement requires a valid HTMLElement"); }
        return false; }};
