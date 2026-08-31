# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5988003/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5988003/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func divideString(_ s: String, _ k: Int, _ fill: Character) -> [String] {
        let s = Array(s)
        let (quotient, remainder) = s.count.quotientAndRemainder(dividingBy: k)
        var result = (0 ..< quotient).map { i in String(s[(i*k)...].prefix(k)) }
        if remainder > 0 {
            result.append(s.suffix(remainder) + String(repeating: fill, count: k - remainder))
        }
        return result
    }
}
```

**Expanded One-Liner, using Algorithms (accepted answer)**
Only show this in an interview as an enhancement to the long-hand rendition above.
```
import Algorithms
class Solution {
    func divideString(_ s: String, _ k: Int, _ fill: Character) -> [String] {
        s.chunks(ofCount: k).map { chunk in
            chunk + String(repeating: fill, count: k - chunk.count)
        }
    }
}
```
`.chunks(ofCount:)` documentation: [https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/collection/chunks(ofcount:)](https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/collection/chunks(ofcount:))