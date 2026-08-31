# Easy one using yield and Date

**Author:** gyanendra2058
**Votes:** 0
**Link:** [https://leetcode.com/problems/date-range-generator/solutions/4604012/](https://leetcode.com/problems/date-range-generator/solutions/4604012/)

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
```
function* dateRangeGenerator(start: string, end: string, step: number): Generator<string> {
    while (new Date(start).valueOf() <= new Date(end).valueOf()) {
        yield start;
        const nextDate = rangeGenerator(start, step);
        start = nextDate;
    }
};

function rangeGenerator(start: string, step: number): string {

    return new Date(new Date(start).valueOf() + step * 86400000).toISOString().split("T")[0]

}
```