# Solution with simple cache.

**Author:** blacksnz
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/4136902/](https://leetcode.com/problems/range-frequency-queries/solutions/4136902/)

---

# Intuition
After trying the first submission of an intuition simple code as:

```
class RangeFreqQuery(arr: IntArray) {
    
    val arr = arr

    fun query(left: Int, right: Int, value: Int): Int 
        var frequency = 0

        for(i in left..right){
            if(arr[i] == value) frequency++
        }

        return frequency
    }

}
```
we will see the **runtime error**, because in the current problem constraints contained condition: "*At most 10^5 calls will be made to query*".

To solve this problem we can add a simple cache for remember previous calculations

```
val cache: MutableMap<List<Int>, Int> = mutableMapOf()
```
This **MutableMap** contains the **List** with the **query** func arguments:
```
fun query(left: Int, right: Int, value: Int): Int {}
```

Then if the current query has existing in cache function signature we just return the frequency from cache without calculations:
```
...
if(listOf(left, right, value) in cache) {
    return cache[listOf(left, right, value)]!!
}
...
```
Else invoke the calculation and cache them:
```
else {
    var frequency = 0
    for(i in left..right){
        if(arr[i] == value) frequency++
    }
    cache[listOf(left, right, value)] = frequency
    return frequency
}
```

**For addition**, we can improve our cache, excluding the cached subqueries from calculation, and then adding the result of cached frequencies to the result of the calculation.

---


Final solution:
```
class RangeFreqQuery(arr: IntArray) {
    
    val arr = arr
    val cache: MutableMap<List<Int>, Int> = mutableMapOf()

    fun query(left: Int, right: Int, value: Int): Int {
        if(listOf(left, right, value) in cache) {
            return cache[listOf(left, right, value)]!!
        } else {
            var frequency = 0
            for(i in left..right){
                if(arr[i] == value) frequency++
            }
            cache[listOf(left, right, value)] = frequency
            return frequency
        }
        
    }

}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
```