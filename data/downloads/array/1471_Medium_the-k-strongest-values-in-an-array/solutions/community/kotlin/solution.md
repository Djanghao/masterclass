# Kotlin - Comparator saves the day.

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/674409/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/674409/)

---

```
fun getStrongest(arr: IntArray, k: Int): IntArray {
    arr.sort()
    val median = arr[(arr.size - 1) shr 1] // find median
    val comparator = Comparator { o1: Int, o2: Int -> // sort according to strongest
        return@Comparator when {
            abs(o1 - median) > abs(o2 - median) -> 1
            abs(o1 - median) == abs(o2 - median) -> {
                if (o1 > o2) 1
                else 0
            }
            else -> -1
        }
    }
    return arr.sortedWith(comparator).takeLast(k).toIntArray()
}
```