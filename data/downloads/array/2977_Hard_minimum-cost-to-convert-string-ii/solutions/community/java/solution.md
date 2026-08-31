# Java/C++/Python/JS - Explained in Detail - Dynamic Programming

**Author:** millenium103
**Votes:** 64
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449800/](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449800/)

---

![Screenshot 2023-12-24 101059.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

To solve this problem, we need to find the minimum cost to convert the string `source` to the string `target` using a series of operations. The operations involve replacing substrings in `source` with corresponding substrings in `target`, and each operation has an associated cost. However, there are constraints on the selection of substrings: either the substrings are disjoint, or they are identical. This constraint adds complexity to the problem.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an index mapping (`index`) for each unique substring in `original` and `changed`. This mapping is used to represent the substrings as integers, making it easier to work with.
2. Build a distance matrix (`dis`) to represent the costs of converting one substring to another. Initialize it with maximum values and update it based on the given costs.
3. Use Floyd-Warshall algorithm to calculate the shortest distances between all pairs of substrings in `dis`.
4. Initialize a set (`set`) to store the lengths of unique substrings in `original`.
5. Initialize an array `dp` to store the minimum cost to convert a prefix of `target` to a prefix of `source`. Initialize `dp[0]` as 0.
6. Iterate through each character in `target` and update `dp` based on the possible operations and their costs.
7. The final answer is stored in `dp[target.length()]`. If it is not possible to convert `source` to `target`, return -1.


# Complexity

- Let `n` be the length of the strings, and `m` be the maximum length of a substring in `original` and `changed`.
- Building the `index` mapping takes O(len(original) + len(changed)) time.
- Constructing the `dis` matrix using the Floyd-Warshall algorithm takes O(m^3) time.
- Constructing the `set` takes O(len(original)) time.
- Iterating through the characters of `target` and updating `dp` takes O(n * m) time.
- Thus, the overall time complexity is O(m^3 + n * m).
- The space complexity is O(m^2) for the `dis` matrix, O(len(original)) for the `set`, and O(n) for the `dp` array.

# Code
```java []
class Solution {
    public long minimumCost(String source, String target, String[] original, String[] changed, int[] cost) {
        HashMap<String, Integer> index = new HashMap<>();
        for (String o : original) {
            if (!index.containsKey(o)) {
                index.put(o, index.size());
            }
        }
        for (String c : changed) {
            if (!index.containsKey(c)) {
                index.put(c, index.size());
            }
        }
        long[][] dis = new long[index.size()][index.size()];
        for (int i = 0; i < dis.length; i++) {
            Arrays.fill(dis[i], Long.MAX_VALUE);
            dis[i][i] = 0;
        }
        for (int i = 0; i < cost.length; i++) {
            dis[index.get(original[i])][index.get(changed[i])] = Math.min(dis[index.get(original[i])][index.get(changed[i])], (long)cost[i]);
        }
        for (int k = 0; k < dis.length; k++) {
            for (int i = 0; i < dis.length; i++)
                if (dis[i][k] < Long.MAX_VALUE) {
                    for (int j = 0; j < dis.length; j++) {
                        if (dis[k][j] < Long.MAX_VALUE) {
                            dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j]);
                        }
                    }
                }
        }
        HashSet<Integer> set = new HashSet<>();
        for (String o : original) {
            set.add(o.length());
        }
        long[] dp = new long[target.length() + 1];
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[0] = 0L;
        for (int i = 0; i < target.length(); i++) {
            if (dp[i] == Long.MAX_VALUE) {
                continue;
            }
            if (target.charAt(i) == source.charAt(i)) {
                dp[i + 1] = Math.min(dp[i + 1], dp[i]);
            }
            for (int t : set) {
                if (i + t >= dp.length) {
                    continue;
                }
                int c1 = index.getOrDefault(source.substring(i, i + t), -1);
                int c2 = index.getOrDefault(target.substring(i, i + t), -1);
                if (c1 >= 0 && c2 >= 0 && dis[c1][c2] < Long.MAX_VALUE) {
                    dp[i + t] = Math.min(dp[i + t], dp[i] + dis[c1][c2]);
                }
            }
        }
        return dp[dp.length - 1] == Long.MAX_VALUE ? -1L : dp[dp.length - 1];
    }
}
```
```C++ []
class Solution {
public:
    long long minimumCost(string source, string target, vector<string>& original, vector<string>& changed, vector<int>& cost) {
      unordered_map<string, int> index;
        for (const string& o : original) {
            if (!index.count(o)) {
                index[o] = index.size();
            }
        }
        for (const string& c : changed) {
            if (!index.count(c)) {
                index[c] = index.size();
            }
        }

        int n = index.size();
        vector<vector<long>> dis(n, vector<long>(n, LONG_MAX));

        for (int i = 0; i < cost.size(); ++i) {
            dis[index[original[i]]][index[changed[i]]] = min(dis[index[original[i]]][index[changed[i]]], (long)cost[i]);
        }

        for (int k = 0; k < n; ++k) {
            for (int i = 0; i < n; ++i) {
                if (dis[i][k] < LONG_MAX) {
                    for (int j = 0; j < n; ++j) {
                        if (dis[k][j] < LONG_MAX) {
                            dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);
                        }
                    }
                }
            }
        }

        unordered_set<int> substrLengths;
        for (const string& o : original) {
            substrLengths.insert(o.length());
        }

        vector<long> dp(target.length() + 1, LONG_MAX);
        dp[0] = 0;

        for (int i = 0; i < target.length(); ++i) {
            if (dp[i] == LONG_MAX) {
                continue;
            }

            if (target[i] == source[i]) {
                dp[i + 1] = min(dp[i + 1], dp[i]);
            }

            for (int t : substrLengths) {
                if (i + t >= dp.size()) {
                    continue;
                }

                string subSource = source.substr(i, t);
                string subTarget = target.substr(i, t);

                int c1 = index.count(subSource) ? index[subSource] : -1;
                int c2 = index.count(subTarget) ? index[subTarget] : -1;

                if (c1 >= 0 && c2 >= 0 && dis[c1][c2] < LONG_MAX) {
                    dp[i + t] = min(dp[i + t], dp[i] + dis[c1][c2]);
                }
            }
        }

        return dp[dp.size() - 1] == LONG_MAX ? -1L : dp[dp.size() - 1];
    }
};
```
```Python []
class Solution(object):
    def minimumCost(self, source, target, original, changed, cost):
        index = {}
        for o in original:
            if o not in index:
                index[o] = len(index)
        for c in changed:
            if c not in index:
                index[c] = len(index)

        n = len(index)
        dis = [[float('inf')] * n for _ in range(n)]

        for i in range(len(cost)):
            dis[index[original[i]]][index[changed[i]]] = min(dis[index[original[i]]][index[changed[i]]], cost[i])

        for k in range(n):
            for i in range(n):
                if dis[i][k] < float('inf'):
                    for j in range(n):
                        if dis[k][j] < float('inf'):
                            dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j])

        substr_lengths = set(len(o) for o in original)

        dp = [float('inf')] * (len(target) + 1)
        dp[0] = 0

        for i in range(len(target)):
            if dp[i] == float('inf'):
                continue

            if target[i] == source[i]:
                dp[i + 1] = min(dp[i + 1], dp[i])

            for t in substr_lengths:
                if i + t >= len(dp):
                    continue

                sub_source = source[i:i + t]
                sub_target = target[i:i + t]

                c1 = index[sub_source] if sub_source in index else -1
                c2 = index[sub_target] if sub_target in index else -1

                if c1 >= 0 and c2 >= 0 and dis[c1][c2] < float('inf'):
                    dp[i + t] = min(dp[i + t], dp[i] + dis[c1][c2])

        return dp[-1] if dp[-1] != float('inf') else -1
        
```
```JavaScript []
/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const index = {};
        original.forEach(o => {
            if (!(o in index)) {
                index[o] = Object.keys(index).length;
            }
        });
        changed.forEach(c => {
            if (!(c in index)) {
                index[c] = Object.keys(index).length;
            }
        });

        const n = Object.keys(index).length;
        const dis = new Array(n).fill(null).map(() => new Array(n).fill(Number.POSITIVE_INFINITY));

        for (let i = 0; i < cost.length; ++i) {
            dis[index[original[i]]][index[changed[i]]] = Math.min(dis[index[original[i]]][index[changed[i]]], cost[i]);
        }

        for (let k = 0; k < n; ++k) {
            for (let i = 0; i < n; ++i) {
                if (dis[i][k] < Number.POSITIVE_INFINITY) {
                    for (let j = 0; j < n; ++j) {
                        if (dis[k][j] < Number.POSITIVE_INFINITY) {
                            dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j]);
                        }
                    }
                }
            }
        }

        const substrLengths = new Set(original.map(o => o.length));

        const dp = new Array(target.length + 1).fill(Number.POSITIVE_INFINITY);
        dp[0] = 0;

        for (let i = 0; i < target.length; ++i) {
            if (dp[i] === Number.POSITIVE_INFINITY) {
                continue;
            }

            if (target[i] === source[i]) {
                dp[i + 1] = Math.min(dp[i + 1], dp[i]);
            }

            for (const t of substrLengths) {
                if (i + t >= dp.length) {
                    continue;
                }

                const subSource = source.substring(i, i + t);
                const subTarget = target.substring(i, i + t);

                const c1 = (subSource in index) ? index[subSource] : -1;
                const c2 = (subTarget in index) ? index[subTarget] : -1;

                if (c1 >= 0 && c2 >= 0 && dis[c1][c2] < Number.POSITIVE_INFINITY) {
                    dp[i + t] = Math.min(dp[i + t], dp[i] + dis[c1][c2]);
                }
            }
        }

        return dp[dp.length - 1] !== Number.POSITIVE_INFINITY ? dp[dp.length - 1] : -1;
};
```
![upvote.png](./images/1.png)
