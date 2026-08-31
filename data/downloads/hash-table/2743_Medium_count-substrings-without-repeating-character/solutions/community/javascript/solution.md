# Javascript - Sliding Window + HashSet

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3667403/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3667403/)

---

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSpecialSubstrings = function (s) {
  let ans = 0;
  let start = 0;
  const set = new Set([]);

  for (let end = 0; end < s.length; end++) {
    const curr = s[end];
    while (set.has(curr)) {
      const charBefore = s[start];
      set.delete(charBefore);
      start++;
    }

    set.add(curr);
    ans += set.size;
  }

  return ans;
};

```