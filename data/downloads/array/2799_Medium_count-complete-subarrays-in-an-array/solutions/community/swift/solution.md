# 🔥⚡️ Simple Python3/Swift Solution

**Author:** rickRicardo
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836112/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836112/)

---

# Code
```Python3 []
class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        total_distinct = len(set(nums))
        freq = {}
        left = 0
        result = 0

        for right in range(n):
            freq[nums[right]] = freq.get(nums[right], 0) + 1

            while len(freq) == total_distinct:
                result += n - right
                freq[nums[left]] -= 1
                if freq[nums[left]] == 0:
                    del freq[nums[left]]
                left += 1

        return result
```
```Swift []
class Solution {
    func countCompleteSubarrays(_ nums: [Int]) -> Int {
        let n = nums.count
        let totalDistinct = Set(nums).count
        var freq: [Int: Int] = [:]
        var left = 0
        var result = 0

        for right in 0..<n {
            freq[nums[right], default: 0] += 1

            while freq.count == totalDistinct {
                result += n - right
                freq[nums[left], default: 0] -= 1
                if freq[nums[left]] == 0 {
                    freq[nums[left]] = nil
                }
                left += 1
            }
        }

        return result
    }
}
```