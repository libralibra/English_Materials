var _statcounter=function(A){var M=!1;function ce(p,V){for(var x=0;x<V.length;x++)if(V[x]==p)return!0;return!1}function de(p){return ce(p,[12225189,11548023,11878871,12214659,981359,9560334,6709687,9879613,4124138,204609,10776808,11601825,10011918])}function De(p){return ce(p,[10011918])}function Je(p){return!1}try{var p=function(e,t){V()?document.writeln(e):z.insertAdjacentHTML("afterend",e)},V=function(e){return e==="invisible"?!1:z===!1||!z.insertAdjacentHTML},x=function(e){return ce(e,[4344864,4124138,204609])||e>kt},pt=function(e){return ce(e,[10011918,4124138])},bt=function(e){var t=!0;try{if(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage"in window&&"withCredentials"in new XMLHttpRequest||(t=!1),S("sc_project_config_"+e)===1&&S("sc_project_time_difference_"+e)!==null&&(t=!1),S("sc_block_project_config_"+e)!==null&&(t=!1),t){var r=C("sc_project_config_"+e,-1);r?be="good":be="bad";var n=S("sc_project_config_"+e);t=n===-1,be+=n}}catch(i){t=!1}return t},Ge=function(){var e=""+v.referrer;return typeof sc_referer_scr08!="undefined"&&(e=sc_referer_scr08),e},Oe=function(){var e=""+v.title;return e=e.substring(0,300),encodeURIComponent?e=encodeURIComponent(e):e=escape(e),e},Z=function(){var e=""+v.location;return e=="about:srcdoc"&&(e=""+document.baseURI),e=e.substring(0,300),e=escape(e),e},xt=function(){return b.screen.width},It=function(){return b.screen.height},Me=function(e){if(ut==0){var t="",r="",n="";try{if(typeof performance!="undefined"){var i=Math.round(performance.now());t="&sc_rum_e_s="+we+"&sc_rum_e_e="+i;var a=i-we;r=St(e,a)}}catch(s){t="",r=""}try{if(typeof performance!="undefined")for(var f=performance.getEntriesByType("resource"),l=0;l<f.length;l++){var u=f[l];if(u.name.includes("statcounter.com/counter/counter.js")||u.name.includes("statcounter.com/counter/counter_test.js")){n="&sc_rum_f_s="+Math.round(u.requestStart)+"&sc_rum_f_e="+Math.round(u.responseEnd);break}}}catch(s){n=""}return t+r+n}return""},St=function(e,t){var r="";if(pt(e)&&typeof performance!="undefined"){var n=document.getElementById("sc-ttfb-bd"),i="-1";n&&(i=n.textContent);var a=performance.timing.responseStart-performance.timing.connectStart,f=document.getElementById("sc-perf-wh"),l=0;f&&(l=f.textContent);var u=document.getElementById("sc-perf-pn"),s=0;u&&(s=u.textContent);var g=document.getElementById("sc-perf-db"),c=0;g&&(c=g.textContent),r="&sc_ev_scperf_js_exec="+t+"&sc_ev_scperf_ttfb_frontend="+a+"&sc_ev_scperf_ttfb_backend="+i+"&sc_ev_scperf_ws="+l+"&sc_ev_scperf_pn="+s+"&sc_ev_scperf_db="+c}return r},Et=function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var r=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,n=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(n,"").replace(r,function(i,a){return t.indexOf("<"+a.toLowerCase()+">")>-1?i:""})},Tt=function(e){for(var t=0;t<e.length;t++)e[t]=(""+e[t]).trim();return e},Ot=function(e){var t=10,r=1,n=300,i=[];if(e.length%2!=0)i.push("Every tag must have a name and value.");else{e.length/2>t&&i.push("No more than "+t+" tags can be passed - "+e.length/2+" passed.");for(var a=0;a<e.length;a++){var f=(""+e[a]).length;(f<r||f>n)&&i.push("Tag names and values must be between "+r+" and "+n+" characters in length ('"+e[a]+"' is "+e[a].length+" characters long).")}for(var a=0;a<e.length;a++)Et(""+e[a])!=""+e[a]&&i.push("Tag names and values may not contain HTML tags.")}if(i.length!=0){for(var a=0;a<i.length;a++);return!1}return!0},Mt=function(e){function t(f,l){var u=f.__proto__||f.constructor.prototype;return l in f&&(!(l in u)||u[l]!==f[l])}if(Object.prototype.hasOwnProperty)var t=function(l,u){return l.hasOwnProperty(u)};var r={};if(t(e,"tags")&&typeof e.tags=="object"){var n=[];for(var i in e.tags)n[n.length]=i,n[n.length]=e.tags[i];if(Ot(n)){n=Tt(n);for(var a=0;a<n.length;a=a+2)r["sc_ev_"+encodeURIComponent(n[a])]=encodeURIComponent(n[a+1])}}return r},Nt=function(e){var t,r=e.length,n=this,i=0,a=n.i=n.j=0,f=n.S=[];for(r||(e=[r++]);i<R;)f[i]=i++;for(i=0;i<R;i++)f[i]=f[a=k&a+e[i%r]+(t=f[i])],f[a]=t;(n.g=function(l){for(var u,s=0,g=n.i,c=n.j,h=n.S;l--;)u=h[g=k&g+1],s=s*R+h[k&(h[g]=h[c=k&c+u])+(h[c]=u)];return n.i=g,n.j=c,s})(R)},ke=function(e,t){var r=[],n=(typeof e)[0],i;if(t&&n=="o")for(i in e)try{r.push(ke(e[i],t-1))}catch(a){}return r.length?r:n=="s"?e:e+"\0"},Ne=function(e,t){for(var r=e+"",n,i=0;i<r.length;)t[k&i]=k&(n^=t[k&i]*19)+r.charCodeAt(i++);return q(t)},Lt=function(e){try{return window.crypto.getRandomValues(e=new Uint8Array(R)),q(e)}catch(t){return[+new Date,window,window.navigator.plugins,window.screen,q(xe)]}},q=function(e){return String.fromCharCode.apply(0,e)},At=function(){var e=[],t,r,n={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},i=new RegExp("Mac OS X.*Safari/").test(navigator.userAgent)&&window.devicePixelRatio||1;if(!new RegExp("MSIE").test(navigator.userAgent)){if(navigator.mimeTypes&&navigator.mimeTypes.length)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r=navigator.mimeTypes[n[t]],e.push(r&&r.enabledPlugin?"1":"0"));typeof navigator.javaEnabled!="unknown"&&typeof navigator.javaEnabled!="undefined"&&navigator.javaEnabled()&&e.push("java"),typeof window.GearsFactory=="function"&&e.push("gears")}return e.push(screen.width*i+"x"+screen.height*i),e.join("")},ie=function(e){var t=new Date,r=!1;e===void 0&&(e=32,r&&(e=36));var n=Math.round(t.getTime()/1e3)+t.getMilliseconds(),i=(navigator.userAgent||"")+(navigator.platform||"")+At()+t.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+n;Kt(i);for(var a="0123456789ABCDEF".split(""),f=new Array(e),l=0,u,s=0;s<e;s++)r&&(s==8||s==13||s==18||s==23)?f[s]="-":s==12&&!r||s==14&&r?f[s]="4":s==13&&!r||s==15&&r?f[s]="F":(l<=2&&(l=33554432+ht()*16777216|0),u=l&15,l=l>>4,f[s]=a[s==19?u&3|8:u]);return f.join("")},Le=function(){var e=!1;if("localStorage"in window)try{e=window.localStorage!==null}catch(t){if(t.name&&t.name.toLowerCase()==="securityerror"&&window!==window.top)return!1;if((!t.name||t.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!t.number||parseInt(t.number,10)!==-2147024891))throw t}return e},Ae=function(e,t,r){if(Le()){try{e==="is_visitor_unique"?localStorage.setItem("statcounter.com/localstorage/",t):localStorage.setItem("statcounter_"+e,t)}catch(n){if((!n.name||n.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!n.number||parseInt(n.number,10)!==-2147024891))throw n;return!1}return!0}return!1},We=function(e,t,r,n,i,a){typeof t=="string"&&(t=[t]),n===void 0&&(n=""),i===void 0&&(i=30);var f=!1;if(Q=="localStorage")f=Ae(e,n+t.join("-"),r),f?fe(e)!==null&&Ze(e,r):f=Ke(e,n+t.join("-"),r,void 0,a);else{var l=t.slice(0,i).join("-");f=Ke(e,n+l,r,void 0,a),f?t.length>i?Ae(e,"mx"+t.slice(i).join("-"),r):Qe(e):f=Ae(e,n+t.join("-"),r)}return f},Ye=function(e,t){var r=null;if(Le()&&(e==="is_visitor_unique"?r=localStorage.getItem("statcounter.com/localstorage/"):r=localStorage.getItem("statcounter_"+e)),Q=="localStorage"&&r!==null&&r.substring(0,2)=="rx")return r;var n=fe(e,t);if(r!==null){if(n===null&&r.substring(0,2)=="rx")return r;n!==null&&r.substring(0,2)=="mx"&&(n+="-"+r.substring(2))}return n},Qe=function(e){Le()&&(e==="is_visitor_unique"&&localStorage.removeItem("statcounter.com/localstorage/"),localStorage.removeItem("statcounter_"+e))},Ct=function(e,t){Qe(e),fe(e)&&Ze(e,t)},fe=function(e,t){var r="sc_"+e+"=",n=null;if(v.cookie)for(var i=v.cookie.split(";"),a=0;a<i.length;a++){for(var f=i[a];f.charAt(0)==" ";)f=f.substring(1,f.length);if(f.indexOf(r)==0){var l=f.substring(r.length,f.length);n&&t!==void 0&&n.indexOf(""+t+".")!==-1&&l.indexOf(""+t+".")===-1||(n=l)}}return n},Ke=function(e,t,r,n,i){var a=!1;n===void 0?a=63072e6:n!=="session"&&(a=1e3*n);var f="";if(a!==!1){var l=new Date;l.setTime(l.getTime()+a),f="; expires="+l.toGMTString()}var u=3050;t.length>u-50&&t.substring(0,u).indexOf("-")!==-1&&(t=t.substring(0,t.substring(0,u).lastIndexOf("-")));var s="; SameSite=Lax";v.cookie="sc_"+e+"="+t+f+"; domain="+r+"; path=/"+s;var g=fe(e,i);return g!==null&&g===t},Ze=function(e,t){v.location.host=="www"+t&&(v.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+t+"; path=/; SameSite=Lax"),v.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+t+"; path=/; SameSite=Lax"},qe=function(){var e={};try{sessionStorage.getItem("statcounter_config")!==null&&(e=JSON.parse(sessionStorage.getItem("statcounter_config")))}catch(t){e={}}return e},S=function(e){if(!("sessionStorage"in window))return null;var t=qe();if(t[e]!==void 0)return t[e];var r=null;try{r=sessionStorage.getItem(e)}catch(n){return null}return r!==null?(C(e,r),sessionStorage.removeItem(e),r):null},C=function(e,t){if(!("sessionStorage"in window))return console.log("returning false"),!1;var r=qe();try{return r[e]=t,sessionStorage.setItem("statcounter_config",JSON.stringify(r)),!0}catch(n){return!1}},Bt=function(e,t,r){var n="t.php",i=G;if(De(e)&&(n="t_static.php",i="https://1ctest.statcounter.com/"),Je(e)&&(n="counter_test.php",i="https://1ctest.statcounter.com/"),t.substring(0,1)=="?")var a=i+n+t;else var a=t;a=a+"&xhr_request=true",Ce(a,r)},Ce=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var i=JSON.parse(this.responseText);t(i)}},r!==void 0&&n.addEventListener("error",r),n.withCredentials=!0,n.open("GET",e,!0),n.send()},je=function(e,t){C("sc_project_config_"+e,1);var r=C("sc_project_time_difference_"+e,parseInt(t.time_difference));if(r?$e="true":$e="false",pe=t.time_difference,t.visitor_recording>2&&C("heatmap_"+e,"on"),t.visitor_recording===1||t.visitor_recording===3)o.record(e);else if(t.visitor_recording===2||t.visitor_recording===4)o.record(e,"test");else if(t.visitor_recording===5||t.visitor_recording===6)o.record(e,"off");else{var n=S("record_"+e);n&&n.indexOf("dev")!==-1&&Ie(e)}t.visitor_recording_unmask!==void 0&&C("sc_unmask_"+e,t.visitor_recording_unmask)},oe=function(e,t,r){o.get_config(t,function(n){je(e,n),typeof r!="undefined"&&r(n)})},se=function(e){e==11601825&&Z().includes("statcounter-vs-google-analytics")&&je(e,{time_difference:1800,visitor_recording:3})},Dt=function(e,t){var r=e.split("."),n=t.split("."),i=Math.min(r.length,n.length),a=2;r.length>1&&(r[r.length-2].length<=3&&r[r.length-1]in{at:1,au:1,br:1,es:1,hu:1,il:1,nz:1,tr:1,uk:1,us:1,za:1}||r[r.length-1]=="kr"||r[r.length-1]=="ru"||r[r.length-1]=="au"&&r[r.length-2]in{csiro:1}||r[r.length-1]=="at"&&r[r.length-2]in{priv:1}||r[r.length-1]=="fr"&&r[r.length-2]in{avocat:1,aeroport:1,veterinaire:1}||r[r.length-1]=="hu"&&r[r.length-2]in{film:1,lakas:1,ingatlan:1,sport:1,hotel:1}||r[r.length-1]=="nz"&&r[r.length-2]in{geek:1,kiwi:1,maori:1,school:1,govt:1,health:1,parliament:1}||r[r.length-1]=="il"&&r[r.length-2]in{muni:1}||r[r.length-1]=="za"&&r[r.length-2]in{school:1}||r[r.length-1]=="tr"&&r[r.length-2]in{name:1}||r[r.length-1]=="uk"&&r[r.length-2]in{police:1})&&(a=3);for(var f=1;f<=i;f++){if(r[r.length-f]!=n[n.length-f])return!1;if(f>=a)return!0}return r.length==n.length},_e=function(e,t){if(t=="")return"d";var r=t.split("/")[2].replace(/^www\./,""),n=v.location.host.replace(/^www\./,"");if(x(e)&&(n==r||Dt(r,n)))return"internal";if(t.search(/\bgoogle\..*\?.*adurl=http/)!==-1)return"p";for(var i=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"],a=0;a<i.length;a++)if(v.location.search.indexOf(i[a])!==-1)return"p";for(var f=["utm_medium=email"],a=0;a<f.length;a++)if(v.location.search.indexOf(f[a])!==-1)return"e";if(!x(e)&&n==r)return"internal";for(var l in ne)if(r.replace(l,"#").split(".").indexOf("#")!==-1){if(ne[l]===null)return l;for(var a=0;a<ne[l].length;a++){var u=ne[l][a];if(t.indexOf("?"+u+"=")!==-1||t.indexOf("&"+u+"=")!==-1)return l}}for(var s in Se)for(var a=0;a<Se[s].length;a++){var l=Se[s][a];if(r.replace(l,"#").split(".").indexOf("#")!==-1)return s}return r},le=function(e){return e=="d"||e=="p"||e=="e"||e=="internal"?e:e in ne?"o":e in Se?"s":"r"},Be=function(e){if(window.sc_counter_width&&window.sc_counter_height)var t=' width="'+sc_counter_width+'" height="'+sc_counter_height+'"';var r="StatCounter - Free Web Tracker and Counter";return window.sc_remove_alt&&(r=""),'<img src="'+e+'" alt="'+r+'" border="0"'+t+">"},j=function(e,t,r){var n={};n.u1="za";var i=bt(e);try{Ue=Date.now()}catch(N){}if(ae[e]=new Date().getTime(),window!==b)if(b.sc_top_reg===void 0&&(b.sc_top_reg={}),b.sc_top_reg[e]===void 0)b.sc_top_reg[e]=1;else{Ie(e);return}var a={};if(!x(e)){var f=_e(e,Ee),l=le(f);f!="internal"&&(a.rcat=l,a.rdom=f)}var u=Math.round(new Date().getTime()/1e3);if(Q!="disabled"){if(x(e)){var f=_e(e,Ee),l=le(f);f!="internal"&&(a.rcat=l,a.rdom=f)}try{var s=JSON.parse(localStorage.getItem("sc_medium_source"));s==null&&(s={});var g=null,c=null,h=null,I=0;for(var d in s){(g===null||s[d]>s[g])&&(g=d);var O=le(d);l==O&&(c===null||s[d]>s[c])&&(c=d),O=="r"&&(h===null||s[d]<s[h])&&(h=d),I+=1}I>30&&h!==null&&delete s[h],sessionStorage.getItem("statcounter_bounce")&&(sessionStorage.removeItem("statcounter_bounce"),a.bb=0);var E=30;if(x(e)||(E=15),f=="d"&&g!==null&&g!="d"&&u-s[g]<60*E&&(f="internal"),x(e)&&(sessionStorage.getItem("statcounter_session")&&u-parseInt(sessionStorage.getItem("statcounter_session"),10)<1800&&(f="internal"),sessionStorage.setItem("statcounter_session",u)),x(e)||l=="r"&&sessionStorage.getItem("statcounter_exit_domain")==f&&(f="internal"),f=="internal")g!==null&&(a.rcat=le(g),a.rdom!==void 0&&delete a.rdom,a.rdomo=g,a.rdomg=u-s[g],s[g]=u);else{var w=!1;f in s?(f==g&&a.rdom!==void 0&&(a.rdomo=a.rdom,delete a.rdom),a.rdomg=u-s[f],u-s[f]<1800&&(w=!0)):a.rdomg="new",a.bb===void 0&&!w&&(sessionStorage.setItem("statcounter_bounce","1"),a.bb=1),c!==null&&(!(f in s)||f!=c)&&(a.rcatg=u-s[c]),s[f]=u}try{localStorage.setItem("sc_medium_source",JSON.stringify(s))}catch(N){x(e)&&(a={})}}catch(N){x(e)&&(a={})}for(var y in a)r[y]=a[y];if(a.rdom!==void 0)var T=!0;else var T=!1;var B=o.update_cookie(e,u,T);if(B.session_incremented){var Y=S("record_"+e);Y&&!Y.match(/(^test$|wsdev$|^dev[0-9]*)/)&&(i=!0,C("sc_project_time_difference_"+e,!1))}o._session_increment_calculated[e]=!0,r.jg=B.jg,r.rr=B.rr,B.u1!==void 0&&(n.u1=B.u1)}if(Object.prototype.toString.call(o._pending_tags)==="[object Array]"){var P=o._pending_tags.length;if(P>=1){var _=Mt(o._pending_tags[0]);for(var y in _)r[y]=_[y]}}o._pending_tags={},et(e,t,i,n,r),Ee=Z(),Ie(e)},et=function(e,t,r,n,i){n.java=1,n.security=o._security_codes[e],n.sc_snum=U,n.sess=o.version();var a=G;if(t=="text")a+="text.php?";else{var f="t.php";De(e)&&(f="t_static.php",a="https://1ctest.statcounter.com/"),Je(e)&&(f="counter_test.php",a="https://1ctest.statcounter.com/"),a+=f+"?"}e!==999?a+="sc_project="+e:window.usr&&(a+="usr="+window.usr);for(var l in n)a+="&"+l+"="+n[l];i.resolution=xt(),i.h=It(),i.camefrom=Ee.substring(0,600),i.u=Z(),i.t=Oe(),t=="invisible"?i.invisible="1":t=="text"&&(i.text=window.sc_text);var u="";for(var l in i)u+="&"+l+"="+i[l];if(t=="invisible"){var s=!1;m!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage"in window&&(s=!0);var g=!1;if(s)try{var c=sessionStorage.getItem("statcounter_pending");if(c)try{var h=JSON.parse(c)}catch(D){var h={}}else var h={};h[e]===void 0&&(h[e]={});var I=new Date().getTime();for(h[e][I]=u;;){if(c=JSON.stringify(h),c=="{}"){sessionStorage.removeItem("statcounter_pending");break}var d=c.split(/:.{20}/).length-1;if(d<20){var O=!0;try{sessionStorage.setItem("statcounter_pending",c)}catch(D){if(!D.name||D.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")throw D;O=!1}if(O)break}var E=!1,w=!1,y=!1;for(var T in h)for(var B in h[T]){var Y=/jg=(\d+)/.exec(h[T][B]);if(Y!==null)var P=parseInt(Y[1]);else var P=!1;(E===!1||P!==!1&&P<E)&&(P!==!1&&(E=P),w=T,y=B)}if(y===!1)break;delete h[w][y],JSON.stringify(h[w])=="{}"&&delete h[w]}for(var _ in h[e])(function(D,L){var ge=h[L][D];function ft(){h[L]!==void 0&&(delete h[L][D],JSON.stringify(h[L])=="{}"&&delete h[L]);var ot=JSON.stringify(h);ot=="{}"?sessionStorage.removeItem("statcounter_pending"):sessionStorage.setItem("statcounter_pending",ot)}var he=a+ge;if(D!=I?he+="&pg="+Math.round((I-D)/1e3):(g=!0,he+=Me(e)),r)oe(e,he,function(ot){ft(),se(e)});else if(navigator.sendBeacon)navigator.sendBeacon(he,""),ft();else{var Gt=new Image;Gt.onload=ft,Gt.src=he+"&sc_random="+Math.random()}se(e)})(parseInt(_,10),e)}catch(D){}if(!s||!g){var N=a+Me(e)+u;if(r)oe(e,N,function(D){se(e)});else if(navigator.sendBeacon)navigator.sendBeacon(N,"");else{var _t=new Image;_t.src=N+"&sc_random="+Math.random()}se(e)}}else{var N=a+Me(e)+u,F="sc_counter_"+e;if(U!=1&&(F+="_"+U),t=="text"){var Ft=function(L){if(L.text)document.getElementById(F).innerHTML=L.text;else if(L.counter_image){var ge=Be(L.counter_image);document.getElementById(F).innerHTML=ge}};r?(p('<span class="statcounter" id="'+F+'"></span>',e),oe(e,N,Ft)):(p('<span class="statcounter" id="'+F+'"></span>',e),Bt(e,N,Ft))}else{if(window.sc_remove_link)var Xt=' id="'+F+'"',at="",it="";else var Xt="",at='<a id="'+F+'" class="statcounter" href="https://www.'+st+'/" target="_blank">',it="</a>";r?(p('<span class="statcounter"'+Xt+">"+at+"Statcounter"+it+"</span>",e),oe(e,N,function(L){var ge=Be(L.counter_image);document.getElementById(F).innerHTML=ge})):(N+="&sc_random="+Math.random(),p('<span class="statcounter">'+at+Be(N.replace(/&/g,"&amp;"))+it+"</span>",e))}}ut++},ue=function(e){var t=function(){for(var r in o._security_codes)rt(parseInt(r,10),this);return!0};e.addEventListener?e.addEventListener("mousedown",t):e.attachEvent&&e.attachEvent("onmousedown",t)},Jt=function(){},tt=function(){if(window.sc_click_stat)var e=window.sc_click_stat;else var e=0;for(var t=new Date,r=t.getTime()+e;t.getTime()<r;)var t=new Date},rt=function(e,t,r){var n="https?|ftp|telnet|ssh|ssl|mailto|spotify|zoommtg|zoomus|slack|skype|callto|bitcoin|gtalk|tel",i="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com",a=new RegExp("\\.("+lt+")$","i"),f=new RegExp("^("+n+"):","i"),l=new RegExp("^("+i+")$","i"),u=location.host.replace(/^www\./i,""),s=u.split("."),g=s.pop(),c=s.pop();l.test(c)&&(g=c+"."+g,c=s.pop()),g=c+"."+g;var h="^https?://(.*)("+g+"|webcache.googleusercontent.com)",I=new RegExp(h,"i");if(t){var d=0;if(f.test(t)?I.test(t)?a.test(t)?d=1:(ze!==!1&&ze.test(t)||te==2)&&(d=2):d=2:r===!0&&(d=2),d!=0){var O=escape(t);if(O.length>0){if(!x(e)&&d==2&&Q!="disabled"&&f.test(t))try{sessionStorage.setItem("statcounter_exit_domain",O.split("/")[2].replace(/^www\./,""))}catch(B){}var E=G+"click.gif?sc_project="+e+"&security="+o._security_codes[e]+"&c="+O+"&m="+d+"&u="+Z()+"&t="+Oe()+"&sess="+o.version()+"&rand="+Math.random(),w=Math.round(new Date().getTime()/1e3),y=o.update_cookie(e,w);y.u1!==void 0&&(E+="&u1="+y.u1),E+="&jg="+y.jg,E+="&rr="+y.rr;var T=new Image;T.onload=Jt,T.src=E,o._add_recording_event&&o._add_recording_event(d==1?"download":d==2?"exit":"unknown",{link:unescape(O)}),tt()}}}},ve=function(e,t){if(t.src.match(He))var r=escape(t.src);else var r=escape("Google Adsense "+t.width+"x"+t.height);var n=G+"click.gif?sc_project="+e+"&security="+o._security_codes[e]+"&c="+r+"&m=2&u="+Z()+"&t="+Oe()+"&sess="+o.version()+"&rand="+Math.random(),i=Math.round(new Date().getTime()/1e3),a=o.update_cookie(e,i);if(a.u1!==void 0&&(n+="&u1="+a.u1),n+="&jg="+a.jg,n+="&rr="+a.rr,navigator.sendBeacon)navigator.sendBeacon(n,"");else{var f=new Image;f.src=n,tt()}o._add_recording_event&&o._add_recording_event("adsense",{link:unescape(r)})},Pt=function(e){var t=e.defaultView,r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,n=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(r||n)for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)i[a].id.substring(0,6)=="aswift"&&i[a].addEventListener("mouseenter",function(l){for(var u in o._security_codes)ve(parseInt(u,10),this)});else if(e.all&&typeof window.opera=="undefined")for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)(i[a].src.match(He)||i[a].id.match(ct))&&(i[a].onfocus=function(){for(var s in o._security_codes)ve(parseInt(s,10),this)});else if(typeof window.addEventListener!="undefined"){var f="unload";f="beforeunload",t&&(t.focus(),t.addEventListener("blur",function(){var l=e.activeElement;Te=l,dt=new Date().getTime()}),t.addEventListener(f,Ht,!1),t.addEventListener("mousemove",Ut,!0))}},Rt=function(){var e=navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return 10>=parseInt(e.substring(t+5,e.indexOf(".",t)),10);var r=e.indexOf("Trident/");if(r>0){var n=e.indexOf("rv:");return 11>=parseInt(e.substring(n+3,e.indexOf(".",n)),10)}return!1},Ut=function(e){typeof e.pageX=="number"?(W=e.pageX,K=e.pageY):typeof e.clientX=="number"&&(W=e.clientX,K=e.clientY,v.body&&(v.body.scrollLeft||v.body.scrollTop)?(W+=v.body.scrollLeft,K+=v.body.scrollTop):v.documentElement&&(v.documentElement.scrollLeft||v.documentElement.scrollTop)&&(W+=v.documentElement.scrollLeft,K+=v.documentElement.scrollTop))},zt=function(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t},$t=function(e){for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;return t},Ht=function(e){var t=v.getElementsByTagName("iframe");if(typeof W!="undefined")for(var r=0;r<t.length;r++){var n=$t(t[r]),i=zt(t[r]),a=parseInt(n,10)+parseInt(t[r].width,10)+15,f=parseInt(i,10)+parseInt(t[r].height,10)+10,l=W>n-10&&W<a,u=K>i-10&&K<f;if(u&&l&&(t[r].src.match(He)||t[r].id.match(ct)))for(var s in o._security_codes)ve(parseInt(s,10),t[r])}if(typeof Te!="undefined"&&Te.id.substring(0,6)=="aswift"){var g=new Date().getTime()-dt;if(g<300)for(var s in o._security_codes)ve(parseInt(s,10),Te)}},Vt=function(e){var t=!1;for(var r in o._security_codes){var n=parseInt(r,10);(de(n)||n==12718861||n==12537497)&&(t=!0)}if(t)try{var i=function(f){try{if(f.nodeType!==1)return;(f.tagName.toLowerCase()=="a"||f.tagName.toLowerCase()=="area"&&typeof f.hasAttribute=="function"&&f.hasAttribute("href"))&&ue(f),f.hasChildNodes()&&f.childNodes.forEach(i)}catch(l){}},a=new MutationObserver(function(f){try{f.forEach(function(l){return l.addedNodes.forEach(i)})}catch(l){}});a.observe(e.body,{subtree:!0,childList:!0})}catch(f){}},nt=function(e){for(var t=e.defaultView,r=function(){Pt(e)},n=e.getElementsByTagName("a"),i=e.getElementsByTagName("area"),a=0;a<n.length;a++){var f=n[a];ue(f)}for(var a=0;a<i.length;a++){var f=i[a];typeof f.hasAttribute=="function"&&f.hasAttribute("href")&&ue(f)}if(Vt(e),typeof window.addEventListener!="undefined")t.addEventListener("load",r,!1);else if(typeof e.addEventListener!="undefined")e.addEventListener("load",r,!1);else if(typeof window.attachEvent!="undefined")t.attachEvent("onload",r);else if(typeof window.onload=="function"){var l=onload;t.onload=function(){l(),r()}}else t.onload=r},er=p,tr=V,rr=x,nr=pt,ar=bt,ir=Ge,fr=Oe,or=Z,sr=xt,lr=It,ur=Me,vr=St,gr=Et,hr=Tt,cr=Ot,dr=Mt,wr=Nt,mr=ke,yr=Ne,pr=Lt,br=q,xr=At,Ir=ie,Sr=Le,Er=Ae,Tr=We,Or=Ye,Mr=Qe,Nr=Ct,Lr=fe,Ar=Ke,Cr=Ze,Br=qe,Dr=S,Jr=C,Pr=Bt,Rr=Ce,Ur=je,zr=oe,$r=se,Hr=Dt,Vr=_e,Fr=le,Xr=Be,Gr=j,kr=et,Wr=ue,Yr=Jt,Qr=tt,Kr=rt,Zr=ve,qr=Pt,jr=Rt,_r=Ut,en=zt,tn=$t,rn=Ht,nn=Vt,an=nt,o,U=1,ee=!1,Pe,X={};try{X=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}}),X._heatmap&&X._heatmap.match("^(dev[^.]+.)?statcounter$")&&(ee=!0,Pe="https://"+X._heatmap+".com")}catch(e){}if(typeof A!="undefined"&&A.record_pageview?(o=A,U=o._get_script_num()+1):(typeof A=="undefined"?(o=function(){},o._pending_tags={}):(A.start_recording?(o=A,A._pageview_tags_in&&(A=A._pageview_tags_in)):o=function(){},Object.prototype.toString.call(A)==="[object Array]"?o._pending_tags=A:o._pending_tags={}),o._session_increment_calculated={},o._returning_values={},o._security_codes={}),ee&&U!==1)return o.record_pageview||(o.record_pageview=function(){}),o;o.push=function(e){o._pending_tags=[e]};var we=!1;if(typeof performance!="undefined")try{we=Math.round(performance.now())}catch(e){we=!1}var z=!1,Re=!1;if(document.currentScript&&document.currentScript.src){try{z=document.currentScript}catch(e){var me=document.getElementsByTagName("script");if(me.length){for(var ye=me.length-1;ye>=0;ye--)if(me[ye].src.indexOf("/counter")!==-1){z=me[ye];break}}}if(z)try{new URL(z.src).host.replace(/www\.|dev.[0-9]+\./,"")==="statcounter.com"&&(Re=z.src)}catch(e){}}var te=-1,G="",st="statcounter.com",m="",Q="cookie",Ue=!1,lt="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";typeof window.sc_download_type=="string"&&(lt=window.sc_download_type);var ze=!1;typeof window.sc_exit_link_detect=="string"&&(ze=new RegExp(sc_exit_link_detect,"i")),window.sc_client_storage&&(Q=window.sc_client_storage),typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"&&(Q="disabled"),window.sc_click_stat&&(te=window.sc_click_stat),window.sc_local?G=sc_local:(te==-1&&(te=1),G="https://c."+st+"/"),window.sc_project&&(M=parseInt(window.sc_project,10),window.sc_security?o._security_codes[M]=sc_security:o._security_codes[M]===void 0&&(o._security_codes[M]=""));var kt=9e6,$=[30,60,120,180,360,720,1440,2880,10080],pe="ntd",$e="ntd",be="ntd";o.get_top_window=function(){for(var e=window;e.parent&&e.parent!==e;)try{var t=e.parent.document;e=e.parent}catch(r){break}return e};var b=o.get_top_window(),v=b.document;o.get_referrer=Ge;var ut=0;if(o.inject_script=function(e,t){if(!(e===void 0||!e.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/))){var r=document.createElement("script");r.type="text/javascript",r.async=!0;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n),t&&(r.onload=t,r.onreadystatechange=function(){this.readyState=="complete"&&t()}),r.src=e}},ee){var re=document.createElement("script");X._heatmap.startsWith("dev")||!X.hev?(re.setAttribute("src",Pe+"/js/heatmap-embedded.module.js"),re.setAttribute("type","module")):re.setAttribute("src",Pe+"/js/packed/heatmap-embedded-"+X.hev+".js"),re.sc=!0,document.head.appendChild(re)}var xe=[],R=256,vt=6,Wt=52,Yt=Math.pow(R,vt),gt=Math.pow(2,Wt),Qt=gt*2,k=R-1,ht,Kt=function(e,t){var r=[],n=Ne(ke(t?[e,q(xe)]:0 in arguments?e:Lt(),3),r),i=new Nt(r);return Ne(q(i.S),xe),ht=function(){for(var a=i.g(vt),f=Yt,l=0;a<gt;)a=(a+l)*R,f*=R,l=i.g(1);for(;a>=Qt;)a/=2,f/=2,l>>>=1;return(a+l)/f},n};Ne(Math.random(),xe);var H;typeof window.sc_cookie_domain=="undefined"?H=v.location.host.replace(/^www\./,""):H=window.sc_cookie_domain,H.substring(0,1)!="."&&(H="."+H),o.getSessionConfig=S,o._recording_initiated===void 0&&(o._recording_initiated={});var Ie=function(e){if(!ee&&!o._recording_initiated[e]){var t=S("record_"+e);if(!(!t||!t.match(/(^on$|off|test$|test_[a-z]{12}$|wsdev$|^dev[0-9]*)/))){try{if(v.location.pathname.startsWith("/wp-admin/"))return}catch(i){}var r=S("heatmap_"+e);if(!Rt()&&o._session_increment_calculated[e]&&S("sc_project_time_difference_"+e)){if(window!==b){if(b.sc_top_reg===void 0&&(b.sc_top_reg={}),b.sc_top_reg[e]===2)return;b.sc_top_reg[e]=2}if(o.start_recording)o.start_recording(e,t,Ue,r);else{var n="https://www.statcounter.com/counter/recorder.js";Re&&(n=Re.replace(/\/counter([^\/])/,"/recorder$1").replace("_xhtml",""),n=n.replace(/^http:\/\//,"https://")),t.indexOf("test")!=-1&&(n=n.replace(/\/recorder(.[^t])/,"/recorder_test$1")),t.indexOf("_")!=-1&&(n=n.replace(/\.js/,"_"+t.split("_")[1]+".js")),t.substring(0,3)=="dev"&&t!=="dev"?n=n.replace(/\/\/(www\.|secure\.)?/,"//"+t.split("_")[0].replace(/\//g,"").replace("test","").replace("off","").replace("wsdev","")+"."):n=n.replace(/\/\/(secure\.)?statcounter\./,"//www.statcounter."),o.inject_script(n,function(){_statcounter.start_recording(e,t,Ue,r)})}o._recording_initiated[e]=!0}}}};o.get_config=function(e,t){var r=!1;e.match(/sc_project=[0-9]+/)&&(r=parseInt(e.match(/sc_project=([0-9]+)/)[1],10));var n="t.php",i=G;if(De(r)&&(n="t_static.php",i="https://1ctest.statcounter.com/"),Je(r)&&(n="counter_test.php",i="https://1ctest.statcounter.com/"),e.substring(0,1)=="?")var a=i+n+e;else var a=e;a=a+"&get_config=true",r!==!1?Ce(a,t,function(f){C("sc_block_project_config_"+r,1)}):Ce(a,t)};var ne={google:null,bing:["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,baidu:["wd","word"],yandex:["text"],"ya.ru":["text"],haosou:["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],aol:["query","q"],duckduckgo:null,"ask.com":["q","QUERYT"],"mail.ru":["words"],sogou:["q","query"]},Se={fb:["facebook.com","fb.me"],pi:["pinterest.com"],tw:["twitter.com","t.co"],ln:["linkedin.com"],in:["instagram.com"],rd:["reddit.com"],tb:["tumblr.com"],st:["stumbleupon.com"],yt:["youtube.com"],gp:["plus.google.com","plus.url.google.com"]},Ee=escape(Ge());o.record_pageview=function(e,t){if(!ee){var r="invisible";if(typeof e=="undefined"){if(M===!1)if(window.usr)e=999;else{console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments"),p("Statcounter code invalid. Insert a fresh copy.",e);return}else e=M;window.sc_invisible&&window.sc_invisible==1?r="invisible":window.sc_text?r="text":r="image"}else if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_pageview with your statcounter project id");return}else if(typeof t=="string")o._security_codes[e]=t;else if(o._security_codes[e]===void 0){console.error("Please include the security code for project "+e+" as the second argument to record_pageview");return}o._security_codes[e]===void 0&&(o._security_codes[e]="");var n=0;(e==4135125||e==6169619||e==6222332||e==5106510||e==6311399||e==6320092||e==5291656||e==7324465||e==6640020||e==4629288||e==1480088||e==2447031)&&Math.floor(Math.random()*6)!=1&&(n=1);var i=!1,a=/Chrome/.test(navigator.userAgent),f=!1;try{if(navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&navigator.userAgentData.platform&&!V(r)&&(navigator.userAgentData.platform==="Windows"||a)){i="[pending]";var l=["platformVersion"];a&&l.push("model"),navigator.userAgentData.getHighEntropyValues(l).then(function(s){i=parseInt(s.platformVersion.split(".")[0]),a&&(f=s.model)}).catch(function(s){if(de(e))throw s})}}catch(s){if(de(e))throw s}if(n!=1)if(v.webkitVisibilityState=="prerender"){if(U==1){var s=function(){if(v.webkitVisibilityState!="prerender"){for(var g in o._security_codes)a&&f?j(parseInt(g,10),"invisible",{p:2,pv:i,dm:f}):j(parseInt(g,10),"invisible",{p:2,pv:i});v.removeEventListener("webkitvisibilitychange",s,!1)}},u=s;v.addEventListener("webkitvisibilitychange",s,!1)}et(e,r,!1,{},{p:1})}else i=="[pending]"?setTimeout(function(){a&&f?j(e,r,{p:0,pv:i,dm:f}):j(e,r,{p:0,pv:i})},1):j(e,r,{p:0})}};var ae={};o.record_click=function(e,t){if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_click with your statcounter project id");return}else if(o._security_codes[e]===void 0){console.error("Please set up security codes (e.g. by calling record_pageview) prior to record_click");return}rt(e,t,!0)};var He="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net",ct="^aswift_[0-9]+$",W,K,Te,dt;if(o.update_cookie=function(e,t,r){t===void 0&&(t=Math.round(new Date().getTime()/1e3));var n=S("sc_project_time_difference_"+e),i={},a="1.1.1.1.1.1.1.1.1",f="is_visitor_unique";try{var l=Ye(f,e)}catch(P){var l=!1;m=".ex"}var u=[],s=[];if(l&&l.substring(0,2)=="rx"){Ct(f,H);var g=l.substring(2);u=g.split("-");for(var c=!1,h=!1,I=0;I<u.length;I++){var d=u[I].split(".");if(parseInt(d[0],10)==e){c=!0;var O=parseInt(d[1],10);o._returning_values[e]=[];var E=2;d[2].length==32?(m="."+d[2],E=3):m=h;for(var w=0;w<$.length;w++){var y=parseInt(d[w+E],10);isNaN(y)&&(y=1),o._returning_values[e].push(y)}i.jg=t-O;for(var w=0;w<$.length;w++)r?o._returning_values[e][w]++:t>O+60*$[w]&&($[w]*60===n&&(i.session_incremented=!0),o._returning_values[e][w]++);i.rr=o._returning_values[e].join("."),s.push(""+e+"."+t+m+"."+o._returning_values[e].join("."))}else s.push(u[I]),I==0&&d[2].length==32&&m==""&&(m="."+d[2]);I==0&&(h=m)}c||(s.length==0&&m==""&&(m="."+ie()),s.push(""+e+"."+t+m+"."+a),o._returning_values[e]=a.split("."),i.jg="new",i.rr=a),s.sort(function(P,_){return parseInt(_.split(".")[1],10)-parseInt(P.split(".")[1],10)});for(var T=1;T<s.length;T++)s[T]=s[T].replace("."+s[0].split(".")[2]+".",".");var B=We(f,s,H,"rx",3,e)}else if(m!=".ex"){m="."+ie(),s=[""+e+"."+t+m+"."+a];var Y=We(f,s,H,"rx",3,e);Y?(o._returning_values[e]=a.split("."),i.jg="new",i.rr=a):m=".na"}return m!=""&&(i.u1=m.substring(1)),i},o.get_visitor_id=function(){if(m.length>1)return m.substring(1);var e=!1;try{e=Ye("is_visitor_unique")}catch(t){}return e&&e.substring(0,2)=="rx"&&e.split(".").length>2&&e.split(".")[2].length==32?e.split(".")[2]:"x-no-visitor"},o.get_session_num=function(e){var t=S("sc_project_time_difference_"+e),r=!1;if(!t&&pe!=="ntd"?r=pe:r=t,r!=!1&&o._session_increment_calculated[e]&&o._returning_values[e]!==void 0&&o._returning_values[e].length==$.length){for(var n=0;n<$.length;n++)if($[n]*60==parseInt(r))return o._returning_values[e][n]}var i="-"+pe+"-"+e+"-"+$e+"-"+be;if(t===null)return"x-no-session-num-99"+Math.round(1e3*Math.random())+i;if(o._session_increment_calculated[e]){if(o._returning_values[e].length!==$.length)return"x-no-session-num-97"+Math.round(1e3*Math.random())+i;if(t==!1)return"x-no-session-num-96"+Math.round(1e3*Math.random())+i}else return"x-no-session-num-98"+Math.round(1e3*Math.random())+i;return"x-no-session-num-95"+t+i},o.version=function(){return"21e3ea"},o.get_tab_session=function(){var e=!1;try{if(e=sessionStorage.getItem("statcounter_tab_session"),!e){e=ie(8);try{sessionStorage.setItem("statcounter_tab_session",e)}catch(t){e=!1}}}catch(t){e=!1}if(e===!1)session_tab_id="x-no-session-storage-"+Math.round(1e5*Math.random());else return e},o.record=function(e,t){if(t===void 0&&(t="on"),e===void 0||e==="on"||e==="dev")if(M!==!1)console.log("Turning on session recording for p"+M),e=M;else return;else if(parseInt(e,10)+""==e)e=parseInt(e,10);else return;C("record_"+e,t),S("sc_project_time_difference_"+e)||C("sc_project_time_difference_"+e,1800),Ie(e)},o._get_script_num=function(){return U},U==1){if(te>0){var J=[];for(J.push.apply(J,v.getElementsByTagName("frame")),J.push.apply(J,v.getElementsByTagName("iframe"));J.length;){var Zt=J.pop(0);try{var Ve=Zt.contentDocument;nt(Ve),J.push.apply(J,Ve.getElementsByTagName("frame")),J.push.apply(J,Ve.getElementsByTagName("iframe"))}catch(e){}}nt(v)}try{var wt=v.getElementsByTagName("title");if(wt.length){var mt=v.title,Fe=v.location.href.split("#")[0],qt=new MutationObserver(function(){var e=v.location.href.split("#")[0];if(v.title!=mt&&e!=Fe){for(var t in o._security_codes){var r=parseInt(t,10);(ae[r]===void 0||new Date().getTime()-ae[r]>1e3)&&setTimeout(function(n){(ae[n]===void 0||new Date().getTime()-ae[n]>1e3)&&(b.sc_top_reg!==void 0&&(b.sc_top_reg[n]=void 0),o.record_pageview(n))},200,r)}o._add_recording_event&&o._add_recording_event("history-pageload",{referrer:Fe,href:e}),mt=v.title,Fe=e}});qt.observe(wt[0],{childList:!0,attributes:!1,subtree:!1})}}catch(e){}}return o._generate_uuid=ie,o}catch(p){if(M!=!1&&de(M)){typeof encodeURIComponent!="function"&&(encodeURIComponent=function(V){return escape(V)});var Xe="";for(var yt in p)Xe+="property: "+yt+" value: ["+p[yt]+"]\n";Xe+="toString():  value: ["+p.toString()+"]\n";var jt=new Image;jt.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(v.location.protocol+"//"+v.location.host+v.location.pathname+v.location.search+v.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+M+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(Xe)}}}(_statcounter);_statcounter.record_pageview();