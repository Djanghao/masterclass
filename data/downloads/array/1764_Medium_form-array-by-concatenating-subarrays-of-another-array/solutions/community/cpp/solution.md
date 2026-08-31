# simple and easy C++ solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5543756/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5543756/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam
# Complexity
- Time complexity: O(N\u22C5M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool canChoose(vector<vector<int>>& groups, vector<int>& nums) 
    {
        auto it = nums.begin();
        for(auto vec:groups)
        {
            it = search(it, nums.end(), vec.begin(), vec.end());
            if(it == nums.end()) return false;
            it += vec.size();
        }
        return true;
    }
};
```