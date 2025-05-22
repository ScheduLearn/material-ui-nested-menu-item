"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_react = __toESM(require("react"));
var import_material = require("@mui/material");
var import_ArrowRight = __toESM(require("@mui/icons-material/ArrowRight"));
var import_ArrowLeft = __toESM(require("@mui/icons-material/ArrowLeft"));
var NestedMenuItem = import_react.default.forwardRef(function NestedMenuItem2(props, ref) {
  const {
    parentMenuOpen,
    component = "div",
    label,
    direction = "right",
    rightIcon = /* @__PURE__ */ import_react.default.createElement(import_ArrowRight.default, null),
    leftIcon = /* @__PURE__ */ import_react.default.createElement(import_ArrowLeft.default, null),
    children,
    className,
    tabIndex: tabIndexProp,
    MenuProps: MenuProps2 = {},
    ContainerProps: ContainerPropsProp = {},
    ...MenuItemProps2
  } = props;
  const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;
  const menuItemRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(ref, () => menuItemRef.current);
  const containerRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(containerRefProp, () => containerRef.current);
  const menuContainerRef = (0, import_react.useRef)(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = (0, import_react.useState)(false);
  const handleMouseEnter = (event) => {
    setIsSubMenuOpen(true);
    if (ContainerProps == null ? void 0 : ContainerProps.onMouseEnter) {
      ContainerProps.onMouseEnter(event);
    }
  };
  const handleMouseLeave = (event) => {
    setIsSubMenuOpen(false);
    if (ContainerProps == null ? void 0 : ContainerProps.onMouseLeave) {
      ContainerProps.onMouseLeave(event);
    }
  };
  const isSubmenuFocused = () => {
    var _a, _b, _c, _d;
    const active = (_b = (_a = containerRef.current) == null ? void 0 : _a.ownerDocument) == null ? void 0 : _b.activeElement;
    for (const child of (_d = (_c = menuContainerRef.current) == null ? void 0 : _c.children) != null ? _d : []) {
      if (child === active) {
        return true;
      }
    }
    return false;
  };
  const handleFocus = (event) => {
    if (event.target === containerRef.current) {
      setIsSubMenuOpen(true);
    }
    if (ContainerProps == null ? void 0 : ContainerProps.onFocus) {
      ContainerProps.onFocus(event);
    }
  };
  const handleKeyDown = (event) => {
    var _a, _b, _c, _d;
    if (event.key === "Escape") {
      return;
    }
    if (isSubmenuFocused()) {
      event.stopPropagation();
    }
    const active = (_b = (_a = containerRef.current) == null ? void 0 : _a.ownerDocument) == null ? void 0 : _b.activeElement;
    if (event.key === "ArrowLeft" && isSubmenuFocused()) {
      (_c = containerRef.current) == null ? void 0 : _c.focus();
    }
    if (event.key === "ArrowRight" && event.target === containerRef.current && event.target === active) {
      const firstChild = (_d = menuContainerRef.current) == null ? void 0 : _d.children[0];
      firstChild == null ? void 0 : firstChild.focus();
    }
  };
  const open = isSubMenuOpen && parentMenuOpen;
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  let iconStyle = {};
  let icon = rightIcon;
  if (direction == "left") {
    iconStyle = { position: "absolute", left: "-3px", top: "1px" };
    icon = leftIcon;
  }
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      ...ContainerProps,
      ref: containerRef,
      onFocus: handleFocus,
      tabIndex,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onKeyDown: handleKeyDown
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_material.MenuItem,
      {
        ...MenuItemProps2,
        sx: (theme) => ({
          backgroundColor: open ? theme.palette.action.hover : "transparent"
        }),
        className,
        ref: menuItemRef
      },
      label,
      /* @__PURE__ */ import_react.default.createElement("div", { style: iconStyle }, icon)
    ),
    /* @__PURE__ */ import_react.default.createElement(
      import_material.Menu,
      {
        style: { pointerEvents: "none" },
        anchorEl: menuItemRef.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: direction == "right" ? "right" : "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: direction == "right" ? "left" : "right"
        },
        open,
        autoFocus: false,
        disableAutoFocus: true,
        disableEnforceFocus: true,
        onClose: () => {
          setIsSubMenuOpen(false);
        }
      },
      /* @__PURE__ */ import_react.default.createElement("div", { ref: menuContainerRef, style: { pointerEvents: "auto" } }, children)
    )
  );
});
var index_default = NestedMenuItem;
