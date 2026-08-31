# Rust solutions (8 ms & 0 ms)

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/1554430/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/1554430/)

---

1. Simple solution with sort (O(N logN)). Runtime =  **8 ms**
```
impl Solution {
    pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable_by(|a, b| b.cmp(a));
        match nums.windows(3).find(|l| l[0] < l[1] + l[2]) {
            Some(l) => l.iter().sum(),
            None => 0,
        }
    }
}
```
2. Solution with BinaryHeap (O(N logK)). Runtime =  **0 ms**
```
 impl Solution {
    pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
        let mut heap = std::collections::BinaryHeap::from(nums);
        let (mut b, mut c) = (-1, -1);
        while let Some(a) = heap.pop() {
            if a > 0 && b > 0 && c > 0 && c < b + a {
                return a + b + c;
            }
            c = b;
            b = a;
        }
        0
    }
}
```