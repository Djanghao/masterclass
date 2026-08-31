# fast 2 lines scala solution with map and split

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2784802/](https://leetcode.com/problems/orderly-queue/solutions/2784802/)

---

```scala
  def orderlyQueue(s: String, k: Int): String =
    if(k>1) s.sorted // letters can be reorderds
    else (0 until s.length).map(s.splitAt).map{case (prefix,suffix) => suffix ++ prefix}.min // minimal rotation
```