# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 40
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/1644155/](https://leetcode.com/problems/valid-parentheses/solutions/1644155/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func isValid(_ s: String) -> Bool {
        
        guard s.count % 2 == 0 else { return false }
        
        var stack: [Character] = []
        
        for ch in s {
            switch ch {
            case "(": stack.append(")")
            case "[": stack.append("]")
            case "{": stack.append("}")
            default:
                if stack.isEmpty || stack.removeLast() != ch {
                    return false
                }
            }
        }
        
        return stack.isEmpty
    }
}
```

---

<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.012 (0.014) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.isValid("()")
        XCTAssertTrue(value)
    }
    func test1() {
        let value = solution.isValid("()[]{}")
        XCTAssertTrue(value)
    }
    func test2() {
        let value = solution.isValid("(]")
        XCTAssertFalse(value)
    }
}

Tests.defaultTestSuite.run()
```
</details>