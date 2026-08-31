# [Java/C++/Python] K Largest A[i] - B[i]

**Author:** lee215
**Votes:** 74
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3368322/](https://leetcode.com/problems/mice-and-cheese/solutions/3368322/)

---

# **Explanation**
Assume take all from the second array.
Check the difference sequence:
`A[0] - B[0], A[1] - B[1], ...`

Take `k` largest from the sequence and sum up.

Return the `res = sum(B) + sum(k largest A[i]-B[i])`
<br>

# **Complexity**
Java uses sort
Time `O(nlog)` Space `O(n)`

Python uses heap
Time `O(klogk)` Space `O(k)`

C++ uses quick select would be
Time `O(n)` Space `O(n)`
<br>


**Java**
```java
    public int miceAndCheese(int[] A, int[] B, int k) {
        int res = 0, n = A.length, diff[] = new int[n];
        for (int i = 0; i < n; i++) {
            diff[i] = A[i] - B[i];
            res += B[i];
        }
        Arrays.sort(diff);
        for (int i = 0; i < k; i++)
            res += diff[n - 1 - i];
        return res;
    }
```
**C++**
```cpp
    int miceAndCheese(vector<int> A, vector<int>& B, int k) {
        int n = A.size(), res = 0;
        for (int i = 0; i < n; ++i) {
            A[i] -= B[i];
            res += B[i];
        }
        nth_element(A.begin(), A.begin() + k, A.end(), greater<int>());
        return accumulate(A.begin(), A.begin() + k, res);
    }
```
**Python**
```py
    def miceAndCheese(self, A: List[int], B: List[int], k: int) -> int:
        return sum(B) + sum(nlargest(k, (a - b for a, b in zip(A, B))))
```
