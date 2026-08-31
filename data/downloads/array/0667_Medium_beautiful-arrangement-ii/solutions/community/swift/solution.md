# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/3418869/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/3418869/)

---

```
class Solution {
    func constructArray(_ n: Int, _ k: Int) -> [Int] {

        var res = [Int]()
        var l = 1
        var h = l + k

        while l < h {
            res.append(l)
            res.append(h)
            l += 1
            h -= 1
        }

        if l == h { res.append(l) }
        l = k + 2
        
        while l <= n {
            res.append(l)
            l += 1
        }

        return res
    }
}
```