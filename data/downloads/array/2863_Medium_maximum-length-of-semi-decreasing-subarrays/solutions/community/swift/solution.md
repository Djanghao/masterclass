# Swift solution o(n)

**Author:** ankteo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5103502/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5103502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Intuition behind the problem is that for i and j to be of maximal range, there would be a value to j such that all values to its right would all be higher that j and all values to the left of i would be smaller than i. 

# Approach
1. Initialize an empty stack and a variable maxRange to 0.
2. Iterate backward through nums, pushing indices onto the stack if they form semi-decreasing sequences.
3. Iterate through nums, pop elements from the stack and update maxRange if current element extends a semi-decreasing subarray.
4. Return maxRange as the maximum length of semi-decreasing subarrays.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func maxSubarrayLength(_ nums: [Int]) -> Int {
        if nums.count == 0 || nums.count == 1 {
            return 0
        }

        var stack = [Int]()
        var maxRange = 0

        for i in stride(from: nums.count - 1, to: 0, by: -1) {
            if stack.isEmpty || nums[i] <= nums[stack.last!] {
                stack.append(i)
            }
        }

        for i in 0..<nums.count {
            while !stack.isEmpty && nums[i] > nums[stack.last!] {
                let endIndex = stack.removeLast()
                maxRange = max(maxRange, endIndex - i + 1)
            }
        }

        return maxRange
    }
}

```