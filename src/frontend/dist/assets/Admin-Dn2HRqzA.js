import { c as createLucideIcon, s as o, r as reactExports, v as vt, j as jsxRuntimeExports, m as useAuth, t as Layout, b as LoadingSpinner, L as Link, d as BookOpen, q as useQueryClient } from "./index-CdpgodV-.js";
import { u as useActor, a as useQuery, b as useMutation, D as Difficulty, c as createActor } from "./backend-DtJ819ci.js";
import { G as GraduationCap } from "./graduation-cap-SxGQfX4k.js";
import { X } from "./x-Xq3PhT2E.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => o.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, o.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => o.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, o.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), o.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = o.useState(document.hidden);
  return o.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({ ...g, ...e, id: u, title: t }), { ...g, ...e, id: u, dismissible: w, title: t }) : g) : this.addToast({ title: t, ...a, dismissible: w, id: u }), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
        if (w = ["resolve", i], o.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: T });
        }
      }).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast({ title: n, ...e, id: t }), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts(), ue = Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X2, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = o.useState(null), [lt, J] = o.useState(null), [W, H] = o.useState(false), [A, mt] = o.useState(false), [L, z] = o.useState(false), [ct, d] = o.useState(false), [h, y] = o.useState(false), [R, j] = o.useState(0), [p, _] = o.useState(0), O = o.useRef(t.duration || X2 || Wt), G = o.useRef(null), k = o.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = o.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = o.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = o.useMemo(() => t.duration || X2 || Wt, [t.duration, X2]), gt = o.useRef(0), U = o.useRef(0), St = o.useRef(0), K = o.useRef(null), [Gt, Qt] = st.split("-"), Rt = o.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U.current = o.useMemo(() => dt * pt + Rt, [dt, Rt]), o.useEffect(() => {
    O.current = Tt;
  }, [Tt]), o.useEffect(() => {
    H(true);
  }, []), o.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), o.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? { ...x, height: c } : x) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = o.useCallback(() => {
    mt(true), j(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U]);
  o.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D, u, t, N, it, Et, $]), o.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P != null && P.loading ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : rt ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : o.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return o.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${p}px`, ...ut, ...t.style }, onDragEnd: () => {
    z(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Jt && !t.jsx ? o.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : o.createElement(o.Fragment, null, N || t.icon || t.promise ? o.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, o.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, o.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? o.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? o.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? o.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X2, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = o.useState([]), P = o.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = o.useState([]), [Y, C] = o.useState(false), [lt, J] = o.useState(false), [W, H] = o.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = o.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = o.useRef(null), z = o.useRef(false), ct = o.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return o.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      vt.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), { ...h[y], ...d }, ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), o.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), o.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), o.useEffect(() => {
    let d = (h) => {
      var R, j;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), o.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, z.current = false);
    };
  }, [A.current]), o.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((d, h) => {
    var j;
    let [y, R] = d.split("-");
    return B.length ? o.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px`, ...ut, ...Te(i, D) }, onBlur: (p) => {
      z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = true, L.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return o.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X2, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
function asActor(a) {
  return a;
}
function useIsAdmin() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return asActor(actor).isCallerAdmin();
    },
    enabled: !!actor && !isFetching
  });
}
function useListAllCourses() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return asActor(actor).listCourses();
    },
    enabled: !!actor && !isFetching
  });
}
function useAllLessons() {
  const { actor, isFetching } = useActor(createActor);
  const courses = useListAllCourses();
  const courseList = courses.data ?? [];
  return useQuery({
    queryKey: ["all-lessons", courseList.map((c) => c.id.toString()).join(",")],
    queryFn: async () => {
      if (!actor || courseList.length === 0) return [];
      const all = await Promise.all(
        courseList.map(
          (c) => asActor(actor).getLessonsForCourse(c.id)
        )
      );
      return all.flat();
    },
    enabled: !!actor && !isFetching && courseList.length > 0
  });
}
function useAllQuizzes(lessons) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["all-quizzes", lessons.map((l) => l.id.toString()).join(",")],
    queryFn: async () => {
      if (!actor || lessons.length === 0) return [];
      const results = await Promise.all(
        lessons.map(
          (l) => asActor(actor).getQuizForLesson(l.id)
        )
      );
      return results.filter((q) => q !== null);
    },
    enabled: !!actor && !isFetching && lessons.length > 0
  });
}
function useCreateCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).createCourse(args),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      ue.success("Course created!");
    },
    onError: () => ue.error("Failed to create course")
  });
}
function useUpdateCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).updateCourse(args),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      ue.success("Course updated!");
    },
    onError: () => ue.error("Failed to update course")
  });
}
function useDeleteCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => asActor(actor).deleteCourse(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      ue.success("Course deleted");
    },
    onError: () => ue.error("Failed to delete course")
  });
}
function useCreateLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).createLesson(args),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["lessons", vars.courseId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      ue.success("Lesson created!");
    },
    onError: () => ue.error("Failed to create lesson")
  });
}
function useUpdateLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).updateLesson(args),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["lessons", vars.courseId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      ue.success("Lesson updated!");
    },
    onError: () => ue.error("Failed to update lesson")
  });
}
function useDeleteLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => asActor(actor).deleteLesson(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      ue.success("Lesson deleted");
    },
    onError: () => ue.error("Failed to delete lesson")
  });
}
function useCreateQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).createQuiz(args),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["quiz", vars.lessonId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      ue.success("Quiz created!");
    },
    onError: () => ue.error("Failed to create quiz")
  });
}
function useUpdateQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => asActor(actor).updateQuiz(args),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["quiz", vars.lessonId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      ue.success("Quiz updated!");
    },
    onError: () => ue.error("Failed to update quiz")
  });
}
function useDeleteQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => asActor(actor).deleteQuiz(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      ue.success("Quiz deleted");
    },
    onError: () => ue.error("Failed to delete quiz")
  });
}
function Modal({
  title,
  onClose,
  children
}) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center",
      "data-ocid": "admin.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm",
            role: "button",
            tabIndex: 0,
            "aria-label": "Close dialog",
            onClick: onClose,
            onKeyUp: (e) => {
              if (e.key === "Enter" || e.key === " ") onClose();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full sm:max-w-lg bg-card rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col max-h-[92dvh] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "p-2 rounded-full hover:bg-muted transition-colors",
                "aria-label": "Close",
                "data-ocid": "admin.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 px-5 py-4", children })
        ] })
      ]
    }
  );
}
const DIFFICULTIES = [
  Difficulty.Beginner,
  Difficulty.Intermediate,
  Difficulty.Advanced
];
function CourseModal({
  course,
  onClose
}) {
  const isEdit = !!course;
  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();
  const [form, setForm] = reactExports.useState({
    title: (course == null ? void 0 : course.title) ?? "",
    description: (course == null ? void 0 : course.description) ?? "",
    difficulty: (course == null ? void 0 : course.difficulty) ?? Difficulty.Beginner,
    thumbnail: (course == null ? void 0 : course.thumbnail) ?? ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit && course) {
      await updateCourse.mutateAsync({
        id: course.id,
        title: form.title,
        description: form.description,
        difficulty: form.difficulty,
        thumbnail: form.thumbnail,
        learningObjectives: course.learningObjectives
      });
    } else {
      await createCourse.mutateAsync({
        title: form.title,
        description: form.description,
        difficulty: form.difficulty,
        thumbnail: form.thumbnail,
        learningObjectives: []
      });
    }
    onClose();
  };
  const isPending = createCourse.isPending || updateCourse.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { title: isEdit ? "Edit Course" : "Add Course", onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        value: form.title,
        onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
        required: true,
        placeholder: "e.g. Intro to LLMs",
        "data-ocid": "admin.course_title.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Description", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: "admin-input min-h-[80px] resize-y",
        value: form.description,
        onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
        required: true,
        placeholder: "Brief course description",
        "data-ocid": "admin.course_description.textarea"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Difficulty", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        className: "admin-input",
        value: form.difficulty,
        onChange: (e) => setForm((p) => ({
          ...p,
          difficulty: e.target.value
        })),
        "data-ocid": "admin.course_difficulty.select",
        children: DIFFICULTIES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, children: d }, d))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Thumbnail URL", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        value: form.thumbnail,
        onChange: (e) => setForm((p) => ({ ...p, thumbnail: e.target.value })),
        placeholder: "https://example.com/image.jpg",
        "data-ocid": "admin.course_thumbnail.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalActions, { onClose, isPending, isEdit })
  ] }) });
}
function LessonModal({
  lesson,
  courses,
  onClose
}) {
  var _a, _b, _c, _d;
  const isEdit = !!lesson;
  const createLesson = useCreateLesson();
  const updateLesson = useUpdateLesson();
  const [form, setForm] = reactExports.useState({
    title: (lesson == null ? void 0 : lesson.title) ?? "",
    courseId: ((_a = lesson == null ? void 0 : lesson.courseId) == null ? void 0 : _a.toString()) ?? ((_c = (_b = courses[0]) == null ? void 0 : _b.id) == null ? void 0 : _c.toString()) ?? "",
    orderIndex: ((_d = lesson == null ? void 0 : lesson.orderIndex) == null ? void 0 : _d.toString()) ?? "1",
    content: (lesson == null ? void 0 : lesson.content) ?? ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseId = BigInt(form.courseId);
    const orderIndex = BigInt(form.orderIndex);
    if (isEdit && lesson) {
      await updateLesson.mutateAsync({
        id: lesson.id,
        title: form.title,
        courseId,
        orderIndex,
        content: form.content,
        learningObjectives: lesson.learningObjectives
      });
    } else {
      await createLesson.mutateAsync({
        title: form.title,
        courseId,
        orderIndex,
        content: form.content,
        learningObjectives: []
      });
    }
    onClose();
  };
  const isPending = createLesson.isPending || updateLesson.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { title: isEdit ? "Edit Lesson" : "Add Lesson", onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        value: form.title,
        onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
        required: true,
        placeholder: "e.g. Understanding Transformers",
        "data-ocid": "admin.lesson_title.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Course", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        className: "admin-input",
        value: form.courseId,
        onChange: (e) => setForm((p) => ({ ...p, courseId: e.target.value })),
        "data-ocid": "admin.lesson_course.select",
        children: courses.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id.toString(), children: c.title }, c.id.toString()))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Order Index", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "number",
        min: "1",
        className: "admin-input",
        value: form.orderIndex,
        onChange: (e) => setForm((p) => ({ ...p, orderIndex: e.target.value })),
        required: true,
        "data-ocid": "admin.lesson_order.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Content (supports code blocks)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: "admin-input font-mono text-sm min-h-[160px] resize-y",
        value: form.content,
        onChange: (e) => setForm((p) => ({ ...p, content: e.target.value })),
        required: true,
        placeholder: "Use ```language\ncode here\n``` for code blocks",
        "data-ocid": "admin.lesson_content.textarea"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalActions, { onClose, isPending, isEdit })
  ] }) });
}
const emptyQuestion = () => ({
  questionText: "",
  options: ["", "", "", ""],
  correctAnswerIndex: 0,
  explanation: ""
});
function QuestionEditor({
  q,
  idx,
  onChange,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl p-4 flex flex-col gap-3 bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
        "Question ",
        idx + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onRemove,
          className: "p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors",
          "aria-label": "Remove question",
          "data-ocid": `admin.question_remove_button.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        placeholder: "Question text",
        value: q.questionText,
        onChange: (e) => onChange({ ...q, questionText: e.target.value }),
        required: true,
        "data-ocid": `admin.question_text.${idx + 1}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: q.options.map((opt, oIdx) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: option order is stable within a question editor session
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "radio",
            name: `correct-${idx}`,
            checked: q.correctAnswerIndex === oIdx,
            onChange: () => onChange({ ...q, correctAnswerIndex: oIdx }),
            className: "accent-primary w-4 h-4 shrink-0",
            "data-ocid": `admin.question_correct.${idx + 1}.${oIdx + 1}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "admin-input flex-1",
            placeholder: `Option ${oIdx + 1}`,
            value: opt,
            onChange: (e) => {
              const opts = [...q.options];
              opts[oIdx] = e.target.value;
              onChange({ ...q, options: opts });
            },
            required: true,
            "data-ocid": `admin.question_option.${idx + 1}.${oIdx + 1}`
          }
        )
      ] }, `opt-${oIdx}`)
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        placeholder: "Explanation (shown after answering)",
        value: q.explanation,
        onChange: (e) => onChange({ ...q, explanation: e.target.value }),
        "data-ocid": `admin.question_explanation.${idx + 1}`
      }
    )
  ] });
}
function QuizModal({
  quiz,
  lessons,
  onClose
}) {
  var _a, _b, _c;
  const isEdit = !!quiz;
  const createQuiz = useCreateQuiz();
  const updateQuiz = useUpdateQuiz();
  const [title, setTitle] = reactExports.useState((quiz == null ? void 0 : quiz.title) ?? "");
  const [lessonId, setLessonId] = reactExports.useState(
    ((_a = quiz == null ? void 0 : quiz.lessonId) == null ? void 0 : _a.toString()) ?? ((_c = (_b = lessons[0]) == null ? void 0 : _b.id) == null ? void 0 : _c.toString()) ?? ""
  );
  const [questions, setQuestions] = reactExports.useState(
    (quiz == null ? void 0 : quiz.questions.map((q) => ({
      questionText: q.questionText,
      options: q.options,
      correctAnswerIndex: Number(q.correctAnswerIndex),
      explanation: q.explanation
    }))) ?? [emptyQuestion()]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const lId = BigInt(lessonId);
    const questionsPayload = questions.map((q) => ({
      questionText: q.questionText,
      options: q.options,
      correctAnswerIndex: BigInt(q.correctAnswerIndex),
      explanation: q.explanation
    }));
    if (isEdit && quiz) {
      await updateQuiz.mutateAsync({
        id: quiz.id,
        lessonId: lId,
        title,
        questions: questionsPayload
      });
    } else {
      await createQuiz.mutateAsync({
        lessonId: lId,
        title,
        questions: questionsPayload
      });
    }
    onClose();
  };
  const isPending = createQuiz.isPending || updateQuiz.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { title: isEdit ? "Edit Quiz" : "Add Quiz", onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Quiz Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "admin-input",
        value: title,
        onChange: (e) => setTitle(e.target.value),
        required: true,
        placeholder: "e.g. LLM Fundamentals Quiz",
        "data-ocid": "admin.quiz_title.input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lesson", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        className: "admin-input",
        value: lessonId,
        onChange: (e) => setLessonId(e.target.value),
        "data-ocid": "admin.quiz_lesson.select",
        children: lessons.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.id.toString(), children: l.title }, l.id.toString()))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Questions" }),
      questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuestionEditor,
        {
          q,
          idx: i,
          onChange: (updated) => setQuestions(
            (prev) => prev.map((item, j) => j === i ? updated : item)
          ),
          onRemove: () => setQuestions((prev) => prev.filter((_, j) => j !== i))
        },
        `q-${i}`
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setQuestions((prev) => [...prev, emptyQuestion()]),
          className: "flex items-center gap-2 text-sm text-primary font-medium py-2 px-3 rounded-xl border border-primary/30 hover:bg-primary/5 transition-colors",
          "data-ocid": "admin.add_question_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add Question"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalActions, { onClose, isPending, isEdit })
  ] }) });
}
function Field({
  label,
  children,
  htmlFor
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor, className: "text-sm font-medium text-foreground", children: label }),
    children
  ] });
}
function ModalActions({
  onClose,
  isPending,
  isEdit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors",
        "data-ocid": "admin.cancel_button",
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: isPending,
        className: "flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50",
        "data-ocid": "admin.submit_button",
        children: isPending ? "Saving…" : isEdit ? "Save Changes" : "Create"
      }
    )
  ] });
}
function DeleteConfirm({
  label,
  onConfirm,
  onCancel,
  isPending
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { title: "Confirm Delete", onClose: onCancel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
      "Delete ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: label }),
      "? This action cannot be undone."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onCancel,
          className: "flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors",
          "data-ocid": "admin.cancel_button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onConfirm,
          disabled: isPending,
          className: "flex-1 py-3 rounded-xl bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50",
          "data-ocid": "admin.confirm_button",
          children: isPending ? "Deleting…" : "Delete"
        }
      )
    ] })
  ] });
}
function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      "data-ocid": ocid,
      className: `flex items-center gap-2 flex-1 justify-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[48px] ${active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
      ]
    }
  );
}
function CoursesTab({ courses }) {
  const deleteCourse = useDeleteCourse();
  const [editCourse, setEditCourse] = reactExports.useState();
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-semibold text-foreground", children: "All Courses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setAddOpen(true),
          className: "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]",
          "data-ocid": "admin.course_add_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add Course"
          ]
        }
      )
    ] }),
    courses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: GraduationCap,
        message: "No courses yet. Add your first course!"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", "data-ocid": "admin.courses.list", children: courses.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "bg-card border border-border rounded-xl p-4 flex items-start gap-3",
        "data-ocid": `admin.courses.item.${i + 1}`,
        children: [
          c.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: c.thumbnail,
              alt: c.title,
              className: "w-14 h-14 rounded-lg object-cover shrink-0"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-6 h-6 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-0.5", children: c.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium", children: c.difficulty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setEditCourse(c),
                className: "p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors",
                "aria-label": "Edit course",
                "data-ocid": `admin.courses.edit_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 text-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDeleteTarget(c),
                className: "p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors",
                "aria-label": "Delete course",
                "data-ocid": `admin.courses.delete_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-destructive" })
              }
            )
          ] })
        ]
      },
      c.id.toString()
    )) }),
    (addOpen || editCourse) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CourseModal,
      {
        course: editCourse,
        onClose: () => {
          setAddOpen(false);
          setEditCourse(void 0);
        }
      }
    ),
    deleteTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirm,
      {
        label: deleteTarget.title,
        isPending: deleteCourse.isPending,
        onConfirm: () => {
          deleteCourse.mutate(deleteTarget.id, {
            onSuccess: () => setDeleteTarget(null)
          });
        },
        onCancel: () => setDeleteTarget(null)
      }
    )
  ] });
}
function LessonsTab({
  lessons,
  courses
}) {
  const deleteLesson = useDeleteLesson();
  const [editLesson, setEditLesson] = reactExports.useState();
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const courseMap = reactExports.useMemo(() => {
    const m = {};
    for (const c of courses) m[c.id.toString()] = c.title;
    return m;
  }, [courses]);
  const grouped = reactExports.useMemo(() => {
    const g = {};
    for (const l of lessons) {
      const key = l.courseId.toString();
      if (!g[key])
        g[key] = {
          courseTitle: courseMap[key] ?? "Unknown Course",
          lessons: []
        };
      g[key].lessons.push(l);
    }
    return Object.entries(g);
  }, [lessons, courseMap]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-semibold text-foreground", children: "All Lessons" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setAddOpen(true),
          className: "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]",
          "data-ocid": "admin.lesson_add_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add Lesson"
          ]
        }
      )
    ] }),
    grouped.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: BookOpen,
        message: "No lessons yet. Add your first lesson!"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", "data-ocid": "admin.lessons.list", children: grouped.map(([courseId, { courseTitle, lessons: cls }]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-1", children: courseTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: cls.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3",
          "data-ocid": `admin.lessons.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0", children: Number(l.orderIndex) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 min-w-0 font-medium text-foreground truncate", children: l.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setEditLesson(l),
                className: "p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors shrink-0",
                "aria-label": "Edit lesson",
                "data-ocid": `admin.lessons.edit_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 text-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDeleteTarget(l),
                className: "p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors shrink-0",
                "aria-label": "Delete lesson",
                "data-ocid": `admin.lessons.delete_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-destructive" })
              }
            )
          ]
        },
        l.id.toString()
      )) })
    ] }, courseId)) }),
    (addOpen || editLesson) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      LessonModal,
      {
        lesson: editLesson,
        courses,
        onClose: () => {
          setAddOpen(false);
          setEditLesson(void 0);
        }
      }
    ),
    deleteTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirm,
      {
        label: deleteTarget.title,
        isPending: deleteLesson.isPending,
        onConfirm: () => {
          deleteLesson.mutate(deleteTarget.id, {
            onSuccess: () => setDeleteTarget(null)
          });
        },
        onCancel: () => setDeleteTarget(null)
      }
    )
  ] });
}
function QuizzesTab({
  quizzes,
  lessons
}) {
  const deleteQuiz = useDeleteQuiz();
  const [editQuiz, setEditQuiz] = reactExports.useState();
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const lessonMap = reactExports.useMemo(() => {
    const m = {};
    for (const l of lessons) m[l.id.toString()] = l.title;
    return m;
  }, [lessons]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-semibold text-foreground", children: "All Quizzes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setAddOpen(true),
          className: "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]",
          "data-ocid": "admin.quiz_add_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add Quiz"
          ]
        }
      )
    ] }),
    quizzes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: CircleHelp,
        message: "No quizzes yet. Add your first quiz!"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", "data-ocid": "admin.quizzes.list", children: quizzes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3",
        "data-ocid": `admin.quizzes.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-5 h-5 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: q.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              lessonMap[q.lessonId.toString()] ?? "Unknown Lesson",
              " ",
              "· ",
              q.questions.length,
              " questions"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setEditQuiz(q),
              className: "p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors shrink-0",
              "aria-label": "Edit quiz",
              "data-ocid": `admin.quizzes.edit_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 text-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setDeleteTarget(q),
              className: "p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors shrink-0",
              "aria-label": "Delete quiz",
              "data-ocid": `admin.quizzes.delete_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-destructive" })
            }
          )
        ]
      },
      q.id.toString()
    )) }),
    (addOpen || editQuiz) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizModal,
      {
        quiz: editQuiz,
        lessons,
        onClose: () => {
          setAddOpen(false);
          setEditQuiz(void 0);
        }
      }
    ),
    deleteTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirm,
      {
        label: deleteTarget.title,
        isPending: deleteQuiz.isPending,
        onConfirm: () => {
          deleteQuiz.mutate(deleteTarget.id, {
            onSuccess: () => setDeleteTarget(null)
          });
        },
        onCancel: () => setDeleteTarget(null)
      }
    )
  ] });
}
function EmptyState({
  icon: Icon,
  message
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-3 py-14 text-center",
      "data-ocid": "admin.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: message })
      ]
    }
  );
}
function AdminPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Admin, {});
}
function Admin() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const adminQuery = useIsAdmin();
  const [activeTab, setActiveTab] = reactExports.useState("courses");
  const coursesQuery = useListAllCourses();
  const courses = coursesQuery.data ?? [];
  const lessonsQuery = useAllLessons();
  const lessons = lessonsQuery.data ?? [];
  const quizzesQuery = useAllQuizzes(lessons);
  const quizzes = quizzesQuery.data ?? [];
  const isLoading = authLoading || adminQuery.isLoading || coursesQuery.isLoading;
  const handleTabChange = reactExports.useCallback((tab) => setActiveTab(tab), []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 flex items-center justify-center py-24",
        "data-ocid": "admin.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {})
      }
    ) });
  }
  if (!isAuthenticated || adminQuery.data === false) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-1 flex flex-col items-center justify-center gap-6 py-24 px-6 text-center",
        "data-ocid": "admin.access_denied",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground mb-2", children: "Access Denied" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "You don't have permission to view this page." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors min-h-[48px] flex items-center",
              "data-ocid": "admin.home_link",
              children: "Back to Home"
            }
          )
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-6",
      "data-ocid": "admin.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Admin Panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage courses, lessons, and quizzes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-1.5 bg-muted/50 p-1.5 rounded-2xl",
            "data-ocid": "admin.tabs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabBtn,
                {
                  active: activeTab === "courses",
                  onClick: () => handleTabChange("courses"),
                  icon: GraduationCap,
                  label: "Courses",
                  ocid: "admin.courses.tab"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabBtn,
                {
                  active: activeTab === "lessons",
                  onClick: () => handleTabChange("lessons"),
                  icon: BookOpen,
                  label: "Lessons",
                  ocid: "admin.lessons.tab"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabBtn,
                {
                  active: activeTab === "quizzes",
                  onClick: () => handleTabChange("quizzes"),
                  icon: CircleHelp,
                  label: "Quizzes",
                  ocid: "admin.quizzes.tab"
                }
              )
            ]
          }
        ),
        activeTab === "courses" && /* @__PURE__ */ jsxRuntimeExports.jsx(CoursesTab, { courses }),
        activeTab === "lessons" && /* @__PURE__ */ jsxRuntimeExports.jsx(LessonsTab, { lessons, courses }),
        activeTab === "quizzes" && /* @__PURE__ */ jsxRuntimeExports.jsx(QuizzesTab, { quizzes, lessons })
      ]
    }
  ) });
}
export {
  AdminPage
};
