# Concise rust solution | BinaryHeap

**Author:** RustEnthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5129141/](https://leetcode.com/problems/relative-ranks/solutions/5129141/)

---

# Code
```
use std::collections::BinaryHeap;

impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
        let mut heap = BinaryHeap::from_iter(score.iter().cloned().enumerate().map(|(a, b)| (b, a)));
        let ranks = [String::from("Gold Medal"), String::from("Silver Medal"), String::from("Bronze Medal")];
        let mut res = vec![String::new(); score.len()];
        (0..score.len()).for_each(|i| res[heap.pop().unwrap().1] = ranks.get(i).unwrap_or(&(i + 1).to_string()).clone());
        res
    }
}
```