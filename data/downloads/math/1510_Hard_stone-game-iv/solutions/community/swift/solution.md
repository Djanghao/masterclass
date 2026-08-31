# ✅ [Solution] Swift: Stone Game IV (+ test cases)

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/1708322/](https://leetcode.com/problems/stone-game-iv/solutions/1708322/)

---

```swift
class Solution {
    func winnerSquareGame(_ n: Int) -> Bool {
        var dp = [Bool](repeating: false, count: n + 1)
        
        for i in 1...n {
            var val = 1
            while val * val <= i {
                if !dp[i - val * val] {
                    dp[i] = true
                    break
                }
                val += 1
            }
        }
        
        return dp[n]
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
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.014 (0.016) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // Alice can remove 1 stone winning the game because Bob doesn't have any moves.
    func test0() {
        let value = solution.winnerSquareGame(1)
        XCTAssertEqual(value, true)
    }
    
    // Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).
    func test1() {
        let value = solution.winnerSquareGame(2)
        XCTAssertEqual(value, false)
    }
    
    // n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).
    func test2() {
        let value = solution.winnerSquareGame(4)
        XCTAssertEqual(value, true)
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>