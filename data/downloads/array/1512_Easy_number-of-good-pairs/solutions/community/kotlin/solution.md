# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/1066531/](https://leetcode.com/problems/number-of-good-pairs/solutions/1066531/)

---

```
fun numIdenticalPairs(a: IntArray) = a.mapIndexed { i, n -> a.slice(i + 1..a.lastIndex).count { it == n } }.sum()
```
**Approach 2:**
```
fun numIdenticalPairs(a: IntArray): Int {
    var c = 0
    a.forEachIndexed { i, n -> for (j in i + 1 until a.size) if (n == a[j]) c++ }
    return c
}
```
**Approach 3:**
```
fun numIdenticalPairs(nums: IntArray): Int {
    val map = mutableMapOf<Int, Int>()
    var count = 0
    nums.forEach {
        if (map.containsKey(it)) count += map[it]!!
        map[it] = map.getOrDefault(it, 0) + 1
    }     
    return count
}
```