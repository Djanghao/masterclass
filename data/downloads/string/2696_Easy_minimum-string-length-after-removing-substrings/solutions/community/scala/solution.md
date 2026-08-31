# easy way using regex ,we learn how to use regex with scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5891951/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5891951/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    import scala.util.matching.Regex
    def minLength(s: String): Int = {
        var s1 = s
        val pattern = new Regex("AB|CD")
        var found = pattern.findFirstIn(s1)
        while(found !=None){
            s1 = s1.replace(found.get,"")
            found =pattern.findFirstIn(s1)
        }
        return s1.length
    }
}
```