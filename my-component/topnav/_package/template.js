var oc=oc||{};oc.components=oc.components||{};oc.components['f6a7fc4eb11dae2f1f052f48ed1c439f987125b9']=function(model) {
           var __toOcStaticPathUrl = function(args) {
             return model.component.props._staticPath + 'undefined/' + args;
           } 
           const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
           var __$$oc_initialData__ = rest;
           
           if (model.component.development && typeof window !== 'undefined') {
             const methods = ['log', 'error'];
             for (const method of methods) {
              const originalMethod = console[method];
              console[method] = (...args) => {
                originalMethod(...args);
                window.oc?.getAction?.({
                  action: '$$__oc__server___console__$$',
                  component: _componentName,
                  version: _componentVersion,
                  baseUrl: _baseUrl,
                  parameters: {
                    message: args.join(' '),
                    level: method,
                  }
                })?.catch(() => {});
              }
             }
           }
           var element = model.element || typeof document !== 'undefined' ? document.querySelector(window.oc.conf.tag || 'oc-component' + '[data-id="'+ model.id +'"]') : null;
           var __$$oc_Settings__ = {id: model.id, element: element, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
           var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['f6a7fc4eb11dae2f1f052f48ed1c439f987125b9'] = (
           (function() {
            var clientBundle = (function(require$$1, client) {
  "use strict";
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production;
  function requireReactJsxRuntime_production() {
    if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
    hasRequiredReactJsxRuntime_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_production.jsx = jsxProd;
    reactJsxRuntime_production.jsxs = jsxProd;
    return reactJsxRuntime_production;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const TopNav = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-blue-500 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-white", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-white", children: "About" })
    ] }) });
  };
  var useData = {};
  var hasRequiredUseData;
  function requireUseData() {
    if (hasRequiredUseData) return useData;
    hasRequiredUseData = 1;
    var __importDefault = useData && useData.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(useData, "__esModule", { value: true });
    useData.DataProvider = void 0;
    useData.useData = useData$1;
    const jsx_runtime_1 = requireJsxRuntime();
    const react_1 = __importDefault(require$$1);
    const DataContext = react_1.default.createContext({});
    const DataProvider = ({ children, ...props }) => {
      return (0, jsx_runtime_1.jsx)(DataContext.Provider, { value: props, children });
    };
    useData.DataProvider = DataProvider;
    function useData$1() {
      const { value: { getData, ...rest } } = react_1.default.useContext(DataContext);
      const asyncGetData = react_1.default.useCallback((data) => {
        return new Promise((resolve, reject) => {
          getData({ ...rest, ...data }, (err, newData) => {
            if (err) {
              reject(err);
            } else {
              resolve(newData);
            }
          });
        });
      }, []);
      return { getData: asyncGetData, ...rest };
    }
    return useData;
  }
  var useDataExports = requireUseData();
  function OCProvider(props) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    require$$1.useEffect(() => {
      window.oc.events.fire("oc:componentDidMount", rest);
    }, []);
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(useDataExports.DataProvider, { value: { ...rest }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TopNav, { ...rest }) });
  }
  let root = null;
  function renderer(props, element, ssr) {
    if (ssr) {
      root = client.hydrateRoot(element, /* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
    } else {
      root = client.createRoot(element);
      root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
    }
    element.parentElement.unmount = () => {
      if (root) {
        root.unmount();
        root = null;
      }
    };
  }
  renderer.component = OCProvider;
  return renderer;
})(React, ReactDOM);

            return clientBundle;
           })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.3.1/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.3.1/umd/react.development.js","name":"react"},{"global":"ReactDOM","paths":["client"],"url":"https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', 'f6a7fc4eb11dae2f1f052f48ed1c439f987125b9'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  oc.__data = oc.__data || {};
  oc.__data[model.id] = model.component.props;
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-topnav-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["f6a7fc4eb11dae2f1f052f48ed1c439f987125b9"]({ id: "' + model.id + '", component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-topnav">' + modelHTML + '</div>' +
    '' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    '' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["f6a7fc4eb11dae2f1f052f48ed1c439f987125b9"]({ id: "' + model.id + '", component: { props: oc.__data["' + model.id + '"]} });' +
        'oc.reactComponents["f6a7fc4eb11dae2f1f052f48ed1c439f987125b9"](oc.__data["' + model.id + '"], targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
           return innerFn(model);
         }
         