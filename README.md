
## react-js-calendar-th 🕘

This Calendar TH component  
```
npm install react-js-calendar-th
```

## Example 
```js
import { Calendar } from 'react-js-calendar-th';

const [date, setDate] = useState(null);

return (
    <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        locale="th"
        dateFormat = "dd/mm/yy"
    />
)

```
![PrimeReact Calendar](./images/ex1.png)
![PrimeReact Calendar](./images/ex2.png)

## Format 
