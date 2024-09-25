"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/merge-stream";
exports.ids = ["vendor-chunks/merge-stream"];
exports.modules = {

/***/ "(rsc)/./node_modules/merge-stream/index.js":
/*!********************************************!*\
  !*** ./node_modules/merge-stream/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { PassThrough } = __webpack_require__(/*! stream */ \"stream\");\n\nmodule.exports = function (/*streams...*/) {\n  var sources = []\n  var output  = new PassThrough({objectMode: true})\n\n  output.setMaxListeners(0)\n\n  output.add = add\n  output.isEmpty = isEmpty\n\n  output.on('unpipe', remove)\n\n  Array.prototype.slice.call(arguments).forEach(add)\n\n  return output\n\n  function add (source) {\n    if (Array.isArray(source)) {\n      source.forEach(add)\n      return this\n    }\n\n    sources.push(source);\n    source.once('end', remove.bind(null, source))\n    source.once('error', output.emit.bind(output, 'error'))\n    source.pipe(output, {end: false})\n    return this\n  }\n\n  function isEmpty () {\n    return sources.length == 0;\n  }\n\n  function remove (source) {\n    sources = sources.filter(function (it) { return it !== source })\n    if (!sources.length && output.readable) { output.end() }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWVyZ2Utc3RyZWFtL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFFBQVEsY0FBYyxFQUFFLG1CQUFPLENBQUMsc0JBQVE7O0FBRXhDO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCOztBQUVsRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FLDhDQUE4QztBQUM5QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9kY2FzdHIvLi9ub2RlX21vZHVsZXMvbWVyZ2Utc3RyZWFtL2luZGV4LmpzPzg5NDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IFBhc3NUaHJvdWdoIH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLypzdHJlYW1zLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBbXVxuICB2YXIgb3V0cHV0ICA9IG5ldyBQYXNzVGhyb3VnaCh7b2JqZWN0TW9kZTogdHJ1ZX0pXG5cbiAgb3V0cHV0LnNldE1heExpc3RlbmVycygwKVxuXG4gIG91dHB1dC5hZGQgPSBhZGRcbiAgb3V0cHV0LmlzRW1wdHkgPSBpc0VtcHR5XG5cbiAgb3V0cHV0Lm9uKCd1bnBpcGUnLCByZW1vdmUpXG5cbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5mb3JFYWNoKGFkZClcblxuICByZXR1cm4gb3V0cHV0XG5cbiAgZnVuY3Rpb24gYWRkIChzb3VyY2UpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICBzb3VyY2UuZm9yRWFjaChhZGQpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHNvdXJjZXMucHVzaChzb3VyY2UpO1xuICAgIHNvdXJjZS5vbmNlKCdlbmQnLCByZW1vdmUuYmluZChudWxsLCBzb3VyY2UpKVxuICAgIHNvdXJjZS5vbmNlKCdlcnJvcicsIG91dHB1dC5lbWl0LmJpbmQob3V0cHV0LCAnZXJyb3InKSlcbiAgICBzb3VyY2UucGlwZShvdXRwdXQsIHtlbmQ6IGZhbHNlfSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHNvdXJjZXMubGVuZ3RoID09IDA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUgKHNvdXJjZSkge1xuICAgIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihmdW5jdGlvbiAoaXQpIHsgcmV0dXJuIGl0ICE9PSBzb3VyY2UgfSlcbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoICYmIG91dHB1dC5yZWFkYWJsZSkgeyBvdXRwdXQuZW5kKCkgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/merge-stream/index.js\n");

/***/ })

};
;