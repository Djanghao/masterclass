# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4848637/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4848637/)

---

# Game Plan

Let `S` be a set of i,j cells in the Y-shape of the input matrix `A`, then brute-force consider all possible values 0,1,2 to `include` in the Y-shape and `exclude` from the Y-shape.

# Code

*Kotlin*
```
class Solution {
    fun minimumOperationsToWriteY(A: Array<IntArray>): Int {
        var best = 1e9.toInt() + 7
        var N = A.size
        var S = mutableSetOf<Pair<Int, Int>>()
        var (j, k) = Pair(0, N - 1)
        for (i in 0 until N / 2) {
            S.add(Pair(i, j++))
            S.add(Pair(i, k--))
        }
        for (i in N / 2 until N)
            S.add(Pair(i, N / 2))
        for (include in listOf(0, 1, 2)) {
            for (exclude in listOf(0, 1, 2)) {
                if (include != exclude) {
                    var cost = 0
                    for (i in 0 until N)
                        for (j in 0 until N)
                            if (S.contains(Pair(i, j)))
                                cost += if (A[i][j] != include) 1 else 0
                            else
                                cost += if (A[i][j] != exclude) 1 else 0
                    best = min(best, cost)
                }
            }
        }
        return best
    }
}
```

*Javascript*
```
let minimumOperationsToWriteY = (A, N = A.length, T = Math.floor(N / 2), S = [...Array(N)].map(_ => Array(N).fill(0)), best = Number(1e9 + 7)) => {
    for (let i = 0, j = 0, k = N - 1; i < T; ++i)
        S[i][j++] = 1,
        S[i][k--] = 1;
    for (let i = T; i < N; ++i)
        S[i][T] = 1;
    for (let include of [0, 1, 2]) {
        for (let exclude of [0, 1, 2]) {
            if (include != exclude) {
                let cost = 0;
                for (let i = 0; i < N; ++i)
                    for (let j = 0; j < N; ++j)
                        if (S[i][j])
                            cost += Number(A[i][j] != include);
                        else
                            cost += Number(A[i][j] != exclude);
                best = Math.min(best, cost);
            }
        }
    }
    return best;
};
```

*Python3*
```
class Solution:
    def minimumOperationsToWriteY(self, A: List[List[int]], best = int(1e9 + 7)) -> int:
        N = len(A)
        S = set()
        j, k = 0, N - 1
        for i in range(N // 2):
            S.add((i, j)); j += 1
            S.add((i, k)); k -= 1
        for i in range(N // 2, N):
            S.add((i, N // 2))
        for include in [0, 1, 2]:
            for exclude in [0, 1, 2]:
                if include != exclude:
                    cost = 0
                    for i in range(N):
                        for j in range(N):
                            if (i, j) in S:
                                cost += 1 if A[i][j] != include else 0
                            else:
                                cost += 1 if A[i][j] != exclude else 0
                    best = min(best, cost)
        return best
```

*Rust*
```
use std::cmp::min;
impl Solution {
    pub fn minimum_operations_to_write_y(A: Vec<Vec<i32>>) -> i32 {
        let N = A.len();
        let mut S = vec![vec![0; N]; N];
        let (mut j, mut k) = (0, N - 1);
        for i in 0..N / 2 {
            S[i][j] = 1; j += 1;
            S[i][k] = 1; k -= 1;
        }
        for i in N / 2..N {
            S[i][N / 2] = 1;
        }
        let mut best = 1e9 as i32 + 7;
        for include in vec![0, 1, 2] {
            for exclude in vec![0, 1, 2] {
                if include != exclude {
                    let mut cost = 0;
                    for i in 0..N {
                        for j in 0..N {
                            if S[i][j] == 1 {
                                cost += if A[i][j] != include { 1 } else { 0 };
                            } else {
                                cost += if A[i][j] != exclude { 1 } else { 0 };
                            }
                        }
                    }
                    best = min(best, cost);
                }
            }
        }
        best
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    int minimumOperationsToWriteY(VVI& A, int best = int(1e9 + 7)) {
        int N = A.size();
        VVI S(N, VI(N));
        for (auto i{ 0 }, j{ 0 }, k{ N - 1 }; i < N / 2; ++i)
            S[i][j++] = 1,
            S[i][k--] = 1;
        for (auto i{ N / 2 }; i < N; ++i)
            S[i][N / 2] = 1;
        for (auto include: VI{ 0, 1, 2 }) {
            for (auto exclude: VI{ 0, 1, 2 }) {
                if (include != exclude) {
                    auto cost = 0;
                    for (auto i{ 0 }; i < N; ++i)
                        for (auto j{ 0 }; j < N; ++j)
                            if (S[i][j])
                                cost += int(A[i][j] != include);
                            else
                                cost += int(A[i][j] != exclude);
                    best = min(best, cost);
                }
            }
        }
        return best;
    }
};
```

# Supplemental: \uD83C\uDF5E "Breadcrumbs" for how we arrived "Here" \uD83C\uDFAF

*Python3*
```
# 6:32am - 

# Y takes up the entire square, that makes life easier, right?

# center cell is is N / 2, N / 2

# question: how to decide 0,1,2 ?

# count frequency of each value in the Y
# count  "   "     "    "   NOT  "   "

# actually, let's just try them all, right?

# N is small <= 49

# and there's only 3 colors, so KISS == keep it super simple

# 6:34am - implementation begins
# 6:46am - implementation ends

# yay AC @ 6:46am -> ~14 minutes 

class Solution:
    def minimumOperationsToWriteY(self, A: List[List[int]], best = int(1e9 + 7)) -> int:
        N = len(A)
        S = set()
        j, k = 0, N - 1
        for i in range(N // 2):
            S.add((i, j)); j += 1
            S.add((i, k)); k -= 1
        for i in range(N // 2, N):
            S.add((i, N // 2))
        for include in [0, 1, 2]:
            for exclude in [0, 1, 2]:
                if include != exclude:
                    cost = 0
                    for i in range(N):
                        for j in range(N):
                            if (i, j) in S:
                                cost += 1 if A[i][j] != include else 0
                            else:
                                cost += 1 if A[i][j] != exclude else 0
                    best = min(best, cost)
        return best
```