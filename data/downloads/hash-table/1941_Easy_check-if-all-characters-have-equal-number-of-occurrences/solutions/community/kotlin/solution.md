# Kotlin | Easy

**Author:** jaideep_ankur
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1497054/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1497054/)

---

Do upvote if it helps! :)
```
class Solution {
    fun areOccurrencesEqual(s: String): Boolean {
        var num=s.count{it==s[0]}
        for (i in 1..s.length-1){
            if(num!=s.count{it==s[i]}) return false
        }
        return true
    }
}
```