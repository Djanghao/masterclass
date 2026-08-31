# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 58
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/1144148/](https://leetcode.com/problems/integer-to-roman/solutions/1144148/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    
    private let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    private let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    
    func intToRoman(_ num: Int) -> String {
        
        var int = num
        var sym = ""
        
        while int > 0 {
            for (i, d) in values.enumerated() where int - d >= 0 {
                int -= d
                sym += symbols[i]
                break
            }
        }
        return sym
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
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.013 (0.015) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // 3 is represented as 3 ones.
    func test0() {
        let value = solution.intToRoman(3)
        XCTAssertEqual(value, "III")
    }
    
    // L = 50, V = 5, III = 3.
    func test1() {
        let value = solution.intToRoman(58)
        XCTAssertEqual(value, "LVIII")
    }
    
    // M = 1000, CM = 900, XC = 90 and IV = 4.
    func test2() {
        let value = solution.intToRoman(1994)
        XCTAssertEqual(value, "MCMXCIV")
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>