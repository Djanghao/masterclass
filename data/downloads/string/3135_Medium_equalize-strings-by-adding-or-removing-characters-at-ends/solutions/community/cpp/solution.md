# MOST OPTIMIZE SOLUTION C++ || BEGINNER FRIENDLY

**Author:** tin_le
**Votes:** 1
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5176190/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5176190/)

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
![image.png](./images/0.png)

# Code
```
class Solution {
public:
    int minOperations(string initial, string target) {
        // SOLUTION OF TIN LE
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        int n = target.size();
        int m = initial.size();
        vector<vector<int>> list(26);
        for(int i = 0; i < m; i++) list[initial[i] - 'a'].push_back(i);
        int res = 0;
        for(int i = 0; i < n; i++)
        {
            for(auto& index : list[target[i] - 'a'])
            {
                int count = 0;
                for(int j = index, k = i; j < m && k < n; j++, k++)
                {
                    if(initial[j] != target[k]) break;
                    count++;
                }
                res = max(res, count);
            }
        }
        return m + n - 2 * res;
    }
};
```