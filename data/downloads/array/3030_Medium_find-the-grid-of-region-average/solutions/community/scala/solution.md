# [scala] - brute force

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4675977/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4675977/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

```
object Solution {
  
  case class C(i: Int, j: Int)

  def resultGrid(image: Array[Array[Int]], threshold: Int): Array[Array[Int]] = {
    val avgs =
      (for {
        i <- image.indices.tail.init
        j <- image(0).indices.tail.init
        avg <- listAvgs(image, threshold, C(i, j))
      } yield avg).groupMap(_._1)(_._2)

    image.indices.toArray.map { i =>
      image(i).indices.toArray.map { j =>
        avgs.get(C(i, j)).fold(image(i)(j))(nel => nel.sum / nel.size)
      }
    }
  }

  private def listAvgs(image: Array[Array[Int]], threshold: Int, center: C): List[(C, Int)] = {
    val region = neighbor9(center)
    val inThreshold = region.forall { c1 =>
      neighbor4(c1).filter(region.contains).forall { c2 =>
        math.abs(image(c1.i)(c1.j) - image(c2.i)(c2.j)) <= threshold
      }
    }
    val avg = region.map(c => image(c.i)(c.j)).sum / 9
    if (inThreshold) region.map(_ -> avg) else List.empty
  }

  private def neighbor9(c: C): List[C] =
    List(
      C(c.i - 1, c.j - 1), C(c.i - 1, c.j), C(c.i - 1, c.j + 1),
      C(c.i, c.j - 1),     C(c.i, c.j),     C(c.i, c.j + 1),
      C(c.i + 1, c.j - 1), C(c.i + 1, c.j), C(c.i + 1, c.j + 1),
    )

  private def neighbor4(c: C): List[C] =
    List(C(c.i - 1, c.j), C(c.i + 1, c.j), C(c.i, c.j - 1), C(c.i, c.j + 1))
}
```