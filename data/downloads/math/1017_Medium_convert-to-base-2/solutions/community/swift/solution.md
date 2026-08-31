# Swift: Convert to Base -2

**Author:** AsahiOcean
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/1225195/](https://leetcode.com/problems/convert-to-base-2/solutions/1225195/)

---

```swift
import Foundation

class Solution {
    func baseNeg2(_ n: Int) -> String {
        if n == 0 { return n.description }
        var chs = [Character]()
        var n = n
        while n != 0 {
            chs.append(contentsOf: String(n & 1))
            n = -(n >> 1)
        }
        return String(chs.reversed())
    }
}
```

```swift
import XCTest

//      Executed 3 tests, with 0 failures (0 unexpected) in 0.006 (0.007) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.baseNeg2(2), "110")
    }
    func test2() {
        XCTAssertEqual(s.baseNeg2(3), "111")
    }
    func test3() {
        XCTAssertEqual(s.baseNeg2(4), "100")
    }
}

Tests.defaultTestSuite.run()
```