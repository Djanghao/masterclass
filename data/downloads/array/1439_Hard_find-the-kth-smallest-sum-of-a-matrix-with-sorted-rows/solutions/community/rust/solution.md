# [Rust] Heap

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/2843020/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/2843020/)

---


BinaryHeap is a max heap so we track the negative of the sum in order to get the smallest sum.
HashSet is used to make sure we do not add a particular set of indicies multiple times.

The main loop is read:
for k -1 times:
	remove the smallest sum from the heap
	then add to the heap all of the sums resulting from increasing the smallest valued row if we have not seen them yet
finally pop the smallest value from the heap
```
use std::collections::{HashSet,BinaryHeap};

impl Solution {
    pub fn kth_smallest(mat: Vec<Vec<i32>>, k: i32) -> i32 {
        let mut heap = BinaryHeap::new();
        let mut set = HashSet::new();
        let width = mat[0].len() - 1;
        heap.push((-mat.iter().map(|row| row[0]).sum::<i32>(), vec![0;mat.len()]));
        for _ in 1..k {
            let (cur,ind) = heap.pop().unwrap();
            for r in 0..ind.len() {
                if ind[r] < width {
                    let mut tmp = ind.clone();
                    tmp[r] += 1;
                    if !set.contains(&tmp) {
                        set.insert(tmp.clone());
                        heap.push((cur + mat[r][tmp[r] -1] - mat[r][tmp[r]], tmp));
                    }
                }
            }
        }
        -heap.pop().unwrap().0
    }
}
```