# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/909647/](https://leetcode.com/problems/stone-game-iv/solutions/909647/)

---

```rust
impl Solution {
    pub fn winner_square_game(n: i32) -> bool {
        let mut v = vec![false; n as usize + 1];
        for i in 0..=n as usize {
            if !v[i] {
                (1..)
                    .map(|j| i + j * j)
                    .take_while(|&k| k <= n as usize)
                    .for_each(|k| v[k] = true);
            }
        }
        v[n as usize]
    }
}
```