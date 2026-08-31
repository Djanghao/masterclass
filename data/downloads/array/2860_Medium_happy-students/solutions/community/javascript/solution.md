# [JavaScript] 2860. Happy Students

**Author:** pgmreddy
**Votes:** 9
**Link:** [https://leetcode.com/problems/happy-students/solutions/4055050/](https://leetcode.com/problems/happy-students/solutions/4055050/)

---

---

Weekly Contest 363
- Q1. https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055060/javascript-2859-sum-of-values-at-indices-with-k-set-bits/
- Q2. See below

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
var countWays = function (a) {
  let n = a.length

  // sort nums[i]
  a.sort((a, b) => a - b)

  let happyCount = 0

  // CASE 1 - no one is selected

  // CASE 1A - selected till here - selected > nums[i]
  // nothing to do

  // CASE 1B - others are not selected (others are j = i+1, i+2....)
  // check only one j, as it is sorted increasing
  //    must be selected < nums[j]
  let isHappy = 0 < a[0]
  happyCount += isHappy

  // CASE 2 - one, two... are selected
  let selected = 0
  for (let i = 0; i < n; i++) {
    // CASE 2A - selected till here - selected > nums[i]
    selected++
    let isHappy = selected > a[i]

    // CASE 2B - others are not selected (others are j = i+1, i+2....)
    // check only one j, as it is sorted increasing
    //    must be selected < nums[j]
    let j = i + 1
    if (j < n && selected >= a[j]) {
      isHappy = false
    }

    happyCount += isHappy
  }
  return happyCount
}
```

---

Weekly Contest 363
- Q1. https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055060/javascript-2859-sum-of-values-at-indices-with-k-set-bits/
- Q2. See above

---
