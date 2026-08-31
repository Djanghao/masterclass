# Rust Solution | One liner

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5852390/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5852390/)

---

# Intuition
The key insight for solving this problem is to recognize that the k-th character corresponds to the character obtained from the position k in the alphabet, offset by the count of 1s in the binary representation of k. Each integer's binary representation can be easily analyzed to determine the number of 1s, which directly influences the character derived.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
* Calculate the number of 1s in the binary representation of k using the count_ones() method.
* Offset the ASCII value of 'a' by the count of 1s to find the corresponding character.
* Return the resulting character.

# Complexity
- Time complexity: O(logk)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn kth_character(k: i32) -> char {
        ('a' as u8 + (k - 1).count_ones() as u8) as char
    }
}

```