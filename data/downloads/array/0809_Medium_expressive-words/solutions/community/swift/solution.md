# Easy Swift Solution with Time Complexity O(N) and Space Complexity O(1)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/5791620/](https://leetcode.com/problems/expressive-words/solutions/5791620/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func expressiveWords(_ s: String, _ words: [String]) -> Int {
        var sArray = Array(s)
        var result = 0
        for word in words {
            if checkWordIsExpressive(sArray, Array(word)) {
                result += 1
            }
        }
        return result
    }
    
    private func checkWordIsExpressive(_ sArray: [Character], _ wArray: [Character]) -> Bool {
        var i = 0, j = 0
        let sLen = sArray.count, wLen = wArray.count
    
        while i < sLen {
            // If characters match, move both pointers
            if j < wLen && sArray[i] == wArray[j] {
                j += 1
            }
            // If current and previous characters in s match and s[i+1] also matches s[i], extend stretch
            else if i > 0 && sArray[i] == sArray[i-1] && (i + 1 < sLen && sArray[i] == sArray[i+1]) {
                i += 1
            }
            // If s[i] forms a stretch (i.e., it matches the two previous characters)
            else if !(i > 1 && sArray[i] == sArray[i-1] && sArray[i] == sArray[i-2]) {
                return false
            }
            i += 1
        }
    
        // Both pointers should reach the end of their respective arrays
        return j == wLen
    }
}
```