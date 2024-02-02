// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f0HGD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _baseViewJs = require("./views/baseView.js");
var _baseViewJsDefault = parcelHelpers.interopDefault(_baseViewJs);
var _bannerViewJs = require("./views/bannerView.js");
var _bannerViewJsDefault = parcelHelpers.interopDefault(_bannerViewJs);
var _homePagesViewJs = require("./views/homePagesView.js");
var _homePagesViewJsDefault = parcelHelpers.interopDefault(_homePagesViewJs);
var _sidebarJs = require("./views/sidebar.js");
var _sidebarJsDefault = parcelHelpers.interopDefault(_sidebarJs);
var _movieListViewJs = require("./views/movieListView.js");
var _movieListViewJsDefault = parcelHelpers.interopDefault(_movieListViewJs);
var _modelJs = require("./model.js");
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _detailPageViewJs = require("./views/detailPageView.js");
var _detailPageViewJsDefault = parcelHelpers.interopDefault(_detailPageViewJs);
"use strict";
// const html = document.querySelector("html");
// html.innerHTML = "";
async function init() {
    try {
        await (0, _modelJs.getPopularMovies)();
        await (0, _modelJs.getHomePageMovieLists)();
        await (0, _modelJs.getGenreList)();
        // Sidebar
        const sidebar = new (0, _sidebarJsDefault.default)((0, _modelJs.movieDB));
        const search = new (0, _searchViewJsDefault.default)((0, _modelJs.getMovieListBySearching));
        // Home
        const banner = new (0, _bannerViewJsDefault.default)((0, _modelJs.movieDB));
        const homePages = new (0, _homePagesViewJsDefault.default)((0, _modelJs.movieDB));
        // List
        const movieList = new (0, _movieListViewJsDefault.default)((0, _modelJs.getMovieListByCategory));
        // Detail
        const movieDetail = new (0, _detailPageViewJsDefault.default)((0, _modelJs.getMovieById), (0, _modelJs.getSugestedMovies));
    } catch (error) {
        console.error(error);
        throw error;
    }
}
// Call the init function or perform other actions
init();

},{"./views/baseView.js":"1AGkP","./views/bannerView.js":"gBuvd","./views/homePagesView.js":"fqfWn","./views/sidebar.js":"4E4XX","./views/movieListView.js":"k0Qr3","./model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/searchView.js":"9OQAM","./views/detailPageView.js":"54CQD"}],"1AGkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class BaseView {
    #sidebar = document.querySelector(".sidebar");
    _menu = document.querySelector(".menu");
    _menuBtn = document.querySelector(".menu-btn");
    _menuClose = document.querySelector(".close");
    #search = document.querySelector(".search");
    _searchBtn = document.querySelector(".search-btn");
    _searchIcon = document.querySelector(".search-icon");
    constructor(){
        this._menuBtn.addEventListener("click", this._menuBtnStart.bind(this));
        this._searchBtn.addEventListener("click", this.toggleSearch.bind(this));
    }
    _menuBtnStart() {
        this._toggleMenu();
        this.#sidebar.classList.toggle("active");
        const container = document.querySelector(".container");
        container.classList.toggle("active");
    }
    _toggleMenu() {
        this._menu.classList.toggle("hidden");
        this._menuClose.classList.toggle("hidden");
    }
    _isSmallScreen() {
        return window.matchMedia("(max-width: 650px)").matches;
    }
    _toggleSearchOnSmallDevices() {
        const logo = document.querySelector(".logo");
        if (this.#sidebar.classList.contains("active")) {
            this.#sidebar.classList.remove("active");
            const container = document.querySelector(".container");
            container.classList.toggle("active");
            this._toggleMenu();
        }
        this._menuBtn.classList.toggle("hidden");
        this._searchBtn.classList.toggle("search-btn--animation");
        logo.classList.toggle("hidden");
    }
    toggleSearch() {
        this._searchIcon.classList.toggle("active");
        const inputField = document.querySelector(".input-field");
        if (this._isSmallScreen()) this._toggleSearchOnSmallDevices();
        this.#search.classList.toggle("active");
        inputField.focus();
    }
}
const base = new BaseView();
exports.default = base;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gBuvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _helpers = require("../helpers");
"use strict";
class Banner {
    #ctrlIndex = 0;
    #parentElement = document.getElementById("page-home");
    #banner = null;
    #cover = null;
    #moviesDB;
    constructor(data){
        this.#moviesDB = data;
        this._init();
    }
    /**
   * Initializes the banner by:
   * - Creating the banner element
   * - Inserting it into the DOM
   * - Creating the image cover element
   * - Inserting the cover into the banner
   * - Rendering the banner controls
   * - Rendering the initial banner slider
   * - Adding click handlers to the controls to update the slider
   */ _init() {
        if (!this.#parentElement) return;
        this._createBanner();
        this.#parentElement.insertAdjacentElement("afterbegin", this.#banner);
        this._createCover();
        this.#banner.insertAdjacentElement("afterbegin", this.#cover);
        // -------------------
        this._renderBannerControl();
        this._renderBannerSlider();
        // -----------------
        this.#banner.querySelectorAll("button").forEach((el)=>el.addEventListener("click", ()=>{
                this.#ctrlIndex = +el.getAttribute("slider-control");
                this._renderNewSlide();
                this._moveSliderControl(true);
            }));
    }
    /* Creates the banner element with necessary child elements and styling.
     The banner contains:
     - banner-content: div to hold banner slide content
     - slider-control 
       - control-inner: div to hold the banner control buttons
  */ _createBanner() {
        this.#banner = document.createElement("section");
        this.#banner.classList.add("banner-slider");
        this.#banner.ariaLabel = "Popular Movies";
        this.#banner.innerHTML = `
    <div class="banner-content"></div>

    <div class="slider-control">
      <div class="control-inner"></div>
    </div>
  `;
    }
    /**
   * Creates the image cover element and adds necessary styling.
   * The cover overlays the banner and displays the backdrop image.
   */ _createCover() {
        this.#cover = document.createElement("div");
        this.#cover.classList.add("img-cover");
    }
    /**
   * Renders the banner control.
   *
   * Iterates through the popular movies from the movie DB.
   * Creates a control item for each movie with the movie title, index, and poster path.
   * Appends the control item to the banner's control inner container.
   */ _renderBannerControl() {
        this.#moviesDB.popularMovies.forEach((movie, index)=>{
            const { title, poster_path } = movie;
            const item = this._createControlItem(index, title, poster_path);
            this.#banner.querySelector(".control-inner").appendChild(item);
        });
    }
    /**
   * Creates a control item for the banner slider.
   * @param {number} index - The index of the movie item
   * @param {string} title - The title of the movie
   * @param {string} poster_path - The path to the movie poster image
   * @returns {Element} - The created control item element
   */ _createControlItem(index, title, poster_path) {
        const controlItem = document.createElement("button");
        controlItem.classList.add("poster-box", "slider-item");
        controlItem.setAttribute("slider-control", `${index}`);
        controlItem.innerHTML = `
          <img
            src="${0, _config.IMAGE_BASE_URL}w154${poster_path}"
            alt="slide to ${title}"
            loading="lazy"
            draggable="false"
            class="img-cover"
          />
        `;
        return controlItem;
    }
    /**
   * Renders the banner slider.
   *
   * Calls _renderNewSlide() and _moveSliderControl() to initialize
   * the banner slider with the first slide.
   *
   * Sets an interval to call _updateBannerSlider() every x milliseconds
   * to rotate between slides automatically.
   */ _renderBannerSlider() {
        this._renderNewSlide(), this._moveSliderControl();
        setInterval(()=>this._updateBannerSlider(), (0, _config.SLIDER_INTERVAL_VALUE));
    }
    /**
   * Updates the banner slider by rendering a new slide
   * and moving the control to the next item.
   * @param {boolean} [reload=false] - Whether to reload the slides completely.
   */ _updateBannerSlider(reload = false) {
        this._renderNewSlide();
        this._moveSliderControl(reload);
    }
    /**
   * Renders a new slide in the banner slider.
   * Clears existing content, extracts details of the movie at the current
   * index, sets the background image, generates HTML content, and inserts
   * it into the banner.
   */ _renderNewSlide() {
        // Clear existing content
        this.#banner.querySelector(".banner-content").innerHTML = "";
        // Extract movie details
        const { backdrop_path, title } = this.#moviesDB.popularMovies[this.#ctrlIndex];
        // Set cover attributes
        this.#cover.setAttribute("alt", title);
        this.#cover.style.backgroundImage = `url('${0, _config.IMAGE_BASE_URL}w1280${backdrop_path}')`;
        // Render HTML content
        const content = this._generateSlideContent(this.#ctrlIndex);
        // Insert content into the banner
        this.#banner.querySelector(".banner-content").insertAdjacentHTML("afterbegin", content);
    }
    /**
   * Generates HTML content for a banner slide
   * using details of the movie at the given index.
   *
   * Extracts required data from the movie object,
   * formats it appropriately, and inserts it
   * into a HTML template string.
   */ _generateSlideContent(movIndex) {
        // Date formatting
        const { title, release_date, genre_ids, overview, vote_average, id } = this.#moviesDB.popularMovies[movIndex];
        const releaseYear = release_date.split("-")[0];
        // Genre rendering using the asString function
        const genreString = (0, _helpers.asString)(genre_ids, this.#moviesDB.genres);
        // HTML content generation
        const content = `
      <h2 class="heading">${title}</h2>
      <div class="meta-list">
        <div class="meta-item">${releaseYear}</div>
        <p class="meta-item genre">${genreString}</p>
        <div class="meta-item card-badge">${vote_average.toFixed(1)}</div>
      </div>
      <p class="description">${overview}</p>
      <a href="detail.html" class="btn" onClick="${(0, _helpers.getMovieList)(id, title)}">
        <span class="material-symbols-outlined">play_circle</span>
        <span>Watch now</span>
      </a>
    `;
        return content;
    }
    /**
   * Moves the banner slider to the next slide.
   * Handles updating the slider controls,
   * scrolling the slider,
   * and resetting at the end.
   *
   * @param {boolean} reload - Whether to reset the active state of controls.
   */ _moveSliderControl(reload = false) {
        let lastControl = this.#banner.querySelectorAll("button")[this.#ctrlIndex === 0 ? (0, _config.LIMIT_INDEX) : this.#ctrlIndex - 1];
        let curControl = this.#banner.querySelectorAll("button")[this.#ctrlIndex];
        const inner = document.querySelector(".slider-control");
        if (reload === true) this.#banner.querySelectorAll("button").forEach((el)=>el.classList.remove("active"));
        // move slide
        if (this.#ctrlIndex >= 1 && this.#ctrlIndex <= (0, _config.LIMIT_INDEX)) inner.scrollBy({
            behavior: "smooth",
            left: (0, _config.SCROLL_STEP_VALUE)
        });
        if (this.#ctrlIndex === 0) inner.scrollBy({
            behavior: "smooth",
            left: (0, _config.SCROLL_RESET_VALUE)
        });
        if (lastControl) lastControl.classList.remove("active");
        curControl.classList.add("active");
        if (this.#ctrlIndex === (0, _config.LIMIT_INDEX)) this.#ctrlIndex = (0, _config.RESET_INDEX_VALUE);
        else this.#ctrlIndex++;
    }
}
exports.default = Banner;

},{"../config":"k5Hzs","../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "IMAGE_BASE_URL", ()=>IMAGE_BASE_URL);
parcelHelpers.export(exports, "POPULAR_MOVIES_PATH", ()=>POPULAR_MOVIES_PATH);
parcelHelpers.export(exports, "UPCOMING_MOVIES_PATH", ()=>UPCOMING_MOVIES_PATH);
parcelHelpers.export(exports, "TRENDING_MOVIES_PATH", ()=>TRENDING_MOVIES_PATH);
parcelHelpers.export(exports, "TOP_RATED_MOVIES_PATH", ()=>TOP_RATED_MOVIES_PATH);
parcelHelpers.export(exports, "GENRE_LIST_PATH", ()=>GENRE_LIST_PATH);
parcelHelpers.export(exports, "LIMIT_INDEX", ()=>LIMIT_INDEX);
parcelHelpers.export(exports, "RESET_INDEX_VALUE", ()=>RESET_INDEX_VALUE);
parcelHelpers.export(exports, "SCROLL_STEP_VALUE", ()=>SCROLL_STEP_VALUE);
parcelHelpers.export(exports, "SCROLL_RESET_VALUE", ()=>SCROLL_RESET_VALUE);
parcelHelpers.export(exports, "SLIDER_INTERVAL_VALUE", ()=>SLIDER_INTERVAL_VALUE);
const API_KEY = "f335a17fdfee834138662fea179d0d9d";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POPULAR_MOVIES_PATH = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
const UPCOMING_MOVIES_PATH = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`;
const TRENDING_MOVIES_PATH = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=1`;
const TOP_RATED_MOVIES_PATH = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
const GENRE_LIST_PATH = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const LIMIT_INDEX = 19;
const RESET_INDEX_VALUE = 0;
const SCROLL_STEP_VALUE = 120;
const SCROLL_RESET_VALUE = -5000;
const SLIDER_INTERVAL_VALUE = 5000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getServerData", ()=>getServerData);
parcelHelpers.export(exports, "asString", ()=>asString);
parcelHelpers.export(exports, "getMovieList", ()=>getMovieList);
parcelHelpers.export(exports, "createMovieCard", ()=>createMovieCard);
var _configJs = require("./config.js");
const getServerData = async function(Url, callBack, optionalParameter) {
    try {
        const res = await fetch(Url);
        if (!res.ok) throw new Error(`Failed to fetch getting Popular Movies (HTTP status ${res.status})`);
        const data = await res.json();
        return callBack(data, optionalParameter);
    } catch (err) {
        throw new Error(err);
    }
};
const asString = function(genIds, genres) {
    let newGenreList = [];
    genIds.forEach((id)=>{
        if (id in genres) newGenreList.push(genres[id]);
    });
    return newGenreList.join(", ");
};
const getMovieList = function(urlParam, pathName) {
    window.localStorage.clear();
    window.localStorage.setItem("pathName", pathName);
    window.localStorage.setItem("urlParam", urlParam);
};
const createMovieCard = function(movie) {
    const { poster_path, title, vote_average, release_date, id } = movie;
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="${0, _configJs.IMAGE_BASE_URL}w342${poster_path}"
        alt="${title}"
        class="img-cover"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
      <div class="meta-item">
      <span class="material-symbols-outlined ${vote_average >= 8.4 ? "top-rated" : ""}" style="color: #FFD700">
      grade
      </span>

        <span class="span">${vote_average.toFixed(1)}</span>
      </div>

      <div class="card-badge">${!release_date ? "" : release_date.split("-")[0]}</div>
    </div>

    <a href="./detail.html" title="${title}" class="card-btn"></a>
  `;
    card.querySelector(".card-btn").addEventListener("click", function() {
        getMovieList(id, title);
    });
    return card;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs"}],"fqfWn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
class HomePages {
    #moviesDb;
    #parentElement = document.getElementById("page-home");
    constructor(data){
        this.#moviesDb = data;
        this._init();
    }
    _init() {
        if (!this.#parentElement) return;
        for (const { title, movieList } of this.#moviesDb.homePageSections)this._createNewPage(title, movieList);
    }
    _createNewPage(title, movies) {
        const newPage = document.createElement("section");
        newPage.classList.add("movie-list");
        newPage.ariaLabel = `${title}`;
        newPage.innerHTML = `
      <div class="title-wrapper">
        <h3 class="title-large">${title}</h3>
      </div>
      <div class="slider-list">
        <div class="slider-inner"></div>
      </div>
    `;
        for (const movie of movies){
            const movieCard = (0, _helpers.createMovieCard)(movie); //created from movie_card.js
            newPage.querySelector(".slider-inner").appendChild(movieCard);
        // console.log(movieCard)
        }
        this.#parentElement.insertAdjacentElement("beforeend", newPage);
    }
}
exports.default = HomePages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers":"hGI1E"}],"4E4XX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMovieList", ()=>getMovieList);
var _helpers = require("../helpers");
const getMovieList = function(urlParam, genreName) {
    window.localStorage.clear();
    window.localStorage.setItem("genreName", genreName);
    window.localStorage.setItem("urlParam", urlParam);
};
class Sidebar {
    #genres;
    #parentElement = document.querySelector(".sidebar");
    constructor({ genres }){
        this.#genres = Object.entries(genres);
        this._init();
    }
    _init() {
        this._innerParentElement();
        const languages = [
            [
                "en",
                "English"
            ],
            [
                "es",
                "Spanish"
            ],
            [
                "zh",
                "Chinese"
            ],
            [
                "hi",
                "Hindi"
            ],
            [
                "ar",
                "Arabic"
            ],
            [
                "ko",
                "Korean"
            ]
        ];
        this._createNavList("Languages", languages);
        this._createNavList("Genres", this.#genres);
        this._addNavItemsHandlers();
    }
    _innerParentElement() {
        this.#parentElement.innerHTML = `
        <div class="sidebar-inner">
          <div class="sidebar-contact">
            <p class="copyright">
              \xa9 2024
              <a href="https://github.com/IvanMendozaMendoza">Ivan Mendoza Mendoza.</a>
              <br />
              All rights reserved.
            </p>
          </div>
        </div>`;
    }
    _createNavList(title, itemsList) {
        const list = document.createElement("div");
        list.classList.add("sidebar-list");
        list.innerHTML = `
        <p class="list-title">${title}</p>
      `;
        itemsList.forEach((item, index)=>{
            let child;
            if (title === "Languages") child = `<a href="list.html" class="list-item" path="with_original_language=${item[0]}">${item[1]}</a>`;
            else child = `<a href="list.html" class="list-item" path="with_genres=${item[0]}">${item[1]}</a>`;
            list.insertAdjacentHTML("beforeend", child);
        });
        this.#parentElement.querySelector(".sidebar-inner").insertAdjacentElement("afterbegin", list);
    }
    _addNavItemsHandlers() {
        const languageLinks = this.#parentElement.querySelectorAll(".list-item");
        languageLinks.forEach((link)=>{
            const linkName = link.textContent;
            const path = link.getAttribute("path");
            link.addEventListener("click", ()=>(0, _helpers.getMovieList)(path, linkName));
        });
    }
}
exports.default = Sidebar;

},{"../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0Qr3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
class MovieList {
    #parentElement = document.getElementById("page-list");
    #path = window.localStorage.getItem("urlParam");
    #genreName = window.localStorage.getItem("pathName");
    constructor(fetchFunction){
        if (!this.#parentElement) return;
        this.#parentElement.innerHTML = "";
        this._init(fetchFunction);
    }
    async _init(getMovieList) {
        let currentPage = 1;
        let totalPages = 0;
        const path = this.#path;
        const getMovies = await getMovieList(path, currentPage);
        const { results: movies, total_pages } = getMovies;
        totalPages = total_pages;
        document.title = `${this.#genreName}`;
        const movieListEl = document.createElement("section");
        movieListEl.classList.add("movie-list", "genre-list");
        movieListEl.ariaLabel = `${this.#genreName} movies`;
        movieListEl.innerHTML = `
    <div class="title-wrapper">
      <h1 class="heading">All ${this.#genreName} Movies</h1>  
    </div>
    
    <div class="grid-list">
    </div>
    
    <button class="btn load-more" load-more>
      Load More  
    </button>
    `;
        movies.forEach((movie)=>{
            const movieCard = (0, _helpers.createMovieCard)(movie);
            movieListEl.querySelector(".grid-list").append(movieCard);
        });
        this.#parentElement.insertAdjacentElement("afterbegin", movieListEl);
        const loadMore = movieListEl.querySelector("[load-more]");
        loadMore.addEventListener("click", async function() {
            if (currentPage >= totalPages) {
                this.style.display = "none"; // this == load more button 👾
                return;
            }
            currentPage++;
            this.classList.add("loading");
            const AdditionalMovies = await getMovieList(path, currentPage);
            const { results: movieList } = AdditionalMovies;
            if (movieList) this.classList.remove("loading");
            movieList.forEach((movie)=>{
                const movieCard = (0, _helpers.createMovieCard)(movie);
                movieListEl.querySelector(".grid-list").append(movieCard);
            });
        });
    }
}
exports.default = MovieList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers":"hGI1E"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "movieDB", ()=>movieDB);
parcelHelpers.export(exports, "getPopularMovies", ()=>getPopularMovies);
parcelHelpers.export(exports, "getHomePageMovieLists", ()=>getHomePageMovieLists);
parcelHelpers.export(exports, "getGenreList", ()=>getGenreList);
parcelHelpers.export(exports, "getMovieListByCategory", ()=>getMovieListByCategory);
parcelHelpers.export(exports, "getMovieListBySearching", ()=>getMovieListBySearching);
parcelHelpers.export(exports, "getMovieById", ()=>getMovieById);
parcelHelpers.export(exports, "getSugestedMovies", ()=>getSugestedMovies);
var _helpers = require("./helpers");
var _config = require("./config");
const movieDB = {
    genres: {},
    popularMovies: [],
    homePageSections: [
        {
            title: "Upcoming Movies",
            path: (0, _config.UPCOMING_MOVIES_PATH)
        },
        {
            title: "Weekly Trending Movies",
            path: (0, _config.TRENDING_MOVIES_PATH)
        },
        {
            title: "Top Rated Movies",
            path: (0, _config.TOP_RATED_MOVIES_PATH)
        }
    ]
};
const getPopularMovies = async function() {
    try {
        await (0, _helpers.getServerData)((0, _config.POPULAR_MOVIES_PATH), ({ results })=>{
            results.forEach((movie)=>movieDB.popularMovies.push(movie));
        });
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error fetching popular movies: ${error.message}`);
    }
};
const getHomePageMovieLists = async function() {
    try {
        const fetchPromises = movieDB.homePageSections.map(async ({ path }, index)=>{
            await (0, _helpers.getServerData)(path, ({ results })=>{
                movieDB.homePageSections[index].movieList = results;
            });
        });
        await Promise.all(fetchPromises);
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error fetching home page movie lists: ${error.message}`);
    }
};
const getGenreList = async function() {
    try {
        await (0, _helpers.getServerData)((0, _config.GENRE_LIST_PATH), ({ genres })=>{
            genres.forEach(({ id, name })=>{
                movieDB.genres[id] = name;
            });
        });
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error fetching genre lists: ${error.message}`);
    }
};
const getMovieListByCategory = async function(path, page) {
    try {
        const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${(0, _config.API_KEY)}&sort_by=popularity.desc&include_adult=false&page=${page}&${path}`;
        const res = await fetch(fetchUrl);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching data on getting genre list ${error.message}`);
    }
};
const getMovieListBySearching = async function(path) {
    try {
        const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${(0, _config.API_KEY)}&query=${path}&page=1&include_adult=false`;
        const res = await fetch(fetchUrl);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching data on searching movie ${error.message}`);
    }
};
const getMovieById = async function(movieId) {
    try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${(0, _config.API_KEY)}&append_to_response=casts,videos,images,releases`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching the movie by getting id`);
    }
};
const getSugestedMovies = async function(movieId) {
    try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${(0, _config.API_KEY)}&page=1`;
        const res = await fetch(url);
        const data = await res.json();
        const { results } = data;
        return results;
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching the suggested movies ${error.message}`);
    }
};

},{"./helpers":"hGI1E","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
class Search {
    #parentElement = document.querySelector(".container");
    #searchWrapper = document.querySelector(".search-wrapper");
    #searchField = document.querySelector(".input-field");
    #header = document.querySelector(".header");
    constructor(fetchFunc){
        this._init(fetchFunc);
    }
    _init(getMoviesBySearch) {
        const wrapper = this.#searchWrapper;
        const field = this.#searchField;
        const header = this.#header;
        const searchResultsModal = document.createElement("div");
        searchResultsModal.classList.add("search-modal");
        this.#parentElement.appendChild(searchResultsModal);
        let searchTimeout;
        this.#searchField.addEventListener("input", function() {
            if (!field.value.trim()) {
                searchResultsModal.classList.remove("active");
                wrapper.classList.remove("searching");
                header.classList.remove("searching");
                clearTimeout(searchTimeout);
                return;
            }
            wrapper.classList.add("searching");
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(async function() {
                const getMovies = await getMoviesBySearch(field.value);
                const { results: movieList } = getMovies;
                wrapper.classList.remove("searching");
                header.classList.add("searching");
                searchResultsModal.classList.add("active");
                searchResultsModal.innerHTML = ``; //clear before
                searchResultsModal.innerHTML = ` 
        <p class="label">Results for</p>
        <h1 class="heading">${field.value}</h1>

        <div class="movie-list">
          <div class="grid-list"></div>
        </div>
       `; // add new results
                movieList.forEach((movie)=>{
                    const movieCard = (0, _helpers.createMovieCard)(movie);
                    searchResultsModal.querySelector(".grid-list").appendChild(movieCard);
                });
            }, 500);
        });
    }
}
exports.default = Search;

},{"../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54CQD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _helpers = require("../helpers");
class DetailPage {
    #parentElement = document.getElementById("page-detail");
    #movieId = window.localStorage.getItem("urlParam");
    constructor(fetchMovieFunc, moviesRecom){
        if (!this.#parentElement) return;
        this._init(fetchMovieFunc);
        this._showSugestedMovies(moviesRecom);
    }
    async _init(getMovie) {
        const movie = await getMovie(this.#movieId);
        const { backdrop_path, poster_path, title, release_date, runtime, vote_average, releases: { countries: [{ certification }] }, genres, overview, casts: { cast, crew }, videos: { results: videos } } = movie;
        document.title = `${title} | Movieck Catalog: Explore a Diverse Collection of Movies`;
        const detail = document.createElement("div");
        detail.classList.add("movie-detail");
        detail.innerHTML = ` 
      <div
        class="backgrop-image"
        style="background-image: url('${0, _config.IMAGE_BASE_URL}${"w1280"}${backdrop_path || poster_path}')"
      ></div>

      <figure class="poster-box movie-poster">
        <img
          src="${0, _config.IMAGE_BASE_URL}w342${poster_path}"
          alt="${title}"
          class="img-cover"
        />
      </figure>

      <div class="detail-box">
        <div class="detail-content">
          <h1 class="heading">${title}</h1>

          <div class="meta-list">
            <div class="meta-item">
            <span class="material-symbols-outlined ${vote_average >= 8.4 ? "top-rated" : ""}" style="color: #FFD700">
              grade
              </span>
              <span class="span">${vote_average.toFixed(1)}</span>
            </div>

            <div class="separator"></div>
            <div class="meta-item">${runtime}m</div>

            <div class="separator"></div>
            <div class="meta-item">${release_date}</div>

            <div class="card-item card-badge">${certification}</div>
          </div>

          <div class="genre">${this._getGenres(genres)}</div>

          <div class="description">
           ${overview}
          </div>
        </div>
        <ul class="detail-list">
          <div class="list-item">
            <div class="list-name">Directed By</div>

            <p>${this._getDirectors(crew)}</p>
          </div>
          <!-- ####### -->
          <div class="list-item">
            <div class="list-name">Starring</div>

            <div class="slider-list">
              <div class="slider-inner cast-container"></div>
            </div>
          </div>
        </ul>

        <div class="title-wrapper">
          <h3 class="title-large">Trailers and clips</h3>
        </div>

        <div class="slider-list">
          <div class="slider-inner video-container"></div>
        </div>
      </div>
    `;
        if (!this._filterVideos(videos).length == 0) console.log("first");
        this._filterVideos(videos).forEach(({ key, name })=>{
            const videoCard = document.createElement("div");
            videoCard.classList.add("video-card");
            videoCard.innerHTML = `
        <iframe 
        width="500" 
        height="294" 
        src="https://www.youtube.com/embed/${key}?theme=dark&color=white&rel=0"
        frameborder="0"
        allowfullscreen="1"
        title="${name}"
        class="img-cover"
        loading="lazy"
        >
        </iframe> 
        `;
            detail.querySelector(".video-container").appendChild(videoCard);
        });
        this._getCast(cast).forEach(({ character, original_name, profile_path })=>{
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");
            userCard.innerHTML = `
            <div class="user-card">
            <figure class="poster-box">
              <img
                src="${0, _config.IMAGE_BASE_URL}w342${profile_path}"
                alt="user card"
                class="img-cover"
                loading="lazy"
              />
            </figure>
            <div class="title-wrapper">
              <h3 class="user-name">${original_name}</h3>
            </div>
          </div>
            `;
            detail.querySelector(".cast-container").appendChild(userCard);
        });
        this.#parentElement.insertAdjacentElement("afterbegin", detail);
    }
    _getGenres(genres) {
        const genreNames = genres.map(({ name })=>name);
        return genreNames.join(", ");
    }
    _getDirectors(crewList) {
        const directors = crewList.filter(({ job })=>job === "Director");
        const names = directors.map(({ name })=>name);
        return names.join(", ");
    }
    _filterVideos(videoList) {
        return videoList.filter(({ type, site })=>type === "Teaser" || type === "Trailer" && site === "Youtube");
    }
    _getCast(castList) {
        return castList.filter(({ profile_path })=>profile_path !== null && profile_path !== undefined);
    }
    async _showSugestedMovies(getMovRecom) {
        const movies = await getMovRecom(this.#movieId);
        const movieListEl = document.createElement("section");
        movieListEl.classList.add("movie-list");
        movieListEl.ariaLabel = "Suggested Movies";
        movieListEl.innerHTML = `
      <div class="title-wrapper">
        <h3 class="title-large">You May Also Like</h3>
      </div>

      <div class="slider-list">
        <div class="slider-inner"></div>
      </div>
    `;
        movies.forEach((movie)=>{
            const movieCard = (0, _helpers.createMovieCard)(movie);
            movieListEl.querySelector(".slider-inner").appendChild(movieCard);
        });
        this.#parentElement.insertAdjacentElement("beforeend", movieListEl);
    }
}
exports.default = DetailPage;

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers":"hGI1E"}]},["f0HGD","aenu9"], "aenu9", "parcelRequire84ce")

//# sourceMappingURL=index.e37f48ea.js.map
