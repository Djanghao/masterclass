# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 84
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/1136361/](https://leetcode.com/problems/longest-common-prefix/solutions/1136361/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        
        if strs.isEmpty { return "" }
        var common = strs[0]
        
        for ch in strs {
            while !ch.hasPrefix(common) {
                common = String(common.dropLast())
            }
        }
        return common
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
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.004 (0.006) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.longestCommonPrefix(["flower","flow","flight"])
        XCTAssertEqual(value, "fl")
    }
    func test1() {
        let value = solution.longestCommonPrefix(["dog","racecar","car"])
        XCTAssertEqual(value, "")
    }
}

Tests.defaultTestSuite.run()
```
</details>