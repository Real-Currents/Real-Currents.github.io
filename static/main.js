
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var apps = (function (exports) {
    'use strict';

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }

      return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();

      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;

        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;

          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }

        return _possibleConstructorReturn(this, result);
      };
    }

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get() {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(arguments.length < 3 ? target : receiver);
          }

          return desc.value;
        };
      }

      return _get.apply(this, arguments);
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;

      var _s, _e;

      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;

          var F = function () {};

          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var normalCompletion = true,
          didErr = false,
          err;
      return {
        s: function () {
          it = it.call(o);
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }

    function noop() {}

    function assign(tar, src) {
      // @ts-ignore
      for (var k in src) {
        tar[k] = src[k];
      }

      return tar;
    }

    function add_location(element, file, line, column, _char) {
      element.__svelte_meta = {
        loc: {
          file: file,
          line: line,
          column: column,
          "char": _char
        }
      };
    }

    function run(fn) {
      return fn();
    }

    function blank_object() {
      return Object.create(null);
    }

    function run_all(fns) {
      fns.forEach(run);
    }

    function is_function(thing) {
      return typeof thing === 'function';
    }

    function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
    }

    function validate_store(store, name) {
      if (store != null && typeof store.subscribe !== 'function') {
        throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
      }
    }

    function subscribe(store) {
      if (store == null) {
        return noop;
      }

      for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        callbacks[_key - 1] = arguments[_key];
      }

      var unsub = store.subscribe.apply(store, callbacks);
      return unsub.unsubscribe ? function () {
        return unsub.unsubscribe();
      } : unsub;
    }

    function component_subscribe(component, store, callback) {
      component.$$.on_destroy.push(subscribe(store, callback));
    }

    function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
        var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
      }
    }

    function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
    }

    function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
        var lets = definition[2](fn(dirty));

        if ($$scope.dirty === undefined) {
          return lets;
        }

        if (typeof lets === 'object') {
          var merged = [];
          var len = Math.max($$scope.dirty.length, lets.length);

          for (var i = 0; i < len; i += 1) {
            merged[i] = $$scope.dirty[i] | lets[i];
          }

          return merged;
        }

        return $$scope.dirty | lets;
      }

      return $$scope.dirty;
    }

    function exclude_internal_props(props) {
      var result = {};

      for (var k in props) {
        if (k[0] !== '$') result[k] = props[k];
      }

      return result;
    }

    function set_store_value(store, ret) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ret;
      store.set(value);
      return ret;
    }

    function append(target, node) {
      target.appendChild(node);
    }

    function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
    }

    function detach(node) {
      node.parentNode.removeChild(node);
    }

    function destroy_each(iterations, detaching) {
      for (var i = 0; i < iterations.length; i += 1) {
        if (iterations[i]) iterations[i].d(detaching);
      }
    }

    function element(name) {
      return document.createElement(name);
    }

    function text(data) {
      return document.createTextNode(data);
    }

    function space() {
      return text(' ');
    }

    function empty() {
      return text('');
    }

    function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return function () {
        return node.removeEventListener(event, handler, options);
      };
    }

    function attr(node, attribute, value) {
      if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
    }

    function get_binding_group_value(group) {
      var value = [];

      for (var i = 0; i < group.length; i += 1) {
        if (group[i].checked) value.push(group[i].__value);
      }

      return value;
    }

    function to_number(value) {
      return value === '' ? undefined : +value;
    }

    function children(element) {
      return Array.from(element.childNodes);
    }

    function set_input_value(input, value) {
      if (value != null || input.value) {
        input.value = value;
      }
    }

    function set_style(node, key, value, important) {
      node.style.setProperty(key, value, important ? 'important' : '');
    }

    function add_resize_listener(element, fn) {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }

      var object = document.createElement('object');
      object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
      object.setAttribute('aria-hidden', 'true');
      object.type = 'text/html';
      object.tabIndex = -1;
      var win;

      object.onload = function () {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
      };

      if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
      } else {
        object.data = 'about:blank';
        element.appendChild(object);
      }

      return {
        cancel: function cancel() {
          win && win.removeEventListener && win.removeEventListener('resize', fn);
          element.removeChild(object);
        }
      };
    }

    function custom_event(type, detail) {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, false, false, detail);
      return e;
    }

    var current_component;

    function set_current_component(component) {
      current_component = component;
    }

    function get_current_component() {
      if (!current_component) throw new Error("Function called outside component initialization");
      return current_component;
    }

    function beforeUpdate(fn) {
      get_current_component().$$.before_update.push(fn);
    }

    function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
    }

    function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
    }

    function createEventDispatcher() {
      var component = get_current_component();
      return function (type, detail) {
        var callbacks = component.$$.callbacks[type];

        if (callbacks) {
          // TODO are there situations where events could be dispatched
          // in a server (non-DOM) environment?
          var event = custom_event(type, detail);
          callbacks.slice().forEach(function (fn) {
            fn.call(component, event);
          });
        }
      };
    }

    function setContext(key, context) {
      get_current_component().$$.context.set(key, context);
    }

    function getContext(key) {
      return get_current_component().$$.context.get(key);
    } // TODO figure out if we still want to support

    var dirty_components = [];
    var binding_callbacks = [];
    var render_callbacks = [];
    var flush_callbacks = [];
    var resolved_promise = Promise.resolve();
    var update_scheduled = false;

    function schedule_update() {
      if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
      }
    }

    function tick() {
      schedule_update();
      return resolved_promise;
    }

    function add_render_callback(fn) {
      render_callbacks.push(fn);
    }

    function add_flush_callback(fn) {
      flush_callbacks.push(fn);
    }

    var flushing = false;
    var seen_callbacks = new Set();

    function flush() {
      if (flushing) return;
      flushing = true;

      do {
        // first, call beforeUpdate functions
        // and update components
        for (var i = 0; i < dirty_components.length; i += 1) {
          var component = dirty_components[i];
          set_current_component(component);
          update(component.$$);
        }

        dirty_components.length = 0;

        while (binding_callbacks.length) {
          binding_callbacks.pop()();
        } // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...


        for (var _i = 0; _i < render_callbacks.length; _i += 1) {
          var callback = render_callbacks[_i];

          if (!seen_callbacks.has(callback)) {
            // ...so guard against infinite loops
            seen_callbacks.add(callback);
            callback();
          }
        }

        render_callbacks.length = 0;
      } while (dirty_components.length);

      while (flush_callbacks.length) {
        flush_callbacks.pop()();
      }

      update_scheduled = false;
      flushing = false;
      seen_callbacks.clear();
    }

    function update($$) {
      if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        var dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
      }
    }

    var outroing = new Set();
    var outros;

    function group_outros() {
      outros = {
        r: 0,
        c: [],
        p: outros // parent group

      };
    }

    function check_outros() {
      if (!outros.r) {
        run_all(outros.c);
      }

      outros = outros.p;
    }

    function transition_in(block, local) {
      if (block && block.i) {
        outroing["delete"](block);
        block.i(local);
      }
    }

    function transition_out(block, local, detach, callback) {
      if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(function () {
          outroing["delete"](block);

          if (callback) {
            if (detach) block.d(1);
            callback();
          }
        });
        block.o(local);
      }
    }

    var globals = typeof window !== 'undefined' ? window : global;

    function bind(component, name, callback) {
      var index = component.$$.props[name];

      if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
      }
    }

    function create_component(block) {
      block && block.c();
    }

    function mount_component(component, target, anchor) {
      var _component$$$ = component.$$,
          fragment = _component$$$.fragment,
          on_mount = _component$$$.on_mount,
          on_destroy = _component$$$.on_destroy,
          after_update = _component$$$.after_update;
      fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
      after_update.forEach(add_render_callback);
    }

    function destroy_component(component, detaching) {
      var $$ = component.$$;

      if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)

        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
      }
    }

    function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
      }

      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }

    function init(component, options, instance, create_fragment, not_equal, props) {
      var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
      var parent_component = current_component;
      set_current_component(component);
      var prop_values = options.props || {};
      var $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: props,
        update: noop,
        not_equal: not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: dirty
      };
      var ready = false;
      $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
        var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
          if ($$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }

        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update); // `false` as a special case of no DOM component

      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

      if (options.target) {
        if (options.hydrate) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          $$.fragment && $$.fragment.l(children(options.target));
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          $$.fragment && $$.fragment.c();
        }

        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
      }

      set_current_component(parent_component);
    }

    var SvelteComponent = /*#__PURE__*/function () {
      function SvelteComponent() {
        _classCallCheck(this, SvelteComponent);
      }

      _createClass(SvelteComponent, [{
        key: "$destroy",
        value: function $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }
      }, {
        key: "$on",
        value: function $on(type, callback) {
          var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return function () {
            var index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
          };
        }
      }, {
        key: "$set",
        value: function $set() {// overridden by instance, if it has props
        }
      }]);

      return SvelteComponent;
    }();

    function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({
        version: '3.19.2'
      }, detail)));
    }

    function append_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", {
        target: target,
        node: node
      });
      append(target, node);
    }

    function insert_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", {
        target: target,
        node: node,
        anchor: anchor
      });
      insert(target, node, anchor);
    }

    function detach_dev(node) {
      dispatch_dev("SvelteDOMRemove", {
        node: node
      });
      detach(node);
    }

    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
      var modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default) modifiers.push('preventDefault');
      if (has_stop_propagation) modifiers.push('stopPropagation');
      dispatch_dev("SvelteDOMAddEventListener", {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      var dispose = listen(node, event, handler, options);
      return function () {
        dispatch_dev("SvelteDOMRemoveEventListener", {
          node: node,
          event: event,
          handler: handler,
          modifiers: modifiers
        });
        dispose();
      };
    }

    function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
        node: node,
        attribute: attribute
      });else dispatch_dev("SvelteDOMSetAttribute", {
        node: node,
        attribute: attribute,
        value: value
      });
    }

    function prop_dev(node, property, value) {
      node[property] = value;
      dispatch_dev("SvelteDOMSetProperty", {
        node: node,
        property: property,
        value: value
      });
    }

    function set_data_dev(text, data) {
      data = '' + data;
      if (text.data === data) return;
      dispatch_dev("SvelteDOMSetData", {
        node: text,
        data: data
      });
      text.data = data;
    }

    function validate_each_argument(arg) {
      if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        var msg = '{#each} only iterates over array-like objects.';

        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
          msg += ' You can use a spread to convert this iterable into an array.';
        }

        throw new Error(msg);
      }
    }

    function validate_slots(name, slot, keys) {
      for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
        var slot_key = _Object$keys[_i2];

        if (!~keys.indexOf(slot_key)) {
          console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
        }
      }
    }

    var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
      _inherits(SvelteComponentDev, _SvelteComponent);

      var _super2 = _createSuper(SvelteComponentDev);

      function SvelteComponentDev(options) {
        _classCallCheck(this, SvelteComponentDev);

        if (!options || !options.target && !options.$$inline) {
          throw new Error("'target' is a required option");
        }

        return _super2.call(this);
      }

      _createClass(SvelteComponentDev, [{
        key: "$destroy",
        value: function $destroy() {
          _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

          this.$destroy = function () {
            console.warn("Component was already destroyed"); // eslint-disable-line no-console
          };
        }
      }, {
        key: "$capture_state",
        value: function $capture_state() {}
      }, {
        key: "$inject_state",
        value: function $inject_state() {}
      }]);

      return SvelteComponentDev;
    }(SvelteComponent);

    /* src/apps/App.svelte generated by Svelte v3.19.2 */

    const { document: document_1 } = globals;
    const file = "src/apps/App.svelte";

    function add_css() {
    	var style = element("style");
    	style.id = "svelte-90w389-style";
    	style.textContent = "canvas.svelte-90w389{width:100%;height:100%;background-color:#666;-webkit-mask:url(\"../images/svelte-logo-mask.svg\") 50% 50% content-box view-box no-repeat;mask:url(\"../images/svelte-logo-mask.svg\") 50% 50% content-box view-box no-repeat}#view.svelte-90w389{text-align:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnN2ZWx0ZSIsInNvdXJjZXMiOlsiQXBwLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IGdyZWV0aW5nO1xuXG5cdGxldCBwaW47XG5cdGxldCB2aWV3O1xuXHR2aWV3ID0gcGluID8gcGluLnJlcGxhY2UoL1xcZCg/ISQpL2csICcqJykgOiAnZW50ZXIgeW91ciBwaW4nO1xuXG5cdGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcblx0XHRhbGVydChgc3VibWl0dGVkICR7cGlufWApO1xuXHR9XG5cblx0bGV0IGNhbnZhcztcblxuXHRjb25zdCB3aWR0aCA9ICgpID0+ICghIWNhbnZhcyAmJiAhIWNhbnZhcy53aWR0aCkgPyBjYW52YXMud2lkdGggOiAzMjtcblx0Y29uc3QgaGVpZ2h0ID0gKCkgPT4gKCEhY2FudmFzICYmICEhY2FudmFzLmhlaWdodCkgPyBjYW52YXMuaGVpZ2h0IDogMzI7XG5cblx0d2luZG93LnNCdWZmZXIgPSBbXTtcblx0d2luZG93LmZmdFJlYWR5ID0gZmFsc2U7XG5cdHdpbmRvdy5mZnRQcm9ncmVzcyA9IC0xO1xuXHR3aW5kb3cuZmZ0TG9hZGVyID0gMDtcblx0d2luZG93LmFwcFN0YXJ0ZWQgPSBmYWxzZTtcblx0d2luZG93LmFwcERlbGF5ID0gMDtcblxuXHRjb25zdCBzdGF0c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdGF0c0JveC5pZCA9ICdzdGF0Qm94Jztcblx0c3RhdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRzdGF0c0JveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcblx0c3RhdHNCb3guc3R5bGUudG9wID0gXCI1MCVcIjtcblx0c3RhdHNCb3guc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cdHN0YXRzQm94LnN0eWxlLndpZHRoID0gc3RhdHNCb3guc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cdHN0YXRzQm94LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXHRzdGF0c0JveC5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcblx0c3RhdHNCb3guc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuXHRzdGF0c0JveC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xuXHRzdGF0c0JveC5zdHlsZS5jb2xvciA9IFwiI0ZGRkZGRlwiO1xuXHRzdGF0c0JveC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXHRzdGF0c0JveC5zdHlsZS5sZWZ0ID0gMDtcblx0c3RhdHNCb3guaW5uZXJIVE1MID0gKCBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvKFxcLmh0bWwpLykhPT1udWxsICk/XG5cdFx0XHQnPGltZyBzcmM9XCJpbWFnZXMvYnctbG9hZGVyLmdpZlwiIC8+PGJyIC8+TG9hZGluZy4uLiAnOlxuXHRcdFx0JzxpbWcgc3JjPVwiaW1hZ2VzL2J3LWxvYWRlci5naWZcIiAvPjxiciAvPkxvYWRpbmcuLi4gJztcblxuXHRmdW5jdGlvbiBjYW52YXNBcHAgKGN2KSB7XG5cdFx0d2luZG93LmNhbnZhc0FwcCA9IGNhbnZhc0FwcDtcblxuXHRcdC8qIFNUQVJUIEdsb2JhbCBWYXJzICovXG5cdFx0d2luZG93LmF1ZGlvID0gd2luZG93LmF1ZDE7XG5cdFx0d2luZG93LmF1ZGlvTG9hZCA9IGZhbHNlO1xuXHRcdHdpbmRvdy5hdWRpb1JlYWR5ID0gZmFsc2U7XG5cdFx0d2luZG93LmF1ZGlvTmFtZSA9IGF1ZGlvLmNoaWxkcmVuWzBdLnNyYy5tYXRjaCgvW1xcL3xcXFxcXSooW1xcd3xcXC18XSspXFwuXFx3XFx3XFx3JC8pWzFdO1xuXHRcdHdpbmRvdy5hdWRpby5vbmxvYWRzdGFydCA9ICh0eXBlb2YgYXVkaW8ub25sb2Fkc3RhcnQgPT09IFwib2JqZWN0XCIpP1xuXHRcdFx0XHRmdW5jdGlvbigpIHsgYXVkaW9Mb2FkID0gdHJ1ZTsgcmV0dXJuIGF1ZGlvTG9hZDsgfSA6XG5cdFx0XHRcdChmdW5jdGlvbigpeyBhdWRpb0xvYWQgPSB0cnVlOyByZXR1cm4ge2F1ZGlvTG9hZDp0cnVlfTsgfSkoKTtcblx0XHR3aW5kb3cuYXVkaW8ub25jYW5wbGF5dGhyb3VnaCA9ICh0eXBlb2YgYXVkaW8ub25jYW5wbGF5dGhyb3VnaCA9PT0gXCJvYmplY3RcIik/XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdERlYnVnZ2VyLmxvZyhcImF1ZGlvIGlzIHJlYWR5XCIpO1xuXHRcdFx0XHRcdGF1ZGlvUmVhZHkgPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBhdWRpb1JlYWR5O1xuXHRcdFx0XHR9IDpcblx0XHRcdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8qXG4gICAgICAgICAgICAgICAgICAgIERlYnVnZ2VyLmxvZyggXCJJbmxpbmUgdmlkZW8gaXMgbm90IHN1cHBvcnRlZFxcblwiICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgKi9cblx0XHRcdFx0XHRhdWRpb1JlYWR5ID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4ge2F1ZGlvUmVhZHk6dHJ1ZX07XG5cdFx0XHRcdH0pKCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZighZXZlbnQpIHZhciBldmVudCA9IHdpbmRvdy5ldmVudDsgLy8gY3Jvc3MtYnJvd3NlciBzaGVuYW5pZ2Fuc1xuXHRcdFx0aWYoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHsgLy8gdGhpcyBpcyB0aGUgc3BhY2ViYXJcblx0XHRcdFx0aWYgKHdpbmRvdy5hdWRpby5wYXVzZWQpIHdpbmRvdy5hdWRpby5wbGF5KCk7XG5cdFx0XHRcdGVsc2Ugd2luZG93LmF1ZGlvLnBhdXNlKCk7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gdHJlYXQgYWxsIG90aGVyIGtleXMgbm9ybWFsbHk7XG5cdFx0fSk7XG5cdFx0LyogRU5EIEdsb2JhbCBWYXJzICovXG5cblx0XHRjYW52YXNBcHAuY2FuRHJhd1ZpZGVvID0gdHJ1ZTtcblxuXHRcdC8qIEdldCBjYW52YXMgcHJvcGVydGllcyAqL1xuXHRcdHZhciBjYW52YXMgPSBjYW52YXNBcHAuY3YgPSAodHlwZW9mIGNhbnZhc0FwcC5jdiA9PT0gXCJvYmplY3RcIik/XG5cdFx0XHRcdFx0XHRjYW52YXNBcHAuY3Y6XG5cdFx0XHRcdFx0XHRjdjtcblxuXHRcdERlYnVnZ2VyLmxvZyggXCJVc2luZyBjYW52YXMgJ1wiKyBjYW52YXMuaWQgK1wiJ1xcblwiICk7XG5cdFx0Y2FudmFzLmlkID0gXCJsYXllcjFcIjtcblx0XHRjYW52YXMuYWx0ID0gXCJJbnRlcmFjdGl2ZSBBdWRpbyBWaXN1YWxpemVyXCI7XG5cdFx0Y2FudmFzLnNyYyA9IChsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvKFxcLmh0bWwpLykgIT09IG51bGwpP1xuXHRcdFx0XHRcInZpc3VhbGl6ZXIucG5nXCI6XG5cdFx0XHRcdFwiaHR0cDovL1wiKyB3aW5kb3cubG9jYXRpb24uaG9zdCArXCIvanMtZGVtb3MvdmlzdWFsaXplci5wbmdcIjtcblx0XHRjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGggfHwgXCIxMDI0XCI7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQgfHwgXCI1NzZcIjtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKCAnb25tb3VzZW92ZXInLCAnY2FudmFzQXBwLm1vdXNlT3Zlcj10cnVlOycgKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKCAnb25tb3VzZW91dCcsICdjbGVhckludGVydmFsKGNhbnZhc0FwcC5tb3VzZUV2ZW50KTtjYW52YXNBcHBtb3VzZU92ZXI9ZmFsc2U7JyApO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoICdvbm1vdXNlbW92ZScsICdjYW52YXNBcHAuY29sb3JDaGFuZ2UoZXZlbnQpOycgKTtcblx0XHRjYW52YXNBcHAubW91c2VPdmVyID0gZmFsc2U7XG5cdFx0Y2FudmFzQXBwLm1vdXNlRXZlbnQgPSAwO1xuXHRcdGNhbnZhc0FwcC50eCA9IDA7XG5cdFx0Y2FudmFzQXBwLnN0cm9rZVN0eWxlID0gKHdpbmRvd1snZm9yZWdyb3VuZDAxJ10pID8gd2luZG93Wydmb3JlZ3JvdW5kMDEnXS5zdHlsZS5jb2xvciA6ICdyZ2IoMTI3LDI1NSwxMjcpJztcblx0XHRjYW52YXNBcHAuYmxvY2tTdHlsZSA9ICdoc2xhKDE1MCwxMDAlLDEwMCUsMS4wKSc7XG5cblx0XHRjYW52YXNBcHAuY29sb3JDaGFuZ2UgPSBmdW5jdGlvbihldnQpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLm1vdXNlRXZlbnQpO1xuXG5cdFx0XHR2YXIgc3Ryb2tlUiA9ICh3aW5kb3dbJ2ZvcmVncm91bmQwMiddKSA/XG5cdFx0XHRcdFx0d2luZG93Wydmb3JlZ3JvdW5kMDInXS5zdHlsZS5jb2xvci5tYXRjaCgvcmdiXFwoKFxcZCspLylbMV0gOlxuXHRcdFx0XHRcdChjYW52YXNBcHAuYmxvY2tTdHlsZSAmJiBjYW52YXNBcHAuYmxvY2tTdHlsZS5tYXRjaCgvcmdiXFwoKFxcZCspLykgIT09IG51bGwpP1xuXHRcdFx0XHRcdFx0XHRjYW52YXNBcHAuYmxvY2tTdHlsZS5tYXRjaCgvcmdiXFwoKFxcZCspLylbMV0gOlxuXHRcdFx0XHRcdFx0XHRcImhzbCgxODAsIDEwMCUsIDEwMCUpXCIsXG5cdFx0XHRcdFx0c3Ryb2tlQiA9ICh3aW5kb3dbJ2ZvcmVncm91bmQwMyddKSA/XG5cdFx0XHRcdFx0XHRcdHdpbmRvd1snZm9yZWdyb3VuZDAzJ10uc3R5bGUuY29sb3IubWF0Y2goL3JnYlxcKFxcZCssW1xcc3xcXGRdKywoW1xcc3xcXGRdKykvKVsxXSA6XG5cdFx0XHRcdFx0XHRcdChjYW52YXNBcHAuYmxvY2tTdHlsZSAmJiBjYW52YXNBcHAuYmxvY2tTdHlsZS5tYXRjaCgvcmdiXFwoKFxcZCspLykgIT09IG51bGwpP1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FudmFzQXBwLmJsb2NrU3R5bGUubWF0Y2goL3JnYlxcKChcXGQrKS8pWzFdIDpcblx0XHRcdFx0XHRcdFx0XHRcdFwiaHNsKDE4MCwgMTAwJSwgMTAwJSlcIjtcblxuXHRcdFx0aWYoIGNhbnZhc0FwcC5tb3VzZU92ZXIgKSB3aW5kb3cubW91c2VFdmVudCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbi8vXHRcdCBcdERlYnVnZ2VyLmxvZyggXCJ3aWR0aDogXCIrIHdpZHRoICtcIiBtb3VzZSB4OiBcIisgZXZ0LmNsaWVudFggKTtcblx0XHRcdFx0aWYgKCFzdHJva2VSKSB7XG5cdFx0XHRcdFx0c3Ryb2tlUiA9IDEyNztcblx0XHRcdFx0XHRzdHJva2VCID0gMjU1O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0cm9rZVIgPSBwYXJzZUludChzdHJva2VSLzIpO1xuXHRcdFx0XHRcdGlmKCBzdHJva2VSID4gMTI3ICkgc3Ryb2tlUi0tO1xuXHRcdFx0XHRcdGlmKCBzdHJva2VSIDwgMSApIHN0cm9rZVIrKztcblx0XHRcdFx0XHRzdHJva2VCID0gcGFyc2VJbnQoc3Ryb2tlQik7XG5cdFx0XHRcdFx0aWYoIHN0cm9rZUIgPiAyNTUgKSBzdHJva2VCLS07XG5cdFx0XHRcdFx0aWYoIHN0cm9rZUIgPCAxICkgc3Ryb2tlQisrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChldnQuY2xpZW50WCA+IHdpZHRoLzIpIHtcblx0XHRcdFx0XHRjYW52YXNBcHAuYmxvY2tTdHlsZSA9ICdyZ2IoJysgKHN0cm9rZVIrKykgKycsMTI3LCcrIChzdHJva2VCKyspICsnKSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FudmFzQXBwLmJsb2NrU3R5bGUgPSAncmdiKCcrIChzdHJva2VSLS0pICsnLDEyNywnKyAoc3Ryb2tlQi0tKSArJyknO1xuXHRcdFx0XHR9XG4vL1x0XHQgXHREZWJ1Z2dlci5sb2coIGNhbnZhc0FwcC5zdHJva2VTdHlsZSApO1xuXHRcdFx0fSwgMzMsIGV2dCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblx0XHQvKiBJbnNlcnQgbG9hZGVyIGp1c3QgYWZ0ZXIgdGhlIGNhbnZhcyAqL1xuXHRcdGlmKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdEJveCcpID09PSBudWxsIClcblx0XHRcdGNhbnZhcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN0YXRzQm94KTtcblxuXHRcdC8qIFRyYWNrIGZmdCBhbXBsaXR1ZGVzICovXG5cdFx0dmFyIGFtcDE9MCwgYW1wMj0wO1xuXG5cdFx0aWYgKCFmZnRSZWFkeSkge1xuXHRcdFx0RGVidWdnZXIubG9nKCBcIlByb2dyZXNzIFwiKyBmZnRQcm9ncmVzcy5sZW5ndGggK1wiJVwiICk7XG5cdFx0XHRzdGF0c0JveC5pbm5lckhUTUwgPSBzdGF0c0JveC5pbm5lckhUTUwubWF0Y2goLy4rXFwuXFwuXFwuLylbMF0gKyBmZnRQcm9ncmVzcy5sZW5ndGggK1wiJVwiO1xuXG5cdFx0XHRpZiggZmZ0UHJvZ3Jlc3MgPCAwICkge1xuXHRcdFx0XHRmb3IoIHZhciBwPWZmdFByb2dyZXNzLCB6PTEwOyBwPHo7IHArKykge1xuXHRcdFx0XHRcdGNhbnZhc0FwcC5mZnRMb2FkKGF1ZGlvTmFtZSwgcCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGFwcERlbGF5ID0gc2V0VGltZW91dChjYW52YXNBcHAsIDMzMywgY2FudmFzQXBwLmN2KTtcblxuXHRcdFx0fSBlbHNlIGlmIChmZnRQcm9ncmVzcy5sZW5ndGggPiA5KSB7XG5cdFx0XHRcdGZmdFJlYWR5ID0gdHJ1ZTtcblx0XHRcdFx0c3RhdHNCb3gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGF0c0JveCk7XG5cblx0XHRcdFx0aWYgKCEhd2luZG93LnVzZXJUcmlnZ2VyZWQpIHtcblx0XHRcdFx0XHR3aW5kb3cuYXVkaW8ucGxheSgpO1xuXHRcdFx0XHRcdHdpbmRvdy5hdWRpby5jdXJyZW50VGltZT0wO1xuXHRcdFx0XHRcdHdpbmRvdy5hdWRpby5tdXRlZD1mYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gYXBwRGVsYXkgPSBzZXRUaW1lb3V0KGNhbnZhc0FwcCwgMzMzLCBjYW52YXNBcHAuY3YpO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmKCEgYXVkaW9SZWFkeSApIHtcblx0XHRcdC8vRGVidWdnZXIubG9nKCBhdWRpb1JlYWR5ICk7XG5cdFx0XHRpZiggYXVkaW9Mb2FkID09PSBmYWxzZSApIGF1ZGlvLmxvYWQoKTtcblx0XHRcdHJldHVybiBhcHBEZWxheSA9IHNldFRpbWVvdXQoY2FudmFzQXBwLCAzMzMsIGNhbnZhc0FwcC5jdik7XG5cdFx0fSBlbHNlIGNsZWFyVGltZW91dChhcHBEZWxheSk7XG5cdFx0aWYoIGFwcFN0YXJ0ZWQgKSByZXR1cm4gYXBwU3RhcnRlZDtcblxuXHRcdGxldCB0aW1lID0gMDtcblxuXHRcdC8qIFRleHR1YWwgc3R1ZmYgKi9cblx0XHR2YXIgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQudGl0bGU7XG5cdFx0dmFyIHRpdGxlID0gKHdpbmRvdy50ZXh0X3RpdGxlKSA/IHdpbmRvdy50ZXh0X3RpdGxlLmlubmVySFRNTDogXCJSZWFsfkN1cnJlbnRzXCI7XG5cdFx0Ly9EZWJ1Z2dlci5sb2coIHRpdGxlICk7XG5cdFx0dmFyIGNvcHkgPSAod2luZG93LnRleHRfY29weSkgPyB3aW5kb3cudGV4dF9jb3B5LmlubmVySFRNTC5zcGxpdCgvW1xcbnxcXHJdLyk6IFwiXCI7XG5cdFx0Ly9EZWJ1Z2dlci5sb2coIGNvcHkgKTtcblxuXHRcdC8qIEF1ZGlvIHZpc3VhbGl6YXRpb24gc3R1ZmYgKi9cblx0XHR2YXIgYWlkeCA9IGNhbnZhc0FwcC5haWR4ID0gMDtcblx0XHR2YXIgYUJ1ZmZlciA9IGNhbnZhc0FwcC5hQnVmZmVyID0gW107XG5cdFx0dmFyIGZCdWZmZXIgPSBjYW52YXNBcHAuZkJ1ZmZlciA9IFtdO1xuXHRcdHZhciB2QnVmZmVyID0gY2FudmFzQXBwLnZCdWZmZXIgPSBbXTtcblx0XHR2YXIgdyA9IGNhbnZhcy53aWR0aCwgaCA9IGNhbnZhcy5oZWlnaHQ7XG5cdFx0dmFyIGhjb3JyZWN0ID0gIGggLyAyO1xuXHRcdGlmKCBzQnVmZmVyLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRmb3IoIHZhciBpPTEsIHo9c0J1ZmZlci5sZW5ndGg7IGk8ejsgaSsrICkge1xuXHRcdFx0XHR2YXIgYT1bXSwgZj1bXSwgdj1bXTtcblx0XHRcdFx0aWYoIHR5cGVvZiBzQnVmZmVyW2ldICE9PSAnb2JqZWN0JyApIHtcblx0XHRcdFx0XHREZWJ1Z2dlci5sb2coIFwic0J1ZmZlciBoYXMgaG9sZSBhdCBcIisgaSArXCJcXG5cIiApO1xuXHRcdFx0XHRcdGZvciggdmFyIHA9MCwgej0xMSwgYnVmPXRydWU7IHA8ejsgcCsrICkge1xuXHRcdFx0XHRcdFx0aWYoIChwIDwgMTApICYmICghZmZ0UHJvZ3Jlc3NbcF0pICkge1xuXHRcdFx0XHRcdFx0XHRidWYgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2FudmFzQXBwLmZmdExvYWQoYXVkaW9OYW1lLCBwLCB0cnVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZighIGJ1ZiApIHtcblx0XHRcdFx0XHRcdFx0ZmZ0UmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0YXBwU3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjYW52YXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdGF0c0JveCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBhcHBEZWxheSA9IHNldFRpbWVvdXQoY2FudmFzQXBwLCAzMzMsIGNhbnZhc0FwcC5jdik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciggdmFyIGo9MCwgbj1zQnVmZmVyW2ldLmxlbmd0aDsgajxuOyBqKysgKSB7XG5cdFx0XHRcdFx0dmFyIGFmdiA9IHNCdWZmZXJbaV1bal0uc3BsaXQoJywnKTtcblx0XHRcdFx0XHQvKiBEcmF3IGEgY3VydmUgb2YgdGhlIGFtcGxpdHVkZSBkYXRhICovXG5cdFx0XHRcdFx0dmFyIGN1cnZlaCA9IC1hZnZbMF0qaGNvcnJlY3QgKyBoY29ycmVjdDtcblx0XHRcdFx0XHRhW2pdID0gY3VydmVoO1xuXHRcdFx0XHRcdGZbal0gPSBhZnZbMV07XG5cdFx0XHRcdFx0dltqXSA9IGFmdlsyXTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGFCdWZmZXIucHVzaChhKTtcblx0XHRcdFx0ZkJ1ZmZlci5wdXNoKGYpO1xuXHRcdFx0XHR2QnVmZmVyLnB1c2godik7XG5cdFx0XHRcdC8vRGVidWdnZXIubG9nKCBcIlYqaD1cIisgYUJ1ZmZlcltpLTFdKmNhbnZhcy5oZWlnaHQgK1wiIHc9XCIrIGNhbnZhcy53aWR0aCArXCIgaD1cIisgY2FudmFzLmhlaWdodCArXCIgXFxuXCIgKTtcblx0XHRcdH1cblx0XHRcdGNhbnZhc0FwcC5mZnRMb2FkKGF1ZGlvTmFtZSwgMTApO1xuXHRcdFx0Ly9EZWJ1Z2dlci5sb2coIFwiVG90YWwgZnJhbWVzOiBcIisgKGFCdWZmZXIubGVuZ3RoKSApO1xuXHRcdH0gZWxzZSBmb3IoIHZhciBpPTAsIHo9MjAwMDsgaTx6OyBpKysgKSBhQnVmZmVyLnB1c2goMC41KTtcblxuXHRcdHZhciBhQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0dmFyIGJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRhQ2FudmFzLndpZHRoID0gYkNhbnZhcy53aWR0aCA9IHc+PjI7IC8vYUJ1ZmZlclswXS5sZW5ndGg7XG5cdFx0YUNhbnZhcy5oZWlnaHQgPSBiQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cdFx0dmFyIGFjdHggPSBjYW52YXNBcHAuYWN0eCA9IGFDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHR2YXIgYmN0eCA9IGNhbnZhc0FwcC5iY3R4ID0gYkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0LyogRHJhdyBtYWluIGZ1bmN0aW9uICovXG5cblx0XHRmdW5jdGlvbiBkcmF3IChjdHgsIHcsIGgpIHtcblxuXHRcdFx0dmFyIGFjdHggPSBjYW52YXNBcHAuYWN0eCwgYmN0eCA9IGNhbnZhc0FwcC5iY3R4O1xuXG5cdFx0XHRmdW5jdGlvbiBkcmF3UGljdHVyZXMgKGNvbnRleHQsIHBpY3R1cmVzKSB7XG5cdFx0XHRcdHZhciBwaWR4ID0gMCxcblx0XHRcdFx0XHRcdGNoYW5nZSA9IDIyMztcblxuXHRcdFx0XHRpZiggYWlkeCA+IGNoYW5nZSApIHBpZHggPSBwYXJzZUludChhaWR4L2NoYW5nZSklKHBpY3R1cmVzLmxlbmd0aCk7XG5cdFx0XHRcdGlmKCBhaWR4IDwgMTAgKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdXRcIjtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC4wNTtcblx0XHRcdFx0fSBlbHNlIGlmKCBhaWR4JWNoYW5nZSA8IDMgfHwgKGNoYW5nZSAtIDMpIDwgYWlkeCVjaGFuZ2UpIHtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW91dFwiO1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjI1O1xuXHRcdFx0XHR9IGVsc2UgaWYoIGFpZHglY2hhbmdlIDwgNiB8fCAoY2hhbmdlIC0gNikgPCBhaWR4JWNoYW5nZSkge1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzY3JlZW5cIjtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC41MDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDEuMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZXh0LmRyYXdJbWFnZShwaWN0dXJlc1twaWR4XSwgKGNhbnZhcy53aWR0aC8yIC0gcGljdHVyZXNbcGlkeF0ud2lkdGgpLCAtNDAsIHBpY3R1cmVzW3BpZHhdLndpZHRoKjIsIHBpY3R1cmVzW3BpZHhdLmhlaWdodCoyKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmF3VmlkZW8gKGNvbnRleHQsIHZpZGVvKSB7XG5cdFx0XHRcdHZhciBwaWR4ID0gMCxcblx0XHRcdFx0XHRcdGNoYW5nZSA9IDIyMztcblxuXHRcdFx0XHRpZiggYWlkeCA8IDEwICkge1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3V0XCI7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuMDU7XG5cdFx0XHRcdH0gZWxzZSBpZiggYWlkeCVjaGFuZ2UgPCAzIHx8IChjaGFuZ2UgLSAzKSA8IGFpZHglY2hhbmdlKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdXRcIjtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC4yNTtcblx0XHRcdFx0fSBlbHNlIGlmKCBhaWR4JWNoYW5nZSA8IDYgfHwgKGNoYW5nZSAtIDYpIDwgYWlkeCVjaGFuZ2UpIHtcblx0XHRcdFx0XHRjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic2NyZWVuXCI7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuNTA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1pblwiO1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxLjA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBEcmF3IHZpZGVvIGlucHV0LCBpZiBhbnkgKi9cblx0XHRcdFx0aWYoIHdpbmRvdy5jYW52YXNBcHAuY2FuRHJhd1ZpZGVvID09PSB0cnVlICkgdHJ5IHtcblx0XHRcdFx0XHR2YXIgY0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdFx0XHRcdHZhciBjY3R4ID0gY0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0XHRcdFx0Y0NhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aC8yO1xuXHRcdFx0XHRcdGNDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblx0XHRcdFx0XHRjY3R4Lmdsb2JhbEFscGhhID0gMS4wXG5cblx0XHRcdFx0XHR2YXIgdnggPSBjQ2FudmFzLndpZHRoIC0gdmlkZW8udmlkZW9XaWR0aC8yO1xuXHRcdFx0XHRcdHZhciB2dyA9IDMgKiAodmlkZW8udmlkZW9IZWlnaHQvY2FudmFzLmhlaWdodCAqIGNhbnZhcy53aWR0aCkgLyAyO1xuXHRcdFx0XHRcdHZhciB2aCA9IGNDYW52YXMuaGVpZ2h0O1xuXHRcdFx0XHRcdGlmICggKHZpZGVvICE9IG51bGwpICYmICh2aWRlby5yZWFkeVN0YXRlID4gMikgJiYgKCF2aWRlby5wYXVzZWQpIClcblx0XHRcdFx0XHRcdGNjdHguZHJhd0ltYWdlKHZpZGVvLCB2eC8yLCAwLCB2dywgdmgpO1xuXG5cdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuXHRcdFx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShjQ2FudmFzLCAwLCAwLCBjQ2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbi8vICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y3R4LnRyYW5zbGF0ZSh3LCAwKTtcblx0XHRcdFx0XHRjdHguc2NhbGUoLTEsIDEpO1xuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoY0NhbnZhcywgMCwgMCwgY0NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0XHRcdFx0Y3R4LnJlc3RvcmUoKTtcbi8vICAgICAgICAgICAgfSwgMSk7XG5cbi8vICAgICAgICAgICAgY2N0eC5kcmF3SW1hZ2UoYUNhbnZhcywgMSwgMiwgKHc+PjIpLTEsIGgtNCk7XG4vLyAgICAgICAgICAgIGNjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAlLDAlLDAlLDAuMDA1KVwiO1xuLy8gICAgICAgICAgICBjY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdERlYnVnZ2VyLm9uID0gdHJ1ZTtcblx0XHRcdFx0XHREZWJ1Z2dlci5sb2coXCJGYWlsZWQgdG8gZHJhdyBcIisgdmlkZW8uaWQgK1wiOiBcIisgZXJyLnN0YWNrKTtcblx0XHRcdFx0XHR3aW5kb3cuY2FudmFzQXBwLmNhbkRyYXdWaWRlbyA9IGZhbHNlO1xuXHRcdFx0XHRcdERlYnVnZ2VyLm9uID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEZWJ1Z2dlci5sb2coIFwidGltZTogXCIrIHRpbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcblx0XHRcdGN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYoIHRpbWUlMiApIHtcblx0XHRcdFx0XHQvL0RlYnVnZ2VyLm9uID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGJjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXHRcdFx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxLjA7XG5cblx0XHRcdFx0XHRpZiggd2luZG93LnBpY3R1cmVzICYmIHdpbmRvdy5waWN0dXJlcy5jaGlsZHJlbi5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0ZHJhd1BpY3R1cmVzKGN0eCwgd2luZG93LnBpY3R1cmVzLmNoaWxkcmVuKTtcblx0XHRcdFx0XHRcdGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcIm11bHRpcGx5XCI7XG5cdFx0XHRcdFx0XHRjdHguZ2xvYmFsQWxwaGEgPSAwLjA1O1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmKCB3aW5kb3cuY2FudmFzQXBwLmNhbkRyYXdWaWRlbyA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdGRyYXdWaWRlbyhhY3R4LCBhdWRpbyk7XG5cdFx0XHRcdFx0XHRjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJtdWx0aXBseVwiO1xuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMC41O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvciggdmFyIG8gPSA2OyBvID4gMDsgby0tICkge1xuXHRcdFx0XHRcdFx0YWlkeCA9IGNhbnZhc0FwcC5haWR4ID1cblx0XHRcdFx0XHRcdFx0XHRncmFwaFNhbXBsZXMoYWN0eCwgYXVkaW8sIGFCdWZmZXIsIGZCdWZmZXIsIHZCdWZmZXIsIGFpZHgsIHcsIGgsIG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShhQ2FudmFzLCAwLCAwLCAodz4+MSksIGgpO1xuXHRcdFx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRcdFx0Y3R4LnRyYW5zbGF0ZSh3LCAwKTtcblx0XHRcdFx0XHRjdHguc2NhbGUoLTEsIDEpO1xuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoYUNhbnZhcywgMCwgMCwgKHc+PjEpLCBoKTtcblx0XHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0XHRcdFx0YmN0eC5kcmF3SW1hZ2UoYUNhbnZhcywgMSwgMiwgKHc+PjIpLTEsIGgtNCk7XG5cdFx0XHRcdFx0YmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCUsMCUsMCUsMC4wMDUpXCI7XG5cdFx0XHRcdFx0YmN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXG5cdFx0XHRcdFx0YWN0eC5kcmF3SW1hZ2UoYkNhbnZhcywgMSwgMiwgKHc+PjIpLTEsIGgtNCk7XG5cdFx0XHRcdFx0YWN0eC5maWxsU3R5bGUgPSAod2luZG93WydiYWNrZ3JvdW5kMDInXSkgPyB3aW5kb3dbJ2JhY2tncm91bmQwMiddLnN0eWxlLmNvbG9yIDogXCJyZ2JhKDAlLDAlLDAlLDAuMDI1KVwiO1xuXHRcdFx0XHRcdGFjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cblx0XHRcdFx0Y3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcblx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuXG5cdFx0XHRcdERlYnVnZ2VyLm9uID0gdHJ1ZTtcblx0XHRcdFx0RGVidWdnZXIubG9nKFwiRmFpbGVkIHRvIGRyYXc6IFwiKyBlcnIuc3RhY2spO1xuXHRcdFx0XHR3aW5kb3cuY2FudmFzQXBwLmNhbkRyYXdWaWRlbyA9IGZhbHNlO1xuXHRcdFx0XHREZWJ1Z2dlci5vbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuXG5cdFx0XHQvKiBUZXh0ICovXG5cdFx0XHRjdHgubGluZVdpZHRoID0gMjtcblx0XHRcdGN0eC5maWxsU3R5bGUgPSAgKHdpbmRvd1snZm9yZWdyb3VuZDAxJ10pID8gd2luZG93Wydmb3JlZ3JvdW5kMDEnXS5zdHlsZS5jb2xvciA6IFwiaHNsKDE4MCwgMTAwJSwgMTAwJSlcIjtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICh3aW5kb3dbJ2ZvcmVncm91bmQwMiddKSA/IHdpbmRvd1snZm9yZWdyb3VuZDAyJ10uc3R5bGUuY29sb3IgOiBcIiNmZmZcIjtcblx0XHRcdC8vRGVidWdnZXIubG9nKCBcImFCdWZmZXIgaW5kZXg6IFwiKyBhaWR4ICk7XG5cdFx0XHRpZiggYWlkeCA8IDEwMCApIHtcblx0XHRcdFx0Y3R4LmZvbnQgPSBcImJvbGQgXCIrIGFpZHgqMiArXCJweCBDb21mb3J0YWFcIjtcblxuXHRcdFx0XHRpZiggYWlkeCUyID09PSAwKSB7XG5cdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KGFubm91bmNlbWVudCwgMzIwIC0gYWlkeCo0LCBoPj4xKTtcblx0XHRcdFx0fSBlbHNlIGN0eC5zdHJva2VUZXh0KGFubm91bmNlbWVudCwgMzIwIC0gYWlkeCo0LCBoPj4xKTtcblxuXHRcdFx0fSBlbHNlIGlmKCBhaWR4ID4gMzAwICkge1xuXHRcdFx0XHRjdHguZm9udCA9IFwiYm9sZCAxMnB4IFZlcmRhbmFcIjtcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KHRpdGxlLCA2NCwgMTI4KTtcblx0XHRcdFx0aWYoIChhaWR4ID4gMTUwMCkgJiYgKGFpZHggPCAzNTAwKSApIGZvcih2YXIgaT0wLCB6PWNvcHkubGVuZ3RoOyBpPHo7IGkrKylcblx0XHRcdFx0XHRjdHguZmlsbFRleHQoY29weVtpXSwgdz4+MSwgKDI1MDAgLSBhaWR4KSArIChpKjIwKSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aW1lKys7XG5cdFx0XHRpZiAodGltZSA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdHRpbWUgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0RlYnVnZ2VyLmxvZyggXCJ0aW1lOiBcIisgdGltZSApO1xuXHRcdH1cblxuXHRcdC8qIEdyYXBoIHNhbXBsZXMgKi9cblx0XHRmdW5jdGlvbiBncmFwaFNhbXBsZXMoIGN0eCwgYXVkaW8sIGFidWYsIGZidWYsIHZidWYsIGFpZHgsIHcsIGgsIG8gKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiggYWJ1Zi5sZW5ndGggPCAxICkgcmV0dXJuIGFpZHg7XG5cdFx0XHRcdGlmKCBhdWRpby5wYXVzZWQgKSByZXR1cm4gYWlkeDtcblx0XHRcdFx0aWYoISAoYXVkaW8ucmVhZHlTdGF0ZSA+IDMpICkgcmV0dXJuIGFpZHg7XG5cblx0XHRcdFx0dmFyIGlkeCA9IE1hdGguZmxvb3IoIGF1ZGlvLmN1cnJlbnRUaW1lKjE1LjAzICkgLSA2O1xuXHRcdFx0XHRpZighIGFidWZbcGFyc2VJbnQoaWR4ICsgbyldICkge1xuXHRcdFx0XHRcdERlYnVnZ2VyLmxvZyggXCJhYnVmW1wiKyBpZHggK1wiXSBoYXMgbm90IGJlZW4gcmVjaWV2ZWRcXG5cIiApO1xuXHRcdFx0XHRcdHJldHVybiBhaWR4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vRGVidWdnZXIubG9nKCBcImFCdWZmZXIgaW5kZXg6IFwiKyBpZHggKTtcblxuXHRcdFx0XHQvKiBSZXNldCBjYW52YXMgY3R4IHByb3BlcnRpZXMgKi9cblx0XHRcdFx0Y3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcblx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuXHRcdFx0XHRjdHguZm9udCA9IFwiYm9sZCAxMHB4IFZlcmRhbmFcIjtcblx0XHRcdFx0dmFyIGhjb3JyZWN0ID0gIGggLyAyO1xuXHRcdFx0XHQvKiBQbG90IGVhY2ggc2FtcGxlIG9uIGxpbmUgdGhhdCBtb3ZlcyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgICAgICAgICAgICAgKiB1bnRpbCB3ZSByZWFjaCB0aGUgZW5kIG9mIHRoZSBzY3JlZW4gb3IgdGhlIGVuZCBvZiB0aGUgc2FtcGxlXG4gICAgICAgICAgICAgICAgICovXG5cdFx0XHRcdGlmKCBpZHggPCAxICkge1xuXHRcdFx0XHRcdGN0eC5tb3ZlVG8oIDAsIGhjb3JyZWN0ICk7XG5cdFx0XHRcdH0gZWxzZSBjdHgubW92ZVRvKCAwLCAtKGFidWZbcGFyc2VJbnQoaWR4ICsgbyldWzBdKjIqaGNvcnJlY3QpICsgaGNvcnJlY3QgICk7XG5cblx0XHRcdFx0dmFyIHZlcnRzID0gNixcblx0XHRcdFx0XHRcdGhpZHggPSBwYXJzZUludChpZHggKyBvKTtcblxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRcdGlmKCBhaWR4JTYgKSBjYW52YXNBcHAuYmxvY2tTdHlsZSA9ICh3aW5kb3dbJ2ZvcmVncm91bmQwMiddKSA/IHdpbmRvd1snZm9yZWdyb3VuZDAyJ10uc3R5bGUuY29sb3IgOiBcImhzbCgxODAsIDEwMCUsIDEwMCUpXCI7XG5cdFx0XHRcdGVsc2UgY2FudmFzQXBwLmJsb2NrU3R5bGUgPSAod2luZG93Wydmb3JlZ3JvdW5kMDMnXSkgPyB3aW5kb3dbJ2ZvcmVncm91bmQwMyddLnN0eWxlLmNvbG9yIDogXCJoc2woMTgwLCAxMDAlLCAxMDAlKVwiO1xuXG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBjYW52YXNBcHAuYmxvY2tTdHlsZS5yZXBsYWNlKC8sXFxzPzBcXC5cXGQrXFwpLywgXCIsMS4wKVwiKTtcblxuXHRcdFx0XHRmb3IoIHZhciBpPTAsIHo9YWJ1ZltoaWR4XS5sZW5ndGgsIG49ejsgaTx6OyBpKysgKSB7XG5cdFx0XHRcdFx0LyogRHJhdyBhIGN1cnZlIG9mIHRoZSBhbXBsaXR1ZGUgZGF0YSAqL1xuXHRcdFx0XHRcdGlmKCBpID4gMCApIHtcblx0XHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGNhbnZhc0FwcC5zdHJva2VTdHlsZTtcblx0XHRcdFx0XHRcdGN0eC5zdHJva2VXaWR0aCA9IGNhbnZhc0FwcC5zdHJva2VXaWR0aDtcblx0XHRcdFx0XHRcdGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKFxuXHRcdFx0XHRcdFx0XHRcdChpLTEpKjQsIGFidWZbaGlkeF1baV0gKyBvLFxuXHRcdFx0XHRcdFx0XHRcdGkqNCwgYWJ1ZltoaWR4XVtpXSArIG9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qIERyYXcgYmFycyBmb3IgdGhlIGVxIGxldmVscyAoZmZ0KSBkYXRhICovXG5cdFx0XHRcdFx0dmFyIGJhcmggPSBoIC0gdmJ1ZltoaWR4XVtpXSpoO1xuXHRcdFx0XHRcdGFtcDIgPSBhbXAxO1xuXHRcdFx0XHRcdGFtcDEgPSAoaSA9PT0gMyAmJiB2YnVmW2hpZHhdW2ldID4gMC4wNSk/IHZidWZbaGlkeF1baV0gOiBhbXAxO1xuXHRcdFx0XHRcdHZlcnRzID0gKGFtcDIgIT09IGFtcDEpPyBwYXJzZUludChNYXRoLnJhbmRvbSgpKjEwKSA6IHZlcnRzO1xuXHRcdFx0XHRcdGlmKCAoaSA8PSBuKSApIHtcblx0XHRcdFx0XHRcdHZhciBmcmVxID0gTWF0aC5mbG9vcihmYnVmW2hpZHhdW2ldKTtcblx0XHRcdFx0XHRcdC8vY3R4LmZpbGxTdHlsZSA9IFwiaHNsKFwiKyAoMjAwIC0gdmJ1ZltwYXJzZUludChpZHggKyBvKV1baV0qMTgwKSArXCIsIDEwMCUsIDUwJSlcIjtcblx0XHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBjYW52YXNBcHAuYmxvY2tTdHlsZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdC8sXFxzPzBcXC5cXGQrXFwpLyxcblx0XHRcdFx0XHRcdFx0XHRcIiwxLjApXCJcblx0XHRcdFx0XHRcdCkucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHQvaHNsYVxcKCgxNTApLFxccz8oMTAwKVxcJSxcXHM/KDcwKVxcJS8sXG5cdFx0XHRcdFx0XHRcdFx0XCJoc2xhKCQxLCBcIisgKHZidWZbcGFyc2VJbnQoaWR4ICsgbyldW2ldKjUwKSArXCIlLCAkMyVcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGN0eC5maWxsUmVjdCggaSo0LCBiYXJoLCA0LCBoICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cG9seWdvbihjdHgsIHZlcnRzLCBpZHglKHcpLSh3Pj4zKSwgaWR4JShoKSwgKHBhcnNlRmxvYXQoYW1wMithbXAxKS8yKSp3LCBpZHgsIDApO1xuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XG5cblx0XHRcdFx0cmV0dXJuICsraWR4O1xuXG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0RGVidWdnZXIubG9nKCBcImdyYXBoU2FtcGxlcyBmYWlsZWQ6IFwiICsgZS5tZXNzYWdlICtcIiBhdCBmcmFtZSBcIisgYWlkeCArXCJcXG5cIisgZS5zdGFjayApO1xuXHRcdFx0XHRyZXR1cm4gYWlkeDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKiBEcmF3IHBvbHlnb25zICovXG5cdFx0ZnVuY3Rpb24gcG9seWdvbihjLCBuLCB4LCB5LCByLCBhbmdsZSwgY291bnRlcmNsb2Nrd2lzZSwgb3JkZXIpIHtcblx0XHRcdHZhciBvcmRlciA9IG9yZGVyIHx8IG51bGw7XG5cdFx0XHRpZiAob3JkZXIgPT09IChudWxsIHx8IFwiZmlyc3RcIikpIHtcblx0XHRcdFx0Yy5iZWdpblBhdGgoKTtcblx0XHRcdH1cblx0XHRcdHZhciBhbmdsZSA9IGFuZ2xlIHx8IDA7XG5cdFx0XHR2YXIgY291bnRlcmNsb2Nrd2lzZSA9IGNvdW50ZXJjbG9ja3dpc2UgfHwgZmFsc2U7XG5cdFx0XHQvL0NvbXB1dGUgdmVydGV4IHBvc2l0aW9uIGFuZCBiZWdpbiBhIHN1YnBhdGggdGhlcmVcblx0XHRcdGMubW92ZVRvKHggKyByKk1hdGguc2luKGFuZ2xlKSxcblx0XHRcdFx0XHR5IC0gcipNYXRoLmNvcyhhbmdsZSkpO1xuXHRcdFx0dmFyIGRlbHRhID0gMipNYXRoLlBJL247XG5cdFx0XHQvL0ZvciByZW1haW5pbmcgdmVydHMsXG5cdFx0XHRmb3IgKHZhciBpPTE7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0Ly9jb21wdXRlIGFuZ2xlIG9mIHRoaXMgdmVydGV4LFxuXHRcdFx0XHRhbmdsZSArPSBjb3VudGVyY2xvY2t3aXNlID8gLWRlbHRhIDogZGVsdGE7XG5cdFx0XHRcdC8vdGhlbiBjb21wdXRlIHBvc2l0aW9uIG9mIHZlcnRleCBhbmQgYWRkIGxpbmVcblx0XHRcdFx0Yy5saW5lVG8oeCArIHIqTWF0aC5zaW4oYW5nbGUpLFxuXHRcdFx0XHRcdFx0eSAtIHIqTWF0aC5jb3MoYW5nbGUpKTtcblx0XHRcdH1cblx0XHRcdC8vQ29ubmVjdCBsYXN0IHZlcnRleCBiYWNrIHRvIGZpcnN0XG5cdFx0XHRjLmNsb3NlUGF0aCgpO1xuXG5cdFx0XHRpZiAob3JkZXIgPT09IChudWxsIHx8IFwibGFzdFwiKSkge1xuXHRcdFx0XHQvL0ZpbGwgdGhlIHBvbHlcblx0XHRcdFx0Yy5maWxsKCk7XG5cdFx0XHRcdC8vT3V0bGluZSB0aGUgcG9seVxuXHRcdFx0XHRjLnN0cm9rZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qIEJlZ2luIGRyYXcgbG9vcCAqL1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdFx0dGltZSA9IDA7XG5cdFx0XHRkcmF3TG9vcCA9IHNldEludGVydmFsKGRyYXcsIDMxLCBjb250ZXh0LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0RGVidWdnZXIubG9nKFwiRHJhdyBsb29wIHN0YXJ0ZWRcIik7XG5cdFx0XHRhcHBTdGFydGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiBhcHBTdGFydGVkO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0RGVidWdnZXIubG9nKFwiZHJhd0xvb3AgZmFpbGVkIHRvIHN0YXJ0XCIpO1xuXG5cdFx0fVxuXHR9XG5cblx0Y2FudmFzQXBwLmZmdExvYWQgPSBmdW5jdGlvbiAoYW5hbWUsIHByLCBzaW5nbGUpIHtcblx0XHQvL2F1ZGlvLmxvYWQoKTtcblx0XHR2YXIgcGFydDtcblx0XHRpZiggcHIgPCAwICkge1xuXHRcdFx0ZmZ0UHJvZ3Jlc3MgPSBbXTtcblx0XHRcdHBhcnQgPSBmZnRQcm9ncmVzcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcnQgPSBwcjtcblx0XHR9XG5cblx0XHRpZiggKHByID4gOTkpIHx8IChwYXJ0ID4gOTkpICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGZmdExvYWRlcik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRzci5zcmMgPSAocGFydCA8IDEwKSA/XG5cdFx0XHRcdFx0XCJodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3JlYWwtY3VycmVudHMvanMtZGVtb3MvZGF0YS9cIiArIGFuYW1lICsgXCItMFwiICsgcGFydCArIFwiLmpzXCIgOlxuXHRcdFx0XHRcdFwiaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9yZWFsLWN1cnJlbnRzL2pzLWRlbW9zL2RhdGEvXCIgKyBhbmFtZSArIFwiLVwiICsgcGFydCArIFwiLmpzXCI7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNyKTtcblx0XHRcdGlmKCAocGFydCA8IDk5KSAmJiAoIXNpbmdsZSkgKVxuXHRcdFx0XHRmZnRMb2FkZXIgPSBzZXRUaW1lb3V0KGNhbnZhc0FwcC5mZnRMb2FkLCA5OSwgYW5hbWUsICsrcGFydCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGNhbnZhc0FwcC51cGRhdGVGRlQgPSBmdW5jdGlvbihwcm9nKSB7XG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24ocHJvZykge1xuXHRcdFx0ZmZ0UHJvZ3Jlc3NbcHJvZ10gPSB0cnVlO1xuXHRcdFx0RGVidWdnZXIubG9nKCBmZnRQcm9ncmVzc1twcm9nXSApO1xuXHRcdFx0dmFyIGFpZHggPSBjYW52YXNBcHAuYWlkeDtcblx0XHRcdHZhciBhQnVmZmVyID0gY2FudmFzQXBwLmFCdWZmZXI7XG5cdFx0XHR2YXIgZkJ1ZmZlciA9IGNhbnZhc0FwcC5mQnVmZmVyO1xuXHRcdFx0dmFyIHZCdWZmZXIgPSBjYW52YXNBcHAudkJ1ZmZlcjtcblx0XHRcdHZhciBmaXJzdEJyZWFrID0gZmFsc2U7XG5cdFx0XHR2YXIgdyA9IGNhbnZhc0FwcC5jdi53aWR0aCwgaCA9IGNhbnZhc0FwcC5jdi5oZWlnaHQ7XG5cdFx0XHR2YXIgaGNvcnJlY3QgPSAgaCAvIDI7XG5cdFx0XHRpZihcblx0XHRcdFx0XHR0eXBlb2Ygc0J1ZmZlciAhPT0gJ29iamVjdCcgfHxcblx0XHRcdFx0XHR0eXBlb2YgYUJ1ZmZlciAhPT0gJ29iamVjdCcgfHxcblx0XHRcdFx0XHR0eXBlb2YgZkJ1ZmZlciAhPT0gJ29iamVjdCcgfHxcblx0XHRcdFx0XHR0eXBlb2YgdkJ1ZmZlciAhPT0gJ29iamVjdCdcblx0XHRcdCkgcmV0dXJuIERlYnVnZ2VyLmxvZyggXCJjYW52YXMgQnVmZmVycyBhcmUgdW5kZWZpbmVkXCIpO1xuXHRcdFx0RGVidWdnZXIubG9nKCBcIlByb2dyZXNzIFwiKyBmZnRQcm9ncmVzcy5sZW5ndGggK1wiJVwiICk7XG5cdFx0XHRpZiggZmZ0UHJvZ3Jlc3MubGVuZ3RoIDwgMTAgKSByZXR1cm47XG5cblx0XHRcdGlmKCBzQnVmZmVyLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHZhciBpZHggPSAoIGFpZHggPiBhQnVmZmVyLmxlbmd0aCApPyBhaWR4OiAoYUJ1ZmZlci5sZW5ndGgtMSk7XG5cdFx0XHRcdGZvciggdmFyIGk9MCwgej1hQnVmZmVyLmxlbmd0aDsgaTx6OyBpKysgKSB7XG5cdFx0XHRcdFx0aWYoISBhQnVmZmVyW2ldICkge1xuXHRcdFx0XHRcdFx0aWR4ID0gaTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IoIHZhciBpPWlkeCwgej1zQnVmZmVyLmxlbmd0aDsgaTx6OyBpKysgKSB7XG5cdFx0XHRcdFx0dmFyIGE9W10sIGY9W10sIHY9W107XG5cdFx0XHRcdFx0aWYoICh0eXBlb2Ygc0J1ZmZlcltpXSAhPT0gJ29iamVjdCcpICkge1xuXHRcdFx0XHRcdFx0aWYoISBmaXJzdEJyZWFrICkge1xuXHRcdFx0XHRcdFx0XHREZWJ1Z2dlci5sb2coIFwic0J1ZmZlciBoYXMgaG9sZSBhdCBcIisgaSArXCJcXG5cIiApO1xuXHRcdFx0XHRcdFx0XHRmb3IoIHZhciBwIGluIGZmdFByb2dyZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmKCAocCA8IHByb2cpICYmICghZmZ0UHJvZ3Jlc3NbcF0pIClcblx0XHRcdFx0XHRcdFx0XHRcdGNhbnZhc0FwcC5mZnRMb2FkKGF1ZGlvTmFtZSwgcCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Zmlyc3RCcmVhayA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IoIHZhciBqPTAsIG49c0J1ZmZlcltpXS5sZW5ndGg7IGo8bjsgaisrICkge1xuXHRcdFx0XHRcdFx0dmFyIGFmdiA9IHNCdWZmZXJbaV1bal0uc3BsaXQoJywnKTtcblx0XHRcdFx0XHRcdC8qIERyYXcgYSBjdXJ2ZSBvZiB0aGUgYW1wbGl0dWRlIGRhdGEgKi9cblx0XHRcdFx0XHRcdHZhciBjdXJ2ZWggPSAtYWZ2WzBdKmhjb3JyZWN0ICsgaGNvcnJlY3Q7XG5cdFx0XHRcdFx0XHRhW2pdID0gY3VydmVoO1xuXHRcdFx0XHRcdFx0ZltqXSA9IGFmdlsxXTtcblx0XHRcdFx0XHRcdHZbal0gPSBhZnZbMl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFCdWZmZXIucHVzaChhKTtcblx0XHRcdFx0XHRmQnVmZmVyLnB1c2goZik7XG5cdFx0XHRcdFx0dkJ1ZmZlci5wdXNoKHYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdERlYnVnZ2VyLmxvZyggXCJUb3RhbCBmcmFtZXM6IFwiKyAoYUJ1ZmZlci5sZW5ndGgpICk7XG5cdFx0XHR9XG5cdFx0fSwgNjYsIHByb2cpO1xuXHR9O1xuXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZlwiO1xuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcblx0XHRjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuXHRcdGN0eC5maWxsVGV4dChcIjJkIENhbnZhcyB3b3JrcywgdG9vXCIsIDEwLCAxMDApO1xuXG5cdFx0bGV0IGZyYW1lID0gbnVsbDtcblxuXHRcdChmdW5jdGlvbiBsb29wKCkge1xuXG5cdFx0XHRpZiAoISF3aW5kb3cudXNlclRyaWdnZXJlZCkge1xuXG5cdFx0XHRcdGNhbnZhcy53aWR0aCA9IDY0MDtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9IDMyMDtcblxuXHRcdFx0XHRpZiAoZnJhbWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG5cdFx0XHRcdFx0Y2FudmFzQXBwKGNhbnZhcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0XHRcdGZvciAobGV0IHAgPSAwOyBwIDwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBwICs9IDQpIHtcblx0XHRcdFx0XHRjb25zdCBpID0gcCAvIDQ7XG5cdFx0XHRcdFx0Y29uc3QgeCA9IGkgJSBjYW52YXMud2lkdGg7XG5cdFx0XHRcdFx0Y29uc3QgeSA9IGkgLyBjYW52YXMuaGVpZ2h0ID4+PiAwO1xuXG5cdFx0XHRcdFx0Y29uc3QgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0XHRcdGNvbnN0IHIgPSA2NCArICgxMjggKiB4IC8gY2FudmFzLndpZHRoKSArICg2NCAqIE1hdGguc2luKHQgLyAxMDAwKSk7XG5cdFx0XHRcdFx0Y29uc3QgZyA9IDY0ICsgKDEyOCAqIHkgLyBjYW52YXMuaGVpZ2h0KSArICg2NCAqIE1hdGguY29zKHQgLyAxMDAwKSk7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IDEyODtcblxuXHRcdFx0XHRcdGltYWdlRGF0YS5kYXRhW3AgKyAwXSA9IHI7XG5cdFx0XHRcdFx0aW1hZ2VEYXRhLmRhdGFbcCArIDFdID0gZztcblx0XHRcdFx0XHRpbWFnZURhdGEuZGF0YVtwICsgMl0gPSBiO1xuXHRcdFx0XHRcdGltYWdlRGF0YS5kYXRhW3AgKyAzXSA9IDI1NTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcblx0XHRcdH1cblx0XHR9KCkpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcblx0XHR9O1xuXHR9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGNhbnZhcyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG5cdFx0LXdlYmtpdC1tYXNrOiB1cmwoXCIuLi9pbWFnZXMvc3ZlbHRlLWxvZ28tbWFzay5zdmdcIikgNTAlIDUwJSBjb250ZW50LWJveCB2aWV3LWJveCBuby1yZXBlYXQ7XG5cdFx0bWFzazogdXJsKFwiLi4vaW1hZ2VzL3N2ZWx0ZS1sb2dvLW1hc2suc3ZnXCIpIDUwJSA1MCUgY29udGVudC1ib3ggdmlldy1ib3ggbm8tcmVwZWF0O1xuXHR9XG5cdCN2aWV3IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH08L3N0eWxlPlxuXG48ZGl2IGlkPVwidmlld1wiPlxuXHQ8IS0taDM+e0BodG1sIGdyZWV0aW5nfTwvaDMtLT5cblx0PGNhbnZhc1xuXHRcdFx0aWQ9J2N2JyBiaW5kOnRoaXM9e2NhbnZhc31cblx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0c3R5bGU9XCJpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVzcGVlZCAhIGltcG9ydGFudDtcIlxuXHQ+PC9jYW52YXM+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFncUJDLE1BQU0sY0FBQyxDQUFDLEFBQ1AsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsSUFBSSxDQUNaLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsWUFBWSxDQUFFLElBQUksZ0NBQWdDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxRixJQUFJLENBQUUsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEFBQ25GLENBQUMsQUFDRCxLQUFLLGNBQUMsQ0FBQyxBQUNOLFVBQVUsQ0FBRSxNQUFNLEFBQ25CLENBQUMifQ== */";
    	append_dev(document_1.head, style);
    }

    function create_fragment(ctx) {
    	let div;
    	let canvas_1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			canvas_1 = element("canvas");
    			attr_dev(canvas_1, "id", "cv");
    			attr_dev(canvas_1, "width", /*width*/ ctx[1]);
    			attr_dev(canvas_1, "height", /*height*/ ctx[2]);
    			set_style(canvas_1, "image-rendering", "optimizespeed ! important");
    			attr_dev(canvas_1, "class", "svelte-90w389");
    			add_location(canvas_1, file, 685, 1, 21098);
    			attr_dev(div, "id", "view");
    			attr_dev(div, "class", "svelte-90w389");
    			add_location(div, file, 683, 0, 21049);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, canvas_1);
    			/*canvas_1_binding*/ ctx[9](canvas_1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			/*canvas_1_binding*/ ctx[9](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { greeting } = $$props;
    	let pin;
    	let view;
    	view = pin ? pin.replace(/\d(?!$)/g, "*") : "enter your pin";

    	function handleSubmit() {
    		alert(`submitted ${pin}`);
    	}

    	let canvas;
    	const width = () => !!canvas && !!canvas.width ? canvas.width : 32;
    	const height = () => !!canvas && !!canvas.height ? canvas.height : 32;
    	window.sBuffer = [];
    	window.fftReady = false;
    	window.fftProgress = -1;
    	window.fftLoader = 0;
    	window.appStarted = false;
    	window.appDelay = 0;
    	const statsBox = document.createElement("div");
    	statsBox.id = "statBox";
    	statsBox.style.display = "flex";
    	statsBox.style.flexDirection = "column";
    	statsBox.style.top = "50%";
    	statsBox.style.alignItems = "center";
    	statsBox.style.width = statsBox.style.height = "100%";
    	statsBox.style.position = "fixed";
    	statsBox.style.marginTop = "auto";
    	statsBox.style.marginLeft = "auto";
    	statsBox.style.marginRight = "auto";
    	statsBox.style.color = "#FFFFFF";
    	statsBox.style.textAlign = "center";
    	statsBox.style.left = 0;

    	statsBox.innerHTML = location.pathname.match(/(\.html)/) !== null
    	? "<img src=\"images/bw-loader.gif\" /><br />Loading... "
    	: "<img src=\"images/bw-loader.gif\" /><br />Loading... ";

    	function canvasApp(cv) {
    		window.canvasApp = canvasApp;

    		/* START Global Vars */
    		window.audio = window.aud1;

    		window.audioLoad = false;
    		window.audioReady = false;
    		window.audioName = audio.children[0].src.match(/[\/|\\]*([\w|\-|]+)\.\w\w\w$/)[1];

    		window.audio.onloadstart = typeof audio.onloadstart === "object"
    		? function () {
    				audioLoad = true;
    				return audioLoad;
    			}
    		: (function () {
    				audioLoad = true;
    				return { audioLoad: true };
    			})();

    		window.audio.oncanplaythrough = typeof audio.oncanplaythrough === "object"
    		? function () {
    				Debugger.log("audio is ready");
    				audioReady = true;
    				return audioReady;
    			}
    		: (function () {
    				/*
                        Debugger.log( "Inline video is not supported\n" );
                        return false;
                        */
    				audioReady = true;

    				return { audioReady: true };
    			})();

    		window.addEventListener("keydown", function (event) {
    			if (!event) var event = window.event; // cross-browser shenanigans

    			if (event.keyCode === 32) {
    				// this is the spacebar
    				if (window.audio.paused) window.audio.play(); else window.audio.pause();

    				event.preventDefault();
    			}

    			return true; // treat all other keys normally;
    		});

    		/* END Global Vars */
    		canvasApp.canDrawVideo = true;

    		/* Get canvas properties */
    		var canvas = canvasApp.cv = typeof canvasApp.cv === "object" ? canvasApp.cv : cv;

    		Debugger.log("Using canvas '" + canvas.id + "'\n");
    		canvas.id = "layer1";
    		canvas.alt = "Interactive Audio Visualizer";

    		canvas.src = location.pathname.match(/(\.html)/) !== null
    		? "visualizer.png"
    		: "http://" + window.location.host + "/js-demos/visualizer.png";

    		canvas.width = canvas.width || "1024";
    		canvas.height = canvas.height || "576";
    		canvas.setAttribute("onmouseover", "canvasApp.mouseOver=true;");
    		canvas.setAttribute("onmouseout", "clearInterval(canvasApp.mouseEvent);canvasAppmouseOver=false;");
    		canvas.setAttribute("onmousemove", "canvasApp.colorChange(event);");
    		canvasApp.mouseOver = false;
    		canvasApp.mouseEvent = 0;
    		canvasApp.tx = 0;

    		canvasApp.strokeStyle = window["foreground01"]
    		? window["foreground01"].style.color
    		: "rgb(127,255,127)";

    		canvasApp.blockStyle = "hsla(150,100%,100%,1.0)";

    		canvasApp.colorChange = function (evt) {
    			clearInterval(this.mouseEvent);

    			var strokeR = window["foreground02"]
    				? window["foreground02"].style.color.match(/rgb\((\d+)/)[1]
    				: canvasApp.blockStyle && canvasApp.blockStyle.match(/rgb\((\d+)/) !== null
    					? canvasApp.blockStyle.match(/rgb\((\d+)/)[1]
    					: "hsl(180, 100%, 100%)",
    				strokeB = window["foreground03"]
    				? window["foreground03"].style.color.match(/rgb\(\d+,[\s|\d]+,([\s|\d]+)/)[1]
    				: canvasApp.blockStyle && canvasApp.blockStyle.match(/rgb\((\d+)/) !== null
    					? canvasApp.blockStyle.match(/rgb\((\d+)/)[1]
    					: "hsl(180, 100%, 100%)";

    			if (canvasApp.mouseOver) window.mouseEvent = setTimeout(
    				function (evt) {
    					var width = window.innerWidth; //		 	Debugger.log( canvasApp.strokeStyle );

    					//		 	Debugger.log( "width: "+ width +" mouse x: "+ evt.clientX );
    					if (!strokeR) {
    						strokeR = 127;
    						strokeB = 255;
    					} else {
    						strokeR = parseInt(strokeR / 2);
    						if (strokeR > 127) strokeR--;
    						if (strokeR < 1) strokeR++;
    						strokeB = parseInt(strokeB);
    						if (strokeB > 255) strokeB--;
    						if (strokeB < 1) strokeB++;
    					}

    					if (evt.clientX > width / 2) {
    						canvasApp.blockStyle = "rgb(" + strokeR++ + ",127," + strokeB++ + ")";
    					} else {
    						canvasApp.blockStyle = "rgb(" + strokeR-- + ",127," + strokeB-- + ")";
    					}
    				},
    				33,
    				evt
    			); //		 	Debugger.log( canvasApp.strokeStyle );

    			return true;
    		};

    		/* Insert loader just after the canvas */
    		if (document.getElementById("statBox") === null) canvas.parentNode.appendChild(statsBox);

    		/* Track fft amplitudes */
    		var amp1 = 0, amp2 = 0;

    		if (!fftReady) {
    			Debugger.log("Progress " + fftProgress.length + "%");
    			statsBox.innerHTML = statsBox.innerHTML.match(/.+\.\.\./)[0] + fftProgress.length + "%";

    			if (fftProgress < 0) {
    				for (var p = fftProgress, z = 10; p < z; p++) {
    					canvasApp.fftLoad(audioName, p, true);
    				}

    				return appDelay = setTimeout(canvasApp, 333, canvasApp.cv);
    			} else if (fftProgress.length > 9) {
    				fftReady = true;
    				statsBox.parentNode.removeChild(statsBox);

    				if (!!window.userTriggered) {
    					window.audio.play();
    					window.audio.currentTime = 0;
    					window.audio.muted = false;
    				}
    			} else {
    				return appDelay = setTimeout(canvasApp, 333, canvasApp.cv);
    			}
    		} else if (!audioReady) {
    			//Debugger.log( audioReady );
    			if (audioLoad === false) audio.load();

    			return appDelay = setTimeout(canvasApp, 333, canvasApp.cv);
    		} else clearTimeout(appDelay);

    		if (appStarted) return appStarted;
    		let time = 0;

    		/* Textual stuff */
    		var announcement = document.title;

    		var title = window.text_title
    		? window.text_title.innerHTML
    		: "Real~Currents";

    		//Debugger.log( title );
    		var copy = window.text_copy
    		? window.text_copy.innerHTML.split(/[\n|\r]/)
    		: "";

    		//Debugger.log( copy );
    		/* Audio visualization stuff */
    		var aidx = canvasApp.aidx = 0;

    		var aBuffer = canvasApp.aBuffer = [];
    		var fBuffer = canvasApp.fBuffer = [];
    		var vBuffer = canvasApp.vBuffer = [];
    		var w = canvas.width, h = canvas.height;
    		var hcorrect = h / 2;

    		if (sBuffer.length > 0) {
    			for (var i = 1, z = sBuffer.length; i < z; i++) {
    				var a = [], f = [], v = [];

    				if (typeof sBuffer[i] !== "object") {
    					Debugger.log("sBuffer has hole at " + i + "\n");

    					for (var p = 0, z = 11, buf = true; p < z; p++) {
    						if (p < 10 && !fftProgress[p]) {
    							buf = false;
    							canvasApp.fftLoad(audioName, p, true);
    						} else if (!buf) {
    							fftReady = false;
    							appStarted = false;
    							canvas.parentNode.appendChild(statsBox);
    							return appDelay = setTimeout(canvasApp, 333, canvasApp.cv);
    						}
    					}

    					continue;
    				}

    				for (var j = 0, n = sBuffer[i].length; j < n; j++) {
    					var afv = sBuffer[i][j].split(",");

    					/* Draw a curve of the amplitude data */
    					var curveh = -afv[0] * hcorrect + hcorrect;

    					a[j] = curveh;
    					f[j] = afv[1];
    					v[j] = afv[2];
    				}

    				aBuffer.push(a);
    				fBuffer.push(f);
    				vBuffer.push(v);
    			} //Debugger.log( "V*h="+ aBuffer[i-1]*canvas.height +" w="+ canvas.width +" h="+ canvas.height +" \n" );

    			canvasApp.fftLoad(audioName, 10);
    		} else for (var i = 0, z = 2000; i < z; i++) aBuffer.push(0.5); //Debugger.log( "Total frames: "+ (aBuffer.length) );

    		var aCanvas = document.createElement("canvas");
    		var bCanvas = document.createElement("canvas");
    		aCanvas.width = bCanvas.width = w >> 2; //aBuffer[0].length;
    		aCanvas.height = bCanvas.height = canvas.height;
    		var actx = canvasApp.actx = aCanvas.getContext("2d");
    		var bctx = canvasApp.bctx = bCanvas.getContext("2d");

    		/* Draw main function */
    		function draw(ctx, w, h) {
    			var actx = canvasApp.actx, bctx = canvasApp.bctx;

    			function drawPictures(context, pictures) {
    				var pidx = 0, change = 223;
    				if (aidx > change) pidx = parseInt(aidx / change) % pictures.length;

    				if (aidx < 10) {
    					context.globalCompositeOperation = "source-out";
    					context.globalAlpha = 0.05;
    				} else if (aidx % change < 3 || change - 3 < aidx % change) {
    					context.globalCompositeOperation = "source-out";
    					context.globalAlpha = 0.25;
    				} else if (aidx % change < 6 || change - 6 < aidx % change) {
    					context.globalCompositeOperation = "screen";
    					context.globalAlpha = 0.5;
    				} else {
    					context.globalCompositeOperation = "source-in";
    					context.globalAlpha = 1;
    				}

    				context.drawImage(pictures[pidx], canvas.width / 2 - pictures[pidx].width, -40, pictures[pidx].width * 2, pictures[pidx].height * 2);
    			}

    			function drawVideo(context, video) {
    				var change = 223;

    				if (aidx < 10) {
    					context.globalCompositeOperation = "source-out";
    					context.globalAlpha = 0.05;
    				} else if (aidx % change < 3 || change - 3 < aidx % change) {
    					context.globalCompositeOperation = "source-out";
    					context.globalAlpha = 0.25;
    				} else if (aidx % change < 6 || change - 6 < aidx % change) {
    					context.globalCompositeOperation = "screen";
    					context.globalAlpha = 0.5;
    				} else {
    					context.globalCompositeOperation = "source-in";
    					context.globalAlpha = 1;
    				}

    				/* Draw video input, if any */
    				if (window.canvasApp.canDrawVideo === true) try {
    					var cCanvas = document.createElement("canvas");
    					var cctx = cCanvas.getContext("2d");
    					cCanvas.width = canvas.width / 2;
    					cCanvas.height = canvas.height;
    					cctx.globalAlpha = 1;
    					var vx = cCanvas.width - video.videoWidth / 2;
    					var vw = 3 * (video.videoHeight / canvas.height * canvas.width) / 2;
    					var vh = cCanvas.height;
    					if (video != null && video.readyState > 2 && !video.paused) cctx.drawImage(video, vx / 2, 0, vw, vh);
    					ctx.globalAlpha = 1;
    					ctx.save();
    					ctx.drawImage(cCanvas, 0, 0, cCanvas.width, canvas.height);

    					//            setTimeout(function () {
    					ctx.translate(w, 0);

    					ctx.scale(-1, 1);
    					ctx.drawImage(cCanvas, 0, 0, cCanvas.width, canvas.height);
    					ctx.restore();
    				} catch(err) {
    					Debugger.on = true; //            }, 1);
    					Debugger.log("Failed to draw " + video.id + ": " + err.stack);
    					window.canvasApp.canDrawVideo = false;
    					Debugger.on = false;
    				}
    			} // Debugger.log( "time: "+ time );

    			ctx.globalCompositeOperation = "source-over";
    			ctx.globalAlpha = 1;

    			try {
    				if (time % 2) {
    					//Debugger.on = true;
    					bctx.clearRect(0, 0, w, h);

    					context.globalCompositeOperation = "source-over";
    					context.globalAlpha = 1;

    					if (window.pictures && window.pictures.children.length > 0) {
    						drawPictures(ctx, window.pictures.children);
    						ctx.globalCompositeOperation = "multiply";
    						ctx.globalAlpha = 0.05;
    					} else if (window.canvasApp.canDrawVideo === true) {
    						drawVideo(actx, audio);
    						ctx.globalCompositeOperation = "multiply";
    						ctx.globalAlpha = 0.5;
    					}

    					for (var o = 6; o > 0; o--) {
    						aidx = canvasApp.aidx = graphSamples(actx, audio, aBuffer, fBuffer, vBuffer, aidx, w, h, o);
    					}

    					ctx.globalAlpha = 1;
    					ctx.drawImage(aCanvas, 0, 0, w >> 1, h);
    					ctx.save();
    					ctx.translate(w, 0);
    					ctx.scale(-1, 1);
    					ctx.drawImage(aCanvas, 0, 0, w >> 1, h);
    					ctx.restore();
    					bctx.drawImage(aCanvas, 1, 2, (w >> 2) - 1, h - 4);
    					bctx.fillStyle = "rgba(0%,0%,0%,0.005)";
    					bctx.fillRect(0, 0, w, h);
    				} else {
    					actx.clearRect(0, 0, w, h);
    					actx.drawImage(bCanvas, 1, 2, (w >> 2) - 1, h - 4);

    					actx.fillStyle = window["background02"]
    					? window["background02"].style.color
    					: "rgba(0%,0%,0%,0.025)";

    					actx.fillRect(0, 0, w, h);
    				}
    			} catch(err) {
    				ctx.globalCompositeOperation = "source-over";
    				ctx.globalAlpha = 1;
    				Debugger.on = true;
    				Debugger.log("Failed to draw: " + err.stack);
    				window.canvasApp.canDrawVideo = false;
    				Debugger.on = false;
    			}

    			ctx.globalCompositeOperation = "source-over";
    			ctx.globalAlpha = 1;

    			/* Text */
    			ctx.lineWidth = 2;

    			ctx.fillStyle = window["foreground01"]
    			? window["foreground01"].style.color
    			: "hsl(180, 100%, 100%)";

    			ctx.strokeStyle = window["foreground02"]
    			? window["foreground02"].style.color
    			: "#fff";

    			//Debugger.log( "aBuffer index: "+ aidx );
    			if (aidx < 100) {
    				ctx.font = "bold " + aidx * 2 + "px Comfortaa";

    				if (aidx % 2 === 0) {
    					ctx.fillText(announcement, 320 - aidx * 4, h >> 1);
    				} else ctx.strokeText(announcement, 320 - aidx * 4, h >> 1);
    			} else if (aidx > 300) {
    				ctx.font = "bold 12px Verdana";
    				ctx.fillText(title, 64, 128);
    				if (aidx > 1500 && aidx < 3500) for (var i = 0, z = copy.length; i < z; i++) ctx.fillText(copy[i], w >> 1, 2500 - aidx + i * 20);
    			}

    			time++;

    			if (time == "undefined") {
    				time = 0;
    			}
    		} //Debugger.log( "time: "+ time );

    		/* Graph samples */
    		function graphSamples(ctx, audio, abuf, fbuf, vbuf, aidx, w, h, o) {
    			try {
    				if (abuf.length < 1) return aidx;
    				if (audio.paused) return aidx;
    				if (!(audio.readyState > 3)) return aidx;
    				var idx = Math.floor(audio.currentTime * 15.03) - 6;

    				if (!abuf[parseInt(idx + o)]) {
    					Debugger.log("abuf[" + idx + "] has not been recieved\n");
    					return aidx;
    				}

    				//Debugger.log( "aBuffer index: "+ idx );
    				/* Reset canvas ctx properties */
    				ctx.globalCompositeOperation = "source-over";

    				ctx.globalAlpha = 1;
    				ctx.font = "bold 10px Verdana";
    				var hcorrect = h / 2;

    				/* Plot each sample on line that moves from left to right
                     * until we reach the end of the screen or the end of the sample
                     */
    				if (idx < 1) {
    					ctx.moveTo(0, hcorrect);
    				} else ctx.moveTo(0, -(abuf[parseInt(idx + o)][0] * 2 * hcorrect) + hcorrect);

    				var verts = 6, hidx = parseInt(idx + o);
    				ctx.beginPath();

    				if (aidx % 6) canvasApp.blockStyle = window["foreground02"]
    				? window["foreground02"].style.color
    				: "hsl(180, 100%, 100%)"; else canvasApp.blockStyle = window["foreground03"]
    				? window["foreground03"].style.color
    				: "hsl(180, 100%, 100%)";

    				ctx.fillStyle = canvasApp.blockStyle.replace(/,\s?0\.\d+\)/, ",1.0)");

    				for (var i = 0, z = abuf[hidx].length, n = z; i < z; i++) {
    					/* Draw a curve of the amplitude data */
    					if (i > 0) {
    						ctx.strokeStyle = canvasApp.strokeStyle;
    						ctx.strokeWidth = canvasApp.strokeWidth;
    						ctx.quadraticCurveTo((i - 1) * 4, abuf[hidx][i] + o, i * 4, abuf[hidx][i] + o);
    					}

    					/* Draw bars for the eq levels (fft) data */
    					var barh = h - vbuf[hidx][i] * h;

    					amp2 = amp1;
    					amp1 = i === 3 && vbuf[hidx][i] > 0.05 ? vbuf[hidx][i] : amp1;
    					verts = amp2 !== amp1 ? parseInt(Math.random() * 10) : verts;

    					if (i <= n) {
    						var freq = Math.floor(fbuf[hidx][i]);

    						//ctx.fillStyle = "hsl("+ (200 - vbuf[parseInt(idx + o)][i]*180) +", 100%, 50%)";
    						ctx.fillStyle = canvasApp.blockStyle.replace(/,\s?0\.\d+\)/, ",1.0)").replace(/hsla\((150),\s?(100)\%,\s?(70)\%/, "hsla($1, " + vbuf[parseInt(idx + o)][i] * 50 + "%, $3%");

    						ctx.fillRect(i * 4, barh, 4, h);
    					}
    				}

    				polygon(ctx, verts, idx % w - (w >> 3), idx % h, parseFloat(amp2 + amp1) / 2 * w, idx, 0);
    				ctx.stroke();
    				return ++idx;
    			} catch(e) {
    				Debugger.log("graphSamples failed: " + e.message + " at frame " + aidx + "\n" + e.stack);
    				return aidx;
    			}
    		}

    		/* Draw polygons */
    		function polygon(c, n, x, y, r, angle, counterclockwise, order) {
    			var order = order || null;

    			if (order === ( "first")) {
    				c.beginPath();
    			}

    			var angle = angle || 0;
    			var counterclockwise = counterclockwise || false;

    			//Compute vertex position and begin a subpath there
    			c.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));

    			var delta = 2 * Math.PI / n;

    			//For remaining verts,
    			for (var i = 1; i < n; i++) {
    				//compute angle of this vertex,
    				angle += counterclockwise ? -delta : delta;

    				//then compute position of vertex and add line
    				c.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
    			}

    			//Connect last vertex back to first
    			c.closePath();

    			if (order === ( "last")) {
    				//Fill the poly
    				c.fill();

    				//Outline the poly
    				c.stroke();
    			}
    		}

    		/* Begin draw loop */
    		try {
    			var context = canvas.getContext("2d");
    			time = 0;
    			drawLoop = setInterval(draw, 31, context, canvas.width, canvas.height);
    			Debugger.log("Draw loop started");
    			appStarted = true;
    			return appStarted;
    		} catch(e) {
    			Debugger.log("drawLoop failed to start");
    		}
    	}

    	canvasApp.fftLoad = function (aname, pr, single) {
    		//audio.load();
    		var part;

    		if (pr < 0) {
    			fftProgress = [];
    			part = fftProgress.length;
    		} else {
    			part = pr;
    		}

    		if (pr > 99 || part > 99) {
    			clearTimeout(fftLoader);
    			return true;
    		} else {
    			var sr = document.createElement("script");

    			sr.src = part < 10
    			? "https://s3-us-west-1.amazonaws.com/real-currents/js-demos/data/" + aname + "-0" + part + ".js"
    			: "https://s3-us-west-1.amazonaws.com/real-currents/js-demos/data/" + aname + "-" + part + ".js";

    			document.body.appendChild(sr);
    			if (part < 99 && !single) fftLoader = setTimeout(canvasApp.fftLoad, 99, aname, ++part);
    		}

    		return true;
    	};

    	canvasApp.updateFFT = function (prog) {
    		setTimeout(
    			function (prog) {
    				fftProgress[prog] = true;
    				Debugger.log(fftProgress[prog]);
    				var aidx = canvasApp.aidx;
    				var aBuffer = canvasApp.aBuffer;
    				var fBuffer = canvasApp.fBuffer;
    				var vBuffer = canvasApp.vBuffer;
    				var firstBreak = false;
    				var w = canvasApp.cv.width, h = canvasApp.cv.height;
    				var hcorrect = h / 2;
    				if (typeof sBuffer !== "object" || typeof aBuffer !== "object" || typeof fBuffer !== "object" || typeof vBuffer !== "object") return Debugger.log("canvas Buffers are undefined");
    				Debugger.log("Progress " + fftProgress.length + "%");
    				if (fftProgress.length < 10) return;

    				if (sBuffer.length > 0) {
    					var idx = aidx > aBuffer.length ? aidx : aBuffer.length - 1;

    					for (var i = 0, z = aBuffer.length; i < z; i++) {
    						if (!aBuffer[i]) {
    							idx = i;
    							break;
    						}
    					}

    					for (var i = idx, z = sBuffer.length; i < z; i++) {
    						var a = [], f = [], v = [];

    						if (typeof sBuffer[i] !== "object") {
    							if (!firstBreak) {
    								Debugger.log("sBuffer has hole at " + i + "\n");

    								for (var p in fftProgress) {
    									if (p < prog && !fftProgress[p]) canvasApp.fftLoad(audioName, p, true);
    								}

    								firstBreak = true;
    							}

    							continue;
    						}

    						for (var j = 0, n = sBuffer[i].length; j < n; j++) {
    							var afv = sBuffer[i][j].split(",");

    							/* Draw a curve of the amplitude data */
    							var curveh = -afv[0] * hcorrect + hcorrect;

    							a[j] = curveh;
    							f[j] = afv[1];
    							v[j] = afv[2];
    						}

    						aBuffer.push(a);
    						fBuffer.push(f);
    						vBuffer.push(v);
    					}

    					Debugger.log("Total frames: " + aBuffer.length);
    				}
    			},
    			66,
    			prog
    		);
    	};

    	onMount(() => {
    		const ctx = canvas.getContext("2d");
    		ctx.fillStyle = "#00f";
    		ctx.fillRect(0, 0, canvas.width, canvas.height);
    		ctx.fillStyle = "#fff";
    		ctx.font = "20px Arial";
    		ctx.fillText("2d Canvas works, too", 10, 100);
    		let frame = null;

    		(function loop() {
    			if (!!window.userTriggered) {
    				$$invalidate(0, canvas.width = 640, canvas);
    				$$invalidate(0, canvas.height = 320, canvas);

    				if (frame !== null) {
    					cancelAnimationFrame(frame);
    					canvasApp(canvas);
    				}
    			} else {
    				frame = requestAnimationFrame(loop);
    				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    				for (let p = 0; p < imageData.data.length; p += 4) {
    					const i = p / 4;
    					const x = i % canvas.width;
    					const y = i / canvas.height >>> 0;
    					const t = window.performance.now();
    					const r = 64 + 128 * x / canvas.width + 64 * Math.sin(t / 1000);
    					const g = 64 + 128 * y / canvas.height + 64 * Math.cos(t / 1000);
    					const b = 128;
    					imageData.data[p + 0] = r;
    					imageData.data[p + 1] = g;
    					imageData.data[p + 2] = b;
    					imageData.data[p + 3] = 255;
    				}

    				ctx.putImageData(imageData, 0, 0);
    			}
    		})();

    		return () => {
    			cancelAnimationFrame(frame);
    		};
    	});

    	const writable_props = ["greeting"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(0, canvas = $$value);
    		});
    	}

    	$$self.$set = $$props => {
    		if ("greeting" in $$props) $$invalidate(3, greeting = $$props.greeting);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		greeting,
    		pin,
    		view,
    		handleSubmit,
    		canvas,
    		width,
    		height,
    		statsBox,
    		canvasApp
    	});

    	$$self.$inject_state = $$props => {
    		if ("greeting" in $$props) $$invalidate(3, greeting = $$props.greeting);
    		if ("pin" in $$props) pin = $$props.pin;
    		if ("view" in $$props) view = $$props.view;
    		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		canvas,
    		width,
    		height,
    		greeting,
    		view,
    		statsBox,
    		canvasApp,
    		pin,
    		handleSubmit,
    		canvas_1_binding
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document_1.getElementById("svelte-90w389-style")) add_css();
    		init(this, options, instance, create_fragment, safe_not_equal, { greeting: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*greeting*/ ctx[3] === undefined && !("greeting" in props)) {
    			console.warn("<App> was created without expected prop 'greeting'");
    		}
    	}

    	get greeting() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greeting(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */

    function readable(value, start) {
      return {
        subscribe: writable(value, start).subscribe
      };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */


    function writable(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var stop;
      var subscribers = [];

      function set(new_value) {
        if (safe_not_equal(value, new_value)) {
          value = new_value;

          if (stop) {
            // store is ready
            var run_queue = !subscriber_queue.length;

            for (var i = 0; i < subscribers.length; i += 1) {
              var s = subscribers[i];
              s[1]();
              subscriber_queue.push(s, value);
            }

            if (run_queue) {
              for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
                subscriber_queue[_i][0](subscriber_queue[_i + 1]);
              }

              subscriber_queue.length = 0;
            }
          }
        }
      }

      function update(fn) {
        set(fn(value));
      }

      function subscribe(run) {
        var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var subscriber = [run, invalidate];
        subscribers.push(subscriber);

        if (subscribers.length === 1) {
          stop = start(set) || noop;
        }

        run(value);
        return function () {
          var index = subscribers.indexOf(subscriber);

          if (index !== -1) {
            subscribers.splice(index, 1);
          }

          if (subscribers.length === 0) {
            stop();
            stop = null;
          }
        };
      }

      return {
        set: set,
        update: update,
        subscribe: subscribe
      };
    }

    var RENDERER = {};
    var LAYER = {};
    var PARENT = {};
    var CAMERA = {};
    function get_scene() {
      return getContext(RENDERER);
    }
    function get_layer() {
      return getContext(LAYER);
    }
    function get_parent() {
      return getContext(PARENT);
    }
    function get_camera() {
      return getContext(CAMERA);
    }
    function set_layer(layer) {
      setContext(LAYER, layer);
    }
    function set_parent(parent) {
      setContext(PARENT, parent);
    }

    function remove_index(array, index) {
      array[index] = array[array.length - 1];
      array.pop();
    }

    function remove_item(array, item) {
      var index = array.indexOf(item);
      if (~index) remove_index(array, index);
    }

    function create_layer(index, invalidate) {
      var child_index = 0;
      var meshes = [];
      var transparent_meshes = [];
      var child_layers = [];
      var layer = {
        index: 0,
        meshes: meshes,
        transparent_meshes: transparent_meshes,
        child_layers: child_layers,
        needs_sort: false,
        needs_transparency_sort: true,
        add_mesh: function add_mesh(mesh, existing) {
          if (existing) {
            remove_item(mesh.transparent ? meshes : transparent_meshes, mesh);
          }

          if (mesh.transparent) {
            transparent_meshes.push(mesh);
            layer.needs_transparency_sort = true;
          } else {
            meshes.push(mesh);
          }

          onDestroy(function () {
            remove_item(meshes, mesh);
            remove_item(transparent_meshes, mesh);
            invalidate();
          });
        },
        add_child: function add_child() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : child_index++;
          var child_layer = create_layer(index, invalidate);
          child_layers.push(child_layer);
          layer.needs_sort = true;
          onDestroy(function () {
            remove_item(child_layers, child_layer);
            layer.needs_sort = true;
            invalidate();
          });
          return child_layer;
        }
      };
      return layer;
    }

    function process_color(color) {
      if (typeof color === 'number') {
        var r = (color & 0xff0000) >> 16;
        var g = (color & 0x00ff00) >> 8;
        var b = color & 0x0000ff;
        return new Float32Array([r / 255, g / 255, b / 255]);
      }

      return color;
    }
    function normalize(out) {
      var vector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : out;
      var total = 0;

      for (var i = 0; i < vector.length; i += 1) {
        total += vector[i] * vector[i];
      }

      var mag = Math.sqrt(total);
      out[0] = vector[0] / mag;
      out[1] = vector[1] / mag;
      out[2] = vector[2] / mag;
      return out;
    }
    function create_worker(url, fn) {
      var worker = new Worker(url);
      var code = fn.toString().replace(/^(function.+?|.+?=>\s*)\{/g, '').slice(0, -1);
      worker.postMessage(code);
      return worker;
    }
    function memoize(fn) {
      var cache = new Map();
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var hash = JSON.stringify(args);
        if (!cache.has(hash)) cache.set(hash, fn.apply(void 0, args));
        return cache.get(hash);
      };
    }

    /**
     * Common utilities
     * @module glMatrix
     */
    // Configuration Constants
    var EPSILON = 0.000001;
    var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    var RANDOM = Math.random;
    if (!Math.hypot) Math.hypot = function () {
      var y = 0,
          i = arguments.length;

      while (i--) {
        y += arguments[i] * arguments[i];
      }

      return Math.sqrt(y);
    };

    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */

    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */

    function create() {
      var out = new ARRAY_TYPE(16);

      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
      }

      out[0] = 1;
      out[5] = 1;
      out[10] = 1;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {ReadonlyMat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */

    function clone(a) {
      var out = new ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {mat4} out
     */

    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */

    function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var out = new ARRAY_TYPE(16);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }
    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */

    function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */

    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {mat4} out
     */

    function transpose(out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        var a12 = a[6],
            a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }

      return out;
    }
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {mat4} out
     */

    function invert(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    }
    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {mat4} out
     */

    function adjoint(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    }
    /**
     * Calculates the determinant of a mat4
     *
     * @param {ReadonlyMat4} a the source matrix
     * @returns {Number} determinant of a
     */

    function determinant(a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {mat4} out
     */

    function multiply(out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15]; // Cache only the current line of the second matrix

      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    }
    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to translate
     * @param {ReadonlyVec3} v vector to translate by
     * @returns {mat4} out
     */

    function translate(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    }
    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to scale
     * @param {ReadonlyVec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/

    function scale(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {ReadonlyVec3} axis the axis to rotate around
     * @returns {mat4} out
     */

    function rotate(out, a, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.hypot(x, y, z);
      var s, c, t;
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;
      var b00, b01, b02;
      var b10, b11, b12;
      var b20, b21, b22;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11]; // Construct the elements of the rotation matrix

      b00 = x * x * t + c;
      b01 = y * x * t + z * s;
      b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;
      b11 = y * y * t + c;
      b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;
      b21 = y * z * t - x * s;
      b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      return out;
    }
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateX(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    }
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateY(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    }
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateZ(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    }
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {ReadonlyVec3} v Translation vector
     * @returns {mat4} out
     */

    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {ReadonlyVec3} v Scaling vector
     * @returns {mat4} out
     */

    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {ReadonlyVec3} axis the axis to rotate around
     * @returns {mat4} out
     */

    function fromRotation(out, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.hypot(x, y, z);
      var s, c, t;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c; // Perform rotation-specific matrix multiplication

      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromXRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromYRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromZRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @returns {mat4} out
     */

    function fromRotationTranslation(out, q, v) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out[0] = 1 - (yy + zz);
      out[1] = xy + wz;
      out[2] = xz - wy;
      out[3] = 0;
      out[4] = xy - wz;
      out[5] = 1 - (xx + zz);
      out[6] = yz + wx;
      out[7] = 0;
      out[8] = xz + wy;
      out[9] = yz - wx;
      out[10] = 1 - (xx + yy);
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {ReadonlyQuat2} a Dual Quaternion
     * @returns {mat4} mat4 receiving operation result
     */

    function fromQuat2(out, a) {
      var translation = new ARRAY_TYPE(3);
      var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];
      var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

      if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
      } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
      }

      fromRotationTranslation(out, a, translation);
      return out;
    }
    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getTranslation(out, mat) {
      out[0] = mat[12];
      out[1] = mat[13];
      out[2] = mat[14];
      return out;
    }
    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getScaling(out, mat) {
      var m11 = mat[0];
      var m12 = mat[1];
      var m13 = mat[2];
      var m21 = mat[4];
      var m22 = mat[5];
      var m23 = mat[6];
      var m31 = mat[8];
      var m32 = mat[9];
      var m33 = mat[10];
      out[0] = Math.hypot(m11, m12, m13);
      out[1] = Math.hypot(m21, m22, m23);
      out[2] = Math.hypot(m31, m32, m33);
      return out;
    }
    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */

    function getRotation(out, mat) {
      var scaling = new ARRAY_TYPE(3);
      getScaling(scaling, mat);
      var is1 = 1 / scaling[0];
      var is2 = 1 / scaling[1];
      var is3 = 1 / scaling[2];
      var sm11 = mat[0] * is1;
      var sm12 = mat[1] * is2;
      var sm13 = mat[2] * is3;
      var sm21 = mat[4] * is1;
      var sm22 = mat[5] * is2;
      var sm23 = mat[6] * is3;
      var sm31 = mat[8] * is1;
      var sm32 = mat[9] * is2;
      var sm33 = mat[10] * is3;
      var trace = sm11 + sm22 + sm33;
      var S = 0;

      if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
      } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
      } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
      } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
      }

      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @param {ReadonlyVec3} s Scaling vector
     * @returns {mat4} out
     */

    function fromRotationTranslationScale(out, q, v, s) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];
      out[0] = (1 - (yy + zz)) * sx;
      out[1] = (xy + wz) * sx;
      out[2] = (xz - wy) * sx;
      out[3] = 0;
      out[4] = (xy - wz) * sy;
      out[5] = (1 - (xx + zz)) * sy;
      out[6] = (yz + wx) * sy;
      out[7] = 0;
      out[8] = (xz + wy) * sz;
      out[9] = (yz - wx) * sz;
      out[10] = (1 - (xx + yy)) * sz;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @param {ReadonlyVec3} s Scaling vector
     * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */

    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];
      var ox = o[0];
      var oy = o[1];
      var oz = o[2];
      var out0 = (1 - (yy + zz)) * sx;
      var out1 = (xy + wz) * sx;
      var out2 = (xz - wy) * sx;
      var out4 = (xy - wz) * sy;
      var out5 = (1 - (xx + zz)) * sy;
      var out6 = (yz + wx) * sy;
      var out8 = (xz + wy) * sz;
      var out9 = (yz - wx) * sz;
      var out10 = (1 - (xx + yy)) * sz;
      out[0] = out0;
      out[1] = out1;
      out[2] = out2;
      out[3] = 0;
      out[4] = out4;
      out[5] = out5;
      out[6] = out6;
      out[7] = 0;
      out[8] = out8;
      out[9] = out9;
      out[10] = out10;
      out[11] = 0;
      out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
      out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
      out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
      out[15] = 1;
      return out;
    }
    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {ReadonlyQuat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */

    function fromQuat(out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;
      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;
      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function frustum(out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left);
      var tb = 1 / (top - bottom);
      var nf = 1 / (near - far);
      out[0] = near * 2 * rl;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = near * 2 * tb;
      out[6] = 0;
      out[7] = 0;
      out[8] = (right + left) * rl;
      out[9] = (top + bottom) * tb;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = far * near * 2 * nf;
      out[15] = 0;
      return out;
    }
    /**
     * Generates a perspective projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */

    function perspectiveNO(out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf;
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[15] = 0;

      if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
      } else {
        out[10] = -1;
        out[14] = -2 * near;
      }

      return out;
    }
    /**
     * Alias for {@link mat4.perspectiveNO}
     * @function
     */

    var perspective = perspectiveNO;
    /**
     * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
     * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */

    function perspectiveZO(out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf;
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[15] = 0;

      if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
      } else {
        out[10] = -1;
        out[14] = -near;
      }

      return out;
    }
    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function perspectiveFromFieldOfView(out, fov, near, far) {
      var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
      var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
      var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
      var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
      var xScale = 2.0 / (leftTan + rightTan);
      var yScale = 2.0 / (upTan + downTan);
      out[0] = xScale;
      out[1] = 0.0;
      out[2] = 0.0;
      out[3] = 0.0;
      out[4] = 0.0;
      out[5] = yScale;
      out[6] = 0.0;
      out[7] = 0.0;
      out[8] = -((leftTan - rightTan) * xScale * 0.5);
      out[9] = (upTan - downTan) * yScale * 0.5;
      out[10] = far / (near - far);
      out[11] = -1.0;
      out[12] = 0.0;
      out[13] = 0.0;
      out[14] = far * near / (near - far);
      out[15] = 0.0;
      return out;
    }
    /**
     * Generates a orthogonal projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function orthoNO(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    }
    /**
     * Alias for {@link mat4.orthoNO}
     * @function
     */

    var ortho = orthoNO;
    /**
     * Generates a orthogonal projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
     * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function orthoZO(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = near * nf;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {ReadonlyVec3} eye Position of the viewer
     * @param {ReadonlyVec3} center Point the viewer is looking at
     * @param {ReadonlyVec3} up vec3 pointing up
     * @returns {mat4} out
     */

    function lookAt(out, eye, center, up) {
      var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
      var eyex = eye[0];
      var eyey = eye[1];
      var eyez = eye[2];
      var upx = up[0];
      var upy = up[1];
      var upz = up[2];
      var centerx = center[0];
      var centery = center[1];
      var centerz = center[2];

      if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
        return identity(out);
      }

      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;
      len = 1 / Math.hypot(z0, z1, z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;
      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.hypot(x0, x1, x2);

      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      len = Math.hypot(y0, y1, y2);

      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      }

      out[0] = x0;
      out[1] = y0;
      out[2] = z0;
      out[3] = 0;
      out[4] = x1;
      out[5] = y1;
      out[6] = z1;
      out[7] = 0;
      out[8] = x2;
      out[9] = y2;
      out[10] = z2;
      out[11] = 0;
      out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out[15] = 1;
      return out;
    }
    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {ReadonlyVec3} eye Position of the viewer
     * @param {ReadonlyVec3} center Point the viewer is looking at
     * @param {ReadonlyVec3} up vec3 pointing up
     * @returns {mat4} out
     */

    function targetTo(out, eye, target, up) {
      var eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];
      var z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];
      var len = z0 * z0 + z1 * z1 + z2 * z2;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }

      var x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;
      len = x0 * x0 + x1 * x1 + x2 * x2;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      out[0] = x0;
      out[1] = x1;
      out[2] = x2;
      out[3] = 0;
      out[4] = z1 * x2 - z2 * x1;
      out[5] = z2 * x0 - z0 * x2;
      out[6] = z0 * x1 - z1 * x0;
      out[7] = 0;
      out[8] = z0;
      out[9] = z1;
      out[10] = z2;
      out[11] = 0;
      out[12] = eyex;
      out[13] = eyey;
      out[14] = eyez;
      out[15] = 1;
      return out;
    }
    /**
     * Returns a string representation of a mat4
     *
     * @param {ReadonlyMat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */

    function str(a) {
      return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
    }
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */

    function frob(a) {
      return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
    }
    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {mat4} out
     */

    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    }
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {mat4} out
     */

    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    }
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */

    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      out[9] = a[9] * b;
      out[10] = a[10] * b;
      out[11] = a[11] * b;
      out[12] = a[12] * b;
      out[13] = a[13] * b;
      out[14] = a[14] * b;
      out[15] = a[15] * b;
      return out;
    }
    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */

    function multiplyScalarAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      out[4] = a[4] + b[4] * scale;
      out[5] = a[5] + b[5] * scale;
      out[6] = a[6] + b[6] * scale;
      out[7] = a[7] + b[7] * scale;
      out[8] = a[8] + b[8] * scale;
      out[9] = a[9] + b[9] * scale;
      out[10] = a[10] + b[10] * scale;
      out[11] = a[11] + b[11] * scale;
      out[12] = a[12] + b[12] * scale;
      out[13] = a[13] + b[13] * scale;
      out[14] = a[14] + b[14] * scale;
      out[15] = a[15] + b[15] * scale;
      return out;
    }
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyMat4} a The first matrix.
     * @param {ReadonlyMat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */

    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {ReadonlyMat4} a The first matrix.
     * @param {ReadonlyMat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */

    function equals(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
      var a8 = a[8],
          a9 = a[9],
          a10 = a[10],
          a11 = a[11];
      var a12 = a[12],
          a13 = a[13],
          a14 = a[14],
          a15 = a[15];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      var b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
      var b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11];
      var b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
    }
    /**
     * Alias for {@link mat4.multiply}
     * @function
     */

    var mul = multiply;
    /**
     * Alias for {@link mat4.subtract}
     * @function
     */

    var sub = subtract;

    var mat4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create,
        clone: clone,
        copy: copy,
        fromValues: fromValues,
        set: set,
        identity: identity,
        transpose: transpose,
        invert: invert,
        adjoint: adjoint,
        determinant: determinant,
        multiply: multiply,
        translate: translate,
        scale: scale,
        rotate: rotate,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ,
        fromTranslation: fromTranslation,
        fromScaling: fromScaling,
        fromRotation: fromRotation,
        fromXRotation: fromXRotation,
        fromYRotation: fromYRotation,
        fromZRotation: fromZRotation,
        fromRotationTranslation: fromRotationTranslation,
        fromQuat2: fromQuat2,
        getTranslation: getTranslation,
        getScaling: getScaling,
        getRotation: getRotation,
        fromRotationTranslationScale: fromRotationTranslationScale,
        fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
        fromQuat: fromQuat,
        frustum: frustum,
        perspectiveNO: perspectiveNO,
        perspective: perspective,
        perspectiveZO: perspectiveZO,
        perspectiveFromFieldOfView: perspectiveFromFieldOfView,
        orthoNO: orthoNO,
        ortho: ortho,
        orthoZO: orthoZO,
        lookAt: lookAt,
        targetTo: targetTo,
        str: str,
        frob: frob,
        add: add,
        subtract: subtract,
        multiplyScalar: multiplyScalar,
        multiplyScalarAndAdd: multiplyScalarAndAdd,
        exactEquals: exactEquals,
        equals: equals,
        mul: mul,
        sub: sub
    });

    /**
     * 3 Dimensional Vector
     * @module vec3
     */

    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */

    function create$1() {
      var out = new ARRAY_TYPE(3);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }

      return out;
    }
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {ReadonlyVec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */

    function clone$1(a) {
      var out = new ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    /**
     * Calculates the length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return Math.hypot(x, y, z);
    }
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */

    function fromValues$1(x, y, z) {
      var out = new ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the source vector
     * @returns {vec3} out
     */

    function copy$1(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */

    function set$1(out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function add$1(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function subtract$1(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }
    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function multiply$1(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    }
    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    }
    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to ceil
     * @returns {vec3} out
     */

    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      return out;
    }
    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to floor
     * @returns {vec3} out
     */

    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      return out;
    }
    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    }
    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    }
    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to round
     * @returns {vec3} out
     */

    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      return out;
    }
    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */

    function scale$1(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    }
    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */

    function scaleAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      return out;
    }
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} distance between a and b
     */

    function distance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return Math.hypot(x, y, z);
    }
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} squared distance between a and b
     */

    function squaredDistance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return x * x + y * y + z * z;
    }
    /**
     * Calculates the squared length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return x * x + y * y + z * z;
    }
    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to negate
     * @returns {vec3} out
     */

    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }
    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to invert
     * @returns {vec3} out
     */

    function inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out;
    }
    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a vector to normalize
     * @returns {vec3} out
     */

    function normalize$1(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var len = x * x + y * y + z * z;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
      }

      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {vec3} out
     */

    function cross(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */

    function lerp(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    }
    /**
     * Performs a hermite interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {ReadonlyVec3} c the third operand
     * @param {ReadonlyVec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */

    function hermite(out, a, b, c, d, t) {
      var factorTimes2 = t * t;
      var factor1 = factorTimes2 * (2 * t - 3) + 1;
      var factor2 = factorTimes2 * (t - 2) + t;
      var factor3 = factorTimes2 * (t - 1);
      var factor4 = factorTimes2 * (3 - 2 * t);
      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
      return out;
    }
    /**
     * Performs a bezier interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {ReadonlyVec3} c the third operand
     * @param {ReadonlyVec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */

    function bezier(out, a, b, c, d, t) {
      var inverseFactor = 1 - t;
      var inverseFactorTimesTwo = inverseFactor * inverseFactor;
      var factorTimes2 = t * t;
      var factor1 = inverseFactorTimesTwo * inverseFactor;
      var factor2 = 3 * t * inverseFactorTimesTwo;
      var factor3 = 3 * factorTimes2 * inverseFactor;
      var factor4 = factorTimes2 * t;
      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
      return out;
    }
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */

    function random(out, scale) {
      scale = scale || 1.0;
      var r = RANDOM() * 2.0 * Math.PI;
      var z = RANDOM() * 2.0 - 1.0;
      var zScale = Math.sqrt(1.0 - z * z) * scale;
      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale;
      return out;
    }
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyMat4} m matrix to transform with
     * @returns {vec3} out
     */

    function transformMat4(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }
    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyMat3} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */

    function transformMat3(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x * m[0] + y * m[3] + z * m[6];
      out[1] = x * m[1] + y * m[4] + z * m[7];
      out[2] = x * m[2] + y * m[5] + z * m[8];
      return out;
    }
    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @param {vec3} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyQuat} q quaternion to transform with
     * @returns {vec3} out
     */

    function transformQuat(out, a, q) {
      // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
      var x = a[0],
          y = a[1],
          z = a[2]; // var qvec = [qx, qy, qz];
      // var uv = vec3.cross([], qvec, a);

      var uvx = qy * z - qz * y,
          uvy = qz * x - qx * z,
          uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

      var uuvx = qy * uvz - qz * uvy,
          uuvy = qz * uvx - qx * uvz,
          uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

      var w2 = qw * 2;
      uvx *= w2;
      uvy *= w2;
      uvz *= w2; // vec3.scale(uuv, uuv, 2);

      uuvx *= 2;
      uuvy *= 2;
      uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

      out[0] = x + uvx + uuvx;
      out[1] = y + uvy + uuvy;
      out[2] = z + uvz + uuvz;
      return out;
    }
    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */

    function rotateX$1(out, a, b, rad) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[0];
      r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
      r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */

    function rotateY$1(out, a, b, rad) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */

    function rotateZ$1(out, a, b, rad) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
      r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
      r[2] = p[2]; //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    /**
     * Get the angle between two 3D vectors
     * @param {ReadonlyVec3} a The first operand
     * @param {ReadonlyVec3} b The second operand
     * @returns {Number} The angle in radians
     */

    function angle(a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          bx = b[0],
          by = b[1],
          bz = b[2],
          mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
          mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
          mag = mag1 * mag2,
          cosine = mag && dot(a, b) / mag;
      return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }
    /**
     * Set the components of a vec3 to zero
     *
     * @param {vec3} out the receiving vector
     * @returns {vec3} out
     */

    function zero(out) {
      out[0] = 0.0;
      out[1] = 0.0;
      out[2] = 0.0;
      return out;
    }
    /**
     * Returns a string representation of a vector
     *
     * @param {ReadonlyVec3} a vector to represent as a string
     * @returns {String} string representation of the vector
     */

    function str$1(a) {
      return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
    }
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyVec3} a The first vector.
     * @param {ReadonlyVec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function exactEquals$1(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {ReadonlyVec3} a The first vector.
     * @param {ReadonlyVec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function equals$1(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
    }
    /**
     * Alias for {@link vec3.subtract}
     * @function
     */

    var sub$1 = subtract$1;
    /**
     * Alias for {@link vec3.multiply}
     * @function
     */

    var mul$1 = multiply$1;
    /**
     * Alias for {@link vec3.divide}
     * @function
     */

    var div = divide;
    /**
     * Alias for {@link vec3.distance}
     * @function
     */

    var dist = distance;
    /**
     * Alias for {@link vec3.squaredDistance}
     * @function
     */

    var sqrDist = squaredDistance;
    /**
     * Alias for {@link vec3.length}
     * @function
     */

    var len = length;
    /**
     * Alias for {@link vec3.squaredLength}
     * @function
     */

    var sqrLen = squaredLength;
    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */

    var forEach = function () {
      var vec = create$1();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }

        return a;
      };
    }();

    var vec3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$1,
        clone: clone$1,
        length: length,
        fromValues: fromValues$1,
        copy: copy$1,
        set: set$1,
        add: add$1,
        subtract: subtract$1,
        multiply: multiply$1,
        divide: divide,
        ceil: ceil,
        floor: floor,
        min: min,
        max: max,
        round: round,
        scale: scale$1,
        scaleAndAdd: scaleAndAdd,
        distance: distance,
        squaredDistance: squaredDistance,
        squaredLength: squaredLength,
        negate: negate,
        inverse: inverse,
        normalize: normalize$1,
        dot: dot,
        cross: cross,
        lerp: lerp,
        hermite: hermite,
        bezier: bezier,
        random: random,
        transformMat4: transformMat4,
        transformMat3: transformMat3,
        transformQuat: transformQuat,
        rotateX: rotateX$1,
        rotateY: rotateY$1,
        rotateZ: rotateZ$1,
        angle: angle,
        zero: zero,
        str: str$1,
        exactEquals: exactEquals$1,
        equals: equals$1,
        sub: sub$1,
        mul: mul$1,
        div: div,
        dist: dist,
        sqrDist: sqrDist,
        len: len,
        sqrLen: sqrLen,
        forEach: forEach
    });

    /* node_modules/@sveltejs/gl/scene/Scene.svelte generated by Svelte v3.19.2 */

    const { Error: Error_1 } = globals;
    const file$1 = "node_modules/@sveltejs/gl/scene/Scene.svelte";

    function add_css$1() {
    	var style = element("style");
    	style.id = "svelte-g8n70o-style";
    	style.textContent = ".container.svelte-g8n70o,canvas.svelte-g8n70o{position:relative;width:100%;height:100%;display:block;overflow:hidden}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NlbmUuc3ZlbHRlIiwic291cmNlcyI6WyJTY2VuZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGltcG9ydCB7IHJlYWRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuXHRmdW5jdGlvbiBpc19pbnRlcnNlY3RpbmcoZWwpIHtcblx0XHQvLyBUT0RPIHRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeS4gQnV0IHRoZSBpbml0aWFsIHZhbHVlXG5cdFx0Ly8gb2YgZW50cnkuaXNJbnRlcnNlY3RpbmcgaW4gYW4gSU8gY2FuIGJlIGluY29ycmVjdCwgaXRcblx0XHQvLyB0dXJucyBvdXQ/IG5lZWQgdG8gaW52ZXN0aWdhdGUgZnVydGhlclxuXHRcdGNvbnN0IGJjciA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdGJjci5ib3R0b20gPiAwICYmXG5cdFx0XHRiY3IucmlnaHQgID4gMCAmJlxuXHRcdFx0YmNyLnRvcCAgICA8IHdpbmRvdy5pbm5lckhlaWdodCAmJlxuXHRcdFx0YmNyLmxlZnQgICA8IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldF92aXNpYmlsaXR5KG5vZGUpIHtcblx0XHRyZXR1cm4gcmVhZGFibGUoZmFsc2UsIHNldCA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcblx0XHRcdFx0XHQvLyBzZXQoZW50cmllc1swXS5pc0ludGVyc2VjdGluZyk7XG5cdFx0XHRcdFx0c2V0KGlzX2ludGVyc2VjdGluZyhub2RlKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUobm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRmdW5jdGlvbiBoYW5kbGVyKCkge1xuXHRcdFx0XHRcdGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0c2V0KGJvdHRvbSA+IDAgJiYgdG9wIDwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuXG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuXHRcdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQsIG9uTW91bnQsIG9uRGVzdHJveSwgdGljayB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblx0aW1wb3J0IHsgUkVOREVSRVIsIExBWUVSLCBQQVJFTlQsIENBTUVSQSwgY3JlYXRlX2xheWVyIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblx0aW1wb3J0IHsgY3JlYXRlX3dvcmtlciwgcHJvY2Vzc19jb2xvciB9IGZyb20gJy4uL2ludGVybmFsL3V0aWxzLm1qcyc7XG5cdGltcG9ydCAqIGFzIG1hdDQgZnJvbSAnZ2wtbWF0cml4L21hdDQnO1xuXHRpbXBvcnQgKiBhcyB2ZWMzIGZyb20gJ2dsLW1hdHJpeC92ZWMzJztcblxuXHRleHBvcnQgbGV0IGJhY2tncm91bmQgPSBbMSwgMSwgMV07XG5cdGV4cG9ydCBsZXQgYmFja2dyb3VuZE9wYWNpdHkgPSAxO1xuXHRleHBvcnQgbGV0IGZvZyA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0IGxldCBwaXhlbFJhdGlvID0gdW5kZWZpbmVkO1xuXG5cdGNvbnN0IHVzZV9mb2cgPSAnZm9nJyBpbiAkJHByb3BzO1xuXG5cdCQ6IGJnID0gcHJvY2Vzc19jb2xvcihiYWNrZ3JvdW5kKTtcblxuXHRsZXQgY2FudmFzO1xuXHRsZXQgdmlzaWJsZSA9IHdyaXRhYmxlKGZhbHNlKTtcblx0bGV0IHBlbmRpbmcgPSBmYWxzZTtcblx0bGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcblx0bGV0IHc7XG5cdGxldCBoO1xuXG5cdGV4cG9ydCBsZXQgZ2w7IC8vIFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcblx0ZXhwb3J0IGxldCBwcm9jZXNzX2V4dHJhX3NoYWRlcl9jb21wb25lbnRzOyAvLyAoZ2wsIG1hdGVyaWFsKSA9PiB7fVxuXHRsZXQgZHJhdyA9ICgpID0+IHt9O1xuXHRsZXQgY2FtZXJhX3N0b3JlcyA9IHtcblx0XHRjYW1lcmFfbWF0cml4OiB3cml0YWJsZSgpLFxuXHRcdHZpZXc6IHdyaXRhYmxlKCksXG5cdFx0cHJvamVjdGlvbjogd3JpdGFibGUoKVxuXHR9O1xuXG5cdGNvbnN0IGludmFsaWRhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gKCkgPT4ge1xuXHRcdFx0aWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG5cdFx0XHRcdHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdDogKCkgPT4ge307XG5cblx0Y29uc3Qgd2lkdGggPSB3cml0YWJsZSgxKTtcblx0Y29uc3QgaGVpZ2h0ID0gd3JpdGFibGUoMSk7XG5cblx0Y29uc3Qgcm9vdF9sYXllciA9IGNyZWF0ZV9sYXllcigwLCBpbnZhbGlkYXRlKTtcblxuXHRjb25zdCBkZWZhdWx0X2NhbWVyYSA9IHsgLyogVE9ETyAqLyB9O1xuXHRsZXQgY2FtZXJhID0gZGVmYXVsdF9jYW1lcmE7XG5cdGNvbnN0IG51bV9saWdodHMgPSA4O1xuXG5cdGNvbnN0IG1lc2hlcyA9IFtdO1xuXG5cdC8vIGxpZ2h0c1xuXHRjb25zdCBsaWdodHMgPSB7XG5cdFx0YW1iaWVudDogW10sXG5cdFx0ZGlyZWN0aW9uYWw6IFtdLFxuXHRcdHBvaW50OiBbXVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFkZF90byhhcnJheSkge1xuXHRcdHJldHVybiBmbiA9PiB7XG5cdFx0XHRhcnJheS5wdXNoKGZuKTtcblx0XHRcdGludmFsaWRhdGUoKTtcblxuXHRcdFx0b25EZXN0cm95KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgaSA9IGFycmF5LmluZGV4T2YoZm4pO1xuXHRcdFx0XHRpZiAofmkpIGFycmF5LnNwbGljZShpLCAxKTtcblx0XHRcdFx0aW52YWxpZGF0ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdGFyZ2V0cyA9IG5ldyBNYXAoKTtcblx0bGV0IGNhbWVyYV9wb3NpdGlvbl9jaGFuZ2VkX3NpbmNlX2xhc3RfcmVuZGVyID0gdHJ1ZTtcblxuXHRjb25zdCBzY2VuZSA9IHtcblx0XHRkZWZpbmVzOiBbXG5cdFx0XHRgI2RlZmluZSBOVU1fTElHSFRTIDJcXG5gICsgLy8gVE9ETyBjb25maWd1cmUgdGhpc1xuXHRcdFx0YCNkZWZpbmUgVVNFX0ZPRyAke3VzZV9mb2d9XFxuYFxuXHRcdF0uam9pbignJyksXG5cblx0XHRhZGRfY2FtZXJhOiBfY2FtZXJhID0+IHtcblx0XHRcdGlmIChjYW1lcmEgJiYgY2FtZXJhICE9PSBkZWZhdWx0X2NhbWVyYSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEEgc2NlbmUgY2FuIG9ubHkgaGF2ZSBvbmUgY2FtZXJhYCk7XG5cdFx0XHR9XG5cblx0XHRcdGNhbWVyYSA9IF9jYW1lcmE7XG5cdFx0XHRpbnZhbGlkYXRlKCk7XG5cblx0XHRcdC8vIFRPRE8gdGhpcyBpcyBnYXJiYWdlXG5cdFx0XHRjYW1lcmFfc3RvcmVzLmNhbWVyYV9tYXRyaXguc2V0KGNhbWVyYS5tYXRyaXgpO1xuXHRcdFx0Y2FtZXJhX3N0b3Jlcy5wcm9qZWN0aW9uLnNldChjYW1lcmEucHJvamVjdGlvbik7XG5cdFx0XHRjYW1lcmFfc3RvcmVzLnZpZXcuc2V0KGNhbWVyYS52aWV3KTtcblxuXHRcdFx0b25EZXN0cm95KCgpID0+IHtcblx0XHRcdFx0Y2FtZXJhID0gZGVmYXVsdF9jYW1lcmE7XG5cdFx0XHRcdGludmFsaWRhdGUoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVfY2FtZXJhOiBjYW1lcmEgPT4ge1xuXHRcdFx0Ly8gZm9yIG92ZXJsYXlzXG5cdFx0XHRjYW1lcmFfc3RvcmVzLmNhbWVyYV9tYXRyaXguc2V0KGNhbWVyYS5tYXRyaXgpO1xuXHRcdFx0Y2FtZXJhX3N0b3Jlcy52aWV3LnNldChjYW1lcmEudmlldyk7XG5cdFx0XHRjYW1lcmFfc3RvcmVzLnByb2plY3Rpb24uc2V0KGNhbWVyYS5wcm9qZWN0aW9uKTtcblxuXHRcdFx0Y2FtZXJhX3Bvc2l0aW9uX2NoYW5nZWRfc2luY2VfbGFzdF9yZW5kZXIgPSB0cnVlO1xuXHRcdFx0aW52YWxpZGF0ZSgpO1xuXHRcdH0sXG5cblx0XHRhZGRfZGlyZWN0aW9uYWxfbGlnaHQ6IGFkZF90byhsaWdodHMuZGlyZWN0aW9uYWwpLFxuXHRcdGFkZF9wb2ludF9saWdodDogYWRkX3RvKGxpZ2h0cy5wb2ludCksXG5cdFx0YWRkX2FtYmllbnRfbGlnaHQ6IGFkZF90byhsaWdodHMuYW1iaWVudCksXG5cblx0XHRnZXRfdGFyZ2V0KGlkKSB7XG5cdFx0XHRpZiAoIXRhcmdldHMuaGFzKGlkKSkgdGFyZ2V0cy5zZXQoaWQsIHdyaXRhYmxlKG51bGwpKTtcblx0XHRcdHJldHVybiB0YXJnZXRzLmdldChpZCk7XG5cdFx0fSxcblxuXHRcdGludmFsaWRhdGUsXG5cblx0XHQuLi5jYW1lcmFfc3RvcmVzLFxuXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG5cblx0c2V0Q29udGV4dChSRU5ERVJFUiwgc2NlbmUpO1xuXHRzZXRDb250ZXh0KExBWUVSLCByb290X2xheWVyKTtcblxuXHRjb25zdCBvcmlnaW4gPSBtYXQ0LmlkZW50aXR5KG1hdDQuY3JlYXRlKCkpO1xuXHRjb25zdCBjdG0gPSB3cml0YWJsZShvcmlnaW4pO1xuXHRzZXRDb250ZXh0KFBBUkVOVCwge1xuXHRcdGdldF9tYXRyaXhfd29ybGQ6ICgpID0+IG9yaWdpbixcblx0XHRjdG06IHsgc3Vic2NyaWJlOiBjdG0uc3Vic2NyaWJlIH1cblx0fSk7XG5cblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0c2NlbmUuY2FudmFzID0gY2FudmFzO1xuXHRcdGdsID0gc2NlbmUuZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG5cdFx0dmlzaWJsZSA9IGdldF92aXNpYmlsaXR5KGNhbnZhcyk7XG5cblx0XHRnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDAuMCk7XG5cblx0XHQvLyBjb25zdCBleHRlbnNpb25zID0gW1xuXHRcdC8vIFx0J09FU19lbGVtZW50X2luZGV4X3VpbnQnLFxuXHRcdC8vIFx0J09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcydcblx0XHQvLyBdO1xuXHRcdC8vXG5cdFx0Ly8gZXh0ZW5zaW9ucy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdC8vIFx0Y29uc3QgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKG5hbWUpO1xuXHRcdC8vIFx0aWYgKCFleHQpIHtcblx0XHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBleHRlbnNpb246ICR7bmFtZX1gKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9KTtcblxuXHRcdGRyYXcgPSBmb3JjZSA9PiB7XG5cdFx0XHRpZiAoIWNhbWVyYSkgcmV0dXJuOyAvLyBUT0RPIG1ha2UgdGhpcyBgIXJlYWR5YCBvciBzb21ldGhpbmcgaW5zdGVhZFxuXG5cdFx0XHRpZiAoZGltZW5zaW9uc19uZWVkX3VwZGF0ZSkge1xuXHRcdFx0XHRjb25zdCBEUFIgPSBwaXhlbFJhdGlvIHx8IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cdFx0XHRcdGNhbnZhcy53aWR0aCA9ICR3aWR0aCAqIERQUjtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9ICRoZWlnaHQgKiBEUFI7XG5cdFx0XHRcdGdsLnZpZXdwb3J0KDAsIDAsICR3aWR0aCAqIERQUiwgJGhlaWdodCAqIERQUik7XG5cblx0XHRcdFx0ZGltZW5zaW9uc19uZWVkX3VwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cblx0XHRcdGlmICghJHZpc2libGUgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHBlbmRpbmcgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9O1xuXG5cdFx0XHRwZW5kaW5nID0gZmFsc2U7XG5cblx0XHRcdC8vIGdsLmNsZWFyQ29sb3IoLi4uYmcsIGJhY2tncm91bmRPcGFjaXR5KTtcblx0XHRcdC8vIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuXHRcdFx0Z2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cdFx0XHRnbC5lbmFibGUoZ2wuQkxFTkQpO1xuXHRcdFx0Z2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG5cdFx0XHRnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBkZXB0aCB0ZXN0aW5nXG5cdFx0XHRnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lYXIgdGhpbmdzIG9ic2N1cmUgZmFyIHRoaW5nc1xuXG5cdFx0XHQvLyBDbGVhciB0aGUgY2FudmFzIGJlZm9yZSB3ZSBzdGFydCBkcmF3aW5nIG9uIGl0LlxuXHRcdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG5cdFx0XHQvLyBjYWxjdWxhdGUgdG90YWwgYW1iaWVudCBsaWdodFxuXHRcdFx0Y29uc3QgYW1iaWVudF9saWdodCA9IGxpZ2h0cy5hbWJpZW50LnJlZHVjZSgodG90YWwsIHsgY29sb3IsIGludGVuc2l0eSB9KSA9PiB7XG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0TWF0aC5taW4odG90YWxbMF0gKyBjb2xvclswXSAqIGludGVuc2l0eSwgMSksXG5cdFx0XHRcdFx0TWF0aC5taW4odG90YWxbMV0gKyBjb2xvclsxXSAqIGludGVuc2l0eSwgMSksXG5cdFx0XHRcdFx0TWF0aC5taW4odG90YWxbMl0gKyBjb2xvclsyXSAqIGludGVuc2l0eSwgMSlcblx0XHRcdFx0XTtcblx0XHRcdH0sIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDBdKSk7XG5cblx0XHRcdGxldCBwcmV2aW91c19wcm9ncmFtO1xuXG5cdFx0XHRsZXQgcHJldmlvdXNfc3RhdGUgPSB7XG5cdFx0XHRcdFtnbC5ERVBUSF9URVNUXTogbnVsbCxcblx0XHRcdFx0W2dsLkNVTExfRkFDRV06IG51bGxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGVuYWJsZSA9IChrZXksIGVuYWJsZWQpID0+IHtcblx0XHRcdFx0aWYgKHByZXZpb3VzX3N0YXRlW2tleV0gIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRpZiAoZW5hYmxlZCkgZ2wuZW5hYmxlKGtleSk7XG5cdFx0XHRcdFx0ZWxzZSBnbC5kaXNhYmxlKGtleSk7XG5cblx0XHRcdFx0XHRwcmV2aW91c19zdGF0ZVtrZXldID0gZW5hYmxlZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gcmVuZGVyX21lc2goe1xuXHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0bW9kZWxfaW52ZXJzZV90cmFuc3Bvc2UsXG5cdFx0XHRcdGdlb21ldHJ5LFxuXHRcdFx0XHRtYXRlcmlhbCxcblx0XHRcdFx0ZGVwdGhUZXN0LFxuXHRcdFx0XHRkb3VibGVTaWRlZFxuXHRcdFx0fSkge1xuXHRcdFx0XHQvLyBUT0RPIHNob3VsZCB0aGlzIGV2ZW4gYmUgcG9zc2libGU/XG5cdFx0XHRcdGlmICghbWF0ZXJpYWwpIHJldHVybjtcblxuXHRcdFx0XHRlbmFibGUoZ2wuREVQVEhfVEVTVCwgZGVwdGhUZXN0ICE9PSBmYWxzZSk7XG5cdFx0XHRcdGVuYWJsZShnbC5DVUxMX0ZBQ0UsIGRvdWJsZVNpZGVkICE9PSB0cnVlKTtcblxuXHRcdFx0XHRnbC5ibGVuZEZ1bmNTZXBhcmF0ZShcblx0XHRcdFx0XHRnbC5TUkNfQUxQSEEsIC8vIHNvdXJjZSByZ2Jcblx0XHRcdFx0XHRnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLCAvLyBkZXN0IHJnYlxuXHRcdFx0XHRcdGdsLlNSQ19BTFBIQSwgLy8gc291cmNlIGFscGhhXG5cdFx0XHRcdFx0Z2wuT05FIC8vIGRlc3QgYWxwaGFcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBzZXQgYXR0cmlidXRlc1xuXHRcdFx0XHRnZW9tZXRyeS5zZXRfYXR0cmlidXRlcyhnbCk7XG5cblx0XHRcdFx0aWYgKG1hdGVyaWFsLnByb2dyYW0gIT09IHByZXZpb3VzX3Byb2dyYW0pIHtcblx0XHRcdFx0XHRwcmV2aW91c19wcm9ncmFtID0gbWF0ZXJpYWwucHJvZ3JhbTtcblxuXHRcdFx0XHRcdC8vIFRPRE8gbW92ZSBsb2dpYyB0byB0aGUgbWVzaC9tYXRlcmlhbD9cblx0XHRcdFx0XHRnbC51c2VQcm9ncmFtKG1hdGVyaWFsLnByb2dyYW0pO1xuXG5cdFx0XHRcdFx0Ly8gc2V0IGJ1aWx0LWluc1xuXHRcdFx0XHRcdGdsLnVuaWZvcm0zZnYobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuQU1CSUVOVF9MSUdIVCwgYW1iaWVudF9saWdodCk7XG5cblx0XHRcdFx0XHRpZiAodXNlX2ZvZykge1xuXHRcdFx0XHRcdFx0Z2wudW5pZm9ybTNmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5GT0dfQ09MT1IsIGJnKTtcblx0XHRcdFx0XHRcdGdsLnVuaWZvcm0xZihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5GT0dfREVOU0lUWSwgZm9nKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuRElSRUNUSU9OQUxfTElHSFRTKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bV9saWdodHM7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaWdodCA9IGxpZ2h0cy5kaXJlY3Rpb25hbFtpXTtcblx0XHRcdFx0XHRcdFx0aWYgKCFsaWdodCkgYnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Z2wudW5pZm9ybTNmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5ESVJFQ1RJT05BTF9MSUdIVFNbaV0uZGlyZWN0aW9uLCBsaWdodC5kaXJlY3Rpb24pO1xuXHRcdFx0XHRcdFx0XHRnbC51bmlmb3JtM2Z2KG1hdGVyaWFsLnVuaWZvcm1fbG9jYXRpb25zLkRJUkVDVElPTkFMX0xJR0hUU1tpXS5jb2xvciwgbGlnaHQuY29sb3IpO1xuXHRcdFx0XHRcdFx0XHRnbC51bmlmb3JtMWYobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuRElSRUNUSU9OQUxfTElHSFRTW2ldLmludGVuc2l0eSwgbGlnaHQuaW50ZW5zaXR5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuUE9JTlRfTElHSFRTKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bV9saWdodHM7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaWdodCA9IGxpZ2h0cy5wb2ludFtpXTtcblx0XHRcdFx0XHRcdFx0aWYgKCFsaWdodCkgYnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Z2wudW5pZm9ybTNmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5QT0lOVF9MSUdIVFNbaV0ubG9jYXRpb24sIGxpZ2h0LmxvY2F0aW9uKTtcblx0XHRcdFx0XHRcdFx0Z2wudW5pZm9ybTNmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5QT0lOVF9MSUdIVFNbaV0uY29sb3IsIGxpZ2h0LmNvbG9yKTtcblx0XHRcdFx0XHRcdFx0Z2wudW5pZm9ybTFmKG1hdGVyaWFsLnVuaWZvcm1fbG9jYXRpb25zLlBPSU5UX0xJR0hUU1tpXS5pbnRlbnNpdHksIGxpZ2h0LmludGVuc2l0eSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Z2wudW5pZm9ybTNmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5DQU1FUkFfV09STERfUE9TSVRJT04sIGNhbWVyYS53b3JsZF9wb3NpdGlvbik7XG5cdFx0XHRcdFx0Z2wudW5pZm9ybU1hdHJpeDRmdihtYXRlcmlhbC51bmlmb3JtX2xvY2F0aW9ucy5WSUVXLCBmYWxzZSwgY2FtZXJhLnZpZXcpO1xuXHRcdFx0XHRcdGdsLnVuaWZvcm1NYXRyaXg0ZnYobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuUFJPSkVDVElPTiwgZmFsc2UsIGNhbWVyYS5wcm9qZWN0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHNldCBtZXNoLXNwZWNpZmljIGJ1aWx0LWluIHVuaWZvcm1zXG5cdFx0XHRcdGdsLnVuaWZvcm1NYXRyaXg0ZnYobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuTU9ERUwsIGZhbHNlLCBtb2RlbCk7XG5cdFx0XHRcdGdsLnVuaWZvcm1NYXRyaXg0ZnYobWF0ZXJpYWwudW5pZm9ybV9sb2NhdGlvbnMuTU9ERUxfSU5WRVJTRV9UUkFOU1BPU0UsIGZhbHNlLCBtb2RlbF9pbnZlcnNlX3RyYW5zcG9zZSk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBwcm9jZXNzX2V4dHJhX3NoYWRlcl9jb21wb25lbnRzID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHQvLyBzZXQgbWF0ZXJpYWwtc3BlY2lmaWMgYnVpbHQtaW4gdW5pZm9ybXNcblx0XHRcdFx0XHRtYXRlcmlhbC5hcHBseV91bmlmb3JtcyhnbCwgbnVsbCwgbW9kZWwsIHByb2Nlc3NfZXh0cmFfc2hhZGVyX2NvbXBvbmVudHMpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gc2V0IG1hdGVyaWFsLXNwZWNpZmljIGJ1aWx0LWluIHVuaWZvcm1zXG5cdFx0XHRcdFx0bWF0ZXJpYWwuYXBwbHlfdW5pZm9ybXMoZ2wpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZHJhd1xuXHRcdFx0XHRpZiAoZ2VvbWV0cnkuaW5kZXgpIHtcblx0XHRcdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBnZW9tZXRyeS5idWZmZXJzLl9faW5kZXgpO1xuXHRcdFx0XHRcdGdsLmRyYXdFbGVtZW50cyhnbFtnZW9tZXRyeS5wcmltaXRpdmVdLCBnZW9tZXRyeS5pbmRleC5sZW5ndGgsIGdsLlVOU0lHTkVEX0lOVCwgMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaWYgKGdlb21ldHJ5LnByaW1pdGl2ZSA9PT0gJ1BPSU5UUycpIHtcblx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKFwiSWYgXCIsIChnbFtnZW9tZXRyeS5wcmltaXRpdmVdID09PSBnbC5QT0lOVFMpKTtcblx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKFwiRHJhdyBnbC5QT0lOVFMgZm9yIFwiICsgZ2VvbWV0cnkuY291bnQgKyBcIiBwb2ludChzKVwiICk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdGNvbnN0IHByaW1pdGl2ZVR5cGUgPSBnbFtnZW9tZXRyeS5wcmltaXRpdmVdO1xuXHRcdFx0XHRcdGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgMCwgZ2VvbWV0cnkuY291bnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHJlbmRlcl9sYXllcihsYXllcikge1xuXHRcdFx0XHRpZiAobGF5ZXIubmVlZHNfc29ydCkge1xuXHRcdFx0XHRcdGxheWVyLmNoaWxkX2xheWVycy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cdFx0XHRcdFx0bGF5ZXIubmVlZHNfc29ydCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Z2wuZGVwdGhNYXNrKHRydWUpO1xuXHRcdFx0XHRnbC5jbGVhckRlcHRoKDEuMCk7XG5cdFx0XHRcdGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIubWVzaGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0cmVuZGVyX21lc2gobGF5ZXIubWVzaGVzW2ldKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRPRE8gc29ydCB0cmFuc3BhcmVudCBtZXNoZXMsIGZ1cnRoZXN0IHRvIGNsb3Nlc3Rcblx0XHRcdFx0Z2wuZGVwdGhNYXNrKGZhbHNlKTtcblxuXHRcdFx0XHRpZiAoY2FtZXJhX3Bvc2l0aW9uX2NoYW5nZWRfc2luY2VfbGFzdF9yZW5kZXIgfHwgbGF5ZXIubmVlZHNfdHJhbnNwYXJlbmN5X3NvcnQpIHtcblx0XHRcdFx0XHRzb3J0X3RyYW5zcGFyZW50X21lc2hlcyhsYXllci50cmFuc3BhcmVudF9tZXNoZXMpO1xuXHRcdFx0XHRcdGxheWVyLm5lZWRzX3RyYW5zcGFyZW5jeV9zb3J0ID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyLnRyYW5zcGFyZW50X21lc2hlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdHJlbmRlcl9tZXNoKGxheWVyLnRyYW5zcGFyZW50X21lc2hlc1tpXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyLmNoaWxkX2xheWVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdHJlbmRlcl9sYXllcihsYXllci5jaGlsZF9sYXllcnNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJlbmRlcl9sYXllcihyb290X2xheWVyKTtcblx0XHRcdGNhbWVyYV9wb3NpdGlvbl9jaGFuZ2VkX3NpbmNlX2xhc3RfcmVuZGVyID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdC8vIGZvciBzb21lIHdhY2t5IHJlYXNvbiwgQWRibG9jayBQbHVzIHNlZW1zIHRvIHByZXZlbnQgdGhlXG5cdFx0Ly8gaW5pdGlhbCBkaW1lbnNpb25zIGZyb20gYmVpbmcgY29ycmVjdGx5IHJlcG9ydGVkXG5cdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuXHRcdFx0JGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cdFx0fSk7XG5cblx0XHR0aWNrKCkudGhlbigoKSA9PiBkcmF3KHRydWUpKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KCk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0fTtcblx0fSk7XG5cblx0Y29uc3Qgc29ydF90cmFuc3BhcmVudF9tZXNoZXMgPSBtZXNoZXMgPT4ge1xuXHRcdGlmIChtZXNoZXMubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG5cdFx0Y29uc3QgbG9va3VwID0gbmV3IE1hcCgpO1xuXHRcdGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuXG5cdFx0bWVzaGVzLmZvckVhY2gobWVzaCA9PiB7XG5cdFx0XHRjb25zdCB6ID0gbWF0NC5tdWx0aXBseShvdXQsIGNhbWVyYS52aWV3LCBtZXNoLm1vZGVsKVsxNF07XG5cdFx0XHRsb29rdXAuc2V0KG1lc2gsIHopO1xuXHRcdH0pO1xuXG5cdFx0bWVzaGVzLnNvcnQoKGEsIGIpID0+IGxvb2t1cC5nZXQoYSkgLSBsb29rdXAuZ2V0KGIpKTtcblx0fTtcblxuXHRsZXQgZGltZW5zaW9uc19uZWVkX3VwZGF0ZSA9IHRydWU7XG5cblx0Y29uc3QgdXBkYXRlX2RpbWVuc2lvbnMgPSAoKSA9PiB7XG5cdFx0ZGltZW5zaW9uc19uZWVkX3VwZGF0ZSA9IHRydWU7XG5cdFx0aW52YWxpZGF0ZSgpO1xuXHR9O1xuXG5cdCQ6ICgkd2lkdGgsICRoZWlnaHQsIHVwZGF0ZV9kaW1lbnNpb25zKCkpO1xuXHQkOiAoYmFja2dyb3VuZCwgYmFja2dyb3VuZE9wYWNpdHksIGZvZywgc2NlbmUuaW52YWxpZGF0ZSgpKTtcblx0JDogaWYgKCR2aXNpYmxlICYmIHBlbmRpbmcpIHNjZW5lLmludmFsaWRhdGUoKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5jb250YWluZXIsIGNhbnZhcyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9PC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGJpbmQ6Y2xpZW50V2lkdGg9eyR3aWR0aH0gYmluZDpjbGllbnRIZWlnaHQ9eyRoZWlnaHR9PlxuXHQ8Y2FudmFzIGJpbmQ6dGhpcz17Y2FudmFzfT48L2NhbnZhcz5cblxuXHR7I2lmIGdsfVxuXHRcdDxzbG90IHdpZHRoPXskd2lkdGh9IGhlaWdodD17JGhlaWdodH0+PC9zbG90PlxuXHR7L2lmfVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK2FDLHdCQUFVLENBQUUsTUFBTSxjQUFDLENBQUMsQUFDbkIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsSUFBSSxDQUNaLE9BQU8sQ0FBRSxLQUFLLENBQ2QsUUFBUSxDQUFFLE1BQU0sQUFDakIsQ0FBQyJ9 */";
    	append_dev(document.head, style);
    }

    const get_default_slot_changes = dirty => ({
    	width: dirty[0] & /*$width*/ 8,
    	height: dirty[0] & /*$height*/ 16
    });

    const get_default_slot_context = ctx => ({
    	width: /*$width*/ ctx[3],
    	height: /*$height*/ ctx[4]
    });

    // (443:1) {#if gl}
    function create_if_block(ctx) {
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[38].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[37], get_default_slot_context);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot && default_slot.p && dirty[0] & /*$width, $height*/ 24 | dirty[1] & /*$$scope*/ 64) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[37], get_default_slot_context), get_slot_changes(default_slot_template, /*$$scope*/ ctx[37], dirty, get_default_slot_changes));
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(443:1) {#if gl}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div;
    	let canvas_1;
    	let t;
    	let div_resize_listener;
    	let current;
    	let if_block = /*gl*/ ctx[0] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			canvas_1 = element("canvas");
    			t = space();
    			if (if_block) if_block.c();
    			attr_dev(canvas_1, "class", "svelte-g8n70o");
    			add_location(canvas_1, file$1, 440, 1, 11655);
    			attr_dev(div, "class", "container svelte-g8n70o");
    			add_render_callback(() => /*div_elementresize_handler*/ ctx[40].call(div));
    			add_location(div, file$1, 439, 0, 11576);
    		},
    		l: function claim(nodes) {
    			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, canvas_1);
    			/*canvas_1_binding*/ ctx[39](canvas_1);
    			append_dev(div, t);
    			if (if_block) if_block.m(div, null);
    			div_resize_listener = add_resize_listener(div, /*div_elementresize_handler*/ ctx[40].bind(div));
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*gl*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			/*canvas_1_binding*/ ctx[39](null);
    			if (if_block) if_block.d();
    			div_resize_listener.cancel();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function is_intersecting(el) {
    	// TODO this shouldn't be necessary. But the initial value
    	// of entry.isIntersecting in an IO can be incorrect, it
    	// turns out? need to investigate further
    	const bcr = el.getBoundingClientRect();

    	return bcr.bottom > 0 && bcr.right > 0 && bcr.top < window.innerHeight && bcr.left < window.innerWidth;
    }

    function get_visibility(node) {
    	return readable(false, set => {
    		if (typeof IntersectionObserver !== "undefined") {
    			const observer = new IntersectionObserver(entries => {
    					// set(entries[0].isIntersecting);
    					set(is_intersecting(node));
    				});

    			observer.observe(node);
    			return () => observer.unobserve(node);
    		}

    		if (typeof window !== "undefined") {
    			function handler() {
    				const { top, bottom } = node.getBoundingClientRect();
    				set(bottom > 0 && top < window.innerHeight);
    			}

    			window.addEventListener("scroll", handler);
    			window.addEventListener("resize", handler);

    			return () => {
    				window.removeEventListener("scroll", handler);
    				window.removeEventListener("resize", handler);
    			};
    		}
    	});
    }

    const num_lights = 8;

    function instance$1($$self, $$props, $$invalidate) {
    	let $width;
    	let $height;

    	let $visible,
    		$$unsubscribe_visible = noop,
    		$$subscribe_visible = () => ($$unsubscribe_visible(), $$unsubscribe_visible = subscribe(visible, $$value => $$invalidate(20, $visible = $$value)), visible);

    	$$self.$$.on_destroy.push(() => $$unsubscribe_visible());
    	let { background = [1, 1, 1] } = $$props;
    	let { backgroundOpacity = 1 } = $$props;
    	let { fog = undefined } = $$props;
    	let { pixelRatio = undefined } = $$props;
    	const use_fog = "fog" in $$props;
    	let canvas;
    	let visible = writable(false);
    	validate_store(visible, "visible");
    	$$subscribe_visible();
    	let pending = false;
    	let update_scheduled = false;
    	let w;
    	let h;
    	let { gl } = $$props; // WebGL2RenderingContext
    	let { process_extra_shader_components } = $$props; // (gl, material) => {}

    	let draw = () => {
    		
    	};

    	let camera_stores = {
    		camera_matrix: writable(),
    		view: writable(),
    		projection: writable()
    	};

    	const invalidate = typeof window !== "undefined"
    	? () => {
    			if (!update_scheduled) {
    				update_scheduled = true;
    				requestAnimationFrame(draw);
    			}
    		}
    	: () => {
    			
    		};

    	const width = writable(1);
    	validate_store(width, "width");
    	component_subscribe($$self, width, value => $$invalidate(3, $width = value));
    	const height = writable(1);
    	validate_store(height, "height");
    	component_subscribe($$self, height, value => $$invalidate(4, $height = value));
    	const root_layer = create_layer(0, invalidate);
    	const default_camera = {}; /* TODO */
    	let camera = default_camera;
    	const meshes = [];

    	// lights
    	const lights = { ambient: [], directional: [], point: [] };

    	function add_to(array) {
    		return fn => {
    			array.push(fn);
    			invalidate();

    			onDestroy(() => {
    				const i = array.indexOf(fn);
    				if (~i) array.splice(i, 1);
    				invalidate();
    			});
    		};
    	}

    	const targets = new Map();
    	let camera_position_changed_since_last_render = true;

    	const scene = {
    		defines: [
    			`#define NUM_LIGHTS 2\n` + // TODO configure this
    			`#define USE_FOG ${use_fog}\n`
    		].join(""),
    		add_camera: _camera => {
    			if (camera && camera !== default_camera) {
    				throw new Error(`A scene can only have one camera`);
    			}

    			camera = _camera;
    			invalidate();

    			// TODO this is garbage
    			camera_stores.camera_matrix.set(camera.matrix);

    			camera_stores.projection.set(camera.projection);
    			camera_stores.view.set(camera.view);

    			onDestroy(() => {
    				camera = default_camera;
    				invalidate();
    			});
    		},
    		update_camera: camera => {
    			// for overlays
    			camera_stores.camera_matrix.set(camera.matrix);

    			camera_stores.view.set(camera.view);
    			camera_stores.projection.set(camera.projection);
    			camera_position_changed_since_last_render = true;
    			invalidate();
    		},
    		add_directional_light: add_to(lights.directional),
    		add_point_light: add_to(lights.point),
    		add_ambient_light: add_to(lights.ambient),
    		get_target(id) {
    			if (!targets.has(id)) targets.set(id, writable(null));
    			return targets.get(id);
    		},
    		invalidate,
    		...camera_stores,
    		width,
    		height
    	};

    	setContext(RENDERER, scene);
    	setContext(LAYER, root_layer);
    	const origin = identity(create());
    	const ctm = writable(origin);

    	setContext(PARENT, {
    		get_matrix_world: () => origin,
    		ctm: { subscribe: ctm.subscribe }
    	});

    	onMount(() => {
    		$$invalidate(17, scene.canvas = canvas, scene);
    		$$invalidate(0, gl = $$invalidate(17, scene.gl = canvas.getContext("webgl2"), scene));
    		$$subscribe_visible($$invalidate(2, visible = get_visibility(canvas)));
    		gl.clearColor(0, 0, 0, 0);

    		// const extensions = [
    		// 	'OES_element_index_uint',
    		// 	'OES_standard_derivatives'
    		// ];
    		//
    		// extensions.forEach(name => {
    		// 	const ext = gl.getExtension(name);
    		// 	if (!ext) {
    		// 		throw new Error(`Unsupported extension: ${name}`);
    		// 	}
    		// });
    		draw = force => {
    			if (!camera) return; // TODO make this `!ready` or something instead

    			if (dimensions_need_update) {
    				const DPR = pixelRatio || window.devicePixelRatio || 1;
    				$$invalidate(1, canvas.width = $width * DPR, canvas);
    				$$invalidate(1, canvas.height = $height * DPR, canvas);
    				gl.viewport(0, 0, $width * DPR, $height * DPR);
    				dimensions_need_update = false;
    			}

    			update_scheduled = false;

    			if (!$visible && !force) {
    				$$invalidate(12, pending = true);
    				return;
    			}

    			
    			$$invalidate(12, pending = false);

    			// gl.clearColor(...bg, backgroundOpacity);
    			// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    			gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    			gl.enable(gl.BLEND);
    			gl.enable(gl.CULL_FACE);
    			gl.enable(gl.DEPTH_TEST); // Enable depth testing
    			gl.depthFunc(gl.LEQUAL); // Near things obscure far things

    			// Clear the canvas before we start drawing on it.
    			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    			// calculate total ambient light
    			const ambient_light = lights.ambient.reduce(
    				(total, { color, intensity }) => {
    					return [
    						Math.min(total[0] + color[0] * intensity, 1),
    						Math.min(total[1] + color[1] * intensity, 1),
    						Math.min(total[2] + color[2] * intensity, 1)
    					];
    				},
    				new Float32Array([0, 0, 0])
    			);

    			let previous_program;

    			let previous_state = {
    				[gl.DEPTH_TEST]: null,
    				[gl.CULL_FACE]: null
    			};

    			const enable = (key, enabled) => {
    				if (previous_state[key] !== enabled) {
    					if (enabled) gl.enable(key); else gl.disable(key);
    					previous_state[key] = enabled;
    				}
    			};

    			function render_mesh(
    				{ model, model_inverse_transpose, geometry, material, depthTest, doubleSided }
    			) {
    				// TODO should this even be possible?
    				if (!material) return;

    				enable(gl.DEPTH_TEST, depthTest !== false);
    				enable(gl.CULL_FACE, doubleSided !== true);

    				gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE); // source rgb
    				// dest rgb
    				// source alpha
    				// dest alpha

    				// set attributes
    				geometry.set_attributes(gl);

    				if (material.program !== previous_program) {
    					previous_program = material.program;

    					// TODO move logic to the mesh/material?
    					gl.useProgram(material.program);

    					// set built-ins
    					gl.uniform3fv(material.uniform_locations.AMBIENT_LIGHT, ambient_light);

    					if (use_fog) {
    						gl.uniform3fv(material.uniform_locations.FOG_COLOR, bg);
    						gl.uniform1f(material.uniform_locations.FOG_DENSITY, fog);
    					}

    					if (material.uniform_locations.DIRECTIONAL_LIGHTS) {
    						for (let i = 0; i < num_lights; i += 1) {
    							const light = lights.directional[i];
    							if (!light) break;
    							gl.uniform3fv(material.uniform_locations.DIRECTIONAL_LIGHTS[i].direction, light.direction);
    							gl.uniform3fv(material.uniform_locations.DIRECTIONAL_LIGHTS[i].color, light.color);
    							gl.uniform1f(material.uniform_locations.DIRECTIONAL_LIGHTS[i].intensity, light.intensity);
    						}
    					}

    					if (material.uniform_locations.POINT_LIGHTS) {
    						for (let i = 0; i < num_lights; i += 1) {
    							const light = lights.point[i];
    							if (!light) break;
    							gl.uniform3fv(material.uniform_locations.POINT_LIGHTS[i].location, light.location);
    							gl.uniform3fv(material.uniform_locations.POINT_LIGHTS[i].color, light.color);
    							gl.uniform1f(material.uniform_locations.POINT_LIGHTS[i].intensity, light.intensity);
    						}
    					}

    					gl.uniform3fv(material.uniform_locations.CAMERA_WORLD_POSITION, camera.world_position);
    					gl.uniformMatrix4fv(material.uniform_locations.VIEW, false, camera.view);
    					gl.uniformMatrix4fv(material.uniform_locations.PROJECTION, false, camera.projection);
    				}

    				// set mesh-specific built-in uniforms
    				gl.uniformMatrix4fv(material.uniform_locations.MODEL, false, model);

    				gl.uniformMatrix4fv(material.uniform_locations.MODEL_INVERSE_TRANSPOSE, false, model_inverse_transpose);

    				if (typeof process_extra_shader_components == "function") {
    					// set material-specific built-in uniforms
    					material.apply_uniforms(gl, null, model, process_extra_shader_components);
    				} else {
    					// set material-specific built-in uniforms
    					material.apply_uniforms(gl);
    				}

    				// draw
    				if (geometry.index) {
    					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.buffers.__index);
    					gl.drawElements(gl[geometry.primitive], geometry.index.length, gl.UNSIGNED_INT, 0);
    				} else {
    					// if (geometry.primitive === 'POINTS') {
    					// 	console.log("If ", (gl[geometry.primitive] === gl.POINTS));
    					// 	console.log("Draw gl.POINTS for " + geometry.count + " point(s)" );
    					// }
    					const primitiveType = gl[geometry.primitive];

    					gl.drawArrays(primitiveType, 0, geometry.count);
    				}
    			}

    			function render_layer(layer) {
    				if (layer.needs_sort) {
    					layer.child_layers.sort((a, b) => a.index - b.index);
    					layer.needs_sort = false;
    				}

    				gl.depthMask(true);
    				gl.clearDepth(1);
    				gl.clear(gl.DEPTH_BUFFER_BIT);

    				for (let i = 0; i < layer.meshes.length; i += 1) {
    					render_mesh(layer.meshes[i]);
    				}

    				// TODO sort transparent meshes, furthest to closest
    				gl.depthMask(false);

    				if (camera_position_changed_since_last_render || layer.needs_transparency_sort) {
    					sort_transparent_meshes(layer.transparent_meshes);
    					layer.needs_transparency_sort = false;
    				}

    				for (let i = 0; i < layer.transparent_meshes.length; i += 1) {
    					render_mesh(layer.transparent_meshes[i]);
    				}

    				for (let i = 0; i < layer.child_layers.length; i += 1) {
    					render_layer(layer.child_layers[i]);
    				}
    			}

    			render_layer(root_layer);
    			camera_position_changed_since_last_render = false;
    		};

    		// for some wacky reason, Adblock Plus seems to prevent the
    		// initial dimensions from being correctly reported
    		const timeout = setTimeout(() => {
    			set_store_value(width, $width = canvas.clientWidth);
    			set_store_value(height, $height = canvas.clientHeight);
    		});

    		tick().then(() => draw(true));

    		return () => {
    			gl.getExtension("WEBGL_lose_context").loseContext();
    			clearTimeout(timeout);
    		};
    	});

    	const sort_transparent_meshes = meshes => {
    		if (meshes.length < 2) return;
    		const lookup = new Map();
    		const out = new Float32Array(16);

    		meshes.forEach(mesh => {
    			const z = multiply(out, camera.view, mesh.model)[14];
    			lookup.set(mesh, z);
    		});

    		meshes.sort((a, b) => lookup.get(a) - lookup.get(b));
    	};

    	let dimensions_need_update = true;

    	const update_dimensions = () => {
    		dimensions_need_update = true;
    		invalidate();
    	};

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Scene", $$slots, ['default']);

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(1, canvas = $$value);
    		});
    	}

    	function div_elementresize_handler() {
    		$width = this.clientWidth;
    		width.set($width);
    		$height = this.clientHeight;
    		height.set($height);
    	}

    	$$self.$set = $$new_props => {
    		$$invalidate(36, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("background" in $$new_props) $$invalidate(7, background = $$new_props.background);
    		if ("backgroundOpacity" in $$new_props) $$invalidate(8, backgroundOpacity = $$new_props.backgroundOpacity);
    		if ("fog" in $$new_props) $$invalidate(9, fog = $$new_props.fog);
    		if ("pixelRatio" in $$new_props) $$invalidate(10, pixelRatio = $$new_props.pixelRatio);
    		if ("gl" in $$new_props) $$invalidate(0, gl = $$new_props.gl);
    		if ("process_extra_shader_components" in $$new_props) $$invalidate(11, process_extra_shader_components = $$new_props.process_extra_shader_components);
    		if ("$$scope" in $$new_props) $$invalidate(37, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		readable,
    		is_intersecting,
    		get_visibility,
    		setContext,
    		onMount,
    		onDestroy,
    		tick,
    		writable,
    		RENDERER,
    		LAYER,
    		PARENT,
    		CAMERA,
    		create_layer,
    		create_worker,
    		process_color,
    		mat4,
    		vec3,
    		background,
    		backgroundOpacity,
    		fog,
    		pixelRatio,
    		use_fog,
    		canvas,
    		visible,
    		pending,
    		update_scheduled,
    		w,
    		h,
    		gl,
    		process_extra_shader_components,
    		draw,
    		camera_stores,
    		invalidate,
    		width,
    		height,
    		root_layer,
    		default_camera,
    		camera,
    		num_lights,
    		meshes,
    		lights,
    		add_to,
    		targets,
    		camera_position_changed_since_last_render,
    		scene,
    		origin,
    		ctm,
    		sort_transparent_meshes,
    		dimensions_need_update,
    		update_dimensions,
    		bg,
    		$width,
    		$height,
    		$visible
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(36, $$props = assign(assign({}, $$props), $$new_props));
    		if ("background" in $$props) $$invalidate(7, background = $$new_props.background);
    		if ("backgroundOpacity" in $$props) $$invalidate(8, backgroundOpacity = $$new_props.backgroundOpacity);
    		if ("fog" in $$props) $$invalidate(9, fog = $$new_props.fog);
    		if ("pixelRatio" in $$props) $$invalidate(10, pixelRatio = $$new_props.pixelRatio);
    		if ("canvas" in $$props) $$invalidate(1, canvas = $$new_props.canvas);
    		if ("visible" in $$props) $$subscribe_visible($$invalidate(2, visible = $$new_props.visible));
    		if ("pending" in $$props) $$invalidate(12, pending = $$new_props.pending);
    		if ("update_scheduled" in $$props) update_scheduled = $$new_props.update_scheduled;
    		if ("w" in $$props) w = $$new_props.w;
    		if ("h" in $$props) h = $$new_props.h;
    		if ("gl" in $$props) $$invalidate(0, gl = $$new_props.gl);
    		if ("process_extra_shader_components" in $$props) $$invalidate(11, process_extra_shader_components = $$new_props.process_extra_shader_components);
    		if ("draw" in $$props) draw = $$new_props.draw;
    		if ("camera_stores" in $$props) camera_stores = $$new_props.camera_stores;
    		if ("camera" in $$props) camera = $$new_props.camera;
    		if ("camera_position_changed_since_last_render" in $$props) camera_position_changed_since_last_render = $$new_props.camera_position_changed_since_last_render;
    		if ("dimensions_need_update" in $$props) dimensions_need_update = $$new_props.dimensions_need_update;
    		if ("bg" in $$props) bg = $$new_props.bg;
    	};

    	let bg;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*background*/ 128) {
    			 bg = process_color(background);
    		}

    		if ($$self.$$.dirty[0] & /*$width, $height*/ 24) {
    			 (update_dimensions());
    		}

    		if ($$self.$$.dirty[0] & /*background, backgroundOpacity, fog, scene*/ 131968) {
    			 (scene.invalidate());
    		}

    		if ($$self.$$.dirty[0] & /*$visible, pending, scene*/ 1183744) {
    			 if ($visible && pending) scene.invalidate();
    		}
    	};

    	$$props = exclude_internal_props($$props);

    	return [
    		gl,
    		canvas,
    		visible,
    		$width,
    		$height,
    		width,
    		height,
    		background,
    		backgroundOpacity,
    		fog,
    		pixelRatio,
    		process_extra_shader_components,
    		pending,
    		update_scheduled,
    		draw,
    		camera,
    		camera_position_changed_since_last_render,
    		scene,
    		dimensions_need_update,
    		bg,
    		$visible,
    		use_fog,
    		w,
    		h,
    		camera_stores,
    		invalidate,
    		root_layer,
    		default_camera,
    		meshes,
    		lights,
    		add_to,
    		targets,
    		origin,
    		ctm,
    		sort_transparent_meshes,
    		update_dimensions,
    		$$props,
    		$$scope,
    		$$slots,
    		canvas_1_binding,
    		div_elementresize_handler
    	];
    }

    class Scene extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document.getElementById("svelte-g8n70o-style")) add_css$1();

    		init(
    			this,
    			options,
    			instance$1,
    			create_fragment$1,
    			safe_not_equal,
    			{
    				background: 7,
    				backgroundOpacity: 8,
    				fog: 9,
    				pixelRatio: 10,
    				gl: 0,
    				process_extra_shader_components: 11
    			},
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Scene",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*gl*/ ctx[0] === undefined && !("gl" in props)) {
    			console.warn("<Scene> was created without expected prop 'gl'");
    		}

    		if (/*process_extra_shader_components*/ ctx[11] === undefined && !("process_extra_shader_components" in props)) {
    			console.warn("<Scene> was created without expected prop 'process_extra_shader_components'");
    		}
    	}

    	get background() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set background(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get backgroundOpacity() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set backgroundOpacity(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get fog() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fog(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get pixelRatio() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pixelRatio(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get gl() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set gl(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get process_extra_shader_components() {
    		throw new Error_1("<Scene>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set process_extra_shader_components(value) {
    		throw new Error_1("<Scene>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /**
     * 3x3 Matrix
     * @module mat3
     */

    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */

    function create$2() {
      var out = new ARRAY_TYPE(9);

      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
      }

      out[0] = 1;
      out[4] = 1;
      out[8] = 1;
      return out;
    }

    /**
     * 4 Dimensional Vector
     * @module vec4
     */

    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */

    function create$3() {
      var out = new ARRAY_TYPE(4);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
      }

      return out;
    }
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {ReadonlyVec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */

    function clone$2(a) {
      var out = new ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */

    function fromValues$2(x, y, z, w) {
      var out = new ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {ReadonlyVec4} a the source vector
     * @returns {vec4} out
     */

    function copy$2(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */

    function set$2(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {vec4} out
     */

    function add$2(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }
    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {ReadonlyVec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */

    function scale$2(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }
    /**
     * Calculates the length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return Math.hypot(x, y, z, w);
    }
    /**
     * Calculates the squared length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    function squaredLength$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return x * x + y * y + z * z + w * w;
    }
    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {ReadonlyVec4} a vector to normalize
     * @returns {vec4} out
     */

    function normalize$2(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      var len = x * x + y * y + z * z + w * w;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }

      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      out[3] = w * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot$1(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec4} out
     */

    function lerp$1(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    }
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyVec4} a The first vector.
     * @param {ReadonlyVec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function exactEquals$2(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {ReadonlyVec4} a The first vector.
     * @param {ReadonlyVec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function equals$2(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }
    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */

    var forEach$1 = function () {
      var vec = create$3();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }

        return a;
      };
    }();

    /**
     * Quaternion
     * @module quat
     */

    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */

    function create$4() {
      var out = new ARRAY_TYPE(4);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }

      out[3] = 1;
      return out;
    }
    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    function identity$1(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyVec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/

    function setAxisAngle(out, axis, rad) {
      rad = rad * 0.5;
      var s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    }
    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {ReadonlyQuat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */

    function getAxisAngle(out_axis, q) {
      var rad = Math.acos(q[3]) * 2.0;
      var s = Math.sin(rad / 2.0);

      if (s > EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
      } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
      }

      return rad;
    }
    /**
     * Gets the angular distance between two unit quaternions
     *
     * @param  {ReadonlyQuat} a     Origin unit quaternion
     * @param  {ReadonlyQuat} b     Destination unit quaternion
     * @return {Number}     Angle, in radians, between the two quaternions
     */

    function getAngle(a, b) {
      var dotproduct = dot$2(a, b);
      return Math.acos(2 * dotproduct * dotproduct - 1);
    }
    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {quat} out
     */

    function multiply$2(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateX$2(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateY$2(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var by = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateZ$2(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bz = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate W component of
     * @returns {quat} out
     */

    function calculateW(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
      return out;
    }
    /**
     * Calculate the exponential of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @returns {quat} out
     */

    function exp(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      var r = Math.sqrt(x * x + y * y + z * z);
      var et = Math.exp(w);
      var s = r > 0 ? et * Math.sin(r) / r : 0;
      out[0] = x * s;
      out[1] = y * s;
      out[2] = z * s;
      out[3] = et * Math.cos(r);
      return out;
    }
    /**
     * Calculate the natural logarithm of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @returns {quat} out
     */

    function ln(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      var r = Math.sqrt(x * x + y * y + z * z);
      var t = r > 0 ? Math.atan2(r, w) / r : 0;
      out[0] = x * t;
      out[1] = y * t;
      out[2] = z * t;
      out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
      return out;
    }
    /**
     * Calculate the scalar power of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @param {Number} b amount to scale the quaternion by
     * @returns {quat} out
     */

    function pow(out, a, b) {
      ln(out, a);
      scale$3(out, out, b);
      exp(out, out);
      return out;
    }
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */

    function slerp(out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      var omega, cosom, sinom, scale0, scale1; // calc cosine

      cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      } // calculate coefficients


      if (1.0 - cosom > EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      } // calculate final values


      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;
      return out;
    }
    /**
     * Generates a random unit quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    function random$1(out) {
      // Implementation of http://planning.cs.uiuc.edu/node198.html
      // TODO: Calling random 3 times is probably not the fastest solution
      var u1 = RANDOM();
      var u2 = RANDOM();
      var u3 = RANDOM();
      var sqrt1MinusU1 = Math.sqrt(1 - u1);
      var sqrtU1 = Math.sqrt(u1);
      out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
      return out;
    }
    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate inverse of
     * @returns {quat} out
     */

    function invert$1(out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate conjugate of
     * @returns {quat} out
     */

    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyMat3} m rotation matrix
     * @returns {quat} out
     * @function
     */

    function fromMat3(out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var fTrace = m[0] + m[4] + m[8];
      var fRoot;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w

        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)

        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @returns {quat} out
     * @function
     */

    function fromEuler(out, x, y, z) {
      var halfToRad = 0.5 * Math.PI / 180.0;
      x *= halfToRad;
      y *= halfToRad;
      z *= halfToRad;
      var sx = Math.sin(x);
      var cx = Math.cos(x);
      var sy = Math.sin(y);
      var cy = Math.cos(y);
      var sz = Math.sin(z);
      var cz = Math.cos(z);
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      return out;
    }
    /**
     * Returns a string representation of a quatenion
     *
     * @param {ReadonlyQuat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */

    function str$2(a) {
      return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {ReadonlyQuat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */

    var clone$3 = clone$2;
    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */

    var fromValues$3 = fromValues$2;
    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the source quaternion
     * @returns {quat} out
     * @function
     */

    var copy$3 = copy$2;
    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */

    var set$3 = set$2;
    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {quat} out
     * @function
     */

    var add$3 = add$2;
    /**
     * Alias for {@link quat.multiply}
     * @function
     */

    var mul$2 = multiply$2;
    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {ReadonlyQuat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */

    var scale$3 = scale$2;
    /**
     * Calculates the dot product of two quat's
     *
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */

    var dot$2 = dot$1;
    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     * @function
     */

    var lerp$2 = lerp$1;
    /**
     * Calculates the length of a quat
     *
     * @param {ReadonlyQuat} a vector to calculate length of
     * @returns {Number} length of a
     */

    var length$2 = length$1;
    /**
     * Alias for {@link quat.length}
     * @function
     */

    var len$1 = length$2;
    /**
     * Calculates the squared length of a quat
     *
     * @param {ReadonlyQuat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */

    var squaredLength$2 = squaredLength$1;
    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */

    var sqrLen$1 = squaredLength$2;
    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */

    var normalize$3 = normalize$2;
    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyQuat} a The first quaternion.
     * @param {ReadonlyQuat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    var exactEquals$3 = exactEquals$2;
    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {ReadonlyQuat} a The first vector.
     * @param {ReadonlyQuat} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    var equals$3 = equals$2;
    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {ReadonlyVec3} a the initial vector
     * @param {ReadonlyVec3} b the destination vector
     * @returns {quat} out
     */

    var rotationTo = function () {
      var tmpvec3 = create$1();
      var xUnitVec3 = fromValues$1(1, 0, 0);
      var yUnitVec3 = fromValues$1(0, 1, 0);
      return function (out, a, b) {
        var dot$1 = dot(a, b);

        if (dot$1 < -0.999999) {
          cross(tmpvec3, xUnitVec3, a);
          if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
          normalize$1(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot$1 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot$1;
          return normalize$3(out, out);
        }
      };
    }();
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @param {ReadonlyQuat} c the third operand
     * @param {ReadonlyQuat} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */

    var sqlerp = function () {
      var temp1 = create$4();
      var temp2 = create$4();
      return function (out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
      };
    }();
    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {ReadonlyVec3} view  the vector representing the viewing direction
     * @param {ReadonlyVec3} right the vector representing the local "right" direction
     * @param {ReadonlyVec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */

    var setAxes = function () {
      var matr = create$2();
      return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize$3(out, fromMat3(out, matr));
      };
    }();

    var quat = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$4,
        identity: identity$1,
        setAxisAngle: setAxisAngle,
        getAxisAngle: getAxisAngle,
        getAngle: getAngle,
        multiply: multiply$2,
        rotateX: rotateX$2,
        rotateY: rotateY$2,
        rotateZ: rotateZ$2,
        calculateW: calculateW,
        exp: exp,
        ln: ln,
        pow: pow,
        slerp: slerp,
        random: random$1,
        invert: invert$1,
        conjugate: conjugate,
        fromMat3: fromMat3,
        fromEuler: fromEuler,
        str: str$2,
        clone: clone$3,
        fromValues: fromValues$3,
        copy: copy$3,
        set: set$3,
        add: add$3,
        mul: mul$2,
        scale: scale$3,
        dot: dot$2,
        lerp: lerp$2,
        length: length$2,
        len: len$1,
        squaredLength: squaredLength$2,
        sqrLen: sqrLen$1,
        normalize: normalize$3,
        exactEquals: exactEquals$3,
        equals: equals$3,
        rotationTo: rotationTo,
        sqlerp: sqlerp,
        setAxes: setAxes
    });

    /* node_modules/@sveltejs/gl/scene/Group.svelte generated by Svelte v3.19.2 */

    function create_fragment$2(ctx) {
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[18].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 131072) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[17], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[17], dirty, null));
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let $target,
    		$$unsubscribe_target = noop,
    		$$subscribe_target = () => ($$unsubscribe_target(), $$unsubscribe_target = subscribe(target, $$value => $$invalidate(11, $target = $$value)), target);

    	let $parent_ctm;
    	let $ctm;
    	$$self.$$.on_destroy.push(() => $$unsubscribe_target());
    	let { location = [0, 0, 0] } = $$props;
    	let { lookAt = undefined } = $$props;
    	let { up = [0, 1, 0] } = $$props;
    	let { rotation = [0, 0, 0] } = $$props; // TODO make it possible to set a quaternion as a prop?
    	let { scale: scale$1 = 1 } = $$props;
    	const scene = get_scene();
    	const parent = get_parent();
    	const { ctm: parent_ctm } = parent;
    	validate_store(parent_ctm, "parent_ctm");
    	component_subscribe($$self, parent_ctm, value => $$invalidate(12, $parent_ctm = value));
    	const ctm = writable(null);
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(13, $ctm = value));
    	let matrix = create();
    	let quaternion = create$4();
    	const world_position = new Float32Array(matrix.buffer, 12 * 4, 3);
    	set_parent({ ctm });
    	const writable_props = ["location", "lookAt", "up", "rotation", "scale"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Group> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Group", $$slots, ['default']);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(3, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(4, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(5, up = $$props.up);
    		if ("rotation" in $$props) $$invalidate(6, rotation = $$props.rotation);
    		if ("scale" in $$props) $$invalidate(7, scale$1 = $$props.scale);
    		if ("$$scope" in $$props) $$invalidate(17, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		writable,
    		get_scene,
    		get_parent,
    		set_parent,
    		mat4,
    		quat,
    		location,
    		lookAt,
    		up,
    		rotation,
    		scale: scale$1,
    		scene,
    		parent,
    		parent_ctm,
    		ctm,
    		matrix,
    		quaternion,
    		world_position,
    		scale_array,
    		target,
    		$target,
    		$parent_ctm,
    		$ctm
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(3, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(4, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(5, up = $$props.up);
    		if ("rotation" in $$props) $$invalidate(6, rotation = $$props.rotation);
    		if ("scale" in $$props) $$invalidate(7, scale$1 = $$props.scale);
    		if ("matrix" in $$props) $$invalidate(8, matrix = $$props.matrix);
    		if ("quaternion" in $$props) $$invalidate(9, quaternion = $$props.quaternion);
    		if ("scale_array" in $$props) $$invalidate(10, scale_array = $$props.scale_array);
    		if ("target" in $$props) $$subscribe_target($$invalidate(0, target = $$props.target));
    	};

    	let scale_array;
    	let target;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*scale*/ 128) {
    			 $$invalidate(10, scale_array = typeof scale$1 === "number"
    			? [scale$1, scale$1, scale$1]
    			: scale$1);
    		}

    		if ($$self.$$.dirty & /*lookAt*/ 16) {
    			 $$subscribe_target($$invalidate(0, target = lookAt ? scene.get_target(lookAt) : writable(null)));
    		}

    		if ($$self.$$.dirty & /*$target, matrix, $parent_ctm, location, up, scale_array, quaternion, rotation, $ctm*/ 16232) {
    			 if ($target) {
    				translate(matrix, $parent_ctm, location);
    				targetTo(matrix, world_position, $target, up);
    				scale(matrix, matrix, scale_array);
    				set_store_value(ctm, $ctm = matrix);
    			} else {
    				$$invalidate(9, quaternion = fromEuler(quaternion || create$4(), ...rotation));
    				$$invalidate(8, matrix = fromRotationTranslationScale(matrix, quaternion, location, scale_array));
    				set_store_value(ctm, $ctm = multiply($ctm || create(), $parent_ctm, matrix));
    			}
    		}

    		if ($$self.$$.dirty & /*$ctm*/ 8192) {
    			// $: quaternion = quat.fromEuler(quaternion || quat.create(), ...rotation);
    			// $: matrix = mat4.fromRotationTranslationScale(matrix || mat4.create(), quaternion, location, scale_array);
    			// $: $ctm = mat4.multiply($ctm || mat4.create(), $parent_ctm, matrix);
    			 (scene.invalidate());
    		}
    	};

    	return [
    		target,
    		parent_ctm,
    		ctm,
    		location,
    		lookAt,
    		up,
    		rotation,
    		scale$1,
    		matrix,
    		quaternion,
    		scale_array,
    		$target,
    		$parent_ctm,
    		$ctm,
    		scene,
    		parent,
    		world_position,
    		$$scope,
    		$$slots
    	];
    }

    class Group extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			location: 3,
    			lookAt: 4,
    			up: 5,
    			rotation: 6,
    			scale: 7
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Group",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get location() {
    		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get lookAt() {
    		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lookAt(value) {
    		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get up() {
    		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set up(value) {
    		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get rotation() {
    		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set rotation(value) {
    		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get scale() {
    		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set scale(value) {
    		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/Layer.svelte generated by Svelte v3.19.2 */
    const file$2 = "node_modules/@sveltejs/gl/scene/Layer.svelte";

    function add_css$2() {
    	var style = element("style");
    	style.id = "svelte-1ei1e2o-style";
    	style.textContent = ".layer.svelte-1ei1e2o{position:absolute;top:0;left:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5ZXIuc3ZlbHRlIiwic291cmNlcyI6WyJMYXllci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgZ2V0X2xheWVyLCBzZXRfbGF5ZXIgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5cdGV4cG9ydCBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XG5cblx0c2V0X2xheWVyKGdldF9sYXllcigpLmFkZF9jaGlsZChpbmRleCkpO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJsYXllclwiPlxuXHQ8c2xvdD48L3Nsb3Q+XG48L2Rpdj5cblxuPHN0eWxlPlxuXHQvKiBmb3Igb3ZlcmxheXMsIGNyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgKi9cblx0LmxheWVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdH08L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQyxNQUFNLGVBQUMsQ0FBQyxBQUNQLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxDQUFDLENBQ04sSUFBSSxDQUFFLENBQUMsQUFDUixDQUFDIn0= */";
    	append_dev(document.head, style);
    }

    function create_fragment$3(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", "layer svelte-1ei1e2o");
    			add_location(div, file$2, 8, 0, 158);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { index = undefined } = $$props;
    	set_layer(get_layer().add_child(index));
    	const writable_props = ["index"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Layer> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Layer", $$slots, ['default']);

    	$$self.$set = $$props => {
    		if ("index" in $$props) $$invalidate(0, index = $$props.index);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ get_layer, set_layer, index });

    	$$self.$inject_state = $$props => {
    		if ("index" in $$props) $$invalidate(0, index = $$props.index);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [index, $$scope, $$slots];
    }

    class Layer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document.getElementById("svelte-1ei1e2o-style")) add_css$2();
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { index: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Layer",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get index() {
    		throw new Error("<Layer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set index(value) {
    		throw new Error("<Layer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var vert_builtin = "\nprecision highp float;\nuniform mat4 MODEL;\nuniform mat4 PROJECTION;\nuniform mat4 VIEW;\nuniform mat4 MODEL_INVERSE_TRANSPOSE;\nuniform vec3 CAMERA_WORLD_POSITION;\nstruct PointLight {\n\tvec3 location;\n\tvec3 color;\n\tfloat intensity;\n};\nuniform PointLight POINT_LIGHTS[NUM_LIGHTS];\n";

    var frag_builtin = "#extension GL_OES_standard_derivatives : enable\nprecision highp float;\nstruct DirectionalLight {\n\tvec3 direction;\n\tvec3 color;\n\tfloat intensity;\n};\nstruct PointLight {\n\tvec3 location;\n\tvec3 color;\n\tfloat intensity;\n};\nuniform vec3 AMBIENT_LIGHT;\nuniform DirectionalLight DIRECTIONAL_LIGHTS[NUM_LIGHTS];\nuniform PointLight POINT_LIGHTS[NUM_LIGHTS];\n";

    var _setters;

    var caches = new Map();
    var setters = (_setters = {}, _defineProperty(_setters, 5126, function _(gl, loc, data) {
      return gl.uniform1f(loc, data);
    }), _defineProperty(_setters, 35664, function _(gl, loc, data) {
      return gl.uniform2fv(loc, data);
    }), _defineProperty(_setters, 35665, function _(gl, loc, data) {
      return gl.uniform3fv(loc, data);
    }), _defineProperty(_setters, 35666, function _(gl, loc, data) {
      return gl.uniform4fv(loc, data);
    }), _defineProperty(_setters, 35674, function _(gl, loc, data) {
      return gl.uniformMatrix2fv(loc, false, data);
    }), _defineProperty(_setters, 35675, function _(gl, loc, data) {
      return gl.uniformMatrix3fv(loc, false, data);
    }), _defineProperty(_setters, 35676, function _(gl, loc, data) {
      return gl.uniformMatrix4fv(loc, false, data);
    }), _defineProperty(_setters, 35678, function _(gl, loc, data) {
      gl.activeTexture(gl["TEXTURE".concat(data.index)]);
      gl.bindTexture(gl.TEXTURE_2D, data.texture);
      gl.uniform1i(loc, data.index);
    }), _setters);
    function compile(gl, vert, frag) {
      if (!caches.has(gl)) caches.set(gl, new Map());
      var cache = caches.get(gl);
      var hash = vert + frag;

      if (!cache.has(hash)) {
        var program = create_program(gl, vert, frag);
        var uniforms = get_uniforms(gl, program);
        var attributes = get_attributes(gl, program);
        cache.set(hash, {
          program: program,
          uniforms: uniforms,
          attributes: attributes
        });
      }

      return cache.get(hash);
    }

    function pad(num) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      num = String(num);

      while (num.length < len) {
        num = " ".concat(num);
      }

      return num;
    }

    function repeat(str, i) {
      var result = '';

      while (i--) {
        result += str;
      }

      return result;
    }

    function create_shader(gl, type, source, label) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
      }

      var log = gl.getShaderInfoLog(shader);
      var match = /ERROR: (\d+):(\d+): (.+)/.exec(log);

      if (match) {
        var c = +match[1];
        var l = +match[2] - 1;
        console.log('%c' + match[3], 'font-weight: bold; color: red');
        var lines = source.split('\n');

        for (var i = 0; i < lines.length; i += 1) {
          if (Math.abs(l - i) > 5) continue;
          var line = lines[i].replace(/^\t+/gm, function (tabs) {
            return repeat(' ', tabs.length * 4);
          });
          var indent = /^\s+/.exec(line);
          var str = "".concat(pad(i), ": ").concat(line);

          if (i === l) {
            console.log('%c' + str, 'font-weight: bold; color: red');
            console.log('%c' + (indent && indent[0] || '') + repeat(' ', c + 6) + '^', 'color: red');
          } else {
            console.log(str);
          }
        }

        throw new Error("Failed to compile ".concat(label, " shader"));
      }

      throw new Error("Failed to compile ".concat(label, " shader:\n").concat(log));
    }

    function create_program(gl, vert, frag) {
      var program = gl.createProgram();
      gl.attachShader(program, create_shader(gl, gl.VERTEX_SHADER, vert, 'vertex'));
      gl.attachShader(program, create_shader(gl, gl.FRAGMENT_SHADER, frag, 'fragment'));
      gl.linkProgram(program);
      var success = gl.getProgramParameter(program, gl.LINK_STATUS);

      if (!success) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error("Failed to compile program:\n".concat(gl.getProgramInfoLog(program)));
      }

      return program;
    }

    function get_uniforms(gl, program) {
      var uniforms = [];
      var n = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

      for (var i = 0; i < n; i += 1) {
        var _gl$getActiveUniform = gl.getActiveUniform(program, i),
            size = _gl$getActiveUniform.size,
            type = _gl$getActiveUniform.type,
            name = _gl$getActiveUniform.name;

        var loc = gl.getUniformLocation(program, name);
        var setter = setters[type]; // if (!setter) {
        // 	throw new Error(`not implemented ${type} (${name})`);
        // }

        uniforms.push({
          size: size,
          type: type,
          name: name,
          setter: setter,
          loc: loc
        });
      }

      return uniforms;
    }

    function get_attributes(gl, program) {
      var attributes = [];
      var n = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

      for (var i = 0; i < n; i += 1) {
        var _gl$getActiveAttrib = gl.getActiveAttrib(program, i),
            size = _gl$getActiveAttrib.size,
            type = _gl$getActiveAttrib.type,
            name = _gl$getActiveAttrib.name;

        name = name.replace('[0]', '');
        var loc = gl.getAttribLocation(program, name);
        attributes.push({
          size: size,
          type: type,
          name: name,
          loc: loc
        });
      }

      return attributes;
    }

    function deep_set(obj, path, value) {
      var parts = path.replace(/\]$/, '').split(/\[|\]\.|\./);

      while (parts.length > 1) {
        var part = parts.shift();
        var next = parts[0];
        if (!obj[part]) obj[part] = /^\d+$/.test(next) ? [] : {};
        obj = obj[part];
      }

      obj[parts[0]] = value;
    }

    var Material = /*#__PURE__*/function () {
      function Material(scene, vert, frag, defines) {
        var _this = this;

        _classCallCheck(this, Material);

        this.scene = scene;
        var gl = scene.gl;
        this.gl = gl;

        var _compile = compile(gl, '#version 300 es' + '\n\n' + scene.defines + defines + '\n\n' + vert_builtin + '\n\n' + vert, '#version 300 es' + '\n\n' + scene.defines + defines + '\n\n' + frag_builtin + '\n\n' + frag),
            program = _compile.program,
            uniforms = _compile.uniforms,
            attributes = _compile.attributes; // console.log(vert.match(/(?:NAME\s)(.+)/g));


        this.vertName = vert.match(/(?:NAME\s)(.+)/g) !== null ? vert.match(/(?:NAME\s)(.+)/g)[0].substr(5) : "default";
        this.fragName = frag.match(/(?:NAME\s)(.+)/g) !== null ? frag.match(/(?:NAME\s)(.+)/g)[0].substr(5) : "default";
        this.program = program;
        this.uniforms = uniforms;
        this.attributes = attributes;
        this.uniform_locations = {};
        this.uniforms.forEach(function (uniform) {
          deep_set(_this.uniform_locations, uniform.name, gl.getUniformLocation(_this.program, uniform.name));
        });
        this.attribute_locations = {};
        this.attributes.forEach(function (attribute) {
          _this.attribute_locations[attribute.name] = gl.getAttribLocation(_this.program, attribute.name);
        });
        this.raw_values = {};
        this.values = {};
      }

      _createClass(Material, [{
        key: "set_uniforms",
        value: function set_uniforms(raw_values) {
          var _this2 = this;

          var texture_index = 0;
          this.uniforms.forEach(function (_ref) {
            var name = _ref.name,
                type = _ref.type,
                loc = _ref.loc,
                setter = _ref.setter,
                processor = _ref.processor;

            if (name in raw_values) {
              var data = raw_values[name];
              if (data === _this2.raw_values[name]) return;

              if (type === 35678) {
                // texture
                _this2.values[name] = {
                  texture: data.instantiate(_this2.scene)._,
                  index: texture_index++
                };
                return;
              }

              if (typeof data === 'number' && type !== 5126) {
                // data provided was a number like 0x123456,
                // but it needs to be an array. for now,
                // assume it's a color, i.e. vec3
                data = process_color(data);
              }

              _this2.values[name] = data;
            }
          });
          this.raw_values = raw_values;
        }
      }, {
        key: "apply_uniforms",
        value: function apply_uniforms(gl, builtins, model, process_extra_shader_components) {
          var _this3 = this;

          // TODO if this is the only program, maybe
          // we don't need to re-run this each time
          this.uniforms.forEach(function (uniform) {
            if (uniform.name in _this3.values) {
              uniform.setter(gl, uniform.loc, _this3.values[uniform.name]);
            }
          });

          if (typeof process_extra_shader_components === 'function') {
            process_extra_shader_components(gl, this, model);
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {// TODO
        }
      }]);

      return Material;
    }();

    var vert_default = "in vec3 position;\nin vec3 normal;\nout vec3 v_normal;\n#if defined(has_colormap) || defined(has_specularitymap) || defined(has_normalmap) || defined(has_bumpmap)\n#define has_textures true\n#endif\n#ifdef has_textures\nin vec2 uv;\nout vec2 v_uv;\n#endif\n#if defined(has_normalmap) || defined(has_bumpmap)\nout vec3 v_view_position;\n#endif\nout vec3 v_surface_to_light[NUM_LIGHTS];\n#ifdef has_specularity\nout vec3 v_surface_to_view[NUM_LIGHTS];\n#endif\n#ifdef USE_FOG\nout float v_fog_depth;\n#endif\nvoid main() {\n\tvec4 pos = vec4(position, 1.0);\n\tvec4 model_view_pos = VIEW * MODEL * pos;\n\tv_normal = (MODEL_INVERSE_TRANSPOSE * vec4(normal, 0.0)).xyz;\n\t#ifdef has_textures\n\tv_uv = uv;\n\t#endif\n\t#if defined(has_normalmap) || defined(has_bumpmap)\n\tv_view_position = model_view_pos.xyz;\n\t#endif\n\t#ifdef USE_FOG\n\tv_fog_depth = -model_view_pos.z;\n\t#endif\n\tfor (int i = 0; i < NUM_LIGHTS; i += 1) {\n\t\tPointLight light = POINT_LIGHTS[i];\n\t\tvec3 surface_world_position = (MODEL * pos).xyz;\n\t\tv_surface_to_light[i] = light.location - surface_world_position;\n\t\t#ifdef has_specularity\n\t\tv_surface_to_view[i] = CAMERA_WORLD_POSITION - surface_world_position;\n\t\t#endif\n\t}\n\tgl_Position = PROJECTION * model_view_pos;\n}\n";

    var frag_default = "#if defined(has_colormap) || defined(has_specularitymap) || defined(has_normalmap) || defined(has_bumpmap) || defined(has_emissivemap)\n#define has_textures true\n#endif\n#ifdef has_textures\nin vec2 v_uv;\n#endif\n#ifdef has_specularity\nuniform float specularity;\n#endif\n#ifdef has_colormap\nuniform sampler2D colormap;\n#endif\n#ifdef has_emissivemap\nuniform sampler2D emissivemap;\n#endif\n#ifdef has_specularitymap\nuniform sampler2D specularitymap;\n#endif\n#ifdef has_bumpmap\nuniform sampler2D bumpmap;\nvec2 dHdxy_fwd() {\n\tvec2 dSTdx = dFdx(v_uv);\n\tvec2 dSTdy = dFdy(v_uv);\n\tfloat Hll = texture(bumpmap, v_uv).x;\n\tfloat dBx = texture(bumpmap, v_uv + dSTdx).x - Hll;\n\tfloat dBy = texture(bumpmap, v_uv + dSTdy).x - Hll;\n\t#ifdef has_bumpscale\n\tHll *= bumpscale;\n\tdBx *= bumpscale;\n\tdBy *= bumpscale;\n\t#endif\n\treturn vec2(dBx, dBy);\n}\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surface_normal, vec2 dHdxy) {\n\tvec3 vSigmaX = vec3(dFdx(surf_pos.x), dFdx(surf_pos.y), dFdx(surf_pos.z));\n\tvec3 vSigmaY = vec3(dFdy(surf_pos.x), dFdy(surf_pos.y), dFdy(surf_pos.z));\n\tvec3 vN = surface_normal;\n\tvec3 R1 = cross(vSigmaY, vN);\n\tvec3 R2 = cross(vN, vSigmaX);\n\tfloat fDet = dot(vSigmaX, R1);\n\tfDet *= (float(gl_FrontFacing) * 2.0 - 1.0);\n\tvec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);\n\treturn normalize(abs(fDet) * surface_normal - vGrad);\n}\n#endif\n#ifdef has_bumpscale\nuniform float bumpscale;\n#endif\n#ifdef has_normalmap\nuniform sampler2D normalmap;\nvec3 perturbNormal2Arb(vec3 eye_pos, vec3 surface_normal) {\n\tvec3 q0 = vec3(dFdx(eye_pos.x), dFdx(eye_pos.y), dFdx(eye_pos.z));\n\tvec3 q1 = vec3(dFdy(eye_pos.x), dFdy(eye_pos.y), dFdy(eye_pos.z));\n\tvec2 st0 = dFdx(v_uv.st);\n\tvec2 st1 = dFdy(v_uv.st);\n\tif (length(q0) == 0.0) {\n\t\treturn surface_normal;\n\t}\n\tfloat scale = sign(st1.t * st0.s - st0.t * st1.s);\n\tvec3 S = normalize((q0 * st1.t - q1 * st0.t) * scale);\n\tvec3 T = normalize((-q0 * st1.s + q1 * st0.s) * scale);\n\tvec3 N = normalize(surface_normal);\n\tmat3 tsn = mat3(S, T, N);\n\tvec3 mapN = texture(normalmap, v_uv).xyz * 2.0 - 1.0;\n\tmapN.xy *= (float(gl_FrontFacing) * 2.0 - 1.0);\n\treturn normalize(tsn * mapN);\n}\n#endif\n#ifdef has_color\nuniform vec3 color;\n#endif\n#ifdef has_emissive\nuniform vec3 emissive;\n#endif\n#ifdef has_alpha\nuniform float alpha;\n#endif\n#ifdef USE_FOG\nuniform vec3 FOG_COLOR;\nuniform float FOG_DENSITY;\nin float v_fog_depth;\n#endif\nin vec3 v_normal;\n#if defined(has_normalmap) || defined(has_bumpmap)\nin vec3 v_view_position;\n#endif\nin vec3 v_surface_to_light[NUM_LIGHTS];\nin vec3 v_surface_to_view[NUM_LIGHTS];\nout mediump vec4 fragColor;\nvoid main () {\n\tvec3 normal = normalize(v_normal);\n\t#ifdef has_bumpmap\n\t\tnormal = perturbNormalArb(-v_view_position, normal, dHdxy_fwd());\n\t#elif defined(has_normalmap)\n\t\tnormal = perturbNormal2Arb(-v_view_position, normal);\n\t#endif\n\tvec3 lighting = vec3(0.0);\n\tvec3 spec_amount = vec3(0.0);\n\tfor (int i = 0; i < NUM_LIGHTS; i += 1) {\n\t\tDirectionalLight light = DIRECTIONAL_LIGHTS[i];\n\t\tfloat multiplier = clamp(dot(normal, -light.direction), 0.0, 1.0);\n\t\tlighting += multiplier * light.color * light.intensity;\n\t}\n\tfor (int i = 0; i < NUM_LIGHTS; i += 1) {\n\t\tPointLight light = POINT_LIGHTS[i];\n\t\tvec3 surface_to_light = normalize(v_surface_to_light[i]);\n\t\tfloat multiplier = clamp(dot(normal, surface_to_light), 0.0, 1.0);\t\tlighting += multiplier * light.color * light.intensity;\n\t\t#ifdef has_specularity\n\t\t\tvec3 surface_to_view = normalize(v_surface_to_view[i]);\n\t\t\tvec3 half_vector = normalize(surface_to_light + surface_to_view);\n\t\t\tfloat spec = clamp(dot(normal, half_vector), 0.0, 1.0);\n\t\t\t#ifdef has_specularitymap\n\t\t\tspec *= texture(specularitymap, v_uv).r;\n\t\t\t#endif\n\t\t\tspec_amount += specularity * spec * light.color * light.intensity;\n\t\t#endif\n\t}\n\t#if defined(has_colormap)\n\tfragColor = texture(colormap, v_uv);\n\t#elif defined(has_color)\n\tfragColor = vec4(color, 1.0);\n\t#endif\n\t#ifdef has_alpha\n\tfragColor.a *= alpha;\n\t#endif\n\tfragColor.rgb *= mix(AMBIENT_LIGHT, vec3(1.0, 1.0, 1.0), lighting);\n\tfragColor.rgb += spec_amount;\n\t#if defined(has_emissivemap)\n\tfragColor.rgb += texture(emissivemap, v_uv);\n\t#elif defined(has_emissive)\n\tfragColor.rgb += emissive;\n\t#endif\n\t#ifdef USE_FOG\n\tfragColor.rgb = mix(\n\t\tfragColor.rgb,\n\t\tFOG_COLOR,\n\t\t1.0 - exp(-FOG_DENSITY * FOG_DENSITY * v_fog_depth * v_fog_depth)\n\t);\n\t#endif\n}\n";

    /* node_modules/@sveltejs/gl/scene/Mesh/index.svelte generated by Svelte v3.19.2 */

    const { Object: Object_1 } = globals;

    function create_fragment$4(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let $ctm;
    	let { location = [0, 0, 0] } = $$props;
    	let { rotation = [0, 0, 0] } = $$props; // TODO make it possible to set a quaternion as a prop?
    	let { scale = 1 } = $$props;
    	let { geometry } = $$props;
    	let { vert = vert_default } = $$props;
    	let { frag = frag_default } = $$props;
    	let { uniforms = {} } = $$props;
    	let { depthTest = undefined } = $$props;
    	let { doubleSided = undefined } = $$props;
    	let { transparent = false } = $$props;
    	const scene = get_scene();
    	const layer = get_layer();
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(18, $ctm = value));
    	const out = create();
    	const out2 = create();
    	const mesh = {};
    	let existing = true; // track if we've previously added this mesh

    	const add_mesh = () => {
    		layer.add_mesh(mesh, existing);
    		existing = false;
    	};

    	onDestroy(() => {
    		if (mesh.material) mesh.material.destroy();
    	});

    	const writable_props = [
    		"location",
    		"rotation",
    		"scale",
    		"geometry",
    		"vert",
    		"frag",
    		"uniforms",
    		"depthTest",
    		"doubleSided",
    		"transparent"
    	];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Mesh> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Mesh", $$slots, []);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(1, location = $$props.location);
    		if ("rotation" in $$props) $$invalidate(2, rotation = $$props.rotation);
    		if ("scale" in $$props) $$invalidate(3, scale = $$props.scale);
    		if ("geometry" in $$props) $$invalidate(4, geometry = $$props.geometry);
    		if ("vert" in $$props) $$invalidate(5, vert = $$props.vert);
    		if ("frag" in $$props) $$invalidate(6, frag = $$props.frag);
    		if ("uniforms" in $$props) $$invalidate(7, uniforms = $$props.uniforms);
    		if ("depthTest" in $$props) $$invalidate(8, depthTest = $$props.depthTest);
    		if ("doubleSided" in $$props) $$invalidate(9, doubleSided = $$props.doubleSided);
    		if ("transparent" in $$props) $$invalidate(10, transparent = $$props.transparent);
    	};

    	$$self.$capture_state = () => ({
    		onDestroy,
    		beforeUpdate,
    		writable,
    		get_scene,
    		get_layer,
    		get_parent,
    		process_color,
    		Material,
    		vert_default,
    		frag_default,
    		mat4,
    		quat,
    		location,
    		rotation,
    		scale,
    		geometry,
    		vert,
    		frag,
    		uniforms,
    		depthTest,
    		doubleSided,
    		transparent,
    		scene,
    		layer,
    		ctm,
    		out,
    		out2,
    		mesh,
    		existing,
    		add_mesh,
    		scale_array,
    		quaternion,
    		matrix,
    		model,
    		$ctm,
    		defines,
    		material_instance,
    		geometry_instance
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(1, location = $$props.location);
    		if ("rotation" in $$props) $$invalidate(2, rotation = $$props.rotation);
    		if ("scale" in $$props) $$invalidate(3, scale = $$props.scale);
    		if ("geometry" in $$props) $$invalidate(4, geometry = $$props.geometry);
    		if ("vert" in $$props) $$invalidate(5, vert = $$props.vert);
    		if ("frag" in $$props) $$invalidate(6, frag = $$props.frag);
    		if ("uniforms" in $$props) $$invalidate(7, uniforms = $$props.uniforms);
    		if ("depthTest" in $$props) $$invalidate(8, depthTest = $$props.depthTest);
    		if ("doubleSided" in $$props) $$invalidate(9, doubleSided = $$props.doubleSided);
    		if ("transparent" in $$props) $$invalidate(10, transparent = $$props.transparent);
    		if ("existing" in $$props) existing = $$props.existing;
    		if ("scale_array" in $$props) $$invalidate(14, scale_array = $$props.scale_array);
    		if ("quaternion" in $$props) $$invalidate(15, quaternion = $$props.quaternion);
    		if ("matrix" in $$props) $$invalidate(16, matrix = $$props.matrix);
    		if ("model" in $$props) $$invalidate(17, model = $$props.model);
    		if ("defines" in $$props) $$invalidate(19, defines = $$props.defines);
    		if ("material_instance" in $$props) $$invalidate(20, material_instance = $$props.material_instance);
    		if ("geometry_instance" in $$props) $$invalidate(21, geometry_instance = $$props.geometry_instance);
    	};

    	let scale_array;
    	let quaternion;
    	let matrix;
    	let model;
    	let defines;
    	let material_instance;
    	let geometry_instance;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*scale*/ 8) {
    			 $$invalidate(14, scale_array = typeof scale === "number"
    			? [scale, scale, scale]
    			: scale);
    		}

    		if ($$self.$$.dirty & /*quaternion, rotation*/ 32772) {
    			 $$invalidate(15, quaternion = fromEuler(quaternion || create$4(), ...rotation));
    		}

    		if ($$self.$$.dirty & /*matrix, quaternion, location, scale_array*/ 114690) {
    			 $$invalidate(16, matrix = fromRotationTranslationScale(matrix || create(), quaternion, location, scale_array));
    		}

    		if ($$self.$$.dirty & /*model, $ctm, matrix*/ 458752) {
    			 $$invalidate(17, model = multiply(model || create(), $ctm, matrix));
    		}

    		if ($$self.$$.dirty & /*uniforms*/ 128) {
    			 $$invalidate(19, defines = Object.keys(uniforms).filter(k => uniforms[k] != null).map(k => `#define has_${k} true\n`).join(""));
    		}

    		if ($$self.$$.dirty & /*vert, frag, defines*/ 524384) {
    			 $$invalidate(20, material_instance = new Material(scene, vert, frag, defines));
    		}

    		if ($$self.$$.dirty & /*material_instance, uniforms*/ 1048704) {
    			 material_instance.set_uniforms(uniforms);
    		}

    		if ($$self.$$.dirty & /*geometry, material_instance*/ 1048592) {
    			 $$invalidate(21, geometry_instance = geometry.instantiate(scene, material_instance.program));
    		}

    		if ($$self.$$.dirty & /*model*/ 131072) {
    			 mesh.model = model;
    		}

    		if ($$self.$$.dirty & /*model*/ 131072) {
    			 mesh.model_inverse_transpose = (invert(out2, model), transpose(out2, out2));
    		}

    		if ($$self.$$.dirty & /*material_instance*/ 1048576) {
    			 mesh.material = material_instance;
    		}

    		if ($$self.$$.dirty & /*geometry_instance*/ 2097152) {
    			 mesh.geometry = geometry_instance;
    		}

    		if ($$self.$$.dirty & /*depthTest*/ 256) {
    			 mesh.depthTest = depthTest;
    		}

    		if ($$self.$$.dirty & /*doubleSided*/ 512) {
    			 mesh.doubleSided = doubleSided;
    		}

    		if ($$self.$$.dirty & /*transparent*/ 1024) {
    			 mesh.transparent = transparent;
    		}

    		if ($$self.$$.dirty & /*transparent*/ 1024) {
    			 (add_mesh());
    		}

    		if ($$self.$$.dirty & /*model, transparent*/ 132096) {
    			 (transparent && (layer.needs_transparency_sort = true));
    		}

    		if ($$self.$$.dirty & /*geometry_instance, model, uniforms*/ 2228352) {
    			 (scene.invalidate());
    		}
    	};

    	return [
    		ctm,
    		location,
    		rotation,
    		scale,
    		geometry,
    		vert,
    		frag,
    		uniforms,
    		depthTest,
    		doubleSided,
    		transparent
    	];
    }

    class Mesh extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
    			location: 1,
    			rotation: 2,
    			scale: 3,
    			geometry: 4,
    			vert: 5,
    			frag: 6,
    			uniforms: 7,
    			depthTest: 8,
    			doubleSided: 9,
    			transparent: 10
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Mesh",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*geometry*/ ctx[4] === undefined && !("geometry" in props)) {
    			console.warn("<Mesh> was created without expected prop 'geometry'");
    		}
    	}

    	get location() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get rotation() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set rotation(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get scale() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set scale(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get geometry() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set geometry(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vert() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vert(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get frag() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set frag(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get uniforms() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set uniforms(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get depthTest() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set depthTest(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get doubleSided() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set doubleSided(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get transparent() {
    		throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set transparent(value) {
    		throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/Point.svelte generated by Svelte v3.19.2 */

    const get_default_slot_changes$1 = dirty => ({
    	x: dirty & /*x*/ 1,
    	y: dirty & /*y*/ 2,
    	vector: dirty & /*vector*/ 4
    });

    const get_default_slot_context$1 = ctx => ({
    	x: /*x*/ ctx[0],
    	y: /*y*/ ctx[1],
    	vector: /*vector*/ ctx[2]
    });

    function create_fragment$5(ctx) {
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[20].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[19], get_default_slot_context$1);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope, x, y, vector*/ 524295) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[19], get_default_slot_context$1), get_slot_changes(default_slot_template, /*$$scope*/ ctx[19], dirty, get_default_slot_changes$1));
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let $ctm;
    	let $projection;
    	let $view;
    	let $width;
    	let $height;
    	let { location = [0, 0, 0] } = $$props;
    	let { direction = [0, 0, 0] } = $$props;
    	let { x = 0 } = $$props;
    	let { y = 0 } = $$props;
    	let { vector = new Float32Array(3) } = $$props;
    	const { width, height, camera_matrix, view, projection } = get_scene();
    	validate_store(width, "width");
    	component_subscribe($$self, width, value => $$invalidate(16, $width = value));
    	validate_store(height, "height");
    	component_subscribe($$self, height, value => $$invalidate(17, $height = value));
    	validate_store(view, "view");
    	component_subscribe($$self, view, value => $$invalidate(15, $view = value));
    	validate_store(projection, "projection");
    	component_subscribe($$self, projection, value => $$invalidate(14, $projection = value));
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(12, $ctm = value));
    	let projected = new Float32Array(3);
    	const writable_props = ["location", "direction", "x", "y", "vector"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Point> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Point", $$slots, ['default']);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(8, location = $$props.location);
    		if ("direction" in $$props) $$invalidate(9, direction = $$props.direction);
    		if ("x" in $$props) $$invalidate(0, x = $$props.x);
    		if ("y" in $$props) $$invalidate(1, y = $$props.y);
    		if ("vector" in $$props) $$invalidate(2, vector = $$props.vector);
    		if ("$$scope" in $$props) $$invalidate(19, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_scene,
    		get_parent,
    		get_camera,
    		vec3,
    		mat4,
    		quat,
    		location,
    		direction,
    		x,
    		y,
    		vector,
    		width,
    		height,
    		camera_matrix,
    		view,
    		projection,
    		ctm,
    		projected,
    		world_position,
    		$ctm,
    		model_view_projection,
    		$projection,
    		$view,
    		$width,
    		$height
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(8, location = $$props.location);
    		if ("direction" in $$props) $$invalidate(9, direction = $$props.direction);
    		if ("x" in $$props) $$invalidate(0, x = $$props.x);
    		if ("y" in $$props) $$invalidate(1, y = $$props.y);
    		if ("vector" in $$props) $$invalidate(2, vector = $$props.vector);
    		if ("projected" in $$props) $$invalidate(10, projected = $$props.projected);
    		if ("world_position" in $$props) $$invalidate(11, world_position = $$props.world_position);
    		if ("model_view_projection" in $$props) $$invalidate(13, model_view_projection = $$props.model_view_projection);
    	};

    	let world_position;
    	let model_view_projection;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*world_position, location, $ctm*/ 6400) {
    			 $$invalidate(11, world_position = transformMat4(world_position || create$1(), location, $ctm));
    		}

    		if ($$self.$$.dirty & /*$projection, $view, $ctm*/ 53248) {
    			 $$invalidate(13, model_view_projection = multiply(create(), multiply(create(), $projection, $view), $ctm));
    		}

    		if ($$self.$$.dirty & /*projected, location, model_view_projection*/ 9472) {
    			 $$invalidate(10, projected = transformMat4(projected, location, model_view_projection));
    		}

    		if ($$self.$$.dirty & /*location, direction, world_position, vector, $ctm, $view*/ 39684) {
    			 {

    				const b_model = [
    					location[0] + direction[0],
    					location[1] + direction[1],
    					location[2] + direction[2]
    				];

    				const a_world = world_position;
    				const b_world = transformMat4(vector, b_model, $ctm);
    				const a_view = transformMat4(create$1(), a_world, $view);
    				const b_view = transformMat4(create$1(), b_world, $view);
    				$$invalidate(2, vector[0] = b_view[0] - a_view[0], vector);
    				$$invalidate(2, vector[1] = b_view[1] - a_view[1], vector);
    				$$invalidate(2, vector[2] = b_view[2] - a_view[2], vector);
    				const mag = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
    				$$invalidate(2, vector[0] /= mag, vector);
    				$$invalidate(2, vector[1] /= mag, vector);
    				$$invalidate(2, vector[2] /= mag, vector);
    			}
    		}

    		if ($$self.$$.dirty & /*$width, projected*/ 66560) {
    			 $$invalidate(0, x = $width * (projected[0] + 1) / 2);
    		}

    		if ($$self.$$.dirty & /*$height, projected*/ 132096) {
    			 $$invalidate(1, y = $height * (1 - (projected[1] + 1) / 2));
    		}
    	};

    	return [
    		x,
    		y,
    		vector,
    		width,
    		height,
    		view,
    		projection,
    		ctm,
    		location,
    		direction,
    		projected,
    		world_position,
    		$ctm,
    		model_view_projection,
    		$projection,
    		$view,
    		$width,
    		$height,
    		camera_matrix,
    		$$scope,
    		$$slots
    	];
    }

    class Point extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			location: 8,
    			direction: 9,
    			x: 0,
    			y: 1,
    			vector: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Point",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get location() {
    		throw new Error("<Point>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<Point>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<Point>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<Point>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get x() {
    		throw new Error("<Point>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set x(value) {
    		throw new Error("<Point>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get y() {
    		throw new Error("<Point>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set y(value) {
    		throw new Error("<Point>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vector() {
    		throw new Error("<Point>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vector(value) {
    		throw new Error("<Point>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/Overlay.svelte generated by Svelte v3.19.2 */
    const file$3 = "node_modules/@sveltejs/gl/scene/Overlay.svelte";

    function add_css$3() {
    	var style = element("style");
    	style.id = "svelte-1lmzx5c-style";
    	style.textContent = ".overlay.svelte-1lmzx5c{position:absolute;left:0;top:0;-webkit-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;will-change:transform}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5zdmVsdGUiLCJzb3VyY2VzIjpbIk92ZXJsYXkuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50LnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBsb2NhdGlvbjtcblx0ZXhwb3J0IGxldCBkaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG5cdGV4cG9ydCBsZXQgc25hcCA9IGZhbHNlO1xuXG5cdCQ6IHB4ID0gbiA9PiBgJHtzbmFwID8gTWF0aC5yb3VuZChuKSA6IG59cHhgO1xuPC9zY3JpcHQ+XG5cbjxQb2ludCB7bG9jYXRpb259IHtkaXJlY3Rpb259IGxldDp4IGxldDp5IGxldDp2ZWN0b3I+XG5cdDxzcGFuXG5cdFx0Y2xhc3M9XCJvdmVybGF5XCJcblx0XHRzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlM2Qoe3B4KHgpfSwge3B4KHkpfSwgMClcIlxuXHQ+XG5cdFx0PHNsb3QgdmVjdG9yPXt2ZWN0b3J9Pjwvc2xvdD5cblx0PC9zcGFuPlxuPC9Qb2ludD5cblxuPHN0eWxlPlxuXHQub3ZlcmxheSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0ICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0XHQgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblx0fTwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQyxRQUFRLGVBQUMsQ0FBQyxBQUNULFFBQVEsQ0FBRSxRQUFRLENBQ2xCLElBQUksQ0FBRSxDQUFDLENBQ1AsR0FBRyxDQUFFLENBQUMsQ0FDTixtQkFBbUIsQ0FBRSxJQUFJLENBQ3JCLGVBQWUsQ0FBRSxJQUFJLENBQ2pCLFdBQVcsQ0FBRSxJQUFJLENBQ3pCLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsV0FBVyxDQUFFLFNBQVMsQUFDdkIsQ0FBQyJ9 */";
    	append_dev(document.head, style);
    }

    const get_default_slot_changes$2 = dirty => ({ vector: dirty & /*vector*/ 256 });
    const get_default_slot_context$2 = ctx => ({ vector: /*vector*/ ctx[8] });

    // (11:0) <Point {location} {direction} let:x let:y let:vector>
    function create_default_slot(ctx) {
    	let span;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context$2);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			attr_dev(span, "class", "overlay svelte-1lmzx5c");
    			set_style(span, "transform", "translate3d(" + /*px*/ ctx[2](/*x*/ ctx[6]) + ", " + /*px*/ ctx[2](/*y*/ ctx[7]) + ", 0)");
    			add_location(span, file$3, 11, 1, 244);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot && default_slot.p && dirty & /*$$scope, vector*/ 288) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context$2), get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, get_default_slot_changes$2));
    			}

    			if (!current || dirty & /*px, x, y*/ 196) {
    				set_style(span, "transform", "translate3d(" + /*px*/ ctx[2](/*x*/ ctx[6]) + ", " + /*px*/ ctx[2](/*y*/ ctx[7]) + ", 0)");
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(11:0) <Point {location} {direction} let:x let:y let:vector>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let current;

    	const point = new Point({
    			props: {
    				location: /*location*/ ctx[0],
    				direction: /*direction*/ ctx[1],
    				$$slots: {
    					default: [
    						create_default_slot,
    						({ x, y, vector }) => ({ 6: x, 7: y, 8: vector }),
    						({ x, y, vector }) => (x ? 64 : 0) | (y ? 128 : 0) | (vector ? 256 : 0)
    					]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(point.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(point, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const point_changes = {};
    			if (dirty & /*location*/ 1) point_changes.location = /*location*/ ctx[0];
    			if (dirty & /*direction*/ 2) point_changes.direction = /*direction*/ ctx[1];

    			if (dirty & /*$$scope, px, x, y, vector*/ 484) {
    				point_changes.$$scope = { dirty, ctx };
    			}

    			point.$set(point_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(point.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(point.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(point, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { location } = $$props;
    	let { direction = undefined } = $$props;
    	let { snap = false } = $$props;
    	const writable_props = ["location", "direction", "snap"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Overlay> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Overlay", $$slots, ['default']);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(0, location = $$props.location);
    		if ("direction" in $$props) $$invalidate(1, direction = $$props.direction);
    		if ("snap" in $$props) $$invalidate(3, snap = $$props.snap);
    		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ Point, location, direction, snap, px });

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(0, location = $$props.location);
    		if ("direction" in $$props) $$invalidate(1, direction = $$props.direction);
    		if ("snap" in $$props) $$invalidate(3, snap = $$props.snap);
    		if ("px" in $$props) $$invalidate(2, px = $$props.px);
    	};

    	let px;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*snap*/ 8) {
    			 $$invalidate(2, px = n => `${snap ? Math.round(n) : n}px`);
    		}
    	};

    	return [location, direction, px, snap, $$slots, $$scope];
    }

    class Overlay extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document.getElementById("svelte-1lmzx5c-style")) add_css$3();
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { location: 0, direction: 1, snap: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Overlay",
    			options,
    			id: create_fragment$6.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*location*/ ctx[0] === undefined && !("location" in props)) {
    			console.warn("<Overlay> was created without expected prop 'location'");
    		}
    	}

    	get location() {
    		throw new Error("<Overlay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<Overlay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<Overlay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<Overlay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get snap() {
    		throw new Error("<Overlay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set snap(value) {
    		throw new Error("<Overlay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/Target.svelte generated by Svelte v3.19.2 */

    function create_fragment$7(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let $ctm;
    	let { id } = $$props;
    	let { location = [0, 0, 0] } = $$props;
    	const { get_target } = get_scene();
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(8, $ctm = value));
    	let model = create();
    	const world_position = new Float32Array(model.buffer, 12 * 4, 3);
    	const loc = new Float32Array(3);
    	const writable_props = ["id", "location"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Target> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Target", $$slots, []);

    	$$self.$set = $$props => {
    		if ("id" in $$props) $$invalidate(1, id = $$props.id);
    		if ("location" in $$props) $$invalidate(2, location = $$props.location);
    	};

    	$$self.$capture_state = () => ({
    		writable,
    		get_scene,
    		get_parent,
    		mat4,
    		id,
    		location,
    		get_target,
    		ctm,
    		model,
    		world_position,
    		loc,
    		x,
    		y,
    		z,
    		$ctm
    	});

    	$$self.$inject_state = $$props => {
    		if ("id" in $$props) $$invalidate(1, id = $$props.id);
    		if ("location" in $$props) $$invalidate(2, location = $$props.location);
    		if ("model" in $$props) $$invalidate(3, model = $$props.model);
    		if ("x" in $$props) $$invalidate(5, x = $$props.x);
    		if ("y" in $$props) $$invalidate(6, y = $$props.y);
    		if ("z" in $$props) $$invalidate(7, z = $$props.z);
    	};

    	let x;
    	let y;
    	let z;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*location*/ 4) {
    			// break `location` out into its components, so that we can
    			// skip downstream computations. TODO would be nice if there
    			// was a neater way to achieve this
    			 $$invalidate(5, x = location[0]);
    		}

    		if ($$self.$$.dirty & /*location*/ 4) {
    			 $$invalidate(6, y = location[1]);
    		}

    		if ($$self.$$.dirty & /*location*/ 4) {
    			 $$invalidate(7, z = location[2]);
    		}

    		if ($$self.$$.dirty & /*x, y, z*/ 224) {
    			 ($$invalidate(4, loc[0] = x, loc), $$invalidate(4, loc[1] = y, loc), $$invalidate(4, loc[2] = z, loc));
    		}

    		if ($$self.$$.dirty & /*model, $ctm, loc*/ 280) {
    			 $$invalidate(3, model = translate(model, $ctm, loc));
    		}

    		if ($$self.$$.dirty & /*model, id*/ 10) {
    			 (get_target(id).set(world_position));
    		}
    	};

    	return [ctm, id, location];
    }

    class Target extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { id: 1, location: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Target",
    			options,
    			id: create_fragment$7.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*id*/ ctx[1] === undefined && !("id" in props)) {
    			console.warn("<Target> was created without expected prop 'id'");
    		}
    	}

    	get id() {
    		throw new Error("<Target>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Target>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get location() {
    		throw new Error("<Target>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<Target>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/lights/AmbientLight.svelte generated by Svelte v3.19.2 */

    function create_fragment$8(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { color = [1, 1, 1] } = $$props;
    	let { intensity = 0.2 } = $$props;
    	const scene = get_scene();
    	const light = {};
    	scene.add_ambient_light(light);
    	const writable_props = ["color", "intensity"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<AmbientLight> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("AmbientLight", $$slots, []);

    	$$self.$set = $$props => {
    		if ("color" in $$props) $$invalidate(0, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(1, intensity = $$props.intensity);
    	};

    	$$self.$capture_state = () => ({
    		get_scene,
    		process_color,
    		color,
    		intensity,
    		scene,
    		light
    	});

    	$$self.$inject_state = $$props => {
    		if ("color" in $$props) $$invalidate(0, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(1, intensity = $$props.intensity);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*color*/ 1) {
    			 $$invalidate(2, light.color = process_color(color), light);
    		}

    		if ($$self.$$.dirty & /*intensity*/ 2) {
    			 $$invalidate(2, light.intensity = intensity, light);
    		}

    		if ($$self.$$.dirty & /*light*/ 4) {
    			 (scene.invalidate());
    		}
    	};

    	return [color, intensity];
    }

    class AmbientLight extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, { color: 0, intensity: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AmbientLight",
    			options,
    			id: create_fragment$8.name
    		});
    	}

    	get color() {
    		throw new Error("<AmbientLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<AmbientLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intensity() {
    		throw new Error("<AmbientLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intensity(value) {
    		throw new Error("<AmbientLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/lights/DirectionalLight.svelte generated by Svelte v3.19.2 */

    function create_fragment$9(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let $ctm;
    	let { direction = new Float32Array([-1, -1, -1]) } = $$props;
    	let { color = new Float32Array([1, 1, 1]) } = $$props;
    	let { intensity = 1 } = $$props;
    	const scene = get_scene();
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(6, $ctm = value));
    	const light = {};
    	scene.add_directional_light(light);
    	const writable_props = ["direction", "color", "intensity"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DirectionalLight> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("DirectionalLight", $$slots, []);

    	$$self.$set = $$props => {
    		if ("direction" in $$props) $$invalidate(1, direction = $$props.direction);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(3, intensity = $$props.intensity);
    	};

    	$$self.$capture_state = () => ({
    		get_scene,
    		get_parent,
    		process_color,
    		mat4,
    		vec3,
    		direction,
    		color,
    		intensity,
    		scene,
    		ctm,
    		light,
    		multiplied,
    		$ctm
    	});

    	$$self.$inject_state = $$props => {
    		if ("direction" in $$props) $$invalidate(1, direction = $$props.direction);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(3, intensity = $$props.intensity);
    		if ("multiplied" in $$props) $$invalidate(5, multiplied = $$props.multiplied);
    	};

    	let multiplied;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*multiplied, direction, $ctm*/ 98) {
    			 $$invalidate(5, multiplied = transformMat4(multiplied || create$1(), direction, $ctm));
    		}

    		if ($$self.$$.dirty & /*light, multiplied*/ 48) {
    			 $$invalidate(4, light.direction = normalize$1(light.direction || create$1(), multiplied), light);
    		}

    		if ($$self.$$.dirty & /*color*/ 4) {
    			 $$invalidate(4, light.color = process_color(color), light);
    		}

    		if ($$self.$$.dirty & /*intensity*/ 8) {
    			 $$invalidate(4, light.intensity = intensity, light);
    		}

    		if ($$self.$$.dirty & /*light*/ 16) {
    			 (scene.invalidate());
    		}
    	};

    	return [ctm, direction, color, intensity];
    }

    class DirectionalLight extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { direction: 1, color: 2, intensity: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DirectionalLight",
    			options,
    			id: create_fragment$9.name
    		});
    	}

    	get direction() {
    		throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intensity() {
    		throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intensity(value) {
    		throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/lights/PointLight.svelte generated by Svelte v3.19.2 */

    function create_fragment$a(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let $ctm;
    	let { location = new Float32Array([-1, -1, -1]) } = $$props;
    	let { color = new Float32Array([1, 1, 1]) } = $$props;
    	let { intensity = 1 } = $$props;
    	const scene = get_scene();
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(5, $ctm = value));

    	let light = {
    		// TODO change to a const once bug is fixed
    		location: create$1(),
    		color: null,
    		intensity: null
    	};

    	scene.add_point_light(light);
    	const writable_props = ["location", "color", "intensity"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PointLight> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("PointLight", $$slots, []);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(1, location = $$props.location);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(3, intensity = $$props.intensity);
    	};

    	$$self.$capture_state = () => ({
    		get_scene,
    		get_parent,
    		process_color,
    		mat4,
    		vec3,
    		location,
    		color,
    		intensity,
    		scene,
    		ctm,
    		light,
    		$ctm
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(1, location = $$props.location);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("intensity" in $$props) $$invalidate(3, intensity = $$props.intensity);
    		if ("light" in $$props) $$invalidate(4, light = $$props.light);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*light, location, $ctm*/ 50) {
    			 $$invalidate(4, light.location = transformMat4(light.location, location, $ctm), light);
    		}

    		if ($$self.$$.dirty & /*color*/ 4) {
    			 $$invalidate(4, light.color = process_color(color), light);
    		}

    		if ($$self.$$.dirty & /*intensity*/ 8) {
    			 $$invalidate(4, light.intensity = intensity, light);
    		}

    		if ($$self.$$.dirty & /*light*/ 16) {
    			 (scene.invalidate());
    		}
    	};

    	return [ctm, location, color, intensity];
    }

    class PointLight extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, { location: 1, color: 2, intensity: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PointLight",
    			options,
    			id: create_fragment$a.name
    		});
    	}

    	get location() {
    		throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intensity() {
    		throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intensity(value) {
    		throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var default_sort = function default_sort(item, needle) {
      return item - needle;
    };

    function binarySearch(array, search, fn) {
      if (fn === void 0) {
        fn = default_sort;
      }

      var low = 0;
      var high = array.length - 1;
      var sort = fn.length === 1 ? function (item, needle) {
        return fn(item) - search;
      } : fn;

      while (low <= high) {
        var i = high + low >> 1;
        var d = sort(array[i], search);

        if (d < 0) {
          low = i + 1;
        } else if (d > 0) {
          high = i - 1;
        } else {
          return i;
        }
      }

      return -low - 1;
    }

    function pickRandom(array) {
      var i = ~~(Math.random() * array.length);
      return array[i];
    } // http://bost.ocks.org/mike/shuffle/


    function shuffle(array) {
      var m = array.length; // While there remain elements to shuffle…

      while (m > 0) {
        // Pick a remaining element…
        var i = Math.floor(Math.random() * m--); // And swap it with the current element.

        var t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    function queue(max) {
      if (max === void 0) {
        max = 4;
      }

      var items = []; // TODO

      var pending = 0;
      var closed = false;
      var fulfil_closed;

      function dequeue() {
        if (pending === 0 && items.length === 0) {
          if (fulfil_closed) fulfil_closed();
        }

        if (pending >= max) return;
        if (items.length === 0) return;
        pending += 1;

        var _a = items.shift(),
            fn = _a.fn,
            fulfil = _a.fulfil,
            reject = _a.reject;

        var promise = fn();

        try {
          promise.then(fulfil, reject).then(function () {
            pending -= 1;
            dequeue();
          });
        } catch (err) {
          reject(err);
          pending -= 1;
          dequeue();
        }

        dequeue();
      }

      return {
        add: function add(fn) {
          if (closed) {
            throw new Error("Cannot add to a closed queue");
          }

          return new Promise(function (fulfil, reject) {
            items.push({
              fn: fn,
              fulfil: fulfil,
              reject: reject
            });
            dequeue();
          });
        },
        close: function close() {
          closed = true;
          return new Promise(function (fulfil, reject) {
            if (pending === 0) {
              fulfil();
            } else {
              fulfil_closed = fulfil;
            }
          });
        }
      };
    }

    function createSprite(width, height, fn) {
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext('2d');
      fn(ctx, canvas);
      return canvas;
    }

    function clamp(num, min, max) {
      return num < min ? min : num > max ? max : num;
    }

    function random$2(a, b) {
      if (b === undefined) return Math.random() * a;
      return a + Math.random() * (b - a);
    }

    function linear(domain, range) {
      var d0 = domain[0];
      var r0 = range[0];
      var m = (range[1] - r0) / (domain[1] - d0);
      return Object.assign(function (num) {
        return r0 + (num - d0) * m;
      }, {
        inverse: function inverse() {
          return linear(range, domain);
        }
      });
    } // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript


    function commas(num) {
      var parts = String(num).split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    } // array

    var yootils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        binarySearch: binarySearch,
        pickRandom: pickRandom,
        shuffle: shuffle,
        queue: queue,
        createSprite: createSprite,
        clamp: clamp,
        random: random$2,
        linearScale: linear,
        commas: commas
    });

    function debounce(fn) {
      var scheduled = false;
      var event;

      function release() {
        fn(event);
        scheduled = false;
      }

      return function (e) {
        if (!scheduled) {
          requestAnimationFrame(release);
          scheduled = true;
        }

        event = e;
      };
    }

    /* node_modules/@sveltejs/gl/controls/OrbitControls.svelte generated by Svelte v3.19.2 */

    const get_default_slot_changes$3 = dirty => ({
    	location: dirty & /*location*/ 1,
    	target: dirty & /*target*/ 2
    });

    const get_default_slot_context$3 = ctx => ({
    	location: /*location*/ ctx[0],
    	target: /*target*/ ctx[1]
    });

    function create_fragment$b(ctx) {
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[17].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], get_default_slot_context$3);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope, location, target*/ 65539) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[16], get_default_slot_context$3), get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, get_default_slot_changes$3));
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const EPSILON$1 = 0.000001;

    function pythag(a, b) {
    	return Math.sqrt(a * a + b * b);
    }

    function instance$b($$self, $$props, $$invalidate) {
    	const scene = get_scene();
    	let { location = new Float32Array([1, 3, 1]) } = $$props;
    	let { target = new Float32Array([0, 1, 0]) } = $$props;
    	let { minDistance = 0 } = $$props;
    	let { maxDistance = Infinity } = $$props;
    	let { minPolarAngle = 0 } = $$props; // radians
    	let { maxPolarAngle = Math.PI } = $$props; // radians

    	function rotate(x, y) {
    		// TODO handle the up vector. for now, just assume [0,1,0]
    		const vx = location[0] - target[0];

    		const vy = location[1] - target[1];
    		const vz = location[2] - target[2];
    		const radius = Math.sqrt(vx * vx + vy * vy + vz * vz);
    		let theta = Math.atan2(vx, vz);
    		theta -= x;
    		let phi = Math.acos(clamp(vy / radius, -1, 1));
    		phi = clamp(phi - y, EPSILON$1, Math.PI - EPSILON$1);
    		phi = clamp(phi, minPolarAngle, maxPolarAngle);
    		const sin_phi_radius = Math.sin(phi) * radius;
    		const nx = sin_phi_radius * Math.sin(theta);
    		const ny = Math.cos(phi) * radius;
    		const nz = sin_phi_radius * Math.cos(theta);
    		$$invalidate(0, location[0] = target[0] + nx, location);
    		$$invalidate(0, location[1] = target[1] + ny, location);
    		$$invalidate(0, location[2] = target[2] + nz, location);
    	}

    	function pan(dx, dy) {
    		// TODO handle the up vector. for now, just assume [0,1,0]
    		const vx = location[0] - target[0];

    		const vy = location[1] - target[1];
    		const vz = location[2] - target[2];

    		// delta y = along xz
    		{
    			const direction = normalize([vx, vz]);
    			const x = -direction[0] * dy;
    			const z = -direction[1] * dy;
    			$$invalidate(0, location[0] += x, location);
    			$$invalidate(0, location[2] += z, location);
    			$$invalidate(1, target[0] += x, target);
    			$$invalidate(1, target[2] += z, target);
    		}

    		// delta x = tangent to xz
    		{
    			const tangent = normalize([-vz, vx]);
    			const x = tangent[0] * dx;
    			const z = tangent[1] * dx;
    			$$invalidate(0, location[0] += x, location);
    			$$invalidate(0, location[2] += z, location);
    			$$invalidate(1, target[0] += x, target);
    			$$invalidate(1, target[2] += z, target);
    		}
    	}

    	function zoom(amount) {
    		let vx = location[0] - target[0];
    		let vy = location[1] - target[1];
    		let vz = location[2] - target[2];
    		const mag = Math.sqrt(vx * vx + vy * vy + vz * vz);
    		amount = clamp(amount, mag / maxDistance, minDistance ? mag / minDistance : Infinity);
    		vx /= amount;
    		vy /= amount;
    		vz /= amount;
    		$$invalidate(0, location[0] = target[0] + vx, location);
    		$$invalidate(0, location[1] = target[1] + vy, location);
    		$$invalidate(0, location[2] = target[2] + vz, location);
    	}

    	function handle_mousedown(event) {
    		let last_x = event.clientX;
    		let last_y = event.clientY;

    		const handle_mousemove = debounce(event => {
    			const x = event.clientX;
    			const y = event.clientY;
    			const dx = x - last_x;
    			const dy = y - last_y;

    			if (event.shiftKey || event.which === 2) {
    				pan(dx * 0.01, dy * 0.01);
    			} else {
    				rotate(dx * 0.005, dy * 0.005);
    			}

    			last_x = x;
    			last_y = y;
    		});

    		function handle_mouseup(event) {
    			window.removeEventListener("mousemove", handle_mousemove);
    			window.removeEventListener("mouseup", handle_mouseup);
    		}

    		window.addEventListener("mousemove", handle_mousemove);
    		window.addEventListener("mouseup", handle_mouseup);
    	}

    	const mousewheel_zoom = debounce(event => {
    		zoom(Math.pow(1.004, event.wheelDeltaY));
    	});

    	function handle_mousewheel(event) {
    		event.preventDefault();
    		mousewheel_zoom(event);
    	}

    	function start_rotate(event) {
    		event.preventDefault();
    		const touch = event.touches[0];
    		const finger = touch.identifier;
    		let last_x = touch.clientX;
    		let last_y = touch.clientY;

    		const handle_touchmove = debounce(event => {
    			if (event.touches.length > 1) return;
    			const touch = event.touches[0];
    			if (touch.identifier !== finger) return;
    			const dx = touch.clientX - last_x;
    			const dy = touch.clientY - last_y;
    			rotate(dx * 0.003, dy * 0.003);
    			last_x = touch.clientX;
    			last_y = touch.clientY;
    			
    		});

    		function handle_touchend(event) {
    			let i = event.changedTouches.length;

    			while (i--) {
    				const touch = event.changedTouches[i];

    				if (touch.identifier === finger) {
    					window.removeEventListener("touchmove", handle_touchmove);
    					window.removeEventListener("touchend", handle_touchend);
    					return;
    				}
    			}
    		}

    		window.addEventListener("touchmove", handle_touchmove);
    		window.addEventListener("touchend", handle_touchend);
    	}

    	function start_pan_zoom(event) {
    		event.preventDefault();
    		const touch_a = event.touches[0];
    		const touch_b = event.touches[1];
    		const finger_a = touch_a.identifier;
    		const finger_b = touch_b.identifier;
    		let last_cx = (touch_a.clientX + touch_b.clientX) / 2;
    		let last_cy = (touch_a.clientY + touch_b.clientY) / 2;
    		let last_d = pythag(touch_b.clientX - touch_a.clientX, touch_b.clientY - touch_a.clientY);

    		const handle_touchmove = debounce(event => {
    			if (event.touches.length !== 2) {
    				alert(`${event.touches.length} touches`);
    				return;
    			}

    			const touch_a = event.touches[0];
    			const touch_b = event.touches[1];
    			if (touch_a.identifier !== finger_a && touch_a.identifier !== finger_b) return;
    			if (touch_b.identifier !== finger_a && touch_b.identifier !== finger_b) return;
    			const cx = (touch_a.clientX + touch_b.clientX) / 2;
    			const cy = (touch_a.clientY + touch_b.clientY) / 2;
    			const d = pythag(touch_b.clientX - touch_a.clientX, touch_b.clientY - touch_a.clientY);
    			const dx = cx - last_cx;
    			const dy = cy - last_cy;
    			pan(dx * 0.01, dy * 0.01);
    			zoom(d / last_d);
    			last_cx = cx;
    			last_cy = cy;
    			last_d = d;
    		});

    		function handle_touchend(event) {
    			let i = event.changedTouches.length;

    			while (i--) {
    				const touch = event.changedTouches[i];

    				if (touch.identifier === finger_a || touch.identifier === finger_b) {
    					window.removeEventListener("touchmove", handle_touchmove);
    					window.removeEventListener("touchend", handle_touchend);
    					return;
    				}
    			}
    		}

    		window.addEventListener("touchmove", handle_touchmove);
    		window.addEventListener("touchend", handle_touchend);
    	}

    	function handle_touchstart(event) {
    		if (event.touches.length === 1) {
    			start_rotate(event);
    		}

    		if (event.touches.length === 2) {
    			start_pan_zoom(event);
    		}
    	}

    	scene.canvas.addEventListener("mousedown", handle_mousedown);
    	scene.canvas.addEventListener("mousewheel", handle_mousewheel);
    	scene.canvas.addEventListener("touchstart", handle_touchstart);

    	onDestroy(() => {
    		scene.canvas.removeEventListener("mousedown", handle_mousedown);
    		scene.canvas.removeEventListener("mousewheel", handle_mousewheel);
    		scene.canvas.removeEventListener("touchstart", handle_touchstart);
    	});

    	const writable_props = [
    		"location",
    		"target",
    		"minDistance",
    		"maxDistance",
    		"minPolarAngle",
    		"maxPolarAngle"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<OrbitControls> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("OrbitControls", $$slots, ['default']);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(0, location = $$props.location);
    		if ("target" in $$props) $$invalidate(1, target = $$props.target);
    		if ("minDistance" in $$props) $$invalidate(2, minDistance = $$props.minDistance);
    		if ("maxDistance" in $$props) $$invalidate(3, maxDistance = $$props.maxDistance);
    		if ("minPolarAngle" in $$props) $$invalidate(4, minPolarAngle = $$props.minPolarAngle);
    		if ("maxPolarAngle" in $$props) $$invalidate(5, maxPolarAngle = $$props.maxPolarAngle);
    		if ("$$scope" in $$props) $$invalidate(16, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		yootils,
    		debounce,
    		onDestroy,
    		get_scene,
    		normalize,
    		scene,
    		location,
    		target,
    		minDistance,
    		maxDistance,
    		minPolarAngle,
    		maxPolarAngle,
    		EPSILON: EPSILON$1,
    		rotate,
    		pan,
    		zoom,
    		handle_mousedown,
    		mousewheel_zoom,
    		handle_mousewheel,
    		start_rotate,
    		pythag,
    		start_pan_zoom,
    		handle_touchstart
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(0, location = $$props.location);
    		if ("target" in $$props) $$invalidate(1, target = $$props.target);
    		if ("minDistance" in $$props) $$invalidate(2, minDistance = $$props.minDistance);
    		if ("maxDistance" in $$props) $$invalidate(3, maxDistance = $$props.maxDistance);
    		if ("minPolarAngle" in $$props) $$invalidate(4, minPolarAngle = $$props.minPolarAngle);
    		if ("maxPolarAngle" in $$props) $$invalidate(5, maxPolarAngle = $$props.maxPolarAngle);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		location,
    		target,
    		minDistance,
    		maxDistance,
    		minPolarAngle,
    		maxPolarAngle,
    		scene,
    		rotate,
    		pan,
    		zoom,
    		handle_mousedown,
    		mousewheel_zoom,
    		handle_mousewheel,
    		start_rotate,
    		start_pan_zoom,
    		handle_touchstart,
    		$$scope,
    		$$slots
    	];
    }

    class OrbitControls extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {
    			location: 0,
    			target: 1,
    			minDistance: 2,
    			maxDistance: 3,
    			minPolarAngle: 4,
    			maxPolarAngle: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "OrbitControls",
    			options,
    			id: create_fragment$b.name
    		});
    	}

    	get location() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get target() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set target(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get minDistance() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set minDistance(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxDistance() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxDistance(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get minPolarAngle() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set minPolarAngle(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxPolarAngle() {
    		throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxPolarAngle(value) {
    		throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/cameras/PerspectiveCamera.svelte generated by Svelte v3.19.2 */

    function create_fragment$c(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let $ctm;

    	let $target,
    		$$unsubscribe_target = noop,
    		$$subscribe_target = () => ($$unsubscribe_target(), $$unsubscribe_target = subscribe(target, $$value => $$invalidate(12, $target = $$value)), target);

    	let $width;
    	let $height;
    	$$self.$$.on_destroy.push(() => $$unsubscribe_target());
    	let { location = [0, 0, 0] } = $$props;
    	let { lookAt = null } = $$props;
    	let { up = [0, 1, 0] } = $$props;
    	let { fov = 60 } = $$props;
    	let { near = 1 } = $$props;
    	let { far = 20000 } = $$props;
    	const { add_camera, update_camera, width, height, get_target } = get_scene();
    	validate_store(width, "width");
    	component_subscribe($$self, width, value => $$invalidate(13, $width = value));
    	validate_store(height, "height");
    	component_subscribe($$self, height, value => $$invalidate(14, $height = value));
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(11, $ctm = value));
    	const matrix = create();
    	const world_position = new Float32Array(matrix.buffer, 12 * 4, 3);

    	// should be a const, pending https://github.com/sveltejs/svelte/issues/2728
    	let camera = {
    		matrix,
    		world_position,
    		view: create(),
    		projection: create()
    	};

    	let target = writable(null);
    	validate_store(target, "target");
    	$$subscribe_target();
    	add_camera(camera);
    	const writable_props = ["location", "lookAt", "up", "fov", "near", "far"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PerspectiveCamera> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("PerspectiveCamera", $$slots, []);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(4, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(5, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(6, up = $$props.up);
    		if ("fov" in $$props) $$invalidate(7, fov = $$props.fov);
    		if ("near" in $$props) $$invalidate(8, near = $$props.near);
    		if ("far" in $$props) $$invalidate(9, far = $$props.far);
    	};

    	$$self.$capture_state = () => ({
    		writable,
    		get_scene,
    		get_parent,
    		mat4,
    		location,
    		lookAt,
    		up,
    		fov,
    		near,
    		far,
    		add_camera,
    		update_camera,
    		width,
    		height,
    		get_target,
    		ctm,
    		matrix,
    		world_position,
    		camera,
    		target,
    		$ctm,
    		$target,
    		$width,
    		$height
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(4, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(5, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(6, up = $$props.up);
    		if ("fov" in $$props) $$invalidate(7, fov = $$props.fov);
    		if ("near" in $$props) $$invalidate(8, near = $$props.near);
    		if ("far" in $$props) $$invalidate(9, far = $$props.far);
    		if ("camera" in $$props) $$invalidate(10, camera = $$props.camera);
    		if ("target" in $$props) $$subscribe_target($$invalidate(0, target = $$props.target));
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*lookAt, target*/ 33) {
    			 if (typeof lookAt === "string") {
    				$$subscribe_target($$invalidate(0, target = get_target(lookAt)));
    			} else {
    				target.set(lookAt);
    			}
    		}

    		if ($$self.$$.dirty & /*camera, $ctm, location, $target, up*/ 7248) {
    			 $$invalidate(10, camera.matrix = (translate(camera.matrix, $ctm, location), $target && targetTo(camera.matrix, world_position, $target, up), camera.matrix), camera);
    		}

    		if ($$self.$$.dirty & /*camera*/ 1024) {
    			 $$invalidate(10, camera.view = invert(camera.view, camera.matrix), camera);
    		}

    		if ($$self.$$.dirty & /*camera, fov, $width, $height, near, far*/ 26496) {
    			 $$invalidate(10, camera.projection = perspective(camera.projection, fov / 180 * Math.PI, $width / $height, near, far), camera);
    		}

    		if ($$self.$$.dirty & /*camera*/ 1024) {
    			 update_camera(camera);
    		}
    	};

    	return [target, width, height, ctm, location, lookAt, up, fov, near, far];
    }

    class PerspectiveCamera extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {
    			location: 4,
    			lookAt: 5,
    			up: 6,
    			fov: 7,
    			near: 8,
    			far: 9
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PerspectiveCamera",
    			options,
    			id: create_fragment$c.name
    		});
    	}

    	get location() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get lookAt() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lookAt(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get up() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set up(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get fov() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fov(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get near() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set near(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get far() {
    		throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set far(value) {
    		throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/@sveltejs/gl/scene/cameras/OrthoCamera.svelte generated by Svelte v3.19.2 */

    function create_fragment$d(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let $ctm;

    	let $target,
    		$$unsubscribe_target = noop,
    		$$subscribe_target = () => ($$unsubscribe_target(), $$unsubscribe_target = subscribe(target, $$value => $$invalidate(11, $target = $$value)), target);

    	let $width;
    	let $height;
    	$$self.$$.on_destroy.push(() => $$unsubscribe_target());
    	let { location = [0, 0, 0] } = $$props;
    	let { lookAt = null } = $$props;
    	let { up = [0, 1, 0] } = $$props;
    	let { near = 1 } = $$props;
    	let { far = 20000 } = $$props;
    	const { add_camera, update_camera, width, height, get_target } = get_scene();
    	validate_store(width, "width");
    	component_subscribe($$self, width, value => $$invalidate(12, $width = value));
    	validate_store(height, "height");
    	component_subscribe($$self, height, value => $$invalidate(13, $height = value));
    	const { ctm } = get_parent();
    	validate_store(ctm, "ctm");
    	component_subscribe($$self, ctm, value => $$invalidate(10, $ctm = value));
    	const matrix = create();
    	const world_position = new Float32Array(matrix.buffer, 12 * 4, 3);

    	// should be a const, pending https://github.com/sveltejs/svelte/issues/2728
    	let camera = {
    		matrix,
    		world_position,
    		view: create(),
    		projection: create()
    	};

    	let target = writable(null);
    	validate_store(target, "target");
    	$$subscribe_target();
    	add_camera(camera);
    	const writable_props = ["location", "lookAt", "up", "near", "far"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<OrthoCamera> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("OrthoCamera", $$slots, []);

    	$$self.$set = $$props => {
    		if ("location" in $$props) $$invalidate(4, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(5, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(6, up = $$props.up);
    		if ("near" in $$props) $$invalidate(7, near = $$props.near);
    		if ("far" in $$props) $$invalidate(8, far = $$props.far);
    	};

    	$$self.$capture_state = () => ({
    		writable,
    		get_scene,
    		get_parent,
    		mat4,
    		location,
    		lookAt,
    		up,
    		near,
    		far,
    		add_camera,
    		update_camera,
    		width,
    		height,
    		get_target,
    		ctm,
    		matrix,
    		world_position,
    		camera,
    		target,
    		$ctm,
    		$target,
    		$width,
    		$height
    	});

    	$$self.$inject_state = $$props => {
    		if ("location" in $$props) $$invalidate(4, location = $$props.location);
    		if ("lookAt" in $$props) $$invalidate(5, lookAt = $$props.lookAt);
    		if ("up" in $$props) $$invalidate(6, up = $$props.up);
    		if ("near" in $$props) $$invalidate(7, near = $$props.near);
    		if ("far" in $$props) $$invalidate(8, far = $$props.far);
    		if ("camera" in $$props) $$invalidate(9, camera = $$props.camera);
    		if ("target" in $$props) $$subscribe_target($$invalidate(0, target = $$props.target));
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*lookAt, target*/ 33) {
    			 if (typeof lookAt === "string") {
    				$$subscribe_target($$invalidate(0, target = get_target(lookAt)));
    			} else {
    				target.set(lookAt);
    			}
    		}

    		if ($$self.$$.dirty & /*camera, $ctm, location, $target, up*/ 3664) {
    			 $$invalidate(9, camera.matrix = (translate(camera.matrix, $ctm, location), $target && targetTo(camera.matrix, world_position, $target, up), camera.matrix), camera);
    		}

    		if ($$self.$$.dirty & /*camera*/ 512) {
    			 $$invalidate(9, camera.view = invert(camera.view, camera.matrix), camera);
    		}

    		if ($$self.$$.dirty & /*camera, $width, $height, near, far*/ 13184) {
    			 $$invalidate(9, camera.projection = ortho(camera.projection, 0, $width, $height, 0, near, far), camera);
    		}

    		if ($$self.$$.dirty & /*camera*/ 512) {
    			 update_camera(camera);
    		}
    	};

    	return [target, width, height, ctm, location, lookAt, up, near, far];
    }

    class OrthoCamera extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {
    			location: 4,
    			lookAt: 5,
    			up: 6,
    			near: 7,
    			far: 8
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "OrthoCamera",
    			options,
    			id: create_fragment$d.name
    		});
    	}

    	get location() {
    		throw new Error("<OrthoCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set location(value) {
    		throw new Error("<OrthoCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get lookAt() {
    		throw new Error("<OrthoCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lookAt(value) {
    		throw new Error("<OrthoCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get up() {
    		throw new Error("<OrthoCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set up(value) {
    		throw new Error("<OrthoCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get near() {
    		throw new Error("<OrthoCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set near(value) {
    		throw new Error("<OrthoCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get far() {
    		throw new Error("<OrthoCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set far(value) {
    		throw new Error("<OrthoCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var GeometryInstance = /*#__PURE__*/function () {
      function GeometryInstance(scene, program, attributes, index, primitive, count) {
        _classCallCheck(this, GeometryInstance);

        this.scene = scene;
        var gl = scene.gl;
        this.attributes = attributes;
        this.index = index;
        this.primitive = primitive;
        this.count = count;
        this.locations = {};
        this.buffers = {};

        for (var key in attributes) {
          var attribute = attributes[key];
          this.locations[key] = gl.getAttribLocation(program, key);
          if (this.primitive === 'POINTS') console.log(key, ":", attribute);
          var buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, attribute.data, attribute.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);
          this.buffers[key] = buffer;
        }

        if (index) {
          var _buffer = gl.createBuffer();

          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _buffer);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, index, gl.STATIC_DRAW);
          this.buffers.__index = _buffer;
        } // Un-bind buffers


        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      }

      _createClass(GeometryInstance, [{
        key: "set_attributes",
        value: function set_attributes(gl) {
          for (var key in this.attributes) {
            var attribute = this.attributes[key];
            var loc = this.locations[key];
            if (loc < 0) continue; // attribute is unused by current program

            var _attribute$size = attribute.size,
                size = _attribute$size === void 0 ? 3 : _attribute$size,
                _attribute$type = attribute.type,
                type = _attribute$type === void 0 ? gl.FLOAT : _attribute$type,
                _attribute$normalized = attribute.normalized,
                normalized = _attribute$normalized === void 0 ? false : _attribute$normalized,
                _attribute$stride = attribute.stride,
                stride = _attribute$stride === void 0 ? 0 : _attribute$stride,
                _attribute$offset = attribute.offset,
                offset = _attribute$offset === void 0 ? 0 : _attribute$offset; // Bind the position buffer.

            var buffer = this.buffers[key]; // if (this.primitive = 'POINTS') console.log("enableVertexAttribArray on location ", key);

            gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // Turn on the attribute

            gl.enableVertexAttribArray(loc);
            gl.vertexAttribPointer(loc, size, type, normalized, stride, offset);
          }
        }
      }, {
        key: "update",
        value: function update(k, data, count) {
          var scene = this.scene;
          var gl = scene.gl;
          var attribute = this.attributes[k];
          var buffer = this.buffers[k];
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, attribute.data = data, attribute.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);
          this.count = count;

          if (count === Infinity) {
            throw new Error("GL.Geometry must be instantiated with one or more { data, size } attributes");
          }

          scene.invalidate();
        }
      }]);

      return GeometryInstance;
    }();

    var Geometry = /*#__PURE__*/function () {
      function Geometry() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Geometry);

        this.attributes = attributes;
        var index = opts.index,
            _opts$primitive = opts.primitive,
            primitive = _opts$primitive === void 0 ? 'TRIANGLES' : _opts$primitive;
        this.index = index;
        this.primitive = primitive.toUpperCase();
        this.count = get_count(attributes);
        this.instances = new Map();
      }

      _createClass(Geometry, [{
        key: "instantiate",
        value: function instantiate(scene, program) {
          if (!this.instances.has(program)) {
            this.instances.set(program, new GeometryInstance(scene, program, this.attributes, this.index, this.primitive, this.count));
          }

          return this.instances.get(program);
        }
      }, {
        key: "update",
        value: function update(k, data) {
          var _this = this;

          this.attributes[k].data = data;
          this.count = get_count(this.attributes);
          this.instances.forEach(function (instance) {
            instance.update(k, data, _this.count);
          });
        }
      }]);

      return Geometry;
    }();

    function get_count(attributes) {
      var min = Infinity;

      for (var k in attributes) {
        var count = attributes[k].data.length / attributes[k].size;
        if (count < min) min = count;
      }

      return min;
    }

    var box = memoize(function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var def = {
        // default box dimensions
        x: -0.5,
        y: -0.5,
        z: -0.5,
        w: 1.0,
        h: 1.0,
        d: 1.0
      };

      for (var p in def) {
        if (!(p in obj)) {
          obj[p] = def[p];
        }
      } // console.log(obj.x, obj.y, obj.z, obj.w, obj.h, obj.d);


      var verts = [[obj.x + obj.w, obj.y + obj.h, obj.z + obj.d], // 0
      [obj.x, obj.y + obj.h, obj.z + obj.d], // 1
      [obj.x + obj.w, obj.y, obj.z + obj.d], // 2
      [obj.x, obj.y, obj.z + obj.d], // 3
      [obj.x, obj.y + obj.h, obj.z], // 4
      [obj.x + obj.w, obj.y + obj.h, obj.z], // 5
      [obj.x, obj.y, obj.z], // 6
      [obj.x + obj.w, obj.y, obj.z] // 7
      ]; // console.log(verts);

      var vertices = [// front: 0 1 2 3
      verts[0], verts[1], verts[2], verts[3], // left: 1 4 3 6
      verts[1], verts[4], verts[3], verts[6], // back: 4 5 6 7
      verts[4], verts[5], verts[6], verts[7], // right: 5 0 7 2
      verts[5], verts[0], verts[7], verts[2], // top: 4 1 5 0
      verts[4], verts[1], verts[5], verts[0], // bottom: 3 6 2 7
      verts[3], verts[6], verts[2], verts[7]].flat(Infinity); // console.log("box vertices: ", vertices);

      return new Geometry({
        position: {
          data: new Float32Array(vertices),
          size: 3
        },
        normal: {
          data: new Float32Array([// front
          0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, // left
          -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, // back
          0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, // right
          1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, // top
          0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, // bottom
          0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]),
          size: 3
        },
        uv: {
          data: new Float32Array([// front
          2 / 4, 1 / 4, 1 / 4, 1 / 4, 2 / 4, 2 / 4, 1 / 4, 2 / 4, // left
          1 / 4, 1 / 4, 0 / 4, 1 / 4, 1 / 4, 2 / 4, 0 / 4, 2 / 4, // back
          4 / 4, 1 / 4, 3 / 4, 1 / 4, 4 / 4, 2 / 4, 3 / 4, 2 / 4, // right
          3 / 4, 1 / 4, 2 / 4, 1 / 4, 3 / 4, 2 / 4, 2 / 4, 2 / 4, // top
          1 / 4, 0 / 4, 1 / 4, 1 / 4, 2 / 4, 0 / 4, 2 / 4, 1 / 4, // bottom
          1 / 4, 2 / 4, 1 / 4, 3 / 4, 2 / 4, 2 / 4, 2 / 4, 3 / 4]),
          size: 2
        }
      }, {
        index: new Uint32Array([// front
        0, 1, 2, 3, 2, 1, // left
        4, 5, 6, 6, 5, 7, // back
        8, 9, 10, 11, 10, 9, // right
        12, 13, 14, 15, 14, 13, // top
        16, 17, 18, 19, 18, 17, // bottom
        20, 21, 22, 23, 22, 21])
      });
    });

    function create_flat_geometry(radius, height, sides) {
      var num_vertices = sides * 3;
      var position_data = new Float32Array(num_vertices * 3 * 2);
      var normal_data = new Float32Array(num_vertices * 3 * 2);
      var ny = radius / height;

      for (var i = 0; i < sides; i += 1) {
        var start_angle = i / sides * Math.PI * 2;
        var end_angle = (i + 1) / sides * Math.PI * 2;
        var half_angle = (start_angle + end_angle) / 2;
        var o = i * 3 * 3 * 2;
        var x1 = Math.sin(start_angle) * radius;
        var z1 = Math.cos(start_angle) * radius;
        var x2 = Math.sin(end_angle) * radius;
        var z2 = Math.cos(end_angle) * radius; // top face

        position_data[o + 0] = x1;
        position_data[o + 1] = 0;
        position_data[o + 2] = z1;
        position_data[o + 3] = x2;
        position_data[o + 4] = 0;
        position_data[o + 5] = z2;
        position_data[o + 6] = 0;
        position_data[o + 7] = height;
        position_data[o + 8] = 0;
        var nx = Math.sin(half_angle);
        var nz = Math.cos(half_angle);
        var mag = Math.sqrt(nx * nx + ny * ny + nz * nz);
        var nnx = nx / mag;
        var nny = ny / mag;
        var nnz = nz / mag;
        normal_data[o + 0] = normal_data[o + 3] = normal_data[o + 6] = nnx;
        normal_data[o + 1] = normal_data[o + 4] = normal_data[o + 7] = nny;
        normal_data[o + 2] = normal_data[o + 5] = normal_data[o + 8] = nnz;
        o += 9; // bottom face

        position_data[o + 0] = x2;
        position_data[o + 1] = 0;
        position_data[o + 2] = z2;
        position_data[o + 3] = x1;
        position_data[o + 4] = 0;
        position_data[o + 5] = z1;
        position_data[o + 6] = 0;
        position_data[o + 7] = 0;
        position_data[o + 8] = 0;
        normal_data[o + 0] = normal_data[o + 3] = normal_data[o + 6] = 0;
        normal_data[o + 1] = normal_data[o + 4] = normal_data[o + 7] = -1;
        normal_data[o + 2] = normal_data[o + 5] = normal_data[o + 8] = 0;
      }

      return new Geometry({
        position: {
          data: position_data,
          size: 3
        },
        normal: {
          data: normal_data,
          size: 3
        }
      });
    }

    function create_smooth_geometry(radius, height, sides) {
      throw new Error('TODO');
    }

    var cone = memoize(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$radius = _ref.radius,
          radius = _ref$radius === void 0 ? 1 : _ref$radius,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 1 : _ref$height,
          _ref$sides = _ref.sides,
          sides = _ref$sides === void 0 ? 12 : _ref$sides,
          _ref$shading = _ref.shading,
          shading = _ref$shading === void 0 ? 'flat' : _ref$shading;

      return shading === 'flat' ? create_flat_geometry(radius, height, sides) : create_smooth_geometry();
    });

    // MIT licensed https://github.com/mrdoob/three.js/blob/dev/LICENSE

    function lerp$3(a, b, t) {
      return a.map(function (aa, i) {
        var bb = b[i];
        return aa + (bb - aa) * t;
      });
    }

    function set2(vector, a, b) {
      vector[0] = a;
      vector[1] = b;
    }

    function set3(vector, a, b, c) {
      vector[0] = a;
      vector[1] = b;
      vector[2] = c;
    }

    function correct_uvs(vertex_buffer, uv_buffer) {
      var a = new Float32Array(3);
      var b = new Float32Array(3);
      var c = new Float32Array(3);
      var centroid = new Float32Array(3);
      var uv_a = new Float32Array(2);
      var uv_b = new Float32Array(2);
      var uv_c = new Float32Array(2);

      for (var i = 0, j = 0; i < vertex_buffer.length; i += 9, j += 6) {
        set3(a, vertex_buffer[i + 0], vertex_buffer[i + 1], vertex_buffer[i + 2]);
        set3(b, vertex_buffer[i + 3], vertex_buffer[i + 4], vertex_buffer[i + 5]);
        set3(c, vertex_buffer[i + 6], vertex_buffer[i + 7], vertex_buffer[i + 8]);
        set2(uv_a, uv_buffer[j + 0], uv_buffer[j + 1]);
        set2(uv_b, uv_buffer[j + 2], uv_buffer[j + 3]);
        set2(uv_c, uv_buffer[j + 4], uv_buffer[j + 5]);
        centroid[0] = (a[0] + b[0] + c[0]) / 3;
        centroid[1] = (a[1] + b[1] + c[1]) / 3;
        centroid[2] = (a[2] + b[2] + c[2]) / 3;
        var azi = azimuth(centroid);
        correct_uv(uv_buffer, uv_a, j + 0, a, azi);
        correct_uv(uv_buffer, uv_b, j + 2, b, azi);
        correct_uv(uv_buffer, uv_c, j + 4, c, azi);
      }
    }

    function correct_uv(uv_buffer, uv, stride, vector, azimuth) {
      if (azimuth < 0 && uv[0] === 1) {
        uv_buffer[stride] = uv[0] - 1;
      }

      if (vector[0] === 0 && vector[2] === 0) {
        uv_buffer[stride] = azimuth / 2 / Math.PI + 0.5;
      }
    }

    function correct_seam(uv_buffer) {
      // handle case when face straddles the seam
      for (var i = 0; i < uv_buffer.length; i += 6) {
        // uv data of a single face
        var x0 = uv_buffer[i + 0];
        var x1 = uv_buffer[i + 2];
        var x2 = uv_buffer[i + 4];
        var max = Math.max(x0, x1, x2);
        var min = Math.min(x0, x1, x2); // 0.9 is somewhat arbitrary

        if (max > 0.9 && min < 0.1) {
          if (x0 < 0.2) uv_buffer[i + 0] += 1;
          if (x1 < 0.2) uv_buffer[i + 2] += 1;
          if (x2 < 0.2) uv_buffer[i + 4] += 1;
        }
      }
    } // Angle around the Y axis, counter-clockwise when looking from above.


    function azimuth(vector) {
      return Math.atan2(vector[2], -vector[0]);
    } // Angle above the XZ plane.


    function inclination(vector) {
      return Math.atan2(-vector[1], Math.sqrt(vector[0] * vector[0] + vector[2] * vector[2]));
    }

    function compute_vertex_normals(position) {
      var cb = new Float32Array(3);
      var ab = new Float32Array(3);
      var normals = new Float32Array(position.length);

      for (var i = 0; i < position.length; i += 9) {
        var pa = position.subarray(i + 0, i + 3);
        var pb = position.subarray(i + 3, i + 6);
        var pc = position.subarray(i + 6, i + 9);
        set3(cb, pc[0] - pb[0], pc[1] - pb[1], pc[2] - pb[2]);
        set3(ab, pa[0] - pb[0], pa[1] - pb[1], pa[2] - pb[2]); // cb x ab

        var x = cb[1] * ab[2] - cb[2] * ab[1];
        var y = cb[2] * ab[0] - cb[0] * ab[2];
        var z = cb[0] * ab[1] - cb[1] * ab[0];
        normals[i + 0] = normals[i + 3] = normals[i + 6] = x;
        normals[i + 1] = normals[i + 4] = normals[i + 7] = y;
        normals[i + 2] = normals[i + 5] = normals[i + 8] = z;
      }

      return normals;
    }

    function create_vertex_buffer(vertices, indices, subdivisions) {
      var vertex_buffer = [];
      var a = new Float32Array(3);
      var b = new Float32Array(3);
      var c = new Float32Array(3);

      for (var i = 0; i < indices.length; i += 3) {
        // get the vertices of the face
        get_vertex_data(indices[i + 0], a);
        get_vertex_data(indices[i + 1], b);
        get_vertex_data(indices[i + 2], c); // perform subdivision

        subdivide_face(a, b, c, subdivisions);
      }

      function get_vertex_data(index, out) {
        var offset = index * 3;
        out[0] = vertices[offset + 0];
        out[1] = vertices[offset + 1];
        out[2] = vertices[offset + 2];
      }

      function push_vertex(vertex) {
        vertex_buffer.push(vertex[0], vertex[1], vertex[2]);
      }

      function subdivide_face(a, b, c, subdivisions) {
        var cols = Math.pow(2, subdivisions); // we use this multidimensional array as a data structure for creating the subdivision

        var v = []; // construct all of the vertices for this subdivision

        for (var _i = 0; _i <= cols; _i++) {
          v[_i] = [];
          var aj = lerp$3(a, c, _i / cols);
          var bj = lerp$3(b, c, _i / cols);
          var rows = cols - _i;

          for (var j = 0; j <= rows; j++) {
            if (j === 0 && _i === cols) {
              v[_i][j] = aj;
            } else {
              v[_i][j] = lerp$3(aj, bj, j / rows);
            }
          }
        } // construct all of the faces


        for (var _i2 = 0; _i2 < cols; _i2++) {
          for (var _j = 0; _j < 2 * (cols - _i2) - 1; _j++) {
            var k = Math.floor(_j / 2);

            if (_j % 2 === 0) {
              push_vertex(v[_i2][k + 1]);
              push_vertex(v[_i2 + 1][k]);
              push_vertex(v[_i2][k]);
            } else {
              push_vertex(v[_i2][k + 1]);
              push_vertex(v[_i2 + 1][k + 1]);
              push_vertex(v[_i2 + 1][k]);
            }
          }
        }
      }

      return new Float32Array(vertex_buffer);
    }

    var polyhedron = memoize(function (vertices, indices) {
      var subdivisions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var shading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'flat';
      var uv_buffer = []; // the subdivision creates the vertex buffer data

      var vertex_buffer = create_vertex_buffer(vertices, indices, subdivisions);

      for (var i = 0; i < vertex_buffer.length; i += 3) {
        var vertex = new Float32Array(vertex_buffer.buffer, i * 4, 3); // all vertices should lie on a conceptual sphere with a given radius

        normalize(vertex);
        var u = azimuth(vertex) / 2 / Math.PI + 0.5;
        var v = inclination(vertex) / Math.PI + 0.5;
        uv_buffer.push(u, 1 - v);
      }

      correct_uvs(vertex_buffer, uv_buffer);
      correct_seam(uv_buffer);
      var position_buffer = new Float32Array(vertex_buffer);
      return new Geometry({
        position: {
          data: position_buffer,
          size: 3
        },
        normal: {
          data: shading === 'smooth' ? position_buffer : compute_vertex_normals(position_buffer),
          size: 3
        },
        uv: {
          data: new Float32Array(uv_buffer),
          size: 2
        }
      });
    });

    // MIT licensed https://github.com/mrdoob/three.js/blob/dev/LICENSE

    var t = (1 + Math.sqrt(5)) / 2;
    var r = 1 / t;
    var vertices = [// (±1, ±1, ±1)
    -1, -1, -1, -1, -1, +1, -1, +1, -1, -1, +1, +1, +1, -1, -1, +1, -1, +1, +1, +1, -1, +1, +1, +1, // (0, ±1/φ, ±φ)
    0, -r, -t, 0, -r, +t, 0, +r, -t, 0, +r, +t, // (±1/φ, ±φ, 0)
    -r, -t, 0, -r, +t, 0, +r, -t, 0, +r, +t, 0, // (±φ, 0, ±1/φ)
    -t, 0, -r, +t, 0, -r, -t, 0, +r, +t, 0, +r];
    var indices = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    function dodecahedron () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          subdivisions = _ref.subdivisions,
          shading = _ref.shading;

      return polyhedron(vertices, indices, subdivisions, shading);
    }

    var plane = memoize(function () {
      return new Geometry({
        position: {
          data: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
          size: 3
        },
        normal: {
          data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
          size: 3
        },
        uv: {
          data: new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]),
          size: 2
        }
      }, {
        index: new Uint32Array([0, 1, 2, 3, 2, 1])
      });
    });

    var sprite = memoize(function () {
      return new Geometry({
        position: {
          data: new Float32Array([0, 0, 0]),
          size: 3
        },
        normal: {
          data: new Float32Array([0, 0, 1]),
          size: 3
        },
        uv: {
          data: new Float32Array([1, 1]),
          size: 2
        }
      }, {
        primitive: "POINTS"
      });
    });


    var p = 0.85065080835204;
    var q = 0.5257311121191336;
    var position = new Float32Array([-q, +p, 0, +q, +p, 0, -q, -p, 0, +q, -p, 0, 0, -q, +p, 0, +q, +p, 0, -q, -p, 0, +q, -p, +p, 0, -q, +p, 0, +q, -p, 0, -q, -p, 0, +q]);
    var index = new Uint16Array([0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1]);
    var smooth_geometry = [new Geometry({
      position: {
        data: position,
        size: 3
      },
      normal: {
        data: position,
        size: 3
      }
    }, {
      index: index
    })];

    function subdivide(geometry) {
      var index = new Uint32Array(geometry.index.length * 4);
      var old_position = geometry.attributes.position.data;
      var new_positions = [];
      var lookup = new Map();

      function get_index(point) {
        var hash = "".concat(point[0].toPrecision(6), ",").concat(point[1].toPrecision(6), ",").concat(point[2].toPrecision(6));

        if (lookup.has(hash)) {
          return lookup.get(hash);
        }

        var index = new_positions.length;
        lookup.set(hash, index);
        new_positions[index] = point;
        return index;
      }

      function mid(a, b) {
        return get_index([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]);
      }

      for (var i = 0; i < geometry.index.length; i += 3) {
        var c0 = geometry.index[i + 0];
        var c1 = geometry.index[i + 1];
        var c2 = geometry.index[i + 2];
        var v0 = [old_position[c0 * 3 + 0], old_position[c0 * 3 + 1], old_position[c0 * 3 + 2]];
        var v1 = [old_position[c1 * 3 + 0], old_position[c1 * 3 + 1], old_position[c1 * 3 + 2]];
        var v2 = [old_position[c2 * 3 + 0], old_position[c2 * 3 + 1], old_position[c2 * 3 + 2]];
        var a = mid(v0, v1);
        var b = mid(v1, v2);
        var c = mid(v2, v0); // four new faces

        var j = i * 4;
        index[j + 0] = get_index(v0);
        index[j + 1] = a;
        index[j + 2] = c;
        index[j + 3] = get_index(v1);
        index[j + 4] = b;
        index[j + 5] = a;
        index[j + 6] = get_index(v2);
        index[j + 7] = c;
        index[j + 8] = b;
        index[j + 9] = a;
        index[j + 10] = b;
        index[j + 11] = c;
      }

      var position = new Float32Array(new_positions.length * 3);

      for (var _i = 0; _i < new_positions.length; _i += 1) {
        var vector = normalize(new_positions[_i]);
        position[_i * 3 + 0] = vector[0];
        position[_i * 3 + 1] = vector[1];
        position[_i * 3 + 2] = vector[2];
      }

      return new Geometry({
        position: {
          data: position,
          size: 3
        },
        normal: {
          data: position,
          size: 3
        }
      }, {
        index: index
      });
    }

    function create_smooth_geometry$1() {
      var subdivisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!smooth_geometry[subdivisions]) {
        var geometry = create_smooth_geometry$1(subdivisions - 1);
        smooth_geometry[subdivisions] = subdivide(geometry);
      }

      return smooth_geometry[subdivisions];
    }

    function create_flat_geometry$1(subdivisions) {
      throw new Error("TODO implement flat sphere geometry");
    }

    var icosphere = memoize(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$subdivisions = _ref.subdivisions,
          subdivisions = _ref$subdivisions === void 0 ? 0 : _ref$subdivisions,
          _ref$shading = _ref.shading,
          shading = _ref$shading === void 0 ? 'smooth' : _ref$shading;

      return shading === 'smooth' ? create_smooth_geometry$1(subdivisions) : create_flat_geometry$1();
    });

    var PI = Math.PI;
    var PI2 = PI * 2;

    function create_smooth_geometry$2(turns, bands) {
      var num_vertices = (turns + 1) * (bands + 1);
      var num_faces_per_turn = 2 * (bands - 1);
      var num_faces = num_faces_per_turn * turns;
      var position = new Float32Array(num_vertices * 3); // doubles as normal

      var uv = new Float32Array(num_vertices * 2);
      var index = new Uint32Array(num_faces * 3);
      var position_index = 0;
      var uv_index = 0;

      for (var i = 0; i <= turns; i += 1) {
        var u = i / turns;

        for (var j = 0; j <= bands; j += 1) {
          var v = j / bands;
          var x = -Math.cos(u * PI2) * Math.sin(v * PI);
          var y = Math.cos(v * PI);
          var z = Math.sin(u * PI2) * Math.sin(v * PI);
          position[position_index++] = x;
          position[position_index++] = y;
          position[position_index++] = z;
          uv[uv_index++] = u;
          uv[uv_index++] = v;
        }
      }

      var face_index = 0;

      for (var _i = 0; _i < turns; _i += 1) {
        var offset = _i * (bands + 1); // north pole face

        index[face_index++] = offset + 0;
        index[face_index++] = offset + 1;
        index[face_index++] = offset + bands + 2;

        for (var _j = 1; _j < bands - 1; _j += 1) {
          index[face_index++] = offset + _j;
          index[face_index++] = offset + _j + 1;
          index[face_index++] = offset + _j + bands + 1;
          index[face_index++] = offset + _j + bands + 1;
          index[face_index++] = offset + _j + 1;
          index[face_index++] = offset + _j + bands + 2;
        }

        index[face_index++] = offset + bands - 1;
        index[face_index++] = offset + bands;
        index[face_index++] = offset + bands * 2;
      }

      return new Geometry({
        position: {
          data: position,
          size: 3
        },
        normal: {
          data: position,
          size: 3
        },
        uv: {
          data: uv,
          size: 2
        }
      }, {
        index: index
      });
    }

    function create_flat_geometry$2(turns, bands) {
      throw new Error('TODO implement flat geometry');
    }

    var sphere = memoize(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$turns = _ref.turns,
          turns = _ref$turns === void 0 ? 8 : _ref$turns,
          _ref$bands = _ref.bands,
          bands = _ref$bands === void 0 ? 6 : _ref$bands,
          _ref$shading = _ref.shading,
          shading = _ref$shading === void 0 ? 'smooth' : _ref$shading;

      return shading === 'smooth' ? create_smooth_geometry$2(turns, bands) : create_flat_geometry$2();
    });

    // https://www.khronos.org/registry/webgl/specs/1.0/
    var UNSIGNED_BYTE = 0x1401;
    var RGBA = 0x1908;
    var LINEAR = 0x2601;
    var TEXTURE_MIN_FILTER = 0x2801;
    var TEXTURE_WRAP_S = 0x2802;
    var TEXTURE_WRAP_T = 0x2803;
    /* TextureTarget */

    var TEXTURE_2D = 0x0DE1;
    var CLAMP_TO_EDGE = 0x812F;

    var worker_url = typeof Blob !== 'undefined' && URL.createObjectURL(new Blob(["self.onmessage = e => { self.onmessage = null; eval(e.data); };"], {
      type: 'application/javascript'
    })) || typeof window !== 'undefined' && window.SVELTE_GL_WORKER_URL;
    var image_cache = new Map();
    function load_image(src) {
      if (!worker_url) {
        throw new Error("Workers cannot be created from Blob URLs in this browser. Please set SVELTE_GL_WORKER_URL");
      }

      if (!image_cache.has(src)) {
        image_cache.set(src, new Promise(function (fulfil, reject) {
          if (typeof createImageBitmap !== 'undefined') {
            // TODO pool workers?
            var worker = create_worker(worker_url, function () {
              self.onmessage = function (e) {
                fetch(e.data, {
                  mode: 'cors'
                }).then(function (response) {
                  return response.blob();
                }).then(function (blobData) {
                  return createImageBitmap(blobData);
                }).then(function (bitmap) {
                  self.postMessage({
                    bitmap: bitmap
                  }, [bitmap]);
                })["catch"](function (error) {
                  self.postMessage({
                    error: {
                      message: error.message,
                      stack: error.stack
                    }
                  });
                });
              };
            });

            worker.onmessage = function (e) {
              if (e.data.error) {
                image_cache["delete"](src);
                reject(e.data.error);
              } else fulfil(e.data.bitmap);
            };

            worker.postMessage(new URL(src, location.href).href);
          } else {
            var img = new Image();
            img.crossOrigin = '';

            img.onload = function () {
              return fulfil(img);
            };

            img.onerror = function (e) {
              image_cache["delete"](src);
              reject(e);
            };

            img.src = src;
          }
        }));
      }

      return image_cache.get(src);
    }

    var is_power_of_two = function is_power_of_two(n) {
      return (n & n - 1) === 0;
    };

    var black_pixel = new Uint8Array([0, 0, 0, 255]);

    var TextureInstance = /*#__PURE__*/function () {
      function TextureInstance(scene, texture) {
        var _this = this;

        _classCallCheck(this, TextureInstance);

        var gl = scene.gl;
        this._ = gl.createTexture();

        if (typeof texture.data === 'string') {
          this.bind(gl, texture, black_pixel);
          texture.ready.then(function () {
            _this.bind(gl, texture, texture.data);

            scene.invalidate();
          });
        } else {
          this.bind(gl, texture, texture.data);
        }
      }

      _createClass(TextureInstance, [{
        key: "bind",
        value: function bind(gl, texture, data) {
          gl.bindTexture(TEXTURE_2D, this._);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

          if (ArrayBuffer.isView(data)) {
            // TODO figure out where this goes
            var _width = 1;
            var _height = 1;
            gl.texImage2D(TEXTURE_2D, 0, RGBA, _width, _height, 0, RGBA, UNSIGNED_BYTE, data);
          } else {
            gl.texImage2D(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE, data);
          }

          gl.generateMipmap(TEXTURE_2D);
          var width = 'naturalWidth' in data ? data.naturalWidth : data.width;
          var height = 'naturalHeight' in data ? data.naturalHeight : data.height;

          if (is_power_of_two(width) && is_power_of_two(height)) {
            gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, texture.opts.wrapS);
            gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, texture.opts.wrapT);
            gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, texture.opts.minFilter);
          } else {
            gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
            gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
            gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
          }
        }
      }]);

      return TextureInstance;
    }();

    var caches$1 = new Map();
    var resolved;

    var Texture = /*#__PURE__*/function () {
      function Texture(data) {
        var _this2 = this;

        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Texture);

        this.data = data;
        this.opts = {
          width: opts.width || 1,
          height: opts.height || 1,
          internalFormat: opts.format || RGBA,
          srcFormat: opts.srcFormat || RGBA,
          srcType: opts.srcType || UNSIGNED_BYTE,
          wrapS: opts.wrapS || CLAMP_TO_EDGE,
          wrapT: opts.wrapT || CLAMP_TO_EDGE,
          minFilter: opts.minFilter || LINEAR
        }; // TODO clamp, mipmaps, etc

        this.hash = JSON.stringify(this.opts);
        this.ready = typeof data === 'string' ? load_image(data).then(function (img) {
          _this2.data = img;
        }) : resolved || (resolved = Promise.resolve());
      }

      _createClass(Texture, [{
        key: "instantiate",
        value: function instantiate(scene, index) {
          if (!caches$1.has(scene)) caches$1.set(scene, new Map());
          var a = caches$1.get(scene);
          if (!a.has(this.data)) a.set(this.data, new Map());
          var b = a.get(this.data);
          if (!b.has(this.hash)) b.set(this.hash, new TextureInstance(scene, this, index));
          return b.get(this.hash);
        }
      }]);

      return Texture;
    }();

    // scene

    var GL = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Scene: Scene,
        Group: Group,
        Layer: Layer,
        Mesh: Mesh,
        Overlay: Overlay,
        Point: Point,
        Target: Target,
        AmbientLight: AmbientLight,
        DirectionalLight: DirectionalLight,
        PointLight: PointLight,
        OrbitControls: OrbitControls,
        PerspectiveCamera: PerspectiveCamera,
        OrthoCamera: OrthoCamera,
        Geometry: Geometry,
        box: box,
        cone: cone,
        dodecahedron: dodecahedron,
        plane: plane,
        sprite: sprite,
        terrain: terrain,
        icosphere: icosphere,
        sphere: sphere,
        Texture: Texture
    });

    function generateFace (ctx, gridColor, gridSpacing) {
      ctx.strokeStyle = gridColor;
      var w = ctx.canvas.width,
          h = ctx.canvas.height;
      ctx.beginPath();

      for (var x = gridSpacing / 2; x <= w; x += gridSpacing) {
        ctx.save();
        ctx.translate(0.5, 0);
        ctx.moveTo(x - 0.5, 0); // 0.5 offset so that 1px lines are crisp

        ctx.lineTo(x - 0.5, h);
        ctx.restore();
      }

      for (var y = gridSpacing / 2; y <= h; y += gridSpacing) {
        ctx.save();
        ctx.translate(0, 0.5);
        ctx.moveTo(0, y - 0.5);
        ctx.lineTo(w, y - 0.5);
        ctx.restore();
      }

      ctx.stroke();
    }

    var quadVert = "\n#define NAME normal-selected-txt-vertex-shader\nin vec3 position;\nin vec3 normal;\nin vec2 uv;\nout vec3 v_normal;\nout vec2 v_textureCoords;\nvoid main() {\n\tv_normal = normal;\n\tv_textureCoords = uv;\n\tgl_Position = PROJECTION * VIEW * MODEL * vec4(position, 1.0);\n}\n";

    var quadFrag = "\nuniform vec3 color;\nuniform vec3 emissive;\nuniform float alpha;\nuniform float specularity;\nuniform sampler2D bumpmap;\nuniform sampler2D colormap;\nuniform sampler2D emissivemap;\nuniform sampler2D specularitymap;\nuniform vec3 FOG_COLOR;\nuniform float FOG_DENSITY;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\nuniform sampler2D uTexture2;\nuniform sampler2D uTexture3;\nuniform sampler2D uTexture4;\nuniform sampler2D uTexture5;\n#define NAME normal-selected-txt-fragment-shader\nin vec3 v_normal;\nin vec2 v_textureCoords;\nout mediump vec4 fragColor;\nvoid main () {\n\tif (v_normal.z == 1.0) {\n\t\tfragColor = texture(uTexture0, v_textureCoords);\n\t} else if (v_normal.x == -1.0) {\n\t\tfragColor = texture(uTexture1, v_textureCoords);\n\t} else if (v_normal.z == -1.0) {\n\t\tfragColor = texture(uTexture2, v_textureCoords);\n\t} else if (v_normal.x == 1.0) {\n\t\tfragColor = texture(uTexture3, v_textureCoords);\n\t} else if (v_normal.y == 1.0) {\n\t\tfragColor = texture(uTexture4, v_textureCoords);\n\t} else if (v_normal.y == -1.0) {\n\t\tfragColor = texture(uTexture5, v_textureCoords);\n\t} else {\n\t\tfragColor = vec4(color, 1.0);\n\t}\n\tfragColor.a *= alpha;\n}\n";

    /* src/apps/GLSLApp.svelte generated by Svelte v3.19.2 */

    const { console: console_1, document: document_1$1 } = globals;
    const file$4 = "src/apps/GLSLApp.svelte";

    function add_css$4() {
    	var style = element("style");
    	style.id = "svelte-1yypb9b-style";
    	style.textContent = "@media screen and (max-width: 480px){.controls.svelte-1yypb9b{margin-top:8px}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0xTTEFwcC5zdmVsdGUiLCJzb3VyY2VzIjpbIkdMU0xBcHAuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgaW1wb3J0ICogYXMgR0wgZnJvbSAnQHN2ZWx0ZWpzL2dsJztcbiAgICBpbXBvcnQgZ2VuZXJhdGVGYWNlIGZyb20gJy4vY29udGVudC9ncmlkLWdlbmVyYXRvcic7XG4gICAgaW1wb3J0IHZlcnQgZnJvbSAnLi9zaGFkZXJzL2N1c3RvbS9ub3JtYWwtc2VsZWN0ZWQtdHh0LXZlcnRleC1zaGFkZXIuZ2xzbCc7XG4gICAgaW1wb3J0IGZyYWcgZnJvbSAnLi9zaGFkZXJzL2N1c3RvbS9ub3JtYWwtc2VsZWN0ZWQtdHh0LWZyYWdtZW50LXNoYWRlci5nbHNsJztcblxuICAgIGV4cG9ydCBsZXQgdGl0bGU7XG5cbiAgICBleHBvcnQgbGV0IGNvbG9yID0gJyNGN0M3N0InO1xuXG4gICAgbGV0IHcgPSAxO1xuICAgIGxldCBoID0gMTtcbiAgICBsZXQgZCA9IDE7XG5cbiAgICBjb25zdCBsaWdodCA9IHt9O1xuXG4gICAgLy8gaW5pdGlhbCB2aWV3XG4gICAgbGV0IGxvY2F0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbIDAuMjUsIDEsIDIuNSBdKTtcbiAgICBsZXQgdGFyZ2V0ID0gbmV3IEZsb2F0MzJBcnJheShbMCwgMSwgMF0pO1xuXG4gICAgY29uc3QgY2FwdHVyZVZpZXdEaXJlY3Rpb24gPSAobG9jLCB0Z3QpID0+IFwiXCI7XG5cbiAgICBmdW5jdGlvbiBhZGp1c3RDb2xvciAoY2xyLCBoZWlnaHQgPSAxKSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludCgnMHgnICsgY2xyLnN1YnN0cigxLCAyKSwgMTYpLFxuICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludCgnMHgnICsgY2xyLnN1YnN0cigzLCAyKSwgMTYpLFxuICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludCgnMHgnICsgY2xyLnN1YnN0cig1LCAyKSwgMTYpO1xuXG4gICAgICAgIGNvbnN0IGhyID0gTWF0aC5mbG9vcihyICogKGhlaWdodCAvIDAuMjUpKSxcbiAgICAgICAgICAgICAgICBoYiA9IE1hdGguZmxvb3IoYiAqIChoZWlnaHQgLyAwLjI1KSk7XG4gICAgICAgIHJldHVybiBNYXRoLmFicygoKChociA8IDI1NSkgPyBociA6IHIpIDw8IDE2KSArIChnIDw8IDgpICsgKChoYiA8IDI1NSkgPyBoYiA6IGIpKTtcbiAgICB9XG5cbiAgICBsZXQgd2ViZ2w7XG4gICAgbGV0IHRleHR1cmVzID0gW107XG4gICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IDI1NjtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IDI1NjtcbiAgICBsZXQgcHJvY2Vzc19leHRyYV9zaGFkZXJfY29tcG9uZW50cyA9IChnbCwgbWF0ZXJpYWwsIG1vZGVsKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHJvY2VzcyBFeHRyYSBTaGFkZXIgQ29tcG9uZW50c1wiKTtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IG1hdGVyaWFsLnByb2dyYW07XG5cbiAgICAgICAgaWYgKG1hdGVyaWFsLnZlcnROYW1lID09IFwibm9ybWFsLXNlbGVjdGVkLXR4dC12ZXJ0ZXgtc2hhZGVyXCIgJiYgbWF0ZXJpYWwuZnJhZ05hbWUgPT0gXCJub3JtYWwtc2VsZWN0ZWQtdHh0LWZyYWdtZW50LXNoYWRlclwiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRlcmlhbC52ZXJ0TmFtZSwgbWF0ZXJpYWwuZnJhZ05hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCB1dkNvb3JkTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcInV2XCIpO1xuXG4gICAgICAgICAgICAvLyBnbC5kaXNhYmxlKGdsLkNVTExfRkFDRSk7IC8vIGZvciBkb3VibGUtc2lkZWQgcG9seVxuXG4gICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh1dkNvb3JkTG9jYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUNvb3JkcyA9IFtcblxuICAgICAgICAgICAgICAgIC8vIGZyb250OiAwIDEgMiAzXG4gICAgICAgICAgICAgICAgMS4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXG5cbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxIDQgMyA2XG4gICAgICAgICAgICAgICAgMS4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXG5cbiAgICAgICAgICAgICAgICAvLyBiYWNrOiA0IDUgNiA3XG4gICAgICAgICAgICAgICAgMS4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXG5cbiAgICAgICAgICAgICAgICAvLyByaWdodDogNSAwIDcgMlxuICAgICAgICAgICAgICAgIDEuMCwgMS4wLFxuICAgICAgICAgICAgICAgIDAuMCwgMS4wLFxuICAgICAgICAgICAgICAgIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLFxuXG4gICAgICAgICAgICAgICAgLy8gdG9wOiA0IDEgNSAwXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXG5cbiAgICAgICAgICAgICAgICAvLyBib3R0b206IDMgNiAyIDdcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCxcbiAgICAgICAgICAgICAgICAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAxLjAsIDEuMCxcbiAgICAgICAgICAgICAgICAxLjAsIDAuMCxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlQnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRleHR1cmVDb29yZHMpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHV2Q29vcmRMb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICAgICAgLy8gVW4tYmluZCBidWZmZXJzXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcblxuICAgICAgICAgICAgaWYgKChtYXRlcmlhbC52ZXJ0TmFtZSA9PSBcIm5vcm1hbC1zZWxlY3RlZC10eHQtdmVydGV4LXNoYWRlclwiICYmIG1hdGVyaWFsLmZyYWdOYW1lID09IFwibm9ybWFsLXNlbGVjdGVkLXR4dC1mcmFnbWVudC1zaGFkZXJcIikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDY7ICsrdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0ZXh0dXJlc1t0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnRUZXh0dXJlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1VGV4dHVyZVwiICsgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2godCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFNCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFNSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZXNbdF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGZyYWdtZW50VGV4dHVyZUxvY2F0aW9uLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhdGV4dHVyZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnRUZXh0dXJlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1VGV4dHVyZTBcIik7XG4gICAgICAgICAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShmcmFnbWVudFRleHR1cmVMb2NhdGlvbiwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWwudmVydE5hbWUgPT0gXCJ0ZXh0dXJlLXZlcnRleC1zaGFkZXJcIiAmJiBtYXRlcmlhbC5mcmFnTmFtZSA9PSBcImN1YmVtYXAtZnJhZ21lbnQtc2hhZGVyXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGVyaWFsLnZlcnROYW1lLCBtYXRlcmlhbC5mcmFnTmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50VGV4dHVyZUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidVRleHR1cmVcIik7XG5cbiAgICAgICAgICAgIGlmICghIXRleHR1cmVzWzBdKSB7XG4gICAgICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZXNbMF0pO1xuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShmcmFnbWVudFRleHR1cmVMb2NhdGlvbiwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBvbk1vdW50KCgpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYmdsKTtcblxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDY7ICsrdCkge1xuICAgICAgICAgICAgaWYgKCEhdGV4dHVyZXNbdF0gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB0ZXh0dXJlIGFuZCBjcmVhdGUgaW5pdGlhbCBiaW5kXG4gICAgICAgICAgICAgICAgdGV4dHVyZXNbdF0gPSB3ZWJnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICAgICAgd2ViZ2wuYmluZFRleHR1cmUod2ViZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZXNbdF0pO1xuICAgICAgICAgICAgICAgIC8vIHdlYmdsLmJpbmRUZXh0dXJlKHdlYmdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFjZUluZm9zID0gW1xuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLCBmYWNlQ29sb3I6ICcjRjAwJywgdGV4dENvbG9yOiAnIzBGRicsIHRleHQ6ICcrWCd9LFxuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLCBmYWNlQ29sb3I6ICcjRkYwJywgdGV4dENvbG9yOiAnIzAwRicsIHRleHQ6ICctWCd9LFxuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLCBmYWNlQ29sb3I6ICcjMEYwJywgdGV4dENvbG9yOiAnI0YwRicsIHRleHQ6ICcrWSd9LFxuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLCBmYWNlQ29sb3I6ICcjMEZGJywgdGV4dENvbG9yOiAnI0YwMCcsIHRleHQ6ICctWSd9LFxuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLCBmYWNlQ29sb3I6ICcjMDBGJywgdGV4dENvbG9yOiAnI0ZGMCcsIHRleHQ6ICcrWid9LFxuICAgICAgICAgICAgLy8ge3RhcmdldDogd2ViZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLCBmYWNlQ29sb3I6ICcjRjBGJywgdGV4dENvbG9yOiAnIzBGMCcsIHRleHQ6ICctWid9XG4gICAgICAgICAgICB7dGFyZ2V0OiB3ZWJnbC5URVhUVVJFXzJELCBmYWNlQ29sb3I6ICcjRjAwJywgdGV4dENvbG9yOiAnIzBGRicsIHRleHQ6ICcrWCd9LFxuICAgICAgICAgICAge3RhcmdldDogd2ViZ2wuVEVYVFVSRV8yRCwgZmFjZUNvbG9yOiAnI0ZGMCcsIHRleHRDb2xvcjogJyMwMEYnLCB0ZXh0OiAnLVgnfSxcbiAgICAgICAgICAgIHt0YXJnZXQ6IHdlYmdsLlRFWFRVUkVfMkQsIGZhY2VDb2xvcjogJyMwRjAnLCB0ZXh0Q29sb3I6ICcjRjBGJywgdGV4dDogJytZJ30sXG4gICAgICAgICAgICB7dGFyZ2V0OiB3ZWJnbC5URVhUVVJFXzJELCBmYWNlQ29sb3I6ICcjMEZGJywgdGV4dENvbG9yOiAnI0YwMCcsIHRleHQ6ICctWSd9LFxuICAgICAgICAgICAge3RhcmdldDogd2ViZ2wuVEVYVFVSRV8yRCwgZmFjZUNvbG9yOiAnIzAwRicsIHRleHRDb2xvcjogJyNGRjAnLCB0ZXh0OiAnK1onfSxcbiAgICAgICAgICAgIHt0YXJnZXQ6IHdlYmdsLlRFWFRVUkVfMkQsIGZhY2VDb2xvcjogJyNGMEYnLCB0ZXh0Q29sb3I6ICcjMEYwJywgdGV4dDogJy1aJ31cbiAgICAgICAgXTtcblxuICAgICAgICBmYWNlSW5mb3MuZm9yRWFjaCgoZmFjZUluZm8sIGksIGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHt0YXJnZXQsIGZhY2VDb2xvciwgdGV4dENvbG9yLCB0ZXh0fSA9IGZhY2VJbmZvO1xuICAgICAgICAgICAgLy8gQXN5bmNocm9ub3VzbHkgbG9hZCBhbiBpbWFnZVxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnJztcblxuICAgICAgICAgICAgaW1nLmlkID0gJycgKyAoaSArIDEpO1xuXG4gICAgICAgICAgICAvLyBVc2UgMmQgZmFjZSBnZW5lcmF0b3IgdG8gZ2VuZXJhdGUgNiBpbWFnZXNcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlRmFjZShjdHgsIGZhY2VDb2xvciwgdGV4dENvbG9yLCB0ZXh0KTtcbiAgICAgICAgICAgIGdlbmVyYXRlRmFjZShjdHgsIGZhY2VDb2xvciwgMTYpO1xuXG4gICAgICAgICAgICAvLyBVcGxvYWQgdGhlIGNhbnZhcyB0byB0aGUgY3ViZW1hcCBmYWNlLlxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSAwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSB3ZWJnbC5SR0JBO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gd2ViZ2wuUkdCQTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB3ZWJnbC5VTlNJR05FRF9CWVRFO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3V2lkdGggPSBjdHguY2FudmFzLndpZHRoIC8gNDtcblxuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9ICdhdXRvJztcbiAgICAgICAgICAgIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IGkgKiBwcmV2aWV3V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gcHJldmlld1dpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHRoZSBpbWFnZSBoYXMgbG9hZGVkIG1ha2UgY29weSBpdCB0byB0aGUgdGV4dHVyZS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJpbmQgdG8gdGV4dHVyZVwiKTtcbiAgICAgICAgICAgICAgICB3ZWJnbC5iaW5kVGV4dHVyZSh3ZWJnbC5URVhUVVJFXzJELCB0ZXh0dXJlc1tpXSk7XG4gICAgICAgICAgICAgICAgLy8gd2ViZ2wuYmluZFRleHR1cmUod2ViZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgd2ViZ2wucGl4ZWxTdG9yZWkod2ViZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgd2ViZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHdlYmdsLmdlbmVyYXRlTWlwbWFwKHdlYmdsLlRFWFRVUkVfMkQpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChpID49IDUpIHdlYmdsLmdlbmVyYXRlTWlwbWFwKHdlYmdsLlRFWFRVUkVfQ1VCRV9NQVApO1xuICAgICAgICAgICAgICAgIHdlYmdsLnRleFBhcmFtZXRlcmkod2ViZ2wuVEVYVFVSRV8yRCwgd2ViZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB3ZWJnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIpOyAvLyB3ZWJnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7XG4gICAgICAgICAgICAgICAgd2ViZ2wudGV4UGFyYW1ldGVyaSh3ZWJnbC5URVhUVVJFXzJELCB3ZWJnbC5URVhUVVJFX01JTl9GSUxURVIsIHdlYmdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUik7IC8vIHdlYmdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTtcbiAgICAgICAgICAgICAgICAvLyB3ZWJnbC50ZXhQYXJhbWV0ZXJpKHdlYmdsLlRFWFRVUkVfQ1VCRV9NQVAsIHdlYmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgd2ViZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSKTsgLy8gd2ViZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpO1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdHguY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFNldHVwIGVhY2ggZmFjZSBzbyBpdCdzIGltbWVkaWF0ZWx5IHJlbmRlcmFibGVcbiAgICAgICAgICAgIGlmICghIXRleHR1cmVzW2ldKSB3ZWJnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIGxpZ2h0LnggPSAzICogTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAxKTtcbiAgICAgICAgICAgIGxpZ2h0LnkgPSAyLjUgKyAyICogTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAwNCk7XG4gICAgICAgICAgICBsaWdodC56ID0gMyAqIE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9vcCgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250cm9scyBsYWJlbCBpbnB1dFt0eXBlPVwiY29sb3JcIl0ge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgbWFyZ2luOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5rZXlzICoge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgIH08L3N0eWxlPlxuXG48R0wuU2NlbmUgYmluZDpnbD17d2ViZ2x9IGJhY2tncm91bmRPcGFjaXR5PTEuMCBwcm9jZXNzX2V4dHJhX3NoYWRlcl9jb21wb25lbnRzPXtwcm9jZXNzX2V4dHJhX3NoYWRlcl9jb21wb25lbnRzfT5cbiAgICA8R0wuVGFyZ2V0IGlkPVwiY2VudGVyXCIgbG9jYXRpb249e1swLCBoLzIsIDBdfS8+XG5cbiAgICA8R0wuT3JiaXRDb250cm9scyBtYXhQb2xhckFuZ2xlPXtNYXRoLlBJIC8gMn0ge2xvY2F0aW9ufT5cbiAgICAgICAgPEdMLlBlcnNwZWN0aXZlQ2FtZXJhIGJpbmQ6bG9jYXRpb249e2xvY2F0aW9ufSBsb29rQXQ9XCJjZW50ZXJcIiBuZWFyPXswLjAxfSBmYXI9ezEwMDB9Lz5cbiAgICA8L0dMLk9yYml0Q29udHJvbHM+XG5cbiAgICA8R0wuQW1iaWVudExpZ2h0IGludGVuc2l0eT17MC4zfS8+XG4gICAgPEdMLkRpcmVjdGlvbmFsTGlnaHQgZGlyZWN0aW9uPXtbLTEsLTEsLTFdfSBpbnRlbnNpdHk9ezAuNX0vPlxuXG4gICAgPCEtLSBib3ggLS0+XG4gICAgPEdMLk1lc2hcbiAgICAgICAgICAgIGdlb21ldHJ5PXtHTC5ib3goe30pfVxuICAgICAgICAgICAgbG9jYXRpb249e1swLGgvMiwwXX1cbiAgICAgICAgICAgIHJvdGF0aW9uPXtbMCwtMjAsMF19XG4gICAgICAgICAgICBzY2FsZT17W3csaCxkXX1cbiAgICAgICAgICAgIHZlcnQ9e3ZlcnR9XG4gICAgICAgICAgICBmcmFnPXtmcmFnfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IGFkanVzdENvbG9yKGNvbG9yKSwgYWxwaGE6IDEuMCB9fVxuICAgICAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAvPlxuXG4gICAgPCEtLSBmbG9vciAtLT5cbiAgICA8R0wuTWVzaFxuICAgICAgICAgICAgZ2VvbWV0cnk9e0dMLnBsYW5lKCl9XG4gICAgICAgICAgICBsb2NhdGlvbj17WzAsLTAuMDEsMF19XG4gICAgICAgICAgICByb3RhdGlvbj17Wy05MCwwLDBdfVxuICAgICAgICAgICAgc2NhbGU9ezEwfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IDB4ZmZmZmZmIH19XG4gICAgLz5cblxuICAgIDwhLS0gY2VpbGluZyAtLT5cbiAgICA8R0wuTWVzaFxuICAgICAgICAgICAgZ2VvbWV0cnk9e0dMLnBsYW5lKCl9XG4gICAgICAgICAgICBsb2NhdGlvbj17WzAsNS4wLDBdfVxuICAgICAgICAgICAgcm90YXRpb249e1s5MCwwLDBdfVxuICAgICAgICAgICAgc2NhbGU9ezEwfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IDB4ZmZmZmZmIH19XG4gICAgLz5cblxuICAgIDwhLS0gd2FsbDEgLS0+XG4gICAgPEdMLk1lc2hcbiAgICAgICAgICAgIGdlb21ldHJ5PXtHTC5wbGFuZSgpfVxuICAgICAgICAgICAgbG9jYXRpb249e1swLC0wLjAxLC0xMC4wXX1cbiAgICAgICAgICAgIHJvdGF0aW9uPXtbMCwwLDBdfVxuICAgICAgICAgICAgc2NhbGU9ezEwfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IDB4ZmZmZmZmIH19XG4gICAgLz5cblxuICAgIDwhLS0gd2FsbDIgLS0+XG4gICAgPEdMLk1lc2hcbiAgICAgICAgICAgIGdlb21ldHJ5PXtHTC5wbGFuZSgpfVxuICAgICAgICAgICAgbG9jYXRpb249e1sxMC4wLC0wLjAxLDAuMF19XG4gICAgICAgICAgICByb3RhdGlvbj17WzAsLTkwLDBdfVxuICAgICAgICAgICAgc2NhbGU9ezEwfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IDB4ZmZmZmZmIH19XG4gICAgLz5cblxuICAgIDwhLS0gd2FsbDMgLS0+XG4gICAgPEdMLk1lc2hcbiAgICAgICAgICAgIGdlb21ldHJ5PXtHTC5wbGFuZSgpfVxuICAgICAgICAgICAgbG9jYXRpb249e1stMTAuMCwtMC4wMSwwLjBdfVxuICAgICAgICAgICAgcm90YXRpb249e1swLDkwLDBdfVxuICAgICAgICAgICAgc2NhbGU9ezEwfVxuICAgICAgICAgICAgdW5pZm9ybXM9e3sgY29sb3I6IDB4ZmZmZmZmIH19XG4gICAgLz5cblxuICAgIDwhLS0gbW92aW5nIGxpZ2h0IC0tPlxuICAgIDxHTC5Hcm91cCBsb2NhdGlvbj17W2xpZ2h0LngsbGlnaHQueSxsaWdodC56XX0+XG4gICAgICAgIDxHTC5NZXNoXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk9e0dMLnNwaGVyZSh7IHR1cm5zOiAzNiwgYmFuZHM6IDM2IH0pfVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtbMCwwLjIsMF19XG4gICAgICAgICAgICAgICAgc2NhbGU9ezAuMX1cbiAgICAgICAgICAgICAgICB1bmlmb3Jtcz17eyBjb2xvcjogMHhmZmZmZmYsIGVtaXNzaXZlOiAweGZmMDAwMCB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxHTC5Qb2ludExpZ2h0XG4gICAgICAgICAgICAgICAgbG9jYXRpb249e1swLDAsMF19XG4gICAgICAgICAgICAgICAgY29sb3I9ezB4ZmYwMDAwfVxuICAgICAgICAgICAgICAgIGludGVuc2l0eT17MC42fVxuICAgICAgICAvPlxuICAgIDwvR0wuR3JvdXA+XG48L0dMLlNjZW5lPlxuXG48ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBiaW5kOnZhbHVlPXt3fSBtaW49ezAuMX0gbWF4PXs1fSBzdGVwPXswLjF9IC8+PGJyIC8+IHdpZHRoICh7d30pXG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGJpbmQ6dmFsdWU9e2h9IG1pbj17MC4xfSBtYXg9ezV9IHN0ZXA9ezAuMX0gLz48YnIgLz4gaGVpZ2h0ICh7aH0pXG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGJpbmQ6dmFsdWU9e2R9IG1pbj17MC4xfSBtYXg9ezV9IHN0ZXA9ezAuMX0gLz48YnIgLz4gZGVwdGggKHtkfSlcbiAgICA8L2xhYmVsPlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdU9JLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDbEMsU0FBUyxlQUFDLENBQUMsQUFDUCxVQUFVLENBQUUsR0FBRyxBQUNuQixDQUFDLEFBQ0wsQ0FBQyJ9 */";
    	append_dev(document_1$1.head, style);
    }

    // (252:4) <GL.OrbitControls maxPolarAngle={Math.PI / 2} {location}>
    function create_default_slot_2(ctx) {
    	let updating_location;
    	let current;

    	function gl_perspectivecamera_location_binding(value) {
    		/*gl_perspectivecamera_location_binding*/ ctx[13].call(null, value);
    	}

    	let gl_perspectivecamera_props = { lookAt: "center", near: 0.01, far: 1000 };

    	if (/*location*/ ctx[5] !== void 0) {
    		gl_perspectivecamera_props.location = /*location*/ ctx[5];
    	}

    	const gl_perspectivecamera = new PerspectiveCamera({
    			props: gl_perspectivecamera_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(gl_perspectivecamera, "location", gl_perspectivecamera_location_binding));

    	const block = {
    		c: function create() {
    			create_component(gl_perspectivecamera.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_perspectivecamera, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_perspectivecamera_changes = {};

    			if (!updating_location && dirty & /*location*/ 32) {
    				updating_location = true;
    				gl_perspectivecamera_changes.location = /*location*/ ctx[5];
    				add_flush_callback(() => updating_location = false);
    			}

    			gl_perspectivecamera.$set(gl_perspectivecamera_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_perspectivecamera.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_perspectivecamera.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_perspectivecamera, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(252:4) <GL.OrbitControls maxPolarAngle={Math.PI / 2} {location}>",
    		ctx
    	});

    	return block;
    }

    // (317:4) <GL.Group location={[light.x,light.y,light.z]}>
    function create_default_slot_1(ctx) {
    	let t;
    	let current;

    	const gl_mesh = new Mesh({
    			props: {
    				geometry: sphere({ turns: 36, bands: 36 }),
    				location: [0, 0.2, 0],
    				scale: 0.1,
    				uniforms: { color: 16777215, emissive: 16711680 }
    			},
    			$$inline: true
    		});

    	const gl_pointlight = new PointLight({
    			props: {
    				location: [0, 0, 0],
    				color: 16711680,
    				intensity: 0.6
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_mesh.$$.fragment);
    			t = space();
    			create_component(gl_pointlight.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_mesh, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(gl_pointlight, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_mesh.$$.fragment, local);
    			transition_in(gl_pointlight.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_mesh.$$.fragment, local);
    			transition_out(gl_pointlight.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_mesh, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(gl_pointlight, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(317:4) <GL.Group location={[light.x,light.y,light.z]}>",
    		ctx
    	});

    	return block;
    }

    // (249:0) <GL.Scene bind:gl={webgl} backgroundOpacity=1.0 process_extra_shader_components={process_extra_shader_components}>
    function create_default_slot$1(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let t5;
    	let t6;
    	let t7;
    	let t8;
    	let t9;
    	let current;

    	const gl_target = new Target({
    			props: {
    				id: "center",
    				location: [0, /*h*/ ctx[2] / 2, 0]
    			},
    			$$inline: true
    		});

    	const gl_orbitcontrols = new OrbitControls({
    			props: {
    				maxPolarAngle: Math.PI / 2,
    				location: /*location*/ ctx[5],
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const gl_ambientlight = new AmbientLight({
    			props: { intensity: 0.3 },
    			$$inline: true
    		});

    	const gl_directionallight = new DirectionalLight({
    			props: { direction: [-1, -1, -1], intensity: 0.5 },
    			$$inline: true
    		});

    	const gl_mesh0 = new Mesh({
    			props: {
    				geometry: box({}),
    				location: [0, /*h*/ ctx[2] / 2, 0],
    				rotation: [0, -20, 0],
    				scale: [/*w*/ ctx[1], /*h*/ ctx[2], /*d*/ ctx[3]],
    				vert: quadVert,
    				frag: quadFrag,
    				uniforms: {
    					color: adjustColor(/*color*/ ctx[0]),
    					alpha: 1
    				},
    				transparent: true
    			},
    			$$inline: true
    		});

    	const gl_mesh1 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [0, -0.01, 0],
    				rotation: [-90, 0, 0],
    				scale: 10,
    				uniforms: { color: 16777215 }
    			},
    			$$inline: true
    		});

    	const gl_mesh2 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [0, 5, 0],
    				rotation: [90, 0, 0],
    				scale: 10,
    				uniforms: { color: 16777215 }
    			},
    			$$inline: true
    		});

    	const gl_mesh3 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [0, -0.01, -10],
    				rotation: [0, 0, 0],
    				scale: 10,
    				uniforms: { color: 16777215 }
    			},
    			$$inline: true
    		});

    	const gl_mesh4 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [10, -0.01, 0],
    				rotation: [0, -90, 0],
    				scale: 10,
    				uniforms: { color: 16777215 }
    			},
    			$$inline: true
    		});

    	const gl_mesh5 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [-10, -0.01, 0],
    				rotation: [0, 90, 0],
    				scale: 10,
    				uniforms: { color: 16777215 }
    			},
    			$$inline: true
    		});

    	const gl_group = new Group({
    			props: {
    				location: [/*light*/ ctx[4].x, /*light*/ ctx[4].y, /*light*/ ctx[4].z],
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_target.$$.fragment);
    			t0 = space();
    			create_component(gl_orbitcontrols.$$.fragment);
    			t1 = space();
    			create_component(gl_ambientlight.$$.fragment);
    			t2 = space();
    			create_component(gl_directionallight.$$.fragment);
    			t3 = space();
    			create_component(gl_mesh0.$$.fragment);
    			t4 = space();
    			create_component(gl_mesh1.$$.fragment);
    			t5 = space();
    			create_component(gl_mesh2.$$.fragment);
    			t6 = space();
    			create_component(gl_mesh3.$$.fragment);
    			t7 = space();
    			create_component(gl_mesh4.$$.fragment);
    			t8 = space();
    			create_component(gl_mesh5.$$.fragment);
    			t9 = space();
    			create_component(gl_group.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_target, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(gl_orbitcontrols, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(gl_ambientlight, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(gl_directionallight, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(gl_mesh0, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(gl_mesh1, target, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(gl_mesh2, target, anchor);
    			insert_dev(target, t6, anchor);
    			mount_component(gl_mesh3, target, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(gl_mesh4, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(gl_mesh5, target, anchor);
    			insert_dev(target, t9, anchor);
    			mount_component(gl_group, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_target_changes = {};
    			if (dirty & /*h*/ 4) gl_target_changes.location = [0, /*h*/ ctx[2] / 2, 0];
    			gl_target.$set(gl_target_changes);
    			const gl_orbitcontrols_changes = {};
    			if (dirty & /*location*/ 32) gl_orbitcontrols_changes.location = /*location*/ ctx[5];

    			if (dirty & /*$$scope, location*/ 262176) {
    				gl_orbitcontrols_changes.$$scope = { dirty, ctx };
    			}

    			gl_orbitcontrols.$set(gl_orbitcontrols_changes);
    			const gl_mesh0_changes = {};
    			if (dirty & /*h*/ 4) gl_mesh0_changes.location = [0, /*h*/ ctx[2] / 2, 0];
    			if (dirty & /*w, h, d*/ 14) gl_mesh0_changes.scale = [/*w*/ ctx[1], /*h*/ ctx[2], /*d*/ ctx[3]];

    			if (dirty & /*color*/ 1) gl_mesh0_changes.uniforms = {
    				color: adjustColor(/*color*/ ctx[0]),
    				alpha: 1
    			};

    			gl_mesh0.$set(gl_mesh0_changes);
    			const gl_group_changes = {};
    			if (dirty & /*light*/ 16) gl_group_changes.location = [/*light*/ ctx[4].x, /*light*/ ctx[4].y, /*light*/ ctx[4].z];

    			if (dirty & /*$$scope*/ 262144) {
    				gl_group_changes.$$scope = { dirty, ctx };
    			}

    			gl_group.$set(gl_group_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_target.$$.fragment, local);
    			transition_in(gl_orbitcontrols.$$.fragment, local);
    			transition_in(gl_ambientlight.$$.fragment, local);
    			transition_in(gl_directionallight.$$.fragment, local);
    			transition_in(gl_mesh0.$$.fragment, local);
    			transition_in(gl_mesh1.$$.fragment, local);
    			transition_in(gl_mesh2.$$.fragment, local);
    			transition_in(gl_mesh3.$$.fragment, local);
    			transition_in(gl_mesh4.$$.fragment, local);
    			transition_in(gl_mesh5.$$.fragment, local);
    			transition_in(gl_group.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_target.$$.fragment, local);
    			transition_out(gl_orbitcontrols.$$.fragment, local);
    			transition_out(gl_ambientlight.$$.fragment, local);
    			transition_out(gl_directionallight.$$.fragment, local);
    			transition_out(gl_mesh0.$$.fragment, local);
    			transition_out(gl_mesh1.$$.fragment, local);
    			transition_out(gl_mesh2.$$.fragment, local);
    			transition_out(gl_mesh3.$$.fragment, local);
    			transition_out(gl_mesh4.$$.fragment, local);
    			transition_out(gl_mesh5.$$.fragment, local);
    			transition_out(gl_group.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_target, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(gl_orbitcontrols, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(gl_ambientlight, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(gl_directionallight, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(gl_mesh0, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(gl_mesh1, detaching);
    			if (detaching) detach_dev(t5);
    			destroy_component(gl_mesh2, detaching);
    			if (detaching) detach_dev(t6);
    			destroy_component(gl_mesh3, detaching);
    			if (detaching) detach_dev(t7);
    			destroy_component(gl_mesh4, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(gl_mesh5, detaching);
    			if (detaching) detach_dev(t9);
    			destroy_component(gl_group, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(249:0) <GL.Scene bind:gl={webgl} backgroundOpacity=1.0 process_extra_shader_components={process_extra_shader_components}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let updating_gl;
    	let t0;
    	let div;
    	let label0;
    	let input0;
    	let input0_min_value;
    	let input0_max_value;
    	let input0_step_value;
    	let br0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let label1;
    	let input1;
    	let input1_min_value;
    	let input1_max_value;
    	let input1_step_value;
    	let br1;
    	let t5;
    	let t6;
    	let t7;
    	let t8;
    	let label2;
    	let input2;
    	let input2_min_value;
    	let input2_max_value;
    	let input2_step_value;
    	let br2;
    	let t9;
    	let t10;
    	let t11;
    	let current;
    	let dispose;

    	function gl_scene_gl_binding(value) {
    		/*gl_scene_gl_binding*/ ctx[14].call(null, value);
    	}

    	let gl_scene_props = {
    		backgroundOpacity: "1.0",
    		process_extra_shader_components: /*process_extra_shader_components*/ ctx[7],
    		$$slots: { default: [create_default_slot$1] },
    		$$scope: { ctx }
    	};

    	if (/*webgl*/ ctx[6] !== void 0) {
    		gl_scene_props.gl = /*webgl*/ ctx[6];
    	}

    	const gl_scene = new Scene({ props: gl_scene_props, $$inline: true });
    	binding_callbacks.push(() => bind(gl_scene, "gl", gl_scene_gl_binding));

    	const block = {
    		c: function create() {
    			create_component(gl_scene.$$.fragment);
    			t0 = space();
    			div = element("div");
    			label0 = element("label");
    			input0 = element("input");
    			br0 = element("br");
    			t1 = text(" width (");
    			t2 = text(/*w*/ ctx[1]);
    			t3 = text(")");
    			t4 = space();
    			label1 = element("label");
    			input1 = element("input");
    			br1 = element("br");
    			t5 = text(" height (");
    			t6 = text(/*h*/ ctx[2]);
    			t7 = text(")");
    			t8 = space();
    			label2 = element("label");
    			input2 = element("input");
    			br2 = element("br");
    			t9 = text(" depth (");
    			t10 = text(/*d*/ ctx[3]);
    			t11 = text(")");
    			attr_dev(input0, "type", "range");
    			attr_dev(input0, "min", input0_min_value = 0.1);
    			attr_dev(input0, "max", input0_max_value = 5);
    			attr_dev(input0, "step", input0_step_value = 0.1);
    			add_location(input0, file$4, 334, 8, 12015);
    			add_location(br0, file$4, 334, 74, 12081);
    			add_location(label0, file$4, 333, 4, 11999);
    			attr_dev(input1, "type", "range");
    			attr_dev(input1, "min", input1_min_value = 0.1);
    			attr_dev(input1, "max", input1_max_value = 5);
    			attr_dev(input1, "step", input1_step_value = 0.1);
    			add_location(input1, file$4, 338, 8, 12134);
    			add_location(br1, file$4, 338, 74, 12200);
    			add_location(label1, file$4, 337, 4, 12118);
    			attr_dev(input2, "type", "range");
    			attr_dev(input2, "min", input2_min_value = 0.1);
    			attr_dev(input2, "max", input2_max_value = 5);
    			attr_dev(input2, "step", input2_step_value = 0.1);
    			add_location(input2, file$4, 342, 8, 12254);
    			add_location(br2, file$4, 342, 74, 12320);
    			add_location(label2, file$4, 341, 4, 12238);
    			attr_dev(div, "class", "controls svelte-1yypb9b");
    			add_location(div, file$4, 332, 0, 11972);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_scene, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, label0);
    			append_dev(label0, input0);
    			set_input_value(input0, /*w*/ ctx[1]);
    			append_dev(label0, br0);
    			append_dev(label0, t1);
    			append_dev(label0, t2);
    			append_dev(label0, t3);
    			append_dev(div, t4);
    			append_dev(div, label1);
    			append_dev(label1, input1);
    			set_input_value(input1, /*h*/ ctx[2]);
    			append_dev(label1, br1);
    			append_dev(label1, t5);
    			append_dev(label1, t6);
    			append_dev(label1, t7);
    			append_dev(div, t8);
    			append_dev(div, label2);
    			append_dev(label2, input2);
    			set_input_value(input2, /*d*/ ctx[3]);
    			append_dev(label2, br2);
    			append_dev(label2, t9);
    			append_dev(label2, t10);
    			append_dev(label2, t11);
    			current = true;

    			dispose = [
    				listen_dev(input0, "change", /*input0_change_input_handler*/ ctx[15]),
    				listen_dev(input0, "input", /*input0_change_input_handler*/ ctx[15]),
    				listen_dev(input1, "change", /*input1_change_input_handler*/ ctx[16]),
    				listen_dev(input1, "input", /*input1_change_input_handler*/ ctx[16]),
    				listen_dev(input2, "change", /*input2_change_input_handler*/ ctx[17]),
    				listen_dev(input2, "input", /*input2_change_input_handler*/ ctx[17])
    			];
    		},
    		p: function update(ctx, [dirty]) {
    			const gl_scene_changes = {};

    			if (dirty & /*$$scope, light, h, w, d, color, location*/ 262207) {
    				gl_scene_changes.$$scope = { dirty, ctx };
    			}

    			if (!updating_gl && dirty & /*webgl*/ 64) {
    				updating_gl = true;
    				gl_scene_changes.gl = /*webgl*/ ctx[6];
    				add_flush_callback(() => updating_gl = false);
    			}

    			gl_scene.$set(gl_scene_changes);

    			if (dirty & /*w*/ 2) {
    				set_input_value(input0, /*w*/ ctx[1]);
    			}

    			if (!current || dirty & /*w*/ 2) set_data_dev(t2, /*w*/ ctx[1]);

    			if (dirty & /*h*/ 4) {
    				set_input_value(input1, /*h*/ ctx[2]);
    			}

    			if (!current || dirty & /*h*/ 4) set_data_dev(t6, /*h*/ ctx[2]);

    			if (dirty & /*d*/ 8) {
    				set_input_value(input2, /*d*/ ctx[3]);
    			}

    			if (!current || dirty & /*d*/ 8) set_data_dev(t10, /*d*/ ctx[3]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_scene.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_scene.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_scene, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function adjustColor(clr, height = 1) {
    	const r = parseInt("0x" + clr.substr(1, 2), 16),
    		g = parseInt("0x" + clr.substr(3, 2), 16),
    		b = parseInt("0x" + clr.substr(5, 2), 16);

    	const hr = Math.floor(r * (height / 0.25)), hb = Math.floor(b * (height / 0.25));
    	return Math.abs(((hr < 255 ? hr : r) << 16) + (g << 8) + (hb < 255 ? hb : b));
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let { title } = $$props;
    	let { color = "#F7C77B" } = $$props;
    	let w = 1;
    	let h = 1;
    	let d = 1;
    	const light = {};

    	// initial view
    	let location = new Float32Array([0.25, 1, 2.5]);

    	let target = new Float32Array([0, 1, 0]);
    	const captureViewDirection = (loc, tgt) => "";
    	let webgl;
    	let textures = [];
    	const ctx = document.createElement("canvas").getContext("2d");
    	ctx.canvas.width = 256;
    	ctx.canvas.height = 256;

    	let process_extra_shader_components = (gl, material, model) => {
    		// console.log("Process Extra Shader Components");
    		const program = material.program;

    		if (material.vertName == "normal-selected-txt-vertex-shader" && material.fragName == "normal-selected-txt-fragment-shader") {
    			// console.log(material.vertName, material.fragName);
    			const uvCoordLocation = gl.getAttribLocation(program, "uv");

    			// gl.disable(gl.CULL_FACE); // for double-sided poly
    			gl.enableVertexAttribArray(uvCoordLocation);

    			const textureBuffer = gl.createBuffer();

    			const textureCoords = [
    				// front: 0 1 2 3
    				1,
    				1,
    				0,
    				1,
    				1,
    				0,
    				0,
    				0,
    				// left: 1 4 3 6
    				1,
    				1,
    				0,
    				1,
    				1,
    				0,
    				0,
    				0,
    				// back: 4 5 6 7
    				1,
    				1,
    				0,
    				1,
    				1,
    				0,
    				0,
    				0,
    				// right: 5 0 7 2
    				1,
    				1,
    				0,
    				1,
    				1,
    				0,
    				0,
    				0,
    				// top: 4 1 5 0
    				0,
    				1,
    				0,
    				0,
    				1,
    				1,
    				1,
    				0,
    				// bottom: 3 6 2 7
    				0,
    				1,
    				0,
    				0,
    				1,
    				1,
    				1,
    				0
    			];

    			gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    			gl.vertexAttribPointer(uvCoordLocation, 2, gl.FLOAT, false, 0, 0);

    			// Un-bind buffers
    			gl.bindBuffer(gl.ARRAY_BUFFER, null);

    			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    			if (material.vertName == "normal-selected-txt-vertex-shader" && material.fragName == "normal-selected-txt-fragment-shader") {
    				for (let t = 0; t < 6; ++t) {
    					if (!!textures[t]) {
    						const fragmentTextureLocation = gl.getUniformLocation(program, "uTexture" + t);

    						switch (t) {
    							case 1:
    								gl.activeTexture(gl.TEXTURE1);
    								break;
    							case 2:
    								gl.activeTexture(gl.TEXTURE2);
    								break;
    							case 3:
    								gl.activeTexture(gl.TEXTURE3);
    								break;
    							case 4:
    								gl.activeTexture(gl.TEXTURE4);
    								break;
    							case 5:
    								gl.activeTexture(gl.TEXTURE5);
    								break;
    							default:
    								gl.activeTexture(gl.TEXTURE0);
    						}

    						gl.bindTexture(gl.TEXTURE_2D, textures[t]);
    						gl.uniform1i(fragmentTextureLocation, t);
    					}
    				}
    			} else {
    				if (!!textures[0]) {
    					const fragmentTextureLocation = gl.getUniformLocation(program, "uTexture0");
    					gl.activeTexture(gl.TEXTURE0);
    					gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    					gl.uniform1i(fragmentTextureLocation, 0);
    				}
    			}
    		} else if (material.vertName == "texture-vertex-shader" && material.fragName == "cubemap-fragment-shader") {
    			// console.log(material.vertName, material.fragName);
    			const fragmentTextureLocation = gl.getUniformLocation(program, "uTexture");

    			if (!!textures[0]) {
    				gl.bindTexture(gl.TEXTURE_CUBE_MAP, textures[0]);
    				gl.uniform1i(fragmentTextureLocation, 0);
    			}
    		}
    	};

    	onMount(() => {
    		let frame;
    		console.log(webgl);

    		for (let t = 0; t < 6; ++t) {
    			if (!!textures[t] == false) {
    				// Create a texture and create initial bind
    				textures[t] = webgl.createTexture();

    				webgl.bindTexture(webgl.TEXTURE_2D, textures[t]);
    			} // webgl.bindTexture(webgl.TEXTURE_CUBE_MAP, texture);
    		}

    		const faceInfos = [
    			// {target: webgl.TEXTURE_CUBE_MAP_POSITIVE_X, faceColor: '#F00', textColor: '#0FF', text: '+X'},
    			// {target: webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, faceColor: '#FF0', textColor: '#00F', text: '-X'},
    			// {target: webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, faceColor: '#0F0', textColor: '#F0F', text: '+Y'},
    			// {target: webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, faceColor: '#0FF', textColor: '#F00', text: '-Y'},
    			// {target: webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, faceColor: '#00F', textColor: '#FF0', text: '+Z'},
    			// {target: webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, faceColor: '#F0F', textColor: '#0F0', text: '-Z'}
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#F00",
    				textColor: "#0FF",
    				text: "+X"
    			},
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#FF0",
    				textColor: "#00F",
    				text: "-X"
    			},
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#0F0",
    				textColor: "#F0F",
    				text: "+Y"
    			},
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#0FF",
    				textColor: "#F00",
    				text: "-Y"
    			},
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#00F",
    				textColor: "#FF0",
    				text: "+Z"
    			},
    			{
    				target: webgl.TEXTURE_2D,
    				faceColor: "#F0F",
    				textColor: "#0F0",
    				text: "-Z"
    			}
    		];

    		faceInfos.forEach((faceInfo, i, a) => {
    			const { target, faceColor, textColor, text } = faceInfo;

    			// Asynchronously load an image
    			const img = new Image();

    			img.crossOrigin = "";
    			img.id = "" + (i + 1);

    			// Use 2d face generator to generate 6 images
    			// generateFace(ctx, faceColor, textColor, text);
    			generateFace(ctx, faceColor, 16);

    			// Upload the canvas to the cubemap face.
    			const level = 0;

    			const internalFormat = webgl.RGBA;
    			const format = webgl.RGBA;
    			const type = webgl.UNSIGNED_BYTE;
    			const width = ctx.canvas.width;
    			const height = ctx.canvas.height;
    			const previewWidth = ctx.canvas.width / 4;
    			img.style.margin = "auto";
    			img.style.position = "fixed";
    			img.style.top = "0px";
    			img.style.left = i * previewWidth + "px";
    			img.style.width = previewWidth + "px";

    			img.addEventListener("load", function () {
    				// Now that the image has loaded make copy it to the texture.
    				console.log("Bind to texture");

    				webgl.bindTexture(webgl.TEXTURE_2D, textures[i]);

    				// webgl.bindTexture(webgl.TEXTURE_CUBE_MAP, texture);
    				webgl.pixelStorei(webgl.UNPACK_FLIP_Y_WEBGL, true);

    				webgl.texImage2D(target, level, internalFormat, format, type, img);
    				webgl.generateMipmap(webgl.TEXTURE_2D);

    				// if (i >= 5) webgl.generateMipmap(webgl.TEXTURE_CUBE_MAP);
    				webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.NEAREST_MIPMAP_LINEAR); // webgl.LINEAR_MIPMAP_LINEAR);

    				webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.NEAREST_MIPMAP_LINEAR); // webgl.LINEAR_MIPMAP_LINEAR);
    			}); // webgl.texParameteri(webgl.TEXTURE_CUBE_MAP, webgl.TEXTURE_MIN_FILTER, webgl.NEAREST_MIPMAP_LINEAR); // webgl.LINEAR_MIPMAP_LINEAR);
    			// document.body.appendChild(img);

    			ctx.canvas.toBlob(blob => {
    				img.src = URL.createObjectURL(blob);
    			});

    			// Setup each face so it's immediately renderable
    			if (!!textures[i]) webgl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
    		});

    		const loop = () => {
    			frame = requestAnimationFrame(loop);
    			$$invalidate(4, light.x = 3 * Math.sin(Date.now() * 0.001), light);
    			$$invalidate(4, light.y = 2.5 + 2 * Math.sin(Date.now() * 0.0004), light);
    			$$invalidate(4, light.z = 3 * Math.cos(Date.now() * 0.002), light);
    		};

    		loop();
    		return () => cancelAnimationFrame(frame);
    	});

    	const writable_props = ["title", "color"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<GLSLApp> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("GLSLApp", $$slots, []);

    	function gl_perspectivecamera_location_binding(value) {
    		location = value;
    		$$invalidate(5, location);
    	}

    	function gl_scene_gl_binding(value) {
    		webgl = value;
    		$$invalidate(6, webgl);
    	}

    	function input0_change_input_handler() {
    		w = to_number(this.value);
    		$$invalidate(1, w);
    	}

    	function input1_change_input_handler() {
    		h = to_number(this.value);
    		$$invalidate(2, h);
    	}

    	function input2_change_input_handler() {
    		d = to_number(this.value);
    		$$invalidate(3, d);
    	}

    	$$self.$set = $$props => {
    		if ("title" in $$props) $$invalidate(8, title = $$props.title);
    		if ("color" in $$props) $$invalidate(0, color = $$props.color);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		GL,
    		generateFace,
    		vert: quadVert,
    		frag: quadFrag,
    		title,
    		color,
    		w,
    		h,
    		d,
    		light,
    		location,
    		target,
    		captureViewDirection,
    		adjustColor,
    		webgl,
    		textures,
    		ctx,
    		process_extra_shader_components
    	});

    	$$self.$inject_state = $$props => {
    		if ("title" in $$props) $$invalidate(8, title = $$props.title);
    		if ("color" in $$props) $$invalidate(0, color = $$props.color);
    		if ("w" in $$props) $$invalidate(1, w = $$props.w);
    		if ("h" in $$props) $$invalidate(2, h = $$props.h);
    		if ("d" in $$props) $$invalidate(3, d = $$props.d);
    		if ("location" in $$props) $$invalidate(5, location = $$props.location);
    		if ("target" in $$props) target = $$props.target;
    		if ("webgl" in $$props) $$invalidate(6, webgl = $$props.webgl);
    		if ("textures" in $$props) textures = $$props.textures;
    		if ("process_extra_shader_components" in $$props) $$invalidate(7, process_extra_shader_components = $$props.process_extra_shader_components);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		color,
    		w,
    		h,
    		d,
    		light,
    		location,
    		webgl,
    		process_extra_shader_components,
    		title,
    		textures,
    		ctx,
    		target,
    		captureViewDirection,
    		gl_perspectivecamera_location_binding,
    		gl_scene_gl_binding,
    		input0_change_input_handler,
    		input1_change_input_handler,
    		input2_change_input_handler
    	];
    }

    class GLSLApp extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document_1$1.getElementById("svelte-1yypb9b-style")) add_css$4();
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, { title: 8, color: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "GLSLApp",
    			options,
    			id: create_fragment$e.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[8] === undefined && !("title" in props)) {
    			console_1.warn("<GLSLApp> was created without expected prop 'title'");
    		}
    	}

    	get title() {
    		throw new Error("<GLSLApp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<GLSLApp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<GLSLApp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<GLSLApp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/apps/components/NavigationControls.svelte generated by Svelte v3.19.2 */

    const { console: console_1$1, document: document_1$2 } = globals;
    const file$5 = "src/apps/components/NavigationControls.svelte";

    function add_css$5() {
    	var style = element("style");
    	style.id = "svelte-uyyunl-style";
    	style.textContent = ".controls.svelte-uyyunl label input[type=\"checkbox\"].svelte-uyyunl{float:left;margin-left:32px;margin-right:-48px}.controls.svelte-uyyunl #terrain-navigation-view img.svelte-uyyunl{float:none;margin:2px;width:200px;height:200px}.controls.svelte-uyyunl #terrain-navigation-view.svelte-uyyunl{padding:2px}.controls.svelte-uyyunl #terrain-navigation-cursor.svelte-uyyunl{position:absolute;top:0px;left:0px;margin-top:16px;margin-left:64px;min-width:20px;min-height:20px;border:2px solid}@media screen and (max-width: 480px){.controls.svelte-uyyunl.svelte-uyyunl{margin-top:8px}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbkNvbnRyb2xzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiTmF2aWdhdGlvbkNvbnRyb2xzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7ICBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXG4gICAgZXhwb3J0IGxldCB0aXRsZTtcblxuICAgIGV4cG9ydCBsZXQgY29sb3IgPSAnI0Y3Qzc3Qic7XG5cbiAgICBleHBvcnQgbGV0IGV4dGVudCA9IFtbLTEuMCwgLTEuMF0sIFsxLjAsIDEuMF1dO1xuXG4gICAgZXhwb3J0IGxldCBncm91cHMgPSB7fTtcblxuICAgIGV4cG9ydCBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgZXhwb3J0IGxldCByYW5nZU9wdGlvbnMgPSBbXTtcbiAgICBleHBvcnQgbGV0IHJhbmdlVmFsdWVzID0gW107XG5cbiAgICBleHBvcnQgbGV0IHRpbWVFeHRlbnQgPSBbXTtcblxuICAgIGV4cG9ydCBsZXQgdmlld0xvY2F0aW9uLCB2aWV3VGFyZ2V0O1xuICAgIGV4cG9ydCBsZXQgd29ybGRQb3NpdGlvbiA9IHtcbiAgICAgICAgeDogMC4wLFxuICAgICAgICB5OiAwLjAsXG4gICAgICAgIHo6IDAuMCxcbiAgICAgICAgcjogMS4wXG4gICAgfTtcblxuICAgIGxldCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gICAgbGV0IGZvcm1hdFBsYXlUaW1lID0gKHRpbWUpID0+IFwiXCIgKyAobmV3IERhdGUodGltZSkudG9TdHJpbmcoKSk7XG5cbiAgICBsZXQgbW91c2VfeCA9IDAsIG1vdXNlX3kgPSAwLCBtb3VzZV9kb3duID0gZmFsc2UsIG1vdXNlX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICBsZXQgbmF2Q29udGV4dDtcblxuICAgIGxldCBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl94ID0gMDtcbiAgICBsZXQgcG9zaXRpdmVfZm9yd2FyZF92ZWN0b3JfeiA9IDA7XG5cbiAgICBjb25zdCBuYXZXaWR0aCA9IDIwMCwgbmF2SGVpZ2h0ID0gMjAwO1xuXG4gICAgbGV0IG1hcCA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcC5zcmMgPSBcIi9pbWFnZXMvbWFwLnBuZ1wiO1xuICAgIG1hcC5zdHlsZS53aWR0aCA9IG5hdldpZHRoICsgXCJweFwiO1xuICAgIG1hcC5zdHlsZS5oZWlnaHQgPSBuYXZXaWR0aCArIFwicHhcIjtcblxuICAgIGxldCB0ZXJyYWluV2lkdGggPSBleHRlbnRbMV1bMF0gLSBleHRlbnRbMF1bMF0sXG4gICAgICAgIHRlcnJhaW5EZXB0aCA9IGV4dGVudFsxXVsxXSAtIGV4dGVudCBbMF1bMV07XG5cbiAgICBsZXQgaXNGdWxsc2NyZWVuID0gZmFsc2U7XG5cbiAgICBsZXQgc2luY2VMYXN0TW92ZW1lbnRFdmVudCA9IDA7XG5cbiAgICBsZXQgdG9nZ2xlRnVsbHNjcmVlbiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgbGV0IHJlbmRlclRlcnJhaW5OYXZpZ2F0aW9uQ3Vyc29yID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBmb2N1c1NpemUgPSB3aWR0aCAvICg0ICogd29ybGRQb3NpdGlvbi5yKTsgLy8gMjU2XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgICAgICAgICh3aWR0aCAvIDIgLSBmb2N1c1NpemUgLyAyKSArICh3aWR0aCAqIHdvcmxkUG9zaXRpb24ueCAvIHRlcnJhaW5XaWR0aCksXG4gICAgICAgICAgICAoaGVpZ2h0IC8gMiAtIGZvY3VzU2l6ZSAvIDIpICsgKGhlaWdodCAqIHdvcmxkUG9zaXRpb24ueiAvIHRlcnJhaW5EZXB0aCksXG4gICAgICAgICAgICBmb2N1c1NpemUsXG4gICAgICAgICAgICBmb2N1c1NpemUpXG4gICAgfTtcblxuICAgIGxldCB0cmlnZ2VyTW92ZW1lbnQgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIEdldCByYWRpdXMgb2Ygdmlld2luZyBhbmdsZVxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IDAuNSAvIHdvcmxkUG9zaXRpb24ucjtcbiAgICAgICAgY29uc3QgdnggPSB2aWV3TG9jYXRpb25bMF0gLSB2aWV3VGFyZ2V0WzBdO1xuICAgICAgICBjb25zdCB2eiA9IHZpZXdMb2NhdGlvblsyXSAtIHZpZXdUYXJnZXRbMl07XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnNxcnQoTWF0aC5wb3codngsIDIpICsgTWF0aC5wb3codnosIDIpKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2eCwgdnosIHIsIGRpc3RhbmNlKTtcblxuICAgICAgICBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl94ID0gKHZ4ICogKHIgLSBkaXN0YW5jZSkgLyAocikpIC0gdng7XG4gICAgICAgIHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3ogPSAodnogKiAociAtIGRpc3RhbmNlKSAvIChyKSkgLSB2ejtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl94LCBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl96KTtcblxuICAgICAgICAvLyBBZGp1c3Qgd29ybGRQb3NpdGlvbiBjb29yZHNcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJmb3J3YXJkXCI6XG4gICAgICAgICAgICAgICAgd29ybGRQb3NpdGlvbi54ICs9IHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3g7XG4gICAgICAgICAgICAgICAgd29ybGRQb3NpdGlvbi56ICs9IHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3o7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICB3b3JsZFBvc2l0aW9uLnggLT0gcG9zaXRpdmVfZm9yd2FyZF92ZWN0b3JfeDtcbiAgICAgICAgICAgICAgICB3b3JsZFBvc2l0aW9uLnogLT0gcG9zaXRpdmVfZm9yd2FyZF92ZWN0b3JfejtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIC8vIE5lZWQgYmV0dGVyIG1hdGggZm9yIGxhdGVyYWwgbW92ZW1lbnQuLi5cbiAgICAgICAgICAgIC8vIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAvLyAgICAgaWYgKE1hdGguYWJzKHZ4KSA+IE1hdGguYWJzKHZ6KSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB3b3JsZFBvc2l0aW9uLnggLT0gcG9zaXRpdmVfZm9yd2FyZF92ZWN0b3JfejtcbiAgICAgICAgICAgIC8vICAgICAgICAgd29ybGRQb3NpdGlvbi56IC09IHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3g7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgd29ybGRQb3NpdGlvbi54ICs9IHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3o7XG4gICAgICAgICAgICAvLyAgICAgICAgIHdvcmxkUG9zaXRpb24ueiArPSBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl94O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIGlmIChNYXRoLmFicyh2eCkgPiBNYXRoLmFicyh2eikpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgd29ybGRQb3NpdGlvbi54ICs9IHBvc2l0aXZlX2ZvcndhcmRfdmVjdG9yX3o7XG4gICAgICAgICAgICAvLyAgICAgICAgIHdvcmxkUG9zaXRpb24ueiArPSBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl94O1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHdvcmxkUG9zaXRpb24ueCAtPSBwb3NpdGl2ZV9mb3J3YXJkX3ZlY3Rvcl96O1xuICAgICAgICAgICAgLy8gICAgICAgICB3b3JsZFBvc2l0aW9uLnogLT0gcG9zaXRpdmVfZm9yd2FyZF92ZWN0b3JfeDtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod29ybGRQb3NpdGlvbi54IDwgLXRlcnJhaW5XaWR0aCAqIDAuNDUpIHdvcmxkUG9zaXRpb24ueCA9IC10ZXJyYWluV2lkdGggKiAwLjQ1O1xuICAgICAgICBpZiAodGVycmFpbldpZHRoICogMC40NSA8IHdvcmxkUG9zaXRpb24ueCkgd29ybGRQb3NpdGlvbi54ID0gdGVycmFpbldpZHRoICogMC40NTtcbiAgICAgICAgaWYgKHdvcmxkUG9zaXRpb24ueiA8IC10ZXJyYWluRGVwdGggKiAwLjQ1KSB3b3JsZFBvc2l0aW9uLnogPSAtdGVycmFpbkRlcHRoICogMC40NTtcbiAgICAgICAgaWYgKHRlcnJhaW5EZXB0aCAqIDAuNDUgPCB3b3JsZFBvc2l0aW9uLnopIHdvcmxkUG9zaXRpb24ueiA9IHRlcnJhaW5EZXB0aCAqIDAuNDU7XG5cbiAgICAgICAgLy8gUGFzcyBldmVudCB0byBTdmVsdGVHTCBBcHAgZm9yIHZpZXcgdXBkYXRlXG4gICAgICAgIGRpc3BhdGNoKFwibW92ZVwiKTtcblxuICAgICAgICBpZiAoISFuYXZDb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZW5kZXJUZXJyYWluTmF2aWdhdGlvbkN1cnNvcihuYXZDb250ZXh0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRyeURhdGVUaW1lID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b0RhdGUgPSB2YWx1ZTt0cnkge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+IDE1Nzc4MTAwMDAwMDApXG4gICAgICAgICAgICAgICAgdG9EYXRlID0gbmV3IERhdGUodmFsdWUpLnRvU3RyaW5nKCkubWF0Y2goLyguKykgR01ULylbMV07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICByZXR1cm4gdG9EYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHpvb20gPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB3b3JsZFBvc2l0aW9uLnkgPSB5O1xuICAgICAgICB3b3JsZFBvc2l0aW9uLnIgPSBNYXRoLnBvdygyLCAoLXkgLyA0KSk7XG5cbiAgICAgICAgLy8gUGFzcyBldmVudCB0byBTdmVsdGVHTCBBcHAgZm9yIHZpZXcgdXBkYXRlXG4gICAgICAgIGRpc3BhdGNoKFwibW92ZVwiKTtcblxuICAgICAgICBpZiAoISFuYXZDb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZW5kZXJUZXJyYWluTmF2aWdhdGlvbkN1cnNvcihuYXZDb250ZXh0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHpvb21ZID0gMDtcblxuICAgICQ6IHpvb20oLXpvb21ZKTtcblxuICAgIGxldCB0ZXJyYWluTmF2aWdhdGlvbkN1cnNvciA9IGZ1bmN0aW9uIChjdXJzb3JDYW52YXMsIGdsQ2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGN1cnNvckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdXJzb3JDYW52YXMud2lkdGggPSAxMDI0O1xuICAgICAgICBjdXJzb3JDYW52YXMuaGVpZ2h0ID0gMTAyNDtcbiAgICAgICAgY3Vyc29yQ2FudmFzLnN0eWxlLndpZHRoID0gbmF2V2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN1cnNvckNhbnZhcy5zdHlsZS5oZWlnaHQgPSBuYXZXaWR0aCArIFwicHhcIjtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZjNlMDAnO1xuXG4gICAgICAgIHJlbmRlclRlcnJhaW5OYXZpZ2F0aW9uQ3Vyc29yKGN0eCk7XG5cbiAgICAgICAgbGV0IG1vdXNlX3ggPSAwLCBtb3VzZV95ID0gMCwgbW91c2VfZG93biA9IGZhbHNlLCBtb3VzZV9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRvdWNoSGl0ID0gZnVuY3Rpb24gdG91Y2hIaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRvdWNoZXMpO1xuICAgICAgICAgICAgbW91c2VIaXQoZXZlbnQudG91Y2hlc1swXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbW91c2VIaXQgPSBmdW5jdGlvbiBtb3VzZUhpdChldmVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVfY29ycmVjdCA9IDIuMDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfeCA9IGV2ZW50LmNsaWVudFggLSAoY3Vyc29yQ2FudmFzLm9mZnNldFBhcmVudC5vZmZzZXRMZWZ0ICsgY3Vyc29yQ2FudmFzLm9mZnNldExlZnQpOyAgLy8gLyBwYXJzZUludChjYW52YXMuc3R5bGUud2lkdGguc3Vic3RyaW5nKC0yLDMpKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudF95ID0gZXZlbnQuY2xpZW50WSAtIChjdXJzb3JDYW52YXMub2Zmc2V0UGFyZW50Lm9mZnNldFRvcCArIGN1cnNvckNhbnZhcy5vZmZzZXRUb3ApOyAvLyAvIHBhcnNlSW50KGNhbnZhcy5zdHlsZS5oZWlnaHQuc3Vic3RyaW5nKC0yLDMpKVxuICAgICAgICAgICAgaWYgKCFtb3VzZV9kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhX3ggPSAobW91c2VfZG93bikgPyBjdXJyZW50X3ggLSBtb3VzZV94IDogMC4wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhX3kgPSAobW91c2VfZG93bikgPyBjdXJyZW50X3kgLSBtb3VzZV95IDogMC4wO1xuICAgICAgICAgICAgICAgIC8vIGlmIChtb3VzZV9kb3duKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdtb3VzZSBtb3ZlbWVudCAoJywgZGVsdGFfeCwgJywnLCBkZWx0YV95LCAnKScpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBtb3VzZV94ID0gY3VycmVudF94O1xuICAgICAgICAgICAgICAgIG1vdXNlX3kgPSBjdXJyZW50X3k7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlX2Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgd29ybGRQb3NpdGlvbi54ICs9IHNjYWxlX2NvcnJlY3QgKiAodGVycmFpbldpZHRoIC8gMiAqIGRlbHRhX3ggLyBwYXJzZUludChjdXJzb3JDYW52YXMuc3R5bGUud2lkdGguc3Vic3RyaW5nKC0yLDMpKSk7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkUG9zaXRpb24ueiArPSBzY2FsZV9jb3JyZWN0ICogKHRlcnJhaW5EZXB0aCAvIDIgKiBkZWx0YV95IC8gcGFyc2VJbnQoY3Vyc29yQ2FudmFzLnN0eWxlLmhlaWdodC5zdWJzdHJpbmcoLTIsMykpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGV2ZW50IHRvIFN2ZWx0ZUdMIEFwcCBmb3IgdmlldyB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXCJtb3ZlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRlcnJhaW5OYXZpZ2F0aW9uQ3Vyc29yKGN0eCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgnb250b3VjaG1vdmUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSAge1xuICAgICAgICAgICAgY3Vyc29yQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdXNlX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNb3VzZURvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hIaXQoZSk7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlX2Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnNvckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdXNlX2Rpc2FibGVkICYmIG1vdXNlX2Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hIaXQoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3Vyc29yQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VzZV9kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTW91c2VVcCcpO1xuICAgICAgICAgICAgICAgICAgICBtb3VzZV9kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoIGlzIHByZXNlbnQnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3Vyc29yQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdXNlX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNb3VzZURvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgbW91c2VIaXQoZSk7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlX2Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnNvckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZUhpdCk7XG4gICAgICAgICAgICBjdXJzb3JDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VzZV9kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTW91c2VVcCcpO1xuICAgICAgICAgICAgICAgICAgICBtb3VzZV9kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNpbmNlTGFzdE1vdmVtZW50RXZlbnQgPSAwO1xuXG4gICAgICAgIGdsQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB3aGVlbEV2ZW50ID0gKGV2ZW50IHx8IHdpbmRvd1snZXZlbnQnXSk7XG5cbiAgICAgICAgICAgIGlmICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHNpbmNlTGFzdE1vdmVtZW50RXZlbnQpID4gNjYpIHtcblxuICAgICAgICAgICAgICAgIHNpbmNlTGFzdE1vdmVtZW50RXZlbnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdoZWVsRXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTW92ZW1lbnQoJ2ZvcndhcmQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoZWVsRXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTW92ZW1lbnQoJ2JhY2t3YXJkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGVlbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtiRXZlbnQgPSAoZXZlbnQgfHwgd2luZG93WydldmVudCddKTsgLy8gY3Jvc3MtYnJvd3NlciBzaGVuYW5pZ2Fuc1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2JFdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2JFdmVudFsna2V5Q29kZSddID09PSAzMikgeyAvLyBzcGFjZWJhclxuXG4gICAgICAgICAgICAgICAgICAgIGtiRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2JFdmVudFsna2V5Q29kZSddID09PSAzOCB8fCBrYkV2ZW50WydrZXlDb2RlJ10gPT09IDg3KSB7IC8vIHVwIHx8IFdcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBzaW5jZUxhc3RNb3ZlbWVudEV2ZW50KSA+IDY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5jZUxhc3RNb3ZlbWVudEV2ZW50ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJNb3ZlbWVudCgnZm9yd2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAga2JFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYkV2ZW50WydrZXlDb2RlJ10gPT09IDQwIHx8IGtiRXZlbnRbJ2tleUNvZGUnXSA9PT0gODMpIHsgLy8gZG93biB8fCBTXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gc2luY2VMYXN0TW92ZW1lbnRFdmVudCkgPiA2Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2luY2VMYXN0TW92ZW1lbnRFdmVudCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTW92ZW1lbnQoJ2JhY2t3YXJkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBrYkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtiRXZlbnRbJ2tleUNvZGUnXSA9PT0gMzcgfHwga2JFdmVudFsna2V5Q29kZSddID09PSA2NSkgeyAvLyBsZWZ0IHx8IEFcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBzaW5jZUxhc3RNb3ZlbWVudEV2ZW50KSA+IDY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5jZUxhc3RNb3ZlbWVudEV2ZW50ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJNb3ZlbWVudCgnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAga2JFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYkV2ZW50WydrZXlDb2RlJ10gPT09IDM5IHx8IGtiRXZlbnRbJ2tleUNvZGUnXSA9PT0gNjgpIHsgLy8gcmlnaHQgfHwgRFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHNpbmNlTGFzdE1vdmVtZW50RXZlbnQpID4gNjYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmNlTGFzdE1vdmVtZW50RXZlbnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck1vdmVtZW50KCdyaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAga2JFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYkV2ZW50WydrZXlDb2RlJ10gPT09IDI3KSB7IC8vIEVTQ1xuXG4gICAgICAgICAgICAgICAgICAgIGtiRXZlbnRbJ21pbmltaXplJ10gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oa2JFdmVudCk7IC8vIG1pbmltaXplXG5cbiAgICAgICAgICAgICAgICAgICAga2JFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0tleWJvYXJkIEV2ZW50OiAnLCBrYkV2ZW50WydrZXlDb2RlJ10pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hZ25pZmljYXRpb25cIikuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3Qga2JFdmVudCA9IChldmVudCB8fCB3aW5kb3dbJ2V2ZW50J10pOyAvLyBjcm9zcy1icm93c2VyIHNoZW5hbmlnYW5zXG5cbiAgICAgICAgICAgIGtiRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjdHg7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIFRlcnJhaW4gTmF2aWdhdGlvbiBDb250cm9scy4uLlwiKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYWluIGRpdltyb2xlPVwibWFpblwiXSAuY29udGFpbmVyIGNhbnZhcycpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcblxuICAgICAgICAgICAgaWYgKCEhbmF2Q29udGV4dCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcEN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVycmFpbi1uYXZpZ2F0aW9uLWN1cnNvclwiKTtcbiAgICAgICAgICAgICAgICBuYXZDb250ZXh0ID0gdGVycmFpbk5hdmlnYXRpb25DdXJzb3IobWFwQ3Vyc29yLCBjKTtcblxuICAgICAgICAgICAgICAgIGxldCBpbnRybztcbiAgICAgICAgICAgICAgICBsZXQgc2luY2VMYXN0TW92ZUJhY2sgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoem9vbVkgPiAtMi41KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tWSAtPSAwLjEyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb20oLSh6b29tWS50b0ZpeGVkKDIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBzaW5jZUxhc3RNb3ZlQmFjaykgPiA0NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmNlTGFzdE1vdmVCYWNrID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTW92ZW1lbnQoJ2JhY2t3YXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRybyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb21ZID0gLTIuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb20oLXpvb21ZKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3AsIDUzMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudFsnbWluaW1pemUnXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISFldmVudFsnbWluaW1pemUnXSB8ICEhaXNGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gYy5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFwiZnVsbHNjcmVlblwiLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29udHJvbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udHJvbHNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuY2xhc3NOYW1lID0gY29udHJvbC5jbGFzc05hbWUucmVwbGFjZShcImZ1bGxzY3JlZW5cIiwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRyb2xzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sLmNsYXNzTmFtZSArPSBcIiBmdWxsc2NyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLmNvbnRyb2xzIGg0IHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIGxhYmVsIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gICAgICAgIG1hcmdpbjogMnB4IDEwMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIGxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDhweDtcbiAgICB9XG5cbiAgICAuY29udHJvbHMgbGFiZWwgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzICN0ZXJyYWluLW5hdmlnYXRpb24tdmlldyBpbWcge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICAuY29udHJvbHMgI3RlcnJhaW4tbmF2aWdhdGlvbi12aWV3IHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgIH1cblxuICAgIC5jb250cm9scyAjdGVycmFpbi1uYXZpZ2F0aW9uLWN1cnNvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH08L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY29udHJvbHMgcmlnaHRcIiBzdHlsZT1cInRvcDogLTVlbTtcIj5cbiAgICA8IS0teyNpZiAoISFjb2xvcil9LS0+XG4gICAgPCEtLSAgICA8bGFiZWw+LS0+XG4gICAgPCEtLSAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHN0eWxlPVwiaGVpZ2h0OiA0MHB4XCIgYmluZDp2YWx1ZT17Y29sb3J9Pi0tPlxuICAgIDwhLS0gICAgPC9sYWJlbD4tLT5cbiAgICA8IS0tey9pZn0tLT5cblxuICAgIDxkaXYgaWQ9XCJ0ZXJyYWluLW5hdmlnYXRpb24tdmlld1wiPlxuICAgICAgICA8aW1nIGFsdD1cIk5hdmlnYXRpb24gQ29udHJvbHMgTWFwXCJcbiAgICAgICAgICAgICBzcmM9e21hcC5zcmN9XG4gICAgICAgICAgICAgd2lkdGg9e21hcC5zdHlsZS53aWR0aH1cbiAgICAgICAgICAgICBoZWlnaHQ9e21hcC5zdHlsZS5oZWlnaHR9IC8+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJ0ZXJyYWluLW5hdmlnYXRpb24tY3Vyc29yXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cInttYXAud2lkdGh9XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCJ7bWFwLmhlaWdodH1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiB7Y29sb3J9XCJcbiAgICAgICAgPjwvY2FudmFzPlxuICAgIDwvZGl2PlxuXG4gICAgPGxhYmVsPlxuICAgICAgICA8Yj4tPC9iPjxpbnB1dCBpZD1cIm1hZ25pZmljYXRpb25cIiB0eXBlPVwicmFuZ2VcIiBiaW5kOnZhbHVlPXt6b29tWX0gb246aW5wdXQ9e3pvb21ZfSBtaW49ey00LjB9IG1heD17MC41fSBzdGVwPXswLjF9PjxiPis8L2I+PGJyIC8+XG4gICAgICAgIG1hZ25pZmljYXRpb24oe3pvb21ZfSlcbiAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgeyNpZiAoZ3JvdXBzLmxlbmd0aCA+IDApfVxuICAgICAgICB7I2VhY2ggZ3JvdXBzIGFzIGdyb3VwLCBpfVxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBiaW5kOmNoZWNrZWQ9e2dyb3VwfSBvbjpjbGljaz17KCkgPT4gZGlzcGF0Y2goXCJjbGlja0NoZWNrYm94XCIpfSAvPiBHcm91cCB7aSArIDF9XG4gICAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cblxuICAgIHsjaWYgKG9wdGlvbnNbJ2xhYmVscyddLmxlbmd0aCA+IDAgJiYgb3B0aW9uc1sndmFsdWVzJ10ubGVuZ3RoID4gMCl9XG4gICAgICAgIHsjZWFjaCBvcHRpb25zWyd2YWx1ZXMnXSBhcyBvcHRpb24sIG99XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGJpbmQ6Y2hlY2tlZD17b3B0aW9ufSAvPiB7b3B0aW9uc1snbGFiZWxzJ11bb119XG4gICAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cblxuICAgIHsjaWYgKHJhbmdlT3B0aW9uc1snbGFiZWxzJ10ubGVuZ3RoID4gMCAmJiByYW5nZVZhbHVlcy5sZW5ndGggPiAwKX1cbiAgICAgICAgeyNlYWNoIHJhbmdlVmFsdWVzIGFzIG9wdGlvbiwgb31cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgYmluZDp2YWx1ZT17b3B0aW9ufSBtaW49e3JhbmdlT3B0aW9uc1snbWluJ11bb119IG1heD17cmFuZ2VPcHRpb25zWydtYXgnXVtvXX0gc3RlcD17cmFuZ2VPcHRpb25zWydzdGVwJ11bb119IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAge3JhbmdlT3B0aW9uc1snbGFiZWxzJ11bb119KHt0cnlEYXRlVGltZShvcHRpb24pfSlcbiAgICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuXG4gICAgPGxhYmVsPlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPVwie3RvZ2dsZUZ1bGxzY3JlZW59XCI+eygoaXNGdWxsc2NyZWVuKSA/ICdtaW5pbWl6ZScgOiAnbWF4aW1pemUnKX08L2J1dHRvbj5cbiAgICA8L2xhYmVsPlxuXG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwWUksdUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBQyxDQUFDLEFBQ3BDLEtBQUssQ0FBRSxJQUFJLENBQ1gsV0FBVyxDQUFFLElBQUksQ0FDakIsWUFBWSxDQUFFLEtBQUssQUFDdkIsQ0FBQyxBQU1ELHVCQUFTLENBQUMsd0JBQXdCLENBQUMsR0FBRyxjQUFDLENBQUMsQUFDcEMsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsR0FBRyxDQUNYLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQUFDakIsQ0FBQyxBQUVELHVCQUFTLENBQUMsd0JBQXdCLGNBQUMsQ0FBQyxBQUNoQyxPQUFPLENBQUUsR0FBRyxBQUNoQixDQUFDLEFBRUQsdUJBQVMsQ0FBQywwQkFBMEIsY0FBQyxDQUFDLEFBQ2xDLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxHQUFHLENBQ1IsSUFBSSxDQUFFLEdBQUcsQ0FDVCxVQUFVLENBQUUsSUFBSSxDQUNoQixXQUFXLENBQUUsSUFBSSxDQUNqQixTQUFTLENBQUUsSUFBSSxDQUNmLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxBQUNyQixDQUFDLEFBRUQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQUNsQyxTQUFTLDRCQUFDLENBQUMsQUFDUCxVQUFVLENBQUUsR0FBRyxBQUNuQixDQUFDLEFBQ0wsQ0FBQyJ9 */";
    	append_dev(document_1$2.head, style);
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[38] = list[i];
    	child_ctx[39] = list;
    	child_ctx[40] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[38] = list[i];
    	child_ctx[41] = list;
    	child_ctx[40] = i;
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[42] = list[i];
    	child_ctx[43] = list;
    	child_ctx[44] = i;
    	return child_ctx;
    }

    // (457:4) {#if (groups.length > 0)}
    function create_if_block_2(ctx) {
    	let each_1_anchor;
    	let each_value_2 = /*groups*/ ctx[0];
    	validate_each_argument(each_value_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*groups, dispatch*/ 513) {
    				each_value_2 = /*groups*/ ctx[0];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(457:4) {#if (groups.length > 0)}",
    		ctx
    	});

    	return block;
    }

    // (458:8) {#each groups as group, i}
    function create_each_block_2(ctx) {
    	let label;
    	let input;
    	let t0;
    	let t1_value = /*i*/ ctx[44] + 1 + "";
    	let t1;
    	let t2;
    	let br;
    	let dispose;

    	function input_change_handler() {
    		/*input_change_handler*/ ctx[34].call(input, /*group*/ ctx[42], /*each_value_2*/ ctx[43], /*i*/ ctx[44]);
    	}

    	const block = {
    		c: function create() {
    			label = element("label");
    			input = element("input");
    			t0 = text(" Group ");
    			t1 = text(t1_value);
    			t2 = space();
    			br = element("br");
    			attr_dev(input, "type", "checkbox");
    			attr_dev(input, "class", "svelte-uyyunl");
    			add_location(input, file$5, 459, 16, 15271);
    			add_location(label, file$5, 458, 12, 15247);
    			add_location(br, file$5, 460, 20, 15395);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label, anchor);
    			append_dev(label, input);
    			input.checked = /*group*/ ctx[42];
    			append_dev(label, t0);
    			append_dev(label, t1);
    			append_dev(label, t2);
    			insert_dev(target, br, anchor);

    			dispose = [
    				listen_dev(input, "change", input_change_handler),
    				listen_dev(input, "click", /*click_handler*/ ctx[35], false, false, false)
    			];
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty[0] & /*groups*/ 1) {
    				input.checked = /*group*/ ctx[42];
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label);
    			if (detaching) detach_dev(br);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(458:8) {#each groups as group, i}",
    		ctx
    	});

    	return block;
    }

    // (465:4) {#if (options['labels'].length > 0 && options['values'].length > 0)}
    function create_if_block_1(ctx) {
    	let each_1_anchor;
    	let each_value_1 = /*options*/ ctx[1]["values"];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*options*/ 2) {
    				each_value_1 = /*options*/ ctx[1]["values"];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(465:4) {#if (options['labels'].length > 0 && options['values'].length > 0)}",
    		ctx
    	});

    	return block;
    }

    // (466:8) {#each options['values'] as option, o}
    function create_each_block_1(ctx) {
    	let label;
    	let input;
    	let t0;
    	let t1_value = /*options*/ ctx[1]["labels"][/*o*/ ctx[40]] + "";
    	let t1;
    	let t2;
    	let br;
    	let dispose;

    	function input_change_handler_1() {
    		/*input_change_handler_1*/ ctx[36].call(input, /*option*/ ctx[38], /*each_value_1*/ ctx[41], /*o*/ ctx[40]);
    	}

    	const block = {
    		c: function create() {
    			label = element("label");
    			input = element("input");
    			t0 = space();
    			t1 = text(t1_value);
    			t2 = space();
    			br = element("br");
    			attr_dev(input, "type", "checkbox");
    			attr_dev(input, "class", "svelte-uyyunl");
    			add_location(input, file$5, 467, 16, 15585);
    			add_location(label, file$5, 466, 12, 15561);
    			add_location(br, file$5, 468, 20, 15676);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label, anchor);
    			append_dev(label, input);
    			input.checked = /*option*/ ctx[38];
    			append_dev(label, t0);
    			append_dev(label, t1);
    			append_dev(label, t2);
    			insert_dev(target, br, anchor);
    			dispose = listen_dev(input, "change", input_change_handler_1);
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty[0] & /*options*/ 2) {
    				input.checked = /*option*/ ctx[38];
    			}

    			if (dirty[0] & /*options*/ 2 && t1_value !== (t1_value = /*options*/ ctx[1]["labels"][/*o*/ ctx[40]] + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label);
    			if (detaching) detach_dev(br);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(466:8) {#each options['values'] as option, o}",
    		ctx
    	});

    	return block;
    }

    // (473:4) {#if (rangeOptions['labels'].length > 0 && rangeValues.length > 0)}
    function create_if_block$1(ctx) {
    	let each_1_anchor;
    	let each_value = /*rangeValues*/ ctx[2];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*tryDateTime, rangeValues, rangeOptions*/ 1044) {
    				each_value = /*rangeValues*/ ctx[2];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(473:4) {#if (rangeOptions['labels'].length > 0 && rangeValues.length > 0)}",
    		ctx
    	});

    	return block;
    }

    // (474:8) {#each rangeValues as option, o}
    function create_each_block(ctx) {
    	let label;
    	let input;
    	let input_min_value;
    	let input_max_value;
    	let input_step_value;
    	let br0;
    	let t0;
    	let t1_value = /*rangeOptions*/ ctx[4]["labels"][/*o*/ ctx[40]] + "";
    	let t1;
    	let t2;
    	let t3_value = /*tryDateTime*/ ctx[10](/*option*/ ctx[38]) + "";
    	let t3;
    	let t4;
    	let br1;
    	let dispose;

    	function input_change_input_handler_1() {
    		/*input_change_input_handler_1*/ ctx[37].call(input, /*option*/ ctx[38], /*each_value*/ ctx[39], /*o*/ ctx[40]);
    	}

    	const block = {
    		c: function create() {
    			label = element("label");
    			input = element("input");
    			br0 = element("br");
    			t0 = space();
    			t1 = text(t1_value);
    			t2 = text("(");
    			t3 = text(t3_value);
    			t4 = text(")\n            ");
    			br1 = element("br");
    			attr_dev(input, "type", "range");
    			attr_dev(input, "min", input_min_value = /*rangeOptions*/ ctx[4]["min"][/*o*/ ctx[40]]);
    			attr_dev(input, "max", input_max_value = /*rangeOptions*/ ctx[4]["max"][/*o*/ ctx[40]]);
    			attr_dev(input, "step", input_step_value = /*rangeOptions*/ ctx[4]["step"][/*o*/ ctx[40]]);
    			add_location(input, file$5, 475, 16, 15859);
    			add_location(br0, file$5, 475, 147, 15990);
    			add_location(label, file$5, 474, 12, 15835);
    			add_location(br1, file$5, 477, 20, 16084);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label, anchor);
    			append_dev(label, input);
    			set_input_value(input, /*option*/ ctx[38]);
    			append_dev(label, br0);
    			append_dev(label, t0);
    			append_dev(label, t1);
    			append_dev(label, t2);
    			append_dev(label, t3);
    			append_dev(label, t4);
    			insert_dev(target, br1, anchor);

    			dispose = [
    				listen_dev(input, "change", input_change_input_handler_1),
    				listen_dev(input, "input", input_change_input_handler_1)
    			];
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty[0] & /*rangeOptions*/ 16 && input_min_value !== (input_min_value = /*rangeOptions*/ ctx[4]["min"][/*o*/ ctx[40]])) {
    				attr_dev(input, "min", input_min_value);
    			}

    			if (dirty[0] & /*rangeOptions*/ 16 && input_max_value !== (input_max_value = /*rangeOptions*/ ctx[4]["max"][/*o*/ ctx[40]])) {
    				attr_dev(input, "max", input_max_value);
    			}

    			if (dirty[0] & /*rangeOptions*/ 16 && input_step_value !== (input_step_value = /*rangeOptions*/ ctx[4]["step"][/*o*/ ctx[40]])) {
    				attr_dev(input, "step", input_step_value);
    			}

    			if (dirty[0] & /*rangeValues*/ 4) {
    				set_input_value(input, /*option*/ ctx[38]);
    			}

    			if (dirty[0] & /*rangeOptions*/ 16 && t1_value !== (t1_value = /*rangeOptions*/ ctx[4]["labels"][/*o*/ ctx[40]] + "")) set_data_dev(t1, t1_value);
    			if (dirty[0] & /*rangeValues*/ 4 && t3_value !== (t3_value = /*tryDateTime*/ ctx[10](/*option*/ ctx[38]) + "")) set_data_dev(t3, t3_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label);
    			if (detaching) detach_dev(br1);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(474:8) {#each rangeValues as option, o}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let div1;
    	let div0;
    	let img;
    	let img_src_value;
    	let img_width_value;
    	let img_height_value;
    	let t0;
    	let canvas;
    	let canvas_width_value;
    	let canvas_height_value;
    	let t1;
    	let label0;
    	let b0;
    	let input;
    	let input_min_value;
    	let input_max_value;
    	let input_step_value;
    	let b1;
    	let br0;
    	let t4;
    	let t5;
    	let t6;
    	let br1;
    	let t7;
    	let t8;
    	let t9;
    	let t10;
    	let label1;
    	let button;
    	let t11_value = (/*isFullscreen*/ ctx[6] ? "minimize" : "maximize") + "";
    	let t11;
    	let dispose;
    	let if_block0 = /*groups*/ ctx[0].length > 0 && create_if_block_2(ctx);
    	let if_block1 = /*options*/ ctx[1]["labels"].length > 0 && /*options*/ ctx[1]["values"].length > 0 && create_if_block_1(ctx);
    	let if_block2 = /*rangeOptions*/ ctx[4]["labels"].length > 0 && /*rangeValues*/ ctx[2].length > 0 && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			canvas = element("canvas");
    			t1 = space();
    			label0 = element("label");
    			b0 = element("b");
    			b0.textContent = "-";
    			input = element("input");
    			b1 = element("b");
    			b1.textContent = "+";
    			br0 = element("br");
    			t4 = text("\n        magnification(");
    			t5 = text(/*zoomY*/ ctx[8]);
    			t6 = text(")\n    ");
    			br1 = element("br");
    			t7 = space();
    			if (if_block0) if_block0.c();
    			t8 = space();
    			if (if_block1) if_block1.c();
    			t9 = space();
    			if (if_block2) if_block2.c();
    			t10 = space();
    			label1 = element("label");
    			button = element("button");
    			t11 = text(t11_value);
    			attr_dev(img, "alt", "Navigation Controls Map");
    			if (img.src !== (img_src_value = /*map*/ ctx[5].src)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "width", img_width_value = /*map*/ ctx[5].style.width);
    			attr_dev(img, "height", img_height_value = /*map*/ ctx[5].style.height);
    			attr_dev(img, "class", "svelte-uyyunl");
    			add_location(img, file$5, 440, 8, 14630);
    			attr_dev(canvas, "id", "terrain-navigation-cursor");
    			attr_dev(canvas, "width", canvas_width_value = /*map*/ ctx[5].width);
    			attr_dev(canvas, "height", canvas_height_value = /*map*/ ctx[5].height);
    			set_style(canvas, "border-color", /*color*/ ctx[3]);
    			attr_dev(canvas, "class", "svelte-uyyunl");
    			add_location(canvas, file$5, 444, 8, 14779);
    			attr_dev(div0, "id", "terrain-navigation-view");
    			attr_dev(div0, "class", "svelte-uyyunl");
    			add_location(div0, file$5, 439, 4, 14587);
    			add_location(b0, file$5, 452, 8, 14989);
    			attr_dev(input, "id", "magnification");
    			attr_dev(input, "type", "range");
    			attr_dev(input, "min", input_min_value = -4);
    			attr_dev(input, "max", input_max_value = 0.5);
    			attr_dev(input, "step", input_step_value = 0.1);
    			add_location(input, file$5, 452, 16, 14997);
    			add_location(b1, file$5, 452, 123, 15104);
    			add_location(br0, file$5, 452, 131, 15112);
    			add_location(label0, file$5, 451, 4, 14973);
    			add_location(br1, file$5, 454, 12, 15162);
    			add_location(button, file$5, 482, 8, 16138);
    			add_location(label1, file$5, 481, 4, 16122);
    			attr_dev(div1, "class", "controls right svelte-uyyunl");
    			set_style(div1, "top", "-5em");
    			add_location(div1, file$5, 432, 0, 14363);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, img);
    			append_dev(div0, t0);
    			append_dev(div0, canvas);
    			append_dev(div1, t1);
    			append_dev(div1, label0);
    			append_dev(label0, b0);
    			append_dev(label0, input);
    			set_input_value(input, /*zoomY*/ ctx[8]);
    			append_dev(label0, b1);
    			append_dev(label0, br0);
    			append_dev(label0, t4);
    			append_dev(label0, t5);
    			append_dev(label0, t6);
    			append_dev(div1, br1);
    			append_dev(div1, t7);
    			if (if_block0) if_block0.m(div1, null);
    			append_dev(div1, t8);
    			if (if_block1) if_block1.m(div1, null);
    			append_dev(div1, t9);
    			if (if_block2) if_block2.m(div1, null);
    			append_dev(div1, t10);
    			append_dev(div1, label1);
    			append_dev(label1, button);
    			append_dev(button, t11);

    			dispose = [
    				listen_dev(input, "change", /*input_change_input_handler*/ ctx[33]),
    				listen_dev(input, "input", /*input_change_input_handler*/ ctx[33]),
    				listen_dev(
    					input,
    					"input",
    					function () {
    						if (is_function(/*zoomY*/ ctx[8])) /*zoomY*/ ctx[8].apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				),
    				listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*toggleFullscreen*/ ctx[7])) /*toggleFullscreen*/ ctx[7].apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				)
    			];
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty[0] & /*map*/ 32 && img.src !== (img_src_value = /*map*/ ctx[5].src)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty[0] & /*map*/ 32 && img_width_value !== (img_width_value = /*map*/ ctx[5].style.width)) {
    				attr_dev(img, "width", img_width_value);
    			}

    			if (dirty[0] & /*map*/ 32 && img_height_value !== (img_height_value = /*map*/ ctx[5].style.height)) {
    				attr_dev(img, "height", img_height_value);
    			}

    			if (dirty[0] & /*map*/ 32 && canvas_width_value !== (canvas_width_value = /*map*/ ctx[5].width)) {
    				attr_dev(canvas, "width", canvas_width_value);
    			}

    			if (dirty[0] & /*map*/ 32 && canvas_height_value !== (canvas_height_value = /*map*/ ctx[5].height)) {
    				attr_dev(canvas, "height", canvas_height_value);
    			}

    			if (dirty[0] & /*color*/ 8) {
    				set_style(canvas, "border-color", /*color*/ ctx[3]);
    			}

    			if (dirty[0] & /*zoomY*/ 256) {
    				set_input_value(input, /*zoomY*/ ctx[8]);
    			}

    			if (dirty[0] & /*zoomY*/ 256) set_data_dev(t5, /*zoomY*/ ctx[8]);

    			if (/*groups*/ ctx[0].length > 0) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					if_block0.m(div1, t8);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*options*/ ctx[1]["labels"].length > 0 && /*options*/ ctx[1]["values"].length > 0) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_1(ctx);
    					if_block1.c();
    					if_block1.m(div1, t9);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*rangeOptions*/ ctx[4]["labels"].length > 0 && /*rangeValues*/ ctx[2].length > 0) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block$1(ctx);
    					if_block2.c();
    					if_block2.m(div1, t10);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (dirty[0] & /*isFullscreen*/ 64 && t11_value !== (t11_value = (/*isFullscreen*/ ctx[6] ? "minimize" : "maximize") + "")) set_data_dev(t11, t11_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const navWidth = 200, navHeight = 200;

    function instance$f($$self, $$props, $$invalidate) {
    	let { title } = $$props;
    	let { color = "#F7C77B" } = $$props;
    	let { extent = [[-1, -1], [1, 1]] } = $$props;
    	let { groups = {} } = $$props;
    	let { options = [] } = $$props;
    	let { rangeOptions = [] } = $$props;
    	let { rangeValues = [] } = $$props;
    	let { timeExtent = [] } = $$props;
    	let { viewLocation } = $$props, { viewTarget } = $$props;
    	let { worldPosition = { x: 0, y: 0, z: 0, r: 1 } } = $$props;
    	let dispatch = createEventDispatcher();
    	let formatPlayTime = time => "" + new Date(time).toString();
    	let mouse_x = 0, mouse_y = 0, mouse_down = false, mouse_disabled = false;
    	let navContext;
    	let positive_forward_vector_x = 0;
    	let positive_forward_vector_z = 0;
    	let map = new Image();
    	map.src = "/images/map.png";
    	map.style.width = navWidth + "px";
    	map.style.height = navWidth + "px";

    	let terrainWidth = extent[1][0] - extent[0][0],
    		terrainDepth = extent[1][1] - extent[0][1];

    	let isFullscreen = false;
    	let sinceLastMovementEvent = 0;

    	let toggleFullscreen = function () {
    		
    	};

    	let renderTerrainNavigationCursor = function (ctx) {
    		const width = ctx.canvas.width;
    		const height = ctx.canvas.height;
    		const focusSize = width / (4 * worldPosition.r); // 256
    		ctx.clearRect(0, 0, width, height);
    		ctx.strokeRect(width / 2 - focusSize / 2 + width * worldPosition.x / terrainWidth, height / 2 - focusSize / 2 + height * worldPosition.z / terrainDepth, focusSize, focusSize);
    	};

    	let triggerMovement = function (direction) {
    		// Get radius of viewing angle
    		const distance = 0.5 / worldPosition.r;

    		const vx = viewLocation[0] - viewTarget[0];
    		const vz = viewLocation[2] - viewTarget[2];
    		const r = Math.sqrt(Math.pow(vx, 2) + Math.pow(vz, 2));

    		// console.log(vx, vz, r, distance);
    		positive_forward_vector_x = vx * (r - distance) / r - vx;

    		positive_forward_vector_z = vz * (r - distance) / r - vz;

    		// console.log(positive_forward_vector_x, positive_forward_vector_z);
    		// Adjust worldPosition coords
    		switch (direction) {
    			case "forward":
    				$$invalidate(11, worldPosition.x += positive_forward_vector_x, worldPosition);
    				$$invalidate(11, worldPosition.z += positive_forward_vector_z, worldPosition);
    				break;
    			case "backward":
    				$$invalidate(11, worldPosition.x -= positive_forward_vector_x, worldPosition);
    				$$invalidate(11, worldPosition.z -= positive_forward_vector_z, worldPosition);
    				break;
    		} // // Need better math for lateral movement...

    		// case "left":
    		//     if (Math.abs(vx) > Math.abs(vz)) {
    		//         worldPosition.x -= positive_forward_vector_z;
    		//         worldPosition.z -= positive_forward_vector_x;
    		//     } else {
    		//         worldPosition.x += positive_forward_vector_z;
    		//         worldPosition.z += positive_forward_vector_x;
    		//     }
    		//     break;
    		// case "right":
    		//     if (Math.abs(vx) > Math.abs(vz)) {
    		//         worldPosition.x += positive_forward_vector_z;
    		//         worldPosition.z += positive_forward_vector_x;
    		//     } else {
    		//         worldPosition.x -= positive_forward_vector_z;
    		//         worldPosition.z -= positive_forward_vector_x;
    		//     }
    		//     break;
    		if (worldPosition.x < -terrainWidth * 0.45) $$invalidate(11, worldPosition.x = -terrainWidth * 0.45, worldPosition);

    		if (terrainWidth * 0.45 < worldPosition.x) $$invalidate(11, worldPosition.x = terrainWidth * 0.45, worldPosition);
    		if (worldPosition.z < -terrainDepth * 0.45) $$invalidate(11, worldPosition.z = -terrainDepth * 0.45, worldPosition);
    		if (terrainDepth * 0.45 < worldPosition.z) $$invalidate(11, worldPosition.z = terrainDepth * 0.45, worldPosition);

    		// Pass event to SvelteGL App for view update
    		dispatch("move");

    		if (!!navContext === true) {
    			renderTerrainNavigationCursor(navContext);
    		}
    	};

    	let tryDateTime = function (value) {
    		let toDate = value;

    		try {
    			if (parseInt(value) > 1577810000000) toDate = new Date(value).toString().match(/(.+) GMT/)[1];
    		} finally {
    			return toDate;
    		}
    	};

    	let zoom = function (y) {
    		$$invalidate(11, worldPosition.y = y, worldPosition);
    		$$invalidate(11, worldPosition.r = Math.pow(2, -y / 4), worldPosition);

    		// Pass event to SvelteGL App for view update
    		dispatch("move");

    		if (!!navContext === true) {
    			renderTerrainNavigationCursor(navContext);
    		}
    	};

    	let zoomY = 0;

    	let terrainNavigationCursor = function (cursorCanvas, glCanvas) {
    		const ctx = cursorCanvas.getContext("2d");
    		cursorCanvas.width = 1024;
    		cursorCanvas.height = 1024;
    		cursorCanvas.style.width = navWidth + "px";
    		cursorCanvas.style.height = navWidth + "px";
    		ctx.lineWidth = 8;
    		ctx.strokeStyle = "#ff3e00";
    		renderTerrainNavigationCursor(ctx);
    		let mouse_x = 0, mouse_y = 0, mouse_down = false;

    		const touchHit = function touchHit(event) {
    			// console.log(event.touches);
    			mouseHit(event.touches[0]);
    		};

    		const mouseHit = function mouseHit(event) {
    			const scale_correct = 2;
    			const current_x = event.clientX - (cursorCanvas.offsetParent.offsetLeft + cursorCanvas.offsetLeft); // / parseInt(canvas.style.width.substring(-2,3))
    			const current_y = event.clientY - (cursorCanvas.offsetParent.offsetTop + cursorCanvas.offsetTop); // / parseInt(canvas.style.height.substring(-2,3))

    			{
    				const delta_x = mouse_down ? current_x - mouse_x : 0;
    				const delta_y = mouse_down ? current_y - mouse_y : 0;

    				// if (mouse_down) {
    				//     console.log('mouse movement (', delta_x, ',', delta_y, ')');
    				// }
    				mouse_x = current_x;

    				mouse_y = current_y;

    				if (mouse_down) {
    					$$invalidate(11, worldPosition.x += scale_correct * (terrainWidth / 2 * delta_x / parseInt(cursorCanvas.style.width.substring(-2, 3))), worldPosition);
    					$$invalidate(11, worldPosition.z += scale_correct * (terrainDepth / 2 * delta_y / parseInt(cursorCanvas.style.height.substring(-2, 3))), worldPosition);

    					// Pass event to SvelteGL App for view update
    					dispatch("move");

    					renderTerrainNavigationCursor(ctx);
    				}
    			}
    		};

    		if ("ontouchmove" in document.createElement("div")) {
    			cursorCanvas.addEventListener("touchstart", function (e) {
    				{
    					// console.log('MouseDown');
    					touchHit(e);

    					mouse_down = true;
    				}

    				e.preventDefault();
    			});

    			cursorCanvas.addEventListener("touchmove", function (e) {
    				if ( mouse_down) {
    					touchHit(e);
    				}

    				e.preventDefault();
    			});

    			cursorCanvas.addEventListener("touchend", function (e) {
    				{
    					// console.log('MouseUp');
    					mouse_down = false;
    				}

    				e.preventDefault();
    			});

    			console.log("touch is present");
    		} else {
    			cursorCanvas.addEventListener("mousedown", function (e) {
    				{
    					// console.log('MouseDown');
    					mouseHit(e);

    					mouse_down = true;
    				}

    				e.preventDefault();
    			});

    			cursorCanvas.addEventListener("mousemove", mouseHit);

    			cursorCanvas.addEventListener("mouseup", function (e) {
    				{
    					// console.log('MouseUp');
    					mouse_down = false;
    				}

    				e.preventDefault();
    			});
    		}

    		let sinceLastMovementEvent = 0;

    		glCanvas.addEventListener("wheel", function (event) {
    			const wheelEvent = event || window["event"];

    			if (new Date().getTime() - sinceLastMovementEvent > 66) {
    				sinceLastMovementEvent = new Date().getTime();

    				if (wheelEvent.deltaY < 0) {
    					triggerMovement("forward");
    				} else if (wheelEvent.deltaY > 0) {
    					triggerMovement("backward");
    				}
    			}

    			wheelEvent.preventDefault();
    		});

    		document.addEventListener("keydown", function (event) {
    			const kbEvent = event || window["event"]; // cross-browser shenanigans
    			console.log(kbEvent);

    			if (kbEvent["keyCode"] === 32) {
    				// spacebar
    				kbEvent.preventDefault();
    			} else if (kbEvent["keyCode"] === 38 || kbEvent["keyCode"] === 87) {
    				// up || W
    				if (new Date().getTime() - sinceLastMovementEvent > 66) {
    					sinceLastMovementEvent = new Date().getTime();
    					triggerMovement("forward");
    				}

    				kbEvent.preventDefault();
    			} else if (kbEvent["keyCode"] === 40 || kbEvent["keyCode"] === 83) {
    				// down || S
    				if (new Date().getTime() - sinceLastMovementEvent > 66) {
    					sinceLastMovementEvent = new Date().getTime();
    					triggerMovement("backward");
    				}

    				kbEvent.preventDefault();
    				return true;
    			} else if (kbEvent["keyCode"] === 37 || kbEvent["keyCode"] === 65) {
    				// left || A
    				if (new Date().getTime() - sinceLastMovementEvent > 66) {
    					sinceLastMovementEvent = new Date().getTime();
    					triggerMovement("left");
    				}

    				kbEvent.preventDefault();
    			} else if (kbEvent["keyCode"] === 39 || kbEvent["keyCode"] === 68) {
    				// right || D
    				if (new Date().getTime() - sinceLastMovementEvent > 66) {
    					sinceLastMovementEvent = new Date().getTime();
    					triggerMovement("right");
    				}

    				kbEvent.preventDefault();
    			} else if (kbEvent["keyCode"] === 27) {
    				// ESC
    				kbEvent["minimize"] = true;

    				toggleFullscreen(kbEvent); // minimize
    				kbEvent.preventDefault();
    			} else {
    				console.log("Keyboard Event: ", kbEvent["keyCode"]);
    			}

    			return true;
    		});

    		document.getElementById("magnification").addEventListener("keydown", function (event) {
    			const kbEvent = event || window["event"]; // cross-browser shenanigans
    			kbEvent.preventDefault();
    			return true;
    		});

    		return ctx;
    	};

    	const init = function () {
    		console.log("Initializing Terrain Navigation Controls...");

    		document.querySelectorAll("main div[role=\"main\"] .container canvas").forEach(c => {
    			console.log(c);

    			if (!!navContext !== true) {
    				const mapCursor = document.getElementById("terrain-navigation-cursor");
    				navContext = terrainNavigationCursor(mapCursor, c);
    				let intro;
    				let sinceLastMoveBack = new Date().getTime();

    				const loop = () => {
    					if (zoomY > -2.5) {
    						$$invalidate(8, zoomY -= 0.125);
    						zoom(-zoomY.toFixed(2));

    						if (new Date().getTime() - sinceLastMoveBack > 45) {
    							sinceLastMoveBack = new Date().getTime();
    							triggerMovement("backward");
    						}

    						intro = requestAnimationFrame(loop);
    					} else {
    						$$invalidate(8, zoomY = -2.5);
    						zoom(-zoomY);
    					}
    				};

    				setTimeout(loop, 533);
    			}

    			$$invalidate(7, toggleFullscreen = event => {
    				console.log(event["minimize"]);

    				if (!!event["minimize"] | !!isFullscreen) {
    					$$invalidate(6, isFullscreen = false);
    					c.parentElement.className = c.parentElement.className.replace("fullscreen", "");

    					for (const control of document.getElementsByClassName("controls")) {
    						control.className = control.className.replace("fullscreen", "");
    					}
    				} else {
    					$$invalidate(6, isFullscreen = true);
    					c.parentElement.className += " fullscreen";

    					for (const control of document.getElementsByClassName("controls")) {
    						control.className += " fullscreen";
    					}
    				}
    			});
    		});
    	};

    	const writable_props = [
    		"title",
    		"color",
    		"extent",
    		"groups",
    		"options",
    		"rangeOptions",
    		"rangeValues",
    		"timeExtent",
    		"viewLocation",
    		"viewTarget",
    		"worldPosition"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<NavigationControls> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("NavigationControls", $$slots, []);

    	function input_change_input_handler() {
    		zoomY = to_number(this.value);
    		$$invalidate(8, zoomY);
    	}

    	function input_change_handler(group, each_value_2, i) {
    		each_value_2[i] = this.checked;
    		$$invalidate(0, groups);
    	}

    	const click_handler = () => dispatch("clickCheckbox");

    	function input_change_handler_1(option, each_value_1, o) {
    		each_value_1[o] = this.checked;
    		$$invalidate(1, options);
    	}

    	function input_change_input_handler_1(option, each_value, o) {
    		each_value[o] = to_number(this.value);
    		$$invalidate(2, rangeValues);
    	}

    	$$self.$set = $$props => {
    		if ("title" in $$props) $$invalidate(12, title = $$props.title);
    		if ("color" in $$props) $$invalidate(3, color = $$props.color);
    		if ("extent" in $$props) $$invalidate(13, extent = $$props.extent);
    		if ("groups" in $$props) $$invalidate(0, groups = $$props.groups);
    		if ("options" in $$props) $$invalidate(1, options = $$props.options);
    		if ("rangeOptions" in $$props) $$invalidate(4, rangeOptions = $$props.rangeOptions);
    		if ("rangeValues" in $$props) $$invalidate(2, rangeValues = $$props.rangeValues);
    		if ("timeExtent" in $$props) $$invalidate(14, timeExtent = $$props.timeExtent);
    		if ("viewLocation" in $$props) $$invalidate(15, viewLocation = $$props.viewLocation);
    		if ("viewTarget" in $$props) $$invalidate(16, viewTarget = $$props.viewTarget);
    		if ("worldPosition" in $$props) $$invalidate(11, worldPosition = $$props.worldPosition);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		title,
    		color,
    		extent,
    		groups,
    		options,
    		rangeOptions,
    		rangeValues,
    		timeExtent,
    		viewLocation,
    		viewTarget,
    		worldPosition,
    		dispatch,
    		formatPlayTime,
    		mouse_x,
    		mouse_y,
    		mouse_down,
    		mouse_disabled,
    		navContext,
    		positive_forward_vector_x,
    		positive_forward_vector_z,
    		navWidth,
    		navHeight,
    		map,
    		terrainWidth,
    		terrainDepth,
    		isFullscreen,
    		sinceLastMovementEvent,
    		toggleFullscreen,
    		renderTerrainNavigationCursor,
    		triggerMovement,
    		tryDateTime,
    		zoom,
    		zoomY,
    		terrainNavigationCursor,
    		init
    	});

    	$$self.$inject_state = $$props => {
    		if ("title" in $$props) $$invalidate(12, title = $$props.title);
    		if ("color" in $$props) $$invalidate(3, color = $$props.color);
    		if ("extent" in $$props) $$invalidate(13, extent = $$props.extent);
    		if ("groups" in $$props) $$invalidate(0, groups = $$props.groups);
    		if ("options" in $$props) $$invalidate(1, options = $$props.options);
    		if ("rangeOptions" in $$props) $$invalidate(4, rangeOptions = $$props.rangeOptions);
    		if ("rangeValues" in $$props) $$invalidate(2, rangeValues = $$props.rangeValues);
    		if ("timeExtent" in $$props) $$invalidate(14, timeExtent = $$props.timeExtent);
    		if ("viewLocation" in $$props) $$invalidate(15, viewLocation = $$props.viewLocation);
    		if ("viewTarget" in $$props) $$invalidate(16, viewTarget = $$props.viewTarget);
    		if ("worldPosition" in $$props) $$invalidate(11, worldPosition = $$props.worldPosition);
    		if ("dispatch" in $$props) $$invalidate(9, dispatch = $$props.dispatch);
    		if ("formatPlayTime" in $$props) formatPlayTime = $$props.formatPlayTime;
    		if ("mouse_x" in $$props) mouse_x = $$props.mouse_x;
    		if ("mouse_y" in $$props) mouse_y = $$props.mouse_y;
    		if ("mouse_down" in $$props) mouse_down = $$props.mouse_down;
    		if ("mouse_disabled" in $$props) mouse_disabled = $$props.mouse_disabled;
    		if ("navContext" in $$props) navContext = $$props.navContext;
    		if ("positive_forward_vector_x" in $$props) positive_forward_vector_x = $$props.positive_forward_vector_x;
    		if ("positive_forward_vector_z" in $$props) positive_forward_vector_z = $$props.positive_forward_vector_z;
    		if ("map" in $$props) $$invalidate(5, map = $$props.map);
    		if ("terrainWidth" in $$props) terrainWidth = $$props.terrainWidth;
    		if ("terrainDepth" in $$props) terrainDepth = $$props.terrainDepth;
    		if ("isFullscreen" in $$props) $$invalidate(6, isFullscreen = $$props.isFullscreen);
    		if ("sinceLastMovementEvent" in $$props) sinceLastMovementEvent = $$props.sinceLastMovementEvent;
    		if ("toggleFullscreen" in $$props) $$invalidate(7, toggleFullscreen = $$props.toggleFullscreen);
    		if ("renderTerrainNavigationCursor" in $$props) renderTerrainNavigationCursor = $$props.renderTerrainNavigationCursor;
    		if ("triggerMovement" in $$props) triggerMovement = $$props.triggerMovement;
    		if ("tryDateTime" in $$props) $$invalidate(10, tryDateTime = $$props.tryDateTime);
    		if ("zoom" in $$props) $$invalidate(31, zoom = $$props.zoom);
    		if ("zoomY" in $$props) $$invalidate(8, zoomY = $$props.zoomY);
    		if ("terrainNavigationCursor" in $$props) terrainNavigationCursor = $$props.terrainNavigationCursor;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*zoomY*/ 256) {
    			 zoom(-zoomY);
    		}
    	};

    	return [
    		groups,
    		options,
    		rangeValues,
    		color,
    		rangeOptions,
    		map,
    		isFullscreen,
    		toggleFullscreen,
    		zoomY,
    		dispatch,
    		tryDateTime,
    		worldPosition,
    		title,
    		extent,
    		timeExtent,
    		viewLocation,
    		viewTarget,
    		init,
    		navContext,
    		positive_forward_vector_x,
    		positive_forward_vector_z,
    		formatPlayTime,
    		mouse_x,
    		mouse_y,
    		mouse_down,
    		mouse_disabled,
    		terrainWidth,
    		terrainDepth,
    		sinceLastMovementEvent,
    		renderTerrainNavigationCursor,
    		triggerMovement,
    		zoom,
    		terrainNavigationCursor,
    		input_change_input_handler,
    		input_change_handler,
    		click_handler,
    		input_change_handler_1,
    		input_change_input_handler_1
    	];
    }

    class NavigationControls extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document_1$2.getElementById("svelte-uyyunl-style")) add_css$5();

    		init(
    			this,
    			options,
    			instance$f,
    			create_fragment$f,
    			safe_not_equal,
    			{
    				title: 12,
    				color: 3,
    				extent: 13,
    				groups: 0,
    				options: 1,
    				rangeOptions: 4,
    				rangeValues: 2,
    				timeExtent: 14,
    				viewLocation: 15,
    				viewTarget: 16,
    				worldPosition: 11,
    				init: 17
    			},
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "NavigationControls",
    			options,
    			id: create_fragment$f.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[12] === undefined && !("title" in props)) {
    			console_1$1.warn("<NavigationControls> was created without expected prop 'title'");
    		}

    		if (/*viewLocation*/ ctx[15] === undefined && !("viewLocation" in props)) {
    			console_1$1.warn("<NavigationControls> was created without expected prop 'viewLocation'");
    		}

    		if (/*viewTarget*/ ctx[16] === undefined && !("viewTarget" in props)) {
    			console_1$1.warn("<NavigationControls> was created without expected prop 'viewTarget'");
    		}
    	}

    	get title() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extent() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extent(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get groups() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set groups(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get options() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set options(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get rangeOptions() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set rangeOptions(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get rangeValues() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set rangeValues(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get timeExtent() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set timeExtent(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewLocation() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set viewLocation(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewTarget() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set viewTarget(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get worldPosition() {
    		throw new Error("<NavigationControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set worldPosition(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get init() {
    		return this.$$.ctx[17];
    	}

    	set init(value) {
    		throw new Error("<NavigationControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function generateFace$1 (ctx, gridColor, gridSpacing) {
      ctx.strokeStyle = gridColor;
      var w = ctx.canvas.width,
          h = ctx.canvas.height;
      ctx.beginPath();

      for (var x = gridSpacing / 2; x <= w; x += gridSpacing) {
        ctx.save();
        ctx.translate(0.5, 0);
        ctx.moveTo(x - 0.5, 0); // 0.5 offset so that 1px lines are crisp

        ctx.lineTo(x - 0.5, h);
        ctx.restore();
      }

      for (var y = gridSpacing / 2; y <= h; y += gridSpacing) {
        ctx.save();
        ctx.translate(0, 0.5);
        ctx.moveTo(0, y - 0.5);
        ctx.lineTo(w, y - 0.5);
        ctx.restore();
      }

      ctx.stroke();
    }

    var QuadStore = /*#__PURE__*/function () {
      function QuadStore() {
        var capacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var extent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[-1.0, -1.0], [1, 1]];
        var routeMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (extent) {
          var parentWidth = extent[1][0] - extent[0][0],
              parentHeight = extent[1][1] - extent[0][1];
          var quadWidth = parentWidth / 2,
              quadHeight = parentHeight / 2,
              quad_extents = {
            1: {
              1: [[extent[0][0], extent[0][1]], [extent[0][0] + quadWidth, extent[0][1] + quadHeight]],
              2: [[extent[0][0], extent[1][1] - quadHeight], [extent[1][0] - quadWidth, extent[1][1]]]
            },
            2: {
              1: [[extent[0][0] + quadWidth, extent[0][1]], [extent[1][0], extent[0][1] + quadHeight]],
              2: [[extent[1][0] - quadWidth, extent[1][1] - quadHeight], [extent[1][0], extent[1][1]]]
            }
          }; // console.log({
          //     1: [
          //         [ extent[0][0], extent[0][1] ],
          //         [ extent[0][0] + quadWidth, extent[0][1] + quadHeight ]
          //     ],
          //     2: [
          //         [ extent[0][0], extent[1][1] - quadHeight ],
          //         [ extent[1][0] - quadWidth, extent[1][1] ]
          //     ]
          // },{
          //     1: [
          //         [ extent[0][0] + quadWidth, extent[0][1] ],
          //         [ extent[1][0], extent[0][1] + quadHeight ]
          //     ],
          //     2: [
          //         [ extent[1][0] - quadWidth, extent[1][1] - quadHeight ],
          //         [ extent[1][0], extent[1][1] ]
          //     ]
          // });

          return function (obj) {
            var x = obj["x"],
                y = obj["y"]; // console.log(x, y);

            if (x < quad_extents[1][1][1][0]) {
              if (y < quad_extents[1][1][1][1]) {
                // console.log("... maps into extent :", quad_extents[1][1]);
                return [1, 1];
              } else {
                // console.log("... maps into extent:", quad_extents[1][2]);
                return [1, 2];
              }
            } else {
              if (y < quad_extents[2][2][0][1]) {
                // console.log("... maps into extent :", quad_extents[2][1]);
                return [2, 1];
              } else {
                // console.log("... maps into extent :", quad_extents[2][2]);
                return [2, 2];
              }
            }
          };
        };
        var store = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, QuadStore);

        this.capacity = capacity < 4 ? 4 : capacity; // min capacity is 4 objects

        this.extent = extent;
        this.last = Array.isArray(store) ? store[store.length - 1] : store;
        this.routeMethod = routeMethod;
        this.store = store || [];
      }

      _createClass(QuadStore, [{
        key: "get",
        value: function get(level, x, y) {
          if (level > 0) {
            if (level === 1 && x in this.store && y in this.store[x]) {
              return this.store[x][y].get();
            } else if (level > 1) {
              var _this$relativeCoords = this.relativeCoords(level, x, y),
                  _this$relativeCoords2 = _slicedToArray(_this$relativeCoords, 2),
                  nx = _this$relativeCoords2[0],
                  ny = _this$relativeCoords2[1];

              if (Array.isArray(this.store[nx][ny].store)) {
                return this.store[nx][ny].store;
              } else {
                return this.store[nx][ny].get(level - 1, x, y);
              }
            } else if (Array.isArray(this.store)) {
              return this.store;
            } else return this.store;
          } else if (Array.isArray(this.store)) {
            return this.store;
          } else {
            return this.store;
          }
        }
      }, {
        key: "absoluteCoords",
        value: function absoluteCoords(source_level, xs, ys, target_level, xr, yr) {
          var x0 = Math.pow(2, target_level) / Math.pow(2, source_level) * xs,
              // * Math.pow(2, target_level - 3)), //  * xs
          y0 = Math.pow(2, target_level) / Math.pow(2, source_level) * ys; // * Math.pow(2, target_level - 3)); // Math.pow(2, target_level) / Math.pow(2, source_level) * ys

          var x1 = xr === 2 ? x0 : x0 - 1,
              y1 = yr === 2 ? y0 : y0 - 1;
          return [target_level, x1, y1];
        }
      }, {
        key: "relativeCoords",
        value: function relativeCoords(level, x1, y1) {
          var x0 = Math.round(x1 / 2);
          var y0 = Math.round(y1 / 2);
          var xr = x1 % 2;
          var yr = y1 % 2;

          if (level - 1 > 0) {
            var _this$relativeCoords3 = this.relativeCoords(level - 1, x0, y0),
                _this$relativeCoords4 = _slicedToArray(_this$relativeCoords3, 2),
                _x = _this$relativeCoords4[0],
                _y = _this$relativeCoords4[1];

            return [_x, _y];
          } else {
            var _x2 = xr == 0 ? 2 : 1;

            var _y2 = yr == 0 ? 2 : 1;

            return [_x2, _y2];
          }
        }
      }, {
        key: "peek",
        value: function peek() {
          if (Array.isArray(this.store)) {
            return this.store.length;
          } else {
            var children = {
              1: {
                1: this.store[1][1].peek(),
                2: this.store[1][2].peek()
              },
              2: {
                1: this.store[2][1].peek(),
                2: this.store[2][2].peek()
              }
            };

            for (var i = 1; i <= 2; ++i) {
              for (var j = 1; j <= 2; ++j) {
                if (children[i][j] >= 0) {
                  children[i][j] = children[i][j];
                } else {
                  var desc_total = 0;

                  for (var s = 1; s <= 2; ++s) {
                    for (var t = 1; t <= 2; ++t) {
                      desc_total += parseInt(children[i][j][s][t]);
                    }
                  }

                  children[i][j] = desc_total;
                }
              }
            }

            return children;
          }
        }
      }, {
        key: "push",
        value: function push(obj) {
          var _this = this;

          if (typeof obj !== 'object') return;

          if (Array.isArray(this.store) && this.store.length < this.capacity - 1) {
            this.store.push(obj);
          } else if (Array.isArray(this.store)) {
            // Which subdivision do we this obj to?
            // selector parses the obj and returns coords
            var new_store = [].concat(this.store);
            new_store.push(obj);
            var store_map = new_store.map(function (stored_obj) {
              return _this.route(stored_obj);
            });
            this.store = this.subdivide(this.extent);
            store_map.forEach(function (v, i, a) {
              var _v = _slicedToArray(v, 2),
                  x1 = _v[0],
                  y1 = _v[1]; // console.log("Push to quad subdivision ", x1, y1);


              _this.store[x1][y1].push(new_store[i]);
            });
          } else {
            var _this$route = this.route(obj),
                _this$route2 = _slicedToArray(_this$route, 2),
                x1 = _this$route2[0],
                y1 = _this$route2[1]; // console.log("Push to quad subdivision ", x1, y1);


            if (x1 < 1 || x1 > 2 || y1 < 1 || y1 > 2) {
              throw new Error("Bad subdivision coords from route ", x1, y1, x2, y2);
            } else {
              if (x1 in this.store && y1 in this.store[x1]) {
                if (typeof this.store[x1][y1].push === 'function') {
                  this.store[x1][y1].push(obj);
                } else {
                  console.error(x1, y1, this.store[x1][y1]);
                }
              } else {
                // 4 new quad stores
                this.store = this.subdivide(this.extent);
                this.store[x1][y1].push(obj);
              }
            }
          } // keep ref to last obj in


          this.last = obj;
        }
      }, {
        key: "pop",
        value: function pop() {
          return Object.assign({}, this.last);
        }
      }, {
        key: "route",
        value: function route(obj) {
          return this.routeMethod(this.extent)(obj);
        }
      }, {
        key: "subdivide",
        value: function subdivide(extent) {
          var parentWidth = extent[1][0] - extent[0][0],
              parentHeight = extent[1][1] - extent[0][1];
          var quadWidth = parentWidth / 2,
              quadHeight = parentHeight / 2,
              quadExtents = {
            1: {
              1: [[extent[0][0], extent[0][1]], [extent[0][0] + quadWidth, extent[0][1] + quadHeight]],
              2: [[extent[0][0], extent[1][1] - quadHeight], [extent[1][0] - quadWidth, extent[1][1]]]
            },
            2: {
              1: [[extent[0][0] + quadWidth, extent[0][1]], [extent[1][0], extent[0][1] + quadHeight]],
              2: [[extent[1][0] - quadWidth, extent[1][1] - quadHeight], [extent[1][0], extent[1][1]]]
            }
          };
          return {
            1: {
              1: new QuadStore(this.capacity, quadExtents[1][1], this.routeMethod),
              2: new QuadStore(this.capacity, quadExtents[1][2], this.routeMethod)
            },
            2: {
              1: new QuadStore(this.capacity, quadExtents[2][1], this.routeMethod),
              2: new QuadStore(this.capacity, quadExtents[2][2], this.routeMethod)
            }
          };
        }
      }]);

      return QuadStore;
    }(); // // test


    var terrainFrag = "\nuniform vec3 color;\nuniform vec3 emissive;\nuniform float alpha;\nuniform float specularity;\nuniform sampler2D bumpmap;\nuniform sampler2D colormap;\nuniform sampler2D emissivemap;\nuniform sampler2D specularitymap;\nuniform vec3 FOG_COLOR;\nuniform float FOG_DENSITY;\n#define NAME terrain-frag\n#define C_ZERO 0.0\n#define C_QUARTER 0.25\n#define C_HALF 0.5\n#define C_ONE 1.0\nin vec3 v_directional_light_shading;\nin vec3 v_normal;\nin vec2 v_textureCoords;\nout mediump vec4 fragColor;\nvoid main () {\n    fragColor = vec4(v_directional_light_shading * color, C_ONE);\n    #if defined(has_colormap)\n    fragColor = vec4(v_directional_light_shading * texture(colormap, v_textureCoords).rgb, C_ONE);\n    #endif\n    if (alpha == C_ZERO || (C_ZERO <= alpha && alpha <= C_ONE)) {\n        fragColor.a *= alpha;\n    }\n}\n";

    var terrainVert = "\n#define NAME terrain-vert\n#define C_ZERO 0.0\n#define C_QUARTER 0.25\n#define C_HALF 0.5\n#define C_ONE 1.0\n#define DISPLACE_MULTIPLY 0.5\nuniform sampler2D normalmap;\nuniform float height_adjustment;\nin vec3 position;\nin vec3 normal;\nin vec2 uv;\nout vec3 v_normal;\nout vec2 v_textureCoords;\nuniform vec3 light_direction;uniform vec3 light_ambient_color;\nuniform vec3 light_diffuse_color;\nuniform vec3 light_specular_color;\nuniform float material_specular_exponent;\nout vec3 v_directional_light_shading;\nvec3 directional_light_shading (vec3 normal) {\n\tvec3 computed_shade = vec3(C_ZERO, C_ZERO, C_ZERO);\n\tvec3 halfplane_vector = vec3(C_ZERO, C_ONE, C_ZERO);\n\tvec3 nlight_direction = normalize(light_direction);\tvec3 nlight_halfplane = normalize(nlight_direction + halfplane_vector);\tfloat ndotL;\tfloat ndotH;\n\tndotL = max(C_ZERO, dot(normal, nlight_direction));\n\tcomputed_shade += vec3(\n\t\t(light_ambient_color.x * (C_ONE - C_QUARTER)), (light_ambient_color.y * (C_ONE - C_QUARTER)), (light_ambient_color.z * (C_ONE - C_QUARTER))\n\t) + vec3(C_QUARTER, C_QUARTER, C_QUARTER);\n\tcomputed_shade += ndotL * light_diffuse_color * vec3(C_ONE, C_ONE, C_ONE);\n\tndotH = max(C_ZERO, dot(normal, nlight_halfplane));\n\tif (ndotH > C_ZERO) {\n\t\tcomputed_shade += pow(ndotH, material_specular_exponent) * vec3(C_ONE, C_ONE, C_ONE) * light_specular_color;\n\t}\n\treturn computed_shade;\n}\nvoid main() {\n\tvec3 displacement = texture(normalmap, uv).rgb;\n\tvec3 displace_along_verticle = normal * displacement * (DISPLACE_MULTIPLY * height_adjustment);\n\tvec3 displaced_position = position + displace_along_verticle;\n\tvec3 displace_along_normal = vec3(normal * displacement);\n\tv_normal = DISPLACE_MULTIPLY * normal;\n\t#if defined(has_normalmap)\n\tv_normal = DISPLACE_MULTIPLY * displace_along_normal;\n\t#endif\n\tv_textureCoords = uv;\n\tv_directional_light_shading = directional_light_shading((MODEL_INVERSE_TRANSPOSE * vec4(v_normal, C_ZERO)).xyz);\n\tgl_Position = PROJECTION * VIEW * MODEL * vec4(displaced_position, C_ONE);\n}\n";

    /* src/apps/SimulationApp.svelte generated by Svelte v3.19.2 */

    const { console: console_1$2 } = globals;

    function get_each_context_1$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[57] = list[i];
    	child_ctx[61] = i;
    	return child_ctx;
    }

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[57] = list[i];
    	child_ctx[59] = i;
    	return child_ctx;
    }

    // (511:4) <GL.OrbitControls maxPolarAngle={Math.PI / 2} {location} {target}>
    function create_default_slot_3(ctx) {
    	let t0_value = /*captureViewDirection*/ ctx[23](/*location*/ ctx[14], /*target*/ ctx[15]) + "";
    	let t0;
    	let t1;
    	let current;

    	const gl_perspectivecamera = new PerspectiveCamera({
    			props: {
    				location: /*location*/ ctx[14],
    				lookAt: "center",
    				near: 0.01,
    				far: 1000
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = space();
    			create_component(gl_perspectivecamera.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(gl_perspectivecamera, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty[0] & /*location, target*/ 49152) && t0_value !== (t0_value = /*captureViewDirection*/ ctx[23](/*location*/ ctx[14], /*target*/ ctx[15]) + "")) set_data_dev(t0, t0_value);
    			const gl_perspectivecamera_changes = {};
    			if (dirty[0] & /*location*/ 16384) gl_perspectivecamera_changes.location = /*location*/ ctx[14];
    			gl_perspectivecamera.$set(gl_perspectivecamera_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_perspectivecamera.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_perspectivecamera.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    			destroy_component(gl_perspectivecamera, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(511:4) <GL.OrbitControls maxPolarAngle={Math.PI / 2} {location} {target}>",
    		ctx
    	});

    	return block;
    }

    // (519:4) {#if options['values'][0]}
    function create_if_block_1$1(ctx) {
    	let current;

    	const gl_mesh = new Mesh({
    			props: {
    				geometry: box(/*cursorDimensions*/ ctx[20]),
    				location: [0, -/*worldPosition*/ ctx[11].y + markerHeight, 0],
    				rotation: [-90, 0, 0],
    				scale: [
    					0.99 / /*worldPosition*/ ctx[11].r,
    					0.99 / /*worldPosition*/ ctx[11].r,
    					0.05
    				],
    				vert: quadVert,
    				frag: quadFrag,
    				uniforms: {
    					color: adjustColor$1(/*color*/ ctx[0]),
    					alpha: 1
    				},
    				transparent: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_mesh.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_mesh, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_mesh_changes = {};
    			if (dirty[0] & /*worldPosition*/ 2048) gl_mesh_changes.location = [0, -/*worldPosition*/ ctx[11].y + markerHeight, 0];

    			if (dirty[0] & /*worldPosition*/ 2048) gl_mesh_changes.scale = [
    				0.99 / /*worldPosition*/ ctx[11].r,
    				0.99 / /*worldPosition*/ ctx[11].r,
    				0.05
    			];

    			if (dirty[0] & /*color*/ 1) gl_mesh_changes.uniforms = {
    				color: adjustColor$1(/*color*/ ctx[0]),
    				alpha: 1
    			};

    			gl_mesh.$set(gl_mesh_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_mesh.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_mesh.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_mesh, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(519:4) {#if options['values'][0]}",
    		ctx
    	});

    	return block;
    }

    // (558:8) {#if (a > 0.01)}
    function create_if_block$2(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = Array(/*heightmap*/ ctx[3].length);
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*heightmap, gridSizeX, gridSizeZ, w, h, d, color, a*/ 7077945) {
    				each_value = Array(/*heightmap*/ ctx[3].length);
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(558:8) {#if (a > 0.01)}",
    		ctx
    	});

    	return block;
    }

    // (560:16) {#each Array(heightmap[k].length) as _, i}
    function create_each_block_1$1(ctx) {
    	let current;

    	const gl_mesh = new Mesh({
    			props: {
    				geometry: box({
    					x: 0,
    					y: 0,
    					z: 0,
    					w: /*gridSizeX*/ ctx[18] / /*heightmap*/ ctx[3][/*i*/ ctx[61]].length,
    					h: 1 * /*heightmap*/ ctx[3][/*k*/ ctx[59]][/*i*/ ctx[61]],
    					d: /*gridSizeZ*/ ctx[19] / /*heightmap*/ ctx[3].length
    				}),
    				location: [
    					-(/*gridSizeX*/ ctx[18] / 2) + /*i*/ ctx[61] * (/*gridSizeX*/ ctx[18] / /*heightmap*/ ctx[3][0].length),
    					0,
    					-(/*gridSizeZ*/ ctx[19] / 2) + /*k*/ ctx[59] * (/*gridSizeZ*/ ctx[19] / /*heightmap*/ ctx[3].length)
    				],
    				rotation: [0, 0, 0],
    				scale: [/*w*/ ctx[21], 3 * /*h*/ ctx[5] / 8, /*d*/ ctx[22]],
    				uniforms: {
    					color: adjustColor$1(/*color*/ ctx[0], /*heightmap*/ ctx[3][/*k*/ ctx[59]][/*i*/ ctx[61]]),
    					alpha: /*a*/ ctx[4]
    				}
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_mesh.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_mesh, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_mesh_changes = {};

    			if (dirty[0] & /*heightmap*/ 8) gl_mesh_changes.geometry = box({
    				x: 0,
    				y: 0,
    				z: 0,
    				w: /*gridSizeX*/ ctx[18] / /*heightmap*/ ctx[3][/*i*/ ctx[61]].length,
    				h: 1 * /*heightmap*/ ctx[3][/*k*/ ctx[59]][/*i*/ ctx[61]],
    				d: /*gridSizeZ*/ ctx[19] / /*heightmap*/ ctx[3].length
    			});

    			if (dirty[0] & /*heightmap*/ 8) gl_mesh_changes.location = [
    				-(/*gridSizeX*/ ctx[18] / 2) + /*i*/ ctx[61] * (/*gridSizeX*/ ctx[18] / /*heightmap*/ ctx[3][0].length),
    				0,
    				-(/*gridSizeZ*/ ctx[19] / 2) + /*k*/ ctx[59] * (/*gridSizeZ*/ ctx[19] / /*heightmap*/ ctx[3].length)
    			];

    			if (dirty[0] & /*h*/ 32) gl_mesh_changes.scale = [/*w*/ ctx[21], 3 * /*h*/ ctx[5] / 8, /*d*/ ctx[22]];

    			if (dirty[0] & /*color, heightmap, a*/ 25) gl_mesh_changes.uniforms = {
    				color: adjustColor$1(/*color*/ ctx[0], /*heightmap*/ ctx[3][/*k*/ ctx[59]][/*i*/ ctx[61]]),
    				alpha: /*a*/ ctx[4]
    			};

    			gl_mesh.$set(gl_mesh_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_mesh.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_mesh.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_mesh, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$1.name,
    		type: "each",
    		source: "(560:16) {#each Array(heightmap[k].length) as _, i}",
    		ctx
    	});

    	return block;
    }

    // (559:12) {#each Array(heightmap.length) as _, k}
    function create_each_block$1(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value_1 = Array(/*heightmap*/ ctx[3][/*k*/ ctx[59]].length);
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*gridSizeX, heightmap, gridSizeZ, w, h, d, color, a*/ 7077945) {
    				each_value_1 = Array(/*heightmap*/ ctx[3][/*k*/ ctx[59]].length);
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(559:12) {#each Array(heightmap.length) as _, k}",
    		ctx
    	});

    	return block;
    }

    // (573:8) <GL.Group location={[ light.x, light.y, light.z ]}>
    function create_default_slot_2$1(ctx) {
    	let current;

    	const gl_pointlight = new PointLight({
    			props: {
    				location: [0, 0, 0],
    				color: adjustColor$1(/*color*/ ctx[0], 1),
    				intensity: 0.6
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_pointlight.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_pointlight, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_pointlight_changes = {};
    			if (dirty[0] & /*color*/ 1) gl_pointlight_changes.color = adjustColor$1(/*color*/ ctx[0], 1);
    			gl_pointlight.$set(gl_pointlight_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_pointlight.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_pointlight.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_pointlight, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(573:8) <GL.Group location={[ light.x, light.y, light.z ]}>",
    		ctx
    	});

    	return block;
    }

    // (534:4) <GL.Group location={[-worldPosition.x, -worldPosition.y, -worldPosition.z]}>
    function create_default_slot_1$1(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let current;

    	const gl_mesh0 = new Mesh({
    			props: {
    				geometry: /*use_heightmap*/ ctx[10] ? terrain() : terrain$1(),
    				location: [0, -/*h*/ ctx[5] / 8, 0],
    				rotation: [-/*rot*/ ctx[6], 0, 0],
    				scale: [
    					/*initQuadWidth*/ ctx[17],
    					/*initQuadWidth*/ ctx[17],
    					31 * /*h*/ ctx[5] / 8
    				],
    				frag: terrainFrag,
    				vert: terrainVert,
    				uniforms: {
    					alpha: 1,
    					color: adjustColor$1(/*color*/ ctx[0], /*h*/ ctx[5]),
    					colormap: /*colormap*/ ctx[8],
    					normalmap: /*normalmap*/ ctx[9]
    				}
    			},
    			$$inline: true
    		});

    	const gl_mesh1 = new Mesh({
    			props: {
    				geometry: plane(),
    				location: [0, -/*h*/ ctx[5] * 96 / 1024, 0],
    				rotation: [-90, 0, 0],
    				scale: /*initQuadWidth*/ ctx[17],
    				uniforms: { color: 26367, alpha: 0.45 },
    				transparent: true
    			},
    			$$inline: true
    		});

    	let if_block = /*a*/ ctx[4] > 0.01 && create_if_block$2(ctx);

    	const gl_group = new Group({
    			props: {
    				location: [/*light*/ ctx[7].x, /*light*/ ctx[7].y, /*light*/ ctx[7].z],
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_mesh0.$$.fragment);
    			t0 = space();
    			create_component(gl_mesh1.$$.fragment);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();
    			create_component(gl_group.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_mesh0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(gl_mesh1, target, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(gl_group, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_mesh0_changes = {};
    			if (dirty[0] & /*use_heightmap*/ 1024) gl_mesh0_changes.geometry = /*use_heightmap*/ ctx[10] ? terrain() : terrain$1();
    			if (dirty[0] & /*h*/ 32) gl_mesh0_changes.location = [0, -/*h*/ ctx[5] / 8, 0];
    			if (dirty[0] & /*rot*/ 64) gl_mesh0_changes.rotation = [-/*rot*/ ctx[6], 0, 0];

    			if (dirty[0] & /*h*/ 32) gl_mesh0_changes.scale = [
    				/*initQuadWidth*/ ctx[17],
    				/*initQuadWidth*/ ctx[17],
    				31 * /*h*/ ctx[5] / 8
    			];

    			if (dirty[0] & /*color, h, colormap, normalmap*/ 801) gl_mesh0_changes.uniforms = {
    				alpha: 1,
    				color: adjustColor$1(/*color*/ ctx[0], /*h*/ ctx[5]),
    				colormap: /*colormap*/ ctx[8],
    				normalmap: /*normalmap*/ ctx[9]
    			};

    			gl_mesh0.$set(gl_mesh0_changes);
    			const gl_mesh1_changes = {};
    			if (dirty[0] & /*h*/ 32) gl_mesh1_changes.location = [0, -/*h*/ ctx[5] * 96 / 1024, 0];
    			gl_mesh1.$set(gl_mesh1_changes);

    			if (/*a*/ ctx[4] > 0.01) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t2.parentNode, t2);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			const gl_group_changes = {};
    			if (dirty[0] & /*light*/ 128) gl_group_changes.location = [/*light*/ ctx[7].x, /*light*/ ctx[7].y, /*light*/ ctx[7].z];

    			if (dirty[0] & /*color*/ 1 | dirty[2] & /*$$scope*/ 1) {
    				gl_group_changes.$$scope = { dirty, ctx };
    			}

    			gl_group.$set(gl_group_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_mesh0.$$.fragment, local);
    			transition_in(gl_mesh1.$$.fragment, local);
    			transition_in(if_block);
    			transition_in(gl_group.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_mesh0.$$.fragment, local);
    			transition_out(gl_mesh1.$$.fragment, local);
    			transition_out(if_block);
    			transition_out(gl_group.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_mesh0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(gl_mesh1, detaching);
    			if (detaching) detach_dev(t1);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(gl_group, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(534:4) <GL.Group location={[-worldPosition.x, -worldPosition.y, -worldPosition.z]}>",
    		ctx
    	});

    	return block;
    }

    // (508:0) <GL.Scene bind:gl={webgl} backgroundOpacity=1.0 process_extra_shader_components={process_extra_shader_components}>
    function create_default_slot$2(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let current;

    	const gl_target = new Target({
    			props: { id: "center", location: [0, 0.5, 0] },
    			$$inline: true
    		});

    	const gl_orbitcontrols = new OrbitControls({
    			props: {
    				maxPolarAngle: Math.PI / 2,
    				location: /*location*/ ctx[14],
    				target: /*target*/ ctx[15],
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const gl_ambientlight = new AmbientLight({
    			props: { intensity: 0.5 },
    			$$inline: true
    		});

    	const gl_directionallight = new DirectionalLight({
    			props: { direction: [-1, -1, -1], intensity: 0.5 },
    			$$inline: true
    		});

    	let if_block = /*options*/ ctx[1]["values"][0] && create_if_block_1$1(ctx);

    	const gl_group = new Group({
    			props: {
    				location: [
    					-/*worldPosition*/ ctx[11].x,
    					-/*worldPosition*/ ctx[11].y,
    					-/*worldPosition*/ ctx[11].z
    				],
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(gl_target.$$.fragment);
    			t0 = space();
    			create_component(gl_orbitcontrols.$$.fragment);
    			t1 = space();
    			create_component(gl_ambientlight.$$.fragment);
    			t2 = space();
    			create_component(gl_directionallight.$$.fragment);
    			t3 = space();
    			if (if_block) if_block.c();
    			t4 = space();
    			create_component(gl_group.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_target, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(gl_orbitcontrols, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(gl_ambientlight, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(gl_directionallight, target, anchor);
    			insert_dev(target, t3, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(gl_group, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_orbitcontrols_changes = {};
    			if (dirty[0] & /*location*/ 16384) gl_orbitcontrols_changes.location = /*location*/ ctx[14];
    			if (dirty[0] & /*target*/ 32768) gl_orbitcontrols_changes.target = /*target*/ ctx[15];

    			if (dirty[0] & /*location, target*/ 49152 | dirty[2] & /*$$scope*/ 1) {
    				gl_orbitcontrols_changes.$$scope = { dirty, ctx };
    			}

    			gl_orbitcontrols.$set(gl_orbitcontrols_changes);

    			if (/*options*/ ctx[1]["values"][0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_1$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t4.parentNode, t4);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			const gl_group_changes = {};

    			if (dirty[0] & /*worldPosition*/ 2048) gl_group_changes.location = [
    				-/*worldPosition*/ ctx[11].x,
    				-/*worldPosition*/ ctx[11].y,
    				-/*worldPosition*/ ctx[11].z
    			];

    			if (dirty[0] & /*light, color, heightmap, h, a, use_heightmap, rot, colormap, normalmap*/ 2041 | dirty[2] & /*$$scope*/ 1) {
    				gl_group_changes.$$scope = { dirty, ctx };
    			}

    			gl_group.$set(gl_group_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_target.$$.fragment, local);
    			transition_in(gl_orbitcontrols.$$.fragment, local);
    			transition_in(gl_ambientlight.$$.fragment, local);
    			transition_in(gl_directionallight.$$.fragment, local);
    			transition_in(if_block);
    			transition_in(gl_group.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_target.$$.fragment, local);
    			transition_out(gl_orbitcontrols.$$.fragment, local);
    			transition_out(gl_ambientlight.$$.fragment, local);
    			transition_out(gl_directionallight.$$.fragment, local);
    			transition_out(if_block);
    			transition_out(gl_group.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_target, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(gl_orbitcontrols, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(gl_ambientlight, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(gl_directionallight, detaching);
    			if (detaching) detach_dev(t3);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(gl_group, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(508:0) <GL.Scene bind:gl={webgl} backgroundOpacity=1.0 process_extra_shader_components={process_extra_shader_components}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let updating_gl;
    	let t;
    	let updating_init;
    	let updating_color;
    	let updating_options;
    	let updating_rangeOptions;
    	let updating_rangeValues;
    	let updating_viewLocation;
    	let updating_viewTarget;
    	let updating_worldPosition;
    	let current;

    	function gl_scene_gl_binding(value) {
    		/*gl_scene_gl_binding*/ ctx[47].call(null, value);
    	}

    	let gl_scene_props = {
    		backgroundOpacity: "1.0",
    		process_extra_shader_components: /*process_extra_shader_components*/ ctx[24],
    		$$slots: { default: [create_default_slot$2] },
    		$$scope: { ctx }
    	};

    	if (/*webgl*/ ctx[12] !== void 0) {
    		gl_scene_props.gl = /*webgl*/ ctx[12];
    	}

    	const gl_scene = new Scene({ props: gl_scene_props, $$inline: true });
    	binding_callbacks.push(() => bind(gl_scene, "gl", gl_scene_gl_binding));

    	function navigationcontrols_init_binding(value) {
    		/*navigationcontrols_init_binding*/ ctx[48].call(null, value);
    	}

    	function navigationcontrols_color_binding(value) {
    		/*navigationcontrols_color_binding*/ ctx[49].call(null, value);
    	}

    	function navigationcontrols_options_binding(value) {
    		/*navigationcontrols_options_binding*/ ctx[50].call(null, value);
    	}

    	function navigationcontrols_rangeOptions_binding(value) {
    		/*navigationcontrols_rangeOptions_binding*/ ctx[51].call(null, value);
    	}

    	function navigationcontrols_rangeValues_binding(value) {
    		/*navigationcontrols_rangeValues_binding*/ ctx[52].call(null, value);
    	}

    	function navigationcontrols_viewLocation_binding(value) {
    		/*navigationcontrols_viewLocation_binding*/ ctx[53].call(null, value);
    	}

    	function navigationcontrols_viewTarget_binding(value) {
    		/*navigationcontrols_viewTarget_binding*/ ctx[54].call(null, value);
    	}

    	function navigationcontrols_worldPosition_binding(value) {
    		/*navigationcontrols_worldPosition_binding*/ ctx[55].call(null, value);
    	}

    	let navigationcontrols_props = { extent: /*eventQuad*/ ctx[16].extent };

    	if (/*controlInit*/ ctx[13] !== void 0) {
    		navigationcontrols_props.init = /*controlInit*/ ctx[13];
    	}

    	if (/*color*/ ctx[0] !== void 0) {
    		navigationcontrols_props.color = /*color*/ ctx[0];
    	}

    	if (/*options*/ ctx[1] !== void 0) {
    		navigationcontrols_props.options = /*options*/ ctx[1];
    	}

    	if (/*ranges*/ ctx[2] !== void 0) {
    		navigationcontrols_props.rangeOptions = /*ranges*/ ctx[2];
    	}

    	if (/*ranges*/ ctx[2].values !== void 0) {
    		navigationcontrols_props.rangeValues = /*ranges*/ ctx[2].values;
    	}

    	if (/*location*/ ctx[14] !== void 0) {
    		navigationcontrols_props.viewLocation = /*location*/ ctx[14];
    	}

    	if (/*target*/ ctx[15] !== void 0) {
    		navigationcontrols_props.viewTarget = /*target*/ ctx[15];
    	}

    	if (/*worldPosition*/ ctx[11] !== void 0) {
    		navigationcontrols_props.worldPosition = /*worldPosition*/ ctx[11];
    	}

    	const navigationcontrols = new NavigationControls({
    			props: navigationcontrols_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(navigationcontrols, "init", navigationcontrols_init_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "color", navigationcontrols_color_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "options", navigationcontrols_options_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "rangeOptions", navigationcontrols_rangeOptions_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "rangeValues", navigationcontrols_rangeValues_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "viewLocation", navigationcontrols_viewLocation_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "viewTarget", navigationcontrols_viewTarget_binding));
    	binding_callbacks.push(() => bind(navigationcontrols, "worldPosition", navigationcontrols_worldPosition_binding));
    	navigationcontrols.$on("move", /*move_handler*/ ctx[56]);

    	const block = {
    		c: function create() {
    			create_component(gl_scene.$$.fragment);
    			t = space();
    			create_component(navigationcontrols.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(gl_scene, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(navigationcontrols, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const gl_scene_changes = {};

    			if (dirty[0] & /*worldPosition, light, color, heightmap, h, a, use_heightmap, rot, colormap, normalmap, options, location, target*/ 53243 | dirty[2] & /*$$scope*/ 1) {
    				gl_scene_changes.$$scope = { dirty, ctx };
    			}

    			if (!updating_gl && dirty[0] & /*webgl*/ 4096) {
    				updating_gl = true;
    				gl_scene_changes.gl = /*webgl*/ ctx[12];
    				add_flush_callback(() => updating_gl = false);
    			}

    			gl_scene.$set(gl_scene_changes);
    			const navigationcontrols_changes = {};

    			if (!updating_init && dirty[0] & /*controlInit*/ 8192) {
    				updating_init = true;
    				navigationcontrols_changes.init = /*controlInit*/ ctx[13];
    				add_flush_callback(() => updating_init = false);
    			}

    			if (!updating_color && dirty[0] & /*color*/ 1) {
    				updating_color = true;
    				navigationcontrols_changes.color = /*color*/ ctx[0];
    				add_flush_callback(() => updating_color = false);
    			}

    			if (!updating_options && dirty[0] & /*options*/ 2) {
    				updating_options = true;
    				navigationcontrols_changes.options = /*options*/ ctx[1];
    				add_flush_callback(() => updating_options = false);
    			}

    			if (!updating_rangeOptions && dirty[0] & /*ranges*/ 4) {
    				updating_rangeOptions = true;
    				navigationcontrols_changes.rangeOptions = /*ranges*/ ctx[2];
    				add_flush_callback(() => updating_rangeOptions = false);
    			}

    			if (!updating_rangeValues && dirty[0] & /*ranges*/ 4) {
    				updating_rangeValues = true;
    				navigationcontrols_changes.rangeValues = /*ranges*/ ctx[2].values;
    				add_flush_callback(() => updating_rangeValues = false);
    			}

    			if (!updating_viewLocation && dirty[0] & /*location*/ 16384) {
    				updating_viewLocation = true;
    				navigationcontrols_changes.viewLocation = /*location*/ ctx[14];
    				add_flush_callback(() => updating_viewLocation = false);
    			}

    			if (!updating_viewTarget && dirty[0] & /*target*/ 32768) {
    				updating_viewTarget = true;
    				navigationcontrols_changes.viewTarget = /*target*/ ctx[15];
    				add_flush_callback(() => updating_viewTarget = false);
    			}

    			if (!updating_worldPosition && dirty[0] & /*worldPosition*/ 2048) {
    				updating_worldPosition = true;
    				navigationcontrols_changes.worldPosition = /*worldPosition*/ ctx[11];
    				add_flush_callback(() => updating_worldPosition = false);
    			}

    			navigationcontrols.$set(navigationcontrols_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(gl_scene.$$.fragment, local);
    			transition_in(navigationcontrols.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(gl_scene.$$.fragment, local);
    			transition_out(navigationcontrols.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(gl_scene, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(navigationcontrols, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		type: "component",


