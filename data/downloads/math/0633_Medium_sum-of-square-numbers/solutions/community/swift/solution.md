# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/1929909/](https://leetcode.com/problems/sum-of-square-numbers/solutions/1929909/)

---

```swift
class Solution {
    func judgeSquareSum(_ c: Int) -> Bool {
        if c < 0 { return false }
        if c == 0 || c == 1 || c == 2 { return true }
        for i in 0...Int(sqrt(Double(c))) {
            let val = sqrt(Double(c - i * i))
            if val == Double(Int(val)) { return true }
        }
        return false
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.009 (0.011) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {

    private let solution = Solution()
    
    // 1 * 1 + 2 * 2 = 5
    func test0() {
        let value = solution.judgeSquareSum(5)
        XCTAssertEqual(value, true)
    }
    
    func test1() {
        let value = solution.judgeSquareSum(3)
        XCTAssertEqual(value, false)
    }
}

Tests.defaultTestSuite.run()
```

</details>