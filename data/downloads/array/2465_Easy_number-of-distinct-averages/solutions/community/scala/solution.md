# Scala Beginner Friendly Solution

**Author:** sangam92
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/3926708/](https://leetcode.com/problems/number-of-distinct-averages/solutions/3926708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.Map
object Solution {
    def distinctAverages(nums: Array[Int]): Int = {
              var arr =nums.toBuffer.sorted
      var data_store: Map[Int,Int] =   Map.empty[Int,Int]
    while (arr.length > 0)
      {
        arr.sorted
        var maxno = arr.last
        var minno=arr.head
        arr.remove(0)
        arr.remove(arr.length - 1)
        var temp = maxno + minno
        var avg_val= temp//2

        if (data_store.contains(avg_val))
          {
            data_store(avg_val)=data_store(avg_val)+1

          }
        else
          {
            data_store(avg_val)=1
          }
      }
    return data_store.size
    }
}
```