# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3276492/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/3276492/)

---

```
class Solution {
    func getMinSwaps(_ num: String, _ k: Int) -> Int {

        func wond(_ num: String = num, _ k: Int = k) -> String {

            guard k != 0 else { return num }

            var n = num.index(before: num.endIndex)
            var p = num.index(before: n)

            while num[p] >= num[n] {
                n = p
                p = num.index(before: p)
            }

            let ch = num[p...].sorted()
            let fi = ch.firstIndex(where: { $0 > num[p] })!

            var rep = ch
            rep.remove(at: fi)
            rep.insert(ch[fi], at: 0)

            return wond(num[..<p] + String(rep), k - 1)
        }

        let target = wond()
        let d = target.indices.first(where: { target[$0] != num[$0] })!

        var suf1 = num[d...].map { $0 }
        var suf2 = target[d...].map { $0 }

        var res = 0

        while suf1 != suf2 {
            let i = suf1.indices.first(where: { suf1[$0] != suf2[$0] })!

            suf1.removeFirst(i)
            suf2.removeFirst(i)

            let j = suf1.firstIndex(of: suf2[0])!

            suf1.remove(at: j)
            suf1.insert(suf2[0], at: 0)

            res += j
        }

        return res
    }
}
```