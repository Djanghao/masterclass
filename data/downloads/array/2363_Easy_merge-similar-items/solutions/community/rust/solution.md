# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2388629/](https://leetcode.com/problems/merge-similar-items/solutions/2388629/)

---

```
impl Solution {
    pub fn merge_similar_items(items1: Vec<Vec<i32>>, items2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut btm = std::collections::BTreeMap::new();
        items1
            .iter()
            .chain(items2.iter())
            .for_each(|pair| *btm.entry(pair[0]).or_insert(0) += pair[1]);
        btm.into_iter()
            .map(|(key, value)| vec![key, value])
            .collect()
    }
}
```