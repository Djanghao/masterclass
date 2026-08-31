# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5441283/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5441283/)

---

```scala
object Solution {
  def minMoves(target: Int, maxDoubles: Int): Int =
    def f(x: Int, rem: Int, acc: Int): Int =
      if(x==1) acc
      else if(rem==0) acc+x-1
      else if(x%2!=0) f(x-1,rem,acc+1)
      else f(x/2,rem-1,acc+1)
    f(target,maxDoubles,0)
}
```