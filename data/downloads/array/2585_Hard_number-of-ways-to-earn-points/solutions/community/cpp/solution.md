# [C++, Java, Python3] Short Top Down DP explained

**Author:** tojuna
**Votes:** 30
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3258089/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3258089/)

---

# Intuition
Since the constraints are small we can explore a DP approach. Start with the `target` and then subtract combinations of question `types` from it. Our function definiton of the recursive function will have 2 variables, (target, i). `target` signifies the remaining `target` and `i` siginifies the ith question type.

# Approach
The base cases for the `dfs` function are:
* If the remaining `target` is 0, then return 1 as one way to reach the target has been found.
* If the index `i` is greater than or equal to the number of `types` of questions or `target` is less than 0, then return 0 as no more ways to reach the `target` can be found.

In the recursive case, the `dfs` function calculates the sum of the number of ways to reach the target by considering different numbers of questions of the current type. It does this by iterating over j from 0 to the maximum number of questions of the current type (types[i][0]) and calling the `dfs` function with the updated `target` value `(target - j * types[i][1])` and the index of the next type of question `(i + 1)`. `types[i][1]` is the `value` of the ith question

The final result is the modulo `10^9 + 7` of the total number of ways to reach the target found by the `dfs` function.

The solution uses memoization to avoid redundant calculations and returns the answer modulo `10^9 + 7` to prevent integer overflow.


# Complexity
- Time complexity: `O(target * len(types) * max(count))`

- Space complexity: `O(target * len(types))`

# Code
**Python3**:
```
def waysToReachTarget(self, target: int, types: List[List[int]]) -> int:
    @cache
    def dfs(i, target):
        if target == 0: return 1
        if i >= len(types) or target < 0: return 0
        return sum(dfs(i + 1, target - j * types[i][1]) for j in range(types[i][0] + 1)) % 1000000007
    return dfs(0, target)
```
*Just for fun*
```
def waysToReachTarget(self, target, T, mod = 1000000007):
    return (lambda dp: dp(dp, 0, target))(lru_cache(maxsize=None)(lambda f, i, t: 1 if t == 0 else 0 if i >= len(T) or t < 0 else sum(f(f, i+1, t-j*T[i][1]) for j in range(T[i][0]+1)) % mod))
```

**C++**:
```
int cache[1001][51] = {};
int waysToReachTarget(int target, vector<vector<int>>& types) {
    memset(cache, -1, sizeof(cache)); // initialize cache with -1
    function<int(int, int)> dfs = [&](int i, int target) {
        if (target == 0) return 1;
        if (i >= types.size() || target < 0) return 0;
        if (cache[target][i] != -1) return cache[target][i];
        int ans = 0;
        for (int j = 0; j <= types[i][0]; j++)
            ans = (ans + dfs(i + 1, target - j * types[i][1])) % 1000000007;
        return cache[target][i] = ans;
    };
    return dfs(0, target);
}
```

**Java**:
```
int[][] cache;
public int waysToReachTarget(int target, int[][] types) {
    cache = new int[target + 1][types.length + 1];
    Arrays.stream(cache).forEach(a -> Arrays.fill(a, -1)); // init cache with -1
    return dfs(0, target, types);
}
private int dfs(int i, int target, int[][] types) {
    if (target == 0) return 1;
    if (i >= types.length || target < 0) return 0;
    if (cache[target][i] != -1) return cache[target][i];
    int ans = 0;
    for (int j = 0; j <= types[i][0]; j++)
        ans = (ans + dfs(i + 1, target - j * types[i][1], types)) % 1000000007;
    cache[target][i] = ans;
    return ans;
}
```