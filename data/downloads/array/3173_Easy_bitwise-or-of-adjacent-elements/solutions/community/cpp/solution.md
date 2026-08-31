# Single vector allocation

**Author:** emneo
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5313005/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5313005/)

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
    vector<int> orArray(vector<int>& nums) {
        std::vector<int> res;
        res.resize(nums.size() - 1);
        for (auto i = 0; i < res.size(); i -=- 1)
            res[i] = nums.at(i) | nums.at(i + 1);
        return res;
    }
};
```