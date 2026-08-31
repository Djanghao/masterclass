# Swift - two maps

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/6013177/](https://leetcode.com/problems/find-and-replace-pattern/solutions/6013177/)

---

# Code
```swift []
class Solution {
    func findAndReplacePattern(_ words: [String], _ pattern: String) -> [String] {
        guard pattern.count > 0 && words.count > 0 else { return [] }
        let result = words.filter { match($0, pattern) }
        return result
    }

    private func match(_ word: String, _ pattern: String) -> Bool {
        guard word.count == pattern.count else { return false }
        var dict1 = [Character: Character]()
        var dict2 = [Character: Character]()

        for (wordChar, patChar) in zip(word, pattern) {
            if dict1[patChar] == nil {
                dict1[patChar] = wordChar
            }

            if dict2[wordChar] == nil {
                dict2[wordChar] = patChar
            }

            if dict1[patChar] != wordChar || dict2[wordChar] != patChar {
                return false
            }
        }

        return true
    }
}
```