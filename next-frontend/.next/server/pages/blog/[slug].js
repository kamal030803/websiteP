"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 4052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-sanity"
var external_next_sanity_ = __webpack_require__(5879);
// EXTERNAL MODULE: external "react-portable-text"
var external_react_portable_text_ = __webpack_require__(9089);
var external_react_portable_text_default = /*#__PURE__*/__webpack_require__.n(external_react_portable_text_);
// EXTERNAL MODULE: ./components/NavBarr.js
var NavBarr = __webpack_require__(1890);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/blog/[slug].js








const Post = ({ blog , profile  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "IE=edge,chrome=1",
                        httpEquiv: "X-UA-Compatible"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: blog.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: `${blog.title} | Atom Template`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "en_US"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://yourwebsite.com/${router.query.slug}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: blog.metaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/assets/img/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#5540af"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Atom Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "//your-image-url.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@tailwindmade"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        crossOrigin: "anonymous",
                        href: "https://fonts.gstatic.com",
                        rel: "preconnect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        as: "style",
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap",
                        rel: "preload"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        crossOrigin: "anonymous",
                        href: "/assets/styles/main.min.css",
                        media: "screen",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        defer: true,
                        src: "https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        defer: true,
                        src: "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBarr/* default */.Z, {
                profile: profile
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container py-6 md:py-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl",
                                        children: blog.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center pt-5 md:pt-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/assets/img/blog-author.jpg",
                                                    width: 150,
                                                    height: 150,
                                                    className: "rounded-full border-2 border-grey-70 shadow",
                                                    alt: "author image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "pl-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block font-body text-xl font-bold text-grey-10",
                                                        children: "By Kamal Anand"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block pt-1 font-body text-xl font-bold text-grey-30",
                                                        children: "December 20, 2023"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "prose max-w-none pt-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_portable_text_default()), {
                                    content: blog.content,
                                    projectId: "4gbdzvi4",
                                    dataset: "production",
                                    serializers: {
                                        h1: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                style: {
                                                    color: "red"
                                                },
                                                ...props
                                            })
                                        ,
                                        li: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "special-list-item",
                                                children: children
                                            })
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-10 flex justify-between border-t border-lila py-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bx bx-left-arrow-alt text-2xl text-primary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5",
                                                children: "Previous Post"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5",
                                                children: "Next Post"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bx bx-right-arrow-alt text-2xl text-primary"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/blog-author.jpg",
                                            className: "rounded-full shadow",
                                            alt: "author image"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-0 text-center md:ml-10 md:w-5/6 md:text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "pt-10 font-body text-2xl font-bold text-secondary md:pt-0",
                                                children: "Kamal Anand"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9",
                                                children: "This is a sample blog. Will be updating soon!!"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center justify-center pt-5 md:justify-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-twitter text-2xl text-primary hover:text-yellow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-dribbble text-2xl text-primary hover:text-yellow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        className: "pl-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bxl-instagram text-2xl text-primary hover:text-yellow"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-primary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container flex flex-col justify-between py-6 sm:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center font-body text-white md:text-left",
                            children: "\xa9 Copyright 2023. All right reserved."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center pt-5 sm:justify-start sm:pt-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bx bxl-twitter text-2xl text-white hover:text-yellow"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bx bxl-dribbble text-2xl text-white hover:text-yellow"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bx bxl-linkedin text-2xl text-white hover:text-yellow"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bx bxl-instagram text-2xl text-white hover:text-yellow"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (Post);
const getServerSideProps = async (context)=>{
    const { slug  } = context.query;
    const client = (0,external_next_sanity_.createClient)({
        projectId: "4gbdzvi4",
        dataset: "production",
        useCdn: false
    });
    const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
    const blog = await client.fetch(query);
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    return {
        props: {
            blog,
            profile
        }
    };
};


/***/ }),

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9089:
/***/ ((module) => {

module.exports = require("react-portable-text");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,890], () => (__webpack_exec__(4052)));
module.exports = __webpack_exports__;

})();