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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_URL, _config_json__WEBPACK_IMPORTED_MODULE_1__.SUPABASE_ANON_KEY);\nvar username = 'teste';\nfunction Contact() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDeMensagens = ref[0], setListaDeMensagens = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState([]), 2), listaDePacientxs = ref1[0], setListaDePacientxs = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function() {\n        supabaseClient.from('pacientx').select('*').order('nomeProprioCompleto', {\n            ascending: true\n        }).then(function(param) {\n            var data = param.data;\n            // console.log('Dados do pacientx: ', data);\n            setListaDePacientxs(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pacientxs\"\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                items: listaDePacientxs\n            }, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"J6Q3GDG2u7vBJDU8n/RtybC4cX4=\");\n_c = Contact;\nContact.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            page\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this));\n};\nfunction MessageList(props) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        border: \"1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"NOME\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"CPF\"\n                    }, void 0, false, {\n                        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                        lineNumber: 109,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            props.items.map(function(item) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.nomeProprioCompleto\n                        }, void 0, false, {\n                            fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.cpf\n                        }, void 0, false, {\n                            fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aluno/\\xc1rea de Trabalho/PsiJu/pages/pacientx.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this));\n}\n_c1 = MessageList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNDLG1CQUFtQjs7Ozs7O29HQUUxQkgsQ0FBRTtzQ0FDQUUsSUFBSSxDQUFDRSxHQUFHOzs7Ozs7Ozs7Ozs7WUFJakIsQ0FBQzs7Ozs7OztBQUlQLENBQUM7TUFuQlFaLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFjaWVudHguanM/Y2M0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL3NpZGViYXInXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5cbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KGFwcENvbmZpZy5TVVBBQkFTRV9VUkwsXG4gIGFwcENvbmZpZy5TVVBBQkFTRV9BTk9OX0tFWSk7XG5cbmNvbnN0IHVzZXJuYW1lID0gJ3Rlc3RlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGlzdGFEZVBhY2llbnR4cywgc2V0TGlzdGFEZVBhY2llbnR4c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xuICAgIGNvbnN0IG1lbnNhZ2VtID0ge1xuICAgICAgLy8gaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcbiAgICAgIGRlOiAndmFuZXNzYW1ldG9uaW5pJyxcbiAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXG4gICAgfTtcblxuICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAuZnJvbSgnbWVuc2FnZW5zJylcbiAgICAgIC5pbnNlcnQoW1xuICAgICAgICAvLyBUZW0gcXVlIHNlciB1bSBvYmpldG8gY29tIG9zIE1FU01PUyBDQU1QT1MgcXVlIHZvY8OqIGVzY3JldmV1IG5vIHN1cGFiYXNlXG4gICAgICAgIG1lbnNhZ2VtXG4gICAgICBdKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmlhbmRvIG1lbnNhZ2VtOiAnLCBkYXRhKTtcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbXG4gICAgICAgICAgZGF0YVswXSxcbiAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW5zLFxuICAgICAgICBdKTtcbiAgICAgIH0pO1xuICAgIHNldE1lbnNhZ2VtKCcnKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdwYWNpZW50eCcpXG4gICAgICAuc2VsZWN0KCcqJylcbiAgICAgIC5vcmRlcignbm9tZVByb3ByaW9Db21wbGV0bycsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0RhZG9zIGRvIHBhY2llbnR4OiAnLCBkYXRhKTtcbiAgICAgICAgc2V0TGlzdGFEZVBhY2llbnR4cyhkYXRhKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5QYWNpZW50eHM8L2gyPlxuXG4gICAgICA8TWVzc2FnZUxpc3QgaXRlbXM9e2xpc3RhRGVQYWNpZW50eHN9IC8+XG5cbiAgICAgIHsvKiA8Qm94XG4gICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiTm9tZSBjb21wbGV0b1wiXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICBuYW1lPVwibm9tZVByb3ByaW9Db21wbGV0b1wiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJDUEZcIlxuICAgICAgICAgIG1heExlbmd0aD17MTR9XG4gICAgICAgICAgbmFtZT1cImNwZlwiXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG5cbiAgICAgICAgICB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29tZW50ZSBvcyBuw7ptZXJvc1wiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgbGFiZWw9XCJTYWx2YXJcIlxuICAgICAgICAvPlxuXG4gICAgICA8L0JveD4gKi99XG5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuQ29udGFjdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAge3BhZ2V9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgYm9yZGVyPVwiMVwiPlxuICAgICAgPHRyPjx0ZD5OT01FPC90ZD48dGQ+Q1BGPC90ZD48L3RyPlxuICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAge2l0ZW0ubm9tZVByb3ByaW9Db21wbGV0b31cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIHtpdGVtLmNwZn1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgey8qIDwvQm94PiAqL31cbiAgICA8L3RhYmxlPlxuICApXG59XG4iXSwibmFtZXMiOlsiYXBwQ29uZmlnIiwiTGF5b3V0IiwiU2lkZWJhciIsImNyZWF0ZUNsaWVudCIsIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsInN1cGFiYXNlQ2xpZW50IiwiU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfQU5PTl9LRVkiLCJ1c2VybmFtZSIsIkNvbnRhY3QiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImRlIiwidGV4dG8iLCJmcm9tIiwiaW5zZXJ0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwibGlzdGFEZVBhY2llbnR4cyIsInNldExpc3RhRGVQYWNpZW50eHMiLCJ1c2VFZmZlY3QiLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInNlY3Rpb24iLCJoMiIsIk1lc3NhZ2VMaXN0IiwiaXRlbXMiLCJnZXRMYXlvdXQiLCJwYWdlIiwicHJvcHMiLCJ0YWJsZSIsImJvcmRlciIsInRyIiwidGQiLCJtYXAiLCJpdGVtIiwibm9tZVByb3ByaW9Db21wbGV0byIsImNwZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pacientx.js\n");

/***/ })

});