# O(n) Javascript/Typescript Solution

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/3969451/](https://leetcode.com/problems/shifting-letters/solutions/3969451/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const shiftingLetters = (s: string, shifts: number[]): string => {
  let afterShift = "";
  let toShift = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    toShift += shifts[i];
    afterShift =
      String.fromCharCode(((s[i].charCodeAt(0) - 97 + toShift) % 26) + 97) +
      afterShift;
  }
  return afterShift;
};

```