# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5995182/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5995182/)

---

# Intuition
To solve the problem, we want to count how many times we can perform an operation defined by the presence of '1's followed by '0's in the given string. The key observation is that for each '0' that follows a '1', we can add to our operation count based on how many '1's we've seen up to that point.

# Approach
*   Iterate through the string: We'll start from the second character and check the previous character.
*   Count '1's: Maintain a count of how many '1's we've encountered as we traverse the string.
*   Count operations: For each '0' that follows a '1', we can add the current count of '1's to our total operations.
*   Return the total count: After processing the string, we'll return the total number of operations.



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn max_operations(s: String) -> i32 {
        (1..s.len()).fold((0, 0), |(count, j), i| {
            let j = if s.as_bytes()[i - 1] == b'1' { j + 1 } else { j };
            (count + if s.as_bytes()[i - 1] == b'1' && s.as_bytes()[i] == b'0' { j } else { 0 }, j)
        }).0
    }
}

```