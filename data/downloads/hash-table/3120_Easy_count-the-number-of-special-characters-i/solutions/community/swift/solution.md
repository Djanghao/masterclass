# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5876889/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5876889/)

---

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$
# Code
```swift []
func numberOfSpecialChars(_ word: String) -> Int {
    let lowSet = Set(word.filter { $0.isLowercase })
    let upSet = Set(word.filter { $0.isUppercase }.compactMap { $0.lowercased().first })
    return lowSet.intersection(upSet).count
}
```