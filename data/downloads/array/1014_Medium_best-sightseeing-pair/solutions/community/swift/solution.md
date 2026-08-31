# ✅ [Solution] Swift: Best Sightseeing Pair (+ test cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/1661812/](https://leetcode.com/problems/best-sightseeing-pair/solutions/1661812/)

---

```swift
class Solution {
    func maxScoreSightseeingPair(_ values: [Int]) -> Int {
        var value = 0
        var prevMax = values[0]
        for i in 1..<values.count {
            let score = values[i]
            value = max(value, prevMax + score - i)
            prevMax = max(prevMax, score + i)
        }
        return value
    }
}
```

---

<p>
<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.007 (0.008) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    /// i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
    func test0() {
        let value = solution.maxScoreSightseeingPair([8,1,5,2,6])
        XCTAssertEqual(value, 11)
    }
    
    func test1() {
        let value = solution.maxScoreSightseeingPair([1,2])
        XCTAssertEqual(value, 2)
    }
}

Tests.defaultTestSuite.run()
```
</details>
</p>