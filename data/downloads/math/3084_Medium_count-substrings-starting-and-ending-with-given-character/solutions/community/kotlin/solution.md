# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5041592/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5041592/)

---

# Game Plan

# Code

*Kotlin*
```
class Solution {
    fun countSubstrings(A: String, T: Char): Long {
        var m = A.groupingBy{ it }.eachCount()
        var n = (m[T] ?: 0).toLong()
        return n * (n + 1) / 2
    }
}
```

*Javascript*
```
let countSubstrings = (A, T, m = new Map(Object.entries(_.countBy(A.split('')))), n = m.get(T) || 0) => Math.floor(n * (n + 1) / 2);
```

*Python3*
```
class Solution:
    countSubstrings = lambda self, A, T: Counter(A)[T] * (Counter(A)[T] + 1) // 2
```

*Rust*
```
impl Solution {
    pub fn count_substrings(A: String, T: char) -> i64 {
        let n = A.chars().filter(|c| *c == T).collect::<Vec<char>>().len() as i64;
        n * (n + 1) / 2
    }
}
```

*C++*
```
class Solution {
public:
    using LL = long long;
    LL countSubstrings(string A, char T) {
        auto n = count_if(A.begin(), A.end(), [T](auto c) { return T == c; });
        return n * (n + 1) / 2;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF
```
# game plan:

# preprocess input for each i-th index we track count of 26 chars a..z inclusive

# the count at each i-th index where s[i] == target c is then 1 + count-to-the-left

# 6:50am - implementation begins

# class Solution:
#     def countSubstrings(self, A: str, T: str, t = 0) -> int:
#         N = len(A)
#         cnt = [0] * N
#         for i in range(N):
#             cnt[i] += cnt[i - 1] + int(A[i] == T)
#         for i in range(N):
#             if A[i] == T:
#                 t += 1 + (cnt[i - 1] if 0 <= i - 1 else 0)
#         return t

# class Solution:
#     def countSubstrings(self, A: str, T: str, t = 0) -> int:
#         N = len(A)
#         cnt = [0] * N
#         for i in range(N):
#             cnt[i] += (cnt[i - 1] if 0 <= i - 1 else 0) + int(A[i] == T)
#             if A[i] == T:
#                 t += 1 + (cnt[i - 1] if 0 <= i - 1 else 0)
#         return t

# class Solution:
#     def countSubstrings(self, A: str, T: str) -> int:
#         m = Counter(A)
#         n = m[T]
#         return n * (n + 1) // 2

class Solution:
    countSubstrings = lambda self, A, T: Counter(A)[T] * (Counter(A)[T] + 1) // 2
```