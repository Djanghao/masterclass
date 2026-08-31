# [Rust] O(|s|+|p|) time, O(1) space, sliding window, optimised, with explanations. (0ms, beats 100%.)

**Author:** marccarre
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/637040/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/637040/)

---

```rust
const SIZE: usize = 26;

impl Solution {
    pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
        // Closure to (hopefully, elegantly) convert char into its counter position:
        let idx = |c: u8| { (c - 'a' as u8) as usize };

        // Create the anagram's counter:
        let mut anagram = [0u8; SIZE];
        for c in p.chars() {
            anagram[idx(c as u8)] += 1;
        }

        let mut indices = Vec::new();
        // Create the counter for the sliding window on s:
        let mut window = [0u8; SIZE];
        let mut left = 0;
        // Convert to byte array for direct access and no more Option<char>:
        let s: &[u8] = s.as_bytes();
        for right in 0..s.len() {
            window[idx(s[right])] += 1;
            if right >= p.len() - 1 {
                left = right - p.len() + 1;
                if anagram == window {
                    indices.push(left as i32);
                }
                window[idx(s[left])] -= 1;
            }
        }
        indices
    }
}
```