# Simple JavaScript / TypeScript Solution

**Author:** eddyhdzg
**Votes:** 5
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/1763914/](https://leetcode.com/problems/permutation-in-string/solutions/1763914/)

---

Explanation
1. First genereate chars array
2. Fill characters array
3. Loop by decrementing current char and incrementing past character.
4. Check if chars array are all 0s.

```
var checkInclusion = function (s1, s2) {
  const chars = new Array(26).fill(0);

  const isPermutation = () => chars.every((char) => char === 0);

  for (const char of s1) {
    chars[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    chars[s2[i].charCodeAt(0) - 97]--;

    if (i >= s1.length) {
      chars[s2[i - s1.length].charCodeAt(0) - 97]++;
    }

    if (isPermutation()) return true;
  }

  return false;
};
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
