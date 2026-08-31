# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/5298134/](https://leetcode.com/problems/describe-the-painting/solutions/5298134/)

---

```scala
object Solution {
  def splitPainting: Array[Array[Int]] => List[List[Long]] = _.toList
    .flatMap{a => List(a(0) -> a(2), a(1) -> -a(2))}
    .groupMapReduce(_._1)(_._2.toLong)(_ + _).to(List).sorted
    .scanLeft((0L,0L)){case ((_,c0),(x1,c1)) => x1.toLong -> (c0+c1)}
    .sliding(2,1).map{case l => List(l.head._1,l.last._1,l.head._2)}
    .filterNot(_(2) == 0).toList
}

```