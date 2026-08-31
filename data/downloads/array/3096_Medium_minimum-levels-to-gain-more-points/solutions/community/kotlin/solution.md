# 🎨  The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/5077784/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/5077784/)

---

# Game Plan

If the input array `A` contains only `0` then return `-1` if `|A| <= 2` else return `1`

Otherwise transform the input array `A` by updating each `0` to `-1` to precompute the prefix and suffix sums from left-to-right and right-to-left as `L` and `R` correspondingly to find and return the first index `i` such that `L[i] > R[i + 1]` to return `i + 1` (we add 1 for 0-based to 1-based indexing).  If there is no index `i` such that `L[i] > R[i + 1]`, then return `-1`.

# Code

*Kotlin*
```
class Solution {
    fun minimumLevels(A_: IntArray): Int {
        var N = A_.size
        if (A_.sum() == 0)
            return if (N <= 2) -1 else 1
        var A = A_.map{ if (it == 0) -1 else 1 }.toIntArray()
        var L = A.copyOf()
        var R = A.copyOf()
        for (i in 1 until N) {
            var j = N - 1 - i
            L[i] += L[i - 1]
            R[j] += R[j + 1]
        }
        var ok = (0 until N - 1).filter{ L[it] > R[it + 1] }
        return if (0 < ok.size) ok[0] + 1 else -1
    }
}
```

*Javascript*
```
var minimumLevels = (A, N = A.length) => {
    if (!_.sum(A))
        return N <= 2 ? -1 : 1;
    A = A.map(x => !x ? -1 : 1);
    let L = [...A],
        R = [...A];
    for (let i = 1; i < N; ++i) {
        let j = N - 1 - i;
        L[i] += L[i - 1];
        R[j] += R[j + 1];
    }
    let ok = _.range(0, N - 1).filter(i => L[i] > R[i + 1]);
    return ok.length ? ok[0] + 1 : -1;
};
```

*Python3*
```
class Solution:
    def minimumLevels(self, A: List[int]) -> int:
        N = len(A)
        if not sum(A):
            return -1 if N <= 2 else 1
        A = [1 if x == 1 else -1 for x in A]
        L, R = A[:], A[:]
        for i in range(1, N):
            j = N - 1 - i
            L[i] += L[i - 1]
            R[j] += R[j + 1]
        return min([i + 1 for i in range(N - 1) if L[i] > R[i + 1]] or [-1])
```

*Rust*
```
type VI = Vec<i32>;
impl Solution {
    pub fn minimum_levels(A: VI) -> i32 {
        let N = A.len();
        if A.iter().sum::<i32>() == 0 {
            return if N <= 2 { -1 } else { 1 };
        }
        let A = A.into_iter().map(|x| if x == 0 { -1 } else { 1 }).collect::<VI>();
        let mut L = A.clone();
        let mut R = A.clone();
        for i in 1..N {
            let j = N - 1 - i;
            L[i] += L[i - 1];
            R[j] += R[j + 1];
        }
        for i in 0..N-1 {
            if L[i] > R[i + 1] {
                return i as i32 + 1;
            }
        }
        -1
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    int minimumLevels(VI& A) {
        auto N = A.size();
        auto T = accumulate(A.begin(), A.end(), 0, [](auto t, auto x) { return t + x; });
        if (!T)
            return N <= 2 ? -1 : 1;
        transform(A.begin(), A.end(), A.begin(), [](auto x) { return !x ? -1 : 1; });
        auto L{ A },
             R{ A };
        for (auto i{ 1 }; i < N; ++i) {
            auto j = N - 1 - i;
            L[i] += L[i - 1];
            R[j] += R[j + 1];
        }
        for (auto i{ 0 }; i + 1 < N; ++i)
            if (L[i] > R[i + 1])
                return i + 1;
        return -1;
    }
};
```
