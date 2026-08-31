# [Java/C++/Python] Sort

**Author:** lee215
**Votes:** 64
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083946/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083946/)

---

# **Explanation**
Sort on `A[i][k]`
<br>

# **Complexity**
Time `O(quick sort)`
Space `O(quick sort)`
<br>

**Java**
```java
    public int[][] sortTheStudents(int[][] A, int k) {
        Arrays.sort(A, (a, b) -> b[k] - a[k]);
        return A;
    }
```

**C++**
```cpp
    vector<vector<int>> sortTheStudents(vector<vector<int>>& A, int k) {
        sort(A.begin(), A.end(), [&](auto const & a, auto const & b) {
            return a[k] > b[k];
        });
        return A;
    }
```

**Python**
return new copy
```py
    def sortTheStudents(self, A, k):
        return sorted(A, key=lambda a: -a[k])
```
