# Swift: Largest Palindrome Product

**Author:** AsahiOcean
**Votes:** 15
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/1190107/](https://leetcode.com/problems/largest-palindrome-product/solutions/1190107/)

---

```swift
class Solution {
    func largestPalindrome(_ n: Int) -> Int {
        let upper = Int(pow(10.0,Double(n))) - 1
        let lower = upper / 10, num = lower + 1
        for i in (num...upper).reversed() {
            let str = String(i)
            let p = Int(str + String(str.reversed()))!
            var j = upper
            while j * j > p {
                if p % j == 0 { return p % 1337 }
                j -= 1
            }
        }
        return 9
    }
}
```

```swift
import XCTest

// Executed 2 tests, with 0 failures (0 unexpected) in 0.006 (0.007) seconds
class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        XCTAssertEqual(s.largestPalindrome(2), 987) // success
    }
    func testExample2() {
        XCTAssertEqual(s.largestPalindrome(1), 9) // success
    }
}

Tests.defaultTestSuite.run()
```