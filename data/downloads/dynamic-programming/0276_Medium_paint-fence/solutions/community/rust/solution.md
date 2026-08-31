# Top-down Rust solution (100%;100%)

**Author:** beingofhabits
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/4149762/](https://leetcode.com/problems/paint-fence/solutions/4149762/)

---

# Complexity
- Time complexity:
$$O(n \	imes k)$$

- Space complexity:
$$O(k)$$

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn num_ways(n: i32, k: i32) -> i32 {
        let mut memo = HashMap::new();

        Self::helper(n, k, &mut memo)
    }

    fn helper(n: i32, k: i32, memo: &mut HashMap<i32, i32>) -> i32 {
        if n == 1 {
            return k;
        }
        if n == 2 {
            return k * k;
        }

        if let Some(v) = memo.get(&n) {
            return *v;
        }

        let v = (k - 1) * (Self::helper(n - 1, k, memo) + Self::helper(n - 2, k, memo));
        memo.insert(n, v);
        return v;
    }
}
```