# O(n), Dict, 1 for, Beats 81.25% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5176005/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5176005/)

---


```
class Solution {
    func numEquivDominoPairs(_ dominoes: [[Int]]) -> Int {
        var ans = 0
        var dict = [Int: Int]()
        var d1 = -1
        var d2 = -1

        for domino in dominoes{
            if domino[0] > domino[1] {
                d1 = domino[1]
                d2 = domino[0]
            } else{
                d1 = domino[0]
                d2 = domino[1]
            }

            ans += dict[d1 * 10 + d2] ?? 0
            
            dict[d1 * 10 + d2] = (dict[d1 * 10 + d2] ?? 0) + 1
        }

        return ans
    }
}
```