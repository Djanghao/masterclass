# ✅ O(n) | Index Reminder Shift

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5510179/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5510179/)

---

# Code
```swift
struct Solution {
    @_optimize(speed)
    func getEncryptedString(_ s: String, _ k: Int) -> String {
        let s = ArraySlice(s)
        return s.indices.reduce(into: "") { out, i in
            out.append(s[(i + k) % s.count])
        }
    }
}
```