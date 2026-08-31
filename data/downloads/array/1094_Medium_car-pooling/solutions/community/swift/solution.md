# ✅ [Solution] Swift: Car Pooling (+ test cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-pooling/solutions/1669590/](https://leetcode.com/problems/car-pooling/solutions/1669590/)

---

```swift
class Solution {
    func carPooling(_ trips: [[Int]], _ capacity: Int) -> Bool {
        var route = [Int](repeating: 0, count: 1001)
        for t in trips {
            route[t[1]] += t[0]
            route[t[2]] -= t[0]
        }
        var numPassengers = 0
        for el in route {
            numPassengers += el
            if numPassengers > capacity {
                return false
            }
        }
        return true
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
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.016 (0.018) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.carPooling([[2,1,5],[3,3,7]], 4)
        XCTAssertEqual(value, false)
    }
    
    func test1() {
        let value = solution.carPooling([[2,1,5],[3,3,7]], 5)
        XCTAssertEqual(value, true)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>