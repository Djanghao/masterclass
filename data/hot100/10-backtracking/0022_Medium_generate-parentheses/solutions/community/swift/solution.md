# ✅ [Accepted] Swift: Generate Parentheses (+ test cases)

**Author:** AsahiOcean
**Votes:** 25
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/1656798/](https://leetcode.com/problems/generate-parentheses/solutions/1656798/)

---

```swift
class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        guard n > 0 else { return [""] }
        var result = [String]()
        for i in 0..<n {
            for l in generateParenthesis(i) {
                for r in generateParenthesis(n - 1 - i) {
                    result.append("(" + l + ")" + r)
                }
            }
        }
        return result
    }
}
```

---

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.generateParenthesis(3)
        XCTAssertEqual(value, ["()()()","()(())","(())()","(()())","((()))"])
    }
    
    func test1() {
        let value = solution.generateParenthesis(1)
        XCTAssertEqual(value, ["()"])
    }
}

Tests.defaultTestSuite.run()
```