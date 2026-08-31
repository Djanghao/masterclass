# Greedy & Binary with left side optimized

**Author:** gustilc
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/4557228/](https://leetcode.com/problems/split-array-largest-sum/solutions/4557228/)

---

# Intuition
Unlike other interval problems, it seems that there isn't enough information to initiate a greedy approach from scratch in this scenario. However, a greedy solution can be employed if the goal is to determine the possibility of a minimum largest value. Therefore, the remaining question is how to estimate this minimum largest value. What we do know is that it will always be less than the sum of all values.

# Approach
Building upon the aforementioned intuition, we can search for the minimum largest value through a binary search. During each iteration of the search, we check if there is a possible combination by attempting to use the largest arrays each time without exceeding the current value. We repeat this process until the borders used during the binary search become contiguous.

Note: I optimized the left side update during the binary search by using the max possible to set the new right instead of the middile in cases where the max possible was smaller than the middle.


# Complexity
- Time complexity:
O(n log m)
where n is the nums size and m is the sum of its values

- Space complexity:
O(1)

# Code
```
class Solution {
    func splitArray(_ nums: [Int], _ k: Int) -> Int {
        var findMinLargest = { (maxAllowed:Int) -> Int in
            var maxSum = 0
            var currSum = nums[0]
            var intervals = 1
            for i in 1..<nums.count {
                guard intervals <= k else { return -1 }
                guard nums[i] <= maxAllowed else { return -1 }
                let tmp = currSum + nums[i]
                if tmp <= maxAllowed { 
                    currSum = tmp
                    continue
                }
                intervals += 1
                maxSum = max(maxSum, currSum)
                currSum = nums[i]
            }
            guard intervals <= k else { return -1 }
            return max(maxSum, currSum)
        }
        let sumAll = nums.reduce(0) { $0 + $1 }
        var middle = sumAll / 2
        var left = 0
        var right = sumAll
        while middle > 0 {
            let maxSum = findMinLargest(middle)
            if maxSum == -1 { 
                left = middle
                if (right - left)  <= 1 { return right }
            } else {
                if maxSum > middle {  left = middle }
                else {  right = maxSum }
                if (right - left)  <= 1 { return right }
            }
            middle = (left + right) / 2
        }
        return right
    }
}
```