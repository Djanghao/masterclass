# Beats 71.43% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/5248241/](https://leetcode.com/problems/last-visited-integers/solutions/5248241/)

---


```
class Solution {
    func lastVisitedIntegers(_ nums: [Int]) -> [Int] {
        var seen = [Int]()
        var ans = [Int]()
        var k = 0

        for num in nums{
            if num == -1{
                k += 1
                if k <= seen.count{
                    ans.append(seen[seen.count - k])
                } else {
                    ans.append(-1)
                }
            } else {
                k = 0
                seen.append(num)
            }
        }

        return ans
    }
}
```