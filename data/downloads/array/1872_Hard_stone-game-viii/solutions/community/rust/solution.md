# Idiomatic Rust 2-liner O(n)

**Author:** kolhizin
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/3596946/](https://leetcode.com/problems/stone-game-viii/solutions/3596946/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
It is easy to note that first stone is just prefix sum of previous stones, regardless of choices. So our state is just index of "stone" we are at now.

Hence we denote Value function as solution at "k"-th stone and update happens as:
$$
V(k) = \\max_{m > k}(s_0 + .. + s_{k-1} + s_{k} + ... s_{m-1} - V(m))
$$
If we rewrite it as prefix sum it will be very easy to note optimization opportunity:
$$
V(k) = \\max_{m > k}(S(m-1) - V(m))
$$
At each "k" we are just adding new terms for this max. Hence we can use "running max", which is implemented as fold over range.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```
use std::cmp::max;

impl Solution {
    pub fn stone_game_viii(stones: Vec<i32>) -> i32 {
        let ps: Vec<i32> = stones.iter().scan(0, |s,v| {*s += v; Some(*s)}).collect();
        (1..(stones.len()-1)).rev().fold(ps[stones.len()-1], |vf, i| {max(vf, ps[i] - vf)})
    }
}

```