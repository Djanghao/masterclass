# ✅ [Solution] Swift: Richest Customer Wealth (+ test cases)

**Author:** AsahiOcean
**Votes:** 13
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/1153909/](https://leetcode.com/problems/richest-customer-wealth/solutions/1153909/)

---

```swift
class Solution {
    func maximumWealth(_ accounts: [[Int]]) -> Int {
        return accounts.reduce(0, { max($0, $1.reduce(0, +)) })
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
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.008 (0.010) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // 1st customer has wealth = 1 + 2 + 3 = 6
    // 2nd customer has wealth = 3 + 2 + 1 = 6
    // Both customers are considered the richest with a wealth of 6 each, so return 6.
    func test0() {
        let value = solution.maximumWealth([[1,2,3],[3,2,1]])
        XCTAssertEqual(value, 6)
    }
    
    // 1st customer has wealth = 6
    // 2nd customer has wealth = 10
    // 3rd customer has wealth = 8
    // The 2nd customer is the richest with a wealth of 10.
    func test1() {
        let value = solution.maximumWealth([[1,5],[7,3],[3,5]])
        XCTAssertEqual(value, 10)
    }
    
    func test2() {
        let value = solution.maximumWealth([[2,8,7],[7,1,3],[1,9,5]])
        XCTAssertEqual(value, 17)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>