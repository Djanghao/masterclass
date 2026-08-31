# Scala ( for comprehension )

**Author:** dedmonds
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2879346/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2879346/)

---

```
object Solution {
    def findArray(pref: Array[Int]): Array[Int] = {
        val input = 0 +: pref
        val output = for {a <- 1 until input.length} yield input(a-1) ^ input(a)
        output.toArray
    }
}
```