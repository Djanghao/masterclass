# Scala simple solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/3622134/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/3622134/)

---

# Intuition
TBA

# Approach
TBA

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
import scala.collection.mutable

object Solution {
    def canConvert(str1: String, str2: String): Boolean = {
        // edge case when strings are equal
        if(str1 == str2) {
            return true
        }
        // if both strings contain all the chars it is not possible to construct because it will cause duplication
        if(str1.distinct.length == 26 && str2.distinct.length == 26) {
            return false
        }
        // it is not possible to construct when same chars from s1 map to different chars in s2
        val transformationTable = mutable.Map.empty[Char, Char]
        str1.zipWithIndex.foreach {
            case (s1c,s1i) => transformationTable.get(s1c) match {
                case Some(s2c) if s2c != str2(s1i) => return false
                case None => transformationTable(s1c) = str2(s1i)
                case _ =>
            }
        }
        true
    }
}
```