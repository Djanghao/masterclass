# 💡Swift - Solution - Dynamic Programming

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4286738/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4286738/)

---

I assume it's possible to achieve $$O(n)$$ space complexity, but I'm not sure how at the moment.

# Solution
```
class Solution {
    func deleteString(_ s: String) -> Int {
        let s = Array(s)
        let n = s.count

        guard n >= 2 else { return 1 }

        var matches: [[Int]] = Array(repeating: [], count: n)

        // Find matches for every possible length.
        for length in 1...(s.count / 2) {
            var lastMismatchIndex = -1
            for offset in 0..<(length-1) {
                if s[offset] != s[length + offset] {
                    lastMismatchIndex = offset
                }
            }

            for i in (length-1)..<(s.count - length) {
                if s[i] != s[i + length] {
                    lastMismatchIndex = i
                }
                if lastMismatchIndex <= i - length {
                    matches[i + 1].append(length)
                }
            }
        }

        var maxDeletionToIndex: [Int] = Array(repeating: 0, count: n)

        // Mark the start and the last deletion.
        maxDeletionToIndex[0] = 1

        // Calculate maximum deletions.
        for (i, lengths) in matches.enumerated() {
            for length in lengths {
                let prev = maxDeletionToIndex[i - length]
                if prev > 0 {
                    maxDeletionToIndex[i] = max(maxDeletionToIndex[i], prev + 1)
                }
            }
        }

        return maxDeletionToIndex.max() ?? 0
    }
}
```
# Complexity
- Time: $$O(n^2)$$
- Space: $$O(n^2)$$