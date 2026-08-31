# [C++] Depth-First Search (DFS)

**Author:** amanmehara
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4963826/](https://leetcode.com/problems/most-frequent-prime/solutions/4963826/)

---

```
class Solution {
public:
    int mostFrequentPrime(vector<vector<int>>& mat) {
        map<int, int> freqs;
        for (int i = 0; i < mat.size(); i++) {
            for (int j = 0; j < mat[0].size(); j++) {
                for (int x = -1; x <= 1; x++) {
                    for (int y = -1; y <= 1; y++) {
                        if (x || y) {
                            dfs(mat, i, j, 0, x, y, freqs);
                        }
                    }
                }
            }
        }
        int res = -1;
        int freq = 0;
        for (const auto& [k, v] : freqs) {
            if (k > 10 && v >= freq) {
                res = k;
                freq = v;
            }
        }
        return res;
    }

private:
    void dfs(const vector<vector<int>>& mat, int i, int j, int n, int& x,
             int& y, map<int, int>& freqs) {
        n = n * 10 + mat[i][j];
        if (n > 10 && is_prime(n)) {
            freqs[n]++;
        }
        if (i + x < 0 || j + y < 0 || i + x >= mat.size() || j + y >= mat[0].size()) {
            return;
        }
        dfs(mat, i + x, j + y, n, x, y, freqs);
    }

    bool is_prime(int x) {
        for (int i = 2; i * i <= x; i++) {
            if (x % i == 0)
                return false;
        }
        return x >= 2;
    }
};
```