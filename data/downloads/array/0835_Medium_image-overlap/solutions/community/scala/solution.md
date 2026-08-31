# [Scala] Functional solution grouping linear transformation vectors

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/image-overlap/solutions/1532071/](https://leetcode.com/problems/image-overlap/solutions/1532071/)

---

```
  def largestOverlap(img1: Array[Array[Int]], img2: Array[Array[Int]]): Int = {
    def ones(img: Array[Array[Int]]): Seq[(Int, Int)] = for {
      r <- img.indices
      c <- img(r).indices
      if img(r)(c) == 1
    } yield (r, c)

    val vectors = for {
      (x1, y1) <- ones(img1)
      (x2, y2) <- ones(img2)
    } yield (x2 - x1, y2 - y1)

    vectors
      .groupMapReduce(identity)(_ => 1)(_ + _)
      .values
      .maxOption
      .getOrElse(0)
  }
```