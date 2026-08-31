# rust in one line

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/5519403/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/5519403/)

---

# Intuition
Just calculte all rising edges.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn min_number_operations(target: Vec<i32>) -> i32 {
        target[0]+(1..target.len()).map(|i|(target[i]-target[i-1]).max(0)).sum::<i32>()
    }
}
```