# Rust, O(n)

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3620072/](https://leetcode.com/problems/game-of-nim/solutions/3620072/)

---

# Intuition
This is a standard problem in game theory. https://en.wikipedia.org/wiki/Nim

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
impl Solution {
  pub fn nim_game(piles: Vec<i32>) -> bool {
    let mut res = 0;
    for v in piles {
      res ^= v;
    }
    return res > 0;
  }
}
```