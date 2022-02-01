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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_URL, _config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_ANON_KEY);\nvar username = 'teste';\nfunction Contact() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), lista = ref[0], setLista = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function() {\n        supabaseClient.from('pacientx').select('*').order('nomeProprioCompleto', {\n            ascending: true\n        }).then(function(param) {\n            var data = param.data;\n            // console.log('Dados do pacientx: ', data);\n            setLista(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pacientxs\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                items: listaDePacientxs\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"HWZp3b4cypzy1HdkaP/+l2+a0Ik=\");\n_c = Contact;\nContact.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            page\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this));\n};\nfunction MessageList(props) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        border: \"1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"NOME\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"CPF\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 108,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            props.items.map(function(item) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.nomeProprioCompleto\n                        }, void 0, false, {\n                            fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.cpf\n                        }, void 0, false, {\n                            fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this));\n}\n_c1 = MessageList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYWNpZW50eC5qcz9jYzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcidcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcblxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoYXBwQ29uZmlnLlNVUEFCQVNFX1VSTCxcbiAgYXBwQ29uZmlnLlNVUEFCQVNFX0FOT05fS0VZKTtcblxuY29uc3QgdXNlcm5hbWUgPSAndGVzdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCBbbGlzdGEsIHNldExpc3RhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICAvLyBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgZGU6ICd2YW5lc3NhbWV0b25pbmknLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICB9O1xuXG4gICAgc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxuICAgICAgLmluc2VydChbXG4gICAgICAgIC8vIFRlbSBxdWUgc2VyIHVtIG9iamV0byBjb20gb3MgTUVTTU9TIENBTVBPUyBxdWUgdm9jw6ogZXNjcmV2ZXUgbm8gc3VwYWJhc2VcbiAgICAgICAgbWVuc2FnZW1cbiAgICAgIF0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyaWFuZG8gbWVuc2FnZW06ICcsIGRhdGEpO1xuICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcbiAgICAgICAgICBkYXRhWzBdLFxuICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgIF0pO1xuICAgICAgfSk7XG4gICAgc2V0TWVuc2FnZW0oJycpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdXBhYmFzZUNsaWVudFxuICAgICAgLmZyb20oJ3BhY2llbnR4JylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLm9yZGVyKCdub21lUHJvcHJpb0NvbXBsZXRvJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRGFkb3MgZG8gcGFjaWVudHg6ICcsIGRhdGEpO1xuICAgICAgICBzZXRMaXN0YShkYXRhKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5QYWNpZW50eHM8L2gyPlxuXG4gICAgICA8TWVzc2FnZUxpc3QgaXRlbXM9e2xpc3RhRGVQYWNpZW50eHN9IC8+XG5cbiAgICAgIHsvKiA8Qm94XG4gICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiTm9tZSBjb21wbGV0b1wiXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICBuYW1lPVwibm9tZVByb3ByaW9Db21wbGV0b1wiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJDUEZcIlxuICAgICAgICAgIG1heExlbmd0aD17MTR9XG4gICAgICAgICAgbmFtZT1cImNwZlwiXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG5cbiAgICAgICAgICB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29tZW50ZSBvcyBuw7ptZXJvc1wiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgbGFiZWw9XCJTYWx2YXJcIlxuICAgICAgICAvPlxuXG4gICAgICA8L0JveD4gKi99XG5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuQ29udGFjdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAge3BhZ2V9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgYm9yZGVyPVwiMVwiPlxuICAgICAgPHRyPjx0ZD5OT01FPC90ZD48dGQ+Q1BGPC90ZD48L3RyPlxuICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAge2l0ZW0ubm9tZVByb3ByaW9Db21wbGV0b31cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIHtpdGVtLmNwZn1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgey8qIDwvQm94PiAqL31cbiAgICA8L3RhYmxlPlxuICApXG59XG4iXSwibmFtZXMiOlsiYXBwQ29uZmlnIiwiTGF5b3V0IiwiU2lkZWJhciIsImNyZWF0ZUNsaWVudCIsIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsInN1cGFiYXNlQ2xpZW50IiwiU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfQU5PTl9LRVkiLCJ1c2VybmFtZSIsIkNvbnRhY3QiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImRlIiwidGV4dG8iLCJmcm9tIiwiaW5zZXJ0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwibGlzdGEiLCJzZXRMaXN0YSIsInVzZUVmZmVjdCIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwic2VjdGlvbiIsImgyIiwiTWVzc2FnZUxpc3QiLCJpdGVtcyIsImxpc3RhRGVQYWNpZW50eHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwicHJvcHMiLCJ0YWJsZSIsImJvcmRlciIsInRyIiwidGQiLCJtYXAiLCJpdGVtIiwibm9tZVByb3ByaW9Db21wbGV0byIsImNwZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pacientx.js\n");

/***/ })

});