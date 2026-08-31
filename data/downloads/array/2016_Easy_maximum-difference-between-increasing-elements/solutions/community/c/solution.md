# Similar to Best Time to Buy and Sell Stock[C++]

**Author:** ATleastGiveTry
**Votes:** 21
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486309/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486309/)

---

```
Credit-Subhanshu Babbar
class Solution {
public:
    int maximumDifference(vector<int>& prices) {
        int maxPro = 0;
    int minPrice = INT_MAX;
    for(int i = 0; i < prices.size(); i++){
        minPrice = min(minPrice, prices[i]);
        maxPro = max(maxPro, prices[i] - minPrice);
    }
        if(maxPro==0) return -1;
        return maxPro;
    
    }
};
```