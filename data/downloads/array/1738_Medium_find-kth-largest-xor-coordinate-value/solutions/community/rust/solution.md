# Find Kth Largest XOR Coordinate Value

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/6121716/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/6121716/)

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
```rust []
use std::collections::*;
use std::cmp::*;
impl Solution {
    pub fn kth_largest_value(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        let m = matrix.len();
        let n = matrix[0].len();
        let mut horizontal_prefix_sums = vec![0; m];
        let mut h = BinaryHeap::with_capacity(k as usize + 1);
        for j in 0..n {
            let mut prev_sum = 0;
            for i in 0..m {
                horizontal_prefix_sums[i] ^= matrix[i][j];
                let sum = horizontal_prefix_sums[i] ^ prev_sum;
                prev_sum = sum;
                h.push(Reverse(sum));
                if h.len() > k as usize {
                    h.pop();
                }
            }
        }
        return h.peek().unwrap().0;
    }
}
```