# ✅ [Solution] Swift: Partition Labels

**Author:** AsahiOcean
**Votes:** 23
**Link:** [https://leetcode.com/problems/partition-labels/solutions/1123617/](https://leetcode.com/problems/partition-labels/solutions/1123617/)

---

```swift
class Solution {
    func partitionLabels(_ s: String) -> [Int] {
        guard !s.isEmpty else { return [] }
        let enumS = s.enumerated()
        
        var map: [Character:Int] = [:]
        enumS.forEach { map[$1] = $0 }
        
        var start = 0, end = 0 // indices
        var result: [Int] = []
        
        for (i,c) in enumS {
            end = max(end, map[c] ?? -1)
            guard i == end else { continue }
            result.append(i - start + 1)
            start = i + 1
        }
        return result
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
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.012 (0.014) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // The partition is "ababcbaca", "defegde", "hijhklij".
    // This is a partition so that each letter appears in at most one part.
    // A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
    func test0() {
        let value = solution.partitionLabels("ababcbacadefegdehijhklij")
        XCTAssertEqual(value, [9,7,8])
    }
    
    func test1() {
        let value = solution.partitionLabels("eccbbbbdec")
        XCTAssertEqual(value, [10])
    }
}

Tests.defaultTestSuite.run()
```
</details>
</p>