# Binary Search beats 83% RT and 100% Memory

**Author:** GouthamKanags
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/4552206/](https://leetcode.com/problems/fixed-point/solutions/4552206/)

---

# Code
```
class Solution {
    fun fixedPoint(arr: IntArray): Int {
        for (i in arr.indices){
            if(binarySearch(arr, i) == i)
                return i
        }
        return -1
    }

    fun binarySearch(arr: IntArray, target:Int): Int{
        var start = 0
        var end = arr.size - 1
        while (start <= end){
            val mid = start + (end - start) / 2

            if (target == arr[mid])
                return mid;

            if (target < arr[mid])
                end = mid - 1
            else
                start = mid + 1
        }
        return -1
    }
}
```