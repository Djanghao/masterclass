# C++ DFS

**Author:** Tiejun
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5306097/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5306097/)

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
    int findInteger(int k, int d1, int d2) {
        long long wip = 0, ans = INT_MAX;
        function<void()> dfs = [&]() {
            if (wip > ans) return;
            if (wip > k && wip % k == 0) {
                ans = min(ans, wip);
            } else {
                if (wip != 0 || d1 != 0) {
                    wip = wip * 10 + d1;
                    dfs();
                    wip /= 10;
                }
                if (wip != 0 || d2 != 0) {
                    wip = wip * 10 + d2;
                    dfs();
                    wip /= 10;
                }
            }
        }; 
        dfs();
        return ans == INT_MAX ? -1 : ans;
    }
};


```