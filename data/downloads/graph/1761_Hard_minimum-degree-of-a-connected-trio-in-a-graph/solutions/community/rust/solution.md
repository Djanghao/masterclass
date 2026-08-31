# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/3209233/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/3209233/)

---

# Code
```
impl Solution {
    pub fn min_trio_degree(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut al = vec![vec![]; n + 1];
        let mut cnt = vec![0; n + 1];
        let mut res = std::i32::MAX;
        for e in edges.iter() {
            let t1 = e[0].min(e[1]) as usize;
            let t2 = e[0].max(e[1]) as usize;
            al[t1].push(t2);
            cnt[t1] += 1;
            cnt[t2] += 1;
        }
        for t1 in 1..=n {
            for &t2 in al[t1].iter() {
                for &t3 in al[t1].iter() {
                    if t2 < t3 && al[t2].contains(&t3) {
                        res = res.min(cnt[t1] + cnt[t2] + cnt[t3] - 6);
                    }
                }
            }
        }
        if res == std::i32::MAX {
            -1
        } else {
            res
        }
    }
}
```