# 👋 Swift: Number of Ways to Split a String (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/1316722/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/1316722/)

---

**The decision is relevant: on July 05, 2021**

```swift
class Solution {
    private let mod = Int(10e8) + 7 // 10e9 is not suitable
    func numWays(_ s: String) -> Int {
        let l = s.count
        guard 3 <= l && l <= Int(10e5) else { return 0 } // MARK: Constraints
        var pf = [Int](), c = 0
        for d in s {
            if d == "1" { c += 1 }
            pf.append(c)
        }
        guard c % 3 == 0 else { return 0 }
        guard c != 0 else { return (l-2) * (l-1) / 2 % mod }
        
        let m1 = pf.firstIndex(of: c/3)!,
            m2 = pf.lastIndex(of: c/3)! + 1,
            m3 = pf.firstIndex(of: c*2/3)!,
            m4 = pf.lastIndex(of: c*2/3)! + 1
        return  (m2 - m1) * (m4 - m3) % mod
    }
}
```

```swift
import XCTest

// Executed 4 tests, with 0 failures (0 unexpected) in 0.137 (0.138) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        let res = s.numWays("10101")
        XCTAssertEqual(res, 4)
    }
    func test2() {
        let res = s.numWays("1001")
        XCTAssertEqual(res, 0)
    }
    func test3() {
        let res = s.numWays("0000")
        XCTAssertEqual(res, 3)
    }
    func test4() {
        let res = s.numWays("100100010100110")
        XCTAssertEqual(res, 12)
    }
}

Tests.defaultTestSuite.run()
```