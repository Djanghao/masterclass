# Swift Solution O(nlogn)

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3623137/](https://leetcode.com/problems/movement-of-robots/solutions/3623137/)

---

# Code
```
class Solution {
    func sumDistance(_ nums: [Int], _ s: String, _ d: Int) -> Int {
        let mod = 1_000_000_007
        let s = Array(s)
        var nums = nums

        for i in nums.indices {
            if s[i] == "R" {
                nums[i] += d
            } else {
                nums[i] -= d
            }
        }

        nums = nums.sorted()
        var subsum = 0
        var res = 0
        for i in nums.indices {
            res += (nums[i] * i - subsum) % mod
            res %= mod
            subsum += nums[i]
        }

        return res
    }
}
```