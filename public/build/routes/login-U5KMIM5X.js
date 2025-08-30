import {
  require_bcrypt,
  require_user
} from "/build/_shared/chunk-UJR3WPQB.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-4WVDSPX4.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  require_session
} from "/build/_shared/chunk-5HGWGMBK.js";
import {
  createHotContext
} from "/build/_shared/chunk-KS7FHGDZ.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/login.tsx
var import_db = __toESM(require_db());
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_bcryptjs = __toESM(require_bcrypt());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1756486394244.1372";
}
var meta = () => {
  return [{
    title: "Login - Remix CRUD"
  }];
};
function Login() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "Login" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-3 text-sm text-red-600", children: actionData.error }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 67,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email", required: true, className: "border rounded px-3 py-2" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "Password", required: true, className: "border rounded px-3 py-2" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Login, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-U5KMIM5X.js.map
