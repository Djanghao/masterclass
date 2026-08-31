# Rust | Two Heaps, Clear implementation

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3813941/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3813941/)

---

# Code
```
use std::collections::BinaryHeap;

pub fn partition(
    mut vec: Vec<i32>,
    n: usize,
) -> (
    Vec<i32>,
    BinaryHeap<i32>,
) {
    let mut heap = BinaryHeap::new();
    for i in 0..n {
        heap.push(vec.pop().unwrap());
    }

    (vec, heap)
}

pub fn pref_sum(
    vec: Vec<i32>,
    mut heap: BinaryHeap<i32>,
) -> Vec<i64> {
    let mut prev = heap.iter()
        .map(|&e| e as i64)
        .sum::<i64>();
    let mut ret = vec![prev];
    for e in vec {
        heap.push(e);
        let e_prev = heap.pop().unwrap();

        prev += e as i64;
        prev -= e_prev as i64;

        ret.push(prev);
    }

    ret
}

impl Solution {
    pub fn minimum_difference(vec: Vec<i32>) -> i64 {
        let n = vec.len() / 3;

        let vec = vec.into_iter()
            .map(|e| -e)
            .collect::<Vec<_>>();
        let (vec, heap_back) = partition(vec, n);

        let vec = vec.into_iter().rev()
            .map(|e| -e)
            .collect::<Vec<_>>();
        let (mut vec, heap_frnt) = partition(vec, n);

        vec.reverse();
        let pref_sum_vec = pref_sum(vec.clone(), heap_frnt);

        let vec = vec.into_iter().rev()
            .map(|e| -e)
            .collect::<Vec<_>>();
        let post_sum_vec = pref_sum(vec, heap_back);
        let post_sum_vec = post_sum_vec.into_iter().rev()
            .map(|e| -e)
            .collect::<Vec<_>>();

        pref_sum_vec.into_iter()
            .zip(post_sum_vec.into_iter())
            .map(|(e0, e1)| e0 - e1)
            .min()
            .unwrap()
    }
}
```