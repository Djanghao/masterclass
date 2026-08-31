# C++

**Author:** codemonkeyricky
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2844079/](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2844079/)

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
class Solution
{
    struct Trie 
    {
        struct Trie *bits[2] = {};
    };

    Trie *root = nullptr;

    void insert(long long n)
    {
        if (!root)
            root = new Trie();

        auto trie = root;
        int k = 63; 
        while (k >= 0)
        {
            auto b = !!(n & (1ll << k));
            if (!trie->bits[b])
                trie->bits[b] = new Trie();
            trie = trie->bits[b];
            --k;
        }
    }

    long long getMaxXor(long long n)
    {
        auto trie = root;
        long long k = 63, rv = 0;
        while (trie && k >= 0)
        {
            long long b = !(n & (1ll << k));
            if (trie->bits[b])
                rv |= b << k, trie = trie->bits[b];
            else
                rv |= (long long)!b << k, trie = trie->bits[!b];
            --k;
        }
        return k == -1 ? rv ^ n : 0;
    }

    long long dfs(vector<vector<int>> &al, int k, vector<int> &values, vector<int> &seen, vector<long long> &sum)
    {
        seen[k] = true;
        sum[k] += values[k];
        for (auto &n : al[k])
            if (!seen[n])
                sum[k] += dfs(al, n, values, seen, sum);
        return sum[k];
    }

    long long dfs2(vector<vector<int>> &al, int k, vector<int> &seen, vector<long long> &sum)
    {
        long long rv = getMaxXor(sum[k]);
        seen[k] = true;
        for (auto &n : al[k])
            if (!seen[n])
                rv = max(rv, dfs2(al, n, seen, sum));
        insert(sum[k]);
        return rv;
    }

public:
    long long maxXor(int n, vector<vector<int>> &edges, vector<int> &values)
    {
        vector<vector<int>> al(n);
        for (auto &e : edges)
            al[e[0]].push_back(e[1]), al[e[1]].push_back(e[0]);
        
        vector<int> seen(n);
        vector<long long> sum(n);
        dfs(al, 0, values, seen, sum);

        seen = vector<int>(n);
        return dfs2(al, 0, seen, sum);
    }
};

```