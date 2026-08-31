# Swift | Greedy

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/5417006/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/5417006/)

---

```
class Solution {
    func maximumEvenSplit(_ finalSum: Int) -> [Int] {
        if finalSum % 2 == 1 { return [] }

        var finalSum = finalSum
        var num = 2

        var res = [Int]()
        while num <= finalSum {
            res.append(num)
            finalSum -= num
            num += 2
        }
        res[res.count - 1] += finalSum
        return res


    }
}
```