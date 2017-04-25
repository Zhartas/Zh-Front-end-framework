'use strict';
/* utilities */
const log = (elt) => console.log(elt);
const bodyInsert = (elt) => document.body.appendChild(elt);
const windowHeight = window.innerHeight.toString() + 'px';




/* code */

const buildHtml = {
    htmlElt: function(tag) {
        return document.createElement(tag);
    },
    addAttribute: function (elt, attrType, name) {
        return elt.setAttribute(attrType, name);
    },
    addText: function (elt, text) {
        const txt = document.createTextNode(text);
        return elt.appendChild(txt);
    },
    addCss: function(elt, property, value) {
        if(elt.style[property] !== undefined) {
            return elt.style[property] = value;
        }
        else{
            console.error('Unexpected css value');
        }

    }
};


const zhBar = buildHtml.htmlElt('div');
buildHtml.addAttribute(zhBar, 'id', "zhBar");
buildHtml.addCss(zhBar, 'background', "#06b865");
buildHtml.addCss(zhBar, 'height', windowHeight);
buildHtml.addCss(zhBar, 'box-shadow', '0 0 1px black');
buildHtml.addCss(zhBar, 'width', '40px');

log(zhBar);

bodyInsert(zhBar);


