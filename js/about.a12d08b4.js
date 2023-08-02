"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{4180:function(t,e,n){n.r(e),n.d(e,{default:function(){return $}});var i=n(6252);const r={class:"container mx-auto"},s={class:"container mx-auto"};function a(t,e,n,a,o,u){const m=(0,i.up)("AboutMe"),l=(0,i.up)("AboutCounter"),d=(0,i.up)("AboutClients");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",r,[(0,i.Wm)(m)]),(0,i.Wm)(l),(0,i._)("div",s,[(0,i.Wm)(d)])])}var o=n(3577),u=n.p+"img/profile.a35dc37c.jpg";const m={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},l=(0,i._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,i._)("img",{src:u,class:"rounded-xl w-96",alt:""})],-1),d={class:"w-full sm:w-3/4 text-left"};function c(t,e,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",m,[l,(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.bios,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,o.zw)(t.bio),1)))),128))])])}var p={setup(){return{bios:[{id:1,bio:"Hi My name is Tol Yimdara . I am a web developer and also UX/UI designer. I have experience of develop frontend website for nearly 2 years by using vue js and vuetify as CSS Library . I also have experience of develop mobile application by useing Android studio and also develop API by using node js ( express ) and typsecript. "},{id:2,bio:"I have been a freelancer for 3 months by worked in korean company that build mobile application for korean big company by using ( Ionic Vue Js) . "}]}}},h=n(3744);const g=(0,h.Z)(p,[["render",c]]);var A=g;const f={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},v={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},x={class:"mb-20 sm:mb-0"},b={class:"block text-md text-white dark:text-ternary-light"},w={class:"mb-20 sm:mb-0"},y={class:"block text-md text-white dark:text-ternary-light"},k={class:"mb-20 sm:mb-0"},C={class:"block text-md text-white dark:text-ternary-light"},D={class:"mb-20 sm:mb-0"},T={class:"block text-md text-white dark:text-ternary-light"};function P(t,e,n,r,s,a){const u=(0,i.up)("counter");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",v,[(0,i._)("div",x,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:2,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-white dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),(0,i._)("span",b,(0,o.zw)(t.experienceTitle),1)]),(0,i._)("div",w,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:20,duration:1,suffix:"+",autoinit:!0,onFinished:e[1]||(e[1]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-white dark:text-secondary-light mb-2"},null,512),(0,i._)("span",y,(0,o.zw)(t.githubTitle),1)]),(0,i._)("div",k,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:92,duration:1,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-white dark:text-secondary-light mb-2"},null,512),(0,i._)("span",C,(0,o.zw)(t.feedbackTitle),1)]),(0,i._)("div",D,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:10,duration:1,autoinit:!0,onFinished:e[3]||(e[3]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-white dark:text-secondary-light mb-2"},null,512),(0,i._)("span",T,(0,o.zw)(t.projectsTitle),1)])])])}var V=(0,i.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),i=n[0],r=n.length>1?this.decimalSeparator+n[1]:"",s=!isNaN(parseFloat(this.separator));if(this.separator&&!s)while(t.test(i))i=i.replace(t,"$1"+this.separator+"$2");return i+r}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function I(t,e,n,r,s,a){return(0,i.wg)(),(0,i.j4)("span",null,(0,o.zw)(t.displayedAmount),1)}V.render=I;var N=(()=>{const t=V;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),W=N,z={components:{counter:W},data:()=>({experienceTitle:"Years of experience",githubTitle:"Stars on GitHub",feedbackTitle:"Positive feedback",projectsTitle:"Projects completed"})};const K=(0,h.Z)(z,[["render",P]]);var O=K;const S={class:"mt-10 sm:mt-20"},Q={class:"font-general-medium text-2xl sm:text-3xl text-emerald-900 dark:text-white"},U={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function X(t,e,n,r,s,a){const u=(0,i.up)("AboutClientSingle");return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("p",Q,(0,o.zw)(t.clientsHeading),1),(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.clients,(t=>((0,i.wg)(),(0,i.j4)(u,{key:t.id,client:t},null,8,["client"])))),128))])])}const B={class:"grid grid-cols-1 justify-items-center"},F=["src","alt"],j={class:"text-center text-lg text-emerald-800 dark:text-white font-bold"};function M(t,e,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("img",{src:n.client.img,alt:n.client.title,class:"w-64 h-52 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:ternary-dark"},null,8,F),(0,i._)("p",j,(0,o.zw)(n.client.title),1)])}var E={props:["client"]};const G=(0,h.Z)(E,[["render",M]]);var H=G,Z={components:{AboutClientSingle:H},data:()=>({clientsHeading:"Technology And Framework That I am Friendly With",clients:[{id:1,title:"Node Js",img:n(2147)},{id:2,title:"Typescript",img:n(3200)},{id:3,title:"Vue Js",img:n(1866)},{id:4,title:"Laravel",img:n(8463)},{id:5,title:"Ionic Vue Js",img:n(7088)},{id:6,title:"Vuetify CSS",img:n(2512)}]})};const J=(0,h.Z)(Z,[["render",X]]);var Y=J,R=n(8508),q=n.n(R),L={name:"About",components:{AboutMe:A,AboutCounter:O,AboutClients:Y},data:()=>({}),mounted(){q().replace()},updated(){q().replace()},methods:{}};const _=(0,h.Z)(L,[["render",a]]);var $=_},7088:function(t){t.exports="data:image/png;base64,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"},8463:function(t,e,n){t.exports=n.p+"img/laravel-logo.3e037031.png"},2147:function(t,e,n){t.exports=n.p+"img/node-js-logo.cd2932a2.png"},3200:function(t,e,n){t.exports=n.p+"img/typescript-logo.549272a4.png"},1866:function(t,e,n){t.exports=n.p+"img/vue-logo.33a63526.png"},2512:function(t,e,n){t.exports=n.p+"img/vuetify.065d367b.png"}}]);
//# sourceMappingURL=about.a12d08b4.js.map