# Rust with min heaps

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/5552495/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/5552495/)

---

# Approach
Follow the hints...

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

Where $$n$$ is number of **edges**. The maximum size of the heaps is 3, and values like $$O(log(3))$$ and $$O(3*3)$$ are treated as $$O(1)$$ here.

# Code
```
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn maximum_score(scores: Vec<i32>, edges: Vec<Vec<i32>>) -> i32 {
        let mut v_heap = vec![BinaryHeap::<(Reverse<i32>, usize)>::new(); scores.len()];
        for (a, b) in edges.iter().map(|v| (v[0] as usize, v[1] as usize)) {
            let s = scores[a] + scores[b];
            v_heap[a].push((Reverse(s), b));
            if v_heap[a].len() == 4 {
                v_heap[a].pop();
            }
            v_heap[b].push((Reverse(s), a));
            if v_heap[b].len() == 4 {
                v_heap[b].pop();
            }
        }

        let mut ans = -1;
        for (b, c) in edges.iter().map(|v| (v[0] as usize, v[1] as usize)) {
            for &(Reverse(s_ab), a) in v_heap[b].iter()
            .filter(|&&(_, a)| a != c) {
                for &(Reverse(s_cd), d) in v_heap[c].iter()
                .filter(|&&(_, d)| d != a && d != b) {
                    ans = ans.max(s_ab + s_cd);
                }
            }
        }
        ans
    }
}
```