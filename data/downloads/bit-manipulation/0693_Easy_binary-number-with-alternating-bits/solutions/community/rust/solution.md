# Rust - don't know bit shifting, just used strings

**Author:** lysender
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4694987/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4694987/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn has_alternating_bits(n: i32) -> bool {
        // Convert to binary then string?
        // Or use some bit shifting logic (I don't know bit shifting!)
        // Will just use string and be done with it
        let bin_s = format!("{:b}", n);
        let mut prev: Option<char> = None;
        for ch in bin_s.chars() {
            if let Some(prev_val) = prev {
                if prev_val == ch {
                    return false;
                }
            }
            prev = Some(ch);
        }
        // println!("{:?}", bin_s);
        true 
    }
}
```