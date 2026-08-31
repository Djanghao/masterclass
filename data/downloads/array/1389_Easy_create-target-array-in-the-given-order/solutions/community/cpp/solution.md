# C++ | Very fast solution | two lines solution

**Author:** amankrsnh
**Votes:** 39
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/853304/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/853304/)

---

```
class Solution {
public:
    vector<int> createTargetArray(vector<int>& nums, vector<int>& index) 
    {
        vector<int> result;
        for(int i=0;i<index.size();++i)
            result.insert(result.begin()+index[i],nums[i]);
        return result;
    }
};
```