// src/index.tsx
import React, { useState, useRef, useImperativeHandle } from "react";
import { Menu, MenuItem } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
var NestedMenuItem = React.forwardRef(function NestedMenuItem2(props, ref) {
  const {
    parentMenuOpen,
    component = "div",
    label,
    direction = "right",
    rightIcon = /* @__PURE__ */ React.createElement(ArrowRight, null),
    leftIcon = /* @__PURE__ */ React.createElement(ArrowLeft, null),
    children,
    className,
    tabIndex: tabIndexProp,
    MenuProps: MenuProps2 = {},
    ContainerProps: ContainerPropsProp = {},
    ...MenuItemProps2
  } = props;
  const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;
  const menuItemRef = useRef(null);
  useImperativeHandle(ref, () => menuItemRef.current);
  const containerRef = useRef(null);
  useImperativeHandle(containerRefProp, () => containerRef.current);
  const menuContainerRef = useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
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
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(
      MenuItem,
      {
        ...MenuItemProps2,
        sx: (theme) => ({
          backgroundColor: open ? theme.palette.action.hover : "transparent"
        }),
        className,
        ref: menuItemRef
      },
      label,
      /* @__PURE__ */ React.createElement("div", { style: iconStyle }, icon)
    ),
    /* @__PURE__ */ React.createElement(
      Menu,
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
      /* @__PURE__ */ React.createElement("div", { ref: menuContainerRef, style: { pointerEvents: "auto" } }, children)
    )
  );
});
var index_default = NestedMenuItem;
export {
  index_default as default
};
