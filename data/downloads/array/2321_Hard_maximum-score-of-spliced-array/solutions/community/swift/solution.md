# Swift Clean O(n) solution

**Author:** shuaizsde
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/3610258/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/3610258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
SweepLine
HighLevel Idea: Say after swapped, sum in nums1 was changed into **nums1Sum + diff**, then sum in num2 will be **nums2Sum - diff**.

Now we only need to do is: find 2 subarrays from nums1 such that compared to nums2, it could have a maxDiff, and minDiff

Then the final result will be max(sum1 + maxDiff, sum2 - minDiff)

# Complexity
- Time complexity: ON
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O1
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumsSplicedArray(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let n = nums1.count
        let sum1 = nums1.reduce(0, +)
        let sum2 = nums2.reduce(0, +)
        if sum1 < sum2 {
            return maximumsSplicedArray(nums2, nums1)
        }
        var maxCur = 0
        var minCur = 0
        var maxGlobal = 0
        var minGlobal = 0

        for i in 0..<n {
            var curDiff = nums2[i] - nums1[i]
            maxCur = maxCur > 0 ? maxCur + curDiff : curDiff
            minCur = minCur < 0 ? minCur + curDiff : curDiff

            maxGlobal = max(maxCur, maxGlobal)
            minGlobal = min(minCur, minGlobal)
        }

        return max(sum1 + maxGlobal, sum2 - minGlobal)
    }
}
