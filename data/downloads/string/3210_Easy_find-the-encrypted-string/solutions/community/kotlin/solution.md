# Runtime 143 ms Beats 100.00%

**Author:** stewie667
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5886946/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5886946/)

---

![image.png](./images/0.png)


# Code
```kotlin []
class Solution {
    fun getEncryptedString(s: String, k: Int): String {

        val str = StringBuilder()
        var pos = 0
        var iter = 0
        val sLen = s.length
        
        while ( str.toString().length != sLen ) {

            pos = (iter+k)%sLen
            str.append(s[pos])
            iter++
            
        }
 
        return str.toString()
        
    }
}
```