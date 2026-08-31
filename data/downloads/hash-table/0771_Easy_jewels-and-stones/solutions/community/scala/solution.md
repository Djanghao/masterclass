# [Scala] One-liner Using Set

**Author:** Pony1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1777397/](https://leetcode.com/problems/jewels-and-stones/solutions/1777397/)

---

```
object Solution {
    def numJewelsInStones(jewels: String, stones: String): Int = {
        stones.count(jewels.toSet)
    }
}
```