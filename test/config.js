requirejs.config({
    baseUrl: 'dist/scripts/',
    paths: {
        mocha: '../../test/vendor/mocha',
        chai: '../../test/vendor/chai',
        smoax: '../../test/vendor/smoax',
        blanket: '../../test/vendor/blanket.min'
    },
    shim: {
        smoax: {
            exports: 'Smoax'
        }
    },
    urlArgs: 'v=' + new Date().getTime()
});

define('setup',['chai', 'smoax'], function(chai, smoax) {

    function uiSetup(headElement) {
        var styles = ['test/vendor/mocha.css'];
        var body = document.getElementsByTagName('body').item(0);
        var div = document.createElement('div');
        var linkElement, i;

        for (i in styles) {
            linkElement = document.createElement('link');
            linkElement.setAttribute('rel', 'stylesheet');
            linkElement.setAttribute('href', styles[i]);
            headElement.appendChild(linkElement);
        }

        div.setAttribute('id', 'mocha');
        body.appendChild(div);

        $(body).prepend(
            $('<a href="#" id="toggleView">Toggle view</div>').click(function(e) {
                e.preventDefault();
                $('#spec-markup').toggle();
            })
        );
    }
    //phantomjs doesnt support .bind, so need to polyfill
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5 internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }

            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function () {},
                fBound = function () {
                    return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                        aArgs.concat(Array.prototype.slice.call(arguments)));
                };

            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();

            return fBound;
        };
    }

    // PhantomJS had some problem if should is set as a global variable and was timing out
    // window.should = should

    window.chai = chai;
    window.assert = chai.assert;
    window.expect = chai.expect;
    window.to = chai.to;

    uiSetup(document.getElementsByTagName('head')[0]);
    mocha.setup('bdd');
    mocha.setup({ignoreLeaks: true}); //otherwise mocha complains about jquery and moment being globals
});


require(['setup']);