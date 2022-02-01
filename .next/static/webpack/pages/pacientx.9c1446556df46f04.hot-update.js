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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_URL, _config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_ANON_KEY);\nvar username = 'teste';\nfunction Contact() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDePacientxs = ref2[0], setListaDePacientxs = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function() {\n        supabaseClient.from('pacientx').select('*').order('nomeProprioCompleto', {\n            ascending: true\n        }).then(function(param) {\n            var data = param.data;\n            console.log(data);\n            setListaDePacientxs(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pacientxs\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Aplicativo em desenvolvimento.\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                mensagens: listaDeMensagens\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                as: \"form\",\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        fullWidth: true,\n                        label: \"Nome completo\",\n                        maxLength: 50,\n                        name: \"nomeProprioCompleto\",\n                        value: \"\",\n                        variant: \"basicBordered\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        label: \"CPF\",\n                        maxLength: 14,\n                        name: \"cpf\",\n                        onBlur: function() {},\n                        placeholder: \"Somente os n\\xfameros\",\n                        styleSheet: {},\n                        value: \"\",\n                        variant: \"basicBordered\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        href: \"https://google.com\",\n                        label: \"Salvar\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"lqcRbUZX2nGEfB3MZXjD9SoHxUg=\");\n_c = Contact;\nContact.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            page\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this));\n};\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 170,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 180,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                                lineNumber: 183,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 165,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 153,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this));\n}\n_c1 = MessageList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWNpZW50eC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRztBQUNFO0FBQ1M7QUFDM0I7QUFDMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxHQUFLLENBQUNTLGNBQWMsR0FBR04sbUVBQVksQ0FBQ0gsc0RBQXNCLEVBQ3hEQSwyREFBMkI7QUFFN0IsR0FBSyxDQUFDWSxRQUFRLEdBQUcsQ0FBTztBQUVULFFBQVEsQ0FBQ0MsT0FBTyxHQUFHLENBQUM7UUFLeEJDLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixDQUFDQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1lBQ2hCLEVBQW1DO1lBQ25DQyxFQUFFLEVBQUUsQ0FBaUI7WUFDckJDLEtBQUssRUFBRUgsWUFBWTtRQUNyQixDQUFDO1FBRUROLGNBQWMsQ0FDWFUsSUFBSSxDQUFDLENBQVcsWUFDaEJDLE1BQU0sQ0FBQyxDQUFDO1lBQ1AsRUFBMkU7WUFDMUVKLFFBQU87UUFDVixDQUFDLEVBQ0FLLElBQUksQ0FBQyxRQUFRLFFBQU0sQ0FBQztnQkFBWkMsSUFBSSxTQUFKQSxJQUFJO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9CLHFCQUFFRixJQUFJO1lBQ3RDRyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNuQkgsSUFBSSxDQUFDLENBQUM7WUFFUixDQUFDLENBSG1CLE1BR25CLG9CQURJSSxnQkFBZ0I7UUFFdkIsQ0FBQztRQUNIQyxXQUFXLENBQUMsQ0FBRTtJQUNoQixDQUFDOztJQXpCRCxHQUFLLENBQTJCdkIsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBMUNZLFNBQVEsR0FBaUJaLEdBQWtCLEtBQWpDdUIsV0FBVyxHQUFJdkIsR0FBa0I7SUFDbEQsR0FBSyxDQUEyQ0EsSUFBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUMsQ0FBQyxPQUExRHNCLGdCQUFnQixHQUF5QnRCLElBQWtCLEtBQXpDcUIsbUJBQW1CLEdBQUlyQixJQUFrQjtJQUNsRSxHQUFLLENBQTJDQSxJQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBQyxDQUFDLE9BQTFEeUIsZ0JBQWdCLEdBQXlCekIsSUFBa0IsS0FBekMwQixtQkFBbUIsR0FBSTFCLElBQWtCO0lBeUJsRUEsc0RBQWUsQ0FBQyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCSyxjQUFjLENBQ1hVLElBQUksQ0FBQyxDQUFVLFdBQ2ZhLE1BQU0sQ0FBQyxDQUFHLElBQ1ZDLEtBQUssQ0FBQyxDQUFxQixzQkFBRSxDQUFDO1lBQUNDLFNBQVMsRUFBRSxJQUFJO1FBQUMsQ0FBQyxFQUNoRGIsSUFBSSxDQUFDLFFBQVEsUUFBTSxDQUFDO2dCQUFaQyxJQUFJLFNBQUpBLElBQUk7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7WUFDaEJRLG1CQUFtQixDQUFDUixJQUFJO1FBQzFCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSGEsQ0FBTzs7d0ZBQ0xDLENBQUU7MEJBQUMsQ0FBUzs7Ozs7O3dGQUNaQyxDQUFDOzBCQUFDLENBRUg7Ozs7Ozt3RkFFQ0MsV0FBVztnQkFBQ0MsU0FBUyxFQUFFYixnQkFBZ0I7Ozs7Ozt3RkFFdkNyQixxREFBRztnQkFDRm1DLEVBQUUsRUFBQyxDQUFNO2dCQUNUQyxVQUFVLEVBQUUsQ0FBQztvQkFDWEMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO2dCQUN0QixDQUFDOztnR0FHQW5DLDJEQUFTO3dCQUNSb0MsU0FBUzt3QkFDVEMsS0FBSyxFQUFDLENBQWU7d0JBQ3JCQyxTQUFTLEVBQUUsRUFBRTt3QkFDYkMsSUFBSSxFQUFDLENBQXFCO3dCQUMxQkMsS0FBSyxFQUFDLENBQUU7d0JBQ1JDLE9BQU8sRUFBQyxDQUFlOzs7Ozs7Z0dBR3hCekMsMkRBQVM7d0JBQ1JxQyxLQUFLLEVBQUMsQ0FBSzt3QkFDWEMsU0FBUyxFQUFFLEVBQUU7d0JBQ2JDLElBQUksRUFBQyxDQUFLO3dCQUNWRyxNQUFNLEVBQUUsUUFDbEIsR0FEd0IsQ0FBQyxDQUVkO3dCQUNEQyxXQUFXLEVBQUMsQ0FBb0I7d0JBQ2hDVixVQUFVLEVBQUUsQ0FBQyxDQUFDO3dCQUNkTyxLQUFLLEVBQUMsQ0FBRTt3QkFDUkMsT0FBTyxFQUFDLENBQWU7Ozs7OztnR0FHeEIzQyx3REFBTTt3QkFDTDhDLElBQUksRUFBQyxDQUFvQjt3QkFDekJQLEtBQUssRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3hCLENBQUM7R0FqSHVCaEMsT0FBTztLQUFQQSxPQUFPO0FBbUgvQkEsT0FBTyxDQUFDd0MsU0FBUyxHQUFHLFFBQVEsQ0FBQ0EsU0FBUyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxNQUFNLDZFQUNIckQsMERBQU07O3dGQUNKQywyREFBTzs7Ozs7WUFDUG9ELElBQUk7Ozs7Ozs7QUFHWCxDQUFDO1NBRVFoQixXQUFXLENBQUNpQixLQUFLLEVBQUUsQ0FBQzs7SUFDM0JoQyxPQUFPLENBQUNDLEdBQUcsQ0FBQytCLEtBQUs7SUFDakIsTUFBTSw2RUFDSGxELHFEQUFHO1FBQ0ZtRCxHQUFHLEVBQUMsQ0FBSTtRQUNSZixVQUFVLEVBQUUsQ0FBQztZQUNYZ0IsUUFBUSxFQUFFLENBQVE7WUFDbEJmLE9BQU8sRUFBRSxDQUFNO1lBQ2ZnQixhQUFhLEVBQUUsQ0FBZ0I7WUFDL0JDLElBQUksRUFBRSxDQUFDO1lBQ1BDLEtBQUssRUFBRTVELHNFQUFxQztZQUM1Q2dFLFlBQVksRUFBRSxDQUFNO1FBQ3RCLENBQUM7a0JBRUFULEtBQUssQ0FBQ2hCLFNBQVMsQ0FBQzBCLEdBQUcsQ0FBQyxRQUFRLENBQVBqRCxRQUFRLEVBQUssQ0FBQztZQUNsQyxNQUFNLDZFQUNIVCxzREFBSTtnQkFFSGlELEdBQUcsRUFBQyxDQUFJO2dCQUNSZixVQUFVLEVBQUUsQ0FBQztvQkFDWHlCLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsT0FBTyxFQUFFLENBQUs7b0JBQ2RILFlBQVksRUFBRSxDQUFNO29CQUNwQkksS0FBSyxFQUFFLENBQUM7d0JBQ05DLGVBQWUsRUFBRXJFLG9FQUFvQztvQkFDdkQsQ0FBQztnQkFDSCxDQUFDOztnR0FFQUsscURBQUc7d0JBQ0ZvQyxVQUFVLEVBQUUsQ0FBQzs0QkFDWHVCLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDOzt3R0FFQU0sS0FBSztnQ0FDSjdCLFVBQVUsRUFBRSxDQUFDO29DQUNYOEIsS0FBSyxFQUFFLENBQU07b0NBQ2JDLE1BQU0sRUFBRSxDQUFNO29DQUNkTixZQUFZLEVBQUUsQ0FBSztvQ0FDbkJ4QixPQUFPLEVBQUUsQ0FBYztvQ0FDdkIrQixXQUFXLEVBQUUsQ0FBSztnQ0FDcEIsQ0FBQztnQ0FDREMsR0FBRyxFQUFHLENBQW1CLHFCQUFXLE1BQUksQ0FBYjlELFFBQVEsRUFBQyxDQUFJOzs7Ozs7d0dBRXpDTCxzREFBSTtnQ0FBQ2lELEdBQUcsRUFBQyxDQUFROzBDQUNmeEMsUUFBUSxDQUFDQyxFQUFFOzs7Ozs7d0dBRWJWLHNEQUFJO2dDQUNIa0MsVUFBVSxFQUFFLENBQUM7b0NBQ1hrQyxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQmhCLEtBQUssRUFBRTVELG9FQUFvQztnQ0FDN0MsQ0FBQztnQ0FDRHdELEdBQUcsRUFBQyxDQUFNOzBDQUVSLEdBQUcsQ0FBQ3FCLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7Ozs7Ozs7b0JBR2xDOUQsUUFBUSxDQUFDRSxLQUFLOztlQXhDVkYsUUFBUSxDQUFDK0QsRUFBRTs7Ozs7UUEyQ3RCLENBQUM7Ozs7OztBQUdQLENBQUM7TUEvRFF6QyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhY2llbnR4LmpzP2NjNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJ1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChhcHBDb25maWcuU1VQQUJBU0VfVVJMLFxuICBhcHBDb25maWcuU1VQQUJBU0VfQU5PTl9LRVkpO1xuXG5jb25zdCB1c2VybmFtZSA9ICd0ZXN0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsaXN0YURlUGFjaWVudHhzLCBzZXRMaXN0YURlUGFjaWVudHhzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICAvLyBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgZGU6ICd2YW5lc3NhbWV0b25pbmknLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICB9O1xuXG4gICAgc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxuICAgICAgLmluc2VydChbXG4gICAgICAgIC8vIFRlbSBxdWUgc2VyIHVtIG9iamV0byBjb20gb3MgTUVTTU9TIENBTVBPUyBxdWUgdm9jw6ogZXNjcmV2ZXUgbm8gc3VwYWJhc2VcbiAgICAgICAgbWVuc2FnZW1cbiAgICAgIF0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyaWFuZG8gbWVuc2FnZW06ICcsIGRhdGEpO1xuICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcbiAgICAgICAgICBkYXRhWzBdLFxuICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgIF0pO1xuICAgICAgfSk7XG4gICAgc2V0TWVuc2FnZW0oJycpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdXBhYmFzZUNsaWVudFxuICAgICAgLmZyb20oJ3BhY2llbnR4JylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLm9yZGVyKCdub21lUHJvcHJpb0NvbXBsZXRvJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0TGlzdGFEZVBhY2llbnR4cyhkYXRhKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5QYWNpZW50eHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIEFwbGljYXRpdm8gZW0gZGVzZW52b2x2aW1lbnRvLlxuICAgICAgPC9wPlxuXG4gICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxuXG4gICAgICA8Qm94XG4gICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiTm9tZSBjb21wbGV0b1wiXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICBuYW1lPVwibm9tZVByb3ByaW9Db21wbGV0b1wiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJDUEZcIlxuICAgICAgICAgIG1heExlbmd0aD17MTR9XG4gICAgICAgICAgbmFtZT1cImNwZlwiXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG5cbiAgICAgICAgICB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29tZW50ZSBvcyBuw7ptZXJvc1wiXG4gICAgICAgICAgc3R5bGVTaGVldD17e319XG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgbGFiZWw9XCJTYWx2YXJcIlxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiA8VGV4dEZpZWxkXG4gICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG4gICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICAgICAgICByZXNpemU6ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+ICovfVxuXG4gICAgICA8L0JveD5cblxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5Db250YWN0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICB7cGFnZX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdGFnPVwidWxcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cbiAgICAgICAgICAgIHRhZz1cImxpXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxuICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cbiAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGFnPVwic3BhblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIkxheW91dCIsIlNpZGViYXIiLCJjcmVhdGVDbGllbnQiLCJSZWFjdCIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJzdXBhYmFzZUNsaWVudCIsIlNVUEFCQVNFX1VSTCIsIlNVUEFCQVNFX0FOT05fS0VZIiwidXNlcm5hbWUiLCJDb250YWN0IiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW0iLCJkZSIsInRleHRvIiwiZnJvbSIsImluc2VydCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJsaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJ1c2VTdGF0ZSIsImxpc3RhRGVQYWNpZW50eHMiLCJzZXRMaXN0YURlUGFjaWVudHhzIiwidXNlRWZmZWN0Iiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJzZWN0aW9uIiwiaDIiLCJwIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZ1bGxXaWR0aCIsImxhYmVsIiwibWF4TGVuZ3RoIiwibmFtZSIsInZhbHVlIiwidmFyaWFudCIsIm9uQmx1ciIsInBsYWNlaG9sZGVyIiwiaHJlZiIsImdldExheW91dCIsInBhZ2UiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJjb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pacientx.js\n");

/***/ })

});