# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/5765030/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/5765030/)

---

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(1)$$
# Code
```swift []
func isSumEqual(_ firstWord: String, _ secondWord: String, _ targetWord: String) -> Bool {
    asciiConcat(firstWord) + asciiConcat(secondWord) == asciiConcat(targetWord)
}

func asciiConcat(_ word: String) -> Int {
    word.reduce(0) { $0 * 10 + Int($1.asciiValue! - 97) }
}
```