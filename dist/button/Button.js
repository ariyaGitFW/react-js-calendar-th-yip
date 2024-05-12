function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
export const Button = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef((props, ref) => {
  const elementRef = React.useRef(ref);
  React.useEffect(() => {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  if (!props.visible) {
    return null;
  }
  const createIcon = () => {
    const icon = props.loading ? props.loadingIcon : props.icon;
    const iconClass = classNames('p-button-icon p-c', {
      'p-button-loading-icon': props.loading,
      [`p-button-icon-${props.iconPos}`]: props.label
    });
    return IconUtils.getJSXIcon(icon, {
      className: iconClass
    }, {
      props
    });
  };
  const createLabel = () => props.label ? /*#__PURE__*/React.createElement("span", {
    className: "p-button-label p-c"
  }, props.label) : !props.children && !props.label && /*#__PURE__*/React.createElement("span", {
    className: "p-button-label p-c",
    dangerouslySetInnerHTML: {
      __html: '&nbsp;'
    }
  });
  const createBadge = () => {
    if (props.badge) {
      const badgeClass = classNames('p-badge', props.badgeClassName);
      return /*#__PURE__*/React.createElement("span", {
        className: badgeClass
      }, props.badge);
    }
    return null;
  };
  const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  const isDisabled = props.disabled || props.loading;
  const otherProps = ObjectUtils.findDiffKeys(props, Button.defaultProps);
  const buttonClass = classNames('p-button p-component', props.className, {
    'p-button-icon-only': (props.icon || props.loading && props.loadingIcon) && !props.label && !props.children,
    'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
    'p-disabled': isDisabled,
    'p-button-loading': props.loading,
    'p-button-loading-label-only': props.loading && !props.icon && props.label,
    [`p-button-loading-${props.iconPos}`]: props.loading && props.loadingIcon && props.label
  });
  const icon = createIcon();
  const label = createLabel();
  const badge = createBadge();
  const defaultAriaLabel = props.label ? `${props.label}${props.badge ? ' ' + props.badge : ''}` : props['aria-label'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", _extends({
    ref: elementRef,
    "aria-label": defaultAriaLabel
  }, otherProps, {
    className: buttonClass,
    disabled: isDisabled
  }), icon, label, props.children, badge, /*#__PURE__*/React.createElement(Ripple, null)), hasTooltip && /*#__PURE__*/React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
Button.displayName = 'Button';
Button.defaultProps = {
  __TYPE: 'Button',
  label: null,
  icon: null,
  iconPos: 'left',
  badge: null,
  badgeClassName: null,
  tooltip: null,
  tooltipOptions: null,
  disabled: false,
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin',
  visible: true
};