# Swift: Subtract the Product and Sum of Digits of an Integer

**Author:** AsahiOcean
**Votes:** 19
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/1157584/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/1157584/)

---

```swift
class Solution {
    func subtractProductAndSum(_ n: Int) -> Int {
        if 1 <= n && n <= 10^5 { return 0 }
        var cp = n, products = [Int]()
        while cp > 0 {
            products.insert(cp % 10, at: 0)
            cp /= 10
        }
        let product = products.reduce(1, *)
        let sum = products.reduce(0, +)
        return product - sum
    }
}
```

```swift
import XCTest

// Executed 2 tests, with 0 failures (0 unexpected) in 0.006 (0.008) seconds

class Tests: XCTestCase {
    private let s = Solution()
    
    func testExample1() {
        XCTAssert(s.subtractProductAndSum(234) == 15) // success
    }
    func testExample2() {
        XCTAssert(s.subtractProductAndSum(4421) == 21) // success
    }
}

Tests.defaultTestSuite.run()
```