# Rust beat 100%

**Author:** qWesTion
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5609581/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5609581/)

---

# Intuition
Greedy, keep cutting most expensively.

# Approach
- Merge and sort `horizontal_cut` and `vertical_cut`.
- Start adding cuts to result from most expensive cuts, if it's vertical, we need one more cut next time we cut horizontally and vice versa.
- 

# Complexity
- Time complexity:
O((m + n)log(m + n)) due to sorting

- Space complexity:
O(m + n)

# Code
```
use std::cmp::min;

impl Solution {
    pub fn minimum_cost(m: i32, n: i32, horizontal_cut: Vec<i32>, vertical_cut: Vec<i32>) -> i32 {
        let mut cuts = horizontal_cut
            .into_iter()
            .map(|cut| (true, cut))
            .chain(vertical_cut.into_iter().map(|cut| (false, cut)))
            .collect::<Vec<(bool, i32)>>();

        cuts.sort_by_key(|(_, cut)| cut.clone());
        cuts.reverse();

        let mut res = 0;
        let (mut cut_h, mut cut_v) = (1, 1);
        for (is_horizontal, cut) in cuts {
            if is_horizontal {
                res += cut * cut_h;
                cut_v += 1;
            } else {
                res += cut * cut_v;
                cut_h += 1;
            }
        }

        res
    }
}
```