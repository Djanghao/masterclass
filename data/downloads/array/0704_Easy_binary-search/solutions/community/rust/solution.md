# Rust solution

**Author:** BigMih
**Votes:** 25
**Link:** [https://leetcode.com/problems/binary-search/solutions/1641029/](https://leetcode.com/problems/binary-search/solutions/1641029/)

---

```
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        use std::cmp::Ordering;
        let (mut low, mut high) = (0, nums.len());
        while low < high {
            let mid = low + (high - low) / 2;
            match nums[mid].cmp(&target) {
                Ordering::Equal => return mid as i32,
                Ordering::Less => low = mid + 1,
                Ordering::Greater => high = mid,
            }
        }
        -1
    }
}
```