# FP scala solution

**Author:** bobojon2ov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739768/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739768/)

---

```
def findAnagrams(s: String, p: String): List[Int] = {
    val pLen = p.length
    val mapped = p.groupBy(identity).mapValues(_.size).toMap
    s.foldLeft(0, List.empty[Int]){ case ((ind, acc), k) =>
      if (mapped.contains(k) && ind + pLen <= s.length){
        val checkedStr = s.substring(ind, ind + pLen).groupBy(identity).mapValues(_.size)
        if (mapped.equals(checkedStr.toMap)) (ind + 1, acc :+ ind)
        else (ind + 1, acc)
      } else (ind + 1, acc)
    }._2
  }
```