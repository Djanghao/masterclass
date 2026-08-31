# scala union find

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6140996/](https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6140996/)

---

```scala []
object Solution {
  import scala.util.chaining._
  val djs = Array.range(0,200_001)
  def countComponents(nums: Array[Int], threshold: Int): Int = {
    def root(i:Int):Int = if(i>threshold) i else if(djs(i)==i) i else root(djs(i)).tap(djs(i)=_)
    def join(i:Int)(j:Int) = djs(root(j)) = djs(root(i)) 
    Iterator.range(0,threshold+1).foreach(i => djs(i)=i)
    nums.iterator.filter(_ <= threshold)
      .foreach(i => Iterator.range(i,threshold+1,i).foreach(join(i)))
    nums.iterator.map(root).distinct.length
  }
}
```