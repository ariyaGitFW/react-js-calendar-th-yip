function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
export const InputText = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef((props, ref) => {
  const elementRef = React.useRef(ref);
  const onKeyDown = event => {
    props.onKeyDown && props.onKeyDown(event);
    if (props.keyfilter) {
      KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };
  const onInput = event => {
    let validatePattern = true;
    if (props.keyfilter && props.validateOnly) {
      validatePattern = KeyFilter.validate(event, props.keyfilter);
    }
    props.onInput && props.onInput(event, validatePattern);
    if (!props.onChange) {
      const target = event.target;
      ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, 'p-filled') : DomHandler.removeClass(target, 'p-filled');
    }
  };
  const onPaste = event => {
    props.onPaste && props.onPaste(event);
    if (props.keyfilter) {
      KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };
  const currentValue = elementRef.current && elementRef.current.value;
  const isFilled = React.useMemo(() => ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || ObjectUtils.isNotEmpty(currentValue), [props.value, props.defaultValue, currentValue]);
  React.useEffect(() => {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  const otherProps = ObjectUtils.findDiffKeys(props, InputText.defaultProps);
  const className = classNames('p-inputtext p-component', {
    'p-disabled': props.disabled,
    'p-filled': isFilled
  }, props.className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
    ref: elementRef
  }, otherProps, {
    className: className,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onPaste: onPaste
  })), hasTooltip && /*#__PURE__*/React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
InputText.displayName = 'InputText';
InputText.defaultProps = {
  __TYPE: 'InputText',
  keyfilter: null,
  validateOnly: false,
  tooltip: null,
  tooltipOptions: null,
  onInput: null,
  onKeyDown: null,
  onPaste: null
};