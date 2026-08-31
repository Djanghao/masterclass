# 💯💯✅✅ C++ || Greedy ✅ Approach beats 100% SOLUTION ||

**Author:** abhaysinghraghuvanshi
**Votes:** 48
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005121/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005121/)

---

# Intuition
To buy maximum number of Ice Creams you should start buying with cheapest cost.

# Approach
sort the costs in ascending order and then count the ice cream until the current costs is greater than remaining coins.

# Complexity
- Time complexity:
O(nlog(n))

- Space complexity:
 O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maxIceCream(vector<int>& costs, int coins) {
        int count = 0;
        sort(costs.begin(),costs.end());
        for(int i=0;i<costs.size();i++){
            if(costs[i]>coins)break;
            coins -= costs[i];
            count++;
        }
        return count;
    }
};
```