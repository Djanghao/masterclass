# Rust bitmasks

**Author:** BitUnWise
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/5699782/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/5699782/)

---

# Approach
Make a bitmask that is the starting char with all trailing ones and mask in the 2 previous chars, the number of trailing ones on the mask is the next non-palandromic char.

(Probably slower than just checking the next 3 possible characters in a loop)

# Code
```rust []
impl Solution {
    pub fn smallest_beautiful_string(s: String, k: i32) -> String {
        let k = k as u8;
        let mut s = s.into_bytes();
        for i in (0..s.len()).rev() {
            let next = find_next(&s[..=i]);
            if next >= k {
                continue;
            }
            s[i] = b'a' + next;
            for i in i + 1..s.len() {
                s[i] = find_first(&s[..i]) + b'a';
            }
            return unsafe{String::from_utf8_unchecked(s)};
        }
        String::new()
    }
}

fn find_first(s: &[u8]) -> u8 {
    let ind = |c| (1 << (c - b'a')) as u32;
    let mask: u32 = match s {
        [.., first, second] => ind(first) | ind(second),
        [first] => ind(first),
        [] => return 0,
    };
    mask.trailing_ones() as u8
}

fn find_next(s: &[u8]) -> u8 {
    let ind = |c| (1 << (c - b'a')) as u32;
    let target_mask = |t| (1 << (t - b'a' + 1)) as u32 - 1;
    let mask: u32 = match s {
        [.., first, second, target] => ind(first) | ind(second) | target_mask(target),
        [first, target] => ind(first) | target_mask(target),
        [target] => target_mask(target),
        [] => panic!(),
    };
    mask.trailing_ones() as u8
}
```