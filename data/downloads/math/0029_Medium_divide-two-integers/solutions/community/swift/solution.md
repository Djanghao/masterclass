# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 41
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/1163652/](https://leetcode.com/problems/divide-two-integers/solutions/1163652/)

---

```swift
class Solution {
    func divide(_ dd: Int, _ dr: Int) -> Int {
        let dd64 = Int64(abs(dd)), dr64 = Int64(abs(dr))
        var val: Int64 = 0, lhs: Int64 = 1, rhs = dd64
        while lhs <= rhs {
            let mid = (lhs + rhs) / 2
            if mid * dr64 <= dd64 {
                val = mid
                lhs = mid + 1
            } else {
                rhs = mid - 1
            }
        }
        return max(min(Int((dd * dr) < 0 ? -val : val), Int(Int32.max)), Int(Int32.min))
    }
}
```

<hr>

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<p><pre>
Result: Executed 4 tests, with 0 failures (0 unexpected) in 0.006 (0.008) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // 10/3 = 3.33333.. which is truncated to 3.
    func test0() {
        let value = solution.divide(10, 3)
        XCTAssertEqual(value, 3)
    }
    
    // 7/-3 = -2.33333.. which is truncated to -2.
    func test1() {
        let value = solution.divide(7, -3)
        XCTAssertEqual(value, -2)
    }
    
    func test2() {
        let value = solution.divide(0, -1)
        XCTAssertEqual(value, 0)
    }
    
    func test3() {
        let value = solution.divide(1, 1)
        XCTAssertEqual(value, 1)
    }
}

Tests.defaultTestSuite.run()
```

</details></p>