# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/3249944/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/3249944/)

---

# Code
```
impl Solution {
    pub fn maximal_path_quality(values: Vec<i32>, edges: Vec<Vec<i32>>, max_time: i32) -> i32 {
        fn dfs(
            al: &Vec<Vec<(usize, i32)>>,
            vis: &mut Vec<i32>,
            vals: &Vec<i32>,
            i: usize,
            time: i32,
            val: i32,
            max_val: &mut i32,
        ) -> i32 {
            vis[i] += 1;
            let val = val + if vis[i] == 1 { vals[i] } else { 0 };
            if i == 0 {
                *max_val = std::cmp::max(*max_val, val);
            }
            for (j, t) in &al[i] {
                if time - t >= 0 {
                    dfs(al, vis, vals, *j, time - t, val, max_val);
                }
            }
            vis[i] -= 1;
            *max_val
        }

        let mut max_val = 0;
        let mut al = vec![vec![]; values.len()];
        let mut vis = vec![0; values.len()];
        for e in edges {
            al[e[0] as usize].push((e[1] as usize, e[2]));
            al[e[1] as usize].push((e[0] as usize, e[2]));
        }
        dfs(&al, &mut vis, &values, 0, max_time, 0, &mut max_val)
    }
}
```