
## react-js-calendar-th 🕘

This Calendar TH component  
```
npm install react-js-calendar-th
```

## Example 
```js
import { Calendar } from 'react-js-calendar-th';

//If you use primereact, there is no need import this css
import 'react-js-calendar-th/dist/css/Calendar.css'
import 'react-js-calendar-th/dist/css/main.css'

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

```js
<Calendar value={date} onChange={(e) => setDate(e.value)} locale="th" showButtonBar />
```
![PrimeReact Calendar](./images/ex3.png)

```js
<Calendar value={date} onChange={(e) => setDate(e.value)} locale="th" showButtonBar showIcon />
```
![PrimeReact Calendar](./images/ex4.png)

```js
<Calendar value={date} onChange={(e) => setDate(e.value)} locale="th" showButtonBar showIcon timeOnly />
```
![PrimeReact Calendar](./images/ex5.png)

```js
<Calendar value={date} onChange={(e) => setDate(e.value)} locale="th" showButtonBar showIcon timeOnly showHeaderTime />
```
![PrimeReact Calendar](./images/ex6.png)
