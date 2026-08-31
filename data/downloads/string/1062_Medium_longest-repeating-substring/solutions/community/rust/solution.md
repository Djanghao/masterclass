# [Rust] HashSet && Rolling Hash approaches

**Author:** night-crawler
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/2204891/](https://leetcode.com/problems/longest-repeating-substring/solutions/2204891/)

---

**HashSet Solution**

```rust
use std::collections::HashSet;

fn binary_search(mut left: usize, mut right: usize, check: impl Fn(usize) -> bool) -> usize {
    while left < right {
        let mid = left + (right - left) / 2;
        if check(mid) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    left
}

impl Solution {
    pub fn longest_repeating_substring(raw_string: String) -> i32 {
        let raw_string = raw_string.as_bytes();
        let len = raw_string.len();
        let index = binary_search(1, len, |substring_length| {
            let mut seen = HashSet::new();

            for window in raw_string.windows(substring_length) {
                if seen.contains(window) {
                    return true;
                }
                seen.insert(window);
            }

            false
        });

        index as i32 - 1
    }
}
```

**Rolling Hash Solution**

```rust
use std::collections::HashSet;

const PRIME_BASE: i64 = 257;
const PRIME_MOD: i64 = 1000000007;

struct RollingHasher {
    power: i64,
    hash: i64,
}

impl RollingHasher {
    #[inline]
    fn new(len: i32) -> Self {
        let mut power = 1;
        for _ in 0..len {
            power = (power * PRIME_BASE) % PRIME_MOD;
        }
        Self { power, hash: 0 }
    }

    #[inline]
    fn add(&mut self, char: u8) -> i64 {
        self.hash *= PRIME_BASE;
        self.hash += char as i64;
        self.hash %= PRIME_MOD;
        self.hash
    }

    #[inline]
    fn remove(&mut self, char: u8) -> i64 {
        self.hash -= (self.power * char as i64) % PRIME_MOD;
        if self.hash < 0 {
            self.hash += PRIME_MOD;
        }
        self.hash
    }
}

impl<S> From<S> for RollingHasher
where
    S: AsRef<[u8]>,
{
    fn from(chars: S) -> Self {
        let chars = chars.as_ref();
        let mut instance = Self::new(chars.len() as i32);
        for &ch in chars {
            instance.add(ch);
        }
        instance
    }
}

fn binary_search(mut left: usize, mut right: usize, check: impl Fn(usize) -> bool) -> usize {
    while left < right {
        let mid = left + (right - left) / 2;
        if check(mid) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    left
}

impl Solution {
    pub fn longest_repeating_substring(raw_string: String) -> i32 {
        let raw_string = raw_string.as_bytes();
        let len = raw_string.len();
        let index = binary_search(1, len, |substring_length| {
            let mut hasher = RollingHasher::from(&raw_string[..substring_length]);
            let mut seen = HashSet::new();
            seen.insert(hasher.hash);

            for start in 1..len - substring_length + 1 {
                hasher.add(raw_string[start + substring_length - 1]);
                let next_hash = hasher.remove(raw_string[start - 1]);
                if seen.contains(&next_hash) {
                    return true;
                }
                seen.insert(next_hash);
            }

            false
        });

        index as i32 - 1
    }
}
