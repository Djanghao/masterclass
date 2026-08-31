# Easy solution with prefix sum and sliding window

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/3957991/](https://leetcode.com/problems/maximum-erasure-value/solutions/3957991/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func maximumUniqueSubarray(_ nums: [Int]) -> Int {
        var map = [Int:Int]()
        var prefixSumArr = [Int]()
        var lastRepeatedIndex = -1
        var maxSum = 0
        
        for i in 0...nums.count-1 {
            prefixSumArr.append((prefixSumArr.last ?? 0)+nums[i])
            if let presentItemIndex = map[nums[i]] {
                if presentItemIndex > lastRepeatedIndex {
                    lastRepeatedIndex = presentItemIndex
                    
                }
            }
            if lastRepeatedIndex >= 0 {
                maxSum = max(prefixSumArr[i]-prefixSumArr[lastRepeatedIndex], maxSum)
            } else {
                maxSum = prefixSumArr[i]
            }
            map[nums[i]] = i
        }
        return maxSum
        
    }
}
```