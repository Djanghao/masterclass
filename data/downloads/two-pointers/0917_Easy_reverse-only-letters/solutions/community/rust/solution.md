# [Rust] Two Pointers - Time: O(n) | Space: O(1)

**Author:** kguzik
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/1462940/](https://leetcode.com/problems/reverse-only-letters/solutions/1462940/)

---

```
impl Solution {
    pub fn reverse_only_letters(mut s: String) -> String {
        let bytes = unsafe { s.as_bytes_mut() };
        let (mut lo, mut hi) = (0, bytes.len() - 1);

        while lo < hi {
            while lo < hi && !bytes[lo].is_ascii_alphabetic() {
                lo += 1;
            }
            while lo < hi && !bytes[hi].is_ascii_alphabetic() {
                hi -= 1;
            }
            bytes.swap(lo, hi);
            lo += 1;
            hi -= 1;
        }
        s
    }
}
```