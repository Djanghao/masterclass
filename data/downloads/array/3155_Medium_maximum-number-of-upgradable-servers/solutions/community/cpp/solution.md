# Math

**Author:** cpcs
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5162535/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5162535/)

---

# Intuition
If we sell x servers and upgrade the others, we should have

(x * sell + money) / upgrade >= count - x
x * sell + money >= count * upgrade - x * upgrade
x * (sell + upgrade) >= count * upgrade - money

if count * upgrade - money < 0 then x = 0
otherwise x = ceil((count * upgrade - money) / (sell + upgrade))

And count - x is the answer.

# Complexity
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    vector<int> maxUpgrades(vector<int>& count, vector<int>& upgrade, vector<int>& sell, vector<int>& money) {
        const int n = count.size();
        vector<int> r = count;
        for (int i = 0; i < n; ++i) {
            const long long temp = static_cast<long long>(count[i]) * upgrade[i] - money[i];    
            if (temp > 0) {
                 const int v = sell[i] + upgrade[i];
                 r[i] -= (temp + v - 1) / v;
            } 
               
        }
        return r;
    }
};
```