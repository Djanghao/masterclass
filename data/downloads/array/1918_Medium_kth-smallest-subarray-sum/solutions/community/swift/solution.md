# Swift solution (not my own derived solution)

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/4322173/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/4322173/)

---



# Complexity
- Time complexity:
$$O(nlogn + n)$$

# Code
```
class Solution {
    func kthSmallestSubarraySum(_ nums: [Int], _ k: Int) -> Int {
        var i = 0, j = nums.reduce(0, +)

        while i < j {
            let mid = i + (j - i) / 2

            if countOfSubArrayLessOrEqual(to: mid, nums) >= k {
                j = mid
            } else {
                i = mid + 1
            }
        }

        return i
    }

    private func countOfSubArrayLessOrEqual(to target: Int, _ nums: [Int]) -> Int {
        var i = 0, j = 0 

        var sum = 0 
        var count = 0 

        for j in 0..<nums.count {
            sum += nums[j]

            while sum > target {
                sum -= nums[i]
                i += 1
            }

            count += j - i + 1
        }

        return count
    }
}
```