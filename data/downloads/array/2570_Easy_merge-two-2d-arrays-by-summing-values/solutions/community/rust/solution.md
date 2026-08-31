# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3207554/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3207554/)

---

# Code
```
impl Solution {
    pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut bt = std::collections::BTreeMap::new();
        bt.extend(nums1.iter().map(|x| (x[0], x[1])));
        nums2
            .iter()
            .for_each(|x| *bt.entry(x[0]).or_insert(0) += x[1]);
        bt.into_iter().map(|(id, val)| vec![id, val]).collect()
    }
}
```