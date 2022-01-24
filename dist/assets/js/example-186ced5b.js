import { C as Contextmenu, _ as _export_sfc, i as install } from "./install-41f7cb8d.js";
import { d as defineComponent, l as ref, p as provide, Q as resolveComponent, X as createElementBlock, k as createVNode, F as Fragment, W as openBlock, I as createApp } from "./@vue-e049e909.js";
import "./user-63c46bfe.js";
import "./ant-design-vue-fdd04231.js";
import "./@babel-2ac7e3e5.js";
import "./regenerator-runtime-5031f1e2.js";
import "./vue-types-e39ece55.js";
import "./omit.js-8aeb4109.js";
import "./resize-observer-polyfill-41c23942.js";
import "./lodash-es-23e4464f.js";
import "./moment-f39140d2.js";
import "./dom-align-9919c820.js";
import "./@ant-design-2d8d3906.js";
import "./@ctrl-61649d3f.js";
import "./array-tree-filter-7da04b0d.js";
import "./mockjs-475bec84.js";
import "./shallow-equal-751ba107.js";
import "./async-validator-f2a6c09d.js";
import "./scroll-into-view-if-needed-c253da67.js";
import "./compute-scroll-into-view-f5b2517a.js";
import "./warning-cc941e3b.js";
import "./dom-scroll-into-view-5e57096f.js";
/* empty css                        */import "./vuex-e2e89b61.js";
import "./lodash-b6c46e4a.js";
import "./vue-router-01acb1b4.js";
import "./axios-0769891d.js";
import "./store-697dbeb5.js";
import "./nprogress-9d8acc3f.js";
import "./@antv-15af26e6.js";
import "./tslib-ca86d7fb.js";
import "./detect-browser-3458fdcd.js";
import "./gl-matrix-41ea8061.js";
import "./d3-ease-a82c91a3.js";
import "./d3-interpolate-d19ec80d.js";
import "./d3-color-9ef60408.js";
import "./d3-timer-29ea6e13.js";
import "./fecha-7b6e87e1.js";
import "./size-sensor-ba076d7e.js";
import "./d3-regression-e5d6f1c6.js";
import "./pdfast-e3a16ab3.js";
import "./fmin-29e03d32.js";
import "./d3-hierarchy-82895eaf.js";
import "./crypto-js-b36d07a8.js";
import "./@soerenmartius-2f8ee501.js";
import "./@mojs-a20d5914.js";
import "./echarts-fffd6d3a.js";
import "./zrender-cdd1d9d2.js";
import "./xlsx-31acc619.js";
import "./file-saver-4f4235a0.js";
import "./fuse.js-1fb2d2a0.js";
import "./@kangc-402aa479.js";
import "./vue-040306de.js";
import "./highlight.js-5d1de029.js";
import "./vue3-marquee-edfef22c.js";
import "./jquery-8159147d.js";
import "./print-js-5d24544a.js";
import "./quill-15a337e4.js";
import "./@vueuse-4abd6e7f.js";
import "./vxe-table-f054a188.js";
import "./xe-utils-a3a4c73c.js";
import "./@braks-03bbe884.js";
import "./mitt-e6c86215.js";
;
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "App",
  components: {
    Contextmenu
  },
  setup() {
    const contextmenu = ref(null);
    provide("appContextmenu", contextmenu);
    return {
      contextmenu
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_Contextmenu = resolveComponent("Contextmenu");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_router_view),
    createVNode(_component_Contextmenu, { ref: "contextmenu" }, null, 512)
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
console.log("%c \u6B64\u9875\u9762\u4E0D\u9700\u8981\u540E\u7AEF\u670D\u52A1\uFF0C\u7528\u7684\u662Fmock\u6570\u636E", "color:#ffacac;");
const app = createApp(App);
app.use(install).mount("#app");
