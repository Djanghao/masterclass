# [Rust] Solutions using Binary Search and Pointers with match guards

**Author:** lawrencek0
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/498389/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/498389/)

---

This is a simple one that uses binary search to see if the element in the first vector belongs to the other two:
```
impl Solution {
    pub fn arrays_intersection(arr1: Vec<i32>, arr2: Vec<i32>, arr3: Vec<i32>) -> Vec<i32> {
        arr1.iter()
            .filter(|n| arr2.binary_search(n).is_ok() && arr3.binary_search(n).is_ok())
            .cloned()
            .collect()
    }
}
```

This one uses three pointers to the vectors and uses the match guard by comparing the elements in the first vector with the other two:
```
use std::cmp::Ordering;

impl Solution {
    pub fn arrays_intersection(arr1: Vec<i32>, arr2: Vec<i32>, arr3: Vec<i32>) -> Vec<i32> {
        let mut i = 0;
        let mut j = 0;
        let mut k = 0;
        let mut rtn = vec![];

        loop {
            if i > arr1.len() - 1 || j > arr2.len() - 1 || k > arr3.len() - 1 {
                break;
            }

            match (arr1[i].cmp(&arr2[j]), arr1[i].cmp(&arr3[k])) {
                (Ordering::Equal, Ordering::Equal) => {
                    rtn.push(arr1[i]);
                    i += 1;
                    j += 1;
                    k += 1;
                }
                (Ordering::Greater, Ordering::Greater) => {
                    j += 1;
                    k += 1;
                }
                (Ordering::Less, Ordering::Less) => {
                    i += 1;
                }
                (Ordering::Greater, _) => {
                    j += 1;
                }
                (Ordering::Less, _) => {
                    i += 1;
                    k += 1;
                }
                (_, Ordering::Greater) => {
                    k += 1;
                }
                (_, Ordering::Less) => {
                    i += 1;
                    j += 1;
                }
            }
        }

        rtn
    }
}
```
