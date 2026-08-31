# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/4sum/solutions/4430474/](https://leetcode.com/problems/4sum/solutions/4430474/)

---

# Code
```
object Solution {
    def fourSum(nums: Array[Int], target: Int): List[List[Int]] = {
        val sorted = 
            nums
            .map(_.toLong)
            .toList
            .sorted

        val counts = sorted.groupBy(identity).map{case (k,v) => (k,v.size)}

        val indexed = sorted.zipWithIndex

        val set = sorted.toSet

        (for {
            (a,i) <- indexed
            (b,j) <- indexed
            (c,k) <- indexed
            if(i < j && j < k)
            d = target - a - b - c
            if(set.contains(d))
            if(List(a,b,c,d).groupBy(identity).map{case (k,v) => (k,v.size)}.forall{case (k,size) => counts(k) >= size})
        } yield List(a,b,c,d).sorted).distinct.map(_.map(_.toInt))
    }
}
```