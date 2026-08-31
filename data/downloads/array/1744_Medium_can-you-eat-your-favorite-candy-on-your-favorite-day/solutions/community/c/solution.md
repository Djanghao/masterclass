# 1744. Can You Eat Your Favorite Candy on Your Favorite Day?.cpp

**Author:** 202021ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5294550/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5294550/)

---

**Code**
```
class Solution {
public:
    vector<bool> canEat(vector<int>& candiesCount, vector<vector<int>>& queries) {
        int n = candiesCount.size();
        vector<long long> sum(n);
        sum[0] = candiesCount[0];
        for (int i = 1; i < n; i++) {
            sum[i] = sum[i - 1] + candiesCount[i];
        }
        vector<bool> ans;
        for (auto& q : queries) {
            int favoriteType = q[0], favoriteDay = q[1], dailyCap = q[2];
            long long x1 = favoriteDay + 1;
            long long y1 = (long long)(favoriteDay + 1) * dailyCap;
            long long x2 = (favoriteType == 0 ? 1 : sum[favoriteType - 1] + 1);
            long long y2 = sum[favoriteType];
            ans.push_back(!(x1 > y2 || y1 < x2));
        }
        return ans;
    }
};
```