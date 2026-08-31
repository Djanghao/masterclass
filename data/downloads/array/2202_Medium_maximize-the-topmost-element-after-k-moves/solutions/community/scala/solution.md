# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5685988/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5685988/)

---

```scala []
object Solution {
  def maximumTop(nums: Array[Int], k: Int): Int =
    if(k==0) nums(0)
    else if(nums.length==1 && k%2==1) -1
    else if(k==1) nums(1)
    else if(nums.length<=k) nums.take(k-1).max
    else nums.take(k-1).max max nums(k)
}
```