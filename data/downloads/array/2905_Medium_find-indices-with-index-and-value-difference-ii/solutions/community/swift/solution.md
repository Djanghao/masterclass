# Swift | O(n) solution

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4480229/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4480229/)

---

# Approach
To not check every index in the inner loop, we can just store the indexes of minimum and maximum num so far and check against them. 

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func findIndices(_ nums: [Int], _ indexDiff: Int, _ valueDiff: Int) -> [Int]
    {
        let n = nums.count
        if indexDiff >= n { return [-1, -1] }
        var iMin = 0, iMax = 0
        for i in indexDiff..<n
        {
            if nums[i - indexDiff] < nums[iMin] {
                iMin = i - indexDiff
            }        
            if nums[i - indexDiff] > nums[iMax] {
                iMax = i - indexDiff
            }
            if nums[i] - nums[iMin] >= valueDiff {
                return [iMin, i]
            }
            if nums[iMax] - nums[i] >= valueDiff {
                return [iMax, i]
            }
        }    
        return [-1, -1]
    }
}
```