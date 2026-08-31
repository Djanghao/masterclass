# ✌️ Swift: Reverse Words in a String

**Author:** AsahiOcean
**Votes:** 30
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/1126820/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/1126820/)

---

**Syntactic sugar in Swift in the truest sense** \uD83D\uDE04
```swift
class Solution {
    func reverseWords(_ s: String) -> String {
        s.split(separator: " ").reversed().joined(separator: " ")
    }
}

func tests() {
    let s = Solution()
    assert(s.reverseWords("the sky is blue") == "blue is sky the") // good
    assert(s.reverseWords("  hello world  ") == "world hello") // good
    assert(s.reverseWords("a good   example") == "example good a") // good
    assert(s.reverseWords("  Bob    Loves  Alice   ") == "Alice Loves Bob") // good
    assert(s.reverseWords("Alice does not even like bob") == "bob like even not does Alice") // good
}

tests()
```