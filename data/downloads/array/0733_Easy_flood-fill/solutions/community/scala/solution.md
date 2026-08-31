# Scala | Simple | DFS

**Author:** soumensaha
**Votes:** 1
**Link:** [https://leetcode.com/problems/flood-fill/solutions/2011777/](https://leetcode.com/problems/flood-fill/solutions/2011777/)

---

```
object Solution {
  def floodFill(image: Array[Array[Int]], sr: Int, sc: Int, newColor: Int): Array[Array[Int]] = image(sr)(sc) match {
    case originalColor =>
      if (originalColor != newColor) {
        image(sr)(sc) = newColor
        Seq((sc - 1, sr), (sc + 1, sr), (sc, sr - 1), (sc, sr + 1))
          .filter { case (x, y) => x >= 0 && x < image(0).length && y >= 0 && y < image.length && image(y)(x) == originalColor }
          .foreach { case (x, y) => floodFill(image, y, x, newColor) }
      }
      image
  }
}

```