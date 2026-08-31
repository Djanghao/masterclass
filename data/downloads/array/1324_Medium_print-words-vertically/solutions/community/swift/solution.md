# Swift: Print Words Vertically (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/1314209/](https://leetcode.com/problems/print-words-vertically/solutions/1314209/)

---

```swift
class Solution {
    func printVertically(_ s: String) -> [String] {
        let comps = s.split(separator: " ").map {[Character]($0)}
        var count = 0
        comps.forEach { count = max($0.count, count) }
        var arr = Array(repeating: "", count: count)
        for i in 0..<count {
            comps.forEach{ arr[i].append(i >= $0.count ? " " : $0[i]) }
            while arr[i].last! == " " { arr[i].removeLast() }
        }
        return arr
    }
}
```

```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.181 (0.183) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        let result = s.printVertically("HOW ARE YOU")
        XCTAssertEqual(result, ["HAY","ORO","WEU"])
    }
    func test2() {
        let result = s.printVertically("TO BE OR NOT TO BE")
        XCTAssertEqual(result, ["TBONTB","OEROOE","   T"])
    }
    func test3() {
        let result = s.printVertically("CONTEST IS COMING")
        XCTAssertEqual(result, ["CIC","OSO","N M","T I","E N","S G","T"])
    }
}

Tests.defaultTestSuite.run()
```