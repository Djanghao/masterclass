# Solution Overview for Bulb State Problem

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/5745299/](https://leetcode.com/problems/bulb-switcher-ii/solutions/5745299/)

---

# Intuition
The problem involves toggling the state of bulbs using four different button presses. Each button affects the bulbs in specific ways. The goal is to determine the number of unique possible configurations of the bulbs after a given number of presses. Given the constraints, the behavior of the bulbs can be reduced to a manageable size by limiting n to at most 6 because the pattern of button effects repeats.

# Approach
1. **Reduction to Manageable Size:**
- The problem is simplified by reducing the number of bulbs to min(n, 6) since the bulb patterns repeat for `n > 6`.
2. **Handling Special Cases:**
- Depending on the number of presses and the number of bulbs, compute the number of unique bulb states:
- If no presses are made, the only state is the initial state.
- With one press, determine the possible distinct states based on n.
- For more presses, compute the number of distinct states based on the combinations of the button effects.
3. **Predefined Results:**
- Use predefined results for specific small values of n and presses. - These results cover various scenarios based on empirical or theoretical observations about bulb state changes.

# Complexity
- Time complexity:
    - **O(1):** The approach involves direct computation based on predefined results for small values of n and presses. There is no iteration or complex computation involved, making it constant time.

- Space complexity:
   - **O(1):** The space used is constant as we only store and compute a few values based on the input. There are no additional data structures or memory allocations required that scale with the input size.

# Code
```rust []
impl Solution {
    pub fn flip_lights(n: i32, presses: i32) -> i32 {
        // Limit n to 6, because for n > 6, the problem repeats
        let n = n.min(6);

        match (presses, n) {
            (0, _) => 1, // No presses means only the initial state
            (1, 1) => 2, // We can flip or not flip the only bulb
            (1, 2) => 3, // Three distinct states after 1 press for 2 bulbs
            (1, 3..=6) => 4, // Four distinct states after 1 press for 3+ bulbs
            (2, 1) => 2, // Two states are possible when there's 1 bulb and 2 presses
            (2, 2) => 4, // Four distinct states with 2 presses and 2 bulbs
            (2, 3..=6) => 7, // Seven distinct states with 2 presses and 3+ bulbs
            (_, 1) => 2, // With more presses but only 1 bulb, the two states are the same
            (_, 2) => 4, // With 2 bulbs, at most 4 unique states
            (_, 3..=6) => 8, // Eight distinct states after more presses with 3+ bulbs
            _ => 0, // Fallback case, although this should not occur
        }
    }
}

```