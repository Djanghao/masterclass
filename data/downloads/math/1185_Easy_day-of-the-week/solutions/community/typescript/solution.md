# 📌Easy method | TS | JS

**Author:** Yadukrishnan_k
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/5969246/](https://leetcode.com/problems/day-of-the-week/solutions/5969246/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function dayOfTheWeek(day: number, month: number, year: number): string {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let cur = new Date(`${year}-${month}-${day}`).getDay()
    return days[cur]
};
```