# ✅✅Swift 100% faster 3300ms. Extending Array to be SortedArray.🔥

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3693396/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3693396/)

---

```
class Solution {
    func createSortedArray(_ instructions: [Int]) -> Int {
        var slst: [Int] = []
        var cost = 0
        for instruction in instructions {
            let nStrictlyLesser = slst.bisectLeft(instruction)
            let nStrictlyGreater = slst.count - slst.bisectRight(instruction)
            cost = (cost + min(nStrictlyLesser, nStrictlyGreater)) % Int(1e9+7)
            slst.insort(instruction) 
        }
        return cost
    }
}

extension Array where Element: Comparable {
    func bisectLeft(_ target: Element) -> Int {
        var (lo, hi) = (0, count)
        while lo < hi {
            let mid = lo + (hi - lo) / 2
            if self[mid] < target {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        return lo
    }

    func bisectRight(_ target: Element) -> Int {
        var (lo, hi) = (0, count)
        while lo < hi {
            let mid = lo + (hi - lo) / 2
            if self[mid] <= target {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        return lo
    }

    mutating func insort(_ element: Element) {
        let i = bisectRight(element)
        insert(element, at: i)
    }
}
```