# Scala DP Top-Down

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3680779/](https://leetcode.com/problems/count-all-possible-routes/solutions/3680779/)

---

# Code
```
object Solution {
  def countRoutes(locations: Array[Int], start: Int, finish: Int, fuel: Int): Int = {
    val m = 1_000_000_007

    val mem = scala.collection.mutable.Map[(Int, Int), Int]()
    def dp(city: Int, fuel: Int): Int = mem.getOrElseUpdate((city, fuel), {
      val nextPaths = for {
        nextCity <- locations.indices if nextCity != city
        dist = Math.abs(locations(city) - locations(nextCity)) if dist <= fuel
      } yield dp(nextCity, fuel - dist)
      nextPaths.fold(if (city == finish) 1 else 0) { (x, y) => (x + y) % m }
    })

    dp(start, fuel)
  }
}

```