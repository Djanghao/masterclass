# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 82
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/1136349/](https://leetcode.com/problems/roman-to-integer/solutions/1136349/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func romanToInt(_ s: String) -> Int {
        let dict: [Character:Int] = ["I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000]
        var out = 0, prev = 0
        for i in s {
            let val = dict[i] ?? 0
            out += (val <= prev) ? prev : -prev
            prev = val
        }
        out += prev
        return out
    }
}
```

---

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // III = 3
    func test0() {
        let value = solution.romanToInt("III")
        XCTAssertEqual(value, 3)
    }
    
    // L = 50, V = 5, III = 3
    func test1() {
        let value = solution.romanToInt("LVIII")
        XCTAssertEqual(value, 58)
    }
    
    // M = 1000, CM = 900, XC = 90 and IV = 4
    func test2() {
        let value = solution.romanToInt("MCMXCIV")
        XCTAssertEqual(value, 1994)
    }
}

Tests.defaultTestSuite.run()
```