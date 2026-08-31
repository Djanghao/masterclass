# O(n) Javascript/Typescript Solution (beats 100%)

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/3969482/](https://leetcode.com/problems/shifting-letters-ii/solutions/3969482/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const shiftingLetters = (s: string, shifts: number[][]): string => {
  const shiftTracker = new Array(s.length + 1).fill(0);

  for (const [start, end, direction] of shifts) {
    const amount = direction ? 1 : -1;
    shiftTracker[start] += amount;
    shiftTracker[end + 1] -= amount;
  }

  let afterShift = "";
  let toShift = 0;
  for (let i = 0; i < s.length; i++) {
    toShift += shiftTracker[i];
    const letterNum = (s[i].charCodeAt(0) - 97 + toShift) % 26;
    afterShift += String.fromCharCode(letterNum + (letterNum < 0 ? 123 : 97));
  }

  return afterShift;
};

```