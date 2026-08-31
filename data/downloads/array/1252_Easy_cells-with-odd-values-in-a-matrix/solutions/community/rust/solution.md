# Rust

**Author:** luckychacha
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/2885683/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/2885683/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 2 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn odd_cells(m: i32, n: i32, indices: Vec<Vec<i32>>) -> i32 {
        let (mut odd_row, mut odd_col) = (0u64, 0u64);
        indices.iter().for_each(|item| {
            odd_row ^= 1 << item.get(0).unwrap();
            odd_col ^= 1 << item.get(1).unwrap();
        });
        let odd_row_count = odd_row.count_ones() as i32;
        let odd_col_count = odd_col.count_ones() as i32;
        odd_row_count * n + odd_col_count * m - 2 * odd_row_count * odd_col_count
    }
}
```