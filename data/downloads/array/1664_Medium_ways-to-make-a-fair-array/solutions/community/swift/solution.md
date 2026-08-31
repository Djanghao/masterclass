# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/3263571/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/3263571/)

---

```
class Solution {
    func waysToMakeFair(_ nums: [Int]) -> Int {

        guard nums.count > 1 else { return 1 }
        
        let s = nums
            .indices
            .reversed()
            .reduce(into: [0, 0]) {
                $0.append($0[nums.count - 1 - $1] + nums[$1])
            }
            .reversed()
            .map { $0 }
        
        var res = 0
        var l = [0, 0]

        for i in nums.indices {
            
            if l[0] + s[i + 1 + i % 2] == l[1] + s[i + 2 - i % 2] {
                res += 1
            }

            l[i % 2] += nums[i]
        }

        return res
    }
}
```