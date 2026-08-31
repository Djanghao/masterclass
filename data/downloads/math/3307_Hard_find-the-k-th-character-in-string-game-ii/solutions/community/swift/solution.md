# [Swift] Work backwards!

**Author:** NoahFeld
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846308/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846308/)

---

# Complexity
- Time complexity: $$O(logK)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func kthCharacter(_ k: Int, _ operations: [Int]) -> Character {
        var i = k
        var transforms = 0
        while i > 1 {
            let n = floor(log2(Double(i-1)))
            i -= Int(pow(2.0, n))
            if operations[Int(n)] == 1 { transforms += 1 }
        }
        return Character(UnicodeScalar((transforms%26)+97)!)
    }
}
```