/* empty css                       */import{c as _,_ as m}from"./index-5hv_l7VU.js";const p={class:"home-index"},h={class:"ql-container ql-snow"},v={class:"ql-editor"},x=["innerHTML"],f=Vue.defineComponent({__name:"Index",setup(w){const c=Vue.inject("$axios"),l=Vue.ref([]);let r=Vue.toRefs(_()),t=Vue.ref("");Vue.watch(r.headerKeyword,e=>{t.value=e,s()});const s=()=>{let e=t.value?`{"content": {"$regex":"${t.value}","$options":"i"},"moduleType":"vue"}`:'{"moduleType":"vue"}';console.log(e),c.get("/indexData",{params:{where:e}}).then(o=>{console.log(o),l.value=o.results||[]})};return Vue.onMounted(()=>{s()}),(e,o)=>{const u=Vue.resolveComponent("el-descriptions-item"),a=Vue.resolveComponent("el-descriptions"),i=Vue.resolveComponent("el-scrollbar"),d=Vue.resolveComponent("el-main"),V=Vue.resolveComponent("el-container");return Vue.openBlock(),Vue.createElementBlock("div",p,[Vue.createVNode(V,null,{default:Vue.withCtx(()=>[Vue.createVNode(d,{class:"list-main"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{"wrap-class":"main-scroll-class"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.TransitionGroup,{name:"list",tag:"div",mode:"",class:"container"},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(l),n=>(Vue.openBlock(),Vue.createBlock(a,{key:n.title,title:n.title},{default:Vue.withCtx(()=>[Vue.createVNode(u,{class:"ddd"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",h,[Vue.createElementVNode("div",v,[Vue.createElementVNode("div",{innerHTML:n.content},null,8,x)])])]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),g=m(f,[["__scopeId","data-v-7476862d"]]);export{g as default};
