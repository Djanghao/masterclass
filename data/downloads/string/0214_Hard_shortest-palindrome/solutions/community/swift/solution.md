# ✅ [Solution] Swift: Shortest Palindrome (+ test cases)

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/1773426/](https://leetcode.com/problems/shortest-palindrome/solutions/1773426/)

---

```swift
class Solution {
    func shortestPalindrome(_ s: String) -> String {
        let len = s.count
        let arr = Array(s), arrRev = Array(s.reversed())
        for i in 0..<len where arr.prefix(len - i) == arrRev.suffix(len - i) {
            return arrRev.prefix(i - 0) + s
        }
        return ""
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.005 (0.007) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.shortestPalindrome("aacecaaa")
        XCTAssertEqual(value, "aaacecaaa")
    }
    
    func test1() {
        let value = solution.shortestPalindrome("abcd")
        XCTAssertEqual(value, "dcbabcd")
    }
}

Tests.defaultTestSuite.run()
```

</details>