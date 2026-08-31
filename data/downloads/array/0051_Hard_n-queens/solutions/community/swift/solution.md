# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 16
**Link:** [https://leetcode.com/problems/n-queens/solutions/1399897/](https://leetcode.com/problems/n-queens/solutions/1399897/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func solveNQueens(_ n: Int) -> [[String]] {
        var res = [[Int]]()
        
        func backtrack(_ p: [Int] = []) {
            if p.count == n { res.append(p) }
            var pth = p, avb = Set<Int>(0..<n)
            for (i,n) in pth.enumerated() {
                if let idx = avb.firstIndex(of: n - pth.count + i) { avb.remove(at: idx) }
                if let idx = avb.firstIndex(of: n) { avb.remove(at: idx) }
                if let idx = avb.firstIndex(of: n + pth.count - i) { avb.remove(at: idx) }
            }
            for i in 0..<n where avb.contains(i) {
                pth.append(i)
                backtrack(pth)
                pth.remove(at: pth.count - 1)
            }
        }
        backtrack()
        return res.map { $0.map { i in (0..<n).map { j in (i == j ? "Q" : ".") }.joined() }}
    }
}
```

<hr>

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<p><pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.023 (0.025) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let res = solution.solveNQueens(4)
        XCTAssertEqual(res, [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]])
    }
    
    func test1() {
        let res = solution.solveNQueens(1)
        XCTAssertEqual(res, [["Q"]])
    }
}

Tests.defaultTestSuite.run()
```

</details></p>