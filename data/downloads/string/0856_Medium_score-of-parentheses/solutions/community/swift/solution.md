# ✅ [Solution] Swift: Score of Parentheses

**Author:** AsahiOcean
**Votes:** 6
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1248095/](https://leetcode.com/problems/score-of-parentheses/solutions/1248095/)

---

```swift
class Solution {
    func scoreOfParentheses(_ s: String) -> Int {
        
        var arr = Array(s), val = 0, res = 0
        
        for i in 0 ..< arr.count {
            if arr[i] == "(" {
                val += 1
            } else {
                val -= 1
                if arr[i-1] == "(" { res += 1 << val }
            }
        }
        return res
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 3 tests, with 0 failures (0 unexpected) in 0.008 (0.009) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.scoreOfParentheses("()")
        XCTAssertEqual(value, 1)
    }
    
    func test1() {
        let value = solution.scoreOfParentheses("(())")
        XCTAssertEqual(value, 2)
    }
    
    func test2() {
        let value = solution.scoreOfParentheses("()()")
        XCTAssertEqual(value, 2)
    }
}

Tests.defaultTestSuite.run()
```

</details>