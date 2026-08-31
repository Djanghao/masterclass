# Simple and concise Rust solution - fill from the end

**Author:** unreliablebazooka
**Votes:** 31
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/621955/](https://leetcode.com/problems/merge-sorted-array/solutions/621955/)

---

```
impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let (mut m, mut n) = (m as usize, n as usize);
        
        while n > 0 {
            if m > 0 && nums1[m - 1] > nums2[n - 1] {
                nums1[m + n - 1] = nums1[m - 1];
                m -= 1;
            } else {
                nums1[m + n - 1] = nums2[n - 1];
                n -= 1;
            }
        }
    }
}
```