# ✅ Dictionary Prefix/Suffix Diff Approach

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5055518/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5055518/)

---

![Screenshot.png](./images/0.png)

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func numOfPairs(_ nums: [String], _ target: String) -> Int {
        var concats = 0
        // Store String.Subsequence instead of String to eliminate the need to repeatedly convert the suffix string in the for-in loop, as dropFirst returns String.Subsequence.
        let freqs = Dictionary(nums.map { ($0[...], 1) }, uniquingKeysWith: +)
        
        for num in nums where target.prefix(num.count) == num {
            let remaining = target.dropFirst(num.count)
            concats += freqs[remaining] ?? 0
            concats -= num == remaining ? 1 : 0
        }
        return concats
    }
}
```