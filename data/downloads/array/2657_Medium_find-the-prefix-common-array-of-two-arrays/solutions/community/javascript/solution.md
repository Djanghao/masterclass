# ✅🌵Easy Javascript solution (Map). Time: O(n), Space O(n)

**Author:** alxn_tarasiuk
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4334194/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4334194/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const res = []
  const set = new Set()

  let count = 0

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) count++
    if (set.has(B[i])) count++
    if (A[i] === B[i]) count++
    set.add(A[i])
    set.add(B[i])
    res.push(count)
  }

  return res
};
```