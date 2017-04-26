'use strict';

/****** UTILITIES *******/
// minimal log function
function log(elt) {
    return console.log(elt);
}

// select dom elt
function $(elt) {
    var r;
    switch (elt.substr(0, 1)) {
        case '#' :
            r = document.getElementById(elt.substr(1));
            break;
        case '.':
            r = document.getElementsByClassName(elt.substr(1));
            break;
        case '':
            // invalid get tag
            r = document.getElementsByTagName();
        default:
            console.error('please verify selection $(' + elt + ')');
            break;
    }
    return r;
}

// get client size window
const windowHeight = window.innerHeight.toString() + 'px';
const windowWidth = window.innerWidth.toString() + 'px';

// build html and css
const buildHtml = {
    htmlElt: function (tag) {
        return document.createElement(tag);
    },
    addAttribute: function (elt, attrType, name) {
        return elt.setAttribute(attrType, name);
    },
    addText: function (elt, text) {
        let txt = document.createTextNode(text);
        return elt.appendChild(txt);
    },
    addCss: function (elt, properties) {
        // Object method incompatible E9
        var key = Object.keys(properties);
        var value = Object.values(properties);
        if (typeof(properties) === "object") {
            for (var i = 0; i < Object.keys(properties).length; i++) {
                if (elt.style[key[i]] !== undefined) {
                    elt.style[key[i]] = value[i];
                }
                else {
                    console.error('Unexpected css value');
                }
            }
        }
        else {
            console.error('object require (cssProperties)');
        }
    }
};





/* MAIN CODE */
const zhBar = buildHtml.htmlElt('div');
const zhBarCss = {
    position: 'fixed',
    width: "50px",
    height: windowHeight,
    background: '#06b865',
    boxShadow: '0 0 1px black'
}

buildHtml.addAttribute(zhBar, 'id', "zhBar");
buildHtml.addCss(zhBar, zhBarCss);


const headerZhBarCss = {
    width: "100%",
    height: '50px',
    background: 'red'
}

const headerZhBar = buildHtml.htmlElt('div');
buildHtml.addAttribute(headerZhBar, 'id', "headerZhBar");
buildHtml.addText(headerZhBar, 'ZH');
buildHtml.addCss(headerZhBar, headerZhBarCss);


document.getElementsByTagName('body')[0].appendChild(zhBar);
$('#zhBar').appendChild(headerZhBar);

