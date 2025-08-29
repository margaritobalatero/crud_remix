import {
  require_task
} from "/build/_shared/chunk-5KT75PHI.js";
import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PDWI34MD.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  require_session
} from "/build/_shared/chunk-5HGWGMBK.js";
import {
  createHotContext
} from "/build/_shared/chunk-HRJQ2GWM.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/tasks.$taskId.tsx
var import_db = __toESM(require_db());
var import_task = __toESM(require_task());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\tasks.$taskId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\tasks.$taskId.tsx"
  );
  import.meta.hot.lastModified = "1756489154096.955";
}
function TaskDetail() {
  _s();
  const {
    task
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: task.title }, void 0, false, {
      fileName: "app/routes/tasks.$taskId.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-gray-700", dangerouslySetInnerHTML: {
      __html: task.description
    } }, void 0, false, {
      fileName: "app/routes/tasks.$taskId.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    task.imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: task.imageUrl, alt: task.title, className: "mt-4 max-h-80 rounded" }, void 0, false, {
      fileName: "app/routes/tasks.$taskId.tsx",
      lineNumber: 55,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/tasks", className: "inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded", children: "Back to Tasks" }, void 0, false, {
      fileName: "app/routes/tasks.$taskId.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tasks.$taskId.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(TaskDetail, "G2x41XR0eTNo1T7Y73bRL8XAWGY=", false, function() {
  return [useLoaderData];
});
_c = TaskDetail;
var _c;
$RefreshReg$(_c, "TaskDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TaskDetail as default
};
//# sourceMappingURL=/build/routes/tasks.$taskId-37QEMOZP.js.map
