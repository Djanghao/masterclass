# Rust: 28ms, 100% Runtime Solution

**Author:** seandewar
**Votes:** 4
**Link:** [https://leetcode.com/problems/word-subsets/solutions/1128368/](https://leetcode.com/problems/word-subsets/solutions/1128368/)

---

```
impl Solution {
    pub fn word_subsets(a: Vec<String>, b: Vec<String>) -> Vec<String> {
        let count = |s: &str| {
            let mut m = [0; 26];
            s.chars().for_each(|c| m[c as usize - 'a' as usize] += 1);
            m
        };
        let b_counts = b.iter().map(|s| count(s)).fold([0; 26], |mut bm, m| {
            m.iter().enumerate().for_each(|(i, &n)| bm[i] = bm[i].max(n));
            bm
        });

        a.into_iter()
            .map(|w| (count(&w), w))
            .filter(|(m, _)| b_counts.iter().enumerate().all(|(i, &n)| m[i] >= n))
            .map(|(_, w)| w)
            .collect()
    }
}
```

Time complexity: `O(a+b)`.
Space complexity: `O(1)` ignoring the return value; `O(a)` otherwise.
_Where `a` & `b` are the total number of characters within all strings in `a` & `b` respectively._