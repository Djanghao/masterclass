# Early break and minimal iterators usage

**Author:** Alias69
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/6091569/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/6091569/)

---

# Intuition
The goal is to remove one digit such that the resulting number is the largest possible. To do this, we need to identify the first opportunity where removing a digit would increase the overall value of the number.

# Approach
When iterating through the digits, keep track of the last matching digit index. If the next digit is greater than the current one, it is optimal to remove the current one. If no such case is found, remove the last occurrence of the digit.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```rust []
impl Solution {
    pub fn remove_digit(number: String, digit: char) -> String {

        // Good enough because we are ensured we will find one.
        // Avoids use of Option `unwrap()` or i32 "as usize" casts.
        let mut index = number.len(); 
        for (i, c) in number.chars().enumerate() {
            if c == digit { index = i; }
            else if i == index+1 && c > digit { break; }
        }

        number[0..index].to_string() + &number[index+1..number.len()]
    }
}
```