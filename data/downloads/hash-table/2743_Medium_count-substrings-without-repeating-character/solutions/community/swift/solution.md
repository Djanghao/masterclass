# ✅ O(n) | Efficient Solution

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5578393/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5578393/)

---

![Screenshot.png](./images/0.png)

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func numberOfSpecialSubstrings(_ s: consuming String) -> Int {
        // Take the CChar
        // Map then to 0...26 range to conveniently use as indices
        // Map to Int, since the array index is Int type
        let s = s.utf8CString.dropLast().map { $0 - 97 }.map(Int.init)
        var left = 0
        var substrings = 0
        // Marker storage for seen characters
        var uniques = [Bool](repeating: false, count: 26)
        
        for right in s.indices {
            while uniques[s[right]] {
                uniques[s[left]] = false
                left += 1
            }
            uniques[s[right]] = true
            substrings += (right - left + 1)
        }
        return substrings
    }
}
```