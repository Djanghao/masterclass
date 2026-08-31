# ✅ O(n) | Short & Clean

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5510187/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5510187/)

---

# Code
```swift
struct Solution {
    @_optimize(speed)
    func getSmallestString(_ s: String) -> String {
        var s = s.compactMap(\\.wholeNumberValue)
        
        for i in s.indices[1...] where (s[i - 1] % 2 == s[i] % 2) && s[i - 1] > s[i] {
            s.swapAt(i - 1, i)
            break
        }
        return s.map(String.init).joined()
    }
}
```