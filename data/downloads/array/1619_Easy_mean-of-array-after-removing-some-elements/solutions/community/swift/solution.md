# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5724555/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5724555/)

---

# Complexity
- Time complexity:
$$O(n*log(n))$$
- Space complexity:
$$O(n)$$
# Code
```swift []
func trimMean(_ arr: [Int]) -> Double {
    let count = arr.count / 20
    let means = arr.sorted()[count..<(arr.count - count)]
    return Double(means.reduce(0, +)) / Double(means.count)
}
```