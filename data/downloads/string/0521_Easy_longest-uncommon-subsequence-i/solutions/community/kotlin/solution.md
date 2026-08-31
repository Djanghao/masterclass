# Kotlin Solution

**Author:** hussein0115300
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/6149125/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/6149125/)

---

```
fun findLUSlength(a: String, b: String): Int {
        var output = -1
        var finalText = ""
        if(a.isEmpty() && b.isEmpty()){
            return -1
        }
        else if(a.isEmpty()){
            return b.length
        }
        else if(b.isEmpty()){
            return a.length
        }
        if(a == b){
            return -1
        }
       else if(a.contains(b)){
            return a.length
        }
        else if(b.contains(a)){
            return b.length
        }
        else{
            return maxOf(a.length,b.length)
        }
    }
```