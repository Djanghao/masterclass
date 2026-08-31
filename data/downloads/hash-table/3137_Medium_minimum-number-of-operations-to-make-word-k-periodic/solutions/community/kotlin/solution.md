# a few solutions

**Author:** claytonjwong
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5117275/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5117275/)

---

# Game Plan

Greedily transform all "chunks" of threshold `T` size by using a map `m` as a counter to find the maximum frequency "chunk" of the input array `A` of characters, ie. the minimum operations is equal to the total amount of "chunks" (`|A| / T`) minus the maximum frequency "chunk" (`max(m.values())`), since that is the "cost" of updating all "chunks" to the maximum frequency "chunk".

# Code

*Kotlin*
```
class Solution {
    fun minimumOperationsToMakeKPeriodic(A: String, T: Int): Int {
        var m = mutableMapOf<String, Int>()
        for (i in 0..A.lastIndex - T + 1 step T) {
            var s = A.substring(i until i + T)
            m[s] = 1 + (m[s] ?: 0)
        }
        return A.length / T - m.values.max()!!
    }
}
```

*Javascript*
```
var minimumOperationsToMakeKPeriodic = (A, T, m = new Map()) => {
    for (let i = 0; i + T <= A.length; i += T) {
        let s = A.substring(i, i + T);
        m.set(s, 1 + (m.get(s) || 0));
    }
    return A.length / T - Math.max(...m.values());
};
```

*Python3*
```
class Solution:
    def minimumOperationsToMakeKPeriodic(self, A: str, T: int) -> int:
        m = Counter()
        for i in range(0, len(A) - T + 1, T):
            m[A[i:i + T]] += 1
        return len(A) // T - max(m.values())
```

*Rust*
```
use std::collections::HashMap;
impl Solution {
    pub fn minimum_operations_to_make_k_periodic(s: String, T: i32) -> i32 {
        let T = T as usize;
        let mut m = HashMap::new();
        for i in (0..=s.len() - T).step_by(T) {
            let ss = String::from(&s[i..i + T]);
            *m.entry(ss.clone()).or_insert(0) += 1;
        }
        (s.len() / T) as i32 - *m.values().max().unwrap()
    }
}
```

*C++*
```
class Solution {
public:
    using Map = unordered_map<string, int>;
    int minimumOperationsToMakeKPeriodic(string A, int T, Map m = {}, int hi = 0) {
        for (auto i{ 0 }; i + T <= A.size(); i += T)
            hi = max(hi, ++m[A.substr(i, T)]);
        return A.size() / T - hi;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF

*Python3*
```
# 44m

# Q2

# 9:35am - 

# Example 1:

# Input: word = "leetcodeleet", k = 4
#                0123456789012
#                j   i
#                leet
#                    leet

# Output: 1

# Explanation:

# We can obtain a 4-periodic string by picking i = 4 and j = 0. After this operation, word becomes equal to "leetleetleet".

# Example 2:

# Input: word = "leetcoleet", k = 2
#                01234567890
#                $    
#                  le  
#                    le
#                      $
#                        le

# Output: 3

# Explanation:

# We can obtain a 2-periodic string by applying the operations in the table below.

# i	j	word
# 0	2	etetcoleet
# 4	0	etetetleet
# 6	0	etetetetet

# game plan: use a map as counter for each k-th chunk
# then deduce the min operations based on the total chunks and the maximum frequency chunk
# ie. min operations == total chunks - maximum frequency chunk

class Solution:
    def minimumOperationsToMakeKPeriodic(self, A: str, T: int) -> int:
        m = Counter()
        for i in range(0, len(A) - T + 1, T):
            m[A[i:i + T]] += 1
        return len(A) // T - max(m.values())
        
        
        
        
        
        
```