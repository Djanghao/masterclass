# C++ - sort + binary search

**Author:** MumRocks
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/4318858/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/4318858/)

---



# Code
```
class Solution {
public:
    vector<int> bestCoordinate(vector<vector<int>>& towers, int radius) {
        int maxPower=0;
        vector<int> ans{0,0};

        sort(towers.begin(),towers.end());

        for(int i=0;i<=50;i++){
            int si = lower_bound(towers.begin(),towers.end(), vector<int> {i-radius,0,0})-towers.begin();
            int ei= lower_bound(towers.begin(),towers.end(),vector<int>  {i+radius+1,0,0})-towers.begin();

            for (int j=0;j<=50;j++){
                int tPower=0;
                double td;
                for (int k=si;k<ei;k++){
                    td = sqrt(abs(i-towers[k][0])*abs(i-towers[k][0])+abs(j-towers[k][1])*abs(j-towers[k][1]));
                    if (td<=radius) tPower += towers[k][2]/(1+td);
                }
                if (tPower>maxPower) {
                    maxPower=tPower;
                    ans[0]=i;
                    ans[1]=j;
                }
            }
            
        }
        return ans;
    }
};
```