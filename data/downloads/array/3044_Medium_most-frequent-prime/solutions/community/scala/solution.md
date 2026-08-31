# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/5162531/](https://leetcode.com/problems/most-frequent-prime/solutions/5162531/)

---

```
object Solution {
  import Ordering.Implicits._
  def mostFrequentPrime(mat: Array[Array[Int]]): Int = {
    lazy val aMap = mat.indices.flatMap{case i:Int =>
      mat.head.indices.map{case j:Int => (i,j) -> mat(i)(j) }
    }.to(Map)
    lazy val dir = for{i <- (-1 to 1); j <- (-1 to 1) if (i!=0 || j!=0)} yield(i->j)
    aMap.iterator.flatMap{a => dir.map{d =>
      (0 to (mat.size max mat.head.size)).map{i => (a._1._1 + d._1 * i, a._1._2 + d._2 * i)}
      .takeWhile(aMap.contains)
    }}.to(List).sorted.distinct
    .flatMap(seq => (2 to seq.size).map(seq.take) )
    .map(seq => math.BigInt(seq.iterator.map(aMap).mkString.toInt))
    .filter(x => x>10 && x.isProbablePrime(100))
    .groupMapReduce(identity)(_ => 1)(_ + _)
    .iterator.map(_.swap).maxOption.map(_._2.toInt).getOrElse(-1)
  }
}


```