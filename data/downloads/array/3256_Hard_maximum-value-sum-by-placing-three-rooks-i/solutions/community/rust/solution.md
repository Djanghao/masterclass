# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5806600/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5806600/)

---

# Complexity
- Time complexity: O(m<sup>3</sup>)

- Space complexity: O(m)

# Code
```rust []
impl Solution {
    pub fn maximum_value_sum(board: Vec<Vec<i32>>) -> i64 {
        let m = board.len();
        let mut max_values = vec![vec![(std::i32::MIN, 0); 3]; m];

        // Collect top 3 values and their indices for each row
        for (row_index, row) in board.iter().enumerate() {
            for (col_index, &value) in row.iter().enumerate() {
                if value > max_values[row_index][2].0 {
                    max_values[row_index][2] = (value, col_index);
                    max_values[row_index].sort_by(|a, b| b.0.cmp(&a.0)); // Sort to keep the top 3
                }
            }
        }

        let mut result = std::i64::MIN;

        // Iterate through unique triplets of rows
        for i in 0..m {
            for j in (i + 1)..m {
                for k in (j + 1)..m {
                    let row_i = &max_values[i];
                    let row_j = &max_values[j];
                    let row_k = &max_values[k];

                    // Calculate maximum value sums, ensuring indices do not overlap
                    for a in 0..3 {
                        for b in 0..3 {
                            for c in 0..3 {
                                if row_i[a].1 != row_j[b].1 && row_i[a].1 != row_k[c].1 && row_j[b].1 != row_k[c].1 {
                                    result = result.max(row_i[a].0 as i64 + row_j[b].0 as i64 + row_k[c].0 as i64);
                                }
                            }
                        }
                    }
                }
            }
        }

        result
    }
}

```