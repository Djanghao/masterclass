# ✅ [Solution] Swift

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/1858988/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/1858988/)

---

```swift
class Solution {
    func addToArrayForm(_ num: [Int], _ k: Int) -> [Int] {
        var result: [Int] = [], carry = k
        var idx = num.count - 1
        
        while idx >= 0 || carry > 0 {
            let dig = idx >= 0 ? num[idx] : 0
            let sum = carry + dig
            result.append(sum % 10)
            carry = sum / 10
            idx -= 1
        }
        return result.reversed()
    }
}
```

<hr>

<details>
<summary><b>TEST CASES</b></summary>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // 1200 + 34 = 1234
    func test0() {
        let value = solution.addToArrayForm([1,2,0,0], 34)
        XCTAssertEqual(value, [1,2,3,4])
    }
    
    // 274 + 181 = 455
    func test1() {
        let value = solution.addToArrayForm([2,7,4], 181)
        XCTAssertEqual(value, [4,5,5])
    }
    
    // 215 + 806 = 1021
    func test2() {
        let value = solution.addToArrayForm([2,1,5], 806)
        XCTAssertEqual(value, [1,0,2,1])
    }
}

Tests.defaultTestSuite.run()
```

</details>