# Kotlin Solution Easy

**Author:** harshithakv
**Votes:** 4
**Link:** [https://leetcode.com/problems/add-strings/solutions/514082/](https://leetcode.com/problems/add-strings/solutions/514082/)

---

```
class Solution {
    fun addStrings(num1: String, num2: String): String {
      var i:Int = num1.length-1
      var j:Int = num2.length-1
      var carry:Int = 0
      var sb = StringBuilder()
      while( i >=0 || j>=0 || carry != 0){
        if(i>=0) carry+= num1[i--]-'0'
        if(j >=0) carry+= num2[j--]-'0'
        sb.append(carry%10)
        carry /= 10
      }
        return sb.reverse().toString()
    }
}
```