# scala foldLeft and scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/5309730/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/5309730/)

---

```scala
object Solution {
  def lexicographicallySmallestArray(nums: Array[Int], limit: Int): Array[Int] =
    lazy val x0 = nums.iterator.zipWithIndex.toList.sortBy(_._1)
    x0.tail.foldLeft(List(List(x0.head))){case (acc,x) =>
      if((x._1 - acc.head.head._1) <= limit) (x +: acc.head) +: acc.tail
      else List(x) +: acc
    }.flatMap { l =>
      lazy val (cs,is) = l.sortBy(_._2).unzip
      is zip cs.sorted
    }.sorted.map(_._2).toArray

  def lexicographicallySmallestArrayRec(nums: Array[Int], limit: Int): Array[Int] = {
    lazy val x0 = nums.iterator.zipWithIndex.toList.sortBy(_._1)
    def split(seq: Seq[(Int,Int)], acc: Seq[Seq[(Int,Int)]]): Seq[Seq[(Int,Int)]] = {
      if(seq.isEmpty) acc
      else if((seq.head._1 - acc.head.head._1) <= limit) split(seq.tail, (seq.head +: acc.head) +: acc.tail)
      else split(seq.tail, List(seq.head) +: acc)
    }
    split(x0.tail,List(List(x0.head))).flatMap{ l =>
      lazy val (cs,is) = l.sortBy(_._2).unzip
      is zip cs.sorted
    }.sorted.map(_._2).toArray
  }
}
```