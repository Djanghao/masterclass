# ✅ O(n) runtime O(1) memory

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5962615/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5962615/)

---

# Solution
```swift []
struct Solution {
    func numberOfSubstrings(_ s: String, _ k: Int) -> Int {
        var freqs = [UInt](repeating: 0, count: 26)
        let ascii = s.utf8CString
            .dropLast()
            .lazy
            .compactMap(Int.init)
            .map { $0 - 97 }
        let n = ascii.count
        var (l, r) = (0, 0)
        var substrings = 0

        while r < n {
            freqs[ascii[r]] += 1
            while l <= r, freqs[ascii[r]] >= k {
                substrings += n - r
                freqs[ascii[l]] -= 1
                l += 1
            }
            r += 1  
        }
        return substrings
    }
}
```