# ✔ C++ | Set | Clean and Concise

**Author:** jk20
**Votes:** 103
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996325/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996325/)

---

```
class Solution {
public:

    int countDistinct(vector<int>& nums, int k, int p) {
        
        int n=nums.size();
        set<vector<int>>ans;
        
        int i,j;
        for(i=0;i<n;i++)
        {
            vector<int>tt;
            int ct=0;
            for(j=i;j<n;j++)
            {
                tt.push_back(nums[j]);
                if(nums[j]%p==0)
                    ++ct;
                if(ct>k)
                    break;
                ans.insert(tt);
                    
            }
        }
        return ans.size();
    }
    
};
```


**Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding : )**