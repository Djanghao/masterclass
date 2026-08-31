# ✅ [Solution] Swift

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1867376/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1867376/)

---

```swift
class Solution {
    func minDominoRotations(_ tops: [Int], _ bottoms: [Int]) -> Int {
        guard !tops.isEmpty && !bottoms.isEmpty else { return -1 }
        let lnT = tops.count
        var vals: [Int:Int] = [:]
        for i in 0..<lnT {
            vals[tops[i]] = 1 + vals[tops[i], default: 0]
            if tops[i] != bottoms[i] {
                vals[bottoms[i]] = 1 + vals[bottoms[i], default: 0]
            }
        }
        if let ffval = vals.filter({$0.value == lnT}).first {
            let key = ffval.key
            var valT = 0, valB = 0
            for i in 0..<lnT {
                if tops[i] != key { valT += 1 }
                if bottoms[i] != key { valB += 1 }
            }
            return min(valT, valB)
        }
        return -1
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
    
    // The first figure represents the dominoes as given by tops and bottoms:
    // before we do any rotations.
    // If we rotate the second and fourth dominoes, we can make every value
    // in the top row equal to 2, as indicated by the second figure.
    func test0() {
        let value = solution.minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])
        XCTAssertEqual(value, 2)
    }
    
    // In this case, it is not possible to rotate the dominoes to make one row of values equal.
    func test1() {
        let value = solution.minDominoRotations([3,5,1,2,3], [3,6,3,3,4])
        XCTAssertEqual(value, -1)
    }
}

Tests.defaultTestSuite.run()
```

</details>