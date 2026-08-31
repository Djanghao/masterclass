# find monotonic subarrays O(n)

**Author:** user5285Zn
**Votes:** 2
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6029636/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6029636/)

---

# Rust / Python

```rust []
fn monoton(xs: &[i32]) -> usize {
    let mut i = 0;
    while i+1 < xs.len() && xs[i] < xs[i+1] {
        i += 1
    }
    i + 1
}

impl Solution {
    pub fn has_increasing_subarrays(xs: Vec<i32>, k: i32) -> bool {
        let k = k as usize;
        let mut i = 0;
        let mut first = true;
        while i < xs.len() - k + 1 {
            let l = monoton(&xs[i..]);
            i += l;
            if l >= 2*k {return true}
            if l >= k {
                if first {first = false}
                else {return true}
            } else {
                first = true
            }
        }
        false
    }
}
```
```python3 []
def monoton(nums):
    i = 0
    while i+1 < len(nums) and nums[i] < nums[i+1]:
        i += 1
    return i + 1

class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        i = 0
        first = True
        while i < len(nums)-k+1:
            l = monoton(nums[i:])
            i += l
            if l >= 2*k:
                return True
            if l>= k:
                if first:
                    first = False
                else:
                    return True
            else:
                first = True
            
        return False            
```

Note, to avoid copying in the Python version, the function `monoton` could be inlined, as in [Subarrays Detection ii](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6031577/monotonic-subarray/
). The rust version doesn't have that problem.

