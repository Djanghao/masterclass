# [scala] - sliding oneliner

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454465/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454465/)

---

```scala
def minimumRecolors(blocks: String, k: Int): Int =
  blocks.sliding(k).map(_.count(_ == 'W')).min
```