# Runtime 806ms Solution.

**Author:** ChouChien
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5756402/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5756402/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using monotonic queue.

# Approach
<!-- Describe your approach to solving the problem. -->
Using monotonic queue record index from small to large, and then calculate result.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func findMaximumScore(_ nums: [Int]) -> Int {
        let n = nums.count
        var monotonicIdxArray: [Int] = [0]
        for i in 1 ..< n {
            if nums[i] > nums[monotonicIdxArray.last!] {
                monotonicIdxArray.append(i)
            }
        }
        var ret: Int = 0
        for i in 0 ..< monotonicIdxArray.count-1 {
            ret += nums[monotonicIdxArray[i]] * (monotonicIdxArray[i+1] - monotonicIdxArray[i])
        }
        ret += nums[monotonicIdxArray.last!] * (n-1 - monotonicIdxArray.last!)
        return ret
    }
}
```