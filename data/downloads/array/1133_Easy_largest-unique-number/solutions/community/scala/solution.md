# SCALA | HashMap | FunctionalStyle | 100% faster

**Author:** Andrea_Detommaso
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/2851485/](https://leetcode.com/problems/largest-unique-number/solutions/2851485/)

---

```
import scala.collection.mutable.HashMap

object Solution {
    def largestUniqueNumber(nums: Array[Int]): Int = 
        
        nums.foldLeft(HashMap[Int, Int]()){
            case (map, number) => map += number -> (map.getOrElse(number, 0) + 1)
        }.filter(_._2 == 1).keys.maxByOption(identity).getOrElse(-1)
    
}
```