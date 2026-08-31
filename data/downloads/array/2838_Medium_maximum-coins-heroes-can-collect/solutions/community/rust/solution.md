# Rust solution!

**Author:** sunjesse
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5886983/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5886983/)

---

# Code
```rust []
impl Solution {
    pub fn maximum_coins(heroes: Vec<i32>, monsters: Vec<i32>, coins: Vec<i32>) -> Vec<i64> {
        let mut l: Vec<_> = monsters.into_iter().zip(coins.into_iter()).collect();
        l.sort_by(|a, b| a.0.cmp(&b.0));
        
        let mut pre: Vec<i64> = vec![0; l.len() + 1];
        for (i, (m, c))in l.iter().enumerate() {
            pre[i+1] = pre[i] + l[i].1 as i64;
        }
        let mut ans: Vec<i64> = vec![0; heroes.len()];
        let mut idx = 0;
        for i in 0..heroes.len() {
            idx = l.binary_search_by(|probe| probe.0.cmp(&heroes[i])).map_or_else(|j| j, |j| j + 1);
            while idx < l.len()-1 && l[idx].0 <= heroes[i] { idx += 1; }
            ans[i] = pre[idx];
        }
        ans
    }
}
```