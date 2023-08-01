import {
  require_react
} from "./chunk-BTRZQP7J.js";
import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateSet,
  __privateWrapper,
  __publicField,
  __toESM
} from "./chunk-42KM6NI4.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React2 = require_react();
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState2 = React2.useState, useEffect2 = React2.useEffect, useLayoutEffect2 = React2.useLayoutEffect, useDebugValue = React2.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React2.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState2({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect2(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React2.useSyncExternalStore !== void 0 ? React2.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React2 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef2 = React2.useRef, useEffect2 = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef2(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect2(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction2 = false;
function warning(condition, message) {
  if (!isProduction2) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@tanstack/router/build/esm/index.js
var React = __toESM(require_react());

// node_modules/@tanstack/react-store/build/esm/index.js
var import_with_selector = __toESM(require_with_selector());

// node_modules/@tanstack/store/build/esm/index.js
var _batching, _flushing, _flush;
var Store = class {
  constructor(initialState, options) {
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __privateAdd(this, _batching, false);
    __privateAdd(this, _flushing, 0);
    __publicField(this, "subscribe", (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    });
    __publicField(this, "setState", (updater) => {
      var _a, _b, _c;
      const previous = this.state;
      this.state = ((_a = this.options) == null ? void 0 : _a.updateFn) ? this.options.updateFn(previous)(updater) : updater(previous);
      if (this.state === previous)
        return;
      (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b, this.state, previous);
      __privateGet(this, _flush).call(this, previous);
    });
    __privateAdd(this, _flush, (previous) => {
      if (__privateGet(this, _batching))
        return;
      const flushId = ++__privateWrapper(this, _flushing)._;
      this.listeners.forEach((listener) => {
        if (__privateGet(this, _flushing) !== flushId)
          return;
        listener(this.state, previous);
      });
    });
    __publicField(this, "batch", (cb) => {
      if (__privateGet(this, _batching))
        return cb();
      const previous = this.state;
      __privateSet(this, _batching, true);
      cb();
      __privateSet(this, _batching, false);
      __privateGet(this, _flush).call(this, previous);
    });
    this.state = initialState;
    this.options = options;
  }
};
_batching = new WeakMap();
_flushing = new WeakMap();
_flush = new WeakMap();

// node_modules/@tanstack/react-store/build/esm/index.js
function useStore(store, selector = (d) => d) {
  const slice = (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, () => store.state, () => store.state, selector, shallow);
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/@tanstack/router/build/esm/index.js
var popStateEvent = "popstate";
var beforeUnloadEvent = "beforeunload";
var beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "";
};
var stopBlocking = () => {
  removeEventListener(beforeUnloadEvent, beforeUnloadListener, {
    capture: true
  });
};
function createHistory(opts) {
  let currentLocation = opts.getLocation();
  let unsub = () => {
  };
  let listeners = /* @__PURE__ */ new Set();
  let blockers = [];
  let queue = [];
  const tryFlush = () => {
    var _a, _b;
    if (blockers.length) {
      (_a = blockers[0]) == null ? void 0 : _a.call(blockers, tryFlush, () => {
        blockers = [];
        stopBlocking();
      });
      return;
    }
    while (queue.length) {
      (_b = queue.shift()) == null ? void 0 : _b();
    }
    onUpdate();
  };
  const queueTask = (task) => {
    queue.push(task);
    tryFlush();
  };
  const onUpdate = () => {
    currentLocation = opts.getLocation();
    listeners.forEach((listener) => listener());
  };
  return {
    get location() {
      return currentLocation;
    },
    listen: (cb) => {
      if (listeners.size === 0) {
        unsub = opts.listener(onUpdate);
      }
      listeners.add(cb);
      return () => {
        listeners.delete(cb);
        if (listeners.size === 0) {
          unsub();
        }
      };
    },
    push: (path, state) => {
      queueTask(() => {
        opts.pushState(path, state);
      });
    },
    replace: (path, state) => {
      queueTask(() => {
        opts.replaceState(path, state);
      });
    },
    go: (index) => {
      queueTask(() => {
        opts.go(index);
      });
    },
    back: () => {
      queueTask(() => {
        opts.back();
      });
    },
    forward: () => {
      queueTask(() => {
        opts.forward();
      });
    },
    createHref: (str) => opts.createHref(str),
    block: (cb) => {
      blockers.push(cb);
      if (blockers.length === 1) {
        addEventListener(beforeUnloadEvent, beforeUnloadListener, {
          capture: true
        });
      }
      return () => {
        blockers = blockers.filter((b) => b !== cb);
        if (!blockers.length) {
          stopBlocking();
        }
      };
    }
  };
}
function createBrowserHistory(opts) {
  const getHref = (opts == null ? void 0 : opts.getHref) ?? (() => `${window.location.pathname}${window.location.hash}${window.location.search}`);
  const createHref = (opts == null ? void 0 : opts.createHref) ?? ((path) => path);
  const getLocation = () => parseLocation(getHref(), history.state);
  return createHistory({
    getLocation,
    listener: (onUpdate) => {
      window.addEventListener(popStateEvent, onUpdate);
      return () => {
        window.removeEventListener(popStateEvent, onUpdate);
      };
    },
    pushState: (path, state) => {
      window.history.pushState({
        ...state,
        key: createRandomKey()
      }, "", createHref(path));
    },
    replaceState: (path, state) => {
      window.history.replaceState({
        ...state,
        key: createRandomKey()
      }, "", createHref(path));
    },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    go: (n) => window.history.go(n),
    createHref: (path) => createHref(path)
  });
}
function createHashHistory() {
  return createBrowserHistory({
    getHref: () => window.location.hash.substring(1),
    createHref: (path) => `#${path}`
  });
}
function createMemoryHistory(opts = {
  initialEntries: ["/"]
}) {
  const entries = opts.initialEntries;
  let index = opts.initialIndex ?? entries.length - 1;
  let currentState = {};
  const getLocation = () => parseLocation(entries[index], currentState);
  return createHistory({
    getLocation,
    listener: () => {
      return () => {
      };
    },
    pushState: (path, state) => {
      currentState = {
        ...state,
        key: createRandomKey()
      };
      entries.push(path);
      index++;
    },
    replaceState: (path, state) => {
      currentState = {
        ...state,
        key: createRandomKey()
      };
      entries[index] = path;
    },
    back: () => {
      index--;
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
    },
    go: (n) => window.history.go(n),
    createHref: (path) => path
  });
}
function parseLocation(href, state) {
  let hashIndex = href.indexOf("#");
  let searchIndex = href.indexOf("?");
  return {
    href,
    pathname: href.substring(0, hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length),
    hash: hashIndex > -1 ? href.substring(hashIndex, searchIndex) : "",
    search: searchIndex > -1 ? href.substring(searchIndex) : "",
    state
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}
function last(arr) {
  return arr[arr.length - 1];
}
function isFunction(d) {
  return typeof d === "function";
}
function functionalUpdate(updater, previous) {
  if (isFunction(updater)) {
    return updater(previous);
  }
  return updater;
}
function pick(parent, keys) {
  return keys.reduce((obj, key) => {
    obj[key] = parent[key];
    return obj;
  }, {});
}
function replaceEqualDeep(prev, _next) {
  if (prev === _next) {
    return prev;
  }
  const next = _next;
  const array = Array.isArray(prev) && Array.isArray(next);
  if (array || isPlainObject(prev) && isPlainObject(next)) {
    const prevSize = array ? prev.length : Object.keys(prev).length;
    const nextItems = array ? next : Object.keys(next);
    const nextSize = nextItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < nextSize; i++) {
      const key = array ? i : nextItems[i];
      copy[key] = replaceEqualDeep(prev[key], next[key]);
      if (copy[key] === prev[key]) {
        equalItems++;
      }
    }
    return prevSize === nextSize && equalItems === prevSize ? prev : copy;
  }
  return next;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, index) => partialDeepEqual(item, b[index]));
  }
  return false;
}
function joinPaths(paths) {
  return cleanPath(paths.filter(Boolean).join("/"));
}
function cleanPath(path) {
  return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}
function resolvePath(basepath, base, to) {
  base = base.replace(new RegExp(`^${basepath}`), "/");
  to = to.replace(new RegExp(`^${basepath}`), "/");
  let baseSegments = parsePathname(base);
  const toSegments = parsePathname(to);
  toSegments.forEach((toSegment, index) => {
    var _a;
    if (toSegment.value === "/") {
      if (!index) {
        baseSegments = [toSegment];
      } else if (index === toSegments.length - 1) {
        baseSegments.push(toSegment);
      } else
        ;
    } else if (toSegment.value === "..") {
      if (baseSegments.length > 1 && ((_a = last(baseSegments)) == null ? void 0 : _a.value) === "/") {
        baseSegments.pop();
      }
      baseSegments.pop();
    } else if (toSegment.value === ".") {
      return;
    } else {
      baseSegments.push(toSegment);
    }
  });
  const joined = joinPaths([basepath, ...baseSegments.map((d) => d.value)]);
  return cleanPath(joined);
}
function parsePathname(pathname) {
  if (!pathname) {
    return [];
  }
  pathname = cleanPath(pathname);
  const segments = [];
  if (pathname.slice(0, 1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  if (!pathname) {
    return segments;
  }
  const split = pathname.split("/").filter(Boolean);
  segments.push(...split.map((part) => {
    if (part === "$" || part === "*") {
      return {
        type: "wildcard",
        value: part
      };
    }
    if (part.charAt(0) === "$") {
      return {
        type: "param",
        value: part
      };
    }
    return {
      type: "pathname",
      value: part
    };
  }));
  if (pathname.slice(-1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  return segments;
}
function interpolatePath(path, params, leaveWildcard) {
  const interpolatedPathSegments = parsePathname(path);
  return joinPaths(interpolatedPathSegments.map((segment) => {
    if (["$", "*"].includes(segment.value) && !leaveWildcard) {
      return "";
    }
    if (segment.type === "param") {
      return params[segment.value.substring(1)] ?? "";
    }
    return segment.value;
  }));
}
function matchPathname(basepath, currentPathname, matchLocation) {
  const pathParams = matchByPath(basepath, currentPathname, matchLocation);
  if (matchLocation.to && !pathParams) {
    return;
  }
  return pathParams ?? {};
}
function matchByPath(basepath, from, matchLocation) {
  var _a;
  if (!from.startsWith(basepath)) {
    return void 0;
  }
  from = basepath != "/" ? from.substring(basepath.length) : from;
  const baseSegments = parsePathname(from);
  const to = `${matchLocation.to ?? "$"}`;
  const routeSegments = parsePathname(to);
  if (((_a = last(baseSegments)) == null ? void 0 : _a.value) === "/") {
    baseSegments.pop();
  }
  const params = {};
  let isMatch = (() => {
    for (let i = 0; i < Math.max(baseSegments.length, routeSegments.length); i++) {
      const baseSegment = baseSegments[i];
      const routeSegment = routeSegments[i];
      const isLastRouteSegment = i === routeSegments.length - 1;
      const isLastBaseSegment = i === baseSegments.length - 1;
      if (routeSegment) {
        if (routeSegment.type === "wildcard") {
          if (baseSegment == null ? void 0 : baseSegment.value) {
            params["*"] = joinPaths(baseSegments.slice(i).map((d) => d.value));
            return true;
          }
          return false;
        }
        if (routeSegment.type === "pathname") {
          if (routeSegment.value === "/" && !(baseSegment == null ? void 0 : baseSegment.value)) {
            return true;
          }
          if (baseSegment) {
            if (matchLocation.caseSensitive) {
              if (routeSegment.value !== baseSegment.value) {
                return false;
              }
            } else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) {
              return false;
            }
          }
        }
        if (!baseSegment) {
          return false;
        }
        if (routeSegment.type === "param") {
          if ((baseSegment == null ? void 0 : baseSegment.value) === "/") {
            return false;
          }
          if (baseSegment.value.charAt(0) !== "$") {
            params[routeSegment.value.substring(1)] = baseSegment.value;
          }
        }
      }
      if (isLastRouteSegment && !isLastBaseSegment) {
        return !!matchLocation.fuzzy;
      }
    }
    return true;
  })();
  return isMatch ? params : void 0;
}
function encode(obj, pfx) {
  var k, i, tmp, str = "";
  for (k in obj) {
    if ((tmp = obj[k]) !== void 0) {
      if (Array.isArray(tmp)) {
        for (i = 0; i < tmp.length; i++) {
          str && (str += "&");
          str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp[i]);
        }
      } else {
        str && (str += "&");
        str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp);
      }
    }
  }
  return (pfx || "") + str;
}
function toValue(mix) {
  if (!mix)
    return "";
  var str = decodeURIComponent(mix);
  if (str === "false")
    return false;
  if (str === "true")
    return true;
  if (str.charAt(0) === "0")
    return str;
  return +str * 0 === 0 ? +str : str;
}
function decode(str) {
  var tmp, k, out = {}, arr = str.split("&");
  while (tmp = arr.shift()) {
    tmp = tmp.split("=");
    k = tmp.shift();
    if (out[k] !== void 0) {
      out[k] = [].concat(out[k], toValue(tmp.shift()));
    } else {
      out[k] = toValue(tmp.shift());
    }
  }
  return out;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function lazy2(importer) {
  const lazyComp = React.lazy(importer);
  const finalComp = lazyComp;
  finalComp.preload = async () => {
    {
      await importer();
    }
  };
  return finalComp;
}
function useLinkProps(options) {
  const router = useRouterContext();
  const {
    // custom props
    type,
    children,
    target,
    activeProps = () => ({
      className: "active"
    }),
    inactiveProps = () => ({}),
    activeOptions,
    disabled,
    // fromCurrent,
    hash,
    search,
    params,
    to = ".",
    preload,
    preloadDelay,
    replace,
    // element props
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ...rest
  } = options;
  const linkInfo = router.buildLink(options);
  if (linkInfo.type === "external") {
    const {
      href
    } = linkInfo;
    return {
      href
    };
  }
  const {
    handleClick,
    handleFocus,
    handleEnter,
    handleLeave,
    handleTouchStart,
    isActive,
    next
  } = linkInfo;
  const reactHandleClick = (e) => {
    if (React.startTransition) {
      React.startTransition(() => {
        handleClick(e);
      });
    } else {
      handleClick(e);
    }
  };
  const composeHandlers = (handlers) => (e) => {
    if (e.persist)
      e.persist();
    handlers.filter(Boolean).forEach((handler) => {
      if (e.defaultPrevented)
        return;
      handler(e);
    });
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? {} : {};
  const resolvedInactiveProps = isActive ? {} : functionalUpdate(inactiveProps, {}) ?? {};
  return {
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    ...rest,
    href: disabled ? void 0 : next.href,
    onClick: composeHandlers([onClick, reactHandleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    target,
    style: {
      ...style,
      ...resolvedActiveProps.style,
      ...resolvedInactiveProps.style
    },
    className: [className, resolvedActiveProps.className, resolvedInactiveProps.className].filter(Boolean).join(" ") || void 0,
    ...disabled ? {
      role: "link",
      "aria-disabled": true
    } : void 0,
    ["data-status"]: isActive ? "active" : void 0
  };
}
var Link = React.forwardRef((props, ref) => {
  const linkProps = useLinkProps(props);
  return React.createElement("a", _extends({
    ref
  }, linkProps, {
    children: typeof props.children === "function" ? props.children({
      isActive: linkProps["data-status"] === "active"
    }) : props.children
  }));
});
function Navigate(props) {
  const router = useRouterContext();
  React.useLayoutEffect(() => {
    router.navigate(props);
  }, []);
  return null;
}
var matchesContext = React.createContext(null);
var routerContext = React.createContext(null);
function RouterProvider({
  router,
  ...rest
}) {
  router.update(rest);
  const currentMatches = useStore(router.__store, (s) => s.currentMatches);
  React.useEffect(router.mount, [router]);
  return React.createElement(routerContext.Provider, {
    value: {
      router
    }
  }, React.createElement(matchesContext.Provider, {
    value: [void 0, ...currentMatches]
  }, React.createElement(CatchBoundary, {
    errorComponent: ErrorComponent,
    onCatch: () => {
      tiny_warning_esm_default(false, `Error in router! Consider setting an 'errorComponent' in your RootRoute! 👍`);
    }
  }, React.createElement(Outlet, null))));
}
function useRouterContext() {
  const value = React.useContext(routerContext);
  tiny_warning_esm_default(value, "useRouter must be used inside a <Router> component!");
  useStore(value.router.__store);
  return value.router;
}
function useRouter(track) {
  const router = useRouterContext();
  useStore(router.__store, track);
  return router;
}
function useMatches() {
  return React.useContext(matchesContext);
}
function useMatch(opts) {
  const router = useRouterContext();
  const nearestMatch = useMatches()[0];
  const match = (opts == null ? void 0 : opts.from) ? router.state.currentMatches.find((d) => d.route.id === (opts == null ? void 0 : opts.from)) : nearestMatch;
  invariant(match, `Could not find ${(opts == null ? void 0 : opts.from) ? `an active match from "${opts.from}"` : "a nearest match!"}`);
  if ((opts == null ? void 0 : opts.strict) ?? true) {
    invariant(nearestMatch.route.id == (match == null ? void 0 : match.route.id), `useMatch("${match == null ? void 0 : match.route.id}") is being called in a component that is meant to render the '${nearestMatch.route.id}' route. Did you mean to 'useMatch("${match == null ? void 0 : match.route.id}", { strict: false })' or 'useRoute("${match == null ? void 0 : match.route.id}")' instead?`);
  }
  useStore(match.__store, (d) => {
    var _a;
    return ((_a = opts == null ? void 0 : opts.track) == null ? void 0 : _a.call(opts, match)) ?? match;
  });
  return match;
}
function useLoader(opts) {
  const {
    track,
    ...matchOpts
  } = opts;
  const match = useMatch(matchOpts);
  useStore(match.__store, (d) => {
    var _a;
    return ((_a = opts == null ? void 0 : opts.track) == null ? void 0 : _a.call(opts, d.loader)) ?? d.loader;
  });
  return match.state.loader;
}
function useSearch(opts) {
  const {
    track,
    ...matchOpts
  } = opts;
  const match = useMatch(matchOpts);
  useStore(match.__store, (d) => {
    var _a;
    return ((_a = opts == null ? void 0 : opts.track) == null ? void 0 : _a.call(opts, d.search)) ?? d.search;
  });
  return match.state.search;
}
function useParams(opts) {
  var _a;
  const router = useRouterContext();
  useStore(router.__store, (d) => {
    var _a2, _b;
    const params = (_a2 = last(d.currentMatches)) == null ? void 0 : _a2.params;
    return ((_b = opts == null ? void 0 : opts.track) == null ? void 0 : _b.call(opts, params)) ?? params;
  });
  return (_a = last(router.state.currentMatches)) == null ? void 0 : _a.params;
}
function useNavigate(defaultOpts) {
  const router = useRouterContext();
  return React.useCallback((opts) => {
    return router.navigate({
      ...defaultOpts,
      ...opts
    });
  }, []);
}
function useMatchRoute() {
  const router = useRouterContext();
  return React.useCallback((opts) => {
    const {
      pending,
      caseSensitive,
      ...rest
    } = opts;
    return router.matchRoute(rest, {
      pending,
      caseSensitive
    });
  }, []);
}
function MatchRoute(props) {
  const matchRoute = useMatchRoute();
  const params = matchRoute(props);
  if (!params) {
    return null;
  }
  if (typeof props.children === "function") {
    return props.children(params);
  }
  return params ? props.children : null;
}
function Outlet() {
  const matches = useMatches().slice(1);
  const match = matches[0];
  if (!match) {
    return null;
  }
  return React.createElement(SubOutlet, {
    matches,
    match
  });
}
function SubOutlet({
  matches,
  match
}) {
  const router = useRouterContext();
  useStore(match.__store, (store) => [store.status, store.error]);
  const defaultPending = React.useCallback(() => null, []);
  const PendingComponent = match.pendingComponent ?? router.options.defaultPendingComponent ?? defaultPending;
  const errorComponent = match.errorComponent ?? router.options.defaultErrorComponent;
  const ResolvedSuspenseBoundary = match.route.options.wrapInSuspense ?? true ? React.Suspense : SafeFragment;
  const ResolvedCatchBoundary = errorComponent ? CatchBoundary : SafeFragment;
  return React.createElement(matchesContext.Provider, {
    value: matches
  }, React.createElement(ResolvedSuspenseBoundary, {
    fallback: React.createElement(PendingComponent, null)
  }, React.createElement(ResolvedCatchBoundary, {
    key: match.route.id,
    errorComponent,
    onCatch: () => {
      tiny_warning_esm_default(false, `Error in route match: ${match.id}`);
    }
  }, React.createElement(Inner, {
    match
  }))));
}
function Inner(props) {
  const router = useRouterContext();
  if (props.match.state.status === "error") {
    throw props.match.state.error;
  }
  if (props.match.state.status === "pending") {
    throw props.match.__loadPromise;
  }
  if (props.match.state.status === "success") {
    return React.createElement(props.match.component ?? router.options.defaultComponent ?? Outlet, {
      useLoader: props.match.route.useLoader,
      useMatch: props.match.route.useMatch,
      useContext: props.match.route.useContext,
      useSearch: props.match.route.useSearch
    });
  }
  invariant(false, "Idle routeMatch status encountered during rendering! You should never see this. File an issue!");
}
function SafeFragment(props) {
  return React.createElement(React.Fragment, null, props.children);
}
var CatchBoundary = class extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      error: false,
      info: void 0
    });
  }
  componentDidCatch(error, info) {
    this.props.onCatch(error, info);
    console.error(error);
    this.setState({
      error,
      info
    });
  }
  render() {
    return React.createElement(CatchBoundaryInner, _extends({}, this.props, {
      errorState: this.state,
      reset: () => this.setState({})
    }));
  }
};
function CatchBoundaryInner(props) {
  const [activeErrorState, setActiveErrorState] = React.useState(props.errorState);
  const router = useRouterContext();
  const errorComponent = props.errorComponent ?? ErrorComponent;
  const prevKeyRef = React.useRef("");
  React.useEffect(() => {
    if (activeErrorState) {
      if (router.state.currentLocation.key !== prevKeyRef.current) {
        setActiveErrorState({});
      }
    }
    prevKeyRef.current = router.state.currentLocation.key;
  }, [activeErrorState, router.state.currentLocation.key]);
  React.useEffect(() => {
    if (props.errorState.error) {
      setActiveErrorState(props.errorState);
    }
  }, [props.errorState.error]);
  if (props.errorState.error && activeErrorState.error) {
    return React.createElement(errorComponent, activeErrorState);
  }
  return props.children;
}
function ErrorComponent({
  error
}) {
  return React.createElement("div", {
    style: {
      padding: ".5rem",
      maxWidth: "100%"
    }
  }, React.createElement("strong", {
    style: {
      fontSize: "1.2rem"
    }
  }, "Something went wrong!"), React.createElement("div", {
    style: {
      height: ".5rem"
    }
  }), React.createElement("div", null, React.createElement("pre", {
    style: {
      fontSize: ".7em",
      border: "1px solid red",
      borderRadius: ".25rem",
      padding: ".5rem",
      color: "red",
      overflow: "auto"
    }
  }, error.message ? React.createElement("code", null, error.message) : null)));
}
function useBlocker(message, condition = true) {
  const router = useRouter();
  React.useEffect(() => {
    if (!condition)
      return;
    let unblock = router.history.block((retry, cancel) => {
      if (window.confirm(message)) {
        unblock();
        retry();
      } else {
        cancel();
      }
    });
    return unblock;
  });
}
function Block({
  message,
  condition,
  children
}) {
  useBlocker(message, condition);
  return children ?? null;
}
var rootRouteId = "__root__";
var Route = class {
  // Set up in this.init()
  // customId!: TCustomId
  // Optional
  constructor(options) {
    __publicField(this, "init", (opts) => {
      var _a, _b;
      this.originalIndex = opts.originalIndex;
      this.router = opts.router;
      const allOptions = this.options;
      const isRoot = !(allOptions == null ? void 0 : allOptions.path) && !(allOptions == null ? void 0 : allOptions.id);
      this.parentRoute = (_b = (_a = this.options) == null ? void 0 : _a.getParentRoute) == null ? void 0 : _b.call(_a);
      if (isRoot) {
        this.path = rootRouteId;
      } else {
        invariant(this.parentRoute, `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`);
      }
      let path = isRoot ? rootRouteId : allOptions.path;
      if (path && path !== "/") {
        path = trimPath(path);
      }
      const customId = (allOptions == null ? void 0 : allOptions.id) || path;
      let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id, customId]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : trimPathRight(joinPaths([this.parentRoute.fullPath, path]));
      this.path = path;
      this.id = id;
      this.fullPath = fullPath;
    });
    __publicField(this, "addChildren", (children) => {
      this.children = children;
      return this;
    });
    __publicField(this, "useMatch", (opts) => {
      return useMatch({
        ...opts,
        from: this.id
      });
    });
    __publicField(this, "useLoader", (opts) => {
      return useLoader({
        ...opts,
        from: this.id
      });
    });
    __publicField(this, "useContext", (opts) => {
      return useMatch({
        ...opts,
        from: this.id
      }).context;
    });
    __publicField(this, "useSearch", (opts) => {
      return useSearch({
        ...opts,
        from: this.id
      });
    });
    this.options = options || {};
    this.isRoot = !(options == null ? void 0 : options.getParentRoute);
  }
};
var _RootRoute = class extends Route {
  constructor(options) {
    super(options);
  }
};
var RootRoute = _RootRoute;
__publicField(RootRoute, "withRouterContext", () => {
  return (options) => new _RootRoute(options);
});
var defaultParseSearch = parseSearchWith(JSON.parse);
var defaultStringifySearch = stringifySearchWith(JSON.stringify);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr.substring(0, 1) === "?") {
      searchStr = searchStr.substring(1);
    }
    let query = decode(searchStr);
    for (let key in query) {
      const value = query[key];
      if (typeof value === "string") {
        try {
          query[key] = parser(value);
        } catch (err) {
        }
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify) {
  return (search) => {
    search = {
      ...search
    };
    if (search) {
      Object.keys(search).forEach((key) => {
        const val = search[key];
        if (typeof val === "undefined" || val === void 0) {
          delete search[key];
        } else if (val && typeof val === "object" && val !== null) {
          try {
            search[key] = stringify(val);
          } catch (err) {
          }
        }
      });
    }
    const searchStr = encode(search).toString();
    return searchStr ? `?${searchStr}` : "";
  };
}
var defaultFetchServerDataFn = async ({
  router,
  routeMatch
}) => {
  const next = router.buildNext({
    to: ".",
    search: (d) => ({
      ...d ?? {},
      __data: {
        matchId: routeMatch.id
      }
    })
  });
  const res = await fetch(next.href, {
    method: "GET",
    signal: routeMatch.abortController.signal
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch match data");
};
var _unsubHistory, _buildRouteTree, _parseLocation, _buildLocation, _commitLocation;
var Router = class {
  constructor(options) {
    __privateAdd(this, _unsubHistory, void 0);
    __publicField(this, "startedLoadingAt", Date.now());
    __publicField(this, "resolveNavigation", () => {
    });
    __publicField(this, "reset", () => {
      this.__store.setState((s) => Object.assign(s, getInitialRouterState()));
    });
    __publicField(this, "mount", () => {
      if (!isServer) {
        if (!this.state.currentMatches.length) {
          this.safeLoad();
        }
      }
      return () => {
      };
    });
    __publicField(this, "hydrate", async (__do_not_use_server_ctx) => {
      var _a, _b;
      let ctx = __do_not_use_server_ctx;
      if (typeof document !== "undefined") {
        ctx = window.__DEHYDRATED__;
        invariant(ctx, "Expected to find a __DEHYDRATED__ property on window... but we did not. THIS IS VERY BAD");
      }
      (_b = (_a = this.options).hydrate) == null ? void 0 : _b.call(_a, ctx);
      return await this.load();
    });
    __publicField(this, "update", (opts) => {
      Object.assign(this.options, opts);
      this.context = this.options.context;
      if (!this.history || this.options.history && this.options.history !== this.history) {
        if (__privateGet(this, _unsubHistory)) {
          __privateGet(this, _unsubHistory).call(this);
        }
        this.history = this.options.history ?? (isServer ? createMemoryHistory() : createBrowserHistory());
        const parsedLocation = __privateGet(this, _parseLocation).call(this);
        this.__store.setState((s) => ({
          ...s,
          latestLocation: parsedLocation,
          currentLocation: parsedLocation
        }));
        __privateSet(this, _unsubHistory, this.history.listen(() => {
          this.safeLoad({
            next: __privateGet(this, _parseLocation).call(this, this.state.latestLocation)
          });
        }));
      }
      const {
        basepath,
        routeTree
      } = this.options;
      this.basepath = `/${trimPath(basepath ?? "") ?? ""}`;
      if (routeTree) {
        this.routesById = {};
        this.routeTree = __privateGet(this, _buildRouteTree).call(this, routeTree);
      }
      return this;
    });
    __publicField(this, "buildNext", (opts) => {
      const next = __privateGet(this, _buildLocation).call(this, opts);
      const __matches = this.matchRoutes(next.pathname);
      return __privateGet(this, _buildLocation).call(this, {
        ...opts,
        __matches
      });
    });
    __publicField(this, "cancelMatches", () => {
      [...this.state.currentMatches, ...this.state.pendingMatches || []].forEach((match) => {
        match.cancel();
      });
    });
    __publicField(this, "safeLoad", (opts) => {
      this.load(opts).catch((err) => {
        console.warn(err);
        invariant(false, "Encountered an error during router.load()! ☝️.");
      });
    });
    __publicField(this, "load", async (opts) => {
      var _a, _b;
      let now = Date.now();
      const startedAt = now;
      this.startedLoadingAt = startedAt;
      this.cancelMatches();
      let matches;
      this.__store.batch(() => {
        if (opts == null ? void 0 : opts.next) {
          this.__store.setState((s) => ({
            ...s,
            latestLocation: opts.next
          }));
        }
        matches = this.matchRoutes(this.state.latestLocation.pathname, {
          strictParseParams: true
        });
        this.__store.setState((s) => ({
          ...s,
          status: "pending",
          pendingMatches: matches,
          pendingLocation: this.state.latestLocation
        }));
      });
      await this.loadMatches(
        matches,
        this.state.pendingLocation
        // opts
      );
      if (this.startedLoadingAt !== startedAt) {
        return this.navigationPromise;
      }
      const previousMatches = this.state.currentMatches;
      const exiting = [], staying = [];
      previousMatches.forEach((d) => {
        if (matches.find((dd) => dd.id === d.id)) {
          staying.push(d);
        } else {
          exiting.push(d);
        }
      });
      const entering = matches.filter((d) => {
        return !previousMatches.find((dd) => dd.id === d.id);
      });
      now = Date.now();
      exiting.forEach((d) => {
        var _a2;
        (_a2 = d.__onExit) == null ? void 0 : _a2.call(d, {
          params: d.params,
          search: d.state.routeSearch
        });
        if (d.state.status === "error") {
          this.__store.setState((s) => ({
            ...s,
            status: "idle",
            error: void 0
          }));
        }
      });
      staying.forEach((d) => {
        var _a2, _b2;
        (_b2 = (_a2 = d.route.options).onTransition) == null ? void 0 : _b2.call(_a2, {
          params: d.params,
          search: d.state.routeSearch
        });
      });
      entering.forEach((d) => {
        var _a2, _b2;
        d.__onExit = (_b2 = (_a2 = d.route.options).onLoaded) == null ? void 0 : _b2.call(_a2, {
          params: d.params,
          search: d.state.search
        });
      });
      const prevLocation = this.state.currentLocation;
      this.__store.setState((s) => ({
        ...s,
        status: "idle",
        currentLocation: this.state.latestLocation,
        currentMatches: matches,
        pendingLocation: void 0,
        pendingMatches: void 0
      }));
      matches.forEach((match) => {
        match.__commit();
      });
      if (prevLocation.href !== this.state.currentLocation.href) {
        (_b = (_a = this.options).onRouteChange) == null ? void 0 : _b.call(_a);
      }
      this.resolveNavigation();
    });
    __publicField(this, "getRoute", (id) => {
      const route = this.routesById[id];
      invariant(route, `Route with id "${id}" not found`);
      return route;
    });
    __publicField(this, "loadRoute", async (navigateOpts = this.state.latestLocation) => {
      const next = this.buildNext(navigateOpts);
      const matches = this.matchRoutes(next.pathname, {
        strictParseParams: true
      });
      await this.loadMatches(matches, next);
      return matches;
    });
    __publicField(this, "preloadRoute", async (navigateOpts = this.state.latestLocation) => {
      const next = this.buildNext(navigateOpts);
      const matches = this.matchRoutes(next.pathname, {
        strictParseParams: true
      });
      await this.loadMatches(matches, next, {
        preload: true
      });
      return matches;
    });
    __publicField(this, "matchRoutes", (pathname, opts) => {
      const matches = [];
      if (!this.routeTree) {
        return matches;
      }
      const existingMatches = [...this.state.currentMatches, ...this.state.pendingMatches ?? []];
      const findInRouteTree = async (routes) => {
        var _a, _b;
        const parentMatch = last(matches);
        let params = (parentMatch == null ? void 0 : parentMatch.params) ?? {};
        const filteredRoutes = ((_b = (_a = this.options).filterRoutes) == null ? void 0 : _b.call(_a, routes)) ?? routes;
        let matchingRoutes = [];
        const findMatchInRoutes = (parentRoutes, routes2) => {
          routes2.some((route) => {
            var _a2, _b2;
            const children = route.children;
            if (!route.path && (children == null ? void 0 : children.length)) {
              return findMatchInRoutes([...matchingRoutes, route], children);
            }
            const fuzzy = !!(route.path !== "/" || (children == null ? void 0 : children.length));
            const matchParams = matchPathname(this.basepath, pathname, {
              to: route.fullPath,
              fuzzy,
              caseSensitive: route.options.caseSensitive ?? this.options.caseSensitive
            });
            if (matchParams) {
              let parsedParams;
              try {
                parsedParams = ((_b2 = (_a2 = route.options).parseParams) == null ? void 0 : _b2.call(_a2, matchParams)) ?? matchParams;
              } catch (err) {
                if (opts == null ? void 0 : opts.strictParseParams) {
                  throw err;
                }
              }
              params = {
                ...params,
                ...parsedParams
              };
            }
            if (!!matchParams) {
              matchingRoutes = [...parentRoutes, route];
            }
            return !!matchingRoutes.length;
          });
          return !!matchingRoutes.length;
        };
        findMatchInRoutes([], filteredRoutes);
        if (!matchingRoutes.length) {
          return;
        }
        matchingRoutes.forEach((foundRoute2) => {
          const interpolatedPath = interpolatePath(foundRoute2.path, params);
          const matchId = interpolatePath(foundRoute2.id, params, true);
          const match = existingMatches.find((d) => d.id === matchId) || new RouteMatch(this, foundRoute2, {
            id: matchId,
            params,
            pathname: joinPaths([this.basepath, interpolatedPath])
          });
          matches.push(match);
        });
        const foundRoute = last(matchingRoutes);
        const foundChildren = foundRoute.children;
        if (foundChildren == null ? void 0 : foundChildren.length) {
          findInRouteTree(foundChildren);
        }
      };
      findInRouteTree([this.routeTree]);
      return matches;
    });
    __publicField(this, "loadMatches", async (resolvedMatches, location, opts) => {
      let firstBadMatchIndex;
      try {
        await Promise.all(resolvedMatches.map(async (match, index) => {
          var _a, _b;
          try {
            await ((_b = (_a = match.route.options).beforeLoad) == null ? void 0 : _b.call(_a, {
              router: this,
              match
            }));
          } catch (err) {
            if (isRedirect(err)) {
              throw err;
            }
            firstBadMatchIndex = firstBadMatchIndex ?? index;
            const errorHandler = match.route.options.onBeforeLoadError ?? match.route.options.onError;
            try {
              errorHandler == null ? void 0 : errorHandler(err);
            } catch (errorHandlerErr) {
              if (isRedirect(errorHandlerErr)) {
                throw errorHandlerErr;
              }
              match.__store.setState((s) => ({
                ...s,
                error: errorHandlerErr,
                status: "error",
                updatedAt: Date.now()
              }));
              return;
            }
            match.__store.setState((s) => ({
              ...s,
              error: err,
              status: "error",
              updatedAt: Date.now()
            }));
          }
        }));
      } catch (err) {
        if (isRedirect(err)) {
          if (!(opts == null ? void 0 : opts.preload)) {
            this.navigate(err);
          }
          return;
        }
        throw err;
      }
      const validResolvedMatches = resolvedMatches.slice(0, firstBadMatchIndex);
      const matchPromises = validResolvedMatches.map(async (match, index) => {
        const parentMatch = validResolvedMatches[index - 1];
        match.__load({
          preload: opts == null ? void 0 : opts.preload,
          location,
          parentMatch
        });
        await match.__loadPromise;
        if (parentMatch) {
          await parentMatch.__loadPromise;
        }
      });
      await Promise.all(matchPromises);
    });
    __publicField(this, "reload", () => {
      this.navigate({
        fromCurrent: true,
        replace: true,
        search: true
      });
    });
    __publicField(this, "resolvePath", (from, path) => {
      return resolvePath(this.basepath, from, cleanPath(path));
    });
    __publicField(this, "navigate", async ({
      from,
      to = "",
      search,
      hash,
      replace,
      params
    }) => {
      const toString = String(to);
      const fromString = typeof from === "undefined" ? from : String(from);
      let isExternal;
      try {
        new URL(`${toString}`);
        isExternal = true;
      } catch (e) {
      }
      invariant(!isExternal, "Attempting to navigate to external url with this.navigate!");
      return __privateGet(this, _commitLocation).call(this, {
        from: fromString,
        to: toString,
        search,
        hash,
        replace,
        params
      });
    });
    __publicField(this, "matchRoute", (location, opts) => {
      location = {
        ...location,
        to: location.to ? this.resolvePath(location.from ?? "", location.to) : void 0
      };
      const next = this.buildNext(location);
      const baseLocation = (opts == null ? void 0 : opts.pending) ? this.state.pendingLocation : this.state.currentLocation;
      if (!baseLocation) {
        return false;
      }
      const match = matchPathname(this.basepath, baseLocation.pathname, {
        ...opts,
        to: next.pathname
      });
      if (!match) {
        return false;
      }
      if ((opts == null ? void 0 : opts.includeSearch) ?? true) {
        return partialDeepEqual(baseLocation.search, next.search) ? match : false;
      }
      return match;
    });
    __publicField(this, "buildLink", ({
      from,
      to = ".",
      search,
      params,
      hash,
      target,
      replace,
      activeOptions,
      preload,
      preloadDelay: userPreloadDelay,
      disabled
    }) => {
      try {
        new URL(`${to}`);
        return {
          type: "external",
          href: to
        };
      } catch (e) {
      }
      const nextOpts = {
        from,
        to,
        search,
        params,
        hash,
        replace
      };
      const next = this.buildNext(nextOpts);
      preload = preload ?? this.options.defaultPreload;
      const preloadDelay = userPreloadDelay ?? this.options.defaultPreloadDelay ?? 0;
      const currentPathSplit = this.state.currentLocation.pathname.split("/");
      const nextPathSplit = next.pathname.split("/");
      const pathIsFuzzyEqual = nextPathSplit.every((d, i) => d === currentPathSplit[i]);
      const pathTest = (activeOptions == null ? void 0 : activeOptions.exact) ? this.state.currentLocation.pathname === next.pathname : pathIsFuzzyEqual;
      const hashTest = (activeOptions == null ? void 0 : activeOptions.includeHash) ? this.state.currentLocation.hash === next.hash : true;
      const searchTest = (activeOptions == null ? void 0 : activeOptions.includeSearch) ?? true ? partialDeepEqual(this.state.currentLocation.search, next.search) : true;
      const isActive = pathTest && hashTest && searchTest;
      const handleClick = (e) => {
        if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!target || target === "_self") && e.button === 0) {
          e.preventDefault();
          __privateGet(this, _commitLocation).call(this, nextOpts);
        }
      };
      const handleFocus = (e) => {
        if (preload) {
          this.preloadRoute(nextOpts).catch((err) => {
            console.warn(err);
            console.warn("Error preloading route! ☝️");
          });
        }
      };
      const handleTouchStart = (e) => {
        this.preloadRoute(nextOpts).catch((err) => {
          console.warn(err);
          console.warn("Error preloading route! ☝️");
        });
      };
      const handleEnter = (e) => {
        const target2 = e.target || {};
        if (preload) {
          if (target2.preloadTimeout) {
            return;
          }
          target2.preloadTimeout = setTimeout(() => {
            target2.preloadTimeout = null;
            this.preloadRoute(nextOpts).catch((err) => {
              console.warn(err);
              console.warn("Error preloading route! ☝️");
            });
          }, preloadDelay);
        }
      };
      const handleLeave = (e) => {
        const target2 = e.target || {};
        if (target2.preloadTimeout) {
          clearTimeout(target2.preloadTimeout);
          target2.preloadTimeout = null;
        }
      };
      return {
        type: "internal",
        next,
        handleFocus,
        handleClick,
        handleEnter,
        handleLeave,
        handleTouchStart,
        isActive,
        disabled
      };
    });
    // dehydrate = (): DehydratedRouter => {
    //   return {
    //     state: {
    //       ...pick(this.state, [
    //         'latestLocation',
    //         'currentLocation',
    //         'status',
    //         'lastUpdated',
    //       ]),
    //       // currentMatches: this.state.currentMatches.map((match) => ({
    //       //   id: match.id,
    //       //   state: {
    //       //     status: match.state.status,
    //       //     // status: 'idle',
    //       //   },
    //       // })),
    //     },
    //   }
    // }
    // hydrate = (dehydratedRouter: DehydratedRouter) => {
    //   this.__store.setState((s) => {
    //     // Match the routes
    //     // const currentMatches = this.matchRoutes(
    //     //   dehydratedRouter.state.latestLocation.pathname,
    //     //   {
    //     //     strictParseParams: true,
    //     //   },
    //     // )
    //     // currentMatches.forEach((match, index) => {
    //     // const dehydratedMatch = dehydratedRouter.state.currentMatches[index]
    //     // invariant(
    //     //   dehydratedMatch && dehydratedMatch.id === match.id,
    //     //   'Oh no! There was a hydration mismatch when attempting to hydrate the state of the router! 😬',
    //     // )
    //     // match.__store.setState((s) => ({
    //     //   ...s,
    //     //   ...dehydratedMatch.state,
    //     // }))
    //     // })
    //     return {
    //       ...s,
    //       ...dehydratedRouter.state,
    //       // currentMatches,
    //     }
    //   })
    // }
    __privateAdd(this, _buildRouteTree, (routeTree) => {
      const recurseRoutes = (routes, parentRoute) => {
        routes.forEach((route, i) => {
          route.init({
            originalIndex: i,
            router: this
          });
          const existingRoute = this.routesById[route.id];
          invariant(!existingRoute, `Duplicate routes found with id: ${String(route.id)}`);
          this.routesById[route.id] = route;
          const children = route.children;
          if (children == null ? void 0 : children.length) {
            recurseRoutes(children);
            route.children = children.map((d, i2) => {
              var _a;
              const parsed = parsePathname(trimPathLeft(cleanPath(d.path ?? "/")));
              while (parsed.length > 1 && ((_a = parsed[0]) == null ? void 0 : _a.value) === "/") {
                parsed.shift();
              }
              let score = 0;
              parsed.forEach((d2, i3) => {
                let modifier = 1;
                while (i3--) {
                  modifier *= 1e-3;
                }
                if (d2.type === "pathname" && d2.value !== "/") {
                  score += 1 * modifier;
                } else if (d2.type === "param") {
                  score += 2 * modifier;
                } else if (d2.type === "wildcard") {
                  score += 3 * modifier;
                }
              });
              return {
                child: d,
                parsed,
                index: i2,
                score
              };
            }).sort((a, b) => {
              if (a.score !== b.score) {
                return a.score - b.score;
              }
              return a.index - b.index;
            }).map((d) => d.child);
          }
        });
      };
      recurseRoutes([routeTree]);
      const recurceCheckRoutes = (routes, parentRoute) => {
        routes.forEach((route) => {
          var _a;
          if (route.isRoot) {
            invariant(!parentRoute, "Root routes can only be used as the root of a route tree.");
          } else {
            invariant(parentRoute ? route.parentRoute === parentRoute : true, `Expected a route with path "${route.path}" to be passed to its parent route "${(_a = route.parentRoute) == null ? void 0 : _a.id}" in an addChildren() call, but was instead passed as a child of the "${parentRoute == null ? void 0 : parentRoute.id}" route.`);
          }
          if (route.children) {
            recurceCheckRoutes(route.children, route);
          }
        });
      };
      recurceCheckRoutes([routeTree], void 0);
      return routeTree;
    });
    __privateAdd(this, _parseLocation, (previousLocation) => {
      let {
        pathname,
        search,
        hash,
        state
      } = this.history.location;
      const parsedSearch = this.options.parseSearch(search);
      return {
        pathname,
        searchStr: search,
        search: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.search, parsedSearch),
        hash: hash.split("#").reverse()[0] ?? "",
        href: `${pathname}${search}${hash}`,
        state,
        key: (state == null ? void 0 : state.key) || "__init__"
      };
    });
    __privateAdd(this, _buildLocation, (dest = {}) => {
      var _a, _b, _c, _d;
      dest.fromCurrent = dest.fromCurrent ?? dest.to === "";
      const fromPathname = dest.fromCurrent ? this.state.latestLocation.pathname : dest.from ?? this.state.latestLocation.pathname;
      let pathname = resolvePath(this.basepath ?? "/", fromPathname, `${dest.to ?? ""}`);
      const fromMatches = this.matchRoutes(this.state.latestLocation.pathname, {
        strictParseParams: true
      });
      const prevParams = {
        ...(_a = last(fromMatches)) == null ? void 0 : _a.params
      };
      let nextParams = (dest.params ?? true) === true ? prevParams : functionalUpdate(dest.params, prevParams);
      if (nextParams) {
        (_b = dest.__matches) == null ? void 0 : _b.map((d) => d.route.options.stringifyParams).filter(Boolean).forEach((fn) => {
          nextParams = {
            ...nextParams,
            ...fn(nextParams)
          };
        });
      }
      pathname = interpolatePath(pathname, nextParams ?? {});
      const preSearchFilters = ((_c = dest.__matches) == null ? void 0 : _c.map((match) => match.route.options.preSearchFilters ?? []).flat().filter(Boolean)) ?? [];
      const postSearchFilters = ((_d = dest.__matches) == null ? void 0 : _d.map((match) => match.route.options.postSearchFilters ?? []).flat().filter(Boolean)) ?? [];
      const preFilteredSearch = (preSearchFilters == null ? void 0 : preSearchFilters.length) ? preSearchFilters == null ? void 0 : preSearchFilters.reduce((prev, next) => next(prev), this.state.latestLocation.search) : this.state.latestLocation.search;
      const destSearch = dest.search === true ? preFilteredSearch : dest.search ? functionalUpdate(dest.search, preFilteredSearch) ?? {} : (preSearchFilters == null ? void 0 : preSearchFilters.length) ? preFilteredSearch : {};
      const postFilteredSearch = (postSearchFilters == null ? void 0 : postSearchFilters.length) ? postSearchFilters.reduce((prev, next) => next(prev), destSearch) : destSearch;
      const search = replaceEqualDeep(this.state.latestLocation.search, postFilteredSearch);
      const searchStr = this.options.stringifySearch(search);
      let hash = dest.hash === true ? this.state.latestLocation.hash : functionalUpdate(dest.hash, this.state.latestLocation.hash);
      hash = hash ? `#${hash}` : "";
      const nextState = dest.state === true ? this.state.latestLocation.state : functionalUpdate(dest.state, this.state.latestLocation.state);
      return {
        pathname,
        search,
        searchStr,
        state: nextState,
        hash,
        href: this.history.createHref(`${pathname}${searchStr}${hash}`),
        key: dest.key
      };
    });
    __privateAdd(this, _commitLocation, async (location) => {
      const next = this.buildNext(location);
      const id = "" + Date.now() + Math.random();
      if (this.navigateTimeout)
        clearTimeout(this.navigateTimeout);
      let nextAction = "replace";
      if (!location.replace) {
        nextAction = "push";
      }
      const isSameUrl = this.state.latestLocation.href === next.href;
      if (isSameUrl && !next.key) {
        nextAction = "replace";
      }
      const href = `${next.pathname}${next.searchStr}${next.hash ? `${next.hash}` : ""}`;
      this.history[nextAction === "push" ? "push" : "replace"](href, {
        id,
        ...next.state
      });
      return this.navigationPromise = new Promise((resolve) => {
        const previousNavigationResolve = this.resolveNavigation;
        this.resolveNavigation = () => {
          previousNavigationResolve();
          resolve();
        };
      });
    });
    this.options = {
      defaultPreloadDelay: 50,
      context: void 0,
      ...options,
      stringifySearch: (options == null ? void 0 : options.stringifySearch) ?? defaultStringifySearch,
      parseSearch: (options == null ? void 0 : options.parseSearch) ?? defaultParseSearch,
      fetchServerDataFn: (options == null ? void 0 : options.fetchServerDataFn) ?? defaultFetchServerDataFn
    };
    this.__store = new Store(getInitialRouterState(), {
      onUpdate: (state) => {
        this.state = state;
      }
    });
    this.state = this.__store.state;
    this.update(options);
    const next = this.buildNext({
      hash: true,
      fromCurrent: true,
      search: true,
      state: true
    });
    if (this.state.latestLocation.href !== next.href) {
      __privateGet(this, _commitLocation).call(this, {
        ...next,
        replace: true
      });
    }
  }
};
_unsubHistory = new WeakMap();
_buildRouteTree = new WeakMap();
_parseLocation = new WeakMap();
_buildLocation = new WeakMap();
_commitLocation = new WeakMap();
var isServer = typeof window === "undefined" || !window.document.createElement;
function getInitialRouterState() {
  return {
    status: "idle",
    latestLocation: null,
    currentLocation: null,
    currentMatches: [],
    lastUpdated: Date.now()
  };
}
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function redirect(opts) {
  opts.isRedirect = true;
  return opts;
}
function isRedirect(obj) {
  return !!(obj == null ? void 0 : obj.isRedirect);
}
var componentTypes = ["component", "errorComponent", "pendingComponent"];
var _hasLoaders, _resolveSearchInfo, _resolveInfo, _latestId;
var RouteMatch = class {
  constructor(router, route, opts) {
    __publicField(this, "abortController", new AbortController());
    __privateAdd(this, _hasLoaders, () => {
      return !!(this.route.options.loader || componentTypes.some((d) => {
        var _a;
        return (_a = this.route.options[d]) == null ? void 0 : _a.preload;
      }));
    });
    __publicField(this, "__commit", () => {
      const {
        routeSearch,
        search,
        context,
        routeContext
      } = __privateGet(this, _resolveInfo).call(this, {
        location: this.router.state.currentLocation
      });
      this.context = context;
      this.routeContext = routeContext;
      this.__store.setState((s) => ({
        ...s,
        routeSearch: replaceEqualDeep(s.routeSearch, routeSearch),
        search: replaceEqualDeep(s.search, search)
      }));
    });
    __publicField(this, "cancel", () => {
      var _a;
      (_a = this.abortController) == null ? void 0 : _a.abort();
    });
    __privateAdd(this, _resolveSearchInfo, (opts) => {
      var _a;
      const parentSearchInfo = this.parentMatch ? __privateGet(_a = this.parentMatch, _resolveSearchInfo).call(_a, opts) : {
        search: opts.location.search,
        routeSearch: opts.location.search
      };
      try {
        const validator = typeof this.route.options.validateSearch === "object" ? this.route.options.validateSearch.parse : this.route.options.validateSearch;
        const routeSearch = (validator == null ? void 0 : validator(parentSearchInfo.search)) ?? {};
        const search = {
          ...parentSearchInfo.search,
          ...routeSearch
        };
        return {
          routeSearch,
          search
        };
      } catch (err) {
        if (isRedirect(err)) {
          throw err;
        }
        const errorHandler = this.route.options.onValidateSearchError ?? this.route.options.onError;
        errorHandler == null ? void 0 : errorHandler(err);
        const error = new Error("Invalid search params found", {
          cause: err
        });
        error.code = "INVALID_SEARCH_PARAMS";
        throw error;
      }
    });
    __privateAdd(this, _resolveInfo, (opts) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const {
        search,
        routeSearch
      } = __privateGet(this, _resolveSearchInfo).call(this, opts);
      try {
        const routeContext = ((_e = (_d = this.route.options).getContext) == null ? void 0 : _e.call(_d, {
          parentContext: ((_a = this.parentMatch) == null ? void 0 : _a.routeContext) ?? {},
          context: ((_b = this.parentMatch) == null ? void 0 : _b.context) ?? ((_c = this.router) == null ? void 0 : _c.options.context) ?? {},
          params: this.params,
          search
        })) || {};
        const context = {
          ...((_f = this.parentMatch) == null ? void 0 : _f.context) ?? ((_g = this.router) == null ? void 0 : _g.options.context),
          ...routeContext
        };
        return {
          routeSearch,
          search,
          context,
          routeContext
        };
      } catch (err) {
        (_i = (_h = this.route.options).onError) == null ? void 0 : _i.call(_h, err);
        throw err;
      }
    });
    __publicField(this, "__load", async (opts) => {
      this.parentMatch = opts.parentMatch;
      let info;
      try {
        info = __privateGet(this, _resolveInfo).call(this, opts);
      } catch (err) {
        if (isRedirect(err)) {
          if (!(opts == null ? void 0 : opts.preload)) {
            this.router.navigate(err);
          }
          return;
        }
        this.__store.setState((s) => ({
          ...s,
          status: "error",
          error: err
        }));
        return;
      }
      const {
        routeSearch,
        search,
        context,
        routeContext
      } = info;
      if (this.state.status === "pending") {
        return;
      }
      this.__loadPromise = Promise.resolve().then(async () => {
        const loadId = "" + Date.now() + Math.random();
        __privateSet(this, _latestId, loadId);
        const checkLatest = () => {
          return loadId !== __privateGet(this, _latestId) ? this.__loadPromise : void 0;
        };
        let latestPromise;
        if (this.state.status === "idle") {
          this.__store.setState((s) => ({
            ...s,
            status: "pending"
          }));
        }
        const componentsPromise = (async () => {
          await Promise.all(componentTypes.map(async (type) => {
            const component = this.route.options[type];
            if (component == null ? void 0 : component.preload) {
              await component.preload();
            }
          }));
        })();
        const loaderPromise = Promise.resolve().then(() => {
          if (this.route.options.loader) {
            return this.route.options.loader({
              params: this.params,
              routeSearch,
              search,
              signal: this.abortController.signal,
              preload: !!(opts == null ? void 0 : opts.preload),
              routeContext,
              context
            });
          }
          return;
        });
        try {
          const [_, loader] = await Promise.all([componentsPromise, loaderPromise]);
          if (latestPromise = checkLatest())
            return await latestPromise;
          this.__store.setState((s) => ({
            ...s,
            error: void 0,
            status: "success",
            updatedAt: Date.now(),
            loader
          }));
        } catch (err) {
          if (isRedirect(err)) {
            if (!(opts == null ? void 0 : opts.preload)) {
              this.router.navigate(err);
            }
            return;
          }
          const errorHandler = this.route.options.onLoadError ?? this.route.options.onError;
          try {
            errorHandler == null ? void 0 : errorHandler(err);
          } catch (errorHandlerErr) {
            if (isRedirect(errorHandlerErr)) {
              if (!(opts == null ? void 0 : opts.preload)) {
                this.router.navigate(errorHandlerErr);
              }
              return;
            }
            this.__store.setState((s) => ({
              ...s,
              error: errorHandlerErr,
              status: "error",
              updatedAt: Date.now()
            }));
            return;
          }
          this.__store.setState((s) => ({
            ...s,
            error: err,
            status: "error",
            updatedAt: Date.now()
          }));
        } finally {
          delete this.__loadPromise;
        }
      });
      return this.__loadPromise;
    });
    __privateAdd(this, _latestId, "");
    Object.assign(this, {
      route,
      router,
      id: opts.id,
      pathname: opts.pathname,
      params: opts.params,
      __store: new Store({
        updatedAt: 0,
        routeSearch: {},
        search: {},
        status: "idle",
        loader: void 0
      }, {
        onUpdate: (next) => {
          this.state = next;
        }
      })
    });
    this.state = this.__store.state;
    componentTypes.map(async (type) => {
      const component = this.route.options[type];
      this[type] = component;
    });
    if (this.state.status === "idle" && !__privateGet(this, _hasLoaders).call(this)) {
      this.__store.setState((s) => ({
        ...s,
        status: "success"
      }));
    }
  }
};
_hasLoaders = new WeakMap();
_resolveSearchInfo = new WeakMap();
_resolveInfo = new WeakMap();
_latestId = new WeakMap();
export {
  Block,
  ErrorComponent,
  Link,
  MatchRoute,
  Navigate,
  Outlet,
  RootRoute,
  Route,
  RouteMatch,
  Router,
  RouterProvider,
  cleanPath,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  decode,
  defaultFetchServerDataFn,
  defaultParseSearch,
  defaultStringifySearch,
  encode,
  functionalUpdate,
  interpolatePath,
  invariant,
  isPlainObject,
  isRedirect,
  joinPaths,
  last,
  lazy2 as lazy,
  matchByPath,
  matchPathname,
  matchesContext,
  parsePathname,
  parseSearchWith,
  partialDeepEqual,
  pick,
  redirect,
  replaceEqualDeep,
  resolvePath,
  rootRouteId,
  routerContext,
  stringifySearchWith,
  trimPath,
  trimPathLeft,
  trimPathRight,
  useBlocker,
  useLinkProps,
  useLoader,
  useMatch,
  useMatchRoute,
  useMatches,
  useNavigate,
  useParams,
  useRouter,
  useRouterContext,
  useSearch,
  useStore,
  tiny_warning_esm_default as warning
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@tanstack/store/build/esm/index.js:
  (**
   * store
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-store/build/esm/index.js:
  (**
   * react-store
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/router/build/esm/index.js:
  (**
   * router
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=@tanstack_router.js.map
