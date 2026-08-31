# [Java/C++/Python] Binary Search

**Author:** lee215
**Votes:** 152
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2493409/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2493409/)

---

# **Explanation**
1. Sort input `A`, since we care the `sum` and doesn't care the order.
2. Calukate the prefix sum of `A`, since we want to know the accumulate sum.
3. Binary seach each query `q` in `query`, and the index is the result.
4. return result `res`.
<br>

# **Complexity**
Time `O(mlogn + n)`
Space `O(n)`
`n = A.size(), m = queries.size()`
<br>


**Java**
```java
    public int[] answerQueries(int[] A, int[] queries) {
        Arrays.sort(A);
        int n = A.length, m = queries.length, res[] = new int[m];
        for (int i = 1; i < n; ++i)
            A[i] += A[i - 1];
        for (int i = 0; i < m; ++i) {
            int j = Arrays.binarySearch(A, queries[i]);
            res[i] = Math.abs(j + 1);
        }
        return res;
    }
```
**C++**
```cpp
    vector<int> answerQueries(vector<int> A, vector<int>& queries) {
        sort(A.begin(), A.end());
        vector<int> res;
        for (int i = 1; i < A.size(); ++i)
            A[i] += A[i - 1];
        for (int& q: queries)
            res.push_back(upper_bound(A.begin(), A.end(), q) - A.begin());
        return res;
    }
```

**Python**
```py
    def answerQueries(self, A: List[int], queries: List[int]) -> List[int]:
        A = list(accumulate(sorted(A)))
        return [bisect_right(A, q) for q in queries]
```
