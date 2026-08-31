# 🎨  The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5149652/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5149652/)

---

# Game Plan

\uD83C\uDF1F It is most simple to find the single maximum delta between two cells rather than piecemeal fashion via more than two cells. 

[\uD83C\uDFA8  The ART of Dynamic Programming:](https://leetcode.com/discuss/general-discussion/712010/The-ART-of-Dynamic-Programming-An-Intuitive-Approach%3A-from-Apprentice-to-Master) let `lo[i][j]` denote the lowest value within the sub-matrix starting at top-left origin `0`,`0` ending at bottom-right `i`,`j`.

Perform a scan of the input matrix `A` from top-left to bottom-right, populating `lo` while simultaneously tracking the `best` answer as the maximum difference between the values of some arbitrary previously seen top-left cell and each bottom-right cell `i`,`j` under consideration.



# Code

*Kotlin*
```
class Solution {
    fun maxScore(A: List<List<Int>>): Int {
        var (lo, best) = Pair(A.map{ it.toIntArray() }, -1234567890)
        for (i in 0..A.lastIndex) {
            for (j in 0..A[0].lastIndex) {
                if (0 < i) { best = Math.max(best, A[i][j] - lo[i - 1][j]); lo[i][j] = Math.min(lo[i][j], lo[i - 1][j]) }
                if (0 < j) { best = Math.max(best, A[i][j] - lo[i][j - 1]); lo[i][j] = Math.min(lo[i][j], lo[i][j - 1]) }
            }
        }
        return best
    }
}
```

*Javascript*
```
let maxScore = (A, lo = A.map(row => [...row]), best = -1234567890) => {
    for (let i = 0; i < A.length; ++i) {
        for (let j = 0; j < A[0].length; ++j) {
            if (0 < i) best = Math.max(best, A[i][j] - lo[i - 1][j]), lo[i][j] = Math.min(lo[i][j], lo[i - 1][j]);
            if (0 < j) best = Math.max(best, A[i][j] - lo[i][j - 1]), lo[i][j] = Math.min(lo[i][j], lo[i][j - 1]);
        }
    }
    return best;
};
```

*Python3*
```
class Solution:
    def maxScore(self, A: List[List[int]], best = -1234567890) -> int:
        lo = [row[:] for row in A]
        for i in range(len(A)):
            for j in range(len(A[0])):
                if 0 < i: best = max(best, A[i][j] - lo[i - 1][j]); lo[i][j] = min(lo[i][j], lo[i - 1][j])
                if 0 < j: best = max(best, A[i][j] - lo[i][j - 1]); lo[i][j] = min(lo[i][j], lo[i][j - 1])
        return best
```

*Rust*
```
use std::cmp::{min, max};
impl Solution {
    pub fn max_score(A: Vec<Vec<i32>>) -> i32 {
        let (mut lo, mut best) = (A.clone(), -1234567890);
        for i in 0..A.len() {
            for j in 0..A[0].len() {
                if 0 < i { best = max(best, A[i][j] - lo[i - 1][j]); lo[i][j] = min(lo[i][j], lo[i - 1][j]); }
                if 0 < j { best = max(best, A[i][j] - lo[i][j - 1]); lo[i][j] = min(lo[i][j], lo[i][j - 1]); }
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
    int maxScore(VVI& A, int best = -1234567890) {
        auto lo{ A };
        for (auto i{ 0 }; i < A.size(); ++i) {
            for (auto j{ 0 }; j < A[0].size(); ++j) {
                if (0 < i) best = max(best, A[i][j] - lo[i - 1][j]), lo[i][j] = min(lo[i][j], lo[i - 1][j]);
                if (0 < j) best = max(best, A[i][j] - lo[i][j - 1]), lo[i][j] = min(lo[i][j], lo[i][j - 1]);
            }
        }
        return best;
    }
};
```

# "Breadcrumbs" for how we arrived "here"
```
# 12:53pm - 

# precalculate the best ending here at each i,j of the input matrix A

# note for example 1: 14 - 5 = 9 also!

# so we can totally simplify it right?

# just max bottom-right minus min top-left, isnt 'it?  why make life hard on ourselves per hop???

# let's do this then, scan from top-left to bottom right for low
#                    scan from bottom-right to top-left for high
# then return max(high - low)

# 1:00pm - implementation ends

# class Solution:
#     def maxScore(self, A: List[List[int]]) -> int:
#         M, N = len(A), len(A[0])
#         lo = [row[:] for row in A]
#         hi = [row[:] for row in A]
#         for i in range(M):
#             u = M - 1 - i
#             for j in range(N):
#                 v = N - 1 - j
#                 if u + 1 < M: hi[u][v] = max(hi[u][v], hi[u + 1][v])
#                 if v + 1 < N: hi[u][v] = max(hi[u][v], hi[u][v + 1])
#                 if 0 <= i - 1: lo[i][j] = min(lo[i][j], lo[i - 1][j])
#                 if 0 <= j - 1: lo[i][j] = min(lo[i][j], lo[i][j - 1])
#         return max(hi[i][j] - lo[i][j] for j in range(N) for i in range(M))


# Case 2
# Input
# grid =
# [[4,3,2],[3,2,1]]
# Output
# 0
# Expected
# -1

# 1:04pm - AC in ~11 minutes, yay! 

# class Solution:
#     def maxScore(self, A: List[List[int]]) -> int:
#         M, N = len(A), len(A[0])
#         lo = [row[:] for row in A]
#         hi = [row[:] for row in A]
#         for i in range(M):
#             u = M - 1 - i
#             for j in range(N):
#                 v = N - 1 - j
#                 if u + 1 < M: hi[u][v] = max(hi[u][v], hi[u + 1][v])
#                 if v + 1 < N: hi[u][v] = max(hi[u][v], hi[u][v + 1])
#                 if 0 <= i - 1: lo[i][j] = min(lo[i][j], lo[i - 1][j])
#                 if 0 <= j - 1: lo[i][j] = min(lo[i][j], lo[i][j - 1])
#         if lo != hi:
#             return max(hi[i][j] - lo[i][j] for j in range(N) for i in range(M))
#         best = -1e5
#         for i in range(1, M):
#             for j in range(1, N):
#                 best = max(best, A[i][j] - A[i - 1][j], A[i][j] - A[i][j - 1])
#         return best

class Solution:
    def maxScore(self, A: List[List[int]], best = -1234567890) -> int:
        lo = [row[:] for row in A]
        for i in range(len(A)):
            for j in range(len(A[0])):
                if 0 <= i - 1: best = max(best, A[i][j] - lo[i - 1][j]); lo[i][j] = min(lo[i][j], lo[i - 1][j])
                if 0 <= j - 1: best = max(best, A[i][j] - lo[i][j - 1]); lo[i][j] = min(lo[i][j], lo[i][j - 1])
        return best

```