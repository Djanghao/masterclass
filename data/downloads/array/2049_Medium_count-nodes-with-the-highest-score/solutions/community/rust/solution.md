# Rust topsort, O(n)

**Author:** S_T_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4979043/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4979043/)

---

```
use std::mem;
use std::cmp::*;
impl Solution {
    pub fn count_highest_score_nodes(parents: Vec<i32>) -> i32 {
        let n = parents.len();
        let mut incoming = vec![0u32; n];
        for p in parents[1..].iter().copied() {
            incoming[p as usize] += 1;
        }
        let mut sizes = vec![1u32; n];
        let mut worklist : Vec<i32> = Vec::new();
        for (i, inc) in incoming.iter().copied().enumerate() {
            if inc == 0 {
                worklist.push(i as i32);
            }
        }
        let mut topsort : Vec<u32> = Vec::with_capacity(n);
        let mut tmp = Vec::new();
        while &worklist != &[0] {
            while let Some(last) = worklist.pop() {
                let parent = parents[last as usize] as usize;
                incoming[parent] -= 1;
                if incoming[parent] == 0 {
                    tmp.push(parent as i32);
                }
                topsort.push(last as u32)
            }
            mem::swap(&mut tmp, &mut worklist);
        }
        topsort.push(0);
        for i in topsort[..n - 1].into_iter().copied() {
            sizes[parents[i as usize] as usize] += sizes[i as usize];
        }
        let mut scores : Vec<i64> = Vec::with_capacity(n);
        scores.push(1);
        for i in 1..n {
            scores.push((sizes[0] - sizes[i]) as i64);
        }
        for i in 1..n {
            scores[parents[i] as usize] *= sizes[i] as i64;
        }
        let maxi = scores.iter().copied().max().unwrap();
        return scores.into_iter().filter(|v| *v == maxi).count() as i32;
    }
}
```