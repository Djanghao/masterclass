# Simple solution on Swift

**Author:** blackbirdNG
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3018874/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3018874/)

---

# Code
```
class Solution {
    func targetIndices(_ nums: [Int], _ target: Int) -> [Int] {
        var result = [Int]()
        for (index, item) in nums.sorted().enumerated() where item == target {
            result.append(index)
        }
        return result
    }
}
```
### Please upvote if you found the solution useful!