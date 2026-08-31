# Kotlin style short solution

**Author:** Roman_Samoilov
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/2432422/](https://leetcode.com/problems/number-of-recent-calls/solutions/2432422/)

---

```
class RecentCounter() {

    val list = mutableListOf<Int>()

    fun ping(t: Int): Int {
        list.add(t)
        return list.count { it in t - 3000..t }
    }
}
```