# C# Solution for Design A Food Rating System Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4416076/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4416076/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
\u2022	The solution uses dictionaries and sorted sets to efficiently store and retrieve food items based on their ratings and cuisines.
\u2022	Initialization takes O(n * log(n)) time to create sorted sets for cuisines.
\u2022	Updating a food rating takes O(log(n)) time, and finding the highest-rated food for a given cuisine takes constant time.
\u2022	Overall, the space complexity is O(n), where n is the number of food items. The time complexity for most operations is O(log(n)) or O(1), except for initialization, which is O(n * log(n)) due to sorting within sorted sets.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	Data Structures Used:
	\u2022	Dictionary<string, int> (foodRatingMap): To store food names and their ratings.
	\u2022	Dictionary<string, string> (foodCuisineMap): To store food names and their corresponding cuisines.
	\u2022	Dictionary<string, SortedSet<Tuple<int, string>>> (cuisineFoodMap): To map cuisines to a sorted set of Tuples containing the food ratings and names.
\u2022	Initialization (FoodRatings constructor):
	\u2022	Iterates through the provided arrays of foods, cuisines, and ratings.
	\u2022	Populates the foodRatingMap and foodCuisineMap.
	\u2022	For each cuisine, creates a SortedSet (cuisineFoodMap) with a custom TupleComparer to store food items by their ratings.
\u2022	Change Rating (ChangeRating method):
	\u2022	Updates the rating of a specific food in foodRatingMap.
	\u2022	Retrieves the cuisine of the food and updates its corresponding SortedSet in cuisineFoodMap.
\u2022	Highest Rated Food (HighestRated method):
	\u2022	Retrieves the highest-rated food for a given cuisine from the cuisineFoodMap.
	\u2022	It checks if the SortedSet for the given cuisine exists and retrieves the first element, which represents the highest-rated food in the sorted set.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Initialization:
	\u2022	Iterating through the provided arrays of foods, cuisines, and ratings: O(n)
	\u2022	Creating the sorted set for each cuisine: O(n * log(n))
	\u2022	Total time complexity: O(n * log(n))
\u2022	Change Rating (ChangeRating method):
	\u2022	Updating rating in foodRatingMap: O(1)
	\u2022	Updating SortedSet in cuisineFoodMap: O(log(n))
	\u2022	Total time complexity: O(log(n))
\u2022	Highest Rated Food (HighestRated method):
	\u2022	Retrieving the highest-rated food: O(1)
	\u2022	Total time complexity: O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Additional Space Used:
	\u2022	foodRatingMap, foodCuisineMap: O(n)
	\u2022	cuisineFoodMap: O(n * log(n)) for sorted sets
	\u2022	Total space complexity: O(n)

# Code
```
public class FoodRatings {
    private Dictionary<string, int> foodRatingMap = new Dictionary<string, int>();
    private Dictionary<string, string> foodCuisineMap = new Dictionary<string, string>();
    private Dictionary<string, SortedSet<Tuple<int, string>>> cuisineFoodMap = new Dictionary<string, SortedSet<Tuple<int, string>>>();

    public FoodRatings(string[] foods, string[] cuisines, int[] ratings) {
        for (int i = 0; i < foods.Length; ++i) {
            foodRatingMap[foods[i]] = ratings[i];
            foodCuisineMap[foods[i]] = cuisines[i];

            if (!cuisineFoodMap.ContainsKey(cuisines[i])) {
                cuisineFoodMap[cuisines[i]] = new SortedSet<Tuple<int, string>>(new TupleComparer());
            }

            cuisineFoodMap[cuisines[i]].Add(Tuple.Create(-ratings[i], foods[i]));
        }
    }

    public void ChangeRating(string food, int newRating) {
        string cuisineName = foodCuisineMap[food];
        SortedSet<Tuple<int, string>> cuisineSet = cuisineFoodMap[cuisineName];

        cuisineSet.Remove(Tuple.Create(-foodRatingMap[food], food));
        foodRatingMap[food] = newRating;
        cuisineSet.Add(Tuple.Create(-newRating, food));
    }

    public string HighestRated(string cuisine) {
        Tuple<int, string> highestRated = cuisineFoodMap[cuisine].FirstOrDefault();
        return highestRated != null ? highestRated.Item2 : null;
    }
}

// Comparer for Tuple<int, string>
public class TupleComparer : IComparer<Tuple<int, string>> {
    public int Compare(Tuple<int, string> x, Tuple<int, string> y) {
        int compareByRating = x.Item1.CompareTo(y.Item1);
        if (compareByRating == 0) {
            return x.Item2.CompareTo(y.Item2);
        }
        return compareByRating;
    }
}
/**
 * Your FoodRatings object will be instantiated and called as such:
 * FoodRatings obj = new FoodRatings(foods, cuisines, ratings);
 * obj.ChangeRating(food,newRating);
 * string param_2 = obj.HighestRated(cuisine);
 */
```