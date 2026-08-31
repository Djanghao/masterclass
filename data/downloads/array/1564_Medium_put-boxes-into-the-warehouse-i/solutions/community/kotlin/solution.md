# Kotlin O(blogb + w) time O(b + w) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/5651418/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/5651418/)

---

# Code
```
class Solution {

    fun maxBoxesInWarehouse(boxes: IntArray, warehouse: IntArray): Int {
        var warehouseTrimmed: IntArray = warehouse.trimHeight()  
        val boxesSorted: List<Int> = boxes.sortedBy { it }

        var result: Int = 0

        var boxesIndex: Int = 0
        var warehouseIndex: Int = warehouseTrimmed.size - 1
        while (boxesIndex <= boxesSorted.size - 1 && warehouseIndex >= 0) {
            if (boxesSorted[boxesIndex] <= warehouseTrimmed[warehouseIndex]) {
                boxesIndex += 1
                warehouseIndex -= 1
                result += 1
            } else {
                warehouseIndex -= 1
            }
        }

        return result
    }

    private fun IntArray.trimHeight(): IntArray {
        var result = IntArray(size) { 0 }
        
        var min = this[0]
        for (i in 0..size-1) {
            min = kotlin.math.min(min, this[i])
            result[i] = min
        }

        return result
    }
}
```