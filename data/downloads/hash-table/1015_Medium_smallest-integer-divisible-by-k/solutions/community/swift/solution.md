# ✅ [Solution] Swift: Smallest Integer Divisible by K (+ test cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1655658/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1655658/)

---

```swift
class Solution {
    func smallestRepunitDivByK(_ k: Int) -> Int {
        guard !(k % 2 == 0 || k % 5 == 0) else { return -1 }
        guard k != 1 else { return 1 }
        var length = 1
        var temp = 1
        while temp != 0 {
            temp = (temp * 10 + 1) % k
            length += 1
        }
        return length
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
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.008 (0.009) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.smallestRepunitDivByK(1)
        XCTAssertEqual(value, 1)
    }
    func test1() {
        let value = solution.smallestRepunitDivByK(2)
        XCTAssertEqual(value, -1)
    }
    func test3() {
        let value = solution.smallestRepunitDivByK(3)
        XCTAssertEqual(value, 3)
    }
}
```
</details>