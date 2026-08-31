# [Scala] Simple solution

**Author:** nam2504
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/1552478/](https://leetcode.com/problems/masking-personal-information/solutions/1552478/)

---

```
object Solution {
    def maskPII(s: String): String = {
        if (s.contains('@')) {
            maskEmail(s)
        } else {
            maskPhone(s)
        }
    }
    
    def maskPhone(s: String): String = {
        val p = s.filter(_.isDigit)
        val last = p.takeRight(4)
        
        p.length match {
            case 10 => "***-***-" + last
            case 11 => "+*-***-***-" + last
            case 12 =>"+**-***-***-" + last
            case _ =>"+***-***-***-" + last
        }        
    }
    
    def maskEmail(s: String): String = {
        val Array(name, domain) = s.toLowerCase().split('@')
        name(0) + "*****" + name.last + "@" + domain
    }
}
```