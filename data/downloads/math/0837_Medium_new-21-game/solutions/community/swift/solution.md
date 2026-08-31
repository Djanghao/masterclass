# Swift: New 21 Game (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 6
**Link:** [https://leetcode.com/problems/new-21-game/solutions/1248042/](https://leetcode.com/problems/new-21-game/solutions/1248042/)

---

```swift
class Solution {
    func new21Game(_ n: Int, _ k: Int, _ maxPts: Int) -> Double {
        guard k != 0 && n < (k + maxPts) else { return 1.0 }
        var dp = [Double](repeating: 0, count: n+1)
        dp[0] = 1.0
        var result = 0.0, val = 1.0
        for i in 1...n {
            dp[i] = val / Double(maxPts)
            i < k ? (val += dp[i]) : (result += dp[i])
            if i - maxPts >= 0 { val -= dp[i - maxPts] }
        }
        return result
    }
}
```

```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.006 (0.007) seconds
// In the examples for the task the values seem to have been rounded up

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.new21Game(10, 1, 10), 0.9999999999999999) // 1.00000
    }
    func test2() {
        XCTAssertEqual(s.new21Game(6, 1, 10), 0.60000)
    }
    func test3() {
        XCTAssertEqual(s.new21Game(21, 17, 10), 0.7327777870686082) // 0.73278
    }
}

Tests.defaultTestSuite.run()
```