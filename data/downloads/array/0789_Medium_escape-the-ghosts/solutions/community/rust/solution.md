# Rust consice solution

**Author:** shuliang
**Votes:** 1
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/1418550/](https://leetcode.com/problems/escape-the-ghosts/solutions/1418550/)

---

If you want escape, you must reache the target before all the ghost, otherwise, the ghost will reache the target and wait to catch you. So all the distances of ghost to target must be longer than yours.
   
time: O(n) space: O(1)
```rust
    pub fn escape_ghosts(ghosts: Vec<Vec<i32>>, target: Vec<i32>) -> bool {
        // your distance to target
        let d = target[0].abs() + target[1].abs();
        ghosts
            .iter()
            .all(|g| (g[0] - target[0]).abs() + (g[1] - target[1]).abs() > d)
    }
```