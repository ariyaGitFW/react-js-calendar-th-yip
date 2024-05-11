import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
export const CalendarPanel = React.forwardRef((props, ref) => {
  const createElement = () => {
    return /*#__PURE__*/React.createElement(CSSTransition, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      in: props.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: props.className,
      style: props.style,
      onClick: props.onClick,
      onMouseUp: props.onMouseUp
    }, props.children));
  };
  const element = createElement();
  return props.inline ? element : /*#__PURE__*/React.createElement(Portal, {
    element: element,
    appendTo: props.appendTo
  });
});
CalendarPanel.displayName = 'CalendarPanel';