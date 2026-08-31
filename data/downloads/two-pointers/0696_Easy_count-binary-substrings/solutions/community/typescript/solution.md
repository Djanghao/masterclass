# ✅🌵Easy Javascript/Typescript solution. Time: O(N), Space: O(1)

**Author:** alxn_tarasiuk
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/4357028/](https://leetcode.com/problems/count-binary-substrings/solutions/4357028/)

---

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countBinarySubstrings(s: string): number {
  let res = 0
  let prev = 0
  let cur = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      res += Math.min(prev, cur)
      prev = cur
      cur = 1
    } else {
      cur += 1
    }
  }

  return res + Math.min(prev, cur)
};
```