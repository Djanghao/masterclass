# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5088666/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5088666/)

---

# Game Plan

Sort the input array `A`.

The median element exists at index `i = |A| / 2`.

There are 3 use cases to consider for the input target `T`:

1. if `T < A[i]`, then return the accumulated sum of `A[i] - T` for all `A[i]` to-the-left of index `i` inclusive such that `T < A[i]`
2. if `A[i] < T`, then return the accumulated sum of `T - A[i]` for all `A[i]` to-the-right of index `i` inclusive such that `A[i] < T`
3. if `A[i] == T`, then return `0`

# Code

*Kotlin*
```
class Solution {
    fun minOperationsToMakeMedianK(A: IntArray, T: Int): Long {
        A.sort()
        var i = A.size / 2
        var k = A.lastIndex
        if (T < A[i]) return (0..i).map{ Math.max(0, A[it] - T).toLong() }.sum()
        if (A[i] < T) return (i..k).map{ Math.max(0, T - A[it]).toLong() }.sum()
        return 0
    }
}
```

*Javascript*
```
var minOperationsToMakeMedianK = (A, T, N = A.length, i = Math.floor(N / 2)) =>
    A.sort((a, b) => a - b) &&
    T < A[i] ? _.sum(_.range(0, i + 1).map(i => T < A[i] ? A[i] - T : 0)) :
    A[i] < T ? _.sum(_.range(i, N).map(i => A[i] < T ? T - A[i] : 0)) : 0;
```

*Python3*
```
class Solution:
    def minOperationsToMakeMedianK(self, A: List[int], T: int, t = 0) -> int:
        A.sort()
        N = len(A)
        i = N // 2
        return sum(A[i] - T for i in range(i + 1) if T < A[i]) if T < A[i] else \\
               sum(T - A[i] for i in range(i, N) if A[i] < T) if A[i] < T else 0
```

*Rust*
```
use std::cmp::max;
impl Solution {
    pub fn min_operations_to_make_median_k(mut A: Vec<i32>, T: i32) -> i64 {
        A.sort();
        let N = A.len();
        let i = N / 2;
        let k = N - 1;
        if T < A[i] { return (0..=i).map(|i| max(0, A[i] - T) as i64).sum() }
        if A[i] < T { return (i..=k).map(|i| max(0, T - A[i]) as i64).sum() }
        0
    }
}
```

*C++*
```
class Solution {
public:
    using LL = long long;
    using VI = vector<int>;
    LL minOperationsToMakeMedianK(VI& A, int T) {
        sort(A.begin(), A.end());
        auto N = A.size(),
             i = N / 2;
        if (T < A[i]) return accumulate(A.begin(), A.begin() + i + 1, 0LL, [=](LL t, LL x) { return t + max(0LL, x - T); });
        if (A[i] < T) return accumulate(A.begin() + i, A.end(), 0LL, [=](LL t, LL x) { return t + max(0LL, T - x); });
        return 0;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF

*Python3*
```
# 8:42am - 

# example 1

# A = 2 5 6 8 5         K = 4
#     0 1 2 3 4 5

# sorted(A) = 2  5  5  6  8
#                   i
#               -1 -1
#             2  4  4  6  8


# example 2

# A = 2 5 6 8 5         K = 7
#     0 1 2 3 4 5

# sorted(A) = 2  5  5  6  8
#                   7  7
#                  +2 +1


# game plan:

# sort the input array A

# determine if we need to increment or decrement values around the median
# case 1: increment (as seen in examples above) occurs when the median is less-than the target
# ie. we +delta between each value and target median value until each value to-the-right of median is >= median

# case 2: decrement (not seen in examples above) occurs when the median is greaterh-than the target
# ie. we -delta bewteen each value and the target median value until each value to-the-left of the median is <= median

# 8:49am - implementation begins
# 8:53am - implementation ends

# wrong answer

# Input
# nums =
# [2,5,6,8,5]
# k =
# 4
# Output
# 0
# Expected
# 2

# 9:00am - debug some minor mistakes and AC in ~18 minutes, yay!

# class Solution:
#     def minOperationsToMakeMedianK(self, A: List[int], target: int, t = 0) -> int:
#         A.sort()
#         i = len(A) // 2
#         if target < A[i]:
#             while 0 <= i and target < A[i]:
#                 t += A[i] - target
#                 i -= 1
#         elif A[i] < target:
#             while i < len(A) and A[i] < target:
#                 t += target - A[i]
#                 i += 1
#         return t

# class Solution:
#     def minOperationsToMakeMedianK(self, A: List[int], target: int, t = 0) -> int:
#         A.sort()
#         i = len(A) // 2
#         if target < A[i]:
#             for i in reversed(range(i + 1)):
#                 t += A[i] - target if target < A[i] else 0
#         elif A[i] < target:
#             for i in range(i, len(A)):
#                 t += target - A[i] if  A[i] < target else 0
#         return t

class Solution:
    def minOperationsToMakeMedianK(self, A: List[int], T: int, t = 0) -> int:
        A.sort()
        i = len(A) // 2
        if T < A[i]: return sum(A[i] - T for i in reversed(range(i + 1)) if T < A[i])
        if A[i] < T: return sum(T - A[i] for i in range(i, len(A)) if A[i] < T)
        return 0
```