'use strict';

/****** UTILITIES *******/
// minimal log function
function log(elt) {
    return console.log(elt);
}

// select dom elt
function get(elt) {
    var r;
    var regex = /[a-z]/;
    if (elt.substr(0, 1) === '#') {
        r = document.getElementById(elt.substr(1));
    }
    else if (elt.substr(0, 1) === '.') {
        r = document.getElementsByClassName(elt.substr(1));
    }
    else if (regex.test(elt.substr(0, 1)) === true) {
        r = document.getElementsByTagName(elt);
    }
    else {
        console.error('please verify selection $(' + elt + ')');
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
        var txt = document.createTextNode(text);
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
/*
const zhBar = buildHtml.htmlElt('div');
const zhBarCss = {
    position: 'fixed',
    width: "100%",
    height: '60px',
    background: '#03A9F4',
    color: "white",
    boxShadow: '0 1px 8px rgba(0,0,0,.3)'
}

buildHtml.addAttribute(zhBar, 'id', "zhBar");
buildHtml.addCss(zhBar, zhBarCss);


const headerZhBarCss = {
    width: "60px",
    height: '60px',
}

const headerZhBar = buildHtml.htmlElt('div');
buildHtml.addAttribute(headerZhBar, 'id', "headerZhBar");
buildHtml.addCss(headerZhBar, headerZhBarCss);


document.getElementsByTagName('body')[0].appendChild(zhBar);
get('#zhBar').appendChild(headerZhBar);
    */