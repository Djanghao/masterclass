# Kotlin Solution || HashSet || Simple & Straightforward

**Author:** PoeticIvy302543
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2279657/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2279657/)

---

```
class SmallestInfiniteSet() {
    var hashSet = HashSet<Int>()
    init {
        for (i in 1 ..1000) hashSet.add(i)
    }
    fun popSmallest(): Int {
        var num = hashSet.min()!!
        hashSet.remove(hashSet.min()!!)
        return num
    }

    fun addBack(num: Int) {
        hashSet.add(num)
    }
}
```