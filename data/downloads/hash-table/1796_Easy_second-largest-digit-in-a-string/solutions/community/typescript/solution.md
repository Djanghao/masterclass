# Fast solution using 2 variables to hold the largest and second-largest digit

**Author:** mnjk
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/6048937/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/6048937/)

---

# Intuition

We'll split the string into single characters and remove all duplicates. The remaining characters will be filtered so that only digits are left that are than pushed into 2 variables that hold the largest and 2nd-largest digit.

# Approach

We'll use a `Set` to remove the duplicates and then filter and parse the digits. 
We'll use 2 variables `n0` and `n1` to hold the largest and 2n-largest digit respectively.

Each time we find a new largest digit, we'll push the digit that has been the largest up until now, to the variable `n1`.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```typescript []
function secondHighest(s: string): number {

  let n0 = -1; //     largest
  let n1 = -1; // 2nd-largest
  [...new Set(s.split('')).values()].filter(x => x >= '0' && x <= '9').map(x => parseInt(x)).forEach(x => {
    if (x > n1) {
      if (x > n0) {
        n1 = n0;
        n0 = x;
      } else {
        n1 = x;
      }
    }
  });

  if (n1 === n0) return -1;

  return n1;
};
```