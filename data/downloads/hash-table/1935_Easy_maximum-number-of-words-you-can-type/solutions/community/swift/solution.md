# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5772538/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5772538/)

---

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$
# Code
```swift []
func canBeTypedWords(_ text: String, _ brokenLetters: String) -> Int {
    text
        .components(separatedBy: " ")
        .filter { Set($0).isDisjoint(with: brokenLetters) }
        .count
}
```