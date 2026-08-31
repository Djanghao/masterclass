# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/3181795/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/3181795/)

---

# Code
```
impl Solution {
    pub fn count_subgraphs_for_each_diameter(n: i32, edges: Vec<Vec<i32>>) -> Vec<i32> {
        let mut g = vec![vec![999; n as usize]; n as usize];
        for e in edges.iter() {
            let i = (e[0] - 1) as usize;
            let j = (e[1] - 1) as usize;
            g[i][j] = 1;
            g[j][i] = 1;
        }
        for k in 0..n as usize {
            for i in 0..n as usize {
                for j in 0..n as usize {
                    g[i][j] = g[i][j].min(g[i][k] + g[k][j]);
                }
            }
        }
        let mut ans = vec![0; n as usize - 1];
        for s in 0_i32..(1 << n) {
            let k = s.count_ones() as i32;
            let (mut e, mut d) = (0_i32, 0_i32);
            for (i, item) in g.iter().enumerate().take(n as usize) {
                if s & (1 << i) != 0 {
                    for (j, &item_j) in item.iter().enumerate().take(n as usize).skip(i + 1) {
                        if s & (1 << j) != 0 {
                            e += i32::from(g[i][j] == 1);
                            d = d.max(item_j);
                        }
                    }
                }
            }
            if e == k - 1 && d > 0 {
                ans[(d - 1) as usize] += 1;
            }
        }

        ans
    }
}
```