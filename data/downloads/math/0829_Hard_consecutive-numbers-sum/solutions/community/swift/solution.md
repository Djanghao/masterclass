# Swift: Consecutive Numbers Sum (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 8
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/1235055/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/1235055/)

---

```swift
class Solution {
    func consecutiveNumbersSum(_ n: Int) -> Int {
        var res = 1, k = 2.0, dn = Double(n*2)
        while (dn + k - (k*k)) > 0 { // don't use "pow"
            let a = (dn + k - (k * k)) / (2.0 * k)
            if a  == floor(a) { res += 1 }
            k += 1
        }
        return res
    }
}
```

```swift
import XCTest

//      Executed 3 tests, with 0 failures (0 unexpected) in 0.005 (0.007) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.consecutiveNumbersSum(5), 2)
    }
    func test2() {
        XCTAssertEqual(s.consecutiveNumbersSum(9), 3)
    }
    func test3() {
        XCTAssertEqual(s.consecutiveNumbersSum(15), 4)
    }
}

Tests.defaultTestSuite.run()
```