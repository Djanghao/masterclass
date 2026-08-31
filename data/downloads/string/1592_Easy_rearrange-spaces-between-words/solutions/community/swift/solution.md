# ✅ 0ms Beats 100.00%

**Author:** swifterswifty
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4207399/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4207399/)

---

# Code

```swift
func reorderSpaces(_ text: String) -> String {
    let words = text.split(separator: " ")
    let (space, trailing) = spaces(text.reduce(0) { $1 == " " ? $0 + 1 : $0 }, words.count - 1)
    return words.joined(separator: space) + trailing
}

private func spaces(_ wholeCount: Int, _ count: Int) -> (String, String) {
    guard count > 0 else { return ("", String(repeating: " ", count: wholeCount)) }
    return (String(repeating: " ", count: wholeCount / count), String(repeating: " ", count: wholeCount % count))
}
```