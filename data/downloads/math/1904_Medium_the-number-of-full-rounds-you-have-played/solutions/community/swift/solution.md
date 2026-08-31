# Swift: The Number of Full Rounds You Have Played (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1315959/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1315959/)

---

```swift
class Solution {
    private func timeStr2Int(_ time: String) -> Int {
        let split = time.split(separator: ":")
        return (Int(split[0]) ?? 0) * 60 + (Int(split[1]) ?? 0)
    }
    func numberOfRounds(_ startTime: String, _ finishTime: String) -> Int {
        var s = timeStr2Int(startTime), f = timeStr2Int(finishTime)
        if f < s { f += 24 * 60 }
        var result = 0
        for t in s...f where t % 15 == 0 && f-t >= 15 { result += 1 }
        return result
    }
}
```

```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.034 (0.036) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        let result = s.numberOfRounds("12:01", "12:44")
        XCTAssertEqual(result, 1)
    }
    func test2() {
        let result = s.numberOfRounds("20:00", "06:00")
        XCTAssertEqual(result, 40)
    }
    func test3() {
        let result = s.numberOfRounds("00:00", "23:59")
        XCTAssertEqual(result, 95)
    }
}

Tests.defaultTestSuite.run()
```