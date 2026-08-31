# Map Easy Solution

**Author:** shivamg4149
**Votes:** 21
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112012/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112012/)

---

```
class Solution {
public:
    vector<int> arrayChange(vector<int>& nums, vector<vector<int>>& operations) {
        unordered_map<int,int> mp;
        for(int i=0;i<nums.size();i++)
            mp[nums[i]]=i;
        for(int i=0;i<operations.size();i++){
            int pos=mp[operations[i][0]];
            nums[pos]=operations[i][1];
            mp[operations[i][1]]=pos;
        }
        return nums;
    }
};
```