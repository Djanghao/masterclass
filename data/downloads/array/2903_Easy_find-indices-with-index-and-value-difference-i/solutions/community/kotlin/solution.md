# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4693068/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4693068/)

---

# Game Plan

Brute-force consider all `i`,`j` index pairs of the input array `A`.

# Implementations

*Kotlin*
```
class Solution {
    fun findIndices(A: IntArray, index: Int, value: Int): IntArray {
        if (index == 0 && value == 0)
            return intArrayOf(0, 0)
        for (i in 0..A.lastIndex)
            for (j in i + 1..A.lastIndex)
                if (index <= Math.abs(i - j) && value <= Math.abs(A[i] - A[j]))
                    return intArrayOf(i, j)
        return intArrayOf(-1, -1)
    }
}
```

*Javascript*
```
let findIndices = (A, index, value) => !index && !value ? [0, 0] : _.flatten(_.range(0, A.length).map(i => _.range(i + 1, A.length).map(j => index <= Math.abs(i - j) && value <= Math.abs(A[i] - A[j]) ? [i, j] : [-1, -1]))).filter(([i, j]) => !(i == -1 && j == -1)).pop() || [-1, -1];
```

*Python3*
```
class Solution:
    findIndices = lambda self, A, index, value: [0, 0] if not index and not value else ([[-1, -1]] + [[i, j] for i in range(len(A)) for j in range(i + 1, len(A))if index <= abs(i - j) and value <= abs(A[i] - A[j])]).pop()
```

*Rust*
```
type VI = Vec<i32>;
impl Solution {
    pub fn find_indices(A: VI, index: i32, value: i32) -> VI {
        if index == 0 && value == 0 {
            return vec![0, 0];
        }
        for i in 0..A.len() {
            for j in i + 1..A.len() {
                if index <= (i as i32 - j as i32).abs() && value <= (A[i] - A[j]).abs() {
                    return vec![i as i32, j as i32];
                }
            }
        }
        vec![-1, -1]
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    VI findIndices(VI& A, int index, int value) {
        if (!index && !value)
            return {0, 0};
        for (auto i{ 0 }; i < A.size(); ++i)
            for (auto j{ i + 1 }; j < A.size(); ++j)
                if (index <= abs(i - j) && value <= abs(A[i] - A[j]))
                    return {i, j};
        return {-1, -1};
    }
};
```

# Supplemental: \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF
```
# class Solution:
#     def findIndices(self, A: List[int], index: int, value: int) -> List[int]:
#         if not index and not value:
#             return [0, 0]
#         for i in range(len(A)):
#             for j in range(i + 1, len(A)):
#                 if index <= abs(i - j) and value <= abs(A[i] - A[j]):
#                     return [i, j]
#         return [-1, -1]

# class Solution:
#     def findIndices(self, A: List[int], index: int, value: int) -> List[int]:
#         if not index and not value:
#             return [0, 0]
#         return ([[-1, -1]] + [[i, j] for i in range(len(A)) for j in range(i + 1, len(A))if index <= abs(i - j) and value <= abs(A[i] - A[j])]).pop()

# class Solution:
#     def findIndices(self, A: List[int], index: int, value: int) -> List[int]:
#         return [0, 0] if not index and not value else ([[-1, -1]] + [[i, j] for i in range(len(A)) for j in range(i + 1, len(A))if index <= abs(i - j) and value <= abs(A[i] - A[j])]).pop()

class Solution:
    findIndices = lambda self, A, index, value: [0, 0] if not index and not value else ([[-1, -1]] + [[i, j] for i in range(len(A)) for j in range(i + 1, len(A))if index <= abs(i - j) and value <= abs(A[i] - A[j])]).pop()

```