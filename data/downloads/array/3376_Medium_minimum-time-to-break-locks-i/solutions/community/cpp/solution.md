# Backtracking with Bitmask

**Author:** Rookie0934
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123229/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123229/)

---

# Intuition
Try all the possible combinations of breaking the lock and then calculate the minimum cost.
Use bitmask to maintain which locks have been broken.

# Complexity
- Time complexity: O(n * 2^n)


# Code
```cpp []
class Solution {
public:
    int ans = 1e9;
    void f(vector<int>& s, int mask, int x, int k, int temp) {
        int n = s.size();
        if(mask == (1<<n)-1) {
            ans = min(ans, temp);
            return;
        }
        int sum = x, add = 0;
        for(int i=0; i<n; i++) {
            if(mask & (1<<i)) continue;
            add = (s[i] + x - 1)/x;
            f(s, mask | (1<<i), x + k, k, temp + add);
        }
    }
    int findMinimumTime(vector<int>& strength, int K) {
        sort(strength.begin(), strength.end());
        f(strength, 0, 1, K, 0);
        return ans;
    }
};
```