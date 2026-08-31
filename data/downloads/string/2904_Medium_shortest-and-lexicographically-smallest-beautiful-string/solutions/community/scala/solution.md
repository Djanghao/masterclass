# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4174678/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4174678/)

---

```scala
  def shortestBeautifulSubstring(s: String, k: Int): String = {
    if (s.replaceAll("0", "").length < k) return ""
    (k to s.length).foreach(size => {
      var res = ""
      (size to s.length).foreach(i => {
        val t = s.substring(i - size, i)
        if ((res.isEmpty || t < res) && t.replaceAll("0", "").length == k)
          res = t
      })
      if (res.nonEmpty) return res
    })
    ""
  }
  ```