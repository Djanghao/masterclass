# ✅C++ | Very Easy

**Author:** Pitbull_45
**Votes:** 13
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3771227/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3771227/)

---

```
class Solution {
public:
    int sumOfSquares(vector<int>& nums) {
        int n=nums.size();
        int ans=0;
        for(int i=0;i<n;i++){
            if(n%(i+1)==0){
              ans+=(nums[i]*nums[i]);
            }
        }
        return ans;
    }
};
```