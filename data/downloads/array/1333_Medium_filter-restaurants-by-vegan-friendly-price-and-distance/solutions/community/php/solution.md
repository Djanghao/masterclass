# Solution Filter Restaurants by Vegan-Friendly, Price and Distance

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4920902/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4920902/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    function filterRestaurants($restaurants, $veganFriendly, $maxPrice, $maxDistance) {
        $filteredRestaurants = [];
        
        foreach ($restaurants as $restaurant) {
            list($id, $rating, $isVeganFriendly, $price, $distance) = $restaurant;
            
            if (($veganFriendly == 0 || $isVeganFriendly == $veganFriendly) &&
                $price <= $maxPrice && $distance <= $maxDistance) {
                $filteredRestaurants[] = array($id, $rating);
            }
        }
        
        usort($filteredRestaurants, function ($a, $b) {
            if ($a[1] == $b[1]) {
                return $b[0] - $a[0];
            }
            return $b[1] - $a[1];
        });
        
        $result = [];
        foreach ($filteredRestaurants as $restaurant) {
            $result[] = $restaurant[0];
        }
        
        return $result;
    }
}

```