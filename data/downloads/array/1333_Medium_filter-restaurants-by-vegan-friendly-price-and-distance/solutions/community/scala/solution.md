# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5524258/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5524258/)

---

```scala
object Solution {
  def filterRestaurants(restaurants: Array[Array[Int]], veganFriendly: Int, maxPrice: Int, maxDistance: Int): List[Int] =
    restaurants.toList.filter(r => r(2) >= veganFriendly && r(3) <= maxPrice && r(4) <= maxDistance)
      .sortBy(r => (-r(1), -r(0))).map(_.head)
}
```