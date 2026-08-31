# Simple 2 Iteration: time - O(N), space: O(1)

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278276/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278276/)

---

# Intuition
Iterate from 'right to left' and from 'left to right' calculation of the swap counts.

# Approach
1. Iterate the sequence twice - 'right to left' and 'left to right'.
2. Calculate the swap count.
3. Return min value or -1 if both are optional nil.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    func minOperations(_ nums1: [Int], _ nums2: [Int]) -> Int {
        // optional means not existing result
        // 1 by default because iterating from right to left means that we swap the last element at the beginning
        var (res1, res2): (Int?, Int?) = (0, 1)
        let (a, b) = (nums1.last!, nums2.last!), count = nums1.count
        func check(_ a: Int, _ b: Int, _ res: inout Int?) {
            for i in 0..<count-1 {
                if nums1[i] <= a, nums2[i] <= b { continue }
                else if nums1[i] <= b, nums2[i] <= a { res! += 1 }
                else { res = nil; break }
            }
        }
        check(a, b, &res1)
        check(b, a, &res2)
        return res1 == nil ? (res2 ?? -1) : min(res1!, res2 ?? .max)
    }
}
```

Upvote is highly encouraged here :)