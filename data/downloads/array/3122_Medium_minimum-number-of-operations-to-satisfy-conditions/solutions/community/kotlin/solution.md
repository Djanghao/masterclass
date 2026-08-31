# 🎨  The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5108929/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5108929/)

---

# Game Plan

[\uD83C\uDFA8  The ART of Dynamic Programming:](https://leetcode.com/discuss/general-discussion/712010/The-ART-of-Dynamic-Programming-An-Intuitive-Approach%3A-from-Apprentice-to-Master)

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
2. **R**emember each subproblem's optimal solution via a DP memo
3. **T**urn the top-down solution upside-down to create the bottom-up solution

Consider all possible candidate `cand` values `0..9` inclusive per `j`<sup>th</sup> column of the input matrix `A`.  Use a counter `cnt` for each `j`<sup>th</sup> column's value frequencies to derive the `cost` of changing all values of each `j`<sup>th</sup> column to the candidate `cand` value, ie. `cost = M - cnt[j][cand]` given `M` rows of the input matrix `A`.

We recursively `go()` explore all `j`<sup>th</sup> column possibilities, keeping track of the `last` candidate `cand` to ensure adjacent column values differ per the problem statement.

# Code

**Kotlin Solutions:**

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution {
    fun minimumOperations(A: Array<IntArray>): Int {
        var (M, N) = Pair(A.size, A[0].size)
        var cnt = Array(N){ mutableMapOf<Int, Int>() }
        for (j in 0..N-1)
            for (i in 0..M-1)
                cnt[j][A[i][j]] = 1 + (cnt[j][A[i][j]] ?: 0)
        fun go(j: Int = 0, last: Int = 10): Int {
            if (j == N)
                return 0
            var best = 1234567890
            for (cand in 0..9) {
                if (cand == last)
                    continue
                var cost = M - (cnt[j][cand] ?: 0)
                best = Math.min(best, cost + go(j + 1, cand))
            }
            return best
        }
        return go()
    }
}
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution {
    fun minimumOperations(A: Array<IntArray>): Int {
        var (M, N) = Pair(A.size, A[0].size)
        var cnt = Array(N){ mutableMapOf<Int, Int>() }
        for (j in 0..N-1)
            for (i in 0..M-1)
                cnt[j][A[i][j]] = 1 + (cnt[j][A[i][j]] ?: 0)
        var m = mutableMapOf<String, Int>()
        fun go(j: Int = 0, last: Int = 10): Int {
            if (j == N)
                return 0
            var k = "$j,$last"
            if (!m.contains(k)) {
                var best = 1234567890
                for (cand in 0..9) {
                    if (cand == last)
                        continue
                    var cost = M - (cnt[j][cand] ?: 0)
                    best = Math.min(best, cost + go(j + 1, cand))
                }
                m[k] = best
            }
            return m[k]!!
        }
        return go()
    }
}
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution {
    fun minimumOperations(A: Array<IntArray>): Int {
        var (M, N) = Pair(A.size, A[0].size)
        var cnt = Array(N){ mutableMapOf<Int, Int>() }
        for (j in 0..N-1)
            for (i in 0..M-1)
                cnt[j][A[i][j]] = 1 + (cnt[j][A[i][j]] ?: 0)
        var dp = Array(N + 1){ Array(10 + 1){ 1234567890 } }  // explicit states
        for (last in 0..10)  // explicit base cases
            dp[N][last] = 0
        for (j in N - 1 downTo 0) {
            for (last in 0..10) {
                for (cand in 0..9) {
                    if (cand == last)
                        continue
                    var cost = M - (cnt[j][last] ?: 0)
                    dp[j][cand] = Math.min(dp[j][cand], cost + dp[j + 1][last])
                }
            }
        }
        return dp[0].min()
    }
}
```

4. Memory Optimization, ie. the `cur` current `j`<sup>th</sup> column is dependent upon the `pre` previous `j + 1`<sup>th</sup> column
```
class Solution {
    fun minimumOperations(A: Array<IntArray>): Int {
        var (M, N) = Pair(A.size, A[0].size)
        var cnt = Array(N){ mutableMapOf<Int, Int>() }
        for (j in 0..N-1)
            for (i in 0..M-1)
                cnt[j][A[i][j]] = 1 + (cnt[j][A[i][j]] ?: 0)
        var pre = Array(10 + 1){ 0 }  // explicit states + base cases
        for (j in N - 1 downTo 0) {
            var cur = Array(10 + 1){ 1234567890 }
            for (last in 0..10) {
                for (cand in 0..9) {
                    if (cand == last)
                        continue
                    var cost = M - (cnt[j][last] ?: 0)
                    cur[cand] = Math.min(cur[cand], cost + pre[last])
                }
            }
            pre = cur
        }
        return pre.min()
    }
}
```

---

**Javascript Solutions:**

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
let minimumOperations = A => {
    let [M, N] = [A.length, A[0].length];
    let cnt = [...Array(N)].map(_ => new Map());
    for (let j = 0; j < N; ++j)
        for (let i = 0; i < M; ++i)
            cnt[j].set(A[i][j], 1 + (cnt[j].get(A[i][j]) || 0));
    let go = (j = 0, last = 10) => {
        if (j == N)
            return 0;
        let best = 1234567890;
        for (let cand = 0; cand < 10; ++cand) {
            if (cand == last)
                continue;
            let cost = M - (cnt[j].get(cand) || 0);
            best = Math.min(best, cost + go(j + 1, cand));
        }
        return best;
    };
    return go();
};
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
let minimumOperations = (A, m = new Map()) => {
    let [M, N] = [A.length, A[0].length];
    let cnt = [...Array(N)].map(_ => new Map());
    for (let j = 0; j < N; ++j)
        for (let i = 0; i < M; ++i)
            cnt[j].set(A[i][j], 1 + (cnt[j].get(A[i][j]) || 0));
    let go = (j = 0, last = 10) => {
        if (j == N)
            return 0;
        let k = `${j},${last}`;
        if (m.has(k))
            return m.get(k);
        let best = 1234567890;
        for (let cand = 0; cand < 10; ++cand) {
            if (cand == last)
                continue;
            let cost = M - (cnt[j].get(cand) || 0);
            best = Math.min(best, cost + go(j + 1, cand));
        }
        return m.set(k, best)
                .get(k);
    };
    return go();
};
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
let minimumOperations = (A, m = new Map()) => {
    let [M, N] = [A.length, A[0].length];
    let cnt = [...Array(N)].map(_ => new Map());
    for (let j = 0; j < N; ++j)
        for (let i = 0; i < M; ++i)
            cnt[j].set(A[i][j], 1 + (cnt[j].get(A[i][j]) || 0));
    let dp = [...Array(N + 1)].map(_ => Array(10 + 1).fill(1234567890));  // explicit states
    for (let last = 0; last <= 10; ++last)                                // explicit base cases
        dp[N][last] = 0;
    for (let j = N - 1; 0 <= j; --j) {
        for (let last = 0; last <= 10; ++last) {
            for (let cand = 0; cand < 10; ++cand) {
                if (cand == last)
                    continue;
                let cost = M - (cnt[j].get(cand) || 0);
                dp[j][cand] = Math.min(dp[j][cand], cost + dp[j + 1][last]);
            }
        }
    }
    return Math.min(...dp[0]);
};
```

4. Memory Optimization, ie. the `cur` current `j`<sup>th</sup> column is dependent upon the `pre` previous `j + 1`<sup>th</sup> column
```
let minimumOperations = (A, m = new Map()) => {
    let [M, N] = [A.length, A[0].length];
    let cnt = [...Array(N)].map(_ => new Map());
    for (let j = 0; j < N; ++j)
        for (let i = 0; i < M; ++i)
            cnt[j].set(A[i][j], 1 + (cnt[j].get(A[i][j]) || 0));
    let pre = Array(10 + 1).fill(0);  // explicit states + base cases
    for (let j = N - 1; 0 <= j; --j) {
        let cur = Array(10 + 1).fill(1234567890);
        for (let last = 0; last <= 10; ++last) {
            for (let cand = 0; cand < 10; ++cand) {
                if (cand == last)
                    continue;
                let cost = M - (cnt[j].get(cand) || 0);
                cur[cand] = Math.min(cur[cand], cost + pre[last]);
            }
        }
        pre = cur;
    }
    return Math.min(...pre);
};
```

---

**Python3 Solutions:**

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution:
    def minimumOperations(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        cnt = [Counter() for j in range(N)]
        for j in range(N):
            for i in range(M):
                cnt[j][A[i][j]] += 1
        def go(j = 0, last = 10):
            if j == N:
                return 0
            best = 1234567890
            for cand in range(10):
                if cand != last:
                    cost = M - cnt[j][cand]
                    best = min(best, cost + go(j + 1, cand))
            return best
        return go()
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution:
    def minimumOperations(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        cnt = [Counter() for j in range(N)]
        for j in range(N):
            for i in range(M):
                cnt[j][A[i][j]] += 1
        @cache
        def go(j = 0, last = 10):
            if j == N:
                return 0
            best = 1234567890
            for cand in range(10):
                if cand != last:
                    cost = M - cnt[j][cand]
                    best = min(best, cost + go(j + 1, cand))
            return best
        return go()
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution:
    def minimumOperations(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        col = [Counter() for j in range(N)]
        for j in range(N):
            for i in range(M):
                cnt[j][A[i][j]] += 1
        dp = [[1234567890] * (10 + 1) for _ in range(N + 1)]  # explicit states
        for cand in range(10 + 1): dp[N][cand] = 0            # explicit base cases
        for j in reversed(range(N)):
            for last in range(10 + 1):
                for cand in range(10):
                    if cand != last:
                        cost = M - cnt[j][cand]
                        dp[j][cand] = min(dp[j][cand], cost + dp[j + 1][last])
        return min(dp[0])
```

4. Memory Optimization, ie. the `cur` current `j`<sup>th</sup> column is dependent upon the `pre` previous `j + 1`<sup>th</sup> column
```
class Solution:
    def minimumOperations(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
        M, N = len(A), len(A[0])
        cnt = [Counter() for j in range(N)]
        for j in range(N):
            for i in range(M):
                cnt[j][A[i][j]] += 1
        pre = [0] * (10 + 1)  # explicit states + base cases
        for j in reversed(range(N)):
            cur = [INF] * (10 + 1)
            for last in range(10 + 1):
                for cand in range(10):
                    if cand != last:
                        cost = M - cnt[j][cand]
                        cur[cand] = min(cur[cand], cost + pre[last])
            pre = cur
        return min(pre)
```

**Rust Solutions:**

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
use std::cmp::min;
impl Solution {
    pub fn minimum_operations(A: Vec<Vec<i32>>) -> i32 {
        let (M, N) = (A.len(), A[0].len());
        let mut cnt = vec![vec![0; 10]; N];
        for j in 0..N { for i in 0..M { cnt[j][A[i][j] as usize] += 1; } }
        let mut dp = vec![vec![1234567890; 10 + 1]; N + 1];  // explicit states
        for last in 0..=10 { dp[N][last] = 0; }              // explicit base cases
        for j in (0..N).rev() {
            for last in 0..=10 {
                for cand in 0..10 {
                    if cand == last {
                        continue;
                    }
                    let cost = M as i32 - cnt[j][cand];
                    dp[j][cand] = min(dp[j][cand], cost + dp[j + 1][last]);
                }
            }
        }
        *dp[0].iter().min().unwrap()
    }
}
```

4. Memory Optimization, ie. the `cur` current `j`<sup>th</sup> column is dependent upon the `pre` previous `j + 1`<sup>th</sup> column
```
use std::cmp::min;
impl Solution {
    pub fn minimum_operations(A: Vec<Vec<i32>>) -> i32 {
        let (M, N) = (A.len(), A[0].len());
        let mut cnt = vec![vec![0; 10]; N];
        for j in 0..N { for i in 0..M { cnt[j][A[i][j] as usize] += 1; } }
        let mut pre = vec![0; 10 + 1];  // explicit states + base cases
        for j in (0..N).rev() {
            let mut cur = vec![1234567890; 10 + 1];
            for last in 0..=10 {
                for cand in 0..10 {
                    if cand == last {
                        continue;
                    }
                    let cost = M as i32 - cnt[j][cand];
                    cur[cand] = min(cur[cand], cost + pre[last]);
                }
            }
            pre = cur;
        }
        *pre.iter().min().unwrap()
    }
}
```

---

**C++ Solutions:**

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Cnt = unordered_map<int, unordered_map<int, int>>;
    using fun = function<int(int, int)>;
    int minimumOperations(VVI& A, Cnt cnt = {}) {
        int M = A.size(),
            N = A[0].size();
        for (auto j{ 0 }; j < N; ++j)
            for (auto i{ 0 }; i < M; ++i)
                ++cnt[j][A[i][j]];
        fun go = [&](auto j, auto last) {
            if (j == N)
                return 0;
            auto best = 1234567890;
            for (auto cand{ 0 }; cand < 10; ++cand) {
                if (cand == last)
                    continue;
                auto cost = M - cnt[j][cand];
                best = min(best, cost + go(j + 1, cand));
            }
            return best;
        };
        return go(0, 10);
    }
};
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Cnt = unordered_map<int, unordered_map<int, int>>;
    using fun = function<int(int, int)>;
    using Memo = unordered_map<string, int>;
    int minimumOperations(VVI& A, Cnt cnt = {}, Memo m = {}) {
        int M = A.size(),
            N = A[0].size();
        for (auto j{ 0 }; j < N; ++j)
            for (auto i{ 0 }; i < M; ++i)
                ++cnt[j][A[i][j]];
        auto key = [](auto j, auto last) { stringstream ss; ss << j << "," << last; return ss.str(); };
        fun go = [&](auto j, auto last) {
            if (j == N)
                return 0;
            auto k = key(j, last);
            if (m.find(k) != m.end())
                return m[k];
            auto best = 1234567890;
            for (auto cand{ 0 }; cand < 10; ++cand) {
                if (cand == last)
                    continue;
                auto cost = M - cnt[j][cand];
                best = min(best, cost + go(j + 1, cand));
            }
            return m[k] = best;
        };
        return go(0, 10);
    }
};
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Cnt = unordered_map<int, unordered_map<int, int>>;
    int minimumOperations(VVI& A, Cnt cnt = {}) {
        int M = A.size(),
            N = A[0].size();
        for (auto j{ 0 }; j < N; ++j)
            for (auto i{ 0 }; i < M; ++i)
                ++cnt[j][A[i][j]];
        VVI dp(N + 1, VI(10 + 1, 1234567890));    // explicit states
        for (auto last{ 0 }; last <= 10; ++last)  // explicit base cases
            dp[N][last] = 0;
        for (auto j{ N - 1 }; 0 <= j; --j) {
            for (auto last{ 0 }; last <= 10; ++last) {
                for (auto cand{ 0 }; cand < 10; ++cand) {
                    if (cand == last)
                        continue;
                    auto cost = M - cnt[j][cand];
                    dp[j][cand] = min(dp[j][cand], cost + dp[j + 1][last]);
                }
            }        
        }
        return *min_element(dp[0].begin(), dp[0].end());
    }
};
```

4. Memory Optimization, ie. the `cur` current `j`<sup>th</sup> column is dependent upon the `pre` previous `j + 1`<sup>th</sup> column
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Cnt = unordered_map<int, unordered_map<int, int>>;
    int minimumOperations(VVI& A, Cnt cnt = {}) {
        int M = A.size(),
            N = A[0].size();
        for (auto j{ 0 }; j < N; ++j)
            for (auto i{ 0 }; i < M; ++i)
                ++cnt[j][A[i][j]];
        VI pre(10 + 1, 0);  // explicit states + base cases
        for (auto j{ N - 1 }; 0 <= j; --j) {
            VI cur(10 + 1, 1234567890);
            for (auto last{ 0 }; last <= 10; ++last) {
                for (auto cand{ 0 }; cand < 10; ++cand) {
                    if (cand == last)
                        continue;
                    auto cost = M - cnt[j][cand];
                    cur[cand] = min(cur[cand], cost + pre[last]);
                }
            }
            pre = cur;
        }
        return *min_element(pre.begin(), pre.end());
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83D\uDC7B

*Python3*
```
# 7:43pm - implementation begins
# 7:51pm - implementation ends => AC in ~8 minutes, yay! :)

# DFS + Memo?

# ie. try 0..9 for each j-th column

# use a map to count the values per column for O(1) "costs" per column

# class Solution:
#     def minimumOperations(self, A: List[List[int]]) -> int:
#         M, N = len(A), len(A[0])
#         col = [Counter() for j in range(N)]
#         for j in range(N):
#             for i in range(M):
#                 col[j][A[i][j]] += 1
#         @cache
#         def go(j = 0, last = -123):
#             if j == N:
#                 return 0
#             best = int(1e9 + 7)
#             for cand in range(10):
#                 if cand != last:
#                     cost = M - col[j][cand]
#                     best = min(best, cost + go(j + 1, cand))
#             return best
#         return go()

# let's do bottom-up
# 7:52pm - implementation begins
# 8:02pm - implementation ends -> AC in ~10 minutes, yay!

# class Solution:
#     def minimumOperations(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
#         M, N = len(A), len(A[0])
#         col = [Counter() for j in range(N)]
#         for j in range(N):
#             for i in range(M):
#                 col[j][A[i][j]] += 1
#         dp = [[INF] * (10 + 1) for _ in range(N + 1)]  # explicit states
#         for cand in range(10 + 1):  # explicit base cases
#             dp[N][cand] = 0
#         for j in reversed(range(N)):
#             for last in range(10 + 1):
#                 for cand in range(10):
#                     if cand != last:
#                         cost = M - col[j][cand]
#                         dp[j][cand] = min(dp[j][cand], cost + dp[j + 1][last])
#         return min(dp[0])

# memory optimization

# j column depends only on j+1 th column

# 8:03pm - 

class Solution:
    def minimumOperations(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
        M, N = len(A), len(A[0])
        col = [Counter() for j in range(N)]
        for j in range(N):
            for i in range(M):
                col[j][A[i][j]] += 1
        pre = [0] * (10 + 1)  # explicit states + base cases
        for j in reversed(range(N)):
            cur = [INF] * (10 + 1)
            for last in range(10 + 1):
                for cand in range(10):
                    if cand != last:
                        cost = M - col[j][cand]
                        cur[cand] = min(cur[cand], cost + pre[last])
            pre = cur
        return min(pre)

```