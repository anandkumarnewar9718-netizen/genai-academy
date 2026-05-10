import { j as jsxRuntimeExports } from "./index-CdpgodV-.js";
function ProgressBar({
  value,
  showLabel = false,
  size = "md",
  className = ""
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const heights = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full ${className}`, children: [
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "Progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-accent font-display", children: [
        clamped,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full bg-muted rounded-full overflow-hidden ${heights[size]}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-accent rounded-full transition-all duration-500 ease-out",
            style: { width: `${clamped}%` },
            tabIndex: 0,
            role: "progressbar",
            "aria-valuenow": clamped,
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }
        )
      }
    )
  ] });
}
export {
  ProgressBar as P
};
