# Rust - idiomatic in-place with `iter_mut` double-ended iterator

**Author:** walfie
**Votes:** 8
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3560764/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3560764/)

---

* Convert the string into a mutable byte array
* Create a double-ended iterator using `iter_mut()`
* Use `find(...)`/`rfind(...)` to get pointers to the vowels from the left and right
* `std::mem::swap` the left and right pointers
* Repeat iterations until the iterator is empty


# Code
```
impl Solution {
    pub fn reverse_vowels(mut s: String) -> String {
        // From the description, `s` is guaranteed to be ASCII, so this is fine
        let mut bytes = unsafe { s.as_bytes_mut() };

        let mut iter = bytes.iter_mut();
        while let (Some(left), Some(right)) = (
            iter.find(|c| is_vowel(c)),
            iter.rfind(|c| is_vowel(c))
        ) {
            std::mem::swap(left, right);
        }

        s
    }
}

fn is_vowel(c: &u8) -> bool {
    matches!(c.to_ascii_lowercase(), b'a' | b'e' | b'i' | b'o' | b'u')
}
```