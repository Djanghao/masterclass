# Efficient single-pass Rust solution (6ms, beats 98%)

**Author:** Andriamanitra
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5388787/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5388787/)

---

# Approach
Iterate through the characters once. At each step we add the number of special substrings that end at current index to the total, which is equal to the length of the *longest* special substring that ends at current index. To calculate that efficiently we keep track of the last index where each letter was seen, and update the start position of the current longest special substring when we see repeated letters.

# Code
```rust
impl Solution {
    pub fn number_of_special_substrings(s: String) -> i32 {
        let mut count = 0;
        let mut start = 0;
        let mut last_seen = [0; 256];
        for (byte, i) in s.bytes().zip(1..) {
            let byte = byte as usize;
            start = start.max(last_seen[byte]);
            count += i - start;
            last_seen[byte] = i;
        }
        count as i32
    }
}
```

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$
