# c++ || Hashing solution

**Author:** tejas1930
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1801808/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1801808/)

---

```
class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
        unordered_map<int,vector<int>> umap;
        int count = 0;
        for(int i = 0; i < nums.size(); i++) 
        {
            if(umap.find(nums[i]) != umap.end()) 
            {
                for(auto x : umap[nums[i]]) 
                    if((i * x) % k == 0)
                        count++;
            }
            
            umap[nums[i]].push_back(i);
        }
        return count;
    }
};
```