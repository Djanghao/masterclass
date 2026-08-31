# Idiomatic scala solution

**Author:** he11mean
**Votes:** 1
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/402729/](https://leetcode.com/problems/campus-bikes/solutions/402729/)

---

```
object Solution {
  def assignBikes(workers: Array[Array[Int]],
                  bikes: Array[Array[Int]]): Array[Int] = {
    def getDist(i: Int, j: Int): Int =
      math.abs(workers(i)(0) - bikes(j)(0)) + math.abs(
        workers(i)(1) - bikes(j)(1)
      )

    val dists = for {
      i <- workers.indices
      j <- bikes.indices
    } yield (i, j, getDist(i, j))

    val distBins = dists
      .groupBy { case (_, _, dist) => dist }
      .toSeq
      .sortBy { case (dist, _) => dist }
      .flatMap {
        case (_, pairs) =>
          pairs.toSeq.sortBy { case (i, j, _) => i * bikes.length + j }
      }

    val (result, _) = distBins.foldLeft((Map[Int, Int](), Set[Int]())) {
      case ((acc, pickedBikes), (i, j, _))
          if !acc.keySet.contains(i) && !pickedBikes.contains(j) =>
        (acc + (i -> j), pickedBikes + j)
      case ((acc, pickedBikes), _) => (acc, pickedBikes)
    }

    result.toSeq.sortBy(_._1).map(_._2).toArray
  }
}
```