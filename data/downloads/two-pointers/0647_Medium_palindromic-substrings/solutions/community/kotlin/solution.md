# Rabin-Karp

**Author:** sav20011962
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/4704565/](https://leetcode.com/problems/palindromic-substrings/solutions/4704565/)

---

# Intuition
Just calculate 2 variables - the hash of the forward and reverse strings and compare.
# Approach
Just calculate 2 variables - the hash of the forward and reverse strings and compare.
# Complexity
- Time complexity:
O(n*n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun countSubstrings(s: String): Int {
        val len = s.length
        val prime = 29
        var rez = len
        for (i in 0 until len) {
            var tek = s[i]-'a'+1
            var anagram = tek
            var mult = prime
            for (j in i+1 until len) {
                tek = tek * prime + (s[j]-'a'+1)
                anagram = (s[j]-'a'+1) * mult + anagram
                mult *= prime
                if (tek == anagram) rez ++
            }
        }
        return rez
    }
}
```