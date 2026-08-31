# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/2570591/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/2570591/)

---

```
use std::collections::*;
fn helper(a:&Vec<char>, b:&Vec<char>) -> bool {
    let n = a.len();
    let m = b.len();
    let mut memo = vec![vec![0;m+1];n+1];

    for i in 0..n {
        for j in 0..m {
            if a[i] == b[j] {
                memo[i+1][j+1] = memo[i+1][j+1].max(memo[i][j] + 1);
            } else {
                memo[i+1][j+1] = memo[i+1][j].max(memo[i][j+1]);
            }
        }
    }
    memo[n][m] == n
}

impl Solution {
    pub fn find_lu_slength(strs: Vec<String>) -> i32 {
        let n = strs.len();
        let mut sets = vec![HashSet::new();n];

        for i in 0..n {
            let m = strs[i].len();
            for j in 0..m {
                for k in j..m {
                    sets[i].insert(strs[i][j..=k].chars().into_iter().collect::<Vec<char>>());
                }
            }
        }
        let strs = strs.into_iter().map(|v| v.chars().into_iter().collect::<Vec<char>>()).collect::<Vec<Vec<char>>>();
        let mut result = -1;
        for i in 0..n {
            for v in &sets[i] {
                let mut success = true;
                for j in 0..n {
                    if i == j { continue }
                    if helper(v, &strs[j]) {
                        success = false;
                        break
                    }
                }
                if success {
                    result = std::cmp::max(result, v.len() as i32);
                }
            }
        }

        result
    }
}
```