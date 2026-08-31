# Rust simple solution | DFS and Iterative

**Author:** pierrewang
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/2343171/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/2343171/)

---

**DFS**
```
use std::collections::HashMap;
impl Solution {
    fn depth_sum(nested_list: Vec<NestedInteger>, depth: i32, hm: &mut HashMap<i32, i32>) -> i32 {
        if nested_list.len() == 0 { return 0; }
        let mut max_depth = depth;
        for ni in nested_list {
            match ni {
                NestedInteger::Int(val) => { *hm.entry(depth).or_insert(0) += val; },
                NestedInteger::List(vec) => { max_depth = max_depth.max(Self::depth_sum(vec, depth + 1, hm)); }
            }
        }
        max_depth
    }
    pub fn depth_sum_inverse(nested_list: Vec<NestedInteger>) -> i32 {
        let mut hm = HashMap::new();
        let max_depth = Self::depth_sum(nested_list, 1, &mut hm);
        
        hm.into_iter().fold(0, |mut acc, (depth, val)| {
            acc += (max_depth - depth + 1) * val;
            acc
        })
    }
}
```

**Iterative Method with Queue**
```
use std::collections::VecDeque;
impl Solution {
    pub fn depth_sum_inverse(nested_list: Vec<NestedInteger>) -> i32 {
        let mut dq = VecDeque::new();
        let mut v = vec![];
        dq.push_back(NestedInteger::List(nested_list));
        while !dq.is_empty() {
            let mut sum = 0;
            for _ in 0..dq.len() {
                let ni = dq.pop_front().unwrap();
                match ni {
                    NestedInteger::Int(val) => { sum += val; },
                    NestedInteger::List(vec) => {
                        for nni in vec {
                            dq.push_back(nni);
                        }
                    }
                }
            }
            v.push(sum);
        }
        
        let md = v.len() - 1;
        v.into_iter().enumerate().map(|(idx, val)| (md - idx + 1) as i32 * val).sum()
    }
}
```