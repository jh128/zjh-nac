/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
const userController = __webpack_require__(11)
const navUtil = __webpack_require__(14)
navUtil.render()
userController.render()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sme_router__);

const homeController = __webpack_require__(3)
const positionController = __webpack_require__(5)

const router = new __WEBPACK_IMPORTED_MODULE_0_sme_router___default.a('router-view')

// route config
router.route('/position', (req, res, next) => {
  positionController.listPos({req, res, next, router})
})

router.route('/position_search', (req, res, next) => {
  positionController.listSearchPos({router, req, res, next})
})

router.route('/position_save', (req, res, next) => {
  positionController.addPos({router, req, res, next})
})

router.route('/position_update', (req, res, next) => {
  positionController.updatePos({router, req, res, next})
})

router.route('/home', (req, res, next) => {
  homeController.render({router, req, res, next})
})

router.route('*', (req, res, next) => {
  res.redirect('/home')
})


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["sme-router"]=t():e["sme-router"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),a=n(7),u=function(){function e(t){r(this,e),this.matcher=t.matcher,this._matchedCount=0}return o(e,[{key:"_fireHandlers",value:function(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=this._getCache(r),i={body:t||o,query:r.query,params:r.params};(0,a.def)(i,"route",r.path),(0,a.def)(i,"url",r.url),!t&&o&&(i._id=r._id),r.handler(i),this._cacheBody(t,r)}}},{key:"_getCache",value:function(e){return(0,i.getCache)(e._id)}},{key:"_cacheBody",value:function(e,t){e&&(0,i.setCache)(t._id,e)}},{key:"getMatchedCount",value:function(){return this._matchedCount}},{key:"go",value:function(e,t){}},{key:"redirect",value:function(e,t){}},{key:"back",value:function(){}},{key:"stop",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=r(a),s=n(5),c=r(s),l=n(8),f=r(l),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";if(o(this,e),this._mount=document.getElementById(t),!this._mount)throw new Error("Can not get mount point document.getElementById(#"+t+")...");this._subRouteView='<div id="__sub-route-view"></div>',this._subMount=null,this._isPassing=!1,this._cache={},this._middlewares=[],this._matcher=new u.default,this._history="hash"===n?new f.default({matcher:this._matcher}):new c.default({matcher:this._matcher})}return i(e,[{key:"render",value:function(e){this._isPassing?this._subMount.innerHTML=e:this._mount.innerHTML=e}},{key:"next",value:function(e){this._mount.innerHTML=e,this._isPassing=this._history.getMatchedCount()>1,this._subMount=document.querySelector("#__sub-route-view")}},{key:"subRoute",value:function(){return this._subRouteView}},{key:"use",value:function(e){this._middlewares.push(e)}},{key:"route",value:function(e,t){var n=this;this._matcher.add(e,function(r){if("*"!==e&&!r._id)for(var o=0;o<n._middlewares.length;o++)n._middlewares[o](r);t(r,n,n.next.bind(n))})}},{key:"go",value:function(e,t){this._isPassing=!1,this._history.go(e,t)}},{key:"redirect",value:function(e,t){this._isPassing=!1,this._history.redirect(e,t)}},{key:"back",value:function(){this._isPassing=!1,this._history.back()}},{key:"stop",value:function(){this._history.stop()}}]),e}();t.default=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(4),s=function(){function e(){r(this,e),this._routes=[],this._id=0}return o(e,[{key:"match",value:function(e){var t=[],n="",r=e.indexOf("?"),o=!0;r>-1&&(n=e.substr(r),e=e.slice(0,r));for(var i=0;i<this._routes.length;i++){var a=this._routes[i],s=a.reg.exec(e);if(s){if("*"!==a.path&&(o=!1),!o&&"*"===a.path)continue;t.push({_id:a._id,path:a.path,url:e+n,params:this._getParams(a.params,s),query:(0,u.parseQuery)(n),handler:a.handler})}}return t}},{key:"add",value:function(e,t){var n=this._toReg({path:e,handler:t});n._id=++this._id,this._routes.push(n)}},{key:"_toReg",value:function(e){return e.params=[],e.reg="*"===e.path?/[\w\W]*/i:(0,a.default)(e.path,e.params,{end:!1}),e}},{key:"_getParams",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n={},r=0;r<e.length;r++)n[e[r].name]=t[r+1];return n}}]),e}();t.default=s},function(e,t){function n(e,t){for(var n,r=[],o=0,u=0,s="",c=t&&t.delimiter||p,l=t&&t.delimiters||d,f=!1;null!==(n=y.exec(e));){var h=n[0],v=n[1],_=n.index;if(s+=e.slice(u,_),u=_+h.length,v)s+=v[1],f=!0;else{var m="",b=e[u],g=n[2],w=n[3],k=n[4],x=n[5];if(!f&&s.length){var E=s.length-1;l.indexOf(s[E])>-1&&(m=s[E],s=s.slice(0,E))}s&&(r.push(s),s="",f=!1);var O=""!==m&&void 0!==b&&b!==m,j="+"===x||"*"===x,P="?"===x||"*"===x,C=m||c,M=w||k;r.push({name:g||o++,prefix:m,delimiter:C,optional:P,repeat:j,partial:O,pattern:M?a(M):"[^"+i(C)+"]+?"})}}return(s||u<e.length)&&r.push(s+e.substr(u)),r}function r(e,t){return o(n(e,t))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var s,c=n?n[u.name]:void 0;if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(s=i(c[l]),!t[a].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===l?u.prefix:u.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(s=i(String(c)),!t[a].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function s(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function c(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",u(n))}function l(e,t,r){return f(n(e,r),t,r)}function f(e,t,n){n=n||{};for(var r=n.strict,o=!1!==n.end,a=i(n.delimiter||p),s=n.delimiters||d,c=[].concat(n.endsWith||[]).map(i).concat("$").join("|"),l="",f=!1,h=0;h<e.length;h++){var y=e[h];if("string"==typeof y)l+=i(y),f=h===e.length-1&&s.indexOf(y[y.length-1])>-1;else{var v=i(y.prefix),_=y.repeat?"(?:"+y.pattern+")(?:"+v+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?l+=v+"("+_+")?":l+="(?:"+v+"("+_+"))?":l+=v+"("+_+")"}}return o?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),f||(l+="(?="+a+"|"+c+")")),new RegExp("^"+l,u(n))}function h(e,t,n){return e instanceof RegExp?s(e,t):Array.isArray(e)?c(e,t,n):l(e,t,n)}e.exports=h,e.exports.parse=n,e.exports.compile=r,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=f;var p="/",d="./",y=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(e,t,n){"use strict";function r(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.split("="),r=o(n,2),i=r[0],a=r[1],u=[decodeURIComponent(i),a?decodeURIComponent(a):null],s=u[0],c=u[1];t[s]=c}),t):null}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseQuery=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._init(),window.addEventListener("load",n._listen),window.addEventListener("popstate",n._listen),n}return i(t,e),a(t,[{key:"_init",value:function(){var e=this;this._listen=function(t){var n=""+location.pathname+location.search,r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,t.state)}}},{key:"_routeTo",value:function(e,t){var n=this.matcher.match(e);this._matchedCount=n.length,this._fireHandlers(n,t)}},{key:"go",value:function(e,t){history.pushState(t,"",e),this._routeTo(e,t)}},{key:"redirect",value:function(e,t){history.replaceState(t,"",e),this._routeTo(e,t)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("popstate",this._listen)}}]),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e,t){t&&i.setItem(""+a+e,JSON.stringify(t))}function o(e){try{var t=i.getItem(""+a+e);return t?JSON.parse(t):null}catch(e){throw new Error("parse body err")}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCache=r,t.getCache=o;var i=sessionStorage,a="smer"},function(e,t,n){"use strict";function r(e,t,n){Object.defineProperty(e,t,{writable:!1,enumerable:!0,value:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.def=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._cache={},n._init(),window.addEventListener("load",n._listen),window.addEventListener("hashchange",n._listen),n}return i(t,e),a(t,[{key:"_getHash",value:function(){return location.hash.slice(1)}},{key:"_init",value:function(){var e=this;this._listen=function(t){var n=e._getHash(),r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,e._cache[n])}}},{key:"go",value:function(e,t){this._cache[e]=t,location.hash=""+e}},{key:"redirect",value:function(e,t){var n=location.href,r=n.indexOf("#");e=r>0?n.slice(0,r)+"#"+e:n.slice(0,0)+"#"+e,this._cache[e]=t,location.replace(e)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("hashchange",this._listen)}}]),t}(s.default);t.default=c}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const homeTpl = __webpack_require__(4)

module.exports = {
  render({req, res, next}) {
    res.render(homeTpl)
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div>  欢迎使用拉勾网管理系统，系统采用Gulp+AdminLTE+Bootstrap+SMERouter+ArtTemplate+Express+EJS+MongoDB+Mongoose</div>"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 引入三个view
const positionListTpl = __webpack_require__(6)
const positionAddTpl = __webpack_require__(7)
const positionUpdateTpl = __webpack_require__(8)
const toolsUtil = __webpack_require__(9)
const wsCache = new WebStorageCache();

const positionModel = __webpack_require__(10)

const pageSize = 10
let currentHash = ''
// 定义position Controller (单例)
const positionController = {
  // 职位list列表接口
  async listPos({res, req, router}){
    positionController._renderList({res, req, router})
  },

  // 职位list search列表接口
  async listSearchPos({res, req, router}){
    positionController.handleSearchPos({res, req, router})
  },

  _renderPagination({start, count, router, result, res, req, keywords=''}) {
    let that = positionController

    let href = keywords ? '#/position_search?' : '#/position?'
    let preHref = '', nextHref = '', pages = []

    start = parseInt(start, 10)
    count = parseInt(count, 10)
    // 上一页
    if (start == 0) {
      preHref = href + 'start=0'
    } else {
      preHref = href + 'start=' + (start - count)
    }

    let pageCount = Math.ceil(result.data.total/count)
    // 下一页
    let lastStart = (pageCount - 1) * count
    if (start == lastStart) {
      nextHref = href + 'start=' + lastStart
    } else {
      nextHref = href + 'start=' + (start + count)
    }
    preHref += '&count=' + count + '&keywords=' + keywords
    nextHref += '&count=' + count + '&keywords=' + keywords

    // 页码
    let active = toolsUtil.hashParse().start || 0
    for (var i = 0; i < pageCount; i++) {
      pages.push({
        str: `${href}start=${i * count}&count=${count}&keywords=${keywords}`,
        active: i * count == active
      })
    }

    if (result.data.result.length) {
      let tpl = template.render(positionListTpl, {
        data: result.data.result,
        preHref,
        nextHref,
        pages,
        keywords
      })
      res.render(tpl)
    } else {
      let hash = location.hash.slice(1)
      let index = hash.indexOf('?')
      let path = hash.substring(0, index)
      let newStart = start > 0 ? start - pageSize : 0
      router.go(`${path}?start=${newStart}&count=${pageSize}`)
    }
    positionController.searchPos({req, res, router})

    // 重新绑定添加，删除和修改的事件
    that.removePos({res, req, router})
    that._updatePosInit({router})
    $('#addbtn').on('click', () => {
      currentHash = location.hash.slice(1)
      router.go('/position_save')
    })
  },

  async _renderList({res, req, router}) {
    let query = toolsUtil.hashParse()

    let { start, count } = !$.isEmptyObject(query) ? query : { start: 0, count: pageSize }
    let that = positionController
    let token = wsCache.get('token')
    let result = await positionModel.list({start, count, token})

    // 如果用户没有登录，不能显示列表信息
    if (!result.ret) {
      router.go('/home')
      return
    }

    // 渲染翻页
    that._renderPagination({start, count, router, result, res, req})

    $('#addbtn').on('click', () => {
      // currentHash = location.hash.slice(1)
      router.go('/position_save')
    })
    that.removePos({res, req, router})
    that._updatePosInit({router})

    // 搜索功能事件绑定，在list渲染完毕后
    this.searchPos({req, res, router})
  },

  // 职位添加接口
  addPos({res, req ,router}) {
    let that = positionController
    res.render(positionAddTpl)
    $('#posback').on('click', () => {
      router.go(currentHash)
    })
    that._handleSubmit(router)
  },

  _handleSubmit(router) {
    let that = positionController
    $('#possubmit').on('click', async () => {
      var options = {
        "success" : (result, status) => {
          that._resultForm(result, status, router)
        },
        "resetForm" : true,
        "dataType" : "json"
      };
      $("#possave").ajaxSubmit(options)
    })
  },

  _resultForm(result, status, router) {
    if (result.ret) {
      router.back()
    } else {
      alert('数据修改错误~')
    }
  },

  // 职位删除接口
  removePos({res, req, router}) {
    let that = positionController

    // console.log(hash);
    $('.pos-remove').on('click', async function () {
      let id = $(this).attr('posid')
      let filename = $(this).attr('filename')
      if (window.confirm('真的要删除吗')) {
        await positionModel.remove(id, filename)
        that._renderList({res, req, router})
      }
    })
  },

  // 修改职位信息初始化
  _updatePosInit({router}) {
    // 在list加载完的时候绑定
    $('.pos-edit').on('click', function () {
      currentHash = location.hash.slice(1)
      let id = $(this).attr('posid')
      router.go('/position_update', { id })
    })
  },

  // 职位修改接口（点击修改按钮的时候触发）
  async updatePos({res, req, router}) {
    let that = positionController
    let result = await positionModel.findById(req.body.id)
    let tpl = template.render(positionUpdateTpl, {data: result.data})
    router.render(tpl)

    that._handleSubmit(router)

    $('#posback').on('click', () => {
      router.go(currentHash)
    })
  },

  async handleSearchPos({req, res, router}) {
    let { start, count } = req.query || { start: 0, count: pageSize }
    let that = positionController

    let keywords = $('input[name=pos_search]').val()
    let result = await positionModel.findByKeywords({keywords, start, count})

    // 渲染翻页
    that._renderPagination({start, count, router, result, res, req, keywords})
  },

  // 职位搜索
  searchPos({req, res, router}) {
    if (req.query) {
      req.query.start = 0
      req.query.count = pageSize
    }

    $('#possearch').on('click', positionController.handleSearchPos.bind(this, {req, res, router}))
    $(document).on('keyup', function(e) {
      if (e.keyCode == 13) {
        positionController.handleSearchPos({req, res, router})
      }
    })
  }
}

const { addPos, listPos, updatePos, listSearchPos } = positionController

module.exports = {
  addPos, listPos, updatePos, listSearchPos
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">  <div class=\"box-header with-border\">    <h3 class=\"box-title\">       <button id=\"addbtn\" class=\"btn btn-block btn-success\"><span class=\"fa fa-plus\"></span> 添加</button>    </h3>    <div class=\"box-tools\">      <div class=\"input-group input-group-sm\" style=\"width: 150px;\">        <input type=\"text\" value=\"{{keywords}}\" name=\"pos_search\" class=\"form-control pull-right\" placeholder=\"搜索\">        <div class=\"input-group-btn\">          <button type=\"button\" id=\"possearch\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>        </div>      </div>    </div>  </div>  <!-- /.box-header -->  <div class=\"box-body\">    <table class=\"table table-bordered\">      <tr>        <th style=\"width: 10px\">#</th>        <th>公司Logo</th>        <th>公司名称</th>        <th>职位名称</th>        <th>工作地点</th>        <th>发布时间</th>        <th>岗位薪资</th>        <th style=\"width: 140px\">操作</th>      </tr>      {{if data.length > 0}}        {{each data}}        <tr>          <td>{{$index+1}}</td>          <td><img width=\"50\" height=\"50\" src=\"http://10.9.164.98:3000/uploads/{{$value.companyLogo}}\" alt=\"\"></td>          <td>{{$value.companyName}}</td>          <td>{{$value.positionName}}</td>          <td>{{$value.city}}</td>          <td>{{$value.createTime}}</td>          <td>{{$value.salary}}</td>          <td>            <button class=\"btn btn-sm btn-primary pos-edit\" posid=\"{{$value._id}}\"><span class=\"fa fa-edit\"></span> 修改</button>            <button class=\"btn btn-sm btn-danger pos-remove\" posid=\"{{$value._id}}\" filename=\"{{$value.companyLogo}}\"><span class=\"fa fa-remove\"></span> 删除</button>          </td>        </tr>        {{/each}}      {{else}}        <tr>          <td colspan=\"8\">暂无记录。</td>        </tr>      {{/if}}    </table>  </div>  <!-- /.box-body -->  <div class=\"box-footer clearfix\">    <ul class=\"pagination pagination-sm no-margin pull-right\">      <li><a href=\"{{preHref}}\">&laquo;</a></li>      {{each pages}}      <li class=\"<%= $value.active ? \'active\' : \'\' %>\"><a href=\"{{$value.str}}\">{{$index+1}}</a></li>      {{/each}}      <li><a href=\"{{nextHref}}\">&raquo;</a></li>    </ul>  </div></div><!-- /.box -->"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">  <div class=\"box-header with-border\">    <h3 class=\"box-title\">职位添加</h3>  </div>  <!-- /.box-header -->  <!-- form start -->  <form class=\"form-horizontal\" id=\"possave\" action=\"/api/position\" method=\"post\" enctype=\"multipart/form-data\">    <div class=\"box-body\">      <div class=\"form-group\">        <label for=\"companyLogo\" class=\"col-sm-2 control-label\">公司Logo</label>        <div class=\"col-sm-10\">          <input type=\"file\" class=\"form-control\" name=\"companyLogo\" id=\"companyLogo\" placeholder=\"请选择公司logo图片\">        </div>      </div>      <div class=\"form-group\">        <label for=\"companyName\" class=\"col-sm-2 control-label\">公司名称</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"companyName\" id=\"companyName\" placeholder=\"请输入公司名称\">        </div>      </div>      <div class=\"form-group\">        <label for=\"positionName\" class=\"col-sm-2 control-label\">职位名称</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"positionName\" id=\"positionName\" placeholder=\"请输入职位名称\">        </div>      </div>      <div class=\"form-group\">        <label for=\"city\" class=\"col-sm-2 control-label\">工作地点</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"city\" id=\"city\" placeholder=\"请输入工作地点\">        </div>      </div>      <div class=\"form-group\">        <label for=\"salary\" class=\"col-sm-2 control-label\">岗位薪资</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"salary\" id=\"salary\" placeholder=\"请输入岗位薪资\">        </div>      </div>      <div class=\"form-group\">        <label for=\"type\" class=\"col-sm-2 control-label\">工作性质</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"type\" id=\"type\" placeholder=\"请输入工作性质\">        </div>      </div>      <div class=\"form-group\">        <label for=\"experience\" class=\"col-sm-2 control-label\">工作经验</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"experience\" id=\"experience\" placeholder=\"请输入工作经验\">        </div>      </div>      <div class=\"form-group\">        <label for=\"degree\" class=\"col-sm-2 control-label\">学历要求</label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" name=\"degree\" id=\"degree\" placeholder=\"请输入学历要求\">        </div>      </div>      <div class=\"form-group\">        <label for=\"description\" class=\"col-sm-2 control-label\">职位描述</label>        <div class=\"col-sm-10\">          <textarea rows=\"8\" cols=\"80\" name=\"description\" class=\"form-control\" id=\"description\" placeholder=\"请输入职位描述\"></textarea>        </div>      </div>    </div>    <!-- /.box-body -->    <div class=\"box-footer\">      <button type=\"button\" id=\"posback\" class=\"btn btn-default\">返回</button>      <button type=\"button\" id=\"possubmit\" class=\"btn btn-info pull-right\">提交</button>    </div>    <!-- /.box-footer -->  </form></div>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">  <div class=\"box-header with-border\">    <h3 class=\"box-title\">职位编辑</h3>  </div>  <!-- /.box-header -->  <!-- form start -->  <form class=\"form-horizontal\" id=\"possave\" action=\"/api/position/update\" method=\"post\" enctype=\"multipart/form-data\">    <div class=\"box-body\">      <div class=\"form-group\">        <label for=\"companyLogo\" class=\"col-sm-2 control-label\">公司Logo</label>        <div class=\"col-sm-10\">          <img src=\"http://10.9.164.98:3000/uploads/{{data.companyLogo}}\" width=\"50\" height=\"50\" alt=\"\" />          <input type=\"file\" class=\"form-control\" name=\"companyLogo\" id=\"companyLogo\" placeholder=\"请选择公司logo图片\">        </div>      </div>      <div class=\"form-group\">        <label for=\"companyName\" class=\"col-sm-2 control-label\">公司名称</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.companyName}}\" class=\"form-control\" name=\"companyName\" id=\"companyName\" placeholder=\"请输入公司名称\">        </div>      </div>      <div class=\"form-group\">        <label for=\"positionName\" class=\"col-sm-2 control-label\">职位名称</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.positionName}}\" class=\"form-control\" name=\"positionName\" id=\"positionName\" placeholder=\"请输入职位名称\">        </div>      </div>      <div class=\"form-group\">        <label for=\"city\" class=\"col-sm-2 control-label\">工作地点</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.city}}\" class=\"form-control\" name=\"city\" id=\"city\" placeholder=\"请输入工作地点\">        </div>      </div>      <div class=\"form-group\">        <label for=\"salary\" class=\"col-sm-2 control-label\">岗位薪资</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.salary}}\" class=\"form-control\" name=\"salary\" id=\"salary\" placeholder=\"请输入岗位薪资\">        </div>      </div>      <div class=\"form-group\">        <label for=\"type\" class=\"col-sm-2 control-label\">工作性质</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.type}}\" class=\"form-control\" name=\"type\" id=\"type\" placeholder=\"请输入工作性质\">        </div>      </div>      <div class=\"form-group\">        <label for=\"experience\" class=\"col-sm-2 control-label\">工作经验</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.experience}}\" class=\"form-control\" name=\"experience\" id=\"experience\" placeholder=\"请输入工作经验\">        </div>      </div>      <div class=\"form-group\">        <label for=\"degree\" class=\"col-sm-2 control-label\">学历要求</label>        <div class=\"col-sm-10\">          <input type=\"text\" value=\"{{data.degree}}\" class=\"form-control\" name=\"degree\" id=\"degree\" placeholder=\"请输入学历要求\">        </div>      </div>      <div class=\"form-group\">        <label for=\"description\" class=\"col-sm-2 control-label\">职位描述</label>        <div class=\"col-sm-10\">          <textarea rows=\"8\" cols=\"80\" name=\"description\" class=\"form-control\" id=\"description\" placeholder=\"请输入职位描述\">{{data.positionName}}</textarea>        </div>      </div>    </div>    <!-- /.box-body -->    <div class=\"box-footer\">      <button type=\"button\" id=\"posback\" class=\"btn btn-default\">返回</button>      <button type=\"button\" id=\"possubmit\" class=\"btn btn-info pull-right\">提交</button>    </div>    <!-- /.box-footer -->    <input type=\"hidden\" name=\"filename\" value=\"{{data.companyLogo}}\">    <input type=\"hidden\" name=\"id\" value=\"{{data._id}}\">  </form></div>"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  hashParse() {
    let query = {}
    let hash = location.hash.slice(1)
    if (hash.indexOf('?') != -1) {
      let queryString = hash.substr(hash.indexOf('?')+1)
      let queryArray = queryString.split('&')
      queryArray.forEach((value, index) => {
        let tempArray = value.split('=')
        query[tempArray[0]] = tempArray[1]
      })
    }
    return query
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

const list = ({start, count, token}) => {
  return $.ajax({
    url: '/api/position',
    type: 'get',
    data: {
      start,
      count
    },
    headers: {
      'X-Access-Token': token
    },
    success: (result) => {
      return result
    }
  })
}

const findById = (id) => {
  return $.ajax({
    url: `/api/position/${id}`,
    success: (result) => {
      return result
    }
  })
}

const remove = (id, filename) => {
  return $.ajax({
    url: '/api/position',
    type: 'delete',
    data: {
      id,
      filename
    },
    success: (result) => {
      if (result.ret) {
        return result
      }
    }
  })
}

const findByKeywords = ({keywords, start, count}) => {
  return $.ajax({
    url: '/api/position/search',
    type: 'post',
    data: {
      keywords,
      start,
      count
    },
    success: (result) => {
      return result
    }
  })
}

module.exports = {
  list,
  remove,
  findById,
  findByKeywords
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const headerTpl = __webpack_require__(12)
const userModel = __webpack_require__(13)

var wsCache = new WebStorageCache();

module.exports = {
  async render() {
    this.renderTpl({
      greeting: '',
      isSignin: false
    })

    this.bindEvent()
    this.isSignin()
  },

  bindEvent() {
    $('#click-btn').on('click', (e) => {
      if ($(e.target).attr('id') === 'btn-signin') {
        $('#user-submit').on('click', async() => {
          let {username, password} = {
            username: $('#username').val(),
            password: $('#password').val()
          }
          let result = await userModel.sign({username, password}, 'signin')
          if (result.ret) {
            // 将token保存到localstorage里
            wsCache.set('token', result.data.token)

            this.renderTpl({
              greeting: '你好，' + result.data.username,
              isSignin: true
            })
          }
          $('#username').add('#password').val('')
        })
      } else {
        $('#user-submit').on('click', async() => {
          let {username, password} = {
            username: $('#username').val(),
            password: $('#password').val()
          }

          let result = await userModel.sign({username, password}, 'signup')
          if (result.ret) {
            alert(result.data)
          }
          $('#username').add('#password').val('')
        })
      }
    })
    $('#user-signout').on('click', () => {
      wsCache.delete('token')
      this.renderTpl({
        greeting: '',
        isSignin: false
      })
    })
  },

  async isSignin() {
    let result = await userModel.isSignin(wsCache.get('token'))
    if (result.ret) {
      this.renderTpl({
        greeting: '你好，' + result.data.username,
        isSignin: true
      })
    } else {
      this.renderTpl({
        greeting: '',
        isSignin: false
      })
    }
  },

  renderTpl({greeting, isSignin}) {
    let html = template.render(headerTpl, {
      greeting,
      isSignin
    })
    $('.main-header').remove()
    $('.wrapper').prepend(html)
    this.bindEvent()
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">  <!-- Logo -->  <a href=\"index2.html\" class=\"logo\">    <!-- mini logo for sidebar mini 50x50 pixels -->    <span class=\"logo-mini\"><b>拉勾</b></span>    <!-- logo for regular state and mobile devices -->    <span class=\"logo-lg\"><b>拉勾</b>管理系统</span>  </a>  <!-- Header Navbar -->  <nav class=\"navbar navbar-static-top\" role=\"navigation\">    <!-- Sidebar toggle button-->    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">      <span class=\"sr-only\">切换导航</span>    </a>    <!-- Navbar Right Menu -->    <div class=\"navbar-custom-menu\">      <ul class=\"nav navbar-nav\">        <!-- Messages: style can be found in dropdown.less-->        <li class=\"dropdown messages-menu\">          <!-- Menu toggle button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-envelope-o\"></i>            <span class=\"label label-success\">4</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 4 messages</li>            <li>              <!-- inner menu: contains the messages -->              <ul class=\"menu\">                <li><!-- start message -->                  <a href=\"#\">                    <div class=\"pull-left\">                      <!-- User Image -->                      <img src=\"./static/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">                    </div>                    <!-- Message title and timestamp -->                    <h4>                      Support Team                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>                    </h4>                    <!-- The message -->                    <p>Why not buy a new awesome theme?</p>                  </a>                </li>                <!-- end message -->              </ul>              <!-- /.menu -->            </li>            <li class=\"footer\"><a href=\"#\">查看所有消息</a></li>          </ul>        </li>        <!-- /.messages-menu -->        <!-- Notifications Menu -->        <li class=\"dropdown notifications-menu\">          <!-- Menu toggle button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-bell-o\"></i>            <span class=\"label label-warning\">10</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 10 notifications</li>            <li>              <!-- Inner Menu: contains the notifications -->              <ul class=\"menu\">                <li><!-- start notification -->                  <a href=\"#\">                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today                  </a>                </li>                <!-- end notification -->              </ul>            </li>            <li class=\"footer\"><a href=\"#\">全部</a></li>          </ul>        </li>        <!-- Tasks Menu -->        <li class=\"dropdown tasks-menu\">          <!-- Menu Toggle Button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-flag-o\"></i>            <span class=\"label label-danger\">9</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 9 tasks</li>            <li>              <!-- Inner menu: contains the tasks -->              <ul class=\"menu\">                <li><!-- Task item -->                  <a href=\"#\">                    <!-- Task title and progress text -->                    <h3>                      设计按钮                      <small class=\"pull-right\">20%</small>                    </h3>                    <!-- The progress bar -->                    <div class=\"progress xs\">                      <!-- Change the css width attribute to simulate progress -->                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">                        <span class=\"sr-only\">20% Complete</span>                      </div>                    </div>                  </a>                </li>                <!-- end task item -->              </ul>            </li>            <li class=\"footer\">              查看所有任务            </li>          </ul>        </li>        <!-- User Account Menu -->        <li class=\"dropdown user user-menu\">          <!-- Menu Toggle Button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <!-- The user image in the navbar-->            {{if isSignin}}            <img src=\"/static/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">            <!-- hidden-xs hides the username on small devices so only the image appears. -->            <span class=\"hidden-xs\">{{greeting}}</span>            {{else}}            <div id=\"click-btn\">              <span id=\"btn-signin\">登录</span>              <span id=\"btn-signup\">注册</span>            </div>            {{/if}}          </a>          <ul class=\"dropdown-menu\">            <!-- The user image in the menu -->            {{if !isSignin}}            <li class=\"user-header\" id=\"user-header\">              <form role=\"form\">                <div class=\"box-body\">                  <div class=\"form-group user\">                    <label for=\"exampleInputEmail1\">用户名：</label>                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"请输入用户名\">                  </div>                  <div class=\"form-group\">                    <label for=\"exampleInputPassword1\">密码：</label>                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"请输入密码\">                  </div>                </div>              </form>            </li>            {{else}}            <li class=\"user-header\">              <img src=\"/static/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">            </li>            {{/if}}            <!-- Menu Footer-->            <li class=\"user-footer\">              <div class=\"pull-left\">                <a href=\"javascript:void(0)\" class=\"btn btn-default btn-flat\">关闭</a>              </div>              {{if !isSignin}}              <div class=\"pull-right\">                <a href=\"javascript:void(0)\" id=\"user-submit\" class=\"btn btn-default btn-flat\">提交</a>              </div>              {{else}}              <div class=\"pull-right\">                <a href=\"javascript:void(0)\" id=\"user-signout\" class=\"btn btn-default btn-flat\">退出</a>              </div>              {{/if}}            </li>          </ul>        </li>        <!-- Control Sidebar Toggle Button -->        <li>          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>        </li>      </ul>    </div>  </nav></header>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

const sign = (data, uri) => {
  return $.ajax({
    url: '/api/users/' + uri,
    type: 'post',
    data,
    success: (result) => {
      return result
    }
  })
}

const isSignin = (token) => {
  return $.ajax({
    url: '/api/users/issignin',
    type: 'post',
    headers: {
      'X-Access-Token': token
    },
    success(result) {
      return result
    }
  })
}

module.exports = {
  sign,
  isSignin
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  render() {
    window.addEventListener('load', this.run.bind(this))
    window.addEventListener('hashchange', this.run.bind(this))
  },

  run() {
    this.setTitle()
    this.setNav()
  },

  setTitle() {
    let hash = location.hash.slice(1)
    hash = hash.split('?')[0]
    const match = {
      '/home': ['首页', '欢迎信息'],
      '/position': ['职位管理', '列表'],
      '/position_search': ['职位管理', '列表'],
      '/position_save': ['职位管理', '添加'],
      '/position_update': ['职位管理', '编辑']
    }
    var $h1 = $('.content-header h1')
    $h1.find('span').html(match[hash][0])
    $h1.find('small').html(match[hash][1])
  },

  setNav() {
    const hash = location.hash
    const $a = $(`ul.sidebar-menu a[href='${hash}']`)
    $a.parent().addClass('active').siblings().removeClass('active')
  }
}


/***/ })
/******/ ]);