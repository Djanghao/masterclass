# Kotlin Solution

**Author:** Abhimanyu14
**Votes:** 0
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099846/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099846/)

---

```
fun getLargestOutlier(nums: IntArray): Int {
    var result = Int.MIN_VALUE
    var sum = 0
    val map = mutableMapOf<Int, MutableList<Int>>()
    var temp : Int
    nums.forEachIndexed { index, num ->
        sum += num
        map.computeIfAbsent(num) {
            mutableListOf()
        }.add(index)
    }
    nums.forEachIndexed { index, num ->
        temp = sum - (num * 2)
        if (map.contains(temp)) {
            map.getOrDefault(temp, mutableListOf()).forEach {
                if (index != it) {
                    result = max(result, temp)
                }
            }
        }
    }
    return result
}
```

* `sum` - The sum of all elements in the array
* `map` - Stores the index of the num as key value pair. Value is list of Int as multiple indices can have the same value.