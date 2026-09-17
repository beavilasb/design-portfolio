/* @ds-bundle: {"format":4,"namespace":"BiaRodriguesDesignSystem_ffb52b","components":[{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Divider","sourcePath":"components/Divider.jsx"},{"name":"VuesaxLinearArrowRight","sourcePath":"components/VuesaxLinearArrowRight.jsx"},{"name":"VuesaxLinearSend","sourcePath":"components/VuesaxLinearSend.jsx"},{"name":"VuesaxLinearTask","sourcePath":"components/VuesaxLinearTask.jsx"}],"sourceHashes":{"components/Button.jsx":"d05e916b656b","components/Divider.jsx":"f7e9a6522659","components/VuesaxLinearArrowRight.jsx":"350b8de342cf","components/VuesaxLinearSend.jsx":"56070eeec134","components/VuesaxLinearTask.jsx":"6b72ff3728ce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BiaRodriguesDesignSystem_ffb52b = window.BiaRodriguesDesignSystem_ffb52b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  iconRight,
  children,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 20px' : '12px 24px';
  const base = {
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 'var(--radius-pill)',
    padding: pad,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    border: 'none',
    lineHeight: 1.5,
    transition: 'opacity .15s ease'
  };
  const variants = {
    primary: {
      background: 'var(--color-bg-inverse)',
      color: 'var(--color-text-inverse)'
    },
    'primary-on-dark': {
      background: 'var(--white)',
      color: 'var(--dark)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--dark)',
      boxShadow: 'inset 0 0 0 1px var(--dark)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--white)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseOver: e => e.currentTarget.style.opacity = 0.85,
    onMouseOut: e => e.currentTarget.style.opacity = 1
  }), children, iconRight);
}
Object.assign(__ds_scope, { Button, __ds_default_components_Button_xnw6d2: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Divider.jsx
try { (() => {
// figma node: 1:40 Divider (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "theme=" + __venc(p.theme);
function Divider(_p = {}) {
  const props = {
    ..._p,
    theme: _p.theme ?? "light divider"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 380,
      height: 0,
      position: "relative",
      color: "rgb(238,238,238)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 380,
    height: 1,
    viewBox: "0 -0.500 380 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 380,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 380 0 L 380 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 380,
      height: 0,
      position: "relative",
      color: "rgb(53,56,63)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 380,
    height: 1,
    viewBox: "0 -0.500 380 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 380,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 380 0 L 380 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Theme=Light Divider
    "theme=light divider": __body0,
    // figma: Theme=Dark Divider
    "theme=dark divider": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Divider, __ds_default_components_Divider_9e2ngh: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider.jsx", error: String((e && e.message) || e) }); }

// components/VuesaxLinearArrowRight.jsx
try { (() => {
// figma node: 1:301 vuesax/linear/arrow-right
function VuesaxLinearArrowRight(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 44,
      height: 44,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.012,
    height: 29.040,
    viewBox: "0 0 13.012 29.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.335,
      top: 7.48,
      width: 13.012,
      height: 29.04,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -1.061 27.979 C -1.646 28.565 -1.646 29.515 -1.061 30.101 C -0.475 30.686 0.475 30.686 1.061 30.101 L -1.061 27.979 Z M 1.061 -1.061 C 0.475 -1.646 -0.475 -1.646 -1.061 -1.061 C -1.646 -0.475 -1.646 0.475 -1.061 1.061 L 1.061 -1.061 Z M 1.061 30.101 L 13.014 18.147 L 10.893 16.026 L -1.061 27.979 L 1.061 30.101 Z M 13.014 18.147 C 15.011 16.15 15.011 12.89 13.014 10.893 L 10.893 13.014 C 11.719 13.84 11.719 15.2 10.893 16.026 L 13.014 18.147 Z M 13.014 10.893 L 1.061 -1.061 L -1.061 1.061 L 10.893 13.014 L 13.014 10.893 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { VuesaxLinearArrowRight, __ds_default_components_VuesaxLinearArrowRight_9mzud6: VuesaxLinearArrowRight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/VuesaxLinearArrowRight.jsx", error: String((e && e.message) || e) }); }

// components/VuesaxLinearSend.jsx
try { (() => {
// figma node: 1:294 vuesax/linear/send
function VuesaxLinearSend(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 64.973876953125,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 9.41650390625,
      padding: "7.533px 7.533px 7.533px 7.533px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(31,31,31)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.6,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.6,
      height: 22.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.708,
      top: 3.296,
      width: 13.183,
      height: 13.183,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.183,
    height: 13.183,
    viewBox: "0 0 13.183 13.183",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.183,
      height: 13.183
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.499 -0.499 C 0.224 -0.775 -0.224 -0.775 -0.499 -0.499 C -0.775 -0.224 -0.775 0.224 -0.499 0.499 L 0.499 -0.499 Z M 12.684 13.682 C 12.96 13.958 13.407 13.958 13.682 13.682 C 13.958 13.407 13.958 12.96 13.682 12.684 L 12.684 13.682 Z M -0.499 0.499 L 12.684 13.682 L 13.682 12.684 L 0.499 -0.499 L -0.499 0.499 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.671,
    height: 9.671,
    viewBox: "0 0 9.671 9.671",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.671,
      height: 9.671
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.706 9.671 C -0.706 10.061 -0.39 10.377 0 10.377 C 0.39 10.377 0.706 10.061 0.706 9.671 L -0.706 9.671 Z M 0 0 L 0 -0.706 C -0.39 -0.706 -0.706 -0.39 -0.706 0 L 0 0 Z M 9.671 0.706 C 10.061 0.706 10.377 0.39 10.377 0 C 10.377 -0.39 10.061 -0.706 9.671 -0.706 L 9.671 0.706 Z M 0.706 9.671 L 0.706 0 L -0.706 0 L -0.706 9.671 L 0.706 9.671 Z M 0 0.706 L 9.671 0.706 L 9.671 -0.706 L 0 -0.706 L 0 0.706 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 22.600,
    height: 22.600,
    viewBox: "0 0 22.600 22.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.6,
      height: 22.6,
      opacity: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.942 L -0.942 -0.942 L -0.942 0 L 0 0 Z M 22.6 0 L 23.541 0 L 23.541 -0.942 L 22.6 -0.942 L 22.6 0 Z M 22.6 22.6 L 22.6 23.541 L 23.541 23.541 L 23.541 22.6 L 22.6 22.6 Z M 0 22.6 L -0.942 22.6 L -0.942 23.541 L 0 23.541 L 0 22.6 Z M 0 0.942 L 22.6 0.942 L 22.6 -0.942 L 0 -0.942 L 0 0.942 Z M 21.658 0 L 21.658 22.6 L 23.541 22.6 L 23.541 0 L 21.658 0 Z M 22.6 21.658 L 0 21.658 L 0 23.541 L 22.6 23.541 L 22.6 21.658 Z M 0.942 22.6 L 0.942 0 L -0.942 0 L -0.942 22.6 L 0.942 22.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { VuesaxLinearSend, __ds_default_components_VuesaxLinearSend_12ojoaj: VuesaxLinearSend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/VuesaxLinearSend.jsx", error: String((e && e.message) || e) }); }

// components/VuesaxLinearTask.jsx
try { (() => {
// figma node: 1:284 vuesax/linear/task
function VuesaxLinearTask(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 54,
      height: 54,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54,
      height: 54,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54,
      height: 54,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 2,
    viewBox: "0 -1 28 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 44,
      width: 28,
      height: 2,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 28 1 C 28.552 1 29 0.552 29 0 C 29 -0.552 28.552 -1 28 -1 L 28 1 Z M 0 1 L 28 1 L 28 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 2,
    viewBox: "0 -1 28 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 28,
      width: 28,
      height: 2,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 28 1 C 28.552 1 29 0.552 29 0 C 29 -0.552 28.552 -1 28 -1 L 28 1 Z M 0 1 L 28 1 L 28 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 2,
    viewBox: "0 -1 28 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 12,
      width: 28,
      height: 2,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 28 1 C 28.552 1 29 0.552 29 0 C 29 -0.552 28.552 -1 28 -1 L 28 1 Z M 0 1 L 28 1 L 28 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 6.750,
    viewBox: "0 0 9 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 7.875,
      width: 9,
      height: 6.75,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.817 -0.707 5.207 L 0.707 3.793 Z M 2.25 6.75 L 1.543 7.457 C 1.933 7.848 2.567 7.848 2.957 7.457 L 2.25 6.75 Z M 9.707 0.707 C 10.098 0.317 10.098 -0.317 9.707 -0.707 C 9.317 -1.098 8.683 -1.098 8.293 -0.707 L 9.707 0.707 Z M -0.707 5.207 L 1.543 7.457 L 2.957 6.043 L 0.707 3.793 L -0.707 5.207 Z M 2.957 7.457 L 9.707 0.707 L 8.293 -0.707 L 1.543 6.043 L 2.957 7.457 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 6.750,
    viewBox: "0 0 9 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 23.625,
      width: 9,
      height: 6.75,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.817 -0.707 5.207 L 0.707 3.793 Z M 2.25 6.75 L 1.543 7.457 C 1.933 7.848 2.567 7.848 2.957 7.457 L 2.25 6.75 Z M 9.707 0.707 C 10.098 0.317 10.098 -0.317 9.707 -0.707 C 9.317 -1.098 8.683 -1.098 8.293 -0.707 L 9.707 0.707 Z M -0.707 5.207 L 1.543 7.457 L 2.957 6.043 L 0.707 3.793 L -0.707 5.207 Z M 2.957 7.457 L 9.707 0.707 L 8.293 -0.707 L 1.543 6.043 L 2.957 7.457 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 6.750,
    viewBox: "0 0 9 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 39.375,
      width: 9,
      height: 6.75,
      color: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.817 -0.707 5.207 L 0.707 3.793 Z M 2.25 6.75 L 1.543 7.457 C 1.933 7.848 2.567 7.848 2.957 7.457 L 2.25 6.75 Z M 9.707 0.707 C 10.098 0.317 10.098 -0.317 9.707 -0.707 C 9.317 -1.098 8.683 -1.098 8.293 -0.707 L 9.707 0.707 Z M -0.707 5.207 L 1.543 7.457 L 2.957 6.043 L 0.707 3.793 L -0.707 5.207 Z M 2.957 7.457 L 9.707 0.707 L 8.293 -0.707 L 1.543 6.043 L 2.957 7.457 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { VuesaxLinearTask, __ds_default_components_VuesaxLinearTask_12okcsk: VuesaxLinearTask });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/VuesaxLinearTask.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.VuesaxLinearArrowRight = __ds_scope.VuesaxLinearArrowRight;

__ds_ns.VuesaxLinearSend = __ds_scope.VuesaxLinearSend;

__ds_ns.VuesaxLinearTask = __ds_scope.VuesaxLinearTask;

})();
