# scala brute force oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/5387787/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/5387787/)

---

```scala
object Solution {
  def bestCoordinate(towers: Array[Array[Int]], radius: Int): Array[Int] = 
    (for{x <- (0 to 50); y <-(0 to 50)} yield {towers.indices.map{i =>
      Option(math.sqrt((x-towers(i)(0))*(x-towers(i)(0)) + (y-towers(i)(1))*(y-towers(i)(1))))
        .collect{case d if d<= radius => -towers(i)(2)/(1 + d)}.getOrElse(0.0).toInt
    }.sum -> (x,y)}).min._2.productIterator.map(_.asInstanceOf[Int]).to(Array)
}
```