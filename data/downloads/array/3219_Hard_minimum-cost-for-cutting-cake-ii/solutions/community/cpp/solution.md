# Greedy

**Author:** donpaul271
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473080/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473080/)

---

We have to ensure that the highest cost cuts gets used the least number of times. 

Sort both the vertical and horizontal costs and then pick the highest available.

-----

If the vertical cut is the highest available:

Multiple the cost by number of horizontal sections (We have to cut each horizontal section seperately with this particular vertical cut)

Increase the number vertical sections by one (Each vertical cut increases the number of vertical sections by one)

----

If the horizontal cut is the highest available:

Multiple the cost by number of vertical sections.
Increase the number horizontal sections by one.



(please upvote if it helped)

# Code
```
#define ll long long

class Solution {
public:
    long long minimumCost(int m, int n, vector<int>& hc, vector<int>& vc) {
        
        sort(hc.begin(), hc.end());
        sort(vc.begin(), vc.end());
        
        int hcnt = 1;
        int vcnt = 1;
        
        ll ans = 0;
        
        while(!vc.empty() || !hc.empty())
        {
            ll vcurr = -1;
            ll hcurr = -1;
            
            if(!vc.empty()) 
                vcurr = vc.back(); // highest vertical cut available.
            
            if(!hc.empty()) 
                hcurr = hc.back(); // Highest horizontal cut available.
              
            
            if(vcurr>=hcurr) // vertical cut is the highest available.
            {
                vc.pop_back();
                
                ans += vcurr*hcnt;
                ++vcnt;
            }
            
            else // horizontal cut is the highest available.
            {
                hc.pop_back();
                
                ans += hcurr*vcnt;
                ++hcnt;
            }
        }
        
        return ans;
    }
};




```