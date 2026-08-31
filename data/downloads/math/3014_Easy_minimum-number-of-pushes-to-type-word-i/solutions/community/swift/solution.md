# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5803175/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5803175/)

---

# Complexity
- Time complexity:
$$O(1)$$
- Space complexity:
$$O(1)$$
# Code
```swift []
func minimumPushes(_ word: String) -> Int {
    let fullSetCount = word.count / 8
    let fullSetPushesCount = fullSetCount * (fullSetCount + 1) / 2 * 8
    return fullSetPushesCount + (fullSetCount + 1) * (word.count % 8)
}
```