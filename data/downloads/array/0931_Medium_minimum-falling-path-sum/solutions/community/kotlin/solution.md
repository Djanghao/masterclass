# 🎨 The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/186646/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/186646/)

---

[\uD83C\uDFA8 The ART of Dynamic Programming](https://leetcode.com/discuss/general-discussion/712010/The-ART-of-Dynamic-Programming-An-Intuitive-Approach%3A-from-Apprentice-to-Master)

1. **A**ll possibilities are considered via top-down brute-force depth-first-search
2. **R**emember each subproblem's optimal solution via a DP memo
3. **T**urn the top-down solution upside-down to create the bottom-up solution

There are 3 path sum choices to consider for each cell `i`,`j` denoted as `a`,`b`,`c` to denote above/left, above, above/right correspondingly.

---

**Kotlin Solutions:**
1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution {
    fun minFallingPathSum(A: Array<IntArray>, INF: Int = (1e9 + 7).toInt()): Int {
        var (M, N) = listOf(A.size, A[0].size)
        fun go(i: Int, j: Int): Int {
            if (j < 0 || j == N)
                return INF
            if (i == 0)
                return A[i][j]
            var a = go(i - 1, j - 1)
            var b = go(i - 1, j)
            var c = go(i - 1, j + 1)
            return A[i][j] + listOf(a, b, c).min()!!
        }
        var best = INF
        for (j in 0 until N)
            best = Math.min(best, go(M - 1, j))
        return best
    }
}
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution {
    fun minFallingPathSum(A: Array<IntArray>, INF: Int = (1e9 + 7).toInt()): Int {
        var m = mutableMapOf<String, Int>()
        var (M, N) = listOf(A.size, A[0].size)
        fun go(i: Int, j: Int): Int {
            if (j < 0 || j == N)
                return INF
            if (i == 0)
                return A[i][j]
            var k = "$i,$j"
            if (!m.contains(k)) {
                var a = go(i - 1, j - 1)
                var b = go(i - 1, j)
                var c = go(i - 1, j + 1)
                m[k] = A[i][j] + listOf(a, b, c).min()!!
            }
            return m[k]!!
        }
        var best = INF
        for (j in 0 until N)
            best = Math.min(best, go(M - 1, j))
        return best
    }
}
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution {
    fun minFallingPathSum(A: Array<IntArray>, INF: Int = (1e9 + 7).toInt()): Int {
        var (M, N) = listOf(A.size, A[0].size)
        for (i in 1 until M) {
            for (j in 0 until N) {
                var a = if (0 <= j - 1) A[i - 1][j - 1] else INF
                var b = A[i - 1][j]
                var c = if (j + 1 < N) A[i - 1][j + 1] else INF
                A[i][j] += listOf(a, b, c).min()!!
            }
        }
        return A[M - 1].min()!!
    }
}
```

---

**Javascript Solutions:**
1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
let minFallingPathSum = A => {
    let [M, N] = [A.length, A[0].length];
    let go = (i, j) => {
        if (j < 0 || j == N)
            return Infinity;
        if (!i)
            return A[i][j];
        let a = go(i - 1, j - 1),
            b = go(i - 1, j),
            c = go(i - 1, j + 1);
        return A[i][j] + Math.min(a, b, c);
    };
    let best = Infinity;
    for (let j = 0; j < N; ++j)
        best = Math.min(best, go(M - 1, j));
    return best;
};
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
let minFallingPathSum = (A, m = new Map()) => {
    let [M, N] = [A.length, A[0].length];
    let go = (i, j) => {
        if (j < 0 || j == N)
            return Infinity;
        if (!i)
            return A[i][j];
        let k = `${i},${j}`;
        if (!m.has(k)) {
            let a = go(i - 1, j - 1),
                b = go(i - 1, j),
                c = go(i - 1, j + 1);
            m.set(k, A[i][j] + Math.min(a, b, c));
        }
        return m.get(k);
    };
    let best = Infinity;
    for (let j = 0; j < N; ++j)
        best = Math.min(best, go(M - 1, j));
    return best;
};
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
let minFallingPathSum = (A, m = new Map()) => {
    let [M, N] = [A.length, A[0].length];
    for (let i = 1; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            let a = 0 <= j - 1 ? A[i - 1][j - 1] : Infinity,
                b = A[i - 1][j],
                c = j + 1 < N ? A[i - 1][j + 1] : Infinity;
            A[i][j] += Math.min(a, b, c);
        }
    }
    return Math.min(...A[M - 1]);
};
```

---

**Python3 Solutions:**
1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution:
    def minFallingPathSum(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        def go(i, j):
            if j < 0 or j == N:
                return float('inf')
            if not i:
                return A[i][j]
            a = go(i - 1, j - 1)
            b = go(i - 1, j)
            c = go(i - 1, j + 1)
            return A[i][j] + min(a, b, c)
        best = float('inf')
        for j in range(N):
            best = min(best, go(M - 1, j))
        return best
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution:
    def minFallingPathSum(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        @cache
        def go(i, j):
            if j < 0 or j == N:
                return float('inf')
            if not i:
                return A[i][j]
            a = go(i - 1, j - 1)
            b = go(i - 1, j)
            c = go(i - 1, j + 1)
            return A[i][j] + min(a, b, c)
        best = float('inf')
        for j in range(N):
            best = min(best, go(M - 1, j))
        return best
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution:
    def minFallingPathSum(self, A: List[List[int]]) -> int:
        M, N = len(A), len(A[0])
        for i in range(1, M):
            for j in range(N):
                a = A[i - 1][j - 1] if 0 <= j - 1 else float('inf')
                b = A[i - 1][j]
                c = A[i - 1][j + 1] if j + 1 < N else float('inf')
                A[i][j] += min(a, b, c)
        return min(A[M - 1])
```

---

**C++ Solutions:**
1. **A**ll possibilities are considered via top-down brute-force depth-first-search
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using fun = function<int(int, int)>;
    int minFallingPathSum(VVI& A, int INF = 1e9 + 7) {
        int M = A.size(),
            N = A[0].size();
        fun go = [&](auto i, auto j) {
            if (j < 0 || j == N)
                return INF;
            if (!i)
                return A[i][j];
            auto a = go(i - 1, j -1),
                 b = go(i - 1, j),
                 c = go(i - 1, j + 1);
            return A[i][j] + min({ a, b, c });
        };
        auto best = INF;
        for (auto j{ 0 }; j < N; ++j)
            best = min(best, go(M - 1, j));
        return best;
    }
};
```

2. **R**emember each subproblem's optimal solution via a DP memo
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using fun = function<int(int, int)>;
    using Map = unordered_map<string, int>;
    int minFallingPathSum(VVI& A, Map m = {}, int INF = 1e9 + 7) {
        int M = A.size(),
            N = A[0].size();
        auto key = [](auto i, auto j) {
            stringstream ss; ss << i << "," << j;
            return ss.str();
        };
        fun go = [&](auto i, auto j) {
            if (j < 0 || j == N)
                return INF;
            if (!i)
                return A[i][j];
            auto k = key(i, j);
            if (m.find(k) == m.end()) {
                auto a = go(i - 1, j -1),
                     b = go(i - 1, j),
                     c = go(i - 1, j + 1);
                m[k] = A[i][j] + min({ a, b, c });
            }
            return m[k];
        };
        auto best = INF;
        for (auto j{ 0 }; j < N; ++j)
            best = min(best, go(M - 1, j));
        return best;
    }
};
```

3. **T**urn the top-down solution upside-down to create the bottom-up solution
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using fun = function<int(int, int)>;
    using Map = unordered_map<string, int>;
    int minFallingPathSum(VVI& A, Map m = {}, int INF = 1e9 + 7) {
        int M = A.size(),
            N = A[0].size();
        for (auto i{ 1 }; i < M; ++i) {
            for (auto j{ 0 }; j < N; ++j) {
                auto a = 0 <= j - 1 ? A[i - 1][j - 1] : INF,
                     b = A[i - 1][j],
                     c = j + 1 < N ? A[i - 1][j + 1] : INF;
                A[i][j] += min({ a, b, c });
            }
        }
        return *min_element(A[M - 1].begin(), A[M - 1].end());
    }
};
```

---

**Supplemental:** \uD83C\uDF5E "breadcumbs" for how we arrived "here."  This is today's (Jan 19<sup>th</sup>, 2024) daily challenge, and the way I solved it is objective proof that we can formulate the base case and recurrence relation however we want, ie. from going "up" base case `i = 0` until `i = M - 1` **inclusive-or** going "down" from base case `i = M` until `i = 0`.

*Python3*
```
# 9:56am - 
# 10:00am - AC :) yay!

# class Solution:
#     def minFallingPathSum(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
#         M, N = len(A), len(A[0])
#         @cache  # \uD83E\uDD14 memo
#         def go(i, j):
#             if i == M:  # \uD83D\uDED1 base case if i == M then return 0
#                 return 0
#             a = go(i + 1, j - 1) if 0 <= j - 1 else INF
#             b = go(i + 1, j)
#             c = go(i + 1, j + 1) if j + 1 < N else INF
#             return A[i][j] + min(a, b, c)
#         return min(go(0, j) for j in range(N))

# 10:01am - let's do bottom-up

# class Solution:
#     def minFallingPathSum(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
#         M, N = len(A), len(A[0])
#         dp = [[INF] * (N + 1) for _ in range(M + 1)]
        
#         for i in reversed(range(M)):
#             for j in reversed(range(N)):
#                 a = dp[i + 1][j - 1] if 0 <= j - 1 else INF
#                 b = dp[i + 1][j]
#                 c = dp[i + 1][j + 1] if j + 1 < N else INF
#                 dp[i][j] = A[i][j] + min(a, b, c)
#         return min(dp[0][j] for j in range(N))
    
    

# 10:03 - oops missing base case
# 10:05am - AC :) yay!

# class Solution:
#     def minFallingPathSum(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
#         M, N = len(A), len(A[0])
#         dp = [[INF] * N for _ in range(M + 1)]  # \uD83E\uDD14 memo
#         for j in range(N):  # \uD83D\uDED1 base case if i == M then return 0
#             dp[M][j] = 0
#         for i in reversed(range(M)):
#             for j in reversed(range(N)):
#                 a = dp[i + 1][j - 1] if 0 <= j - 1 else INF
#                 b = dp[i + 1][j]
#                 c = dp[i + 1][j + 1] if j + 1 < N else INF
#                 dp[i][j] = A[i][j] + min(a, b, c)
#         return min(dp[0][j] for j in range(N))
    
# ok cool, let's do memory optimization! ie. the current i-th row is only dependent upon the previous i+1th row

# 10:09am: AC, yay! :)

class Solution:
    def minFallingPathSum(self, A: List[List[int]], INF = int(1e9 + 7)) -> int:
        M, N = len(A), len(A[0])
        pre = [0] * N  # \uD83E\uDD14 memo + \uD83D\uDED1 base case if i == M then return 0
        for i in reversed(range(M)):
            cur = [INF] * N
            for j in reversed(range(N)):
                a = pre[j - 1] if 0 <= j - 1 else INF
                b = pre[j]
                c = pre[j + 1] if j + 1 < N else INF
                cur[j] = A[i][j] + min(a, b, c)
            pre = cur
        return min(pre)
```


*Rust*
```
// 10:22am - 
// 10:30am - ok cool, expect TLE now
// 10:35am - AC - top-down, yay! :)
// 10:39am - AC - bottom-up
// 10:41am - AC - bottom-up memory optimization

// type VI = Vec<i32>;
// type VVI = Vec<VI>;
// impl Solution {
//     pub fn min_falling_path_sum(A: VVI) -> i32 {
//         fn go(A: &VVI, i: usize, j: usize) -> i32 {
//             let (M, N, INF) = (A.len(), A[0].len(), 1e9 as i32 + 7);
//             if i == M {
//                 return 0;  // \uD83D\uDED1 base case
//             }
//             let a = if 0 < j { go(A, i + 1, j - 1) } else { INF };
//             let b = go(A, i + 1, j);
//             let c = if j + 1 < N { go(A, i + 1, j + 1) } else { INF };
//             A[i][j] + vec![a, b, c].into_iter().min().unwrap()
//         }
//         (0..A[0].len()).map(|j| go(&A, 0, j)).min().unwrap()
//     }
// }

// use std::collections::HashMap;
// type VI = Vec<i32>;
// type VVI = Vec<VI>;
// type Pair = (usize, usize);
// type Map = HashMap<Pair, i32>;
// impl Solution {
//     pub fn min_falling_path_sum(A: VVI) -> i32 {
//         let mut m = Map::new();
//         fn go(A: &VVI, i: usize, j: usize, m: &mut Map) -> i32 {
//             let (M, N, INF) = (A.len(), A[0].len(), 1e9 as i32 + 7);
//             if i == M {
//                 return 0;  // \uD83D\uDED1 base case
//             }
//             let k = (i, j);
//             if !m.contains_key(&k) {  // \uD83E\uDD14 memo
//                 let a = if 0 < j { go(A, i + 1, j - 1, m) } else { INF };
//                 let b = go(A, i + 1, j, m);
//                 let c = if j + 1 < N { go(A, i + 1, j + 1, m) } else { INF };
//                 m.insert(k.clone(), A[i][j] + vec![a, b, c].into_iter().min().unwrap());
//             }
//             *m.get(&k).unwrap()
//         }
//         (0..A[0].len()).map(|j| go(&A, 0, j, &mut m)).min().unwrap()
//     }
// }

// type VI = Vec<i32>;
// type VVI = Vec<VI>;
// impl Solution {
//     pub fn min_falling_path_sum(A: VVI) -> i32 {
//         let (M, N, INF) = (A.len(), A[0].len(), 1e9 as i32 + 7);
//         let mut dp = vec![vec![INF; N]; M + 1];
//         for j in 0..N { dp[M][j] = 0 }  // \uD83D\uDED1 base case: if i == M then return 0
//         for i in (0..M).rev() {
//             for j in (0..N).rev() {
//                 let a = if 0 < j { dp[i + 1][j - 1] } else { INF };
//                 let b = dp[i + 1][j];
//                 let c = if j + 1 < N { dp[i + 1][j + 1] } else { INF };
//                 dp[i][j] = A[i][j] + vec![a, b, c].into_iter().min().unwrap();
//             }
//         }
//         (0..N).map(|j| dp[0][j]).min().unwrap()
//     }
// }

// current i-th row is dependent upon previous i+1-th row

type VI = Vec<i32>;
type VVI = Vec<VI>;
impl Solution {
    pub fn min_falling_path_sum(A: VVI) -> i32 {
        let (M, N, INF) = (A.len(), A[0].len(), 1e9 as i32 + 7);
        let mut pre = vec![0; N];  // \uD83E\uDD14 memo + \uD83D\uDED1 base case: if i == M then return 0
        for i in (0..M).rev() {
            let mut cur = vec![0; N];  // \uD83E\uDD14 memo
            for j in (0..N).rev() {
                let a = if 0 < j { pre[j - 1] } else { INF };
                let b = pre[j];
                let c = if j + 1 < N { pre[j + 1] } else { INF };
                cur[j] = A[i][j] + vec![a, b, c].into_iter().min().unwrap();
            }
            pre = cur;
        }
        pre.into_iter().min().unwrap()
    }
}
```
