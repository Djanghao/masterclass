# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4715392/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4715392/)

---

```
class Solution {
    func countMatchingSubarrays(_ nums: [Int], _ pattern: [Int]) -> Int {
        
        var res = 0

        for i in 0..<nums.count - pattern.count {

            var match = true

            for j in pattern.indices {

                if pattern[j] == 1 && nums[i + j + 1] <= nums[i + j] {
                    match = false
                    break
                }

                if pattern[j] == -1 && nums[i + j + 1] >= nums[i + j] {
                    match = false
                    break
                }

                if pattern[j] == 0 && nums[i + j + 1] != nums[i + j] {
                    match = false
                    break
                }
            }

            if match { res += 1 }
        }

        return res
    }
}
```