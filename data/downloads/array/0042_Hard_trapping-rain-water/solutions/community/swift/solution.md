# ✅ [Accepted] Swift: Trapping Rain Water (with test cases)

**Author:** AsahiOcean
**Votes:** 32
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/1355890/](https://leetcode.com/problems/trapping-rain-water/solutions/1355890/)

---

```swift
class Solution {
    func trap(_ h: [Int]) -> Int {
        var res = 0, stack = [Int]()
        for i in h.indices {
            while !stack.isEmpty && h[i] > h[stack.last!] {
                let top = stack.removeLast()
                if let l = stack.last {
                    res += (i-l-1) * (min(h[i], h[l]) - h[top])   
                }
            }
            stack.append(i)
        }
        return res
    }
}
```

---

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    /// The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
    /// In this case, 6 units of rain water (blue section) are being trapped.
    func test0() {
        let value = solution.trap([0,1,0,2,1,0,1,3,2,1,2,1])
        XCTAssertEqual(value, 6)
    }
    
    func test1() {
        let value = solution.trap([4,2,0,3,2,5])
        XCTAssertEqual(value, 9)
    }
}

Tests.defaultTestSuite.run()
```