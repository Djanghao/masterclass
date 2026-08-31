# scala oneliner

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5534102/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5534102/)

---

```scala
object Solution {
  def removeSubfolders(folder: Array[String]): List[String] =
    folder.toList.distinct.sorted.foldLeft(List.empty[String]){ case((acc),f) =>
      if(acc.exists(d => (f.length > d.length) && f.startsWith(d) && f(d.length) == '/')) acc
      else f +: acc
    }.reverse
}
```