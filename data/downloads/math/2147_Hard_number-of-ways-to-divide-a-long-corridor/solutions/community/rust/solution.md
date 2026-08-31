# Rust Dynamic programming one-liner

**Author:** chris-ha458
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337340/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337340/)

---

# Intuition
Classic problems of counting something - possibly paths or arrangements - within a given constraint, are often a sweet spot for dynamic programming.

# Approach
Here I use the wonderful rust `fold` `match` and pattern matching

# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
 $$O(1)$$

# Code
```
impl Solution {
    pub fn number_of_ways(corridor: String) -> i32 {
    // Use fold to accumulate while iterating over 'corridor'
    // The fold starts with (0, 0, 1) and updates it for each char

    corridor.chars().fold((0, 0, 1), |state, thing| {
        match thing {
            // If the character is 'S', update the based on current state
            'S' => (state.1, state.2, state.1),
            // For any other character, update the last element of the tuple
            _ => (state.0, state.1, (state.2 + state.0) % 1_000_000_007),
        }
    }).0
}


}
```