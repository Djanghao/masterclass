# Rust iterators

**Author:** grimerssy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5318918/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5318918/)

---

# Intuition
- sort both vecs
- get all combinations of indices to skip
- zip nums1 without 2 elements and nums2
- check if diff of zipped numbers is equal for all entries in the iterator
- get the last diff from the iterator since they are sorted in descending order because both nums1 and nums2 are sorted

# Code
```
use std::ops::ControlFlow;

impl Solution {
    pub fn minimum_added_integer(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> i32 {
        nums1.sort();
        nums2.sort();
        nums1
            .iter()
            .enumerate()
            .flat_map(|(i, _)| {
                nums1
                    .iter()
                    .enumerate()
                    .skip(i + 1)
                    .map(move |(j, _)| (i, j))
            })
            .filter_map(|(i, j)| {
                match nums1
                    .iter()
                    .rev()
                    .enumerate()
                    .filter(|(k, _)| *k != i && *k != j)
                    .map(|(_, x)| x)
                    .zip(nums2.iter().rev())
                    .map(|(x, y)| y - x)
                    .try_fold(None, |prev, curr| match (prev, curr) {
                        (Some(x), y) if x == y => ControlFlow::Continue(Some(y)),
                        (None, y) => ControlFlow::Continue(Some(y)),
                        _ => ControlFlow::Break(()),
                    }) {
                    ControlFlow::Continue(Some(x)) => Some(x),
                    _ => None,
                }
            })
            .next_back()
            .unwrap()
    }
}
```