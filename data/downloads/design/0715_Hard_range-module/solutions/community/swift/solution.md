# Swift add and remove O(n), query O(logn)

**Author:** diogosouza
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-module/solutions/4623829/](https://leetcode.com/problems/range-module/solutions/4623829/)

---


# Code
```
class RangeModule {
    private var ranges: [Range<Int>] = []

    func addRange(_ left: Int, _ right: Int) {
        var newRanges: [Range<Int>] = []
        var newRange = left..<right

        // first, add new range to correct index if sorted by lower bound
        var indexToInsert = 0
        for range in ranges {
            if range.lowerBound >= left { break }
            indexToInsert += 1
        }
        ranges.insert(newRange, at: indexToInsert)

        // next, check each range and merge if needed.
        // instead of changing ranges directly, which would need O(n) insert/remove operations, we add to newRanges
        for range in ranges {
            if let lastRange = newRanges.last, lastRange.upperBound >= range.lowerBound {
                let lower = lastRange.lowerBound
                let upper = max(lastRange.upperBound, range.upperBound)
                newRanges[newRanges.count - 1] = lower..<upper
            } else {
                newRanges.append(range)
            }
        }
        ranges = newRanges
    }

    func queryRange(_ left: Int, _ right: Int) -> Bool {
        // binary search
        var low = 0
        var high = ranges.count - 1
        while low <= high {
            let mid = (low + high) / 2
            let range = ranges[mid]
            if range.lowerBound <= left && range.upperBound >= right { return true }
            if range.upperBound < left {
                low = mid + 1
            } else if range.lowerBound > right {
                high = mid - 1
            } else { return false }

        }
        return false
    }

    func removeRange(_ left: Int, _ right: Int) {
        // similar to addRange, we populate newRanges instead of using O(n) operations on ranges
        var newRanges: [Range<Int>] = []
        for range in ranges {
            guard range.overlaps(left..<right) else {
                newRanges.append(range)
                continue
            }
            if left <= range.lowerBound && right >= range.upperBound {
                continue
            } else if left <= range.lowerBound {
                newRanges.append(right..<range.upperBound)
            } else if right >= range.upperBound {
                newRanges.append(range.lowerBound..<left)
            } else {
                newRanges.append(range.lowerBound..<left)
                newRanges.append(right..<range.upperBound)
            }
        }
        ranges = newRanges
    }
}
```