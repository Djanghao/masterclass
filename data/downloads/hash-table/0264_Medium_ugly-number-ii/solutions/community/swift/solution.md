# ✅ O(n), O(n) | Custom Sequence Iterator

**Author:** eleev
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5654181/](https://leetcode.com/problems/ugly-number-ii/solutions/5654181/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func nthUglyNumber(_ n: Int) -> Int {
        var iterator = UglyNumbers().makeIterator()
        let next: () -> (Int, Int) -> Int = {
            { _, _ in iterator.next() ?? 0 }
        }
        return (0..<n).reduce(0, next())
    }
}

struct UglyNumbers: Sequence {
    typealias Iterator = UglyNumberIterator
    func makeIterator() -> Iterator { Iterator() }
}

struct UglyNumberIterator: IteratorProtocol {
    private var index = 0
    private var uglyNumbers = [1]
    private var (i2, i3, i5) = (0, 0, 0)
    private let factors = (2, 3, 5)

    mutating func next() -> Int? {
        defer { index += 1 }
        if index == uglyNumbers.count {
            let nextUgly = min(uglyNumbers[i2] * factors.0, uglyNumbers[i3] * factors.1, uglyNumbers[i5] * factors.2)
            uglyNumbers.append(nextUgly)
            
            if nextUgly == uglyNumbers[i2] * factors.0 { i2 += 1 }
            if nextUgly == uglyNumbers[i3] * factors.1 { i3 += 1 }
            if nextUgly == uglyNumbers[i5] * factors.2 { i5 += 1 }
        }
        return uglyNumbers[index]
    }
}
```