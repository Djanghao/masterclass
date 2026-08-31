# Easy c++ solution

**Author:** YashikaGupta14
**Votes:** 8
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3869869/](https://leetcode.com/problems/faulty-keyboard/solutions/3869869/)

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
    string finalString(string s) {
        string ans;
        for(char c : s)
        {
            if(c=='i') reverse(ans.begin(),ans.end());
            else ans+=c;
        }
        return ans;

    }
};
```