# C++ using STL || easy solution

**Author:** salahalshafey
**Votes:** 64
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/997177/](https://leetcode.com/problems/richest-customer-wealth/solutions/997177/)

---

```
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int richest = 0;
        for (auto &customer : accounts)
            richest = max (richest, accumulate(customer.begin(), customer.end(), 0));
        
        return richest;
    }
};
```