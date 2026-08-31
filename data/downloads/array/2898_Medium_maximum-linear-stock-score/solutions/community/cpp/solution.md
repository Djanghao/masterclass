# Esc 41

**Author:** grid47
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/5748708/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/5748708/)

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
```cpp []
class Solution {
public:
    long long maxScore(vector<int>& p) {
        map<long long, long long> mp;
        long long res = 0, n = p.size();
        for(long long i = 0; i < n; i++) {
            if(mp.count(p[i] - i)) {
                mp[p[i] - i] += p[i];
            } else {
                mp[p[i] - i] = p[i];
            }
            res = max(res, mp[p[i] - i]);            
        }
        return res;
    }
};
```