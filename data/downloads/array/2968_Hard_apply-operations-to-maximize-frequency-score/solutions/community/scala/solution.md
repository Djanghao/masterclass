# scala twoliner. sliding window, three pointers

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/6137521/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/6137521/)

---

```scala []
object Solution {
  def maxFrequencyScore(nums: Array[Int], _k: Long): Int = {
    val ns = (Vector(Long.MaxValue) ++ nums.iterator.map(_.toLong)).sorted
    Iterator.unfold((0,0,0,0L,0L)){case x@(i,j,k,lsum ,rsum) =>
      Option.when(k<ns.length-1){
        if(j-i < k-j)
          (x, (i,j+1,k,lsum+(j-i+1)*(ns(j+1)-ns(j)), rsum-(k-j)*(ns(j+1)-ns(j))))
        else if(rsum+lsum <= _k)
          (x, (i,j,k+1,lsum,rsum + ns(k+1) - ns(j)))
        else
          (x, (i+1,j,k,lsum - (ns(j) - ns(i)),rsum ))
      }
    }.collect{case (i,j,k,lsum ,rsum) if lsum+rsum <= _k => k-i+1}.max
  }
}
```