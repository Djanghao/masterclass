# JS Easy Solution

**Author:** hbjORbj
**Votes:** 14
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/712297/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/712297/)

---

```
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = (date1, date2) => {
    const millisecondsInADay = 1000*60*60*24;    
    return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInADay);
}
```