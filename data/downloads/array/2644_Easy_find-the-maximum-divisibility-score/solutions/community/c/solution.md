# Easy || C++

**Author:** Shrikanta8
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421776/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421776/)

---

```
class Solution {
public:
    int maxDivScore(vector<int>& nums, vector<int>& divisors) {
        int dLen = divisors.size(),n=nums.size(),c,maxVal=0,ans=INT_MAX;
        
        for(int i=0;i<dLen;i++){
            c=0;
            for(int j=0;j<n;j++){
                if(nums[j]%divisors[i] == 0){
                    c++;
                }
            }
            if(c==maxVal){
                ans = min(ans,divisors[i]);
            }
            else if(c > maxVal){
                maxVal = c;
                ans = divisors[i];
            }
        }
        return ans;
    }
};
```