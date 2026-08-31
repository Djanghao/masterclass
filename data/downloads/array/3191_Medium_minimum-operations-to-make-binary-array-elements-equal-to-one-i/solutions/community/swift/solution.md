# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5372236/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5372236/)

---

```
class Solution {
    func minOperations(_ nums: [Int]) -> Int {

        var nums = nums
        
        func flip(_ l: Int = 0) -> Int {
            if l + 3 == nums.count {
                if nums[l] + nums[l + 1] + nums[l + 2] == 0 { return 1 }
                else if nums[l] + nums[l + 1] + nums[l + 2] == 3 { return 0 }
                else { return -1 }
            }
            else {
                let extra = 1 - nums[l]
                if nums[l] == 0 {
                    nums[l] = 1
                    nums[l + 1] = 1 - nums[l + 1]
                    nums[l + 2] = 1 - nums[l + 2]
                }
                let res = flip(l + 1)
                if res == -1 { return -1 }
                else { return extra + res}
            }
        }

        return flip()
    }
}
```