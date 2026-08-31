# Kotlin solution

**Author:** nothingelsematters
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4414673/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4414673/)

---

# Complexity

- Time complexity:
  - `init`: $O(\\log(n))$
  - `changeRating`: $O(\\log(n))$
  - `highestRated`: $O(\\log(n))$
- Space complexity: $O(n)$

# Code

```
class FoodRatings(foods: Array<String>, cuisines: Array<String>, ratings: IntArray) {

    private val foodToCuisine: Map<String, String> =
        foods.asSequence().zip(cuisines.asSequence()).associate { it }

    private val foodToRating: MutableMap<String, Int> =
        foods.asSequence().zip(ratings.asSequence()).associate { it }.toMutableMap()

    private val cuisineToRatings: Map<String, SortedSet<Pair<Int, String>>> = buildMap {
        val pairComparator = compareByDescending { it: Pair<Int, String> -> it.first }
            .thenComparing { it: Pair<Int, String> -> it.second }

        for (i in foods.indices) {
            getOrPut(cuisines[i]) { sortedSetOf(pairComparator) } += ratings[i] to foods[i]
        }
    }

    fun changeRating(food: String, newRating: Int) {
        val rating = foodToRating[food]!!
        foodToRating[food] = newRating

        val cuisineRatings = cuisineToRatings[foodToCuisine[food]!!]!!
        cuisineRatings -= rating to food
        cuisineRatings += newRating to food
    }

    fun highestRated(cuisine: String): String = cuisineToRatings[cuisine]!!.first().second
}

```