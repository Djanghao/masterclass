# solution in Kotlin

**Author:** shibuiwilliam
**Votes:** 1
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/377555/](https://leetcode.com/problems/wildcard-matching/solutions/377555/)

---

solution in Kotlin
```kotlin
class Solution {
    fun isMatch(s: String, p: String): Boolean {
        val ss = s.split("").filter{it -> it != ""}
        val ps = p.split("").filter{it -> it != ""}
        val m = ps.size
        val n = ss.size
        var i1 = 0
        var i2 = 0
        var start = -1
        while (i2 < n){
            if (i1<m && (ps[i1]==ss[i2] || ps[i1]=="?")){
                i1 = i1+1
                i2 = i2+1
            }
            else if(i1<m && ps[i1]=="*"){
                start = i1
                i1 = i1+1
            }
            else if(start != -1){
                i2 = i2-(i1-start-1)+1
                i1 = start+1
            }
            else{
                return false
            }
        }
        while (i1<m && ps[i1]=="*"){
            i1++
        }
        if (i1==m){
            return true
        }
        return false
    }
}
```