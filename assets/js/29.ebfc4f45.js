(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{256:function(t,a,e){"use strict";e.r(a);var s=e(7),_=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("RESTful（Representational State Transfer）是一种 API 设计规范，用于 Web 数据接口的设计。")]),t._v(" "),e("p",[t._v("如果一个架构符合 REST 原则，就称之为 RESTful 架构。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("要理解 RESTful 架构，最好的方法就是去理解 Representational State Transfer 这个词组到底是什么意思，它的每一个词代表了什么涵义。")])])]),t._v(" "),e("p",[t._v('REST的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"。')]),t._v(" "),e("p",[e("strong",[t._v('所谓"资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。')])]),t._v(" "),e("p",[t._v("一般会使用一个 URI（Universal Resource Identifier，统一资源标志符）来指向它。")]),t._v(" "),e("blockquote",[e("p",[t._v("参考资料中的描述存在一些问题，当对一些问题产生疑惑时推荐通过谷歌或者 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),e("OutboundLink")],1),t._v(" 来查询。")]),t._v(" "),e("p",[t._v("原本 URI 包含 URL 和 URN，但是很遗憾 URN 使用率过低，导致目前几乎所有的 URI 都是 URL。")])]),t._v(" "),e("h2",{attrs:{id:"url-设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-设计","aria-hidden":"true"}},[t._v("#")]),t._v(" URL 设计")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("此处设计仅作为一个思路，部分实现起来还是有一定的困难，其实个人更推荐去学习 Github 的 API。")])]),t._v(" "),e("h3",{attrs:{id:"_1-动词-宾语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-动词-宾语","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 动词 + 宾语")]),t._v(" "),e("p",[t._v("RESTful 的核心思想就是，客户端发出的数据操作指令都是 “动词 + 宾语” 的结构。比如 "),e("code",[t._v("GET /articles")]),t._v(" 这个命令，"),e("code",[t._v("GET")]),t._v(" 是动词，"),e("code",[t._v("articles")]),t._v(" 是宾语。")]),t._v(" "),e("p",[t._v("动词通常为五种 HTTP 方法，对应 CRUD 操作：")]),t._v(" "),e("ul",[e("li",[t._v("GET：读取（READ）；")]),t._v(" "),e("li",[t._v("POST：新建（Create）；")]),t._v(" "),e("li",[t._v("PUT：更新（Update）；")]),t._v(" "),e("li",[t._v("PATCH：更新（Update），通常是部分更新；")]),t._v(" "),e("li",[t._v("DELETE：删除（Delete）。")])]),t._v(" "),e("h3",{attrs:{id:"_2-动词的覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-动词的覆盖","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 动词的覆盖")]),t._v(" "),e("p",[t._v("某些情况只能使用 "),e("code",[t._v("GET")]),t._v(" 和 "),e("code",[t._v("POST")]),t._v(" 方法。此时可以采用 "),e("code",[t._v("X-HTTP-Method-Override")]),t._v(" 来模拟操作。")]),t._v(" "),e("h3",{attrs:{id:"_3-宾语必须是名词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-宾语必须是名词","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 宾语必须是名词")]),t._v(" "),e("p",[t._v("宾语是 HTTP 动作的对象，它应该是名词。")]),t._v(" "),e("h3",{attrs:{id:"_4-复数-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-复数-url","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 复数 URL")]),t._v(" "),e("p",[t._v("既然 URL 是名词，那么应该使用复数，还是单数呢？")]),t._v(" "),e("p",[t._v("此处建议都使用复数 URL，如 "),e("code",[t._v("GET /articles/2")]),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"_5-避免多级-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-避免多级-url","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 避免多级 URL")]),t._v(" "),e("p",[t._v("常见的情况是，资源需要多级分类，因此很容易写出多级的 URL，比如获取某个作者的某一类文章。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缺乏语义及难以扩展")]),t._v("\nGET /authors/12/categories/2\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更好的做法是，除了第一级，其他级别都用查询字符串表达")]),t._v("\nGET /authors/12?categories"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询已发布的文章")]),t._v("\nGET /articles?published"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),e("h2",{attrs:{id:"状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),e("h3",{attrs:{id:"_1-状态码必须精确"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态码必须精确","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 状态码必须精确")]),t._v(" "),e("p",[t._v("客户端的每一次请求，服务器都必须给出回应。回应包括 HTTP 状态码和数据两部分。")]),t._v(" "),e("p",[t._v("HTTP 状态码就是一个三位数，分成五个类别：")]),t._v(" "),e("ul",[e("li",[t._v("1xx：相关信息；")]),t._v(" "),e("li",[t._v("2xx：操作成功；")]),t._v(" "),e("li",[t._v("3xx：重定向；")]),t._v(" "),e("li",[t._v("4xx：客户端错误；")]),t._v(" "),e("li",[t._v("5xx：服务器错误。")])]),t._v(" "),e("p",[t._v("这五大类共包含 100 多种状态码，覆盖了绝大部分可能遇到的情况。每一种状态码都是标准的（或约定的）解释，客户端只需要查看状态码，就可以判断发生了什么情况，所以服务器应该返回尽可能精确的状态码。")]),t._v(" "),e("p",[t._v("API 不需要 "),e("code",[t._v("1xx")]),t._v(" 状态码。")]),t._v(" "),e("h3",{attrs:{id:"_2-2xx-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2xx-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),e("code",[t._v("2xx")]),t._v(" 状态码")]),t._v(" "),e("p",[e("code",[t._v("200")]),t._v(" 状态码表示操作成功，但是不同的方法可以返回更精确的状态码：")]),t._v(" "),e("ul",[e("li",[t._v("GET：200 OK；")]),t._v(" "),e("li",[t._v("POST：201 Created；")]),t._v(" "),e("li",[t._v("PUT：200 OK；")]),t._v(" "),e("li",[t._v("PATCH：200 OK；")]),t._v(" "),e("li",[t._v("DELETE：204 No Content;")])]),t._v(" "),e("p",[t._v("上面代码中，"),e("code",[t._v("POST")]),t._v(" 返回 "),e("code",[t._v("201")]),t._v(" 状态码，表示已经生成了新的资源；"),e("code",[t._v("DELETE")]),t._v(" 状态码返回 "),e("code",[t._v("204")]),t._v(" 状态码，表示资源已经不存在。")]),t._v(" "),e("p",[t._v("此外，"),e("code",[t._v("202 Accepted")]),t._v(" 状态码表示服务器已经收到请求，但还未进行处理，会在未来再处理，通常用于异步操作。举个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("202 Accepted")])]),t._v('\n\n{\n  "task": {\n    "href": "/api/company/job-management/jobs/2130040",\n    "id": "2130040"\n  }\n}\n')])])]),e("h3",{attrs:{id:"_3-3xx-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3xx-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. "),e("code",[t._v("3xx")]),t._v(" 状态码")]),t._v(" "),e("p",[t._v("API 用不到 "),e("code",[t._v("301")]),t._v(" 状态码（永久重定向）和 "),e("code",[t._v("302")]),t._v(" 状态码（暂时重定向，"),e("code",[t._v("307")]),t._v(" 也是这个含义），因为它们可以由应用级别返回，浏览器会直接跳转，API 几倍可以不考虑这两种情况。")]),t._v(" "),e("p",[t._v("API 用到的 "),e("code",[t._v("3xx")]),t._v(" 状态码，主要是 "),e("code",[t._v("303 See Other")]),t._v("，表示参考另一个 URL。它与 "),e("code",[t._v("302")]),t._v(" 和 "),e("code",[t._v("307")]),t._v(" 的含义一样，也是 “暂时重定向”，区别在于 "),e("code",[t._v("302")]),t._v(" 和 "),e("code",[t._v("307")]),t._v(" 用于 "),e("code",[t._v("GET")]),t._v(" 请求，而 "),e("code",[t._v("303")]),t._v(" 用于 "),e("code",[t._v("POST")]),t._v("、"),e("code",[t._v("PUT")]),t._v(" 和 "),e("code",[t._v("DELETE")]),t._v(" 请求。收到 "),e("code",[t._v("303")]),t._v(" 之后，浏览器不会自动跳转，而会让用户决定下一步该怎么办。举个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("303 See Other")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" /api/orders/12345\n")])])]),e("h3",{attrs:{id:"_4-4xx-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4xx-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. "),e("code",[t._v("4xx")]),t._v(" 状态码")]),t._v(" "),e("p",[e("code",[t._v("4xx")]),t._v(" 状态码表示客户端错误，主要有下面几种：")]),t._v(" "),e("ul",[e("li",[t._v("400："),e("code",[t._v("Bad Requset")]),t._v(" 服务器不理解客户端的请求，未做任何处理；")]),t._v(" "),e("li",[t._v("401："),e("code",[t._v("Unauthorized")]),t._v(" 用户为提供身份验证凭据，或者没有通过身份验证；")]),t._v(" "),e("li",[t._v("403："),e("code",[t._v("Forbidden")]),t._v(" 用户通过了验证，但是不具有访问资源所需的权限；")]),t._v(" "),e("li",[t._v("404："),e("code",[t._v("Not Found")]),t._v(" 请求的资源不存在，或者不可用；")]),t._v(" "),e("li",[t._v("405：用户已经通过了身份验证，但是所用的 HTTP 方法不在他的权限之内；")]),t._v(" "),e("li",[t._v("410："),e("code",[t._v("Gone")]),t._v(" 所请求的资源已经从这个地址转移，不再可用；")]),t._v(" "),e("li",[t._v("415："),e("code",[t._v("Unsupported Media Type")]),t._v(" 客户端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式；")]),t._v(" "),e("li",[t._v("422："),e("code",[t._v("Unprocessable Entity")]),t._v(" 客户端上传的附件无法处理，导致请求失败；")]),t._v(" "),e("li",[t._v("429："),e("code",[t._v("Too Many Requests")]),t._v(" 客户端的请求次数超过限额。")])]),t._v(" "),e("h3",{attrs:{id:"_5-5xx-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-5xx-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. "),e("code",[t._v("5xx")]),t._v(" 状态码")]),t._v(" "),e("p",[e("code",[t._v("5xx")]),t._v(" 状态码表示服务端错误。一般来说，API 不会向用户透露服务器的详细信息，所以仅需要两个状态码就足够了：")]),t._v(" "),e("ul",[e("li",[t._v("500："),e("code",[t._v("Internal Server Error")]),t._v(" 客户端请求有效，服务器处理时发生了意外；")]),t._v(" "),e("li",[t._v("503："),e("code",[t._v("Service Unavailable")]),t._v(" 服务器无法处理请求，一般用于网站维护状态。")])]),t._v(" "),e("h2",{attrs:{id:"服务器响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器响应")]),t._v(" "),e("h3",{attrs:{id:"_1-不要返回纯文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-不要返回纯文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 不要返回纯文本")]),t._v(" "),e("p",[t._v("API 返回的数据格式，不应该是纯文本，而应该是一个 JSON 对象，因为这样才能返回标准的结构化数据。所以服务器响应的 HTTP 头的 "),e("code",[t._v("Content-Type")]),t._v(" 属性要设为 "),e("code",[t._v("application/json")]),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"_2-发生错误时，不要返回-200-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-发生错误时，不要返回-200-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 发生错误时，不要返回 200 状态码")]),t._v(" "),e("p",[t._v("有一种不恰当的做法是，即使发生错误，也返回 200 状态码，把错误信息放在数据体中，例如：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json"),e("span",{pre:!0,attrs:{class:"token application/json"}},[t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failure"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Expected at least two items in list."')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("上面的代码中，解析数据体以后，才能得知操作失败。")]),t._v(" "),e("p",[t._v("这样的做法实际上取消了状态码，这是完全不可取的。正确的做法是，状态码反应发生的错误，具体的错误信息放在数据体里面返回，举个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("400 Bad Request")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json"),e("span",{pre:!0,attrs:{class:"token application/json"}},[t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid payoad."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"detail"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"surname"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This field is required."')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解RESTful架构"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful API 最佳实践"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=_.exports}}]);