import{_ as u}from"./index-5hv_l7VU.js";const c={class:"border-box"},r=Vue.defineComponent({__name:"webTec",setup(l){const n=Vue.inject("$axios");let e=Vue.ref([]);return Vue.onMounted(()=>{n.get("/myInfo").then(t=>{e.value=t.results||[]})}),(t,s)=>(Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createElementVNode("ul",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(e),o=>(Vue.openBlock(),Vue.createElementBlock("li",null,Vue.toDisplayString(o.content),1))),256))])]))}}),V=u(r,[["__scopeId","data-v-f4d67d9c"]]);export{V as default};
