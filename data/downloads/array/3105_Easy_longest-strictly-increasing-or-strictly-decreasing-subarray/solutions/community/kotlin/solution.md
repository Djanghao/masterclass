# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5081610/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5081610/)

---

# Game Plan

Return the maximum (`best`) "run length" of consecutive increases and decreases (`up` and down `dn` correspondingly) of the input array `A`.

# Code

*Kotlin*
```
class Solution {
    fun longestMonotonicSubarray(A: IntArray): Int {
        var (best, up, dn) = Triple(1, 1, 1)
        for (i in 1..A.lastIndex) {
            up = if (A[i] > A[i - 1]) up + 1 else 1
            dn = if (A[i] < A[i - 1]) dn + 1 else 1
            best = maxOf(best, up, dn)
        }
        return best
    }
}
```

*Javascript*
```
let longestMonotonicSubarray = (A, best = 1, up = 1, dn = 1) => {
    for (let i = 1; i < A.length; ++i) {
        up = A[i] > A[i - 1] ? up + 1 : 1;
        dn = A[i] < A[i - 1] ? dn + 1 : 1;
        best = Math.max(best, up, dn);
    }
    return best;
};
```

*Python3*
```
class Solution:
    def longestMonotonicSubarray(self, A: List[int], up = 1, dn = 1, best = 1) -> int:
        for i in range(1, len(A)):
            up = up + 1 if A[i] > A[i - 1] else 1
            dn = dn + 1 if A[i] < A[i - 1] else 1
            best = max(best, up, dn)
        return best
```

*Rust*
```
impl Solution {
    pub fn longest_monotonic_subarray(A: Vec<i32>) -> i32 {
        let (mut best, mut up, mut dn) = (1, 1, 1);
        for i in 1..A.len() {
            up = if A[i] > A[i - 1] { up + 1 } else { 1 };
            dn = if A[i] < A[i - 1] { dn + 1 } else { 1 };
            best = *vec![best, up, dn].iter().max().unwrap();
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
    int longestMonotonicSubarray(VI& A, int best = 1, int up = 1, int dn = 1) {
        for (auto i{ 1 }; i < A.size(); ++i) {
            up = A[i] > A[i - 1] ? up + 1 : 1;
            dn = A[i] < A[i - 1] ? dn + 1 : 1;
            best = max({best, up, dn});
        }
        return best;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF

*Kotlin*
```
// class Solution {
//     fun longestMonotonicSubarray(A: IntArray): Int {
//         var best = 1
//         var (up, dn) = Pair(1, 1)
//         var (run, last) = Pair(1, -123)
//         for (x in A) {
//             up = if (last == x - 1) up + 1 else 1
//             dn = if (last == x + 1) dn + 1 else 1
//             best = maxOf(best, up, dn)
//             last = x
//         }
//         return best
//     }
// }

// oops, I misread as monotonically increasing or decreasing

// class Solution {
//     fun longestMonotonicSubarray(A: IntArray): Int {
//         var best = 1
//         var (up, dn) = Pair(1, 1)
//         var (run, last) = Pair(1, A[0])
//         for (x in A) {
//             up = if (x > last) up + 1 else 1
//             dn = if (x < last) dn + 1 else 1
//             best = maxOf(best, up, dn)
//             last = x
//         }
//         return best
//     }
// }

class Solution {
    fun longestMonotonicSubarray(A: IntArray): Int {
        var (best, up, dn) = Triple(1, 1, 1)
        for (i in 1..A.lastIndex) {
            up = if (A[i] > A[i - 1]) up + 1 else 1
            dn = if (A[i] < A[i - 1]) dn + 1 else 1
            best = maxOf(best, up, dn)
        }
        return best
    }
}
```