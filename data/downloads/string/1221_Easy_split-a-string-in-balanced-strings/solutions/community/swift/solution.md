# Swift: Split a String in Balanced Strings [Runtime: 0 ms]

**Author:** AsahiOcean
**Votes:** 12
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1157759/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1157759/)

---

**Runtime: 0 ms**
**Memory: 14.6 MB**

```swift
class Solution {
    func balancedStringSplit(_ s: String) -> Int {
        var b = 0, res = 0
        s.forEach({
            $0 == "R" ? b += 1 : (b -= 1)
            b == 0 ? res += 1 : nil
        })
        return res
    }
}
```

```swift
import XCTest

//      Executed 4 tests, with 0 failures (0 unexpected) in 0.040 (0.043) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        XCTAssert(s.balancedStringSplit("RLRRLLRLRL") == 4) // success
    }
    func testExample2() {
        XCTAssert(s.balancedStringSplit("RLLLLRRRLR") == 3) // success
    }
    func testExample3() {
        XCTAssert(s.balancedStringSplit("LLLLRRRR") == 1) // success
    }
    func testExample4() {
        XCTAssert(s.balancedStringSplit("RLRRRLLRLL") == 2) // success
    }
}

Tests.defaultTestSuite.run()
```