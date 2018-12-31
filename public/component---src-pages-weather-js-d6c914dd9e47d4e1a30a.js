(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(150),i=n(148),l=(n(32),n(145)),s=n.n(l),u=(n(33),n(171),n(7)),c=n.n(u),p=n(51),d=n.n(p),f=n(4),m=n.n(f),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).availableFields={temp:"temperature",precip:"precipitation_rate",precipRadar:"radar",feelsLike:"apparent_temperature",cloudCover:"cloud_cover",wind:"wind_speed",gust:"wind_gust",dewPoint:"dew_point",uvIndex:"uv_index",pressure:"sea_level_pressure",ozone:"ozone",emoji:"emoji"},n.url=n.url.bind(d()(d()(n))),n.uom=n.uom.bind(d()(d()(n))),n}c()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(){return!1},n.url=function(){var e=this.props,t=e.lat,n=e.lng,a=e.zoom,r=e.units,o=e.fieldControl,i=e.timeControl,l=e.mapField,s=e.url,u=e.apiKey,c=this.availableFields[l];if(!c)throw new Error("Invalid mapField.");s="https://maps.darksky.net/@"+c+","+t+","+n+","+a+"\n            ?domain="+encodeURIComponent(s)+"\n            &auth="+u+"\n            &embed=true\n            &fieldControl="+o.toString()+"\n            &timeControl="+i.toString()+"\n            &defaultField="+c;var p=this.uom(r);return p&&(s+="&defaultUnits="+p),s.replace(/\s/g,"")},n.uom=function(e){switch(this.props.mapField){case"temp":case"feelsLike":case"dewPoint":return"metric"===e?"_c":"_f";case"precip":return"metric"===e?"_mmph":"_inph";case"wind":case"gust":return"metric"===e?"_kmph":"_mph";case"pressure":return"metric"===e?"_hpa":"_inhg";case"ozone":return"_du";default:return""}},n.render=function(){var e=this.props,t=(e.lat,e.lng,e.zoom,e.units,e.fieldControl,e.timeControl,e.mapField,e.onLoad),n=s()(e,["lat","lng","zoom","units","fieldControl","timeControl","mapField","onLoad"]);return r.a.createElement("iframe",Object.assign({frameBorder:"0",src:this.url(),onLoad:t},n))},t}(a.Component);h.propTypes={lat:m.a.number.isRequired,lng:m.a.number.isRequired,zoom:m.a.number,mapField:m.a.string,timeControl:m.a.bool,fieldControl:m.a.bool,units:m.a.oneOf(["metric","imperial"]),onLoad:m.a.func},h.defaultProps={zoom:4,mapField:"temp",timeControl:!0,fieldControl:!0,units:"metric",width:"100%",height:"500px"};var v=h,g=function(){return r.a.createElement("section",{id:"banner"},r.a.createElement("div",{className:"content"},r.a.createElement("header",null,r.a.createElement("h1",null,"Current Weather")),r.a.createElement(v,{lat:33.77377,lng:-84.36314,zoom:11,mapField:"precip",url:"https://ponce.news",apiKey:"809db80d2943fee8205b3e342e0879be"})))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,null),r.a.createElement(g,null))}},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(145)),o=a(n(147)),i=a(n(7)),l=a(n(51)),s=a(n(52)),u=a(n(4)),c=a(n(0)),p=n(18),d=n(146);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(p.Link,(0,o.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},145:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},148:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(0),i=n.n(o),l=function(e){e.siteTitle;return i.a.createElement("header",{id:"header"},i.a.createElement("a",{href:"index.html",className:"logo"},i.a.createElement("strong",null,"Ponce News Network")," - A Name In News"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-twitter"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-facebook"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram")))))};l.propTypes={siteTitle:r.a.string},l.defaultProps={siteTitle:""},t.a=l},171:function(e,t,n){"use strict";n(172);var a=n(5),r=n(73),o=n(16),i=/./.toString,l=function(e){n(17)(RegExp.prototype,"toString",e,!0)};n(25)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},172:function(e,t,n){n(16)&&"g"!=/./g.flags&&n(24).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})}}]);
//# sourceMappingURL=component---src-pages-weather-js-d6c914dd9e47d4e1a30a.js.map