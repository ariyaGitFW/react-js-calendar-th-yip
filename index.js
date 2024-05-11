import Calendar from "./dist/calendar/Calendar"; 
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Calendar
} = Calendar;

export {
  Calendar as default
}
