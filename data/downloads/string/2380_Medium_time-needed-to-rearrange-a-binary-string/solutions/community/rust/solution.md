# 💥💥 Runtime and memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/5717503/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/5717503/)

---

# Intuition
We need to find how many seconds it takes to remove all "01" substrings from a binary string. Each second, "01" becomes "10". The key idea is to track how many '0's must move past '1's to achieve this.

# Approach
Initialize:
Use counters for '0's and the maximum time needed.

Process Each Character:
Increase the '0' count when encountering '0'.
Update the maximum time when encountering '1', considering the number of preceding '0's.

Result:
The maximum time gives the number of seconds required.

# Complexity
- Time complexity:
O(n)
We scan each character once.


- Space complexity:
O(1)
We use a fixed amount of extra space.

# Code
```rust []
impl Solution {
    /// Calculates the number of seconds required to remove all "01" substrings from a binary string.
    /// # Arguments
    /// * `s` - A `String` representing the binary string.
    /// # Returns
    /// * An `i32` representing the number of seconds needed.
    pub fn seconds_to_remove_occurrences(s: String) -> i32 {
        // Use fold to traverse the string and calculate the required time.
        s.chars()
            .fold((0, 0), |(zeros, time), c| {
                // Match the current character
                match c {
                    '0' => {
                        // Increment zeros count if the character is '0'
                        (zeros + 1, time)
                    },
                    '1' if zeros > 0 => {
                        // If the character is '1' and there are previous '0's,
                        // update the maximum time needed.
                        (zeros, zeros.max(time + 1))
                    },
                    _ => {
                        // For other cases, just carry forward the existing counts.
                        (zeros, time)
                    }
                }
            })
            .1  // Return the time component from the tuple.
    }
}

```