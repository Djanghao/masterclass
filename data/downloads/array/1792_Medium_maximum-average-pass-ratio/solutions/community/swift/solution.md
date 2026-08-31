# [Swift] Max Heap solution

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/6148013/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/6148013/)

---

```
import Collections

struct Ratio: Comparable {
    let pass: Int
    let total: Int
    static func <(l:Self, r:Self) -> Bool { 
        Double(l.pass + 1) / Double(l.total + 1) - Double(l.pass) / Double(l.total) < 
        Double(r.pass + 1) / Double(r.total + 1) - Double(r.pass) / Double(r.total) 
    }
}

class Solution {
    func maxAverageRatio(_ classes: [[Int]], _ extraStudents: Int) -> Double {
        var heap = Heap<Ratio>()
        var sum = 0.0
        for c in classes {
            heap.insert(Ratio(pass: c[0], total: c[1]))
            sum += Double(c[0]) / Double(c[1])
        }
        var n = extraStudents
        while n > 0 {
            if let ratio = heap.popMax() {
                sum -= Double(ratio.pass) / Double(ratio.total)
                heap.insert(Ratio(pass: ratio.pass + 1, total: ratio.total + 1))
                sum += Double(ratio.pass + 1) / Double(ratio.total + 1)
                n -= 1
            }
        }
        return sum / Double(classes.count)
    }
}
```