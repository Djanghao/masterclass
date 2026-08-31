# Simple C++ Solution

**Author:** Roshan_Aswal
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1953873/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1953873/)

---

```
class Solution {
public:
    long long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long long ans=0;
        int s=cost1>cost2?cost1:cost2;
        int r=s==cost1?cost2:cost1;
        for(int i=0;i<=total;i+=s){
            if(i==0){
                ans+=(total/r)+1;
            }else{
                if(total-i==0)ans++;
                else ans+=(total-i)/r+1;                
            }
        }
        return ans;
    }
};