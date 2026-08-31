# [Swift] Fast & slow pointers, clean solution

**Author:** odnaks
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/2986408/](https://leetcode.com/problems/circular-array-loop/solutions/2986408/)

---

# Complexity
- Time complexity: O(N^2)
- Space complexity: O(1)

# Code
```
class Solution {
    func circularArrayLoop(_ nums: [Int]) -> Bool {
        for i in 0..<nums.count {
            var slow: Int! = i
            var fast: Int! = i
            repeat {
                slow = nextIndex(nums, slow, nums[slow] >= 0)
                fast = nextIndex(nums, fast, nums[fast] >= 0)
                if fast != nil {
                    fast = nextIndex(nums, fast, nums[fast] >= 0)
                }
            } while slow != nil && fast != nil && slow != fast
            if slow != nil, slow == fast {
                return true
            }
        }
        return false
    }

    func nextIndex(_ nums: [Int], _ i: Int, _ isForward: Bool) -> Int? {
        let n = nums.count
        var nextIndex = (i + nums[i]) % n
        nextIndex = nextIndex < 0 ? nextIndex + n : nextIndex
        guard (nums[nextIndex] >= 0) == isForward, nextIndex != i else { return nil }
        return nextIndex
    }
}
```