# O(n**2), dict, for, for   - x1 + x2 == x4 - x3

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/5241903/](https://leetcode.com/problems/count-special-quadruplets/solutions/5241903/)

---



# Code
```
class Solution {
    func countQuadruplets(_ nums: [Int]) -> Int {
        var dict_dist = [Int: Int]()
        var ans = 0

        dict_dist[nums[0] + nums[1], default: 0] += 1
        

        for i in 2..<nums.count - 1{
           for j in i + 1..<nums.count{
                    ans += dict_dist[nums[j] - nums[i], default: 0]
           }

           for j in 0..<i {
                dict_dist[nums[j] + nums[i], default: 0] += 1
           }
        }

        return ans
    }
}
```