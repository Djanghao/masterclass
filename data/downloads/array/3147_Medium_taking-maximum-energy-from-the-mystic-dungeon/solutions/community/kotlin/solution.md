# 🎨  The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 3
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5149354/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5149354/)

---

# Game Plan

[\uD83C\uDFA8  The ART of Dynamic Programming:](https://leetcode.com/discuss/general-discussion/712010/The-ART-of-Dynamic-Programming-An-Intuitive-Approach%3A-from-Apprentice-to-Master) Accumulate the totals in-place within the input array `A` by performing a linear scan from right-to-left to accumulate `A[i] += A[i + K]`, then return `max(A)`.

# Code

*Kotlin*
```
class Solution {
    fun maximumEnergy(A: IntArray, K: Int): Int {
        for (i in A.lastIndex - K downTo 0)
            A[i] += A[i + K]
        return A.max()
    }
}
```

*Javascript*
```
let maximumEnergy = (A, K) => {
    for (let i = A.length - 1 - K; 0 <= i; --i)
        A[i] += A[i + K];
    return Math.max(...A);
};
```

*Python3*
```
class Solution:
    def maximumEnergy(self, A: List[int], K: int) -> int:
        for i in reversed(range(len(A) - K)):
            A[i] += A[i + K]
        return max(A)
```

*Rust*
```
impl Solution {
    pub fn maximum_energy(mut A: Vec<i32>, K: i32) -> i32 {
        let K = K as usize;
        for i in (0..A.len() - K).rev() {
            A[i] += A[i + K];
        }
        A.into_iter().max().unwrap()
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    int maximumEnergy(VI& A, int K) {
        for (auto i{ static_cast<int>(A.size()) - 1 - K }; 0 <= i; --i)
            A[i] += A[i + K];
        return *max_element(A.begin(), A.end());
    }
};
```

# "Breadcrumbs" for how we arrived "here"
```
# 11:07am - accumulate sums via linear scan, recurrence relation is dp[i] += dp[i - k]

# 11:08am - implementation begins

# 11:10am - implementation ends - wrong answer

# Case 1
# Input
# energy =
# [5,2,-10,-5,1]
# k =
# 3
# Output
# 1
# Expected
# 3

# class Solution:
#     def maximumEnergy(self, A: List[int], K: int) -> int:
#         for i in range(K, len(A) - K):
#             A[i] += A[i - K]
#         return max(A[K:])

# class Solution:
    # def maximumEnergy(self, A: List[int], K: int) -> int:
    #     for i in range(K, len(A)):
    #         A[i] += A[i - K]
    #     print(A)
    #     return max(A[K:])

# Case 2
# Input
# energy =
# [-2,-3,-1]
# k =
# 2
# Stdout
# [-2, -3, -3]
# Output
# -3
# Expected
# -1

# 11:13am - wrong answer

# class Solution:
#     def maximumEnergy(self, A: List[int], K: int) -> int:
#         best = max(A[K:])
#         for i in range(K, len(A)):
#             A[i] += A[i - K]
#         return max(best, *A[K:])

# Wrong Answer
# 310 / 533 testcases passed
# Input
# energy =
# [1,-3,10,7]
# k =
# 1

# Use Testcase
# Output
# 15
# Expected
# 17

# oh, from right-to-left then makes life easier...

class Solution:
    def maximumEnergy(self, A: List[int], K: int) -> int:
        for i in reversed(range(len(A) - K)):
            A[i] += A[i + K]
        return max(A)
```