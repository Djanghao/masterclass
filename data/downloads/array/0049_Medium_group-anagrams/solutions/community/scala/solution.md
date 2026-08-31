# One line in Scala

**Author:** Legba
**Votes:** 5
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/538954/](https://leetcode.com/problems/group-anagrams/solutions/538954/)

---

```scala
object Solution {
    def groupAnagrams(strs: Array[String]): List[List[String]] =
        strs.groupBy(_.sorted).values.map(_.toList).toList
}
```