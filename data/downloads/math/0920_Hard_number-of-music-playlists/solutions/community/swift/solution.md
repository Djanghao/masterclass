# Swift: Number of Music Playlists + Test Cases

**Author:** AsahiOcean
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/1225427/](https://leetcode.com/problems/number-of-music-playlists/solutions/1225427/)

---

```swift
import Foundation

class Solution {
    func numMusicPlaylists(_ n: Int, _ goal: Int, _ k: Int) -> Int {
        let mod = Int(1e9 + 7)
        
        // songs "n" to form the "goal' playlist .
        var dp = [[Int]](repeating: .init(repeating: 0, count: goal + 1), count: n + 1)
        dp[0][0] = 1
        
        for l in 1...goal {
            for s in 1...min(n, l) {
                // new song
                dp[s][l] = dp[s - 1][l - 1] * (n - (s - 1))
                // adding old songs, even though "k" should not be selected
                dp[s][l] += dp[s][l - 1] * max(s - k, 0) % mod
                dp[s][l] %= mod
            }
        }
        return dp[n][goal]
    }
}
```

```swift
import XCTest

//      Executed 3 tests, with 0 failures (0 unexpected) in 0.175 (0.177) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.numMusicPlaylists(3, 3, 1), 6)
    }
    func test2() {
        XCTAssertEqual(s.numMusicPlaylists(2, 3, 0), 6)
    }
    func test3() {
        XCTAssertEqual(s.numMusicPlaylists(2, 3, 1), 2)
    }
}

Tests.defaultTestSuite.run()
```