# Swift || 100%

**Author:** saenuruki
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124218/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124218/)

---

Note that a subsequence does not necessarily need to be contiguous. And s[i] is either "a" or "b".
That means if s is not palindrome, we can remove all "a" at first, then remove all "b". 
Therefore, we can make the following algorithem.

```
class Solution {
    func removePalindromeSub(_ s: String) -> Int {
        return s == String(s.reversed()) ? 1 : 2
    }
}
```