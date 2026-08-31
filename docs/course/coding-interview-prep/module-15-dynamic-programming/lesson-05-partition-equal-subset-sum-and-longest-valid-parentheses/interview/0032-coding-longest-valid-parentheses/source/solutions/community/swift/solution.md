# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 33
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/1349298/](https://leetcode.com/problems/longest-valid-parentheses/solutions/1349298/)

---

```swift
class Solution {
    func longestValidParentheses(_ s: String) -> Int {
        guard !s.isEmpty else { return 0 }
        var val = 0, stack = [-1]
        for (i, ch) in s.enumerated() {
            guard ch != "(" else { stack.append(i); continue }
            guard stack.count > 1 else { stack[0] = i; continue }
            stack.removeLast()
            val = max(val, i - stack.last!)
        }
        return val
    }
}
```

<hr>

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<p><pre>
Result: Executed 3 tests, with 0 failures (0 unexpected) in 0.010 (0.012) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // The longest valid parentheses substring is "()".
    func test0() {
        let res = solution.longestValidParentheses("(()")
        XCTAssertEqual(res, 2)
    }
    
    // The longest valid parentheses substring is "()()".
    func test1() {
        let res = solution.longestValidParentheses(")()())")
        XCTAssertEqual(res, 4)
    }
    
    func test2() {
        let res = solution.longestValidParentheses("")
        XCTAssertEqual(res, 0)
    }
}

Tests.defaultTestSuite.run()
```

</details></p>