# Rust | Greedy | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2684927/](https://leetcode.com/problems/break-a-palindrome/solutions/2684927/)

---

For strings of length < 2 it is impossible to break the palindrome (as shown in the problem example). For other cases, scan the first half of the string (excluding the midpoint element, if any, since a change to that letter would not break the palindrome), and change the first non-`a` to an `a`, if found. That breaks the palindrome and makes the string as lexicographically small as possible. If not found, the string is only `a`s (except possibly for the midpoint element), and we break the palindrome by changing the last letter to a `b`, i.e. preserving as many initial `a`s as possible.

Implementation notes:

* Using e.g. `iter_mut` and `last` to avoid manual indexing.
* Since input is ASCII, we can use bytes to represent characters, and avoid the overhead of UTF-8 parsing.

```
impl Solution {
    pub fn break_palindrome(palindrome: String) -> String {
        let n = palindrome.len();
        if n < 2 {
            String::new()
        } else {
            let mut palindrome = palindrome.as_bytes().to_vec();
            match palindrome.iter_mut().take(n/2).find(|b| **b != b'a') {
                Some(b) => *b = b'a',
                None => *palindrome.last_mut().unwrap() = b'b',
            }
            palindrome.into_iter().map(|b| b as char).collect()
        }
        
    }
}
```