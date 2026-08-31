# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 18
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/1122863/](https://leetcode.com/problems/isomorphic-strings/solutions/1122863/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func isIsomorphic(_ s: String, _ t: String) -> Bool {
        var sdc = [Character:String.Index](), tdc = sdc
        for i in s.indices {
            guard sdc[s[i]] == tdc[t[i]] else { return false }
            sdc[s[i]] = i
            tdc[t[i]] = i
        }
        return true
    }
}
```