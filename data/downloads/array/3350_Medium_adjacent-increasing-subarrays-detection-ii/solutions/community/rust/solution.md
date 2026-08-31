# monotonic subarray

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6031577/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6031577/)

---

# Rust
```rust []
fn monoton(xs: &[i32]) -> usize {
    let mut i = 0;
    while i+1 < xs.len() && xs[i] < xs[i+1] {
        i += 1
    }
    i + 1
}

impl Solution {
    pub fn max_increasing_subarrays(xs: Vec<i32>) -> i32 {
        let mut i = 0;
        let mut best = 1; 
        let mut l1 = 1;
        let mut l = 1;
        while i < xs.len() - 1 {
            (l, l1) = (monoton(&xs[i..]), l);
            i += l;
            best = best.max((l/2).max(l1.min(l)));
        }
        best as _
    }
}

```

# Python3

```python3 []
class Solution:
    def maxIncreasingSubarrays(self, xs: List[int]) -> int:
        i, best, l, l1 = 0, 1, 1, 1
        while i < len(xs) -1:
            l1 = l
            j = i
            while j+1 < len(xs) and xs[j] <xs[j+1]:
                j += 1
            l = j - i + 1
            i = j + 1
            best = max(best, l//2, min(l1, l))
        return best
```