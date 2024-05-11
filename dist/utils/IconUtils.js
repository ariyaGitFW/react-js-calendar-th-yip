function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { classNames } from './ClassNames';
import ObjectUtils from './ObjectUtils';
export default class IconUtils {
  static getJSXIcon(icon, iconProps = {}, options = {}) {
    let content = null;
    if (icon !== null) {
      const iconType = typeof icon;
      const className = classNames(iconProps.className, iconType === 'string' && icon);
      content = /*#__PURE__*/React.createElement("span", _extends({}, iconProps, {
        className: className
      }));
      if (iconType !== 'string') {
        const defaultContentOptions = {
          iconProps: iconProps,
          element: content,
          ...options
        };
        return ObjectUtils.getJSXElement(icon, defaultContentOptions);
      }
    }
    return content;
  }
}