# Swift solution

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/4388097/](https://leetcode.com/problems/bold-words-in-string/solutions/4388097/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
$$O(2n)$$

# Code
```
class Solution {

    func boldWords(_ words: [String], _ s: String) -> String {
        guard !words.isEmpty else { return s }
        var wordsSet = Set(words)

        var sChars = s.map { $0 }
        var isBold: [Bool] = Array(repeating: false, count: sChars.count)

        var ranges: [[Int]] = []
        for word in words {
            let wordCount = word.count
            let wordChars = word.map { $0 }
            if wordCount <= sChars.count {
                for i in 0..<sChars.count - wordCount + 1 where sChars[i] == wordChars[0] {
                    if String(sChars[i..<i + wordCount]) == word {
                        ranges.append([i, (i + wordCount - 1)])
                    }
                 }
            }
            
        }

        // print("ranges \\(ranges)")

        for range in ranges {
            for i in range[0]...range[1] {
                isBold[i] = true
            }
        }

        // print("isBold \\(isBold)")

        let openTag = "<b>"
        let closeTag = "</b>"
        var result = ""
        for i in 0..<sChars.count {
            if isBold[i] == true && (i == 0 || isBold[i - 1] == false) {
                result += openTag
            }

            result += String(sChars[i])

            if isBold[i] == true && (i == sChars.count - 1 || isBold[i + 1] == false) {
                result += closeTag
            }
        }

        return result
    }

}
```