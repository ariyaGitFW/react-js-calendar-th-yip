function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { NullString } from "utility-fns";
import { Calendar } from "./calendar/Calendar";
const Calendars = ({
  id,
  name,
  onChange,
  value,
  yearRange = "2019:2030",
  maxDate = null,
  minDate = null,
  showTime,
  showSeconds = false,
  view = undefined,
  dateFormat = "dd/mm/yy",
  disabled = false,
  inputClassName,
  className,
  placeholder,
  baseZIndex,
  locale = "th",
  timeOnly,
  showButtonBar = true,
  showHeaderTime = true,
  setAlert: undefined
}) => {
  const onValidateDate = e => {
    if (e && NullString(e.value) !== "") {
      let check = true,
        val = "";
      if (NullString(minDate) !== "") {
        check = e.value - minDate >= 0;
        val = minDate;
      }
      if (NullString(maxDate) !== "") {
        check = maxDate - e.value >= 0;
        val = maxDate;
      }
      if (check) {
        onChange(e);
      } else {
        let event = {
          target: {
            id,
            value: val
          }
        };
        onChange(event);
        if (setAlert) setAlert({
          type: "error",
          text: "ระบุช่วงวันที่ไม่ถูกต้อง !"
        });
      }
    } else {
      onChange(e);
    }
  };
  return /*#__PURE__*/React.createElement(Calendar, _extends({
    id: id,
    name: name
  }, view ? {
    view
  } : "", {
    inputClassName: inputClassName,
    className: className,
    onChange: onValidateDate,
    value: value || null,
    yearRange: yearRange,
    dateFormat: dateFormat,
    showIcon: true,
    showTime: showTime,
    locale: locale,
    showButtonBar: showButtonBar,
    appendTo: document.body,
    baseZIndex: baseZIndex,
    maxDate: maxDate,
    minDate: minDate,
    showSeconds: showSeconds,
    disabled: disabled,
    timeOnly: timeOnly,
    placeholder: placeholder,
    showHeaderTime: showHeaderTime
  }));
};
export default Calendars;