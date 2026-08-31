# Scala fun 1 var 3 lines solution + 2 FP ones

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4392529/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4392529/)

---

All variants are working

# Code
```
object Solution {
  def findMinArrowShots(points: Array[Array[Int]]): Int = {
    points.sortInPlaceBy(_(1))
    var minEnd = points(0)(1)
    points.count(b => minEnd < b(0) && {minEnd = b(1); true}) + 1

  //   points.sortInPlaceBy(_(1))
  //   var minEnd = points(0)(1)
  //   var arrows = 1
  //   for(nextBalloon <- points)
  //     if (minEnd < nextBalloon(0)) {
  //       minEnd = nextBalloon(1)
  //       arrows += 1
  //     }
  //   arrows

    // @annotation.tailrec def withBalloon(i: Int, minEnd: Int, arrows: Int): Int =
    //   if (i == points.length) arrows
    //   else {
    //     val nextBalloon = points(i)
    //     if (minEnd < nextBalloon(0))
    //       withBalloon(i + 1, nextBalloon(1), arrows + 1)
    //     else
    //       withBalloon(i + 1, minEnd, arrows)
    //   }
    // points.sortInPlaceBy(_(1))
    // withBalloon(1, points(0)(1), 1)

    // @annotation.tailrec def withBalloon(i: Int, minEnd: Int, arrows: Int): Int =
    //   if (i == points.length) arrows
    //   else {
    //     val nextBalloon = points(i)
    //     if (nextBalloon(0) <= minEnd)
    //       withBalloon(i + 1, minEnd.min(nextBalloon(1)), arrows)
    //     else
    //       withBalloon(i + 1, nextBalloon(1), arrows + 1)
    //   }
    // points.sortInPlaceBy(_(0))
    // withBalloon(1, points(0)(1), 1)
  }
}

```