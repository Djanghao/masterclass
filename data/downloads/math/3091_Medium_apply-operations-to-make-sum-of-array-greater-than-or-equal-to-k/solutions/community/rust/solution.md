# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920986/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920986/)

---

# Game Plan

Consider all possible incremental totals `t = 1..T` along with the duplicates we `need`, ie. `need = ceil(T / t)`, to reach target `T` to find and return the `best` candidate `cand`.

# Code

*Kotlin*
```
class Solution {
    fun minOperations(T: Int): Int {
        var best = 1e9.toInt() + 7
        for (t in 1..T) {
            var need = Math.ceil(T.toDouble() / t.toDouble()).toInt()
            var cand = (t - 1) + (need - 1)  // \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
            best = Math.min(best, cand)      // \uD83C\uDFAF best candidate cand
        }
        return best
    }
}
```

*Javacript*
```
let minOperations = (T, best = Number(1e9 + 7)) => {
    for (let t = 1; t <= T; ++t) {
        let need = Math.ceil(T / t);
        let cand = (t - 1) + (need - 1);  // \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
        best = Math.min(best, cand);      // \uD83C\uDFAF best candidate cand
    }
    return best;
};
```

*Python3*
```
class Solution:
    def minOperations(self, T: int, best = int(1e9 + 7)) -> int:
        for t in range(1, T + 1):
            need = ceil(T / t)
            cand = (t - 1) + (need - 1)  # \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
            best = min(best, cand)       # \uD83C\uDFAF best candidate cand
        return best
```

*Rust*
```
use std::cmp::min;
impl Solution {
    pub fn min_operations(T: i32) -> i32 {
        let mut best = 1e9 as i32 + 7;
        for t in 1..=T {
            let need = (T as f32 / t as f32).ceil() as i32;
            let cand = (t - 1) + (need - 1);  // \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
            best = min(best, cand);           // \uD83C\uDFAF best candidate cand
        }
        best
    }
}
```

*C++*
```
class Solution {
public:
    int minOperations(int T, int best = 1e9 + 7) {
        for (auto t{ 1 }; t <= T; ++t) {
            int need = ceil(T / double(t));
            int cand = (t - 1) + (need - 1);  // \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
            best = min(best, cand);           // \uD83C\uDFAF best candidate cand
        }
        return best;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF
```
# 1h 9m

# Q2 time

# 3:47pm - 
# 3:54pm => ~7 minutes
# 3:59pm => ~12 minutes for AC

# K=11 -> answer 5

# Example 1:

# Input: k = 11

# Output: 5

# Explanation:

# We can do the following operations on the array nums = [1]:

# Increase the element by 1 three times. The resulting array is nums = [4].
# Duplicate the element two times. The resulting array is nums = [4,4,4].
# The sum of the final array is 4 + 4 + 4 = 12 which is greater than or equal to k = 11.
# The total number of operations performed is 3 + 2 = 5.

# Example 2:

# Input: k = 1

# Output: 0

# Explanation:

# The sum of the original array is already greater than or equal to 1, so no operations are needed.


# brute-force DFS + Memo?

# 3:50pm - 

# target T

# one key observation is that we can perform this greedily, ie. it would be sub-optimal to duplicate, then increment, then duplicate
# since the cost of increment and duplication is the same +1 cost... we would always way to increment +++ then duplicate

# T = 1e5 -> 100,000 => looking for a near-linear solution for AC to avoid TLE

class Solution:
    def minOperations(self, T: int, best = int(1e9 + 7)) -> int:
        for t in range(1, T + 1):
            need = ceil(T / t)
            cand = (t - 1) + (need - 1)  # \u2B50\uFE0F total t starts at 1, so the quantity of increments is total t - 1 and duplicates we need starts at 1, so the quantity of duplicates is need - 1
            best = min(best, cand)       # \\U0001f3af best candidate cand
        return best
        
```