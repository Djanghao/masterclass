# c#, Continuous Knapsack (greedy)

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3106228/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3106228/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a **Continuous Knapsack** problem (the easiest one from all knapsack problems set). The solution is greedy one: we order items by ratio `price / weight` and take while we can do it.

# Approach
<!-- Describe your approach to solving the problem. -->
Order items and take until `rest` capacity is positive

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$, can be improved to $$O(1)$$ if we perform *in place* sorting

# Code
```
public class Solution {
    public double MaxPrice(int[][] items, int capacity) {
        var recs = items    
            .Select(item => (price: item[0], weight: item[1], ratio: ((double) item[0]) / item[1] ))
            .OrderByDescending(item => item.ratio);

        double rest = capacity;
        double result = 0;

        foreach (var rec in recs) {
            if (rec.weight <= rest) {
                result += rec.price;
                rest -= rec.weight;
            }
            else {
                result += rec.ratio * rest;
                rest = 0.0;

                break;
            }
        }

        if (rest > 0)
            return -1;

        return result;
    }
}
```