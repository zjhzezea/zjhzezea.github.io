(self["webpackChunkcity_font_a0"]=self["webpackChunkcity_font_a0"]||[]).push([[2320],{2320:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("Layout",[t("div",{staticClass:"layout-container",staticStyle:{width:"100%"}},[t("div",{staticClass:"page-header"},[t("div",{staticClass:"am-container"},[t("h1",{staticClass:"page-header-title"},[e._v("客户案例")])])]),t("div",{staticClass:"breadcrumb-box"},[t("div",{staticClass:"am-container"},[t("ol",{staticClass:"am-breadcrumb"},[t("li",[t("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),t("li",{staticClass:"am-active"},[e._v("客户案例")])])])])]),t("div",{staticClass:"section example"},[t("div",{staticClass:"container",staticStyle:{"max-width":"1160px",margin:"0 auto"}},[t("div",{staticClass:"section--header"},[t("h2",{staticClass:"section--title"},[e._v("全球首创 自主创新")]),t("p",{staticClass:"section--description"},[e._v(" Enterplorer Studio是一套面向企业级移动信息化建设的开发平台。集聚开发、测试、 "),t("br"),e._v("打包、发布于一体的移动化开发综合平台。 ")])]),t("div",{staticClass:"example-container"},[t("div",{staticClass:"am-tabs"},[t("ul",{staticClass:"am-tabs-nav am-nav am-nav-tabs am-g"},e._l(e.tabList,(function(a,i){return t("li",{key:i,staticClass:"am-u-md-2",class:e.tabIndex===i?"am-active":"",on:{click:function(t){return t.preventDefault(),e.changeTab(i)}}},[t("a",{attrs:{href:"#"}},[t("i",{class:a.icon}),e._v(e._s(a.name))])])})),0),t("div",{staticClass:"tabs"},e._l(e.list,(function(e,a){return t("div",{key:a,staticClass:"tab"},[t("img",{attrs:{src:e,alt:""}})])})),0)])])])])])},n=[],s=(a(2329),a(5669)),r=(a(8542),a(6314),a(2280),a(282),a(8209),a(5157),a(8777),a(3568),{name:"ExampleView",components:{Layout:s.Z},data(){return{tabIndex:0,tabList:[{id:1,name:"主要案例",icon:"am-icon-map-o"},{id:1,name:"客户案例一",icon:"am-icon-scribd"},{id:1,name:"客户案例二",icon:"am-icon-odnoklassniki"},{id:1,name:"客户案例三",icon:"am-icon-building-o"},{id:1,name:"客户案例四",icon:"am-icon-hand-scissors-o"},{id:1,name:"客户案例五",icon:"am-icon-camera"}],list:[]}},mounted(){this.findExampleByExampleType(0)},methods:{changeTab(e){this.tabIndex=e,this.findExampleByExampleType(e)},findExampleByExampleType(e){this.getRequest(`/findExampleByExampleType/${e}`).then((e=>{if(e){const t=e.data.data,a=[];for(let e=1;e<17;e++)null!=t["image"+e]&&a.push(t["image"+e]);this.list=a}}))}}}),l=r,c=a(1001),o=(0,c.Z)(l,i,n,!1,null,"f297655c",null),d=o.exports},282:function(e,t,a){var i=a(9755);i((function(e){e.EvList=function(t){let a,i=0;const n=function(){i>=e(".ev-list .item-desc").length&&(i=0),r(i)};function s(a){i=0,e(".stage-con .item-year").text(a);let s="";for(var r in t.list[a])r=t.list[a][r],s+=`<p class="item-desc">${r.text}</p>`;e(".ev-list").html(s),e(".ev-img").attr("src",`${t.imgUrl}/${a}_0.jpg`),e(".ev-list .item-desc").eq(0).css("color","#333"),1<e(".ev-list .item-desc").length&&n()}function r(a){var i=e(".stage-date .active").text();e(".ev-img").attr("src",`${t.imgUrl}/${i}_${a}.jpg`),i=e(".ev-list .item-desc").length,e(".ev-list .item-desc").eq(a).css("color","#333"),1<i&&e(".ev-list .item-desc").eq(a).siblings().css("color","#999")}s(t.initYear),e(".stage .stage-date .stage-focus").on("mouseenter",(function(){clearInterval(a);var t=e(this).text();e(".stage-date .stage-focus").removeClass("active"),e(this).addClass("active"),s(t)})),e(".stage-con .ev-list ").on("mouseenter",".item-desc",(function(){clearInterval(a);var t=e(this).index();r(i=t)})),e(".stage-con .ev-list").on("mouseleave",".item-desc",(function(){1<e(".ev-list .item-desc").length&&n()}))}}))},6314:function(e,t,a){var i=a(9755);const n={sweep:[{title:"BV330系列",msg:"扫拖一体，不留死角",list:[{name:"BV332",id:"BV332"},{name:"BV321",id:"BV321"},{name:"BL200A",id:"BL200A"},{name:"BL200B",id:"BL200B"}]},{title:"集尘站系列",msg:"不用天天动手倒垃圾",list:[{name:"BV320AL",id:"BV320AL"}]},{title:"7系列",msg:"随心预约，满足多样需求",list:[{name:"BL703",id:"BL703"}]},{title:"6系列",msg:"智能感应，再也不怕萌宠毛发遍布",list:[{name:"BL602",id:"BL602"},{name:"BL608",id:"BL608"},{name:"BL618",id:"BL618"},{name:"BL628",id:"BL628"}]},{title:"5系列",msg:"简约设计 智能生活",list:[{name:"BL517",id:"BL517"},{name:"BL500",id:"BL500"}]},{title:"1系列",msg:"高效清洁，性价比高",list:[{name:"BL102",id:"BL102"},{name:"BL105",id:"BL105"}]},{title:"K系列",msg:"省时省电，迷你超薄",list:[{name:"K5",id:"K5"},{name:"K5A",id:"K5A"}]}],window:[{title:"经典系列",msg:"路径记忆，断点续洁",list:[{name:"CC906",id:"CC906"}]},{title:"振动擦拭系列",msg:"仿人工专利，左右振摆擦洗",list:[{name:"CC901",id:"CC901"}]},{title:"迷你系列",msg:"更小更薄，适合复杂擦窗场景",list:[{name:"CC909",id:"CC909"}]}]};i.fn.productNav=function(){let e="";for(var t in n){e+=`<div class="product-item ${"sweep"===t?"active":""}"><ul class="list">`;for(let s=0;s<n[t].length;s++){var a=n[t][s],i=Math.ceil(n[t].length/3);e+=`<li class="list-item ${(s+1)%3==0?"not-bor-r":""} ${0<=s-3*(i-1)?"not-bor-b":""}"><div class="list-item-wrap">\n        <h5 class="item-title">${a.title}</h5><p class="item-msg">${a.msg}</p>`;for(let t=0;t<a.list.length;t++)e+=`<div class="${0===t?"cell active":"cell"}">\n                        <a href="./product_detail.html?type=${a.list[t].id}">${a.list[t].name}</a>\n                        <div class="img-wrap"><img src="../assets/images/product/top/${a.list[t].id}_298.png" onerror=src="http://placehold.it/140x140" alt="宝乐扫地机"></div>\n                      </div>`;e+="</div></li>"}e+="</ul></div>"}return e},i("#nav .product-tab .main-wrap").html(i.fn.productNav()),i(".product-nav a").on("mouseover",(function(){var e=i(this).data("index");i(this).parents(".product-nav").find("a").removeClass("active"),i(this).addClass("active"),i(this).parent().parent().next(".product-tab").find(".product-item").removeClass("active").eq(e).addClass("active")})),i(".product-tab ").on("mouseover",".cell a",(function(){i(this).parent().addClass("active").siblings(".cell").removeClass("active"),i(this).parent().parent().siblings(".list-item-wrap-left").children().removeClass("active"),i(this).parent().parent().siblings(".list-item-wrap").children().removeClass("active")})),i("#header .mobile .menu-btn").on("click",(function(){i("#header").hasClass("show")?(i("#header").removeClass("show"),i("body").css("overflow","auto"),i("video").show()):(i("#header").addClass("show"),i("body").css("overflow","hidden"),i("video").hide())})),i("#header .mobile .menu-nav-wrap").on("click",(function(){var e=i(this).parent(".menu-nav-item");e.hasClass("active")?e.removeClass("active"):e.addClass("active"),e.siblings().removeClass("active")}))},2280:function(e,t,a){var i=a(9755);i((function(){ajaxService.bannerList({pageSize:10},(function(e){if(0==e.code){let n="";for(let a=0;a<e.data.length;a++){var t=e.data[a];n+=`<a href="${t.link_to||"javascript:;"}" target="${t.link_to?"_blank":""}" class="${t.link_to?"item swiper-slide":"swiper-slide item default"}">\n           <span class="img" data-url="${t.image}" style="background: url('${t.image}') no-repeat center;filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${t.image}',sizingMethod='scale')"></span>\n           </a>`}i(".swiper-wrapper").html(n),8==tool.myBrowser()&&i(".swiper-wrapper .item").each((function(){var e=i(this).children(".img").data("url");i(this).children(".img").css("filter",`progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${e}',sizingMethod='scale')`)}));var a=new Swiper(".swiper-container",{autoplay:1<e.data.length.length&&5e3,speed:500,loop:!0,calculateHeight:!0,autoplayDisableOnInteraction:!1,pagination:".pagination",paginationClickable:!0,swipeToNext:!1,swipeToPrev:!1});i(".swiper-container .prev").click((function(){a.swipePrev()})),i(".swiper-container .next").click((function(){a.swipeNext()}))}})),ajaxService.indexNews({num:4,lang:"zh-CN"},(function(e){if(0==e.code)if(e.data.length<2)i(".news-wrap").remove();else{let r="";for(let i=0;i<e.data.length;i++){var t=e.data[i],a=t.brief;a&&57<a.length&&(a=a.slice(0,57)+"...");var n=t.update_at&&t.update_at.split(" ")[0].substr(5,5);r+=`<a class="swiper-slide news-item ${i%2==0?"fl":"fr"}" target=_blank href="/cn/about_newsdetail.html?id=${t.id}">\n            <div class="news-item-img"><image src="${t.image}" /></div>\n            <div class="news-item-text"><h4 title="${t.title}">${t.title}</h4><p class="news-item-brief">${a}</p>\n            </div> <span class="news-item-date">${n}</span></a>`}i(".news-main .swiper-wrapper").html(r),8==tool.myBrowser()&&i(".news-main .news-item").each((function(){var e=i(this).find("h4"),t=e.text();24<t.length&&e.text(t.slice(0,24)+"...")}));var s=new Swiper(".news-main-wrap",{autoplay:5e3,speed:500,loop:!0,calculateHeight:!0,autoplayDisableOnInteraction:!1,swipeToNext:!1,swipeToPrev:!1,slidesPerView:2,slidesPerGroup:2});i(".news-main .prev .arrow").click((function(){s.swipePrev()})),i(".news-main .next .arrow").click((function(){s.swipeNext()}))}}))}))},8542:function(e,t,a){var i=a(9755);!function(e){var t={init:function(e,a){t.fillHtml(e,a),t.bindEvent(e,a)},fillHtml:function(e,t){return function(){e.empty(),1!=t.current&&4<=t.current&&4!=t.pageCount&&e.append('<a href="javascript:;" class="tcdNumber">1</a>'),2<t.current-2&&t.current<=t.pageCount&&5<t.pageCount&&e.append('<span class="ellipsis">...</span>');var a=t.current-2,i=t.current+2;for((1<a&&t.current<4||1==t.current)&&i++,t.current>t.pageCount-4&&t.current>=t.pageCount&&a--;a<=i;a++)a<=t.pageCount&&1<=a&&(a!=t.current?e.append('<a href="javascript:;" class="tcdNumber">'+a+"</a>"):e.append('<span class="current">'+a+"</span>"));t.current+2<t.pageCount-1&&1<=t.current&&5<t.pageCount&&e.append('<span class="ellipsis">...</span>'),t.current!=t.pageCount&&t.current<t.pageCount-2&&4!=t.pageCount&&e.append('<a href="javascript:;" class="tcdNumber">'+t.pageCount+"</a>"),1<t.current?e.append('<a href="javascript:;" class="prevPage btnPage">上一页</a>'):(e.remove(".prevPage"),e.append('<span class="disabled btnPage">上一页</span>')),t.current<t.pageCount?e.append('<a href="javascript:;" class="nextPage btnPage">下一页</a>'):(e.remove(".nextPage"),e.append('<span class="disabled btnPage">下一页</span>'))}()},bindEvent:function(a,i){a.on("click","a.tcdNumber",(function(){var n=parseInt(e(this).text());t.fillHtml(a,{current:n,pageCount:i.pageCount}),"function"==typeof i.backFn&&i.backFn(n)})),a.on("click","a.prevPage",(function(){var e=parseInt(a.children("span.current").text());t.fillHtml(a,{current:e-1,pageCount:i.pageCount}),"function"==typeof i.backFn&&i.backFn(e-1)})),a.on("click","a.nextPage",(function(){var e=parseInt(a.children("span.current").text());t.fillHtml(a,{current:e+1,pageCount:i.pageCount}),"function"==typeof i.backFn&&i.backFn(e+1)}))}};e.fn.createPage=function(a){a=e.extend({pageCount:15,current:1,backFn:function(){}},a),t.init(this,a)}}(i)}}]);
//# sourceMappingURL=2320.545bb231.js.map