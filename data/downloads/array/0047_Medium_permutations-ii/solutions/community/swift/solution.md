# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 26
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/1355985/](https://leetcode.com/problems/permutations-ii/solutions/1355985/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func permuteUnique(_ nums: [Int]) -> [[Int]] {
        var res = [[Int]](), path = [Int](), vis = [Bool](repeating: false, count: nums.count)
        dfs(&res, &path, &vis, nums.sorted(by: <))
        return res
    }
    private func dfs(_ r: inout [[Int]], _ p: inout [Int], _ v: inout [Bool], _ n: [Int]) {
        guard p.count != n.count else { r.append(p); return }
        for i in 0..<n.count {
            if v[i] || (i > 0 && n[i] == n[i-1] && v[i-1]) { continue }
            p.append(n[i])
            v[i] = true
            dfs(&r, &p, &v, n)
            p.removeLast()
            v[i] = false
        }
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.025 (0.027) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.permuteUnique([1,1,2])
        XCTAssertEqual(value, [[1,1,2],[1,2,1],[2,1,1]])
    }
    func test1() {
        let value = solution.permuteUnique([1,2,3])
        XCTAssertEqual(value, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
    }
}

Tests.defaultTestSuite.run()
```

</details>