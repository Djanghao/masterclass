# Reverse loop with mem::replace (Rust)

**Author:** nlavri
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3063864/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3063864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Go from the end. Replace items with a max value from the right side. Initial max is -1. Note that we need to save replaced element before replacing to compare it with current max val to get a new max value.
# Approach
<!-- Describe your approach to solving the problem. -->
Reverse iter over array. Use mem::replace to get the replaced value back and be able to compare it with current max to get a new max.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::mem;

impl Solution {
    pub fn replace_elements(arr: Vec<i32>) -> Vec<i32> {
        let mut arr = arr;
        let mut max_right = -1;
        for i in arr.iter_mut().rev() {
            max_right = max_right.max(mem::replace(i, max_right));
        }

        arr
    }
}
```