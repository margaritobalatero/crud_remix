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
  Form,
  useLoaderData
} from "/build/_shared/chunk-4WVDSPX4.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
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

// app/routes/tasks.tsx
var import_react2 = __toESM(require_react());
var import_db = __toESM(require_db());
var import_task = __toESM(require_task());
var import_session = __toESM(require_session());

// app/styles/task.css
var task_default = "/build/_assets/task-MQIN2S6B.css";

// app/routes/tasks.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\tasks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\tasks.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: task_default
}];
function Tasks() {
  _s();
  const {
    tasks,
    q
  } = useLoaderData();
  const [selectedTask, setSelectedTask] = (0, import_react2.useState)(null);
  const [isEditing, setIsEditing] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "task-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Your Tasks" }, void 0, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "task-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "Task title", required: true }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "description", placeholder: "Description" }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "imageUrl", placeholder: "Image URL" }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Add" }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "task-search", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "q", defaultValue: q, placeholder: "Search tasks..." }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "task-list", children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "task-item", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: task.title }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: task.description }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 162,
          columnNumber: 15
        }, this),
        task.imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: task.imageUrl, alt: task.title }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 163,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
          setSelectedTask(task);
          setIsEditing(false);
        }, children: "Details" }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
          setSelectedTask(task);
          setIsEditing(true);
        }, children: "Edit" }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
          display: "inline"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "taskId", value: task._id }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_method", value: "delete", children: "Delete" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this)
    ] }, task._id, true, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 159,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    selectedTask && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-box", children: [
      isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_method", value: "update" }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "taskId", value: selectedTask._id }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Title",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", defaultValue: selectedTask.title, className: "border p-2 rounded" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 208,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 206,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Description",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "description", defaultValue: selectedTask.description, className: "border p-2 rounded" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Image URL",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "imageUrl", defaultValue: selectedTask.imageUrl || "", className: "border p-2 rounded" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 218,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 216,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          gap: 8
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-yellow-500 text-white px-4 py-2 rounded", children: "Save Changes" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
            setIsEditing(false);
          }, className: "px-4 py-2 rounded", children: "Cancel" }, void 0, false, {
            fileName: "app/routes/tasks.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 221,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 202,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: selectedTask.title }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 236,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: selectedTask.description }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 237,
          columnNumber: 17
        }, this),
        selectedTask.imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedTask.imageUrl, alt: selectedTask.title }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 238,
          columnNumber: 43
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: 12
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
          setIsEditing(true);
        }, className: "px-3 py-1 rounded", children: "Edit" }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 242,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/tasks.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 235,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
        setSelectedTask(null);
        setIsEditing(false);
      }, className: "mt-4", children: "Close" }, void 0, false, {
        fileName: "app/routes/tasks.tsx",
        lineNumber: 251,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 200,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 199,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s(Tasks, "g3WDLNUCuhQyCp1GmmeLoZb9hsc=", false, function() {
  return [useLoaderData];
});
_c = Tasks;
var _c;
$RefreshReg$(_c, "Tasks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tasks as default,
  links
};
//# sourceMappingURL=/build/routes/tasks-CUCNBQKF.js.map
