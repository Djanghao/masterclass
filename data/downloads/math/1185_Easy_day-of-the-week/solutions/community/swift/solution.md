# Swift solution using built-in Foundation classes

**Author:** nfgabor
**Votes:** 1
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/1667328/](https://leetcode.com/problems/day-of-the-week/solutions/1667328/)

---

```
/* Create a Date from the components */
let date = DateComponents(calendar: Calendar.current, year: year, month: month, day: day).date!
// Create a formatter
let dateFormatter = DateFormatter()
// Set the format to the wide name of the day of the week
dateFormatter.dateFormat = "EEEE"
// Return the string
return dateFormatter.string(from: date)
```