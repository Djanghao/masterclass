# 15 lines scala immutable solution with groupBy & SortedSet beats 100%

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/3061156/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/3061156/)

---

# Code
```
object Solution {
  def threeSumMulti(arr: Array[Int], target: Int): Int = {
    lazy val group = arr.groupBy(identity).mapValues(_.size.toLong).to(Map)
    lazy val keys = group.keys.to(collection.immutable.SortedSet)
    def prod(a: Long, b: Long, c: Long) = (a*b*c)
    (keys.iterator.flatMap{i => 
      lazy val gi = group(i)
      keys.iteratorFrom(i).takeWhile{j =>  (i + j + j) <= target}
      .flatMap{j => group.get(target-i-j).map{gk => List(i,j,target-i-j)}}
    }.map{case l0 =>
      lazy val l = if(l0(1)==l0(2)) l0.reverse else l0
      lazy val (i,j,k) = (l(0),l(1),l(2))
      lazy val (gi,gj,gk) = (group(i),group(j),group(k))
      if(i==k && i==j) { if(gi<3) 0 else prod(gi,gi-1,gi-2)/6 } // C(gi,3)
      else if(i==j)    { if(gi<2) 0 else prod(gk,gi,gi-1)/2 }   // C(gi,2)
      else             { prod(gi,gj,gk) }
    }.sum  % 1_000_000_007).toInt
  }
}

```