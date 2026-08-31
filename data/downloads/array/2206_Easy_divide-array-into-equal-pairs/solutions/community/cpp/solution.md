# Using hashmap | cpp | Easy to Understand

**Author:** anubhav082001
**Votes:** 10
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1869444/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1869444/)

---

```
Pls Upvote 

class Solution {
public:
    bool divideArray(vector<int>& nums) {
        
        unordered_map<int,int> hello ;
        
        for (int i=0;i<nums.size();i++)
            hello[nums[i]]++ ;
        
        
        for (auto& c:hello)
            if (c.second%2==1)
                return false ;
        
        return true ;
        
    }
};
```