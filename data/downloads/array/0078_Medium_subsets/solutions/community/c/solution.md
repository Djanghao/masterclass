# [C++] 3 approaches: Recursive, Iterative, Bit Manipulation Solutions

**Author:** dimpleryp
**Votes:** 166
**Link:** [https://leetcode.com/problems/subsets/solutions/731215/](https://leetcode.com/problems/subsets/solutions/731215/)

---

```
// Recursive Solution
// Time complexity : O(N*(2^N))
// Space complexity : O(N*(2^N))
class Solution {
public:
    vector<vector<int>> ans;
    
    void sub(vector<int> &nums, int i, vector<int> temp)
    {
        if(i==nums.size())
        {
            ans.push_back(temp);
            return;
        }
        
        sub(nums, i+1, temp);
        temp.push_back(nums[i]);
        sub(nums, i+1, temp);
    }
    
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<int> temp;       
        sub(nums, 0, temp); // or sub(nums, 0, vector<int> {});
        return ans;
    }
};
```
```
// Iterative Solution
// Time complexity : O(N*(2^N))
// Space complexity : O(N*(2^N))
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        int n = nums.size();
        
        ans.push_back({});
        
        for(int i=0; i<n; i++)
        {
            int sz = ans.size();
            for(int j=0; j<sz; j++)
            {
                vector<int> temp = ans[j];
                temp.push_back(nums[i]);
                ans.push_back(temp);
            }
        }
        
        return ans;
    }
};
```
```
// Bit Manipulation
// Time complexity : O(N*(2^N))
// Space complexity : O(N*(2^N))
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        int n = nums.size();
        int num = pow(2, n), i = 0;
        
        while(i<num)
        {
            vector<int> temp;
            for(int j=0; j<n; j++)
            {
                if(i & 1<<j)
                    temp.push_back(nums[j]);
            }
            ans.push_back(temp);
            i++;
        }
        
        return ans;
    }
};
```