# simple dimple

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4627535/](https://leetcode.com/problems/buy-two-chocolates/solutions/4627535/)

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
  int buyChoco(List<int> prices, int money) {
    prices.sort();
    if(prices[0]+prices[1] <= money){
      return money-prices[0]-prices[1];
    }else{
      return money;
    }
  }
}
```