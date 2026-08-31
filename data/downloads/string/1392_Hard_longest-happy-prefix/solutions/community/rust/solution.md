# Rust | Pragmatic Rolling Hash

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/3893278/](https://leetcode.com/problems/longest-happy-prefix/solutions/3893278/)

---

# Intuition

Speed up each substring lookup with brute force and hashing.

# Approach

Implement a double ended Rolling Hasher that supports both `push_front` and `push_back`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust
#[derive(Debug, Clone)]
pub struct RollingHasher {
    p: u64, m: u64,

    count: usize,

    pow_cache: u64,
    hash: u64,
}

impl RollingHasher {
    pub fn new() -> Self {
        let p = 16807;
        let m = 1_000_000_007;

        let count = usize::MIN;

        let pow_cache = 1u64;
        let hash = u64::MIN;

        Self {
            p, m,
            count,
            pow_cache,
            hash,
        }
    }

    pub fn value(&self) -> u64 { self.hash }
}

impl RollingHasher {
    pub fn push_front(&mut self, token: u64) {
        self.hash *= self.p;
        self.hash += token;
        self.hash %= self.m;

        self.post_trans_hook();
    }

    pub fn push_back(&mut self, token: u64) {
        self.hash += token * self.pow_cache;
        self.hash %= self.m;

        self.post_trans_hook();
    }

    fn post_trans_hook(&mut self) {
        self.count += 1;

        self.pow_cache *= self.p;
        self.pow_cache %= self.m;
    }
}

impl Solution {
    pub fn longest_prefix(s: String) -> String {
        let vec = s.chars()
            .map(|c| c as u64)
            .collect::<Vec<_>>();
        let n = vec.len();

        let mut hasher_frnt = RollingHasher::new();
        let mut hasher_back = RollingHasher::new();

        let mut ret = usize::MIN;
        for i_frnt in 0..(n - 1) {
            let i_back = n - i_frnt - 1;

            hasher_frnt.push_back(vec[i_frnt]);
            hasher_back.push_front(vec[i_back]);

            if hasher_frnt.value() != hasher_back.value() {
                continue;
            }

            // hash match!!
            if &s[..=i_frnt] != &s[i_back..] {
                continue; // actual string not match
            }

            ret = i_frnt + 1;
        }
        
        s.chars()
            .take(ret)
            .collect::<String>()
    }
}
```