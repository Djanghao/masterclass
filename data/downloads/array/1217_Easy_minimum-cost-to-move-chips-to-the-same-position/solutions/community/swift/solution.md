# ✅ [Solution] Swift: Minimum Cost to Move Chips to The Same Position (+ test cases)

**Author:** AsahiOcean
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1615055/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1615055/)

---

```swift
class Solution {
    func minCostToMoveChips(_ position: [Int]) -> Int {
        var even = 0, odd = 0
        for p in position { p % 2 == 0 ? (even += 1) : (odd += 1) }
        return odd > even ? even : odd
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
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.007 (0.010) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // First step: Move the chip at position 3 to position 1 with cost = 0.
    // Second step: Move the chip at position 2 to position 1 with cost = 1.
    // Total cost is 1.
    func test0() {
        let value = solution.minCostToMoveChips([1,2,3])
        XCTAssertEqual(value, 1)
    }
    
    // We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.
    func test1() {
        let value = solution.minCostToMoveChips([2,2,2,3,3])
        XCTAssertEqual(value, 2)
    }
    
    func test2() {
        let value = solution.minCostToMoveChips([1,1000000000])
        XCTAssertEqual(value, 1)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>