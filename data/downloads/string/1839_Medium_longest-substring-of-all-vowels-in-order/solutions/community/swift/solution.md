# Sliding Window

**Author:** artemvor1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3161587/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3161587/)

---

# Complexity
- Time complexity:  O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), no taking account of an array of word's chars
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func longestBeautifulSubstring(_ word: String) -> Int {
        if word.count < 5 {return 0}
        let word = Array(word)
        var maxLength = 0
        var left = 0
        var hashSet: Set<Character> = [word[0]]

        for right in 1..<word.count {
            if word[right] >= word[right - 1]  {
                hashSet.insert(word[right])
                if hashSet.count == 5 {
                    maxLength = max(maxLength, right - left + 1)
                }
            } else if word[right] == "a" {
                left = right
                hashSet = Set("a")
            } else {
                hashSet = []
            }
        }
        return maxLength
    }
}
```