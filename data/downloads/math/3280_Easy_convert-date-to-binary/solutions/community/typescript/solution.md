# 1 line TS solution

**Author:** maximbazadji
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6126248/](https://leetcode.com/problems/convert-date-to-binary/solutions/6126248/)

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
function convertDateToBinary(date: string): string {
    return date.split('-').map(d => toBinary(d)).join('-');
};

function toBinary(n: string) {
     return Number(n).toString(2);
}
```