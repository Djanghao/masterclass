# C++ | Sort

**Author:** joey___
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3103899/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3103899/)

---

# Intuition
Sort item by unit weight price and fill the bag with decreasing unit price order.

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
public:
    double maxPrice(vector<vector<int>>& items, int capacity) {
        sort(items.begin(), items.end(), [](const auto& lhs, const auto& rhs) {
            double unitPriceLhs = lhs[0] * 1.0 / lhs[1];
            double unitPriceRhs = rhs[0] * 1.0 / rhs[1];
            return unitPriceLhs > unitPriceRhs;
        });
        double totalPrice = 0.0;
        for (auto& item : items) {
            int curCap = min(item[1], capacity);
            totalPrice += curCap * 1.0 / item[1] * item[0];
            capacity -= curCap;
            if (capacity == 0) {
                return totalPrice;
            }
        }
        return -1;
    }
};
```