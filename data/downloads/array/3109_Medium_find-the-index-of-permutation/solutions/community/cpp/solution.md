# C++ | Order Set O(N^2) | Fenwick Tree O(NlogN)

**Author:** winterfrost1143
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-index-of-permutation/solutions/5013101/](https://leetcode.com/problems/find-the-index-of-permutation/solutions/5013101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find the order of the current element between the remaining elements

# Approach 1 - Order Set (TLE)
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2), since std::distance cost linear time
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int getPermutationIndex(vector<int>& perm) {
        int MOD = 1e9 + 7;
        int n = perm.size();

        long long ans = 0;
        vector<int> multiplier(n, 1);
        set<int> Set(perm.begin(), perm.end());

        for (int i = 0; i < n; ++i) {
            multiplier[i] = distance(Set.begin(), Set.find(perm[i]));
            Set.erase(perm[i]);
        }

        long long base = 1;
        for (int i = n - 1; i >= 0; --i) {
            ans += multiplier[i] * base;
            ans %= MOD;

            base *= n - i;
            base %= MOD;
        }

        return ans;
    }
};
```
# Approach 2 - Fenwick Tree
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Fenwick {
    vector<int> tree;

public:
    Fenwick(int n) : tree(n) {}

    void update(int i, int v) {
        for (; i < tree.size(); i += (i & -i)) {
            tree[i] += v;
        }
    }

    int query(int i) {
        int res = 0;
        for (; i > 0; i -= (i & -i)) {
            res += tree[i];
        }
        return res;
    }
};

class Solution {
public:
    int getPermutationIndex(vector<int>& perm) {
        int MOD = 1e9 + 7;
        int n = perm.size();

        long long ans = 0;
        vector<int> multiplier(n, 0);

        Fenwick fenwick(n + 1);
        for (int i = 1; i <= n; ++i) {
            fenwick.update(i, 1);
        }

        for (int i = 0; i < n; ++i) {
            multiplier[i] = fenwick.query(perm[i]) - 1;
            fenwick.update(perm[i], -1);
        }

        long long base = 1;
        for (int i = n - 1; i >= 0; --i) {
            ans += multiplier[i] * base;
            ans %= MOD;

            base *= n - i;
            base %= MOD;
        }

        return ans;
    }
};
```