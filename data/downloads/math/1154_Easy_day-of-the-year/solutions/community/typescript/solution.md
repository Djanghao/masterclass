# Calculate Day of Year from Date String

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/5390069/](https://leetcode.com/problems/day-of-the-year/solutions/5390069/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I parsed the input date string into year, month, and day components. Using these components, I created two Date objects: one representing January 1st of the same year and another representing the input date. By calculating the difference in milliseconds between these two dates and converting this difference into days, I obtained the day of the year.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function dayOfYear(date: string): number {
    const jan1 = new Date(Number(date.split("-")[0]), 0, 0);
    const jan2day = new Date(
      Number(date.split("-")[0]),
      Number(date.split("-")[1]) - 1,
      Number(date.split("-")[2])
    );

    const diff = Math.abs(jan1.getTime() - jan2day.getTime());

    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
};
```