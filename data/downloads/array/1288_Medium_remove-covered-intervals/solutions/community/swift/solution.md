# ✅ [Solution] Swift: Remove Covered Intervals (+ test cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1785804/](https://leetcode.com/problems/remove-covered-intervals/solutions/1785804/)

---

```swift
class Solution {
    func removeCoveredIntervals(_ intervals: [[Int]]) -> Int {
        let sorted = intervals.sorted(by: { $0[0] == $1[0] ? $0[1] > $1[1] : $0[0] < $1[0] })
        
        var value = 0, next = 0
        
        for i in sorted where i[1] > next {
            next = i[1]
            value += 1
        }
        return value
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.008 (0.010) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // Interval [3,6] is covered by [2,8], therefore it is removed.
    func test0() {
        let value = solution.removeCoveredIntervals([[1,4],[3,6],[2,8]])
        XCTAssertEqual(value, 2)
    }
    
    func test1() {
        let value = solution.removeCoveredIntervals([[1,4],[2,3]])
        XCTAssertEqual(value, 1)
    }
}

Tests.defaultTestSuite.run()
```

</details>