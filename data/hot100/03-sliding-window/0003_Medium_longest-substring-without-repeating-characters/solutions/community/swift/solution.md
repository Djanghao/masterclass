# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 57
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1134880/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1134880/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var len = 0, chars = [Character]()
        for c in s {
            if let idx = chars.firstIndex(of: c) {
                chars.removeSubrange(0...idx)
            }
            chars.append(c)
            len = max(len, chars.count)
        }
        return len
    }
}
```

<b>Playground and test cases: https://leetcode.com/playground/RCFf98E3</b>