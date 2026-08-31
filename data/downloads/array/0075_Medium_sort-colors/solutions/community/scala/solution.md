# scala | Single line solution

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-colors/solutions/837912/](https://leetcode.com/problems/sort-colors/solutions/837912/)

---


Sure not for interview, might be they are expecting dutch national flag algo, but for the sake of understanding quick sort is used inplace.
```
import scala.util.Sorting
object Solution {
    def sortColors(nums: Array[Int]): Unit = {
        Sorting.quickSort(nums)
    }
}
```