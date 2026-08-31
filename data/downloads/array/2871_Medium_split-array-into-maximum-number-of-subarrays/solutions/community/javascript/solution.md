# 2871. Split Array Into Maximum Number of Subarrays

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4668811/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4668811/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

Understanding below test cases is half the answer:
```
series          ans 
[1,0,  1,0,1,1  ]	2 <---------- important - maximize (0 AND) subarrays
[1,0,  2,0,  1,2]	3 <---------- important - maximize (0 AND) subarrays

[1,0,  1,0,  1,0]	3
[1,2,  1,2,  1,2]	3
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

```
var maxSubarrays = function (a) {
  const MAX_ALL_ONES_IN_BINARY_FORM = 2 ** 32 - 1;
  let count = 0;
  let andValue = MAX_ALL_ONES_IN_BINARY_FORM;
  for (const e of a) {
    andValue = andValue & e;
    if (andValue === 0) {
      count++;
      andValue = MAX_ALL_ONES_IN_BINARY_FORM;
    }
  }
  if (a.length > 0) {
    if (count === 0) {
      count = 1;
    }
  }
  return count;
};
```

---
