"use strict";
    /** below should be important **/
    var isHTMLElement = function(elem){
        var hasHTMLElement = false;
        try {
            if(HTMLElement !== undefined) { hasHTMLElement = true;}
        } catch(e1){}
        if(elem !== null && elem !== undefined){
            if(hasHTMLElement && typeof elem === 'object'){
                return ((elem instanceof HTMLElement) ? true : false);
            } else {
                try {
                    if('nodeType' in elem){ return ((elem.nodeType === 1) ? true : false);
                    } else if('tagName' in elem){ return (elem.tagName !== null) ? true : false;
                    } else { return ('canHaveHTML' in elem) ? true : false; }
                } catch(e2) {
                    try {
                        if(elem.nodeType){ return ((elem.nodeType === 1) ? true : false); 
                        } else if(elem.tagName){ return (elem.tagName !== null) ? true : false; 
                        } else { return (elem.canHaveHTML) ? true : false; }
                    } catch(e3) {} 
                    return false;
                }}
        } else {
            if('IMDebugger' in window){
                (new IMDebugger()).pass("isHTMLElement must be supplied something.");
            } else {
                console.log("isHTMLElement must be supplied something."); }
            return false; }};
    /** end of should be an import **/
var __imns = function(){ return window; }
describe("isImageElement Test Suite", function(){
    var div = document.createElement('div');
    var img = document.createElement('img');
    var neither = {};
    var adr = __imns();
    it("isImageElement is a function", function(){ expect(typeof adr.isImageElement === 'function').toBe(true); });
    it("isImageElement: {ImageElement} = true", function(){ expect(adr.isImageElement(img)).toBe(true); });
    it("isImageElement: {DivElement} = false", function(){ expect(adr.isImageElement(div)).toBe(false); });
    it("isImageElement: {Object} = false", function(){ expect(adr.isImageElement(neither)).toBe(false); });
});
