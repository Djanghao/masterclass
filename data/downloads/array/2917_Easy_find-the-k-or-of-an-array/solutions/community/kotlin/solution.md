# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4698181/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4698181/)

---

# Game Plan

Accumulate k<sup>th</sup> bit counts for each value `x` of the input array `A` and return the accumulated sum of 2<sup>k</sup> for each k<sup>th</sup> bit count greater-than-or-equal-to the input threshold `T`.

# Implementations

*Kotlin*
```
class Solution {
    fun findKOr(A: IntArray, T: Int): Int {
        var m = mutableMapOf<Int, Int>()
        for (x in A)
            for (k in 0..31)
                if (x and (1 shl k) != 0)
                    m[k] = 1 + (m[k] ?: 0)
        return m.map{ (k, cnt) -> if (T <= cnt) 1 shl k else 0 }.sum()
    }
}
```

*Javascript*
```
let findKOr = (A, T, m = new Map()) => {
    for (let x of A)
        for (let k = 0; k < 32; ++k)
            if (x & (1 << k))
                m.set(k, 1 + (m.get(k) || 0));
    return _.sum([...m].map(([k, cnt]) => T <= cnt ? 1 << k : 0));
};
```

*Python3*
```
class Solution:
    def findKOr(self, A: List[int], T: int) -> int:
        cnt = Counter()
        for x in A:
            for k in range(32):
                if x & (1 << k):
                    cnt[k] += 1
        return sum(1 << k for k in range(32) if T <= cnt[k])
```

*Rust*
```
use std::collections::HashMap;
impl Solution {
    pub fn find_k_or(A: Vec<i32>, T: i32) -> i32 {
        let mut m = HashMap::new();
        for x in A {
            for k in 0..32 {
                if x & (1 << k) != 0 {
                    *m.entry(k).or_insert(0) += 1;
                }
            }
        }
        m.into_iter().map(|(k, cnt)| if T <= cnt { 1 << k } else { 0 }).sum()
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using Map = unordered_map<int, int>;
    int findKOr(VI& A, int T, Map m = {}) {
        for (auto x: A)
            for (auto k{ 0 }; k < 32; ++k)
                if (x & (1 << k))
                    ++m[k];
        return accumulate(m.begin(), m.end(), 0, [=](auto t, auto& pair) {
            auto [k, cnt] = pair;
            return t + (T <= cnt ? 1 << k : 0);
        });
    }
};
```

# Supplemental: \uD83C\uDF5E"Breadcrumbs" for how we arrived "here" \uD83C\uDFAF

*Python3*
```
# 7:37pm - 

# bucket of bit counts? from i=0..31 for each value x in A

# sum exceeding threshold T count

# then accumulate 2^i for i in 0..31 where T <= cnt[i]

# 7:40pm - implementation begins
# 7:42pm - implementation end, AC in ~5 minutes, yay! \uD83C\uDF89

class Solution:
    def findKOr(self, A: List[int], T: int) -> int:
        cnt = Counter()
        for x in A:
            for i in range(32):
                if x & (1 << i):
                    cnt[i] += 1
        return sum(1 << i for i in range(32) if T <= cnt[i])
```