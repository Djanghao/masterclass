# Rust rabin-karp & binary-search

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/1330629/](https://leetcode.com/problems/longest-common-subpath/solutions/1330629/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn longest_common_subpath(n: i32, paths: Vec<Vec<i32>>) -> i32 {
        let n = n as i64;
        let upper_bound = paths.iter().map(|a| a.len()).min().unwrap();

        // NOTE: binary-search
        let mut l = 0;
        let mut r = upper_bound;
        while l < r {
            let mid = l + (r - l) / 2;
            let has = Self::check_has_common_subpath_with_length_n(mid, n, &paths);
            if has {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        if l == upper_bound && Self::check_has_common_subpath_with_length_n(l, n, &paths) {
            return l as i32;
        }
        l as i32 - 1
    }

    fn check_has_common_subpath_with_length_n(n: usize, base: i64, paths: &[Vec<i32>]) -> bool {
        if n == 0 { return true; }
        // NOTE: rabin-karp
        let modulo = 1_000_000_009;
        let base_pow_n = {
            let mut res = 1;
            let mut n = n;
            while n > 1 {
                res = (res * base) % modulo;
                n -= 1;
            }
            res
        };

        let mut hm: HashMap<i64, Vec<usize>> = HashMap::new();
        for (path_idx, path) in paths.iter().enumerate() {
            let mut new_hm = HashMap::new();
            let mut hash = {
                let mut res = 0;
                for i in 0..n {
                    res = (res * base + path[i] as i64) % modulo;
                }
                res
            };
            for i in 0..=(path.len() - n) {
                if path_idx == 0 {
                    new_hm.entry(hash).or_insert(vec![]).push(i);
                } else {
                    let prev_path_idx = path_idx - 1;
                    if let Some(prev_matches) = hm.get(&hash) {
                        let matches = prev_matches.iter().any(|&prev_i| {
                            &paths[prev_path_idx][prev_i..(prev_i + n)] == &path[i..(i + n)]
                        });
                        if matches {
                            new_hm.entry(hash).or_insert(vec![]).push(i);
                        }
                    }
                }
                if i < path.len() - n {
                    hash -= path[i] as i64 * base_pow_n;
                    hash *= base;
                    hash += path[i + n] as i64;
                    hash %= modulo;
                    if hash < 0 {
                        hash += modulo;
                    }
                }
            }
            hm = new_hm;
        }

        hm.len() > 0
    }
}
```