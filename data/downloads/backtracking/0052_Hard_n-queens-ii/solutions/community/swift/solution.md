# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 11
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/1718314/](https://leetcode.com/problems/n-queens-ii/solutions/1718314/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func totalNQueens(_ n: Int) -> Int {
        var res = 0, stack = [(Array(repeating: 0, count: n), 0)]
        
        while !stack.isEmpty {
            var cur = stack.removeLast(), row = cur.0, idx = cur.1
            if idx == row.count { res += 1; continue }
            for i in 0..<n {
                row[idx] = i
                if !detect(idx) { stack.append((row, idx + 1)) }
            }
            func detect(_ i: Int) -> Bool {
                var idx = i - 1
                while idx >= 0 {
                    let lhs = row[idx], rhs = row[i]
                    if lhs == rhs || abs(lhs - rhs) == (i - idx) { return true }
                    idx -= 1
                }
                return false
            }
        }
        return res
    }
}
```

---

<p>
<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.017 (0.019) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // There are two distinct solutions to the 4-queens puzzle as shown.
    func test0() {
        let value = solution.totalNQueens(4)
        XCTAssertEqual(value, 2)
    }
    
    func test1() {
        let value = solution.totalNQueens(1)
        XCTAssertEqual(value, 1)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>