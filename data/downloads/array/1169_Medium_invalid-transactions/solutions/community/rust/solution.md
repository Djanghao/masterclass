# [Rust] - Forgive me

**Author:** frolik
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/5064230/](https://leetcode.com/problems/invalid-transactions/solutions/5064230/)

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
```
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn invalid_transactions(transactions: Vec<String>) -> Vec<String> {
        let mut invalid = HashSet::new();
        let mut map = HashMap::new();

        for (i, t) in transactions.iter().enumerate() {
            let parsed = t.split(',').map(|s| s.to_string()).collect::<Vec<_>>();

            if parsed[2].parse::<usize>().unwrap() > 1000 {
                invalid.insert((i, t.clone()));
            }
            map.entry(parsed[0].clone()).or_insert(Vec::new()).push((
                parsed[1].parse::<usize>().unwrap(),
                parsed[3].clone(),
                (i, t.clone()),
            ));
        }

        for v in map.values() {
            let mut vec = v.clone();
            vec.sort_unstable();

            'outer: for i in 0..vec.len() {
                for j in i + 1..vec.len() {
                    if vec[i].1 != vec[j].1 && vec[j].0 - vec[i].0 <= 60 {
                        invalid.insert(vec[i].2.clone());
                        invalid.insert(vec[j].2.clone());
                    }
                }
            }
        }

        invalid.into_iter().map(|x| x.1).collect()
    }
}

```