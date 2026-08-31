# ✅ [Solution] Swift: Excel Sheet Column Number (+ test cases)

**Author:** AsahiOcean
**Votes:** 12
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/1327476/](https://leetcode.com/problems/excel-sheet-column-number/solutions/1327476/)

---

```swift
class Solution {
    func titleToNumber(_ columnTitle: String) -> Int {
        return columnTitle.unicodeScalars.reduce(0, { $0 * 26 + Int($1.value) - 64})
    }
}
```

---

<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.006 (0.008) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.titleToNumber("A")
        XCTAssertEqual(value, 1)
    }
    func test1() {
        let value = solution.titleToNumber("AB")
        XCTAssertEqual(value, 28)
    }
    func test2() {
        let value = solution.titleToNumber("ZY")
        XCTAssertEqual(value, 701)
    }
}

Tests.defaultTestSuite.run()
```
</details>