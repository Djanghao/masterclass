# Rust

**Author:** unknown-
**Votes:** 2
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702249/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702249/)

---

```
impl Solution {
    pub fn distribute_cookies(cookies: Vec<i32>, k: i32) -> i32 {
        let mut a = vec![0; k as usize];
        Self::dfs(&cookies, &mut a, 0)
    }

    fn dfs(cookies: &[i32], a: &mut [i32], i: usize) -> i32 {
        if i == cookies.len() {
            return *a.iter().max().unwrap();
        }

        let mut t = i32::MAX;
        for j in 0..a.len() {
            a[j] += cookies[i];
            t = t.min(Self::dfs(cookies, a, i + 1));
            a[j] -= cookies[i];
        }
        t
    }
}
```