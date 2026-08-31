# s.toCharArray

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5852086/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5852086/)

---

# Approach
s.toCharArray
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun smallestString(s: String): String {
        val ArrChar = s.toCharArray()
        val len = s.length
        var i = 0
        while (i<len && ArrChar[i]=='a') i++
        if (i==len) {
            ArrChar[len-1]='z'
            return String(ArrChar)
        }
        while (i<len && ArrChar[i]!='a') {
            ArrChar[i]=ArrChar[i]-1
            i++
        }
        return String(ArrChar)
    }
}
```