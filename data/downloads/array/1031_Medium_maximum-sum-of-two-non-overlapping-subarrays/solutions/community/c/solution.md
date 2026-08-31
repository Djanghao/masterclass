# 100% faster solution with explaination

**Author:** kritika_12
**Votes:** 47
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/1365435/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/1365435/)

---

The idea is to find the max sum subbary of given size firstlen and seconlen seperately 
Find prefix sum for firstlen and suffix sum for secondLen and vice-versa
Dp1-> it will store the max sum of the subarray of size firstlen from 0th to ith index.
Dp2-> it will store the max sum of the subarray from last index to ith index
and then check from a window of fisrstlen-1 to nums.size()- secondlen
which ever has the max sum will be our result



```
class Solution {
public:
    int helper(vector<int>&nums,int x,int y){
        int n=nums.size();
        vector<int>dp1(n,0),dp2(n,0);
        int sum=0;
        for(int i=0;i<n;i++){
            if(i<x){//when we haven't considered x-size array
                sum+=nums[i]; 
                dp1[i]=sum;
            }
            else{ //when we have a window of size x
                sum=sum+nums[i]-nums[i-x];
                dp1[i]=max(dp1[i-1],sum);
            }
        }
        sum=0;
        //check from right to left for Secondlen window and store maximum sum from ith index to last index keep updating at every point if the current window of size secondLen is max or dp2[i+1] has max whichever is max add that to dp[i]
        
        for(int i=n-1;i>=0;i--){
            if(i+y>n-1) { //case when we haven't encountered a window of size secondlen ie. y
                sum+=nums[i];
                dp2[i]=sum;
            }
            else{//when we have a window of size secondLen
                sum=sum+nums[i]-nums[i+y];
                dp2[i]=max(dp2[i+1],sum);
            }
        }
        int ans=0;
        //our ans window will be from x-1 to n-y
        for(int i=x-1;i<n-y;i++){
            ans=max(ans,dp1[i]+dp2[i+1]);
        }
        return ans;
    }
    int maxSumTwoNoOverlap(vector<int>& nums, int firstLen, int secondLen){
        return max(helper(nums, firstLen, secondLen),helper(nums, secondLen, firstLen));
    }
};
```
**comment if have doubts and do upvote**