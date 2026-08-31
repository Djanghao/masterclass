# TIME O(n+m), SPACE P(1) || C++ || ONE PASS

**Author:** yash___sharma_
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3259360/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/3259360/)

---

```
class Solution {
public:
    int minCost(vector<int>& a, vector<int>& b, vector<int>& rowCosts, vector<int>& colCosts) {
        int ans = 0;
        if(a[0]<b[0]){
            while(a[0]<b[0]){
                a[0]++;
                ans += rowCosts[a[0]];
            }
        }else if(a[0]>b[0]){
            while(a[0]>b[0]){
                a[0]--;
                ans += rowCosts[a[0]];
            }
        }
        if(a[1]<b[1]){
            while(a[1]<b[1]){
                a[1]++;
                ans += colCosts[a[1]];
            }
        }else if(a[1]>b[1]){
            while(a[1]>b[1]){
                a[1]--;
                ans += colCosts[a[1]];
            }
        }
        return ans;
    }
};
```