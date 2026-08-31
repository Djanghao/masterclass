# RABIN_KARP SIMPLE AND CONCISE

**Author:** tin_le
**Votes:** 0
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/5342693/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/5342693/)

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
    bool differByOne(vector<string>& dict) {
        using ll = long long;
        int mod = 1e9 + 7;
        int n = dict[0].size();
        vector<int> power(n);
        for(int i = 0, pow = 1; i < n; i++)
        {
            if(i) pow = ((ll)pow * 26) % mod;
            power[i] = pow;
        }
        set<pair<int, int>> vis;
        for(auto& word : dict)
        {
            ll suffHash = 0, prevHash = 0;
            for(int i = 1; i < n; i++) 
            {
                suffHash = (suffHash * 26 + word[i] - 'a' + 1) % mod;
            }
            if(vis.count({prevHash, suffHash})) return true;
            vis.insert({prevHash, suffHash});
            cout << prevHash << " " << suffHash << endl;
            for(int i = 1; i < n; i++)
            {
                prevHash = (prevHash * 26 + word[i - 1] - 'a' + 1) % mod;
                int pow = power[n - i - 1];
                suffHash = ((suffHash - (word[i] - 'a' + 1) * (ll)pow) % mod + mod) % mod;
                cout << prevHash << " " << suffHash << endl;
                if(vis.count({prevHash, suffHash})) return true;
                vis.insert({prevHash, suffHash});
            }
            cout << endl;
        }
        return false;
    }
};
```