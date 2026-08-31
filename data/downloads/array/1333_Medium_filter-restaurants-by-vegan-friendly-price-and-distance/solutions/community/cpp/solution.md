# The beauty of STL | C++ solution

**Author:** Unstoppable_Train
**Votes:** 3
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5605602/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5605602/)

---


```
    vector<int> filterRestaurants(vector<vector<int>>& restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        vector<vector<int>> filtered;
        vector<int> ans;
        
        copy_if (restaurants.begin(), restaurants.end(), back_inserter(filtered), [&](const auto &entry){
            return (entry[2] == veganFriendly || veganFriendly == 0) && entry[4] <= maxDistance && entry[3] <= maxPrice;
        });
        
        sort(filtered.begin(), filtered.end(), [](const auto &a, const auto &b){
            return a[1] == b[1] ? a[0] > b[0] : a[1] > b[1];
        });
        
        transform(filtered.begin(), filtered.end(), back_inserter(ans), [](const auto &entry){
            return entry[0];
        });
        
        return ans;
    }
```