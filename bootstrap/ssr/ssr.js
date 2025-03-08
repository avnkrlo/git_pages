import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { mergeProps, useSSRContext, createSSRApp, h as h$1 } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900" }, _attrs))}><div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 items-center justify-between"><div class="flex-1 md:flex md:items-center md:gap-12"><a class="block text-teal-600 dark:text-teal-300" href="#"><span class="sr-only">Home</span><svg class="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor"></path></svg></a></div><div class="md:flex md:items-center md:gap-12"><nav aria-label="Global" class="md:block"><ul class="flex items-center gap-6 text-sm"><li><a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#"> Experience </a></li><li><a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#"> Projects </a></li><li><a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#"> Hobbies </a></li><li><a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#"> About Me </a></li></ul></nav></div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><footer class="bg-white dark:bg-gray-900"><div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"><div class="md:flex md:justify-between"><div class="mb-6 md:mb-0"><a href="https://flowbite.com/" class="flex items-center"><img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span></a></div><div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4"><a href="https://flowbite.com/" class="hover:underline">Flowbite</a></li><li><a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4"><a href="https://github.com/themesberg/flowbite" class="hover:underline">Github</a></li><li><a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4"><a href="#" class="hover:underline">Privacy Policy</a></li><li><a href="#" class="hover:underline">Terms &amp; Conditions</a></li></ul></div></div></div><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"><div class="sm:flex sm:items-center sm:justify-between"><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved. </span><div class="flex mt-4 sm:justify-center sm:mt-0"><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"><path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path></svg><span class="sr-only">Facebook page</span></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg><span class="sr-only">Discord community</span></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"><path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path></svg><span class="sr-only">Twitter page</span></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg><span class="sr-only">GitHub account</span></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path></svg><span class="sr-only">Dribbble account</span></a></div></div></div></footer>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function r(r4, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(r4, u(e2.key), e2);
  }
}
function t(t2, n2, e2) {
  return n2 && r(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(r4) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var e2 in n2) ({}).hasOwnProperty.call(n2, e2) && (r4[e2] = n2[e2]);
    }
    return r4;
  }, n.apply(null, arguments);
}
function e(r4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r5) {
    return r5.__proto__ || Object.getPrototypeOf(r5);
  }, e(r4);
}
function o() {
  try {
    var r4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (r5) {
  }
  return (o = function() {
    return !!r4;
  })();
}
function i(r4, t2) {
  return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r5, t3) {
    return r5.__proto__ = t3, r5;
  }, i(r4, t2);
}
function u(r4) {
  var t2 = function(r5) {
    if ("object" != typeof r5 || !r5) return r5;
    var t3 = r5[Symbol.toPrimitive];
    if (void 0 !== t3) {
      var n2 = t3.call(r5, "string");
      if ("object" != typeof n2) return n2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r5);
  }(r4);
  return "symbol" == typeof t2 ? t2 : t2 + "";
}
function f(r4) {
  var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(r5) {
    if (null === r5 || !function(r6) {
      try {
        return -1 !== Function.toString.call(r6).indexOf("[native code]");
      } catch (t3) {
        return "function" == typeof r6;
      }
    }(r5)) return r5;
    if ("function" != typeof r5) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t2) {
      if (t2.has(r5)) return t2.get(r5);
      t2.set(r5, n2);
    }
    function n2() {
      return function(r6, t3, n3) {
        if (o()) return Reflect.construct.apply(null, arguments);
        var e2 = [null];
        e2.push.apply(e2, t3);
        var u2 = new (r6.bind.apply(r6, e2))();
        return n3 && i(u2, n3.prototype), u2;
      }(r5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(r5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), i(n2, r5);
  }, f(r4);
}
var a = String.prototype.replace, c = /%20/g, l = "RFC3986", s = { default: l, formatters: { RFC1738: function(r4) {
  return a.call(r4, c, "+");
}, RFC3986: function(r4) {
  return String(r4);
} }, RFC1738: "RFC1738" }, v = Object.prototype.hasOwnProperty, p = Array.isArray, y = function() {
  for (var r4 = [], t2 = 0; t2 < 256; ++t2) r4.push("%" + ((t2 < 16 ? "0" : "") + t2.toString(16)).toUpperCase());
  return r4;
}(), d = function(r4, t2) {
  for (var n2 = t2 && t2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < r4.length; ++e2) void 0 !== r4[e2] && (n2[e2] = r4[e2]);
  return n2;
}, b = { arrayToObject: d, assign: function(r4, t2) {
  return Object.keys(t2).reduce(function(r5, n2) {
    return r5[n2] = t2[n2], r5;
  }, r4);
}, combine: function(r4, t2) {
  return [].concat(r4, t2);
}, compact: function(r4) {
  for (var t2 = [{ obj: { o: r4 }, prop: "o" }], n2 = [], e2 = 0; e2 < t2.length; ++e2) for (var o2 = t2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
    var a2 = u2[f2], c2 = i2[a2];
    "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (t2.push({ obj: i2, prop: a2 }), n2.push(c2));
  }
  return function(r5) {
    for (; r5.length > 1; ) {
      var t3 = r5.pop(), n3 = t3.obj[t3.prop];
      if (p(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3) void 0 !== n3[o3] && e3.push(n3[o3]);
        t3.obj[t3.prop] = e3;
      }
    }
  }(t2), r4;
}, decode: function(r4, t2, n2) {
  var e2 = r4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2) return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (r5) {
    return e2;
  }
}, encode: function(r4, t2, n2, e2, o2) {
  if (0 === r4.length) return r4;
  var i2 = r4;
  if ("symbol" == typeof r4 ? i2 = Symbol.prototype.toString.call(r4) : "string" != typeof r4 && (i2 = String(r4)), "iso-8859-1" === n2) return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(r5) {
    return "%26%23" + parseInt(r5.slice(2), 16) + "%3B";
  });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === s.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += y[a2] : a2 < 2048 ? u2 += y[192 | a2 >> 6] + y[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += y[224 | a2 >> 12] + y[128 | a2 >> 6 & 63] + y[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += y[240 | a2 >> 18] + y[128 | a2 >> 12 & 63] + y[128 | a2 >> 6 & 63] + y[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(r4) {
  return !(!r4 || "object" != typeof r4 || !(r4.constructor && r4.constructor.isBuffer && r4.constructor.isBuffer(r4)));
}, isRegExp: function(r4) {
  return "[object RegExp]" === Object.prototype.toString.call(r4);
}, maybeMap: function(r4, t2) {
  if (p(r4)) {
    for (var n2 = [], e2 = 0; e2 < r4.length; e2 += 1) n2.push(t2(r4[e2]));
    return n2;
  }
  return t2(r4);
}, merge: function r2(t2, n2, e2) {
  if (!n2) return t2;
  if ("object" != typeof n2) {
    if (p(t2)) t2.push(n2);
    else {
      if (!t2 || "object" != typeof t2) return [t2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !v.call(Object.prototype, n2)) && (t2[n2] = true);
    }
    return t2;
  }
  if (!t2 || "object" != typeof t2) return [t2].concat(n2);
  var o2 = t2;
  return p(t2) && !p(n2) && (o2 = d(t2, e2)), p(t2) && p(n2) ? (n2.forEach(function(n3, o3) {
    if (v.call(t2, o3)) {
      var i2 = t2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? t2[o3] = r2(i2, n3, e2) : t2.push(n3);
    } else t2[o3] = n3;
  }), t2) : Object.keys(n2).reduce(function(t3, o3) {
    var i2 = n2[o3];
    return t3[o3] = v.call(t3, o3) ? r2(t3[o3], i2, e2) : i2, t3;
  }, o2);
} }, h = Object.prototype.hasOwnProperty, g = { brackets: function(r4) {
  return r4 + "[]";
}, comma: "comma", indices: function(r4, t2) {
  return r4 + "[" + t2 + "]";
}, repeat: function(r4) {
  return r4;
} }, m = Array.isArray, j = String.prototype.split, w = Array.prototype.push, O = function(r4, t2) {
  w.apply(r4, m(t2) ? t2 : [t2]);
}, E = Date.prototype.toISOString, R = s.default, S = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: b.encode, encodeValuesOnly: false, format: R, formatter: s.formatters[R], indices: false, serializeDate: function(r4) {
  return E.call(r4);
}, skipNulls: false, strictNullHandling: false }, k = function r3(t2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var d2, h2 = t2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = b.maybeMap(h2, function(r4) {
    return r4 instanceof Date ? l2(r4) : r4;
  })), null === h2) {
    if (o2) return u2 && !p2 ? u2(n2, S.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (d2 = h2) || "number" == typeof d2 || "boolean" == typeof d2 || "symbol" == typeof d2 || "bigint" == typeof d2 || b.isBuffer(h2)) {
    if (u2) {
      var g2 = p2 ? n2 : u2(n2, S.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var w2 = j.call(String(h2), ","), E2 = "", R2 = 0; R2 < w2.length; ++R2) E2 += (0 === R2 ? "" : ",") + v2(u2(w2[R2], S.encoder, y2, "value", s2));
        return [v2(g2) + "=" + E2];
      }
      return [v2(g2) + "=" + v2(u2(h2, S.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, T2 = [];
  if (void 0 === h2) return T2;
  if ("comma" === e2 && m(h2)) k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2)) k2 = f2;
  else {
    var $2 = Object.keys(h2);
    k2 = a2 ? $2.sort(a2) : $2;
  }
  for (var x2 = 0; x2 < k2.length; ++x2) {
    var N2 = k2[x2], C2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : h2[N2];
    if (!i2 || null !== C2) {
      var A2 = m(h2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (c2 ? "." + N2 : "[" + N2 + "]");
      O(T2, r3(C2, A2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return T2;
}, T = Object.prototype.hasOwnProperty, $ = Array.isArray, x = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: b.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(r4) {
  return r4.replace(/&#(\d+);/g, function(r5, t2) {
    return String.fromCharCode(parseInt(t2, 10));
  });
}, C = function(r4, t2) {
  return r4 && "string" == typeof r4 && t2.comma && r4.indexOf(",") > -1 ? r4.split(",") : r4;
}, A = function(r4, t2, n2, e2) {
  if (r4) {
    var o2 = n2.allowDots ? r4.replace(/\.([^.[]+)/g, "[$1]") : r4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && T.call(Object.prototype, f2) && !n2.allowPrototypes) return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && T.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes) return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(r5, t3, n3, e3) {
      for (var o3 = e3 ? t3 : C(t3, n3), i3 = r5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = r5[i3];
        if ("[]" === f3 && n3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, t2, n2, e2);
  }
}, D = function(r4, t2) {
  var n2 = /* @__PURE__ */ function(r5) {
    return x;
  }();
  if ("" === r4 || null == r4) return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof r4 ? function(r5, t3) {
    var n3, e3 = {}, o3 = (t3.ignoreQueryPrefix ? r5.replace(/^\?/, "") : r5).split(t3.delimiter, Infinity === t3.parameterLimit ? void 0 : t3.parameterLimit), i3 = -1, u3 = t3.charset;
    if (t3.charsetSentinel) for (n3 = 0; n3 < o3.length; ++n3) 0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3) if (n3 !== i3) {
      var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === s2 ? (f3 = t3.decoder(c2, x.decoder, u3, "key"), a3 = t3.strictNullHandling ? null : "") : (f3 = t3.decoder(c2.slice(0, s2), x.decoder, u3, "key"), a3 = b.maybeMap(C(c2.slice(s2 + 1), t3), function(r6) {
        return t3.decoder(r6, x.decoder, u3, "value");
      })), a3 && t3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = $(a3) ? [a3] : a3), e3[f3] = T.call(e3, f3) ? b.combine(e3[f3], a3) : a3;
    }
    return e3;
  }(r4, n2) : r4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = A(f2, e2[f2], n2, "string" == typeof r4);
    o2 = b.merge(o2, a2, n2);
  }
  return b.compact(o2);
}, P = /* @__PURE__ */ function() {
  function r4(r5, t2, n3) {
    var e2, o2;
    this.name = r5, this.definition = t2, this.bindings = null != (e2 = t2.bindings) ? e2 : {}, this.wheres = null != (o2 = t2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = r4.prototype;
  return n2.matchesUrl = function(r5) {
    var t2, n3 = this;
    if (!this.definition.methods.includes("GET")) return false;
    var e2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, function(r6, t3, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = n3.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + t3 + u3 + ")?" : "" + t3 + u3;
    }).replace(/^\w+:\/\//, ""), o2 = r5.replace(/^\w+:\/\//, "").split("?"), i2 = o2[0], u2 = o2[1], f2 = null != (t2 = new RegExp("^" + e2 + "/?$").exec(i2)) ? t2 : new RegExp("^" + e2 + "/?$").exec(decodeURI(i2));
    if (f2) {
      for (var a2 in f2.groups) f2.groups[a2] = "string" == typeof f2.groups[a2] ? decodeURIComponent(f2.groups[a2]) : f2.groups[a2];
      return { params: f2.groups, query: D(u2) };
    }
    return false;
  }, n2.compile = function(r5) {
    var t2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(r5[e2])) throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + t2.name + "'.");
      if (t2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + t2.wheres[e2] + ")?" : t2.wheres[e2]) + "$").test(null != (u2 = r5[e2]) ? u2 : "")) throw new Error("Ziggy error: '" + e2 + "' parameter '" + r5[e2] + "' does not match required format '" + t2.wheres[e2] + "' for route '" + t2.name + "'.");
      return encodeURI(null != (i2 = r5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }, t(r4, [{ key: "template", get: function() {
    var r5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === r5 ? "/" : r5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var r5, t2;
    return null != (r5 = null == (t2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : t2.map(function(r6) {
      return { name: r6.replace(/{|\??}/g, ""), required: !/\?}$/.test(r6) };
    })) ? r5 : [];
  } }]);
}(), I = /* @__PURE__ */ function(r4) {
  function e2(t2, e3, o3, i2) {
    var u3;
    if (void 0 === o3 && (o3 = true), (u3 = r4.call(this) || this).t = null != i2 ? i2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o3 }), t2) {
      if (!u3.t.routes[t2]) throw new Error("Ziggy error: route '" + t2 + "' is not in the route list.");
      u3.i = new P(t2, u3.t.routes[t2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  var o2, u2;
  u2 = r4, (o2 = e2).prototype = Object.create(u2.prototype), o2.prototype.constructor = o2, i(o2, u2);
  var f2 = e2.prototype;
  return f2.toString = function() {
    var r5 = this, t2 = Object.keys(this.u).filter(function(t3) {
      return !r5.i.parameterSegments.some(function(r6) {
        return r6.name === t3;
      });
    }).filter(function(r6) {
      return "_query" !== r6;
    }).reduce(function(t3, e3) {
      var o3;
      return n({}, t3, ((o3 = {})[e3] = r5.u[e3], o3));
    }, {});
    return this.i.compile(this.u) + function(r6, t3) {
      var n2, e3 = r6, o3 = function(r7) {
        if (!r7) return S;
        if (null != r7.encoder && "function" != typeof r7.encoder) throw new TypeError("Encoder has to be a function.");
        var t4 = r7.charset || S.charset;
        if (void 0 !== r7.charset && "utf-8" !== r7.charset && "iso-8859-1" !== r7.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = s.default;
        if (void 0 !== r7.format) {
          if (!h.call(s.formatters, r7.format)) throw new TypeError("Unknown format option provided.");
          n3 = r7.format;
        }
        var e4 = s.formatters[n3], o4 = S.filter;
        return ("function" == typeof r7.filter || m(r7.filter)) && (o4 = r7.filter), { addQueryPrefix: "boolean" == typeof r7.addQueryPrefix ? r7.addQueryPrefix : S.addQueryPrefix, allowDots: void 0 === r7.allowDots ? S.allowDots : !!r7.allowDots, charset: t4, charsetSentinel: "boolean" == typeof r7.charsetSentinel ? r7.charsetSentinel : S.charsetSentinel, delimiter: void 0 === r7.delimiter ? S.delimiter : r7.delimiter, encode: "boolean" == typeof r7.encode ? r7.encode : S.encode, encoder: "function" == typeof r7.encoder ? r7.encoder : S.encoder, encodeValuesOnly: "boolean" == typeof r7.encodeValuesOnly ? r7.encodeValuesOnly : S.encodeValuesOnly, filter: o4, format: n3, formatter: e4, serializeDate: "function" == typeof r7.serializeDate ? r7.serializeDate : S.serializeDate, skipNulls: "boolean" == typeof r7.skipNulls ? r7.skipNulls : S.skipNulls, sort: "function" == typeof r7.sort ? r7.sort : null, strictNullHandling: "boolean" == typeof r7.strictNullHandling ? r7.strictNullHandling : S.strictNullHandling };
      }(t3);
      "function" == typeof o3.filter ? e3 = (0, o3.filter)("", e3) : m(o3.filter) && (n2 = o3.filter);
      var i2 = [];
      if ("object" != typeof e3 || null === e3) return "";
      var u3 = g[t3 && t3.arrayFormat in g ? t3.arrayFormat : t3 && "indices" in t3 ? t3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o3.sort && n2.sort(o3.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o3.skipNulls && null === e3[a2] || O(i2, k(e3[a2], a2, u3, o3.strictNullHandling, o3.skipNulls, o3.encode ? o3.encoder : null, o3.filter, o3.sort, o3.allowDots, o3.serializeDate, o3.format, o3.formatter, o3.encodeValuesOnly, o3.charset));
      }
      var c2 = i2.join(o3.delimiter), l2 = true === o3.addQueryPrefix ? "?" : "";
      return o3.charsetSentinel && (l2 += "iso-8859-1" === o3.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? l2 + c2 : "";
    }(n({}, t2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(r6, t3) {
      return "boolean" == typeof r6 ? Number(r6) : t3(r6);
    } });
  }, f2.v = function(r5) {
    var t2 = this;
    r5 ? this.t.absolute && r5.startsWith("/") && (r5 = this.p().host + r5) : r5 = this.h();
    var e3 = {}, o3 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new P(n2[0], n2[1], t2.t).matchesUrl(r5);
    }) || [void 0, void 0];
    return n({ name: o3[0] }, e3, { route: o3[1] });
  }, f2.h = function() {
    var r5 = this.p(), t2 = r5.pathname, n2 = r5.search;
    return (this.t.absolute ? r5.host + t2 : t2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(r5, t2) {
    var e3 = this.v(), o3 = e3.name, i2 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!r5) return o3;
    var a2 = new RegExp("^" + r5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o3);
    if ([null, void 0].includes(t2) || !a2) return a2;
    var c2 = new P(o3, f3, this.t);
    t2 = this.l(t2, c2);
    var l2 = n({}, i2, u3);
    if (Object.values(t2).every(function(r6) {
      return !r6;
    }) && !Object.values(l2).some(function(r6) {
      return void 0 !== r6;
    })) return true;
    var s2 = function(r6, t3) {
      return Object.entries(r6).every(function(r7) {
        var n2 = r7[0], e4 = r7[1];
        return Array.isArray(e4) && Array.isArray(t3[n2]) ? e4.every(function(r8) {
          return t3[n2].includes(r8);
        }) : "object" == typeof e4 && "object" == typeof t3[n2] && null !== e4 && null !== t3[n2] ? s2(e4, t3[n2]) : t3[n2] == e4;
      });
    };
    return s2(t2, l2);
  }, f2.p = function() {
    var r5, t2, n2, e3, o3, i2, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (r5 = null == (t2 = this.t.location) ? void 0 : t2.host) ? r5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o3 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o3 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(r5) {
    return this.t.routes.hasOwnProperty(r5);
  }, f2.l = function(r5, t2) {
    var e3 = this;
    void 0 === r5 && (r5 = {}), void 0 === t2 && (t2 = this.i), null != r5 || (r5 = {}), r5 = ["string", "number"].includes(typeof r5) ? [r5] : r5;
    var o3 = t2.parameterSegments.filter(function(r6) {
      return !e3.t.defaults[r6.name];
    });
    if (Array.isArray(r5)) r5 = r5.reduce(function(r6, t3, e4) {
      var i3, u3;
      return n({}, r6, o3[e4] ? ((i3 = {})[o3[e4].name] = t3, i3) : "object" == typeof t3 ? t3 : ((u3 = {})[t3] = "", u3));
    }, {});
    else if (1 === o3.length && !r5[o3[0].name] && (r5.hasOwnProperty(Object.values(t2.bindings)[0]) || r5.hasOwnProperty("id"))) {
      var i2;
      (i2 = {})[o3[0].name] = r5, r5 = i2;
    }
    return n({}, this.m(t2), this.j(r5, t2));
  }, f2.m = function(r5) {
    var t2 = this;
    return r5.parameterSegments.filter(function(r6) {
      return t2.t.defaults[r6.name];
    }).reduce(function(r6, e3, o3) {
      var i2, u3 = e3.name;
      return n({}, r6, ((i2 = {})[u3] = t2.t.defaults[u3], i2));
    }, {});
  }, f2.j = function(r5, t2) {
    var e3 = t2.bindings, o3 = t2.parameterSegments;
    return Object.entries(r5).reduce(function(r6, t3) {
      var i2, u3, f3 = t3[0], a2 = t3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o3.some(function(r7) {
        return r7.name === f3;
      })) return n({}, r6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, r6, ((i2 = {})[f3] = a2[e3[f3]], i2));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, t(e2, [{ key: "params", get: function() {
    var r5 = this.v();
    return n({}, r5.params, r5.query);
  } }, { key: "routeParams", get: function() {
    return this.v().params;
  } }, { key: "queryParams", get: function() {
    return this.v().query;
  } }]);
}(/* @__PURE__ */ f(String));
function Z(r4, t2, n2, e2) {
  var o2 = new I(r4, t2, n2, e2);
  return r4 ? o2.toString() : o2;
}
var F = { install: function(r4, t2) {
  var n2 = function(r5, n3, e2, o2) {
    return void 0 === o2 && (o2 = t2), Z(r5, n3, e2, o2);
  };
  parseInt(r4.version) > 2 ? (r4.config.globalProperties.route = n2, r4.provide("route", n2)) : r4.mixin({ methods: { route: n2 } });
} };
const Ziggy$1 = { "url": "http://localhost", "port": null, "defaults": {}, "routes": { "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Users/Home.vue": __vite_glob_0_0 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = _sfc_main$1;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(F, Ziggy$1).component("Link", Link);
    }
  })
);
