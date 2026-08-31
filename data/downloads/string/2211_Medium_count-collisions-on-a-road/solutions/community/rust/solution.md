# Rust One-Liner (5ms 100% Runtime 100% Memory)

**Author:** Rusuban
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/3097604/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/3097604/)

---

# Intuition
All the cars in the middle will eventually collide. Could improve on this more by operating on a byte array instead of a char array (char != ASCII in Rust).

# Code
```
impl Solution {
    pub fn count_collisions(directions: String) -> i32 {
        directions.trim_start_matches('L').trim_end_matches('R').chars().filter(|c| *c != 'S').count() as i32
    }
}
```