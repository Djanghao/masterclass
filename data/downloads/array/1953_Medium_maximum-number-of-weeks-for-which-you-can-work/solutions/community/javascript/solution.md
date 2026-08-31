# [JavaScript] 1953. Maximum Number of Weeks for Which You Can Work

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4361329/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4361329/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

```
take total of all elements, say sum
let max be max of all elements

if max is greater the rest of elemetns (sum - max)
  then we can start from max and pair with other elements
    it will be 2*other elements + 1 (because we started from max)
        = 2*rest + 1
else
  max is smaller than rest
    so each one pair up with each remaining other
       so it will be all of the elements
       = sum
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var numberOfWeeks = function (a) {
  const sum = a.reduce((total, ele) => total + ele, 0)
  const max = Math.max(...a)
  const rest = sum - max
  if (max > rest) {
    return 2 * rest + 1
  } else {
    return sum
  }
}

```