# C++| Backtracking | Faster than 100% C++ submissions

**Author:** nidhi_ranjan
**Votes:** 61
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/1488442/](https://leetcode.com/problems/subsets-ii/solutions/1488442/)

---

Approach used- Backtracking
```
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> ans;       //to store all susbets
        vector<int> curr;         //to store current individual subset (that we will build)
        sort(nums.begin(),nums.end());      //sort the array so that duplicates are adjacent 
        helper(nums,ans,curr,0);       //we start from index 0
        return ans;
        
    }
    
    void helper(vector<int>& nums, vector<vector<int>>& ans, vector<int>& curr, int idx){
        ans.push_back(curr);       //we include current susbet into final ans
        for(int i=idx;i<nums.size();i++){     //check for all possibilites
            if(i>idx &&  nums[i]==nums[i-1]) continue;      //if duplicate then we continue
            curr.push_back(nums[i]);     //we include nums[i] in current subset
            helper(nums,ans,curr,i+1); 
            curr.pop_back();         //to get subset without nums[i]
        }
    }  
};
```
Hope you found this useful :)
