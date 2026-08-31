# BINARY SEARCH || BEGINNER FRIENDLY

**Author:** tin_le
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/5175913/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/5175913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int shortestWay(string source, string target) {
        vector<vector<int>> list(26);
        for(int i = 0; i < source.size(); i++) list[source[i] - 'a'].push_back(i);
        int res = 1;
        int prev = -1;
        for(int i = 0; i < target.size(); i++)
        {
            char ch = target[i] - 'a';
            if(list[ch].empty()) return -1;
            auto it = upper_bound(list[ch].begin(), list[ch].end(), prev);
            if(it == list[ch].end())
            {
                res++;
                prev = list[ch][0];
            }
            else
            {
                prev = *it;
            }
        }
        return res;
    }
};
```