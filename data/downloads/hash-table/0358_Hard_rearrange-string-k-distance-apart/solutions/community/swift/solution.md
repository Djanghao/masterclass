# 💡Swift - Expected Solution - Counting

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4020135/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4020135/)

---

# Solution
```
class Solution {
    func rearrangeString(_ s: String, _ k: Int) -> String {
        guard k > 1 else { return s }
        let counts: [Character: Int] = s.reduce(into: [:]) {
            $0[$1, default: 0] += 1
        }

        let segmentsCount = s.count / k + 1
        let lastSegmentCapacity = s.count % k

        var maxFreqLetters: [Character] = []
        var highFreqLetters: [Character] = []
        var lowFreqLetters: [Character] = []
        for (char, count) in counts {
            guard count <= segmentsCount else {
                // It's not possible to place more than `segmentsCount` letters.
                return ""
            }

            switch count {
            case segmentsCount: maxFreqLetters.append(char)
            case segmentsCount - 1: highFreqLetters.append(char)
            default: lowFreqLetters.append(char)
            }
        }

        guard maxFreqLetters.count <= lastSegmentCapacity else {
            // Can't fit this many letters of max frequency.
            return ""
        }

        var segments: [[Character]] = Array(repeating: [], count: segmentsCount)
        let letters = maxFreqLetters + highFreqLetters + lowFreqLetters
        var segmentIndex = 0
        for character in letters {
            let count = counts[character]!
            for i in 0..<count {
                if maxFreqLetters.contains(character) || highFreqLetters.contains(character) {
                    segments[i].append(character)
                } else {
                    segments[segmentIndex].append(character)
                    segmentIndex = (segmentIndex + 1) % (segmentsCount - 1)
                }
            }
        }

        return segments.map({ String($0) }).joined()
    }
}
```

# Complexity
- Time: $$O(n)$$
- Space: $$O(k)$$