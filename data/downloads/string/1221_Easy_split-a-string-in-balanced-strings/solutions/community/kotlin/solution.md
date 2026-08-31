# Kotlin Simple and Short Solution

**Author:** i30mb1
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/863996/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/863996/)

---

Simple : 
```
class Solution {
    fun balancedStringSplit(s: String): Int {
        var countR = 0
        var countL = 0
        var result = 0
        s.forEach {
            if (it == 'R') countR++
            if (it == 'L') countL++
            if (countL > 0 && countR > 0 && countL == countR) {
                countL = 0
                countR = 0
                result++
            }
        }
        return result
    }
}
```
Short : 
```
class Solution {
    fun balancedStringSplit(s: String): Int {
        var sum = 0
        var result = 0

        s.forEach {
            if (it == 'R') sum++
            else sum--
            if (sum == 0) result++
        }
        return result
    }
}
```