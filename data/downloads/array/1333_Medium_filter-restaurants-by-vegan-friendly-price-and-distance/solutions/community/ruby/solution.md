# Ruby Solution (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3439534/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3439534/)

---

# Approach
1. Filter by vegan friendly if applicable
2. Filter by price and distance
3. Sort by rating, then by id (highest to lowest)
4. Return just the id of each restaurant

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```
def filter_restaurants(restaurants, vegan_friendly, max_price, max_dist)
    restaurants.filter! { |rest| rest[2] == 1 } if vegan_friendly == 1
    restaurants.filter! { |rest| rest[3] <= max_price && rest[4] <= max_dist }
    restaurants.sort_by! { |rest| [-rest[1],-rest[0]] }
    restaurants.map { |rest| rest[0] }
end
```