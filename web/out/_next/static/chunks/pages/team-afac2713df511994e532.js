_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{YykV:function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSG",(function(){return k})),a.d(e,"default",(function(){return E}));var n=a("1OyB"),r=a("vuIU"),c=a("Ji7U"),o=a("md7G"),i=a("foSv"),s=a("8Kt/"),u=a.n(s),l=a("CafY"),_=(a("YFqc"),a("q1tI")),m=a.n(_),f=a("Z4Yb"),p=a.n(f),d=a("sdrw"),h=a.n(d),w=a("8tEE"),b=a("IP2g"),v=m.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var N=function(t){Object(c.a)(a,t);var e=g(a);function a(t){var r;Object(n.a)(this,a);var c=(r=e.call(this,t)).props.contacts.map((function(t,e){return v(y,{key:e,name:t.name,position:t.position,organization:t.organization,website:t.website,twitter:t.twitter,note:t.note})}));return r.state={contact_cards:c},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){for(var t=this.state.contact_cards.slice(),e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}this.setState({contact_cards:t})}},{key:"render",value:function(){return v("section",{className:h.a.cards},this.state.contact_cards)}}]),a}(m.a.Component);function y(t){var e="";""!=t.website&&(e=v("a",{href:t.website,target:"_blank"},v(b.a,{icon:w.a})," Web"));var a="";if(""!=t.twitter){var n="https://twitter.com/"+t.twitter;a=v("a",{href:n,target:"_blank"},v(b.a,{icon:w.b})," Twitter")}return v("article",{className:h.a.card},v("h3",{className:h.a.name},t.name),v("p",{className:h.a.title},t.position),v("p",{className:h.a.title},t.organization),v("p",null,e," ",v("span",{className:h.a.spacer})," ",a),v("p",{className:h.a.note},t.note))}var k=!0;function E(t){var e=t.teamData;return v(l.a,{home:!0},v(u.a,null,v("title",null,"GEM Team")),v("article",null,v("div",{className:p.a.headingXl},"Team"),v("p",{className:h.a.description},"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks. This page acts as a directory of our amazing contributors:"),v("div",{className:h.a.centered},v(N,{contacts:e.teamMembers}))))}},sdrw:function(t,e,a){t.exports={description:"team_description__120c_",name:"team_name__11PcX",title:"team_title__3YUb1",note:"team_note__3AKsF",spacer:"team_spacer__19hMf",centered:"team_centered__2SM2g",cards:"team_cards__1fW_X",card:"team_card__Z8ae3"}},uBm1:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return a("YykV")}])}},[["uBm1",0,2,4,5,1,3]]]);