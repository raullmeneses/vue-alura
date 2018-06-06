webpackJsonp([0],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Cadastro_vue__ = __webpack_require__(48);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04057c5a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Cadastro_vue__ = __webpack_require__(52);
function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04057c5a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Cadastro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04057c5a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Cadastro_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_imagem_responsiva_ImagemResponsiva_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_botao_Botao_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_foto_Foto__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_foto_FotoService__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({

  components: {

    'imagem-responsiva': __WEBPACK_IMPORTED_MODULE_0__shared_imagem_responsiva_ImagemResponsiva_vue__["a" /* default */],
    'meu-botao': __WEBPACK_IMPORTED_MODULE_1__shared_botao_Botao_vue__["a" /* default */]
  },

  data() {
    return {
      foto: new __WEBPACK_IMPORTED_MODULE_2__domain_foto_Foto__["a" /* default */](),
      id: this.$route.params.id
    };
  },

  methods: {

    grava() {

      this.$validator.validateAll().then(success => {

        if (success) {

          this.service.cadastra(this.foto).then(() => {

            if (this.id) {
              this.$router.push({ name: 'home' });
            } else {
              this.foto = new __WEBPACK_IMPORTED_MODULE_2__domain_foto_Foto__["a" /* default */]();
            }
          }, err => console.log(err));
        }
      });
    }

  },

  created() {
    this.service = new __WEBPACK_IMPORTED_MODULE_3__domain_foto_FotoService__["a" /* default */](this.$resource);
    if (this.id) {
      this.service.busca(this.id).then(foto => this.foto = foto);
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("09c3d29f", content, true, {});

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".controle[data-v-04057c5a]{font-size:1.2em;margin-bottom:20px}.controle label[data-v-04057c5a]{display:block;font-weight:700}.controle label+input[data-v-04057c5a],.controle textarea[data-v-04057c5a]{width:100%;font-size:inherit;border-radius:5px}.centralizado[data-v-04057c5a]{text-align:center}.erro[data-v-04057c5a]{color:red}", ""]);

// exports


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Foto {

    constructor(titulo = '', url = '', descricao = '') {

        this.titulo = titulo;
        this.url = url;
        this.descricao = descricao;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Foto;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"centralizado"},[_vm._v("Cadastro")]),_vm._v(" "),_c('h2',{staticClass:"centralizado"},[_vm._v(" "+_vm._s(_vm.foto.titulo))]),_vm._v(" "),(_vm.foto._id)?_c('h2',{staticClass:"centralizado"},[_vm._v("Alterando")]):_c('h2',{staticClass:"centralizado"},[_vm._v("Incluindo")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.grava()}}},[_c('div',{staticClass:"controle"},[_c('label',{attrs:{"for":"titulo"}},[_vm._v("TÍTULO")]),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:(_vm.foto.titulo),expression:"foto.titulo"}],attrs:{"data-vv-as":"título","name":"titulo","data-vv-rules":"required|min:3|max:30","id":"titulo","autocomplete":"off"},domProps:{"value":(_vm.foto.titulo)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.foto, "titulo", $event.target.value)}}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('titulo')),expression:"errors.has('titulo')"}],staticClass:"erro"},[_vm._v(" "+_vm._s(_vm.errors.first('titulo'))+" ")])]),_vm._v(" "),_c('div',{staticClass:"controle"},[_c('label',{attrs:{"for":"url"}},[_vm._v("URL")]),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:(_vm.foto.url),expression:"foto.url"}],attrs:{"name":"url","data-vv-rules":"required","id":"url","autocomplete":"off"},domProps:{"value":(_vm.foto.url)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.foto, "url", $event.target.value)}}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('url')),expression:"errors.has('url')"}],staticClass:"erro"},[_vm._v(" "+_vm._s(_vm.errors.first('url'))+" ")]),_vm._v(" "),_c('imagem-responsiva',{directives:[{name:"show",rawName:"v-show",value:(_vm.foto.url),expression:"foto.url"}],attrs:{"url":_vm.foto.url,"titulo":_vm.foto.titulo}})],1),_vm._v(" "),_c('div',{staticClass:"controle"},[_c('label',{attrs:{"for":"descricao"}},[_vm._v("DESCRIÇÃO")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.foto.descricao),expression:"foto.descricao"}],attrs:{"id":"descricao","autocomplete":"off"},domProps:{"value":(_vm.foto.descricao)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.foto, "descricao", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"centralizado"},[_c('meu-botao',{attrs:{"rotulo":"GRAVAR","tipo":"submit"}}),_vm._v(" "),_c('router-link',{attrs:{"to":{ name: 'home' }}},[_c('meu-botao',{attrs:{"rotulo":"VOLTAR","tipo":"button"}})],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=0.build.js.map