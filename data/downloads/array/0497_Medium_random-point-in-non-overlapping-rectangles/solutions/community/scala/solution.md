# Scala O(log n) in the number of rectangles per pick

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4571482/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4571482/)

---

# Intuition
We want a uniform distribution of picked points across all of the rectangle areas.
So, if $$totalArea$$ = sum of all rectangle areas, we want to have the random picking to be random between $$[0, totalArea)$$. That's easy enough: $$randomPoint = (new util.Random(...)).nextInt(totalArea)$$
Transforming a linear point into a specific point of a specific rectangle is going to be the problem to solve.
In order to do that, will store the increasing total area in an array. Will find which rectangle to use in $$O(log n)$$ time, where n is the number of rectangles.
The coordinates can be derived by calculating the relative area: randomArea - totalAreaBeforePickedRectangle
From the relative area to the coordinates it's easy:
* x = relativeArea % rectangleWidth + bottomLeft.x
* y = relativeArea / rectangleWidth + bottomLeft.y


# Approach
1. initialise a pseudo random generator. Will be useful to consistently reproduce the same results given the same inputs, hence helpful in debugging
2. Initialise an array with numRects + 1 integers
3. Also initialise an array with the rect dimensions
4. When picking: 
5. Generate a random value between 0 and totalArea - 1
6. Find the rectangle that point belongs to
7. Calculate the coordinates with the remaining area inside the found rectangle

 
# Complexity
- Time complexity:
$$O(log n)$$ where n is the number of rectangles

- Space complexity:
$$O(n)$$

# Code
```
class Solution(_rects: Array[Array[Int]]) {
  private val random = new util.Random(987654321)
  private val totalArea = Array.ofDim[Int](_rects.size + 1)
  private val rectToArea = Array.ofDim[Int](_rects.size)
  private val rectDims = Array.ofDim[(Int, Int)](_rects.size)
  _rects.zipWithIndex.foreach {
    case (a, i) =>
      val w = (a(2) - a(0) + 1)
      val h = (a(3) - a(1) + 1)
      val area = w * h 
      totalArea(i + 1) = totalArea(i) + area
      rectDims(i) = w -> h
  }
  println(s"totalArea: ${totalArea.mkString(",")}")
  def pick(): Array[Int] = {
    val area = random.nextInt(totalArea.last)
    val rectangleIndex = pickRandomRectByArea(area)
    val rect = _rects(rectangleIndex)
    val (w, h) = rectDims(rectangleIndex)
    val relativeArea = area - totalArea(rectangleIndex)
    val x = rect(0) + (relativeArea % w)
    val y = rect(1) + (relativeArea / w)
    // println(s"picked area: $area w: $w h: $h rectangle: $rectangleIndex bounds: ${rect.mkString(",")} relativeArea: $relativeArea (dx: ${(relativeArea % w)} dy: ${ (relativeArea / w)})(x: $x y: $y)")
    Array(x, y)
  }

  private def pickRandomRectByArea(area: Int): Int = {
    var left = 0
    var right = totalArea.size - 1
    while (left < right) {
      val middle = (left + right + 1) >> 1
      if (area < totalArea(middle)) {
        right = middle - 1
      } else {
        left = middle
      }
    }
    left
  }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
```