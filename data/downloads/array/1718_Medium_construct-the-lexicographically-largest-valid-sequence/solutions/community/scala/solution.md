# scala greedy dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/5203498/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/5203498/)

---

```scala
object Solution {
  import collection.immutable.{TreeSet}
  def constructDistancedSequence(n: Int): Array[Int] =
    def dfs(freeSet: Set[Int], unused: Set[Int], acc: Map[Int,Int]): Map[Int,Int] =
      lazy val pos = freeSet.head
      lazy val cands = unused.iterator.collect{
        case i if (i == 1) || (((i+pos) < n*2-1) && freeSet.contains(i+pos)) =>
          dfs((freeSet--(if(i>1) Seq(pos,pos+i) else Seq(pos))), unused-i, acc + (pos->i))
      }
      if(freeSet.isEmpty) acc
      else cands.dropWhile(_.isEmpty).take(1).toList.headOption.getOrElse(Map())
    dfs((0 until n*2-1).to(TreeSet), TreeSet.from(1 to n)(Ordering.Int.reverse), Map())
        .to(Array).flatMap{case (i,m) => if(m==1) List(i->m) else List(i->m, (i+m)->m)}
        .sorted.map(_._2)
}

```