# Rust: 0ms

**Author:** seandewar
**Votes:** 3
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/1337014/](https://leetcode.com/problems/custom-sort-string/solutions/1337014/)

---

`str` is valid ASCII, hence why we can just sort its bytes:

```rust
impl Solution {
    pub fn custom_sort_string(order: String, str: String) -> String {
        let order_map = order.chars().enumerate().fold([0; 26], |mut acc, (i, c)| {
            acc[c as usize - 'a' as usize] = i;
            acc
        });
        let mut s = str.into_bytes();
        s.sort_unstable_by_key(|&c| order_map[c as usize - 'a' as usize]);
        String::from_utf8(s).unwrap()
    }
}
```

The above moves `str`'s bytes into a `Vec<u8>` that we sort according to `order`, then moves them back into a new `String` to return.
This is efficient as we're not actually copying `str`'s bytes into the `Vec` or the new `String`; we're simply re-using what's already allocated.

Alternatively, we can sort `str`'s bytes completely in-place, without any moves (or copies):

```rust
impl Solution {
    pub fn custom_sort_string(order: String, mut str: String) -> String {
        let order_map = order.chars().enumerate().fold([0; 26], |mut acc, (i, c)| {
            acc[c as usize - 'a' as usize] = i;
            acc
        });
        let mut s = unsafe { str.as_mut_vec() };
        s.sort_unstable_by_key(|&c| order_map[c as usize - 'a' as usize]);
        str
    }
}
```

We need to use an `unsafe` block in the above example, but the code is perfectly safe as long as `str` is valid ASCII, which it is.