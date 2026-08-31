# Rust: Back-tracking

**Author:** seandewar
**Votes:** 5
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/1275432/](https://leetcode.com/problems/matchsticks-to-square/solutions/1275432/)

---

```rust
impl Solution {
    pub fn makesquare(mut matchsticks: Vec<i32>) -> bool {
        let perim: i32 = matchsticks.iter().sum();
        perim % 4 == 0 && Self::solve(&mut matchsticks[..], 0, 0, 1, perim / 4)
    }

    fn solve(sticks: &mut [i32], l: usize, len: i32, side: u8, max: i32) -> bool {
        side == 4
            || len == max && Self::solve(sticks, 0, 0, side + 1, max)
            || (l..sticks.len()).any(|i| {
                let stick = std::mem::take(&mut sticks[i]);
                let res = stick != 0 && Self::solve(sticks, i + 1, len + stick, side, max);
                sticks[i] = stick;
                res
            })
    }
}
```