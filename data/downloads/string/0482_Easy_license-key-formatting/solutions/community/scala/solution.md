# Scala - string ops+list ops

**Author:** monksy
**Votes:** 0
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/5672183/](https://leetcode.com/problems/license-key-formatting/solutions/5672183/)

---

# Intuition

Well the original groups are not helpful. What is helpful is knowing all of the non - characters and having an offset at the begining. 


# Approach

Do the basic requirements (upper casing, removing the original dashes). Finding the offset. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)


## Scala annoyances 
 
We have to prepend the array. Our offset may be 0, which means we can start with the first of the sliding blocks. (So we'll have to filter). NonEmpty is an list operation, which will catch empty strings. 

# Code
```scala []
object Solution {
    def licenseKeyFormatting(s: String, k: Int): String = {
        val valueWithoutDashes = s.replaceAll("-", "").toUpperCase
        val firstOffset = valueWithoutDashes.size % k
        val groups = Seq(valueWithoutDashes.take(firstOffset)) ++ valueWithoutDashes.drop(firstOffset).sliding(k, k)
        groups.filter(_.nonEmpty).mkString("-")
    }
}
```