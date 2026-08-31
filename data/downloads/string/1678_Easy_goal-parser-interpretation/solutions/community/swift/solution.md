# Swift: Goal Parser Interpretation

**Author:** AsahiOcean
**Votes:** 13
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/1157674/](https://leetcode.com/problems/goal-parser-interpretation/solutions/1157674/)

---

```swift
class Solution {
    func interpret(_ command: String) -> String {
        if !(1...100).contains(command.count) { return "" }
        let o = command.replacingOccurrences(of: "()", with: "o")
        return o.replacingOccurrences(of: "(al)", with: "al")
    }
}
```

```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.006 (0.009) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        XCTAssertEqual(s.interpret("G()(al)"),"Goal") // success
    }
    func testExample2() {
        XCTAssertEqual(s.interpret("G()()()()(al)"),"Gooooal") // success
    }
    func testExample3() {
        XCTAssertEqual(s.interpret("(al)G(al)()()G"),"alGalooG") // success
    }
}

Tests.defaultTestSuite.run()
```