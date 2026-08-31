# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/4268758/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/4268758/)

---

```
class Solution {
    func minimumPerimeter(_ neededApples: Int) -> Int {
        
        var p = 0
        var s = 0

        while s * 4 < neededApples {
            p += 1

            let l = p + 1
            let r = 2 * p

            s += (l + r) * (r - l + 1) - r / 2
        }

        return 8 * p
    }
}
```