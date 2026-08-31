# Greedy and elegant

**Author:** jdh863
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5508229/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5508229/)

---

# Intuition
The greedy algorithm always makes a valid solution.

1. It does not invalidate any invariant during matrix construction.
2. It is going to consume all the sums if there is a solution.

# Approach
Greedily make every element of the matrix

# Complexity
- Time complexity: $$O(mn)$$

- Space complexity: $$O(1)$$ not counting the result

# Code
```
impl Solution {
    pub fn restore_matrix(mut row_sum: Vec<i32>, mut col_sum: Vec<i32>) -> Vec<Vec<i32>> {
        (0..row_sum.len()).map(|i| {
            (0..col_sum.len()).map(|j| {
                let element = row_sum[i].min(col_sum[j]);
                row_sum[i] -= element;
                col_sum[j] -= element;
                element
            }).collect()
        }).collect()
    }
}
```