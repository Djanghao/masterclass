# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4252142/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4252142/)

---


```
impl Solution {
    pub fn maximum_score_after_operations(edges: Vec<Vec<i32>>, values: Vec<i32>) -> i64 {
        let values = values.iter().map(|&v| v as i64).collect::<Vec<_>>();
        let mut al = vec![vec![]; values.len()];
        for e in edges {
            al[e[0] as usize].push(e[1] as i64);
            al[e[1] as usize].push(e[0] as i64);
        }
        let (_, healthy) = Self::dfs(0, -1, &al, &values);
        healthy
    }

    fn dfs(i: i64, p: i64, al: &Vec<Vec<i64>>, val: &Vec<i64>) -> (i64, i64) {
        let i = i as usize;
        let mut all = 0;
        let mut healthy = -val[i];
        for &j in al[i].iter() {
            if j != p {
                let (all_j, healthy_j) = Self::dfs(j, i as i64, al, val);
                all += all_j;
                healthy = healthy.max(0) + healthy_j;
            }
        }
        (all + val[i] as i64, all.max(healthy + val[i] as i64))
    }
}
```