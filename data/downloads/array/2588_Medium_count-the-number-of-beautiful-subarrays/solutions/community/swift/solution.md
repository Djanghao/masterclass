# Swift Solution using Hashmap O(n)

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3287713/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3287713/)

---

# Code
```
class Solution {
    func beautifulSubarrays(_ nums: [Int]) -> Int {
        var res = 0
        var subres = 0
        var map: [Int: Int] = [0: 1]

        for i in 0..<nums.count {
            subres ^= nums[i]
            res += map[subres, default: 0]
            map[subres, default: 0] += 1
        }

        return res
    }
}

```