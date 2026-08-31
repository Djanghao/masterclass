# Swift solution using Kadane's Algorithm

**Author:** Prasann_1433
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/4318770/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/4318770/)

---



# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func maximumAlternatingSubarraySum(_ nums: [Int]) -> Int {
        // Kadane's solution 

        var maxSum = nums[0]

        var evenSum = nums[0]
        var oddSum = 0

        for i in 1..<nums.count {

            if i % 2 == 0 {
                evenSum = max(nums[i], nums[i] + evenSum)
                oddSum -= nums[i]
            } else {
                oddSum = max(nums[i], nums[i] + oddSum)
                evenSum -= nums[i]
            }

            maxSum = max(maxSum, max(evenSum, oddSum))
        }

        return maxSum
    }
}


```