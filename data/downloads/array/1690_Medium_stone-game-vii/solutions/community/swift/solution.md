# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/3331543/](https://leetcode.com/problems/stone-game-vii/solutions/3331543/)

---

```
class Solution {
    func stoneGameVII(_ stones: [Int]) -> Int {

        var a: [[(Int, Int)?]] = Array(repeating: Array(repeating: nil, count: stones.count), count: stones.count)
        var b: [[(Int, Int)?]] = Array(repeating: Array(repeating: nil, count: stones.count), count: stones.count)

        func pa(_ l: Int = 0, _ r: Int = stones.count - 1, _ s: Int = stones.reduce(0, +)) -> (Int, Int) {
            guard l != r else { return (0, 0) }

            if let res = a[l][r] { return res }

            var g1 = pb(l + 1, r, s - stones[l])
            g1.0 += s - stones[l]

            var g2 = pb(l, r - 1, s - stones[r])
            g2.0 += s - stones[r]

            let res = (g1.0 - g1.1) > (g2.0 - g2.1) ? g1 : g2
            a[l][r] = res

            return res
        }

        func pb(_ l: Int, _ r: Int, _ s: Int) -> (Int, Int) {
            guard l != r else { return (0, 0) }

            if let res = b[l][r] { return res }

            var g1 = pa(l + 1, r, s - stones[l])
            g1.1 += s - stones[l]

            var g2 = pa(l, r - 1, s - stones[r])
            g2.1 += s - stones[r]

            let res = (g1.0 - g1.1) < (g2.0 - g2.1) ? g1 : g2
            b[l][r] = res

            return res
        }

        return pa().0 - pa().1
    }
}
```