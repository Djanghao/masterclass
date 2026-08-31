# simple and easy C++ solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/5677890/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/5677890/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam

# Complexity
- Time complexity: O(n log m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int sz;
    vector<int>nums;
    Solution(int n, vector<int>& blacklist) 
    {
        n = min(100000, n);
        set<int>st(begin(blacklist), end(blacklist));
        for(int i=0;i<n;i++)
            if(not (st.count(i)))
                nums.push_back(i);
        sz = nums.size();
    }
    
    int pick() 
    {
        int idx = rand() % sz; 
        return nums[idx];
    }
};
```