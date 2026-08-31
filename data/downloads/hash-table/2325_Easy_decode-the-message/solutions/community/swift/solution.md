# Swift solution

**Author:** azm819
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/5353768/](https://leetcode.com/problems/decode-the-message/solutions/5353768/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private static let alphabet: [Character] = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    func decodeMessage(_ key: String, _ message: String) -> String {
        var charToIndex = [Character: Int]()
        charToIndex[" "] = 0
        for char in key where charToIndex[char] == nil {
            charToIndex[char] = charToIndex.count
            if charToIndex.count == 27 {
                break
            }
        }

        return String(message.map {
            Solution.alphabet[charToIndex[$0]!]
        })
    }
}
```