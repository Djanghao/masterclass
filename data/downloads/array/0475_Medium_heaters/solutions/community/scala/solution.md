# Scala O(n log n), single passage on sorted heaters and houses

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/4651052/](https://leetcode.com/problems/heaters/solutions/4651052/)

---

# Intuition
* each house will be covered by the closest heater
* the maximum of these distances is the maximum radius we're looking for

# Approach
1. Sort heaters and houses and convert to long: the reason for that will become apparent with the next point
2. To simplify corner cases, add a left and right heater at Int.MinValue - 1 and Int.MaxValue + 1. Since we're using longs, these values can't appear as inputs
3. Initialise the left heater location as Int.MinValue - 1
4. Initialise the right heater to the first heater location
5. iterate through all the houses
6. update left and right heater if the current house is past the right heater location
7. compute the minimum of the distance between the left and the right heater
8. update the result keeping the maximum distance found so far
9. return the maximum distance found

# Complexity
- Time complexity:
$$O(n log n + h log h)$$

- Space complexity:
$$O(n + m)$$
This is to store the converted input arrays (to longs)


# Code
```
object Solution {
  def findRadius(houses: Array[Int], heaters: Array[Int]): Int = alreadySortedFindRadius(houses.map(_.toLong).sorted, heaters.map(_.toLong).sorted :+ (Int.MaxValue.toLong + 1))

  private def alreadySortedFindRadius(houses: Array[Long], heaters: Array[Long]): Int = {
    val hon = houses.length
    val hen = heaters.length
    var h = 0
    var i = 0
    var leftHeater = Int.MinValue.toLong - 1
    var rightHeater = heaters(h)
    var result = 0L
    while (i < hon) {
      while (houses(i) > rightHeater) {
        leftHeater = heaters(h)
        h += 1
        rightHeater = heaters(h)
      }
      val minDistanceFromHeater = (houses(i) - leftHeater).min(rightHeater - houses(i))
      result = result.max(minDistanceFromHeater)
      i += 1
    }
    result.toInt
  }
}
```