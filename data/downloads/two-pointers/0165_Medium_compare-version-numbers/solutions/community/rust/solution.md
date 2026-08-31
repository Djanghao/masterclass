# Shortest, cleanest rust solution. 0ms, mutation-free, vector-free solution

**Author:** mqudsi
**Votes:** 8
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/2912748/](https://leetcode.com/problems/compare-version-numbers/solutions/2912748/)

---

# Approach

Parse the version strings without collecting into a `Vec`, without modifying the shorter (fewer revisions) version to match the length of the longer, and without mutating any strings.


# Complexity
- Time complexity:
$$O(min(m, n))$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn compare_version(version1: String, version2: String) -> i32 {
        let mut r1 = version1.split('.').map(|s| s.parse().unwrap());
        let mut r2 = version2.split('.').map(|s| s.parse().unwrap());

        loop {
            match (r1.next(), r2.next()) {
                (Some(r1), r2) if r1 > r2.unwrap_or(0) => return 1,
                (r1, Some(r2)) if r2 > r1.unwrap_or(0) => return -1,
                (None, None) => return 0,
                _ => continue,
            }
        }
    }
}
```