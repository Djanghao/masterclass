# Rust: 36ms

**Author:** seandewar
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/1290011/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/1290011/)

---

```rust
impl Solution {
    pub fn num_matching_subseq(s: String, words: Vec<String>) -> i32 {
        let smap = s
            .chars()
            .enumerate()
            .fold(vec![vec![]; 26], |mut acc, (i, c)| {
                acc[c as usize - 'a' as usize].push(i);
                acc
            });

        words
            .iter()
            .filter_map(|w| {
                w.chars()
                    .map(|c| c as usize - 'a' as usize)
                    .try_fold(0, |i, j| {
                        let k = smap[j].binary_search(&i).unwrap_or_else(|k| k);
                        smap[j].get(k).map(|&i| i + 1)
                    })
            })
            .count() as _
    }
}
```
