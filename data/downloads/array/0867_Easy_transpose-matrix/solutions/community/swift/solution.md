# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2101393/](https://leetcode.com/problems/transpose-matrix/solutions/2101393/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func transpose(_ m: [[Int]]) -> [[Int]] {
        return (0..<m[0].count).map { c in (0..<m.count).map { m[$0][c] } }
    }
}
```

<hr>

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<p><pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.007 (0.009) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {

    private let solution = Solution()
    
    func test0() {
        let value = solution.transpose([[1,2,3],[4,5,6],[7,8,9]])
        XCTAssertEqual(value, [[1,4,7],[2,5,8],[3,6,9]])
    }
    
    func test1() {
        let value = solution.transpose([[1,2,3],[4,5,6]])
        XCTAssertEqual(value, [[1,4],[2,5],[3,6]])
    }
}

Tests.defaultTestSuite.run()
```

</details></p>