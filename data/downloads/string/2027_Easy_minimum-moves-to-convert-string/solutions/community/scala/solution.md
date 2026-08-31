# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2077593/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2077593/)

---

```

  def minimumMoves(s: String): Int = {
    ((s.length - s.replaceAll("X.?.?","").length) / 3.0).ceil.toInt
  }
```






or






```
  def minimumMoves(s: String): Int = {
    val it = (s + "OO").toIterator
    it.foldLeft(0)((acc, cur)=>{
      if(cur == 'X'){it.next;it.next;acc + 1}
      else acc
    })
  }
```