# Simple Rust Solution

**Author:** pwn3y_b0i
**Votes:** 1
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1798950/](https://leetcode.com/problems/truncate-sentence/solutions/1798950/)

---

View more @ https://github.com/allenwest24
```
impl Solution {
    pub fn truncate_sentence(s: String, k: i32) -> String {
        // Split by white space.
        let split_on = (&s).splitn(s.len() as usize, " ");
        
        // Take first k from vec of words.
        let first_k = split_on.take(k as usize).collect::<Vec<&str>>();
        
        // Rejoin as a sentence with spaces in between words.
        let out = first_k.join(" ");
        
        return out;
    }
}
```