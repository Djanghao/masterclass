# [Java/C++/Python] Easy and Self-Explained

**Author:** lee215
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6159377/](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6159377/)

---


# **Intuition**
At most `10` pairs1 and pairs2.

# **Explanation**
`dp[currency]` means the biggest count of `currency` we can get.

# **Complexity**
Time `O(10n)`
Space `O(n)`
<br>

```Java [Java]
    public double maxAmount(String init, List<List<String>> pairs1, double[] rates1, List<List<String>> pairs2, double[] rates2) {
        Map<String, Double> dp = new HashMap<>();
        dp.put(init, 1.0);
        for (int i = 0; i < 10; ++i) {
            for (int j = 0; j < pairs1.size(); ++j) {
                String a = pairs1.get(j).get(0), b = pairs1.get(j).get(1);
                dp.put(b, Math.max(dp.getOrDefault(b, 0.0), dp.getOrDefault(a, 0.0) * rates1[j]));
                dp.put(a, Math.max(dp.getOrDefault(a, 0.0), dp.getOrDefault(b, 0.0) / rates1[j]));
            }
        }
        for (int i = 0; i < 10; ++i) {
            for (int j = 0; j < pairs2.size(); ++j) {
                String a = pairs2.get(j).get(0), b = pairs2.get(j).get(1);
                dp.put(b, Math.max(dp.getOrDefault(b, 0.0), dp.getOrDefault(a, 0.0) * rates2[j]));
                dp.put(a, Math.max(dp.getOrDefault(a, 0.0), dp.getOrDefault(b, 0.0) / rates2[j]));
            }
        }
        return dp.get(init);
    }
```

```C++ [C++]
    double maxAmount(string init, vector<vector<string>>& pairs1, vector<double>& rates1, vector<vector<string>>& pairs2, vector<double>& rates2) {
        unordered_map<string, double> dp;
        dp[init] = 1.0;
        for (int i = 0; i < 10; ++i) {
            for (int j = 0; j < pairs1.size(); ++j) {
                string a = pairs1[j][0], b = pairs1[j][1];
                dp[b] = max(dp[b], dp[a] * rates1[j]);
                dp[a] = max(dp[a], dp[b] / rates1[j]);
            }
        }
        for (int i = 0; i < 10; ++i) {
            for (int j = 0; j < pairs2.size(); ++j) {
                string a = pairs2[j][0], b = pairs2[j][1];
                dp[b] = max(dp[b], dp[a] * rates2[j]);
                dp[a] = max(dp[a], dp[b] / rates2[j]);
            }
        }
        return dp[init];
    }
```

```py [Python3]
    def maxAmount(self, init: str, pairs1: List[List[str]], rates1: List[float], pairs2: List[List[str]], rates2: List[float]) -> float:
        v = Counter({init: 1.0})
        for _ in range(15):
            for (a,b),r in zip(pairs1, rates1):
                v[b] = max(v[b], v[a] * r)
                v[a] = max(v[a], v[b] / r)
        for _ in range(15):
            for (a,b),r in zip(pairs2, rates2):
                v[b] = max(v[b], v[a] * r)
                v[a] = max(v[a], v[b] / r)
        return v[init]
```
