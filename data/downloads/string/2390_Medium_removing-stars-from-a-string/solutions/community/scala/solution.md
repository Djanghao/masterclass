# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/2649907/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/2649907/)

---

```

  def removeStars(s: String): String = {
    val t = s.toArray
    val j = (0 until s.size).foldLeft(0)((acc, i) =>{
      if(s(i) == '*') acc - 1
      else {
        t(acc) = t(i)
        acc + 1
      }
    })
    t.mkString.substring(0, j)
  }
```