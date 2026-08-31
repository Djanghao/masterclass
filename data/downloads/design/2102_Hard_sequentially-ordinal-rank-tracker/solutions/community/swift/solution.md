# Swift 100% Faster🔥🔥 SortedArray

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3642054/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3642054/)

---

```
struct Location: Comparable {
    let name: String
    let score: Int
    static func < (lhs: Self, rhs: Self) -> Bool {
        (lhs.score, lhs.name) < (rhs.score, rhs.name)
    }
} 

class SORTracker {
    var i: Int
    var locations: [Location]
    init() {
        i = 0
        locations = []
    }
    
    func add(_ name: String, _ score: Int) {
        locations.insort(Location(name: name, score: -score))
    }
    
    func get() -> String {
        defer { i += 1 }
        return locations[i].name
    }
}

extension Array where Element: Comparable {
    mutating func insort(_ item: Element) {
        let i = bisectLeft(item)
        self.insert(item, at: i)
    }
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
}
```