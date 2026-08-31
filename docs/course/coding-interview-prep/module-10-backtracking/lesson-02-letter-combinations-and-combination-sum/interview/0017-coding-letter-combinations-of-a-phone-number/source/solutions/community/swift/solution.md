# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 42
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/1382543/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/1382543/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    private let mat = ["2":["a","b","c"],
                       "3":["d","e","f"],
                       "4":["g","h","i"],
                       "5":["j","k","l"],
                       "6":["m","n","o"],
                       "7":["p","q","r","s"],
                       "8":["t","u","v"],
                       "9":["w","x","y","z"]]
    func letterCombinations(_ digits: String) -> [String] {
        var res = [String]()
        for d in digits.map({ $0.lowercased() }) {
            guard let keys = mat[d] else { break }
            if res.isEmpty {
                keys.forEach { res.append($0) }
                continue
            }
            let arr = res.map { _ in res.removeFirst() }
            for ch in keys { res += arr.map({$0 + ch}) }
        }
        return res
    }
}
```

---

<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.027 (0.029) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.letterCombinations("23")
        XCTAssertEqual(value, ["ad","bd","cd","ae","be","ce","af","bf","cf"])
    }
    func test1() {
        let value = solution.letterCombinations("")
        XCTAssertEqual(value, [])
    }
    func test2() {
        let value = solution.letterCombinations("2")
        XCTAssertEqual(value, ["a","b","c"])
    }
}

Tests.defaultTestSuite.run()
```
</details>