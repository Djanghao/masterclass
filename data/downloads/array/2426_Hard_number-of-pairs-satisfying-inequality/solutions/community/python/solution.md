# [Python] Reverse Pairs

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646606/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646606/)

---

# **Intuition**
`A[i] - A[j] <= B[i] - B[j] + diff`
`A[i] - B[i] <= A[j] - B[j] + diff`

Define `C[i] = A[i] - B[i]`,
we need to find the number of pair in sequence C,
that `C[i] <= C[j] + diff`.

Classical reverse pair question,
reference 493. Reverse Pairs.

Usually solved by
solution 1: binary search tree
solution 2: merge sort
solution 3: this one
<br>

# **Explanation**
Iterate sequences `a = A[j]` and `b = B[j]`,
Binary search the position `a - b + diff` in a sorted list `l`.

The position index is the number of `C[i]`
that `C[i] <= C[j] + diff`.

Add this value to result `res`,
and then add `a - b` to the sorted list `l`.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Python3**
```py
    def numberOfPairs(self, A, B, diff):
        l = SortedList()
        res = 0
        for a,b in zip(A, B):
            res += l.bisect_right(a - b + diff)
            l.add(a - b)
        return res
```
