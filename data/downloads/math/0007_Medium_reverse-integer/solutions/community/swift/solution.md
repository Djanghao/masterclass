# ✅ [Solution] Swift: Reverse Integer (+ test cases)

**Author:** AsahiOcean
**Votes:** 40
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/1598636/](https://leetcode.com/problems/reverse-integer/solutions/1598636/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func reverse(_ x: Int) -> Int {
        var r = 0, x = x
        while x != 0 {
            r = r * 10
            r = r + (x % 10)
            x /= 10
        }
        return r < Int32.min || r > Int32.max ? 0 : r
    }
}
```

<hr>

<p>
<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<br>

<pre>
Result: Executed 4 tests, with 0 failures (0 unexpected) in 0.009 (0.011) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()

    func test0() {
        let value = solution.reverse(123)
        XCTAssertEqual(value, 321)
    }
    func test1() {
        let value = solution.reverse(-123)
        XCTAssertEqual(value, -321)
    }
    func test2() {
        let value = solution.reverse(120)
        XCTAssertEqual(value, 21)
    }
    func test3() {
        let value = solution.reverse(0)
        XCTAssertEqual(value, 0)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>