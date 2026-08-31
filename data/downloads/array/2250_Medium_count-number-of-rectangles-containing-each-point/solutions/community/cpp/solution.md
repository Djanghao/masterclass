# c++ solution using binary search

**Author:** dilipsuthar60
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1977370/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1977370/)

---

```
class Solution {
public:
    int find(vector<int>&nums,int target)
    {
        int l=0;
        int r=nums.size()-1;
        int ans=0;
        while(l<=r)
        {
            int mid=(l+r)/2;
            if(nums[mid]>=target)
            {
                ans=nums.size()-mid;
                r=mid-1;
            }
            else
            {
                l=mid+1;
            }
        }
        return ans;
    }
    vector<int> countRectangles(vector<vector<int>>& rect, vector<vector<int>>& point) 
    {
        vector<int>dp[101];
        for(auto &it:rect)
        {
            dp[it[1]].push_back(it[0]);
        }
        for(int i=0;i<101;i++)
        {
            sort(dp[i].begin(),dp[i].end());
        }
        vector<int>ans;
        for(auto &it:point)
        {
            int sum=0;
            int length=it[0];
            int height=it[1];
            for(int i=height;i<101;i++)
            {
                sum+=find(dp[i],it[0]);
            }
            ans.push_back(sum);
        }
        return ans;
    }
};
```