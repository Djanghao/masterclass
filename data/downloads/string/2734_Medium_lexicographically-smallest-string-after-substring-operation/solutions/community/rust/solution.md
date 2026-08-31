# rust iter solution

**Author:** BitUnWise
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3628622/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3628622/)

---

# Approach
Find first non 'a' byte or if they're all 'a's then turn the last one into a 'z'.

then decrement all chars until an 'a' or the end of the array is reached.

# Code
```
impl Solution {
    pub fn smallest_string(s: String) -> String {
        let mut s = s.into_bytes();
        if let Some(start) = s.iter().position(|&c| c != b'a') {
            s[start..].iter_mut().take_while(|c| **c != b'a').for_each(|c| *c -= 1);
        } else {
            *s.last_mut().unwrap() = b'z';
        }
        unsafe {String::from_utf8_unchecked(s) }
    }
}
```