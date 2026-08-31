# ☀️📅 Dates Without Formulas: A Simple Way to Count Days 📅☀️

**Author:** seba1337
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/5896196/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/5896196/)

---

# Intuition
When tasked with finding the number of days between two dates, the immediate thought is to convert each date into a numeric representation that makes it easy to compute the difference. This representation could be the total number of days from a reference point, such as January 1, 1970 (the Unix epoch). This allows us to leverage simple arithmetic to determine the difference between the two dates.
# Approach
To solve this problem, I adopted the following approach:

1. **Leap Year Check:** First, create a function to determine if a year is a leap year. This is essential because February has 29 days in leap years, impacting the total day count.

2. **Date Conversion:** Next, define a function to convert a date string in the format "YYYY-MM-DD" into the total number of days since a base date. The function will:
- Split the date string into year, month, and day components.
- Calculate the total number of days from all the previous years leading up to the given year.
Add the days from the months preceding the current month, adjusting for leap years when necessary.
- Finally, add the day component of the date.
3. **Calculating Difference:** Implement a function that takes two date strings, converts both to their respective day counts, and returns the absolute difference between them.

This approach effectively breaks the problem into manageable pieces while ensuring accuracy in handling varying month lengths and leap years.
# Complexity
Time complexity: \uD835\uDC42(\uD835\uDC5B) where \uD835\uDC5B is the number of years between the two dates. This accounts for iterating through the years to count days.

Space complexity: \uD835\uDC42(1) as we are using a constant amount of space for variables, regardless of the input size.
![image.png](./images/0.png)
# Code
```typescript []
const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const getDateDay = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);

    let days = 0;

    for (let i = 1970; i < year; i++) 
        days += isLeapYear(i) ? 366 : 365;

    for (let i = 1; i < month; i++) {
        if (i === 2 && isLeapYear(year)) days += 1;
        days += MONTH[i - 1];
    }

    return days + day;
};

function daysBetweenDates(date1: string, date2: string): number {
    return Math.abs(getDateDay(date2) - getDateDay(date1));
}
```
