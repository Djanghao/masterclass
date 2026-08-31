# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 39
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/1597244/](https://leetcode.com/problems/zigzag-conversion/solutions/1597244/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        guard s != "" && numRows > 1 else { return s }
        
        var lines = Array(repeating: "", count: numRows)
        var idx = 0, flag = false
        
        for ch in s {
            lines[idx].append(ch)
            idx += flag ? -1 : 1
            if idx == -1 || idx == lines.count {
                idx += flag ? 2 : -2
                flag.toggle()
            }
        }
        return lines.joined()
    }
}
```

---

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.convert("PAYPALISHIRING", 3)
        XCTAssertEqual(value, "PAHNAPLSIIGYIR")
    }
    
    // P     I    N
    // A   L S  I G
    // Y A   H R
    // P     I
    func test1() {
        let value = solution.convert("PAYPALISHIRING", 4)
        XCTAssertEqual(value, "PINALSIGYAHRPI")
    }
    
    func test2() {
        let value = solution.convert("A", 1)
        XCTAssertEqual(value, "A")
    }
}

Tests.defaultTestSuite.run()
```