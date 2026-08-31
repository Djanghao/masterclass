# Swift solution using 'Set' with explanation

**Author:** armanabkar
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1432542/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1432542/)

---

Sets in Swift are unordered collections of unique values. So it can be used in this problem in which we want a sentence where every letter of the English alphabet appears at least once. We will return true if the length is equal to 26:

Solution:
```
class Solution {
    func checkIfPangram(_ sentence: String) -> Bool {
        Set(sentence).count == 26
    }
}
```

Test:
```
import XCTest

class Tests: XCTestCase {
    private let solution = Solution()
	
    func testExample1() {
        XCTAssertEqual(solution.checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), true)
    }
	
    func testExample2() {
        XCTAssertEqual(solution.checkIfPangram("leetcode"), false)
    }
}

Tests.defaultTestSuite.run()
```