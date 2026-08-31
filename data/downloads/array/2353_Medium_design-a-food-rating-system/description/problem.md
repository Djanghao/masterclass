# [2353. Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1945 | 328 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `atlassian`, `amazon`, `google`

## Description

Design a food rating system that can do the following:

	- **Modify** the rating of a food item listed in the system.

	- Return the highest-rated food item for a type of cuisine in the system.

Implement the `FoodRatings` class:

	- `FoodRatings(String[] foods, String[] cuisines, int[] ratings)` Initializes the system. The food items are described by `foods`, `cuisines` and `ratings`, all of which have a length of `n`.

	
		`foods[i]` is the name of the `i^th` food,

		- `cuisines[i]` is the type of cuisine of the `i^th` food, and

		- `ratings[i]` is the initial rating of the `i^th` food.

	
	
	- `void changeRating(String food, int newRating)` Changes the rating of the food item with the name `food`.

	- `String highestRated(String cuisine)` Returns the name of the food item that has the highest rating for the given type of `cuisine`. If there is a tie, return the item with the **lexicographically smaller** name.

Note that a string `x` is lexicographically smaller than string `y` if `x` comes before `y` in dictionary order, that is, either `x` is a prefix of `y`, or if `i` is the first position such that `x[i] != y[i]`, then `x[i]` comes before `y[i]` in alphabetic order.

 

**Example 1:**

```

Input
[&quot;FoodRatings&quot;, &quot;highestRated&quot;, &quot;highestRated&quot;, &quot;changeRating&quot;, &quot;highestRated&quot;, &quot;changeRating&quot;, &quot;highestRated&quot;]
[[[&quot;kimchi&quot;, &quot;miso&quot;, &quot;sushi&quot;, &quot;moussaka&quot;, &quot;ramen&quot;, &quot;bulgogi&quot;], [&quot;korean&quot;, &quot;japanese&quot;, &quot;japanese&quot;, &quot;greek&quot;, &quot;japanese&quot;, &quot;korean&quot;], [9, 12, 8, 15, 14, 7]], [&quot;korean&quot;], [&quot;japanese&quot;], [&quot;sushi&quot;, 16], [&quot;japanese&quot;], [&quot;ramen&quot;, 16], [&quot;japanese&quot;]]
Output
[null, &quot;kimchi&quot;, &quot;ramen&quot;, null, &quot;sushi&quot;, null, &quot;ramen&quot;]

Explanation
FoodRatings foodRatings = new FoodRatings([&quot;kimchi&quot;, &quot;miso&quot;, &quot;sushi&quot;, &quot;moussaka&quot;, &quot;ramen&quot;, &quot;bulgogi&quot;], [&quot;korean&quot;, &quot;japanese&quot;, &quot;japanese&quot;, &quot;greek&quot;, &quot;japanese&quot;, &quot;korean&quot;], [9, 12, 8, 15, 14, 7]);
foodRatings.highestRated(&quot;korean&quot;); // return &quot;kimchi&quot;
                                    // &quot;kimchi&quot; is the highest rated korean food with a rating of 9.
foodRatings.highestRated(&quot;japanese&quot;); // return &quot;ramen&quot;
                                      // &quot;ramen&quot; is the highest rated japanese food with a rating of 14.
foodRatings.changeRating(&quot;sushi&quot;, 16); // &quot;sushi&quot; now has a rating of 16.
foodRatings.highestRated(&quot;japanese&quot;); // return &quot;sushi&quot;
                                      // &quot;sushi&quot; is the highest rated japanese food with a rating of 16.
foodRatings.changeRating(&quot;ramen&quot;, 16); // &quot;ramen&quot; now has a rating of 16.
foodRatings.highestRated(&quot;japanese&quot;); // return &quot;ramen&quot;
                                      // Both &quot;sushi&quot; and &quot;ramen&quot; have a rating of 16.
                                      // However, &quot;ramen&quot; is lexicographically smaller than &quot;sushi&quot;.

```

 

**Constraints:**

	- `1 <= n <= 2 * 10^4`

	- `n == foods.length == cuisines.length == ratings.length`

	- `1 <= foods[i].length, cuisines[i].length <= 10`

	- `foods[i]`, `cuisines[i]` consist of lowercase English letters.

	- `1 <= ratings[i] <= 10^8`

	- All the strings in `foods` are **distinct**.

	- `food` will be the name of a food item in the system across all calls to `changeRating`.

	- `cuisine` will be a type of cuisine of **at least one** food item in the system across all calls to `highestRated`.

	- At most `2 * 10^4` calls **in total** will be made to `changeRating` and `highestRated`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-a-food-rating-system/) | [Solutions](https://leetcode.com/problems/design-a-food-rating-system/)
