# kotlin clean solution

**Author:** Dasharath_Singh_ZEE5
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3025108/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3025108/)

---



# Complexity
- Time complexity: O(n)


# Code
```
class Solution {
    fun countVowelStrings(n: Int): Int {
        var a = 1
        var e = 1
        var i = 1
        var o = 1
        var u = 1
        for(j in 2..n){
            o = o+u
            i = i+o
            e = e+i
            a = a+e
        }
        return a+e+i+o+u
    }
}
```