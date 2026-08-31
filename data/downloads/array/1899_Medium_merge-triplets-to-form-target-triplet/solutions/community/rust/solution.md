# Rust One-liner | 45ms, 10.08MB

**Author:** Imyr
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5418612/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5418612/)

---

# Code
```
impl Solution {
    pub fn merge_triplets(mut triplets: Vec<Vec<i32>>, target: Vec<i32>) -> bool {
        target == triplets.into_iter()
        .filter(|triplet| triplet.iter().zip(target.iter()).all(|(a, b)| a <= b))
        .fold(vec![0; 3], |mut acc, x| { acc.into_iter().zip(x).map(|(a, b)| a.max(b)).collect() })
    }
}
```