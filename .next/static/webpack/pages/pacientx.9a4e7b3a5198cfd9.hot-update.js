"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pacientx",{

/***/ "./pages/pacientx.js":
/*!***************************!*\
  !*** ./pages/pacientx.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_URL, _config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_ANON_KEY);\nfunction Contact() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        setListaDeMensagens([\n            mensagem, \n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function() {\n        var dadosDoPacientx = supabaseClient.from('pacientx').select('*').then(function(param) {\n            var data = param.data;\n            console.log(data[0].nomeProprioCompleto);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pacientxs\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Aplicativo em desenvolvimento.\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.primary[500],\n                    backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply',\n                    color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[\"000\"]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                    mensagens: listaDeMensagens\n                }, void 0, false, {\n                    fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"5NzR+Jyf7t+pkrBZ4a9a51tLhhk=\");\n_c = Contact;\nContact.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            page\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this));\n};\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this));\n}\n_c1 = MessageList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eENWTCxRQUFRLENBQUNDLEVBQUU7Ozs7O1FBMkN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BL0RRa0MsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYWNpZW50eC5qcz9jYzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcidcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChhcHBDb25maWcuU1VQQUJBU0VfVVJMLFxuICBhcHBDb25maWcuU1VQQUJBU0VfQU5PTl9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcbiAgICBjb25zdCBtZW5zYWdlbSA9IHtcbiAgICAgIGlkOiBsaXN0YURlTWVuc2FnZW5zLmxlbmd0aCArIDEsXG4gICAgICBkZTogJ3ZhbmVzc2FtZXRvbmluaScsXG4gICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxuICAgIH07XG5cbiAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcbiAgICAgIG1lbnNhZ2VtLFxuICAgICAgLi4ubGlzdGFEZU1lbnNhZ2VucyxcbiAgICBdKTtcbiAgICBzZXRNZW5zYWdlbSgnJyk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhZG9zRG9QYWNpZW50eCA9IHN1cGFiYXNlQ2xpZW50XG4gICAgICAuZnJvbSgncGFjaWVudHgnKVxuICAgICAgLnNlbGVjdCgnKicpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5ub21lUHJvcHJpb0NvbXBsZXRvKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5QYWNpZW50eHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIEFwbGljYXRpdm8gZW0gZGVzZW52b2x2aW1lbnRvLlxuICAgICAgPC9wPlxuXG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXG4gICAgICAgIH19XG4gICAgICA+XG5cblxuICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxuXG4gICAgICA8L0JveD5cblxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5Db250YWN0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICB7cGFnZX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdGFnPVwidWxcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cbiAgICAgICAgICAgIHRhZz1cImxpXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxuICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJhcHBDb25maWciLCJMYXlvdXQiLCJTaWRlYmFyIiwiY3JlYXRlQ2xpZW50IiwiUmVhY3QiLCJCb3giLCJzdXBhYmFzZUNsaWVudCIsIlNVUEFCQVNFX1VSTCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiQ29udGFjdCIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiaWQiLCJsaXN0YURlTWVuc2FnZW5zIiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGFkb3NEb1BhY2llbnR4IiwiZnJvbSIsInNlbGVjdCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5vbWVQcm9wcmlvQ29tcGxldG8iLCJzZWN0aW9uIiwiaDIiLCJwIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiZ2V0TGF5b3V0IiwicGFnZSIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIlRleHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiaG92ZXIiLCJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pacientx.js\n");

/***/ })

});