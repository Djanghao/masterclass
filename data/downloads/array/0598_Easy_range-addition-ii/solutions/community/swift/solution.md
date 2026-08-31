# O(ops.count)

**Author:** Victor-SMK
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/5363561/](https://leetcode.com/problems/range-addition-ii/solutions/5363561/)

---


```
class Solution {
    func maxCount(_ m: Int, _ n: Int, _ ops: [[Int]]) -> Int {
        var minx = m
        var miny = n

        for oper in ops{
           minx = min(minx, oper[0])
           miny = min(miny, oper[1])
        }

        return minx * miny
    }
}
```