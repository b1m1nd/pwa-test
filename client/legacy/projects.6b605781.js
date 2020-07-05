import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, N as assign, O as exclude_internal_props, P as svg_element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, Q as null_to_empty, o as insert_dev, p as append_dev, r as _slicedToArray, w as noop, x as onMount, R as onDestroy, I as beforeUpdate, T as afterUpdate, J as globals, y as space, g as element, t as text, z as create_component, A as query_selector_all, B as claim_space, k as claim_text, C as claim_component, U as set_attributes, V as toggle_class, D as mount_component, W as action_destroyer, q as listen_dev, X as is_function, u as set_data_dev, Y as get_spread_update, E as transition_in, F as transition_out, G as destroy_component, Z as run_all } from './client.4cf9d8e0.js';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger.96d98132.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "node_modules\\fa-svelte\\src\\Icon.svelte";

function create_fragment(ctx) {
  var svg;
  var path_1;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path_1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        "aria-hidden": true,
        class: true,
        role: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path_1 = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path_1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path_1, "fill", "currentColor");
      attr_dev(path_1, "d",
      /*path*/
      ctx[0]);
      add_location(path_1, file, 7, 2, 129);
      attr_dev(svg, "aria-hidden", "true");
      attr_dev(svg, "class", svg_class_value = "" + (null_to_empty(
      /*classes*/
      ctx[1]) + " svelte-hi8kiy"));
      attr_dev(svg, "role", "img");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox",
      /*viewBox*/
      ctx[2]);
      add_location(svg, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path_1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*path*/
      1) {
        attr_dev(path_1, "d",
        /*path*/
        ctx[0]);
      }

      if (dirty &
      /*classes*/
      2 && svg_class_value !== (svg_class_value = "" + (null_to_empty(
      /*classes*/
      ctx[1]) + " svelte-hi8kiy"))) {
        attr_dev(svg, "class", svg_class_value);
      }

      if (dirty &
      /*viewBox*/
      4) {
        attr_dev(svg, "viewBox",
        /*viewBox*/
        ctx[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      icon = _$$props.icon;
  var path = [];
  var classes = "";
  var viewBox = "";
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;
  validate_slots("Icon", $$slots, []);

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("icon" in $$new_props) $$invalidate(3, icon = $$new_props.icon);
  };

  $$self.$capture_state = function () {
    return {
      icon: icon,
      path: path,
      classes: classes,
      viewBox: viewBox
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("icon" in $$props) $$invalidate(3, icon = $$new_props.icon);
    if ("path" in $$props) $$invalidate(0, path = $$new_props.path);
    if ("classes" in $$props) $$invalidate(1, classes = $$new_props.classes);
    if ("viewBox" in $$props) $$invalidate(2, viewBox = $$new_props.viewBox);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*icon*/
    8) {
       $$invalidate(2, viewBox = "0 0 " + icon.icon[0] + " " + icon.icon[1]);
    }

     $$invalidate(1, classes = "fa-svelte " + ($$props.class ? $$props.class : ""));

    if ($$self.$$.dirty &
    /*icon*/
    8) {
       $$invalidate(0, path = icon.icon[4]);
    }
  };

  $$props = exclude_internal_props($$props);
  return [path, classes, viewBox, icon];
}

var Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  var _super = _createSuper(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      icon: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*icon*/
    ctx[3] === undefined && !("icon" in props)) {
      console.warn("<Icon> was created without expected prop 'icon'");
    }

    return _this;
  }

  _createClass(Icon, [{
    key: "icon",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

var faArrowDown={prefix:'fas',iconName:'arrow-down',icon:[448,512,[],"f063","M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"]};var faArrowsAlt={prefix:'fas',iconName:'arrows-alt',icon:[512,512,[],"f0b2","M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"]};var faBacon={prefix:'fas',iconName:'bacon',icon:[576,512,[],"f7e5","M218.92 336.39c34.89-34.89 44.2-59.7 54.05-86 10.61-28.29 21.59-57.54 61.37-97.34s69.05-50.77 97.35-61.38c23.88-9 46.64-17.68 76.79-45.37L470.81 8.91a31 31 0 0 0-40.18-2.83c-13.64 10.1-25.15 14.39-41 20.3C247 79.52 209.26 191.29 200.65 214.1c-29.75 78.83-89.55 94.68-98.72 98.09-24.86 9.26-54.73 20.38-91.07 50.36C-3 374-3.63 395 9.07 407.61l35.76 35.51C80 410.52 107 400.15 133 390.39c26.27-9.84 51.06-19.12 85.92-54zm348-232l-35.75-35.51c-35.19 32.63-62.18 43-88.25 52.79-26.26 9.85-51.06 19.16-85.95 54s-44.19 59.69-54 86C292.33 290 281.34 319.22 241.55 359s-69 50.73-97.3 61.32c-23.86 9-46.61 17.66-76.72 45.33l37.68 37.43a31 31 0 0 0 40.18 2.82c13.6-10.06 25.09-14.34 40.94-20.24 142.2-53 180-164.1 188.94-187.69C405 219.18 464.8 203.3 474 199.86c24.87-9.27 54.74-20.4 91.11-50.41 13.89-11.4 14.52-32.45 1.82-45.05z"]};var faFeather={prefix:'fas',iconName:'feather',icon:[512,512,[],"f52d","M467.14 44.84c-62.55-62.48-161.67-64.78-252.28 25.73-78.61 78.52-60.98 60.92-85.75 85.66-60.46 60.39-70.39 150.83-63.64 211.17l178.44-178.25c6.26-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.6 9.37 33.98 0l66.1-66.03C159.42 454.65 279 457.11 353.95 384h-98.19l147.57-49.14c49.99-49.93 36.38-36.18 46.31-46.86h-97.78l131.54-43.8c45.44-74.46 34.31-148.84-16.26-199.36z"]};var faFish={prefix:'fas',iconName:'fish',icon:[576,512,[],"f578","M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"]};

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

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
gsapWithCSS.registerPlugin(ScrollTrigger);
function animate(node, _ref) {
  var type = _ref.type,
      args = _objectWithoutProperties(_ref, ["type"]);

  var method = gsapWithCSS[type];
  return method(node, args);
}
function triggerMe(node, _ref2) {
  var args = _extends({}, _ref2);

  var method = ScrollTrigger.create({
    trigger: node,
    animation: gsapWithCSS.from(node, args),
    start: 'center center',
    toggleActions: 'play none none reverse' //markers: true,

  });
  return method;
}
function newTrigger(node, _ref3) {
  var args = _extends({}, _ref3);

  var method = ScrollTrigger.create(_objectSpread({
    trigger: node,
    animation: gsapWithCSS.from(node, {
      duration: 1,
      opacity: 0,
      x: 100
    })
  }, args));
  return method;
}
function pinScrub(node, _ref4) {
  var args = _extends({}, _ref4);

  var st = ScrollTrigger.create({
    trigger: node,
    pin: true,
    scrub: true,
    animation: gsapWithCSS.from(node.children, _objectSpread({}, args)),
    start: 'center center',
    toggleActions: 'play none none reverse' //markers: true,

  });
  return st;
}
function killTriggers() {
  var allTriggers = ScrollTrigger.getAll();
  console.log(allTriggers);
  allTriggers.forEach(function (t) {
    t.kill();
  });
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file$1 = "src\\routes\\projects.svelte";

function create_fragment$1(ctx) {
  var t0;
  var p0;
  var t1;
  var animate_action;
  var t2;
  var p1;
  var t3;
  var animate_action_1;
  var t4;
  var h1;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  var t10;
  var div0;
  var t11;
  var t12;
  var div1;
  var p2;
  var t13;
  var triggerMe_action;
  var t14;
  var div2;
  var t15;
  var newTrigger_action;
  var t16;
  var div3;
  var p3;
  var t17;
  var t18;
  var p4;
  var t19;
  var t20;
  var p5;
  var t21;
  var pinScrub_action;
  var t22;
  var div4;
  var t23;
  var t24;
  var div5;
  var p6;
  var t25;
  var t26;
  var p7;
  var t27;
  var t28;
  var p8;
  var t29;
  var pinScrub_action_1;
  var t30;
  var div6;
  var t31;
  var t32;
  var div7;
  var p9;
  var t33;
  var t34;
  var p10;
  var t35;
  var t36;
  var p11;
  var t37;
  var pinScrub_action_2;
  var t38;
  var div8;
  var t39;
  var current;
  var mounted;
  var dispose;
  var icon0 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      icon: faArrowsAlt
    },
    $$inline: true
  });
  var icon2 = new Icon({
    props: {
      icon: faFeather
    },
    $$inline: true
  });
  var icon3 = new Icon({
    props: {
      icon: faFish
    },
    $$inline: true
  });
  var icon4 = new Icon({
    props: {
      icon: faBacon
    },
    $$inline: true
  });
  var div0_levels = [{
    class: "spacer"
  },
  /*data*/
  ctx[2]];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var block = {
    c: function create() {
      t0 = space();
      p0 = element("p");
      t1 = text("just some projects");
      t2 = space();
      p1 = element("p");
      create_component(icon0.$$.fragment);
      t3 = text("\n  you can use fontAwesome too !");
      t4 = space();
      h1 = element("h1");
      t5 = text(
      /*msg*/
      ctx[1]);
      t6 = space();
      create_component(icon1.$$.fragment);
      t7 = text("\nLink\n");
      create_component(icon2.$$.fragment);
      t8 = text("\nTest\n");
      create_component(icon3.$$.fragment);
      t9 = text("\nMore\n");
      create_component(icon4.$$.fragment);
      t10 = text("\nReally\n");
      div0 = element("div");
      t11 = text("test");
      t12 = space();
      div1 = element("div");
      p2 = element("p");
      t13 = text("testPin");
      t14 = space();
      div2 = element("div");
      t15 = text("test");
      t16 = space();
      div3 = element("div");
      p3 = element("p");
      t17 = text("test");
      t18 = space();
      p4 = element("p");
      t19 = text("test");
      t20 = space();
      p5 = element("p");
      t21 = text("test");
      t22 = space();
      div4 = element("div");
      t23 = text("test");
      t24 = space();
      div5 = element("div");
      p6 = element("p");
      t25 = text("test");
      t26 = space();
      p7 = element("p");
      t27 = text("test");
      t28 = space();
      p8 = element("p");
      t29 = text("test");
      t30 = space();
      div6 = element("div");
      t31 = text("test");
      t32 = space();
      div7 = element("div");
      p9 = element("p");
      t33 = text("test");
      t34 = space();
      p10 = element("p");
      t35 = text("test");
      t36 = space();
      p11 = element("p");
      t37 = text("test");
      t38 = space();
      div8 = element("div");
      t39 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1en3a0b\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "just some projects");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      claim_component(icon0.$$.fragment, p1_nodes);
      t3 = claim_text(p1_nodes, "\n  you can use fontAwesome too !");
      p1_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t5 = claim_text(h1_nodes,
      /*msg*/
      ctx[1]);
      h1_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
      t7 = claim_text(nodes, "\nLink\n");
      claim_component(icon2.$$.fragment, nodes);
      t8 = claim_text(nodes, "\nTest\n");
      claim_component(icon3.$$.fragment, nodes);
      t9 = claim_text(nodes, "\nMore\n");
      claim_component(icon4.$$.fragment, nodes);
      t10 = claim_text(nodes, "\nReally\n");
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t11 = claim_text(div0_nodes, "test");
      div0_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t13 = claim_text(p2_nodes, "testPin");
      p2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t15 = claim_text(div2_nodes, "test");
      div2_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p3 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t17 = claim_text(p3_nodes, "test");
      p3_nodes.forEach(detach_dev);
      t18 = claim_space(div3_nodes);
      p4 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t19 = claim_text(p4_nodes, "test");
      p4_nodes.forEach(detach_dev);
      t20 = claim_space(div3_nodes);
      p5 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p5_nodes = children(p5);
      t21 = claim_text(p5_nodes, "test");
      p5_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t22 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t23 = claim_text(div4_nodes, "test");
      div4_nodes.forEach(detach_dev);
      t24 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      p6 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t25 = claim_text(p6_nodes, "test");
      p6_nodes.forEach(detach_dev);
      t26 = claim_space(div5_nodes);
      p7 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t27 = claim_text(p7_nodes, "test");
      p7_nodes.forEach(detach_dev);
      t28 = claim_space(div5_nodes);
      p8 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t29 = claim_text(p8_nodes, "test");
      p8_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t30 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t31 = claim_text(div6_nodes, "test");
      div6_nodes.forEach(detach_dev);
      t32 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      p9 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p9_nodes = children(p9);
      t33 = claim_text(p9_nodes, "test");
      p9_nodes.forEach(detach_dev);
      t34 = claim_space(div7_nodes);
      p10 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p10_nodes = children(p10);
      t35 = claim_text(p10_nodes, "test");
      p10_nodes.forEach(detach_dev);
      t36 = claim_space(div7_nodes);
      p11 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p11_nodes = children(p11);
      t37 = claim_text(p11_nodes, "test");
      p11_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t38 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t39 = claim_text(div8_nodes, "test");
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Projects";
      add_location(p0, file$1, 33, 0, 909);
      add_location(p1, file$1, 34, 0, 1000);
      attr_dev(h1, "class", "test");
      add_location(h1, file$1, 45, 0, 1516);
      set_attributes(div0, div0_data);
      toggle_class(div0, "svelte-11sop6x", true);
      add_location(div0, file$1, 54, 0, 1688);
      add_location(p2, file$1, 56, 2, 1817);
      attr_dev(div1, "id", "anchor");
      attr_dev(div1, "class", "trigger");
      add_location(div1, file$1, 55, 0, 1729);
      attr_dev(div2, "class", "spacer svelte-11sop6x");
      add_location(div2, file$1, 58, 0, 1839);
      attr_dev(p3, "class", "svelte-11sop6x");
      add_location(p3, file$1, 60, 2, 2033);
      attr_dev(p4, "class", "svelte-11sop6x");
      add_location(p4, file$1, 61, 2, 2047);
      attr_dev(p5, "class", "svelte-11sop6x");
      add_location(p5, file$1, 62, 2, 2061);
      attr_dev(div3, "class", "pinned svelte-11sop6x");
      add_location(div3, file$1, 59, 0, 1952);
      attr_dev(div4, "class", "spacer svelte-11sop6x");
      add_location(div4, file$1, 65, 0, 2081);
      attr_dev(p6, "class", "svelte-11sop6x");
      add_location(p6, file$1, 67, 2, 2193);
      attr_dev(p7, "class", "svelte-11sop6x");
      add_location(p7, file$1, 68, 2, 2207);
      attr_dev(p8, "class", "svelte-11sop6x");
      add_location(p8, file$1, 69, 2, 2221);
      attr_dev(div5, "class", "pinned svelte-11sop6x");
      add_location(div5, file$1, 66, 0, 2112);
      attr_dev(div6, "class", "spacer svelte-11sop6x");
      add_location(div6, file$1, 71, 0, 2240);
      attr_dev(p9, "class", "svelte-11sop6x");
      add_location(p9, file$1, 73, 2, 2352);
      attr_dev(p10, "class", "svelte-11sop6x");
      add_location(p10, file$1, 74, 2, 2366);
      attr_dev(p11, "class", "svelte-11sop6x");
      add_location(p11, file$1, 75, 2, 2380);
      attr_dev(div7, "class", "pinned svelte-11sop6x");
      add_location(div7, file$1, 72, 0, 2271);
      attr_dev(div8, "class", "spacer svelte-11sop6x");
      add_location(div8, file$1, 77, 0, 2399);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, p0, anchor);
      append_dev(p0, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p1, anchor);
      mount_component(icon0, p1, null);
      append_dev(p1, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t5);
      insert_dev(target, t6, anchor);
      mount_component(icon1, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(icon2, target, anchor);
      insert_dev(target, t8, anchor);
      mount_component(icon3, target, anchor);
      insert_dev(target, t9, anchor);
      mount_component(icon4, target, anchor);
      insert_dev(target, t10, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, t11);
      insert_dev(target, t12, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, p2);
      append_dev(p2, t13);
      insert_dev(target, t14, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, t15);
      insert_dev(target, t16, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, p3);
      append_dev(p3, t17);
      append_dev(div3, t18);
      append_dev(div3, p4);
      append_dev(p4, t19);
      append_dev(div3, t20);
      append_dev(div3, p5);
      append_dev(p5, t21);
      insert_dev(target, t22, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, t23);
      insert_dev(target, t24, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, p6);
      append_dev(p6, t25);
      append_dev(div5, t26);
      append_dev(div5, p7);
      append_dev(p7, t27);
      append_dev(div5, t28);
      append_dev(div5, p8);
      append_dev(p8, t29);
      insert_dev(target, t30, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, t31);
      insert_dev(target, t32, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, p9);
      append_dev(p9, t33);
      append_dev(div7, t34);
      append_dev(div7, p10);
      append_dev(p10, t35);
      append_dev(div7, t36);
      append_dev(div7, p11);
      append_dev(p11, t37);
      insert_dev(target, t38, anchor);
      insert_dev(target, div8, anchor);
      append_dev(div8, t39);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(animate_action = animate.call(null, p0, {
          type: "from",
          duration: 1,
          opacity: 0,
          x: -100
        })), action_destroyer(animate_action_1 = animate.call(null, p1, {
          type: "from",
          duration: 1,
          opacity: 0,
          x: 100,
          onComplete:
          /*animate_function*/
          ctx[4]
        })), listen_dev(h1, "click",
        /*testClick*/
        ctx[3], false, false, false), action_destroyer(triggerMe_action = triggerMe.call(null, div1, {
          duration: 1,
          opacity: 0,
          x: 100
        })), action_destroyer(newTrigger_action = newTrigger.call(null, div2, {
          start: "top bottom",
          toggleActions: "play none none reverse"
        })), action_destroyer(pinScrub_action = pinScrub.call(null, div3, {
          autoAlpha: 0,
          y: "-=100",
          stagger: 0.3
        })), action_destroyer(pinScrub_action_1 = pinScrub.call(null, div5, {
          autoAlpha: 0,
          x: "+=100",
          stagger: 0.3
        })), action_destroyer(pinScrub_action_2 = pinScrub.call(null, div7, {
          autoAlpha: 0,
          x: "-=100",
          stagger: 0.3
        }))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (animate_action_1 && is_function(animate_action_1.update) && dirty &
      /*desc*/
      1) animate_action_1.update.call(null, {
        type: "from",
        duration: 1,
        opacity: 0,
        x: 100,
        onComplete:
        /*animate_function*/
        ctx[4]
      });
      if (!current || dirty &
      /*msg*/
      2) set_data_dev(t5,
      /*msg*/
      ctx[1]);
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [{
        class: "spacer"
      }, dirty &
      /*data*/
      4 &&
      /*data*/
      ctx[2]]));
      toggle_class(div0, "svelte-11sop6x", true);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      transition_in(icon3.$$.fragment, local);
      transition_in(icon4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      transition_out(icon3.$$.fragment, local);
      transition_out(icon4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p1);
      destroy_component(icon0);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t6);
      destroy_component(icon1, detaching);
      if (detaching) detach_dev(t7);
      destroy_component(icon2, detaching);
      if (detaching) detach_dev(t8);
      destroy_component(icon3, detaching);
      if (detaching) detach_dev(t9);
      destroy_component(icon4, detaching);
      if (detaching) detach_dev(t10);
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t12);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t14);
      if (detaching) detach_dev(div2);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t22);
      if (detaching) detach_dev(div4);
      if (detaching) detach_dev(t24);
      if (detaching) detach_dev(div5);
      if (detaching) detach_dev(t30);
      if (detaching) detach_dev(div6);
      if (detaching) detach_dev(t32);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t38);
      if (detaching) detach_dev(div8);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var data = {
    "data-test": "this"
  };
  var desc = false;
  var msg = "click me";

  function testClick(e) {
    var test = e.target;
    console.log(test); // using GSAP test

    gsapWithCSS.to(test, {
      border: "0px",
      scale: 1.5,
      duration: 0.5,
      yoyo: true,
      repeat: 5
    });
    $$invalidate(1, msg = "GSAP 🐢 test success!");
  }

  onMount(function () {
    return function () {
      console.log("killing triggers");
      killTriggers();
    };
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Projects> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Projects", $$slots, []);

  var animate_function = function animate_function() {
    return $$invalidate(0, desc = true);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      beforeUpdate: beforeUpdate,
      afterUpdate: afterUpdate,
      Icon: Icon,
      faArrowsAlt: faArrowsAlt,
      faArrowDown: faArrowDown,
      faFeather: faFeather,
      faBacon: faBacon,
      faFish: faFish,
      gsap: gsapWithCSS,
      ScrollTrigger: ScrollTrigger,
      animate: animate,
      triggerMe: triggerMe,
      pinScrub: pinScrub,
      newTrigger: newTrigger,
      killTriggers: killTriggers,
      data: data,
      desc: desc,
      msg: msg,
      testClick: testClick
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("data" in $$props) $$invalidate(2, data = $$props.data);
    if ("desc" in $$props) $$invalidate(0, desc = $$props.desc);
    if ("msg" in $$props) $$invalidate(1, msg = $$props.msg);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [desc, msg, data, testClick, animate_function];
}

var Projects = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Projects, _SvelteComponentDev);

  var _super = _createSuper$1(Projects);

  function Projects(options) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Projects",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Projects;
}(SvelteComponentDev);

export default Projects;