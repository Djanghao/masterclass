# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4964717/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4964717/)

---

# Game Plan

Brute-force consider all subarrays starting at index `i` of length `k`, ie. let total `t` track the bitwise OR of each possible subarray; then we find the `best` answer where `t` meets-or-exceeds threshold target `T`.

# Code

*Kotlin*
```
class Solution {
    fun minimumSubarrayLength(A: IntArray, T: Int): Int {
        var best = 1234567890
        var N = A.size
        for (i in 0 until N) {
            var t = 0
            for (k in 0 until N - i) {
                t = t or A[i + k]
                if (T <= t)
                    best = Math.min(best, k + 1)
            }
        }
        return if (best != 1234567890) best else -1
    }
}
```

*Javascript*
```
let minimumSubarrayLength = (A, T, N = A.length, best = 1234567890) => {
    for (let i = 0; i < N; ++i) {
        let t = 0;
        for (let k = 0; i + k < N; ++k) {
            t |= A[i + k];
            if (T <= t)
                best = Math.min(best, k + 1);
        }
    }
    return best != 1234567890 ? best : -1;
};
```

*Python3*
```
class Solution:
    def minimumSubarrayLength(self, A: List[int], T: int, best = 1234567890) -> int:
        N = len(A)
        for i in range(N):
            t = 0
            for k in range(N - i):
                t |= A[i + k]
                if T <= t:
                    best = min(best, k + 1)
        return best if best != 1234567890 else -1

```

*Rust*
```
use std::cmp::min;
impl Solution {
    pub fn minimum_subarray_length(A: Vec<i32>, T: i32) -> i32 {
        let mut best = 1234567890;
        for i in 0..A.len() {
            let mut t = 0;
            for k in 0..A.len() - i {
                t |= A[i + k];
                if T <= t {
                    best = min(best, k + 1);
                }
            }
        }
        if best != 1234567890 { best as i32 } else { -1 }
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    int minimumSubarrayLength(VI& A, int T, int best = 1234567890) {
        for (auto i{ 0 }; i < A.size(); ++i) {
            auto t = 0;
            for (auto k{ 0 }; i + k < A.size(); ++k) {
                t |= A[i + k];
                if (T <= t)
                    best = min(best, k + 1);
            }
        }
        return best != 1234567890 ? best : -1;
    }
};
```

