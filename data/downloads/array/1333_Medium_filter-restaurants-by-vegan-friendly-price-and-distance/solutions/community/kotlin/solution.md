# Kotlin beatufil and easy to read solution

**Author:** user3960IC
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4408113/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4408113/)

---

# Complexity
- Time complexity: nLog(n) because we use sorting

- Space complexity: n, because mapping and filtering create new lists

# Code
```
class Solution {
    fun filterRestaurants(restaurants: Array<IntArray>, veganFriendly: Int, maxPrice: Int, maxDistance: Int): List<Int> {
        return restaurants.filter { if (veganFriendly == 0) true else it[2] == 1 }
                .filter { it[3] <= maxPrice }
                .filter { it[4] <= maxDistance }
                .sortedWith { a, b ->
                    if (a[1] != b[1]) b[1] - a[1] else b[0] - a[0]
                }
                .map { it.first() }
    }
}
```