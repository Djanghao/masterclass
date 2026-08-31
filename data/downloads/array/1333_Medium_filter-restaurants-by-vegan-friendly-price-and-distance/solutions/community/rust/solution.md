# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3100730/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3100730/)

---

# Code
```
impl Solution {
    pub fn filter_restaurants(restaurants: Vec<Vec<i32>>, vegan_friendly: i32, max_price: i32, max_distance: i32) -> Vec<i32> {
        let mut restaurants = restaurants;
        restaurants.retain(|r| {
            if vegan_friendly == 1 && r[2] == 0 {
                return false;
            }
            if r[3] > max_price || r[4] > max_distance {
                return false;
            }
            true
        });
        restaurants.sort_by(|a, b| if a[1] == b[1] { b[0].cmp(&a[0]) } else { b[1].cmp(&a[1]) });
        restaurants.iter().map(|r| r[0]).collect()
    }
}
```