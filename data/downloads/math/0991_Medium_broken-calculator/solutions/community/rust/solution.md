# Rust, O(1) space and O(1) time, Explained

**Author:** nbdd0121
**Votes:** 10
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1874898/](https://leetcode.com/problems/broken-calculator/solutions/1874898/)

---

```rust
impl Solution {
    pub fn broken_calc(start_value: i32, target: i32) -> i32 {
        // Find the smallest number of doubling needed to get start_value > target.
        // * `(target - 1) / start_value` is the largest multiple of target that is less than start_value
        // * `31 - (...).leading_zeros()` is the flooring log2 of the value.
        // This gives the largest number of doubling possible before start_value > target.
        // Plus 1 to get the smallest number of doubling needed.
        let m = 32 - ((target - 1) / start_value).leading_zeros() as i32;
        // This is the "overshoot" by doubling, which we need to subtract away
        let diff = (start_value << m) - target;
        // Now we look at bits.
        // * If bit i is 1, then we can do a subtraction before the i-th doubling (counting from back)
        // * E.g. if bit 0 is 1, then we do a subtraction after all doublings
        // * If bit 1 is 1, then we do a subtraction before the last doubling
        // * If bit 2 is 1, then we do a subtraction before the last two doublings
        // * ...
        // * If bit m is 1, then we do a subtraction before the first doubling.
        // However if bit m+1 or higher is 1, then we can't go back further, so we need to subtract them from the start.
        // The `diff >> m` part accounts for this, and this is the doublings we need to do before doublings.
        // The `(diff & ((1 << m) - 1)).count_ones()` just counts the number of subtractions that we do in between or after all doublings.
        // Finally, add `m` which is the number of doubling operation, we get the final answer
        (diff >> m) + (diff & ((1 << m) - 1)).count_ones() as i32 + m
    }
}
```