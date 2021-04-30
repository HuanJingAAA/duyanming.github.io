(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(115)),s=(t(116),{id:"12_3_nginx",title:"12.3 nginx\u914d\u7f6e",sidebar_label:"2.3 nginx\u914d\u7f6e"}),a={unversionedId:"12_3_nginx",id:"12_3_nginx",isDocsHomePage:!1,title:"12.3 nginx\u914d\u7f6e",description:"1\u3001\u5f00\u653e\u7aef\u53e3",source:"@site/docs\\12.3nginx.mdx",slug:"/12_3_nginx",permalink:"/docs/12_3_nginx",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/12.3nginx.mdx",version:"current",sidebar_label:"2.3 nginx\u914d\u7f6e",sidebar:"docs",previous:{title:"12.2 Centos7\u7aef\u53e3\u8bbe\u7f6e",permalink:"/docs/12_2_introduce"},next:{title:"13.1 \u597d\u6587\u7ae0\u96c6\u5408",permalink:"/docs/13_1_introduce"}},c=[{value:"1\u3001\u5f00\u653e\u7aef\u53e3",id:"1\u3001\u5f00\u653e\u7aef\u53e3",children:[]},{value:"2\u3001nginx\u6587\u4ef6\u7ed3\u6784",id:"2\u3001nginx\u6587\u4ef6\u7ed3\u6784",children:[]}],l={toc:c};function p(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"1\u3001\u5f00\u653e\u7aef\u53e3"},"1\u3001\u5f00\u653e\u7aef\u53e3"),Object(i.b)("p",null,"Nginx\u529f\u80fd\u4e30\u5bcc\uff0c\u53ef\u4f5c\u4e3aHTTP\u670d\u52a1\u5668\uff0c\u4e5f\u53ef\u4f5c\u4e3a\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u90ae\u4ef6\u670d\u52a1\u5668\u3002\u652f\u6301FastCGI\u3001SSL\u3001Virtual Host\u3001URL Rewrite\u3001Gzip\u7b49\u529f\u80fd\u3002\u5e76\u4e14\u652f\u6301\u5f88\u591a\u7b2c\u4e09\u65b9\u7684\u6a21\u5757\u6269\u5c55\u3002"),Object(i.b)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff1anginx.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"\n#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    server {\n        listen       80;\n        server_name  localhost;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n\n        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n        #\n        #location ~ \\.php$ {\n        #    proxy_pass   http://127.0.0.1;\n        #}\n\n        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n        #\n        #location ~ \\.php$ {\n        #    root           html;\n        #    fastcgi_pass   127.0.0.1:9000;\n        #    fastcgi_index  index.php;\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n        #    include        fastcgi_params;\n        #}\n\n        # deny access to .htaccess files, if Apache's document root\n        # concurs with nginx's one\n        #\n        #location ~ /\\.ht {\n        #    deny  all;\n        #}\n    }\n\n\n    # another virtual host using mix of IP-, name-, and port-based configuration\n    #\n    #server {\n    #    listen       8000;\n    #    listen       somename:8080;\n    #    server_name  somename  alias  another.alias;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n\n    # HTTPS server\n    #\n    #server {\n    #    listen       443 ssl;\n    #    server_name  localhost;\n\n    #    ssl_certificate      cert.pem;\n    #    ssl_certificate_key  cert.key;\n\n    #    ssl_session_cache    shared:SSL:1m;\n    #    ssl_session_timeout  5m;\n\n    #    ssl_ciphers  HIGH:!aNULL:!MD5;\n    #    ssl_prefer_server_ciphers  on;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n}\n")),Object(i.b)("h3",{id:"2\u3001nginx\u6587\u4ef6\u7ed3\u6784"},"2\u3001nginx\u6587\u4ef6\u7ed3\u6784"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"...              #\u5168\u5c40\u5757\n\nevents {         #events\u5757\n   ...\n}\n\nhttp      #http\u5757\n{\n    ...   #http\u5168\u5c40\u5757\n    server        #server\u5757\n    { \n        ...       #server\u5168\u5c40\u5757\n        location [PATTERN]   #location\u5757\n        {\n            ...\n        }\n        location [PATTERN] \n        {\n            ...\n        }\n    }\n    server\n    {\n      ...\n    }\n    ...     #http\u5168\u5c40\u5757\n}\n")),Object(i.b)("p",null,"1\u3001\u5168\u5c40\u5757\uff1a\u914d\u7f6e\u5f71\u54cdnginx\u5168\u5c40\u7684\u6307\u4ee4\u3002\u4e00\u822c\u6709\u8fd0\u884cnginx\u670d\u52a1\u5668\u7684\u7528\u6237\u7ec4\uff0cnginx\u8fdb\u7a0bpid\u5b58\u653e\u8def\u5f84\uff0c\u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u914d\u7f6e\u6587\u4ef6\u5f15\u5165\uff0c\u5141\u8bb8\u751f\u6210worker process\u6570\u7b49\u3002"),Object(i.b)("p",null,"2\u3001events\u5757\uff1a\u914d\u7f6e\u5f71\u54cdnginx\u670d\u52a1\u5668\u6216\u4e0e\u7528\u6237\u7684\u7f51\u7edc\u8fde\u63a5\u3002\u6709\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9009\u53d6\u54ea\u79cd\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u5904\u7406\u8fde\u63a5\u8bf7\u6c42\uff0c\u662f\u5426\u5141\u8bb8\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u8def\u8fde\u63a5\uff0c\u5f00\u542f\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\u5e8f\u5217\u5316\u7b49\u3002"),Object(i.b)("p",null,"3\u3001http\u5757\uff1a\u53ef\u4ee5\u5d4c\u5957\u591a\u4e2aserver\uff0c\u914d\u7f6e\u4ee3\u7406\uff0c\u7f13\u5b58\uff0c\u65e5\u5fd7\u5b9a\u4e49\u7b49\u7edd\u5927\u591a\u6570\u529f\u80fd\u548c\u7b2c\u4e09\u65b9\u6a21\u5757\u7684\u914d\u7f6e\u3002\u5982\u6587\u4ef6\u5f15\u5165\uff0cmime-type\u5b9a\u4e49\uff0c\u65e5\u5fd7\u81ea\u5b9a\u4e49\uff0c\u662f\u5426\u4f7f\u7528sendfile\u4f20\u8f93\u6587\u4ef6\uff0c\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u8fde\u63a5\u8bf7\u6c42\u6570\u7b49\u3002"),Object(i.b)("p",null,"4\u3001server\u5757\uff1a\u914d\u7f6e\u865a\u62df\u4e3b\u673a\u7684\u76f8\u5173\u53c2\u6570\uff0c\u4e00\u4e2ahttp\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2aserver\u3002"),Object(i.b)("p",null,"5\u3001location\u5757\uff1a\u914d\u7f6e\u8bf7\u6c42\u7684\u8def\u7531\uff0c\u4ee5\u53ca\u5404\u79cd\u9875\u9762\u7684\u5904\u7406\u60c5\u51b5\u3002"),Object(i.b)("p",null,"\u4e0b\u9762\u7ed9\u5927\u5bb6\u4e0a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u4f5c\u4e3a\u7406\u89e3\uff0c\u540c\u65f6\u4e5f\u914d\u5165\u6211\u642d\u5efa\u7684\u4e00\u53f0\u6d4b\u8bd5\u673a\u4e2d\uff0c\u7ed9\u5927\u5bb6\u793a\u4f8b\u3002 "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"########### \u6bcf\u4e2a\u6307\u4ee4\u5fc5\u987b\u6709\u5206\u53f7\u7ed3\u675f\u3002#################\n#user administrator administrators;  #\u914d\u7f6e\u7528\u6237\u6216\u8005\u7ec4\uff0c\u9ed8\u8ba4\u4e3anobody nobody\u3002\n#worker_processes 2;  #\u5141\u8bb8\u751f\u6210\u7684\u8fdb\u7a0b\u6570\uff0c\u9ed8\u8ba4\u4e3a1\n#pid /nginx/pid/nginx.pid;   #\u6307\u5b9anginx\u8fdb\u7a0b\u8fd0\u884c\u6587\u4ef6\u5b58\u653e\u5730\u5740\nerror_log log/error.log debug;  #\u5236\u5b9a\u65e5\u5fd7\u8def\u5f84\uff0c\u7ea7\u522b\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u53ef\u4ee5\u653e\u5165\u5168\u5c40\u5757\uff0chttp\u5757\uff0cserver\u5757\uff0c\u7ea7\u522b\u4ee5\u6b64\u4e3a\uff1adebug|info|notice|warn|error|crit|alert|emerg\nevents {\n    accept_mutex on;   #\u8bbe\u7f6e\u7f51\u8def\u8fde\u63a5\u5e8f\u5217\u5316\uff0c\u9632\u6b62\u60ca\u7fa4\u73b0\u8c61\u53d1\u751f\uff0c\u9ed8\u8ba4\u4e3aon\n    multi_accept on;  #\u8bbe\u7f6e\u4e00\u4e2a\u8fdb\u7a0b\u662f\u5426\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u4e3aoff\n    #use epoll;      #\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff0cselect|poll|kqueue|epoll|resig|/dev/poll|eventport\n    worker_connections  1024;    #\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a512\n}\nhttp {\n    include       mime.types;   #\u6587\u4ef6\u6269\u5c55\u540d\u4e0e\u6587\u4ef6\u7c7b\u578b\u6620\u5c04\u8868\n    default_type  application/octet-stream; #\u9ed8\u8ba4\u6587\u4ef6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3atext/plain\n    #access_log off; #\u53d6\u6d88\u670d\u52a1\u65e5\u5fd7    \n    log_format myFormat '$remote_addr\u2013$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #\u81ea\u5b9a\u4e49\u683c\u5f0f\n    access_log log/access.log myFormat;  #combined\u4e3a\u65e5\u5fd7\u683c\u5f0f\u7684\u9ed8\u8ba4\u503c\n    sendfile on;   #\u5141\u8bb8sendfile\u65b9\u5f0f\u4f20\u8f93\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3aoff\uff0c\u53ef\u4ee5\u5728http\u5757\uff0cserver\u5757\uff0clocation\u5757\u3002\n    sendfile_max_chunk 100k;  #\u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6b21\u8c03\u7528\u4f20\u8f93\u6570\u91cf\u4e0d\u80fd\u5927\u4e8e\u8bbe\u5b9a\u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u4e0d\u8bbe\u4e0a\u9650\u3002\n    keepalive_timeout 65;  #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a75s\uff0c\u53ef\u4ee5\u5728http\uff0cserver\uff0clocation\u5757\u3002\n\n    upstream mysvr {   \n      server 127.0.0.1:7878;\n      server 192.168.10.121:3333 backup;  #\u70ed\u5907\n    }\n    error_page 404 https://www.baidu.com; #\u9519\u8bef\u9875\n    server {\n        keepalive_requests 120; #\u5355\u8fde\u63a5\u8bf7\u6c42\u4e0a\u9650\u6b21\u6570\u3002\n        listen       4545;   #\u76d1\u542c\u7aef\u53e3\n        server_name  127.0.0.1;   #\u76d1\u542c\u5730\u5740       \n        location  ~*^.+$ {       #\u8bf7\u6c42\u7684url\u8fc7\u6ee4\uff0c\u6b63\u5219\u5339\u914d\uff0c~\u4e3a\u533a\u5206\u5927\u5c0f\u5199\uff0c~*\u4e3a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\n           #root path;  #\u6839\u76ee\u5f55\n           #index vv.txt;  #\u8bbe\u7f6e\u9ed8\u8ba4\u9875\n           proxy_pass  http://mysvr;  #\u8bf7\u6c42\u8f6c\u5411mysvr \u5b9a\u4e49\u7684\u670d\u52a1\u5668\u5217\u8868\n           deny 127.0.0.1;  #\u62d2\u7edd\u7684ip\n           allow 172.18.5.54; #\u5141\u8bb8\u7684ip           \n        } \n    }\n}\n")),Object(i.b)("p",null,"\u4e0a\u9762\u662fnginx\u7684\u57fa\u672c\u914d\u7f6e\uff0c\u9700\u8981\u6ce8\u610f\u7684\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"),Object(i.b)("p",null,"1\u30011.$remote_addr \u4e0e$http_x_forwarded_for \u7528\u4ee5\u8bb0\u5f55\u5ba2\u6237\u7aef\u7684ip\u5730\u5740\uff1b 2.$remote_user \uff1a\u7528\u6765\u8bb0\u5f55\u5ba2\u6237\u7aef\u7528\u6237\u540d\u79f0\uff1b 3.$time_local \uff1a \u7528\u6765\u8bb0\u5f55\u8bbf\u95ee\u65f6\u95f4\u4e0e\u65f6\u533a\uff1b4.$request \uff1a \u7528\u6765\u8bb0\u5f55\u8bf7\u6c42\u7684url\u4e0ehttp\u534f\u8bae\uff1b"),Object(i.b)("p",null,"  5.$status \uff1a \u7528\u6765\u8bb0\u5f55\u8bf7\u6c42\u72b6\u6001\uff1b\u6210\u529f\u662f200\uff0c 6.$body_bytes_s ent \uff1a\u8bb0\u5f55\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u6587\u4ef6\u4e3b\u4f53\u5185\u5bb9\u5927\u5c0f\uff1b7.$http_referer \uff1a\u7528\u6765\u8bb0\u5f55\u4ece\u90a3\u4e2a\u9875\u9762\u94fe\u63a5\u8bbf\u95ee\u8fc7\u6765\u7684\uff1b 8.$http_user_agent \uff1a\u8bb0\u5f55\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u7684\u76f8\u5173\u4fe1\u606f\uff1b"),Object(i.b)("p",null,"2\u3001\u60ca\u7fa4\u73b0\u8c61\uff1a\u4e00\u4e2a\u7f51\u8def\u8fde\u63a5\u5230\u6765\uff0c\u591a\u4e2a\u7761\u7720\u7684\u8fdb\u7a0b\u88ab\u540c\u4e8b\u53eb\u9192\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u8fdb\u7a0b\u80fd\u83b7\u5f97\u94fe\u63a5\uff0c\u8fd9\u6837\u4f1a\u5f71\u54cd\u7cfb\u7edf\u6027\u80fd\u3002"),Object(i.b)("p",null,"3\u3001\u6bcf\u4e2a\u6307\u4ee4\u5fc5\u987b\u6709\u5206\u53f7\u7ed3\u675f\u3002"),Object(i.b)("p",null,"\u6587\u7ae0\u6765\u6e90\uff1a",Object(i.b)("a",{parentName:"p",href:"https://www.cnblogs.com/knowledgesea/p/5175711.html"},"https://www.cnblogs.com/knowledgesea/p/5175711.html")))}p.isMDXComponent=!0},115:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=o.a.createContext({}),p=function(n){var e=o.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(g,a(a({ref:e},l),{},{components:t})):o.a.createElement(g,a({ref:e},l))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},116:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return s}));var r=t(21),o=t(117);function i(){const{siteConfig:{baseUrl:n="/",url:e}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(n,e,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(r)return e+t;const s=t.startsWith(e)?t:e+t.replace(/^\//,"");return i?n+s:s}(e,n,t,r)}}function s(n,e={}){const{withBaseUrl:t}=i();return t(n,e)}},117:function(n,e,t){"use strict";function r(n){return!0===/^(\w*:|\/\/)/.test(n)}function o(n){return void 0!==n&&!r(n)}t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o}))}}]);