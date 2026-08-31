# ✅C++ fast solution with 2loops!

**Author:** dhruba-datta
**Votes:** 32
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1532738/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1532738/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistakes please let me know. Thank you!\u2764\uFE0F**
> 

---
## Code:
```
class Solution {
public:
    vector<int> decompressRLElist(vector<int>& nums) {
        vector<int> ans;
        for(int i=0; i<nums.size();i=i+2)
        {           
            int x=nums[i];
            for(int j=0; j<x;j++)
            {
                ans.push_back(nums[i+1]);
            }
        }
        return ans;
    }
};
```
---
***Please upvote if it was helpful for you, thank you!***