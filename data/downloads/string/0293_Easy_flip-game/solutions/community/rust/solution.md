# Rust, One pass, 0ms

**Author:** kitsonr
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4739075/](https://leetcode.com/problems/flip-game/solutions/4739075/)

---

# Code
```
impl Solution {
    pub fn generate_possible_next_moves(current_state: String) -> Vec<String> {
        let mut res = Vec::new();
        for i in 0..current_state.len() - 1 {
            let s = &current_state[i..i + 2];
            if s == "++" {
                res.push(format!("{}{}{}", &current_state[..i], "--", &current_state[i + 2..]));
            }
        }
        res
    }
}

```