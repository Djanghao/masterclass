# 💥 Rust | Runtime beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5732890/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5732890/)

---

# Intuition
The problem asks us to convert letters to their respective positions in the alphabet and then repeatedly sum the digits of the resulting number. The goal is to reduce the number until we get a final single-digit or low-value result after a few transformations.

# Approach
Convert Letters: Replace each letter in the string with its position in the alphabet (e.g., 'a' = 1, 'b' = 2).

Sum Digits: Convert the sequence of numbers into a string and sum all its digits.

Repeat: Perform the digit-summing process k times to get the final result.

# Complexity
- Time complexity:
O(n + k * m)

- Space complexity:
 O(m)

# Code
```rust []
impl Solution {
    pub fn get_lucky(s: String, k: i32) -> i32 {
        let mut sum: i32 = s.chars()
            .map(|c| c as i32 - 'a' as i32 + 1)  // Convert char to its alphabet position
            .flat_map(|n| n.to_string().chars().collect::<Vec<_>>())  // Collect chars into a Vec to extend the lifetime
            .map(|c| c.to_digit(10).unwrap() as i32)  // Convert each character digit back to an integer
            .sum();  // Sum all digits
        
        // Perform the transform operation k-1 times
        for _ in 1..k {
            sum = sum.to_string()
                .chars()
                .map(|c| c.to_digit(10).unwrap() as i32)
                .sum();
        }

        sum
    }
}

```