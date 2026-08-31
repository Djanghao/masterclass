# (Python O(n) T & O(1) S) easy to understand with explanation.

**Author:** stoneIII
**Votes:** 28
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/319267/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/319267/)

---

The idea: 
Getting odd numbers on odd indices, after which, even numbers would also stand right positions;
**i** as even index starts from 0 (2, 4, 6...), **j** as odd index starts from 1 (3, 5, 7...)

A half of A is odd, so the length of A - **L**  so 2|L, also means **L - 1** is odd;

Judging every number on odd indices if it is odd, if it is, it stands at a right position, then j = j + 2 (jumping to next odd index), and 'i' keep the same. 
Otherwise, exchanging the values between index j and i,  then index 'i'  has a right value and can point to next even position i = i + 2, but we don't know the original value on i is odd, so j keep unchanged.

After processing all odd indices, we get the result we want.
```
class Solution(object):
    def sortArrayByParityII(self, A):
        i, j, L = 0, 1, len(A)              # i - even index, j - odd index, L - length of A
        while j < L:                          # (L - 1) is odd, j can reach the last element, so this condition is enough
            if A[j] % 2 == 0:              # judge if the value on odd indices is odd
                A[j], A[i] = A[i], A[j]     # if it is even, exchange the values between index j and i
                i += 2                         # even indices get a right value, then i pointer jump to next even index
            else:
                j += 2                         # if it is odd, odd indices get a right value, then j pointer jump to next odd index
        return A
```