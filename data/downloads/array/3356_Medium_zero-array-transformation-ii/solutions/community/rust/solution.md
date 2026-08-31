# difference array + binary search

**Author:** fifthbeatles
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6106574/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6106574/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(q) * (n + q))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```rust []
use std::cmp::Ordering;

impl Solution {
    pub fn min_zero_array(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> i32 {
        let size = nums.len();
        let query_size = queries.len();
        let mut diff = vec![0; size + 1];
        // \u76F8\u5F53\u4E8E\u5728nums\u524D\u9762\u63D2\u5165\u4E86\u4E00\u4E2A0
        diff[0] = nums[0];
        for idx in 1..size {
            diff[idx] = nums[idx] - nums[idx - 1];
        }
        // \u76F8\u5F53\u4E8E\u5728nums\u540E\u9762\u63D2\u5165\u4E86\u4E00\u4E2A0
        diff[size] = 0 - nums[size - 1];
        let mut current_pos = 0;
        let pos = (0..=query_size)
            .collect::<Vec<_>>()
            .binary_search_by(|&idx| {
                if idx > current_pos {
                    while current_pos < idx {
                        let query = &queries[current_pos];
                        let decrement = query[2];
                        diff[query[0] as usize] -= decrement;
                        diff[query[1] as usize + 1] += decrement;
                        current_pos += 1;
                    }
                } else {
                    while current_pos > idx {
                        current_pos -= 1;
                        let query = &queries[current_pos];
                        let decrement = query[2];
                        diff[query[0] as usize] += decrement;
                        diff[query[1] as usize + 1] -= decrement;
                    }
                }
                let mut sum = 0;
                for &d in &diff {
                    sum += d;
                    if sum > 0 {
                        return Ordering::Less;
                    }
                }
                Ordering::Greater
            });
        match pos {
            Err(pos) => {
                if pos > query_size {
                    -1
                } else {
                    pos as i32
                }
            }
            Ok(_) => -1, // \u5E94\u8BE5\u662F\u8FDB\u4E0D\u5230\u8FD9\u91CC\u7684
        }
    }
}
```