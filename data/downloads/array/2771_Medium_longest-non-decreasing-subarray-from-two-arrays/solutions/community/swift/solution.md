# Swift | Bottom-up DP with O(n) and O(1) SC explained

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3745184/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3745184/)

---

# Approach

Create two arrays `dp1` and `dp2` of size $n$, where `dp1[i]` denotes the longest possible non-decreasing sequence in `nums3` starting from $i$th position, when `nums1[i]` is assigned for `nums3[i]`. `dp2` is the same thing for the case when `nums2[i]` is picked to be `nums3[i]`. Initialize these arrays with all `1`s, as at least each number is itself a non-decreasing sequence of unit length.

Iterate through `nums1` and `nums2` arrays simultaneously, from back to end, filling the dp arrays by the following logic:
- Initially `dp1[i]` is `1`
- If `nums1[i+1]` is a valid continuation for `nums1[i]` (i.e. `nums1[i] <= nums1[i+1]`), then `nums1[i]`can be prepended to the sequence that starts at $i+1$ index in `nums3` with `nums1[i+1]` chosen to be `nums3[i+1]`, that is, to `dp1[i+1]`:
```if nums1[i] <= nums1[i+1] { dp1[i] = dp1[i+1] + 1 }```
- Similarly, if `nums2[i+1]` is a valid continuation for `nums1[i]`, then `nums1[i]`can be prepended to `dp2[i+1]`:
```if nums1[i] <= nums2[i+1] { dp1[i] = dp2[i+1] + 1 }```
We only need to choose the best of these alternatives:
```
if nums1[i] <= nums1[i+1] { dp1[i] = dp1[i+1] + 1 }
if nums1[i] <= nums2[i+1] { dp1[i] = max(dp1[i], dp2[i+1] + 1) }
```
- If both `nums1[i+1]` and `nums2[i+1]` turn out to be unacceptable, then `dp1[i]` will retain its default value of `1`.
- All of the above is completely analogous for dp2:
```
if nums2[i] <= nums1[i+1] { dp2[i] = dp1[i+1] + 1 }
if nums2[i] <= nums2[i+1] { dp2[i] = max(dp2[i], dp2[i+1] + 1) }
```
- The required max sequence length is the maximum value among dp1 and dp2:
```
maxLength = max(maxLength, dp1[i], dp2[i])
```

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```
class Solution {
    func maxNonDecreasingLength(_ nums1: [Int], _ nums2: [Int]) -> Int
    {
        let n = nums1.count
        if n == 1 { return 1 }
        
        var dp1: [Int] = Array(repeating: 1, count: n), dp2 = dp1        
        var maxLength = 1
        
        for i in stride(from: n-2, through: 0, by: -1)
        {
            if nums1[i] <= nums1[i+1] { dp1[i] = dp1[i+1] + 1 }
            if nums1[i] <= nums2[i+1] { dp1[i] = max(dp1[i], dp2[i+1] + 1) }
            
            if nums2[i] <= nums1[i+1] { dp2[i] = dp1[i+1] + 1 }
            if nums2[i] <= nums2[i+1] { dp2[i] = max(dp2[i], dp2[i+1] + 1) }
            
            maxLength = max(maxLength, dp1[i], dp2[i])
        }
        return maxLength
    }
}
```

# Space Optimization

We don't really need to keep the entire `dp` arrays. At each iteration we only use the previous two values of them, so we can simply store these values in two variables `prevDp1` and `prevDp2` instead.

## Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

```
class Solution {
    func maxNonDecreasingLength(_ nums1: [Int], _ nums2: [Int]) -> Int
    {
        let n = nums1.count
        if n == 1 { return 1 }
        
        var dp1, dp2: Int, prevDp1 = 1, prevDp2 = 1
        var maxLength = 1
        
        for i in stride(from: n-2, through: 0, by: -1)
        {
            (dp1, dp2) = (1, 1)
            
            if nums1[i] <= nums1[i+1] { dp1 = prevDp1 + 1 }
            if nums1[i] <= nums2[i+1] { dp1 = max(dp1, prevDp2 + 1) }
            
            if nums2[i] <= nums1[i+1] { dp2 = prevDp1 + 1 }
            if nums2[i] <= nums2[i+1] { dp2 = max(dp2, prevDp2 + 1) }
            
            maxLength = max(maxLength, dp1, dp2)
            (prevDp1, prevDp2) = (dp1, dp2)
        }
        return maxLength
    }
}
```