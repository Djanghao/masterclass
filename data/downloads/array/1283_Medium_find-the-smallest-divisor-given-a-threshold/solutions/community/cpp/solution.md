# Easy C++ solution

**Author:** coderzz20
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/448283/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/448283/)

---

```
class Solution {
public:
    int smallestDivisor(vector<int>& nums, int threshold) {
        int l=1,r=1000001;
        int ans=0;
        while(l<=r){
            int mid=l+(r-l)/2;
            long long int sum=0;
            for(int i=0;i<nums.size();i++){
                if(nums[i]%mid==0){
                    sum+=(nums[i]/mid);
                } else{
                    sum+=(nums[i]/mid)+1;
                }
            }
            if(sum>threshold){
                l=mid+1;
            } else{
                ans=mid;
                r=mid-1;
            }
        }
        return ans;
    }
};
```