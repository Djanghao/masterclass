# map + filter

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5467637/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5467637/)

---

```
fn f(pre: &str, s:&str) -> bool {
    s.starts_with(pre) && s.ends_with(pre)
}
impl Solution {
    pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
        let n = words.len();
        (0..n).map(|i| (i+1..n)
                .filter(|j|f(&words[i], &words[*j]))
                .count())
                .sum::<usize>() as _ 
    }
}
```