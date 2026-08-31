# ✅ 100% Runtime O(n) and Memory O(n) Efficiency

**Author:** eleev
**Votes:** 3
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736083/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736083/)

---

![Screenshot](./images/0.png)\r
\r
# Solution\r
```swift\r
final class Solution {\r
    @_optimize(speed)\r
    func findLeastNumOfUniqueInts(_ arr: [Int], _ k: Int) -> Int {\r
        let n = arr.count\r
        let freqs = Dictionary(arr.map { ($0, 1) }, uniquingKeysWith: +)\r
        let freqsCount = freqs.values.reduce(into: [Int](repeating: 0, count: n + 1)) { $0[$1] += 1 }\r
        var uniquesLeft = freqs.count\r
        consume freqs\r
        var k = k\r
\r
        for i in 1...n {\r
            let toRemove = min(k / i, freqsCount[i])\r
            k -= (i * toRemove)\r
            uniquesLeft -= toRemove\r
            if k < i {\r
                return uniquesLeft\r
            }\r
        }\r
        return 0\r
    }\r
}\r
```