# Swift | Sliding Window | 0ms

**Author:** NoahFeld
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131122/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131122/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func maximumLength(_ s: String) -> Int {
        var freq = [UInt8: [Int: Int]]()
        var curr: UInt8 = 0
        var length = 0
        var res = -1
        for c in s.utf8 {
            if c != curr { length = 0 }
            length += 1; curr = c
            for i in max(1, length-2)..<length+1 {
                freq[c, default: [:]][i, default: 0] += 1
                if freq[c]![i]! >= 3 { res = max(res, i) }
            }
        }
        return res
    }
}
```