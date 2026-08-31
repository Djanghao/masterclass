# C# Filter and Sort Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5563594/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5563594/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we'll need to filter the restaurants based on the provided criteria and then sort the filtered results based on the given conditions. The steps are as follows:

Filter the restaurants based on the vegan-friendly criteria, max price, and max distance.
Sort the filtered restaurants first by rating in descending order, and then by ID in descending order if the ratings are the same.
Return the list of restaurant IDs.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Filtering:
//  *Where(r => (veganFriendly == 0 || r[2] == 1) && r[3] <= maxPrice && r[4] <= maxDistance): This line 
//  filters the restaurants based on the given criteria:
//  **If veganFriendly is 0, include all restaurants. Otherwise, include only those where veganFriendlyi 
//  is 1.
//  **Include only those restaurants where price is less than or equal to maxPrice.
//  **Include only those restaurants where distance is less than or equal to maxDistance.
//  Sorting:
//  *OrderByDescending(r => r[1]): This sorts the filtered restaurants by rating in descending order.
//  *ThenByDescending(r => r[0]): For restaurants with the same rating, this sorts them by ID in 
//  descending order.
//  Selecting ID's:
//  *Select(r => r[0]): This extracts the ID of each restaurant in the filtered and sorted list.
//  Converting to List:
//  *ToList(): This converts the result to a list of integers.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public IList<int> FilterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        var filtered = restaurants
            .Where(r => (veganFriendly == 0 || r[2] == 1) && r[3] <= maxPrice && r[4] <= maxDistance)
            .OrderByDescending(r => r[1])  // Sort by rating descending
            .ThenByDescending(r => r[0])   // Sort by id descending
            .Select(r => r[0])             // Select the restaurant id
            .ToList();

            return filtered;
    }
}
```