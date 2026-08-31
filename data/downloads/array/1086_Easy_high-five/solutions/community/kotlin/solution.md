# Kotlin Solution by using collections STL

**Author:** leomindez
**Votes:** 1
**Link:** [https://leetcode.com/problems/high-five/solutions/513620/](https://leetcode.com/problems/high-five/solutions/513620/)

---

```
class Solution {
    fun highFive(items: Array<IntArray>): Array<IntArray> {
        val comparator = Comparator {first:IntArray, second:IntArray -> second[1] - first[1]}
        
         return items.sortedWith(comparator).groupBy(keySelector={it[0]}, valueTransform={it[1]}).map{(key,value) -> intArrayOf(key,value.take(5).average().toInt())}.sortedWith(compareBy{it[0]}).toTypedArray()        
    }
}
```