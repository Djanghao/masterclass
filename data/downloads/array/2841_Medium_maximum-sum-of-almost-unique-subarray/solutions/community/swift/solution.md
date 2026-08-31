# Swift solution using sliding window

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4336867/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4336867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    func maxSum(_ nums: [Int], _ m: Int, _ k: Int) -> Int {
        var dict: [Int: Int] = [:]

        var i = 0, j = 0 
        var maxSum = 0 

        var sumTillNow = 0 

        while j < nums.count {
            dict[nums[j], default: 0] += 1
            sumTillNow += nums[j]

            while (j - i + 1) >= k {
                
                if dict.keys.count >= m {
                    maxSum = max(sumTillNow, maxSum)
                }

                sumTillNow -= nums[i]

                if let prevnum = dict[nums[i]] {
                        dict[nums[i]] = prevnum - 1

                        if dict[nums[i]] == 0 {
                            dict.removeValue(forKey: nums[i])
                        }
                }

                i += 1
            }

            j += 1
        }

        return maxSum
    }

```