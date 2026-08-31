# Rust O(n)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3021774/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3021774/)

---

```
impl Solution {
    pub fn min_cost(start_pos: Vec<i32>, home_pos: Vec<i32>, row_costs: Vec<i32>, col_costs: Vec<i32>) -> i32 {
        let mut res = 0;
        let (mut cur_row_idx, mut cur_col_idx) = (start_pos[0], start_pos[1]);
        let (home_row_idx, home_col_idx) = (home_pos[0], home_pos[1]);
        while (cur_row_idx != home_row_idx) {
            cur_row_idx += match home_row_idx > cur_row_idx {
                true => 1,
                _ => -1,
            };
            res += row_costs[cur_row_idx as usize];
        }
        while (cur_col_idx != home_col_idx) {
            cur_col_idx += match home_col_idx > cur_col_idx {
                true => 1,
                _ => -1,
            };
            res += col_costs[cur_col_idx as usize];
        }
        res
    }
}

```

TESTED

```
  Accepted
  69/69 cases passed (19 ms)
  Your runtime beats 100 % of rust submissions
  Your memory usage beats 100 % of rust submissions (3.4 MB)
```