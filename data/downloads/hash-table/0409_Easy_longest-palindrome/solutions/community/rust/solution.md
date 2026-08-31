# Rust simple solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/791342/](https://leetcode.com/problems/longest-palindrome/solutions/791342/)

---

```rust
impl Solution {
    pub fn longest_palindrome(s: String) -> i32 {
        let mut d: [i32; 128] = [0; 128];
        for &b in s.as_bytes() {
            d[b as usize] += 1;
        }
        let mut answer = 0;
        for n in d.iter() {
            answer += n;
            if n % 2 != 0 {
                answer -= 1;
                if answer % 2 == 0 {
                    answer += 1;
                }
            }
        }
        answer
    }
}
```