# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/5702851/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/5702851/)

---

```scala []
object Solution {
  def maxSubarrays(nums: Array[Int]): Int =
    if(nums.reduce(_ & _) != 0) 1 else
      LazyList.unfold((0,0,(1<<20)-1)){case (cnt,i,mask) =>
        Option.when(i<nums.length){
          lazy val mask1 = mask&nums(i)
          if(mask1==0) (cnt+1, (cnt+1,i+1, (1<<20)-1)) else (cnt, (cnt,i+1, mask1))
        }
      }.last
}
```