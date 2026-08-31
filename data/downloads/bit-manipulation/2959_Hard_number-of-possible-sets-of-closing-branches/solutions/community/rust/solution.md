# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4400170/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4400170/)

---

```
impl Solution {
    pub fn number_of_sets(n: i32, max_distance: i32, roads: Vec<Vec<i32>>) -> i32 {
        let mut d = vec![vec![100000; n as usize]; n as usize];
        for r in &roads {
            d[r[0] as usize][r[1] as usize] = r[2].min(d[r[0] as usize][r[1] as usize]);
            d[r[1] as usize][r[0] as usize] = r[2].min(d[r[1] as usize][r[0] as usize]);
        }
        let comb = 1 << n;
        let mut res = 1;
        for mask in 1..comb {
            if Self::get_max_distance(mask, n, &d) <= max_distance {
                res += 1;
            }
        }
        res
    }

    fn get_max_distance(mask: i32, n: i32, d: &[Vec<i32>]) -> i32 {
        let mut res = 0;
        let mut d = d.to_owned();
        for k in 0..n {
            if mask & (1 << k) != 0 {
                for i in 0..n {
                    if i != k && mask & (1 << i) != 0 {
                        for j in 0..n {
                            if j != i && mask & (1 << j) != 0 {
                                d[i as usize][j as usize] =
                                    d[i as usize][j as usize].min(d[i as usize][k as usize] + d[k as usize][j as usize]);
                            }
                        }
                    }
                }
            }
        }
        for i in 0..n {
            if mask & (1 << i) != 0 {
                for j in (i + 1)..n {
                    if mask & (1 << j) != 0 {
                        res = res.max(d[i as usize][j as usize]);
                    }
                }
            }
        }
        res
    }
}

```