# My typescript solution

**Author:** RedMonkez
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/3346896/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/3346896/)

---

# Code
```
function numberOfDays(year: number, month: number): number {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const daysPerMonth = [
        31,
        28 + (isLeapYear ? 1 : 0),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    return daysPerMonth[month - 1];
};
```