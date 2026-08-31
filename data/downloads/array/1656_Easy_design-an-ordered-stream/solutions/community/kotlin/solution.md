# Kotlin Straightforward solution

**Author:** SergioLuigi
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/5277365/](https://leetcode.com/problems/design-an-ordered-stream/solutions/5277365/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n\xB2)

# Code
```
class OrderedStream(n: Int) {
    var expectedIndex = 1
    val arr = arrayOfNulls<String>(n+1)
    fun insert(idKey: Int, value: String): List<String> {
        arr[idKey] = value
        val list = mutableListOf<String>()
        for (index in arr.indices) {
            if (expectedIndex == index && arr[index] != null) {
                expectedIndex++
                list.add(arr[index]!!)
                arr[index] = null
            }
        }
        return list

    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
```