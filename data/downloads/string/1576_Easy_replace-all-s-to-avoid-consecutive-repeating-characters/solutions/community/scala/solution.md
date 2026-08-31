# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2319809/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2319809/)

---

```

  def modifyString(s: String): String = {
    (0 until s.length).foldLeft(s.toArray)((arr, i)=>{
      if(arr(i) == '?') {
        if ((i == 0 || arr(i - 1) != 'a') && ((i + 1 == s.length) || arr(i + 1) != 'a')) arr(i) = 'a'
        else if ((i == 0 || arr(i - 1) != 'b') && ((i + 1 == s.length) || arr(i + 1) != 'b')) arr(i) = 'b'
        else arr(i) = 'c'
      }
        arr
    }).mkString
  }
```