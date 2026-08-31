# ✅ [Solution] Swift: Remove Duplicate Letters

**Author:** AsahiOcean
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/1860761/](https://leetcode.com/problems/remove-duplicate-letters/solutions/1860761/)

---

```swift
class Solution {
    func removeDuplicateLetters(_ s: String) -> String {
        var count: [Character:Int] = [:]
        s.forEach { count[$0] = count[$0, default: 0] + 1 }
        var stack: [Character] = []
        var visited: Set<Character> = []
        for c in s {
            count[c] = count[c, default: 0] - 1
            if visited.contains(c) { continue }
            while let last = stack.last, c < last, count[last, default: 0] > 0 {
                stack.removeLast()
                visited.remove(last)
            }
            stack.append(c)
            visited.insert(c)
        }
        return String(stack)
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.020 (0.022) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.removeDuplicateLetters("bcabc")
        XCTAssertEqual(value, "abc")
    }
    
    func test1() {
        let value = solution.removeDuplicateLetters("cbacdcbc")
        XCTAssertEqual(value, "acdb")
    }
}

Tests.defaultTestSuite.run()
```

</details>