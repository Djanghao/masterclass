# [Java/C++/Python] One Pass, Easy Greedy

**Author:** lee215
**Votes:** 66
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753394/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753394/)

---

# **Intuition**
`(j - i) * A[i]`
same to add `A[i]` for each step.

So the stradgy is greedy,
jump when `A[i] < A[j]`.
<br>

# **Explanation**
For each step,
we increment `res += ma`,
where `ma` is the max `A[i]` up to now.
then we update `ma = max(ma, a)`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long findMaximumScore(List<Integer> A) {
        long res = 0, ma = 0;
        for (int a: A) {
            res += ma;
            ma = Math.max(ma, a);
        }
        return res;
    }
```

**C++**
```cpp
    long long findMaximumScore(vector<int>& A) {
        long long res = 0;
        int ma = 0;
        for (int a: A) {
            res += ma;
            ma = max(ma, a);
        }
        return res;
    }
```
**C++, version 2**
```cpp
    long long findMaximumScore(vector<int>& A) {
        long long res = 0;
        for (int i = 0, ma = 0; i < A.size() - 1; ++i)
            res += ma = max(ma, A[i]);
        return res;
    }
```

**Python**
```py
    def findMaximumScore(self, A: List[int]) -> int:
        res = ma = 0
        for a in A:
            res += ma
            ma = max(ma, a)
        return res
```


**Python 1-line**
```py
    return sum(accumulate(A[:-1], max))
```
