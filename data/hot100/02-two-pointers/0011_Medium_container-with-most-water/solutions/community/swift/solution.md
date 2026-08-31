# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 58
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/1144091/](https://leetcode.com/problems/container-with-most-water/solutions/1144091/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func maxArea(_ h: [Int]) -> Int {
        guard h.count > 2 else { return min(h[0], h[1]) }
        var val = 0, lhs = 0, rhs = h.count - 1
        while lhs < rhs {
            val = max(val, min(h[lhs], h[rhs]) * (rhs - lhs))
            h[lhs] < h[rhs] ? (lhs += 1) : (rhs -= 1)
        }
        return val
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
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.004 (0.006) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
    // In this case, the max area of water (blue section) the container can contain is 49.
    func test0() {
        let value = solution.maxArea([1,8,6,2,5,4,8,3,7])
        XCTAssertEqual(value, 49)
    }
    
    func test1() {
        let value = solution.maxArea([1,1])
        XCTAssertEqual(value, 1)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>