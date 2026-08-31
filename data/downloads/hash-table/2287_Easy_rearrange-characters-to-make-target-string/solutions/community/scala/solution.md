# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2113648/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2113648/)

---

```

def rearrangeCharacters(s: String, target: String): Int = {
    val smap = s.groupBy(identity).mapValues(_.size)
    val tmap = target.groupBy(identity).mapValues(_.size)

    tmap.foldLeft(Int.MaxValue)((acc, cur)=>{
      Math.min((smap.getOrElse(cur._1, 0) / cur._2), acc)
    })
  }
```