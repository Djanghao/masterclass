# Rust backtracking solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/1238496/](https://leetcode.com/problems/n-queens-ii/solutions/1238496/)

---

```rust
impl Solution {
    pub fn total_n_queens(n: i32) -> i32 {
        let mut v = Vec::new();
        Self::backtrack(n, &mut v)
    }
    fn backtrack(n: i32, v: &mut Vec<i32>) -> i32 {
        if v.len() == n as usize {
            return 1;
        }
        let mut ret = 0;
        for i in 0..n {
            if v.iter()
                .enumerate()
                .any(|(j, &q)| q == i || (v.len() - j) as i32 == (q - i).abs())
            {
                continue;
            }
            v.push(i);
            ret += Self::backtrack(n, v);
            v.pop();
        }
        ret
    }
}
```