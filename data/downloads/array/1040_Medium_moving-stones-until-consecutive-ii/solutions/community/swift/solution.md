# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/5383720/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/5383720/)

---

```
class Solution {
    func numMovesStonesII(_ stones: [Int]) -> [Int] {

        guard stones.count > 2 else { return [0, 0] }
        
        var st = stones.sorted()

        let ma = st[st.count - 1] - st[0] - min(st[1] - st[0], st[st.count - 1] - st[st.count - 2]) + 2 - st.count
        
        let mi: Int = {
            var mi = Int.max
            var l = 0
            var r = 0

            while r + 1 < st.count, st[r + 1] - st[l] < stones.count { r += 1 }

            while r < st.count {
                while st[r] - st[l] >= stones.count { l += 1 }

                let innerfree = st[r] - st[l] - r + l
                let outerfree = st.count - st[r] + st[l] - 1

                if outerfree == 1, innerfree == 0 { mi = min(mi, 2) }
                else { mi = min(mi, innerfree + outerfree) }
                
                r += 1
            }

            return mi
        }()

        return [mi, ma]
    }
}



/*

xx.........................x

x..x.xxxx.xx....x
x.xxxx.xx...xx

*/
```