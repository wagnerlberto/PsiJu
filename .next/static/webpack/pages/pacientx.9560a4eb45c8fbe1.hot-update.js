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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_URL, _config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_ANON_KEY);\nvar username = 'teste';\nfunction Contact() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDePacientxs = ref2[0], setListaDePacientxs = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function() {\n        supabaseClient.from('pacientx').select('*').order('nomeProprioCompleto', {\n            ascending: true\n        }).then(function(param) {\n            var data = param.data;\n            console.log(data);\n            setListaDePacientxs(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pacientxs\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Aplicativo em desenvolvimento.\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                mensagens: listaDeMensagens\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                as: \"form\",\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    border: '1'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                    value: mensagem1,\n                    onChange: function(event) {\n                        var valor = event.target.value;\n                        setMensagem(valor);\n                    },\n                    onKeyPress: function(event) {\n                        if (event.key === 'Enter') {\n                            event.preventDefault();\n                            handleNovaMensagem(mensagem1);\n                        }\n                    },\n                    placeholder: \"Insira sua mensagem aqui...\",\n                    type: \"textarea\",\n                    styleSheet: {\n                        width: '100%',\n                        border: '0',\n                        resize: 'none',\n                        borderRadius: '5px',\n                        padding: '6px 8px',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[800],\n                        marginRight: '12px',\n                        color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[200]\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"lqcRbUZX2nGEfB3MZXjD9SoHxUg=\");\n_c = Contact;\nContact.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            page\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this));\n};\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 157,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 139,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 127,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this));\n}\n_c1 = MessageList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWNpZW50eC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRztBQUNFO0FBQ1M7QUFDM0I7QUFDMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxHQUFLLENBQUNTLGNBQWMsR0FBR04sbUVBQVksQ0FBQ0gsc0RBQXNCLEVBQ3hEQSwyREFBMkI7QUFFN0IsR0FBSyxDQUFDWSxRQUFRLEdBQUcsQ0FBTztBQUVULFFBQVEsQ0FBQ0MsT0FBTyxHQUFHLENBQUM7UUFLeEJDLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixDQUFDQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1lBQ2hCLEVBQW1DO1lBQ25DQyxFQUFFLEVBQUUsQ0FBaUI7WUFDckJDLEtBQUssRUFBRUgsWUFBWTtRQUNyQixDQUFDO1FBRUROLGNBQWMsQ0FDWFUsSUFBSSxDQUFDLENBQVcsWUFDaEJDLE1BQU0sQ0FBQyxDQUFDO1lBQ1AsRUFBMkU7WUFDM0VKLFFBQVE7UUFDVixDQUFDLEVBQ0FLLElBQUksQ0FBQyxRQUFRLFFBQU0sQ0FBQztnQkFBWkMsSUFBSSxTQUFKQSxJQUFJO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9CLHFCQUFFRixJQUFJO1lBQ3RDRyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNuQkgsSUFBSSxDQUFDLENBQUM7WUFFUixDQUFDLENBSG1CLE1BR25CLG9CQURJSSxnQkFBZ0I7UUFFdkIsQ0FBQztRQUNIQyxXQUFXLENBQUMsQ0FBRTtJQUNoQixDQUFDOztJQXpCRCxHQUFLLENBQTJCdkIsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBMUNZLFNBQVEsR0FBaUJaLEdBQWtCLEtBQWpDdUIsV0FBVyxHQUFJdkIsR0FBa0I7SUFDbEQsR0FBSyxDQUEyQ0EsSUFBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUMsQ0FBQyxPQUExRHNCLGdCQUFnQixHQUF5QnRCLElBQWtCLEtBQXpDcUIsbUJBQW1CLEdBQUlyQixJQUFrQjtJQUNsRSxHQUFLLENBQTJDQSxJQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBQyxDQUFDLE9BQTFEeUIsZ0JBQWdCLEdBQXlCekIsSUFBa0IsS0FBekMwQixtQkFBbUIsR0FBSTFCLElBQWtCO0lBeUJsRUEsc0RBQWUsQ0FBQyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCSyxjQUFjLENBQ1hVLElBQUksQ0FBQyxDQUFVLFdBQ2ZhLE1BQU0sQ0FBQyxDQUFHLElBQ1ZDLEtBQUssQ0FBQyxDQUFxQixzQkFBRSxDQUFDO1lBQUNDLFNBQVMsRUFBRSxJQUFJO1FBQUMsQ0FBQyxFQUNoRGIsSUFBSSxDQUFDLFFBQVEsUUFBTSxDQUFDO2dCQUFaQyxJQUFJLFNBQUpBLElBQUk7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7WUFDaEJRLG1CQUFtQixDQUFDUixJQUFJO1FBQzFCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSGEsQ0FBTzs7d0ZBQ0xDLENBQUU7MEJBQUMsQ0FBUzs7Ozs7O3dGQUNaQyxDQUFDOzBCQUFDLENBRUg7Ozs7Ozt3RkFFQ0MsV0FBVztnQkFBQ0MsU0FBUyxFQUFFYixnQkFBZ0I7Ozs7Ozt3RkFFdkNyQixxREFBRztnQkFDRm1DLEVBQUUsRUFBQyxDQUFNO2dCQUNUQyxVQUFVLEVBQUUsQ0FBQztvQkFDWEMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO29CQUNwQkMsTUFBTSxFQUFFLENBQUc7Z0JBQ2IsQ0FBQztzR0FHQXBDLDJEQUFTO29CQUNScUMsS0FBSyxFQUFFN0IsU0FBUTtvQkFDZjhCLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO3dCQUNwQixHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7d0JBQ2hDbEIsV0FBVyxDQUFDcUIsS0FBSztvQkFDbkIsQ0FBQztvQkFDREUsVUFBVSxFQUFFLFFBQVEsQ0FBUEgsS0FBSyxFQUFLLENBQUM7d0JBQ3RCLEVBQUUsRUFBRUEsS0FBSyxDQUFDSSxHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7NEJBQzFCSixLQUFLLENBQUNLLGNBQWM7NEJBQ3BCdEMsa0JBQWtCLENBQUNFLFNBQVE7d0JBQzdCLENBQUM7b0JBQ0gsQ0FBQztvQkFDRHFDLFdBQVcsRUFBQyxDQUE2QjtvQkFDekNDLElBQUksRUFBQyxDQUFVO29CQUNmYixVQUFVLEVBQUUsQ0FBQzt3QkFDWGMsS0FBSyxFQUFFLENBQU07d0JBQ2JYLE1BQU0sRUFBRSxDQUFHO3dCQUNYWSxNQUFNLEVBQUUsQ0FBTTt3QkFDZEMsWUFBWSxFQUFFLENBQUs7d0JBQ25CQyxPQUFPLEVBQUUsQ0FBUzt3QkFDbEJDLGVBQWUsRUFBRTNELG9FQUFvQzt3QkFDckQrRCxXQUFXLEVBQUUsQ0FBTTt3QkFDbkJDLEtBQUssRUFBRWhFLG9FQUFvQztvQkFDN0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBdkZ1QmEsT0FBTztLQUFQQSxPQUFPO0FBeUYvQkEsT0FBTyxDQUFDb0QsU0FBUyxHQUFHLFFBQVEsQ0FBQ0EsU0FBUyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxNQUFNLDZFQUNIakUsMERBQU07O3dGQUNKQywyREFBTzs7Ozs7WUFDUGdFLElBQUk7Ozs7Ozs7QUFHWCxDQUFDO1NBRVE1QixXQUFXLENBQUM2QixLQUFLLEVBQUUsQ0FBQzs7SUFDM0I1QyxPQUFPLENBQUNDLEdBQUcsQ0FBQzJDLEtBQUs7SUFDakIsTUFBTSw2RUFDSDlELHFEQUFHO1FBQ0YrRCxHQUFHLEVBQUMsQ0FBSTtRQUNSM0IsVUFBVSxFQUFFLENBQUM7WUFDWDRCLFFBQVEsRUFBRSxDQUFRO1lBQ2xCM0IsT0FBTyxFQUFFLENBQU07WUFDZjRCLGFBQWEsRUFBRSxDQUFnQjtZQUMvQkMsSUFBSSxFQUFFLENBQUM7WUFDUFAsS0FBSyxFQUFFaEUsc0VBQXFDO1lBQzVDd0UsWUFBWSxFQUFFLENBQU07UUFDdEIsQ0FBQztrQkFFQUwsS0FBSyxDQUFDNUIsU0FBUyxDQUFDa0MsR0FBRyxDQUFDLFFBQVEsQ0FBUHpELFFBQVEsRUFBSyxDQUFDO1lBQ2xDLE1BQU0sNkVBQ0hULHNEQUFJO2dCQUVINkQsR0FBRyxFQUFDLENBQUk7Z0JBQ1IzQixVQUFVLEVBQUUsQ0FBQztvQkFDWGdCLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsT0FBTyxFQUFFLENBQUs7b0JBQ2RjLFlBQVksRUFBRSxDQUFNO29CQUNwQkUsS0FBSyxFQUFFLENBQUM7d0JBQ05mLGVBQWUsRUFBRTNELG9FQUFvQztvQkFDdkQsQ0FBQztnQkFDSCxDQUFDOztnR0FFQUsscURBQUc7d0JBQ0ZvQyxVQUFVLEVBQUUsQ0FBQzs0QkFDWCtCLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDOzt3R0FFQUcsS0FBSztnQ0FDSmxDLFVBQVUsRUFBRSxDQUFDO29DQUNYYyxLQUFLLEVBQUUsQ0FBTTtvQ0FDYnFCLE1BQU0sRUFBRSxDQUFNO29DQUNkbkIsWUFBWSxFQUFFLENBQUs7b0NBQ25CZixPQUFPLEVBQUUsQ0FBYztvQ0FDdkJxQixXQUFXLEVBQUUsQ0FBSztnQ0FDcEIsQ0FBQztnQ0FDRGMsR0FBRyxFQUFHLENBQW1CLHFCQUFXLE1BQUksQ0FBYmpFLFFBQVEsRUFBQyxDQUFJOzs7Ozs7d0dBRXpDTCxzREFBSTtnQ0FBQzZELEdBQUcsRUFBQyxDQUFROzBDQUNmcEQsUUFBUSxDQUFDQyxFQUFFOzs7Ozs7d0dBRWJWLHNEQUFJO2dDQUNIa0MsVUFBVSxFQUFFLENBQUM7b0NBQ1hxQyxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQmYsS0FBSyxFQUFFaEUsb0VBQW9DO2dDQUM3QyxDQUFDO2dDQUNEb0UsR0FBRyxFQUFDLENBQU07MENBRVIsR0FBRyxDQUFDWSxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdsQ2pFLFFBQVEsQ0FBQ0UsS0FBSzs7ZUF4Q1ZGLFFBQVEsQ0FBQ2tFLEVBQUU7Ozs7O1FBMkN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BL0RRNUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYWNpZW50eC5qcz9jYzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcidcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcblxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoYXBwQ29uZmlnLlNVUEFCQVNFX1VSTCxcbiAgYXBwQ29uZmlnLlNVUEFCQVNFX0FOT05fS0VZKTtcblxuY29uc3QgdXNlcm5hbWUgPSAndGVzdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGlzdGFEZVBhY2llbnR4cywgc2V0TGlzdGFEZVBhY2llbnR4c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xuICAgIGNvbnN0IG1lbnNhZ2VtID0ge1xuICAgICAgLy8gaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcbiAgICAgIGRlOiAndmFuZXNzYW1ldG9uaW5pJyxcbiAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXG4gICAgfTtcblxuICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAuZnJvbSgnbWVuc2FnZW5zJylcbiAgICAgIC5pbnNlcnQoW1xuICAgICAgICAvLyBUZW0gcXVlIHNlciB1bSBvYmpldG8gY29tIG9zIE1FU01PUyBDQU1QT1MgcXVlIHZvY8OqIGVzY3JldmV1IG5vIHN1cGFiYXNlXG4gICAgICAgIG1lbnNhZ2VtXG4gICAgICBdKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmlhbmRvIG1lbnNhZ2VtOiAnLCBkYXRhKTtcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbXG4gICAgICAgICAgZGF0YVswXSxcbiAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW5zLFxuICAgICAgICBdKTtcbiAgICAgIH0pO1xuICAgIHNldE1lbnNhZ2VtKCcnKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdwYWNpZW50eCcpXG4gICAgICAuc2VsZWN0KCcqJylcbiAgICAgIC5vcmRlcignbm9tZVByb3ByaW9Db21wbGV0bycsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldExpc3RhRGVQYWNpZW50eHMoZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+UGFjaWVudHhzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBBcGxpY2F0aXZvIGVtIGRlc2Vudm9sdmltZW50by5cbiAgICAgIDwvcD5cblxuICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2Vuc30gLz5cblxuICAgICAgPEJveFxuICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGJvcmRlcjogJzEnLFxuICAgICAgICB9fVxuICAgICAgPlxuXG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgPC9Cb3g+XG5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuQ29udGFjdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAge3BhZ2V9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHRhZz1cInVsXCJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcbiAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJhcHBDb25maWciLCJMYXlvdXQiLCJTaWRlYmFyIiwiY3JlYXRlQ2xpZW50IiwiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwic3VwYWJhc2VDbGllbnQiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSIsInVzZXJuYW1lIiwiQ29udGFjdCIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ0ZXh0byIsImZyb20iLCJpbnNlcnQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwibGlzdGFEZU1lbnNhZ2VucyIsInNldE1lbnNhZ2VtIiwidXNlU3RhdGUiLCJsaXN0YURlUGFjaWVudHhzIiwic2V0TGlzdGFEZVBhY2llbnR4cyIsInVzZUVmZmVjdCIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwic2VjdGlvbiIsImgyIiwicCIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJib3JkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwicmVzaXplIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJtYXJnaW5SaWdodCIsImNvbG9yIiwiZ2V0TGF5b3V0IiwicGFnZSIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImhvdmVyIiwiSW1hZ2UiLCJoZWlnaHQiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pacientx.js\n");

/***/ })

});