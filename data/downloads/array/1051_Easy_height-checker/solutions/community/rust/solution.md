# Rust 0ms 🔥 2.04Mb ☄️ One Liner Solutions 🦀

**Author:** rony0000013
**Votes:** 3
**Link:** [https://leetcode.com/problems/height-checker/solutions/5287363/](https://leetcode.com/problems/height-checker/solutions/5287363/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code - one liner with binary heap
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        heights.clone()
        .into_iter()
        .collect::<BinaryHeap<i32>>()
        .into_sorted_vec()
        .into_iter()
        .zip(heights.into_iter())
        .fold(0, |cnt, (a, b)| match a != b {
            true => cnt+1,
            false => cnt,
        })
    }
}
```
# Code - three liner with sort
```
impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        let mut v = heights.clone(); 
        v.sort_unstable();
        v.into_iter()
        .zip(heights.into_iter())
        .fold(0, |cnt, (a, b)| match a != b {
            true => cnt+1,
            false => cnt,
        })
    }
}
```
# Code - One liner with sort
```
impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        (0..heights.len())
        .fold((0, {let mut v = heights.clone(); v.sort_unstable(); v}, heights),
        |(cnt, a, b), i| match a[i] != b[i] {
            true => (cnt+1, a, b),
            false => (cnt, a, b)
        }).0
    }
}
```