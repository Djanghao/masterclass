# ✅ [Solution] Swift: Can Place Flowers (+ test cases)

**Author:** AsahiOcean
**Votes:** 6
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/1700553/](https://leetcode.com/problems/can-place-flowers/solutions/1700553/)

---

```swift
class Solution {
    func canPlaceFlowers(_ flowerbed: [Int], _ n: Int) -> Bool {
        var flowerbed = flowerbed
        var placed = 0
        
        for (idx, plot) in flowerbed.enumerated() where plot != 1 {
            let prevIdx = (idx - 1), nextIdx = (idx + 1)
            if prevIdx >= 0, flowerbed[prevIdx] != 0 { continue }
            if nextIdx < flowerbed.count, flowerbed[nextIdx] != 0 { continue }
            flowerbed[idx] = 1
            placed += 1
        }
        return placed >= n
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
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.009 (0.011) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.canPlaceFlowers([1,0,0,0,1], 1)
        XCTAssertEqual(value, true)
    }
    
    func test1() {
        let value = solution.canPlaceFlowers([1,0,0,0,1], 2)
        XCTAssertEqual(value, false)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>